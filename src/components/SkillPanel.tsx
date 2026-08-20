import React, { useState, useMemo } from 'react';
import { useCharacterStore } from '../store';
import { TRANSLATIONS } from '../i18n';
import { SKILLS, ExtendedSkillDef } from '../data/skillsData';
import { ADVANTAGES, DISADVANTAGES, ExtendedTraitDef } from '../data/traitsData';
import { PATHWAYS } from '../data/pathwaysData';
import { getSkillLevelFromPoints } from '../utils';
import { useCorruptionMetrics } from '../utils/corruption';

export default function SkillPanel() {
  const { 
    lang, skills, setSkillPoints, removeSkill, 
    advantages, addAdvantage, removeAdvantage, setAdvantageLevel,
    disadvantages, addDisadvantage, removeDisadvantage, setDisadvantageLevel,
    quirks, addQuirk, removeQuirk,
    ST, DX, IQ, HT, pathwayId, sequenceLevel, setViewerData
  } = useCharacterStore();
  const t = TRANSLATIONS[lang];
  const { textAccentClass, isLostControl } = useCorruptionMetrics();

  const [selectedSkill, setSelectedSkill] = useState('');
  const [selectedAdv, setSelectedAdv] = useState('');
  const [selectedDisadv, setSelectedDisadv] = useState('');
  const [quirkName, setQuirkName] = useState('');
  const [quirkCost, setQuirkCost] = useState<number>(-1);

  const [skillSearch, setSkillSearch] = useState('');
  const [advSearch, setAdvSearch] = useState('');
  const [disadvSearch, setDisadvSearch] = useState('');

  const currentPathway = PATHWAYS.find(p => p.id === pathwayId);

  const usIdMatcher = (item: any, id: string) => item.id === id;

  // Get total stat bonuses
  const statBonuses = useMemo(() => {
    const bonuses: Record<string, number> = { ST: 0, DX: 0, IQ: 0, HT: 0, Per: 0, Will: 0, SPI: 0, BasicSpeed: 0, HP: 0, FP: 0 };
    if (!pathwayId || !sequenceLevel) return bonuses;
    for (let seq = 9; seq >= sequenceLevel; seq--) {
      const seqData = currentPathway?.sequences.find(s => s.level === seq);
      if (seqData) {
        seqData.statBonuses.forEach(b => {
          bonuses[b.stat] = (bonuses[b.stat] || 0) + b.bonus;
        });
      }
    }
    return bonuses;
  }, [pathwayId, sequenceLevel, currentPathway]);

  const finalAttrs: Record<string, number> = {
    ST: ST + (statBonuses.ST || 0),
    DX: DX + (statBonuses.DX || 0),
    IQ: IQ + (statBonuses.IQ || 0),
    HT: HT + (statBonuses.HT || 0),
    Per: IQ + (statBonuses.Per || 0),
    Will: IQ + (statBonuses.Will || 0),
    SPI: statBonuses.SPI || 0
  };

  const getPotionBonus = (skillId: string) => {
    if (!pathwayId || !sequenceLevel) return 0;
    let bonus = 0;
    for (let seq = 9; seq >= sequenceLevel; seq--) {
      const seqData = currentPathway?.sequences.find(s => s.level === seq);
      if (seqData) {
        const sb = seqData.skillBonuses.find(b => b.skillId === skillId);
        if (sb) bonus += sb.bonus;
      }
    }
    return bonus;
  };

  const handleAddSkill = () => {
    if (selectedSkill && !skills.find(s => s.id === selectedSkill)) {
      setSkillPoints(selectedSkill, 1);
      setSelectedSkill('');
    }
  };

  // Grouped Advantages by Category
  const groupedAdvantages = useMemo(() => {
    const map = new Map<string, ExtendedTraitDef[]>();
    ADVANTAGES.forEach(adv => {
      if (advantages.some(ua => ua.id === adv.id)) return;
      if (advSearch && !adv.name[lang].toLowerCase().includes(advSearch.toLowerCase())) return;
      const cat = adv.category || 'General';
      if (!map.has(cat)) map.set(cat, []);
      map.get(cat)!.push(adv);
    });
    return map;
  }, [advantages, advSearch, lang]);

  // Grouped Disadvantages by Category
  const groupedDisadvantages = useMemo(() => {
    const map = new Map<string, ExtendedTraitDef[]>();
    DISADVANTAGES.forEach(dis => {
      if (disadvantages.some(ud => ud.id === dis.id)) return;
      if (disadvSearch && !dis.name[lang].toLowerCase().includes(disadvSearch.toLowerCase())) return;
      const cat = dis.category || 'General';
      if (!map.has(cat)) map.set(cat, []);
      map.get(cat)!.push(dis);
    });
    return map;
  }, [disadvantages, disadvSearch, lang]);

  // Grouped Skills by Category
  const groupedSkills = useMemo(() => {
    const map = new Map<string, ExtendedSkillDef[]>();
    SKILLS.forEach(sk => {
      if (skills.some(us => us.id === sk.id)) return;
      if (skillSearch && !sk.name[lang].toLowerCase().includes(skillSearch.toLowerCase())) return;
      const cat = sk.category || 'General';
      if (!map.has(cat)) map.set(cat, []);
      map.get(cat)!.push(sk);
    });
    return map;
  }, [skills, skillSearch, lang]);

  const potionSkills: string[] = [];
  if (pathwayId && sequenceLevel && currentPathway) {
    for (let seq = 9; seq >= sequenceLevel; seq--) {
      const seqData = currentPathway.sequences.find(s => s.level === seq);
      if (seqData) {
        seqData.skillBonuses.forEach(b => {
          if (!potionSkills.includes(b.skillId)) potionSkills.push(b.skillId);
        });
      }
    }
  }

  const allSkillsToDisplay = [...skills];
  potionSkills.forEach(psId => {
    if (!allSkillsToDisplay.find(s => s.id === psId)) {
      allSkillsToDisplay.push({ id: psId, points: 0 });
    }
  });

  return (
    <div className="flex flex-col gap-3 obfuscate-zone">
      
      {/* ADVANTAGES & DISADVANTAGES */}
      <section className={`bg-[#111] border border-[#333] rounded-md flex flex-col overflow-hidden shrink-0 ${isLostControl ? 'eldritch-illegible-panel eldritch-container-distortion' : ''}`}>
        <div className={`bg-[#1a1a1a] px-3 py-2 border-b border-[#333] text-[11px] font-bold uppercase ${textAccentClass} transition-colors duration-500`}>
          {t.advantages} & {t.disadvantages}
        </div>
        
        <div className="p-2.5 flex flex-col gap-3">
          {/* Add Advantage */}
          <div>
            <div className="flex gap-1 mb-1.5">
              <select 
                value={selectedAdv} 
                data-info-target="true"
                onChange={e => {
                  const val = e.target.value;
                  setSelectedAdv(val);
                  if (val) {
                    const def = ADVANTAGES.find(a => a.id === val);
                    if (def) setViewerData({ title: def.name[lang], desc: def.description[lang], extra: `Cost: ${def.cost} pts${def.hasLevels ? '/lvl' : ''}`, type: 'passive' });
                  }
                }} 
                className="flex-1 min-w-0 w-full bg-[#222] border border-[#444] text-[#ddd] rounded p-1 text-[11px] outline-none cursor-pointer truncate"
              >
                <option value="">-- {t.addAdvantage} ({ADVANTAGES.length}) --</option>
                {Array.from(groupedAdvantages.entries()).map(([cat, list]) => (
                  <optgroup key={cat} label={cat}>
                    {list.map(a => (
                      <option key={a.id} value={a.id}>{a.name[lang]} ({a.cost} pts)</option>
                    ))}
                  </optgroup>
                ))}
              </select>
              <button 
                onClick={() => { if(selectedAdv) { addAdvantage(selectedAdv); setSelectedAdv(''); } }} 
                className="shrink-0 px-2.5 bg-[#222] text-yellow-500 border border-[#444] rounded hover:bg-[#333] font-bold cursor-pointer"
              >
                +
              </button>
            </div>

            {/* Active Advantages */}
            <div className="space-y-1">
              {advantages.map(tData => {
                const def = ADVANTAGES.find(a => a.id === tData.id);
                if(!def) return null;
                return (
                  <div key={tData.id} data-info-target="true" className="flex justify-between items-center text-[11px] p-1.5 bg-[#181818] rounded cursor-pointer hover:bg-[#222] transition-colors" onClick={() => setViewerData({title: def.name[lang], desc: def.description[lang], extra: `Cost: ${def.cost} pts${def.hasLevels ? '/lvl' : ''}`})}>
                    <span className="text-[#e5e5e5] flex-1">{def.name[lang]}</span>
                    {def.hasLevels && (
                      <div className="flex items-center gap-1 mx-2 bg-[#222] border border-[#444] rounded px-1">
                        <button onClick={() => setAdvantageLevel(tData.id, tData.level - 1)} disabled={tData.level <= 1} className="text-yellow-500 hover:text-white disabled:opacity-50">-</button>
                        <span className="text-[#aaa] w-3 text-center">{tData.level}</span>
                        <button onClick={() => setAdvantageLevel(tData.id, tData.level + 1)} disabled={def.maxLevel ? tData.level >= def.maxLevel : false} className="text-yellow-500 hover:text-white disabled:opacity-50">+</button>
                      </div>
                    )}
                    <div className="flex gap-2 items-center w-10 justify-end">
                      <span className="text-yellow-500 font-mono">{def.cost * tData.level}</span>
                      <button onClick={() => removeAdvantage(tData.id)} className="text-red-500 hover:text-red-400 font-bold text-lg leading-none cursor-pointer">×</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Add Disadvantage */}
          <div>
            <div className="flex gap-1 mb-1.5">
              <select 
                value={selectedDisadv} 
                data-info-target="true"
                onChange={e => {
                  const val = e.target.value;
                  setSelectedDisadv(val);
                  if (val) {
                    const def = DISADVANTAGES.find(d => d.id === val);
                    if (def) setViewerData({ title: def.name[lang], desc: def.description[lang], extra: `Cost: ${def.cost} pts${def.hasLevels ? '/lvl' : ''}`, type: 'drawback' });
                  }
                }} 
                className="flex-1 min-w-0 w-full bg-[#222] border border-[#444] text-[#ddd] rounded p-1 text-[11px] outline-none cursor-pointer truncate"
              >
                <option value="">-- {t.addDisadvantage} ({DISADVANTAGES.length}) --</option>
                {Array.from(groupedDisadvantages.entries()).map(([cat, list]) => (
                  <optgroup key={cat} label={cat}>
                    {list.map(d => (
                      <option key={d.id} value={d.id}>{d.name[lang]} ({d.cost} pts)</option>
                    ))}
                  </optgroup>
                ))}
              </select>
              <button 
                onClick={() => { if(selectedDisadv) { addDisadvantage(selectedDisadv); setSelectedDisadv(''); } }} 
                className="shrink-0 px-2.5 bg-[#222] text-yellow-500 border border-[#444] rounded hover:bg-[#333] font-bold cursor-pointer"
              >
                +
              </button>
            </div>

            {/* Active Disadvantages */}
            <div className="space-y-1">
              {disadvantages.map(tData => {
                const def = DISADVANTAGES.find(d => d.id === tData.id);
                if(!def) return null;
                return (
                  <div key={tData.id} data-info-target="true" className="flex justify-between items-center text-[11px] p-1.5 bg-[#181818] rounded border-l-4 border-red-500 cursor-pointer hover:bg-[#222] transition-colors" onClick={() => setViewerData({title: def.name[lang], desc: def.description[lang], extra: `Cost: ${def.cost} pts${def.hasLevels ? '/lvl' : ''}`, type: 'drawback'})}>
                    <span className="text-[#e5e5e5] flex-1">{def.name[lang]}</span>
                    {def.hasLevels && (
                      <div className="flex items-center gap-1 mx-2 bg-[#222] border border-[#444] rounded px-1">
                        <button onClick={() => setDisadvantageLevel(tData.id, tData.level - 1)} disabled={tData.level <= 1} className="text-yellow-500 hover:text-white disabled:opacity-50">-</button>
                        <span className="text-[#aaa] w-3 text-center">{tData.level}</span>
                        <button onClick={() => setDisadvantageLevel(tData.id, tData.level + 1)} disabled={def.maxLevel ? tData.level >= def.maxLevel : false} className="text-yellow-500 hover:text-white disabled:opacity-50">+</button>
                      </div>
                    )}
                    <div className="flex gap-2 items-center w-10 justify-end">
                      <span className="text-red-400 font-mono">{def.cost * tData.level}</span>
                      <button onClick={() => removeDisadvantage(tData.id)} className="text-red-500 hover:text-red-400 font-bold text-lg leading-none cursor-pointer">×</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Custom Quirks */}
          <div className="flex flex-col gap-1.5 mt-2">
            <div className="flex items-center justify-between border-t border-[#222] pt-2">
              <span className="text-[11px] text-[#aaa]">{t.quirks}</span>
            </div>
            <div className="flex gap-1 mb-1.5">
              <input 
                type="text" 
                data-info-target="true"
                value={quirkName} 
                onChange={e => setQuirkName(e.target.value)}
                onFocus={() => {
                  setViewerData({
                    title: t.quirks, 
                    desc: lang === 'en' ? 'Custom trait, perk, or quirk. Positive cost = Advantage (spend points), Negative cost = Disadvantage (gain points).' : 'Rasgo personalizado, ventaja menor o peculiaridad. Costo positivo = Ventaja (gastas puntos), Costo negativo = Desventaja (ganas puntos).',
                    type: 'drawback'
                  });
                }}
                placeholder={lang === 'en' ? 'Custom Trait / Quirk...' : 'Rasgo / Quirk...'} 
                className="flex-1 min-w-0 w-full bg-[#222] border border-[#444] text-[#ddd] rounded p-1 text-[11px] outline-none truncate"
                onKeyDown={e => {
                  if (e.key === 'Enter' && quirkName) {
                    addQuirk({ name: quirkName, cost: quirkCost });
                    setQuirkName('');
                    setQuirkCost(-1);
                  }
                }}
              />
              <input 
                type="number" 
                value={quirkCost} 
                onChange={e => setQuirkCost(parseInt(e.target.value) || 0)}
                className="w-12 bg-[#222] border border-[#444] text-[#ddd] rounded p-1 text-[11px] outline-none text-center font-mono"
                title={lang === 'en' ? 'Cost (Points)' : 'Costo (Puntos)'}
              />
              <button onClick={() => { if(quirkName) { addQuirk({ name: quirkName, cost: quirkCost }); setQuirkName(''); setQuirkCost(-1); } }} className="shrink-0 px-2.5 bg-[#222] text-yellow-500 border border-[#444] rounded hover:bg-[#333] font-bold cursor-pointer">+</button>
            </div>
            <div className="space-y-1">
              {quirks.map((q, i) => (
                <div key={i} data-info-target="true" className="flex justify-between items-center text-[11px] p-1.5 bg-[#181818] rounded border-l-4 border-yellow-700 cursor-pointer hover:bg-[#222] transition-colors" onClick={() => setViewerData({title: q.name, desc: 'Custom quirk/trait.', type: 'drawback'})}>
                  <span className="text-[#e5e5e5] truncate mr-2">{q.name}</span>
                  <div className="flex gap-2 items-center">
                    <span className={q.cost > 0 ? "text-yellow-500 whitespace-nowrap font-mono" : "text-red-400 whitespace-nowrap font-mono"}>{q.cost} pts</span>
                    <button onClick={() => removeQuirk(i)} className="text-red-500 hover:text-red-400 font-bold text-lg leading-none cursor-pointer">×</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className={`bg-[#111] border border-[#333] rounded-md flex flex-col overflow-hidden shrink-0 ${isLostControl ? 'eldritch-illegible-panel eldritch-container-distortion' : ''}`}>
        <div className={`bg-[#1a1a1a] px-3 py-2 border-b border-[#333] text-[11px] font-bold uppercase ${textAccentClass} transition-colors duration-500`}>
          {t.skills} ({SKILLS.length} {lang === 'es' ? 'en base de datos' : 'in database'})
        </div>
        
        <div className="p-2.5 flex flex-col gap-2">
          {/* Add Skill Dropdown */}
          <div className="flex gap-1 mb-1">
            <select 
              value={selectedSkill} 
              data-info-target="true"
              onChange={e => {
                const val = e.target.value;
                setSelectedSkill(val);
                if (val) {
                  const def = SKILLS.find(s => s.id === val);
                  if (def) setViewerData({ title: def.name[lang], desc: `${def.description[lang]}\n\n${def.attr}/${def.difficulty}`, type: 'skill' });
                }
              }} 
              className="flex-1 min-w-0 w-full bg-[#222] border border-[#444] text-[#ddd] rounded p-1 text-[11px] outline-none cursor-pointer truncate"
            >
              <option value="">-- {t.addSkill} ({SKILLS.length}) --</option>
              {Array.from(groupedSkills.entries()).map(([cat, list]) => (
                <optgroup key={cat} label={cat}>
                  {list.map(s => (
                    <option key={s.id} value={s.id}>{s.name[lang]} ({s.attr}/{s.difficulty})</option>
                  ))}
                </optgroup>
              ))}
            </select>
            <button onClick={handleAddSkill} className="shrink-0 px-2.5 bg-[#222] text-yellow-500 border border-[#444] rounded hover:bg-[#333] font-bold cursor-pointer">+</button>
          </div>

          {/* Active Skills List */}
          <div className="flex flex-col gap-1">
            {allSkillsToDisplay.map(s => {
              const def = SKILLS.find(sd => sd.id === s.id);
              if (!def) return null;
              const attrVal = finalAttrs[def.attr] || 10;
              const baseLevel = getSkillLevelFromPoints(attrVal, def.difficulty, s.points);
              const potionBonus = getPotionBonus(s.id);
              
              let finalLevel: number | string = baseLevel;
              if (potionBonus > 0) {
                  const baseToUse = baseLevel === -999 ? attrVal : Math.max(baseLevel, attrVal);
                  finalLevel = baseToUse + potionBonus;
              } else if (baseLevel === -999) {
                  finalLevel = "-";
              }

              const isGifted = potionBonus > 0;

              return (
                <div 
                  key={s.id} 
                  data-info-target="true"
                  className={`border-l-4 p-1.5 bg-[#181818] flex justify-between items-center cursor-pointer transition-colors hover:bg-[#222] ${isGifted ? 'border-green-500' : 'border-[#444]'}`}
                  onClick={() => setViewerData({
                    title: def.name[lang], 
                    desc: `${def.description[lang]}\n\n${def.attr}/${def.difficulty}\nBase Attr (${def.attr}): ${attrVal}\nPotion Bonus: +${potionBonus}`, 
                    type: 'skill',
                    rollTarget: typeof finalLevel === 'number' ? finalLevel : undefined
                  })}
                >
                  <div className="flex flex-col pr-1">
                    <span className="text-[12px] font-bold text-[#e5e5e5]">{def.name[lang]} <span className="text-[10px] font-normal text-[#aaa]">({def.attr}/{def.difficulty})</span> {isGifted && <span className="text-[10px] text-green-400 font-bold ml-1">(+{potionBonus} {lang === "es" ? "Poción" : "Potion"})</span>}</span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <select 
                      value={s.points} 
                      onChange={e => setSkillPoints(s.id, parseInt(e.target.value))}
                      className="bg-[#222] border border-[#444] text-[#ddd] rounded p-0.5 text-[11px] outline-none cursor-pointer"
                    >
                      {[0, 1, 2, 4, 8, 16, 32].map(pts => <option key={pts} value={pts}>{pts} pts</option>)}
                    </select>
                    <span className="font-mono text-[14px] font-bold text-yellow-500 w-5 text-right">{finalLevel}</span>
                    <button onClick={() => removeSkill(s.id)} className="text-red-500 text-lg leading-none hover:text-red-400 cursor-pointer">×</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
