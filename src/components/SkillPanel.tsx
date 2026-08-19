import React, { useState } from 'react';
import { useCharacterStore } from '../store';
import { TRANSLATIONS } from '../i18n';
import { SKILLS } from '../data/skillsData';
import { ADVANTAGES, DISADVANTAGES } from '../data/traitsData';
import { PATHWAYS } from '../data/pathwaysData';
import { getSkillLevelFromPoints } from '../utils';

export default function SkillPanel() {
  const { 
    lang, skills, setSkillPoints, removeSkill, 
    advantages, addAdvantage, removeAdvantage, setAdvantageLevel,
    disadvantages, addDisadvantage, removeDisadvantage, setDisadvantageLevel,
    quirks, addQuirk, removeQuirk,
    ST, DX, IQ, HT, pathwayId, sequenceLevel, setViewerData
  } = useCharacterStore();
  const t = TRANSLATIONS[lang];

  const [selectedSkill, setSelectedSkill] = useState('');
  const [selectedAdv, setSelectedAdv] = useState('');
  const [selectedDisadv, setSelectedDisadv] = useState('');
  const [quirkName, setQuirkName] = useState('');
  const [quirkCost, setQuirkCost] = useState<number>(-1);

  const currentPathway = PATHWAYS.find(p => p.id === pathwayId);

  const usIdMatcher = (item: any, id: string) => item.id === id;

  // Get total stat bonuses
  const statBonuses = React.useMemo(() => {
    const bonuses: Record<string, number> = { ST: 0, DX: 0, IQ: 0, HT: 0, Per: 0, Will: 0, SPI: 0, BasicSpeed: 0, HP: 0, FP: 0 };
    if (!pathwayId || !sequenceLevel) return bonuses;
    for (let seq = 9; seq >= sequenceLevel; seq--) {
      const seqData = currentPathway?.sequences.find(s => s.level === seq);
      if (seqData) {
        seqData.statBonuses.forEach(b => {
          bonuses[b.stat] += b.bonus;
        });
      }
    }
    return bonuses;
  }, [pathwayId, sequenceLevel, currentPathway]);

  const finalAttrs: Record<string, number> = {
    ST: ST + statBonuses.ST,
    DX: DX + statBonuses.DX,
    IQ: IQ + statBonuses.IQ,
    HT: HT + statBonuses.HT,
    Per: IQ + statBonuses.Per,
    Will: IQ + statBonuses.Will,
    SPI: statBonuses.SPI
  };

  const getPotionBonus = (skillId: string) => {
    if (!pathwayId || !sequenceLevel) return 0;
    let bonus = 0;
    for (let seq = 9; seq >= sequenceLevel; seq--) {
      const seqData = currentPathway?.sequences.find(s => s.level === seq);
      if (seqData) {
        const sb = seqData.skillBonuses.find(b => b.skillId === skillId);
        if (sb) bonus += sb.bonus; // Actually, do they stack across sequences? Usually they just take the highest or it's a fixed +N per seq. We'll add them.
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

    <div className="flex flex-col gap-3">
      <section className="bg-[#111] border border-[#333] rounded-md flex flex-col overflow-hidden shrink-0">
        <div className="bg-[#1a1a1a] px-3 py-2 border-b border-[#333] text-[11px] font-bold uppercase text-yellow-500">
          {t.advantages} & {t.disadvantages}
        </div>
        
        <div className="p-2.5 flex flex-col gap-3">
          <div>
            <div className="flex gap-1 mb-1.5">
              <select 
                value={selectedAdv} 
                onChange={e => {
                  const val = e.target.value;
                  setSelectedAdv(val);
                  if (val) {
                    const def = ADVANTAGES.find(a => a.id === val);
                    if (def) setViewerData({ title: def.name[lang], desc: def.description[lang], extra: `Cost: ${def.cost} pts${def.hasLevels ? '/lvl' : ''}`, type: 'passive' });
                  }
                }} 
                className="flex-1 bg-[#222] border border-[#444] text-[#ddd] rounded p-1 text-[11px] outline-none"
              >
                <option value="">-- {t.addAdvantage} --</option>
                {ADVANTAGES.filter(a => !advantages.find(ua => usIdMatcher(ua, a.id))).map(a => (
                  <option key={a.id} value={a.id}>{a.name[lang]} ({a.cost})</option>
                ))}
              </select>
              <button onClick={() => { if(selectedAdv) { addAdvantage(selectedAdv); setSelectedAdv(''); } }} className="px-2 bg-[#222] text-yellow-500 border border-[#444] rounded hover:bg-[#333]">+</button>
            </div>
            <div className="space-y-1">
              {advantages.map(tData => {
                const def = ADVANTAGES.find(a => a.id === tData.id);
                if(!def) return null;
                return (
                  <div key={tData.id} className="flex justify-between items-center text-[11px] p-1.5 bg-[#181818] rounded" onMouseEnter={() => setViewerData({title: def.name[lang], desc: def.description[lang], extra: `Cost: ${def.cost} pts${def.hasLevels ? '/lvl' : ''}`})}>
                    <span className="text-[#e5e5e5] flex-1">{def.name[lang]}</span>
                    {def.hasLevels && (
                      <div className="flex items-center gap-1 mx-2 bg-[#222] border border-[#444] rounded px-1">
                        <button onClick={() => setAdvantageLevel(tData.id, tData.level - 1)} disabled={tData.level <= 1} className="text-yellow-500 hover:text-white disabled:opacity-50">-</button>
                        <span className="text-[#aaa] w-3 text-center">{tData.level}</span>
                        <button onClick={() => setAdvantageLevel(tData.id, tData.level + 1)} disabled={def.maxLevel ? tData.level >= def.maxLevel : false} className="text-yellow-500 hover:text-white disabled:opacity-50">+</button>
                      </div>
                    )}
                    <div className="flex gap-2 items-center w-10 justify-end">
                      <span className="text-yellow-500">{def.cost * tData.level}</span>
                      <button onClick={() => removeAdvantage(tData.id)} className="text-red-500 hover:text-red-400 font-bold text-lg leading-none">×</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <div className="flex gap-1 mb-1.5">
              <select 
                value={selectedDisadv} 
                onChange={e => {
                  const val = e.target.value;
                  setSelectedDisadv(val);
                  if (val) {
                    const def = DISADVANTAGES.find(d => d.id === val);
                    if (def) setViewerData({ title: def.name[lang], desc: def.description[lang], extra: `Cost: ${def.cost} pts${def.hasLevels ? '/lvl' : ''}`, type: 'drawback' });
                  }
                }} 
                className="flex-1 bg-[#222] border border-[#444] text-[#ddd] rounded p-1 text-[11px] outline-none"
              >
                <option value="">-- {t.addDisadvantage} --</option>
                {DISADVANTAGES.filter(d => !disadvantages.find(ud => usIdMatcher(ud, d.id))).map(d => (
                  <option key={d.id} value={d.id}>{d.name[lang]} ({d.cost})</option>
                ))}
              </select>
              <button onClick={() => { if(selectedDisadv) { addDisadvantage(selectedDisadv); setSelectedDisadv(''); } }} className="px-2 bg-[#222] text-yellow-500 border border-[#444] rounded hover:bg-[#333]">+</button>
            </div>
            <div className="space-y-1">
              {disadvantages.map(tData => {
                const def = DISADVANTAGES.find(d => d.id === tData.id);
                if(!def) return null;
                return (
                  <div key={tData.id} className="flex justify-between items-center text-[11px] p-1.5 bg-[#181818] rounded border-l-4 border-red-500" onMouseEnter={() => setViewerData({title: def.name[lang], desc: def.description[lang], extra: `Cost: ${def.cost} pts${def.hasLevels ? '/lvl' : ''}`, type: 'drawback'})}>
                    <span className="text-[#e5e5e5] flex-1">{def.name[lang]}</span>
                    {def.hasLevels && (
                      <div className="flex items-center gap-1 mx-2 bg-[#222] border border-[#444] rounded px-1">
                        <button onClick={() => setDisadvantageLevel(tData.id, tData.level - 1)} disabled={tData.level <= 1} className="text-yellow-500 hover:text-white disabled:opacity-50">-</button>
                        <span className="text-[#aaa] w-3 text-center">{tData.level}</span>
                        <button onClick={() => setDisadvantageLevel(tData.id, tData.level + 1)} disabled={def.maxLevel ? tData.level >= def.maxLevel : false} className="text-yellow-500 hover:text-white disabled:opacity-50">+</button>
                      </div>
                    )}
                    <div className="flex gap-2 items-center w-10 justify-end">
                      <span className="text-red-400">{def.cost * tData.level}</span>
                      <button onClick={() => removeDisadvantage(tData.id)} className="text-red-500 hover:text-red-400 font-bold text-lg leading-none">×</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="flex flex-col gap-1.5 mt-2">
            <div className="flex items-center justify-between border-t border-[#222] pt-2">
              <span className="text-[11px] text-[#aaa]">{t.quirks}</span>
            </div>
            <div className="flex gap-1 mb-1.5">
              <input 
                type="text" 
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
                className="flex-1 bg-[#222] border border-[#444] text-[#ddd] rounded p-1 text-[11px] outline-none"
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
                className="w-12 bg-[#222] border border-[#444] text-[#ddd] rounded p-1 text-[11px] outline-none text-center"
                title={lang === 'en' ? 'Cost (Points)' : 'Costo (Puntos)'}
              />
              <button onClick={() => { if(quirkName) { addQuirk({ name: quirkName, cost: quirkCost }); setQuirkName(''); setQuirkCost(-1); } }} className="px-2 bg-[#222] text-yellow-500 border border-[#444] rounded hover:bg-[#333]">+</button>
            </div>
            <div className="space-y-1">
              {quirks.map((q, i) => (
                <div key={i} className="flex justify-between items-center text-[11px] p-1.5 bg-[#181818] rounded border-l-4 border-yellow-700">
                  <span className="text-[#e5e5e5] truncate mr-2">{q.name}</span>
                  <div className="flex gap-2 items-center">
                    <span className={q.cost > 0 ? "text-yellow-500 whitespace-nowrap" : "text-red-400 whitespace-nowrap"}>{q.cost} pts</span>
                    <button onClick={() => removeQuirk(i)} className="text-red-500 hover:text-red-400 font-bold text-lg leading-none">×</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#111] border border-[#333] rounded-md flex flex-col overflow-hidden shrink-0">
        <div className="bg-[#1a1a1a] px-3 py-2 border-b border-[#333] text-[11px] font-bold uppercase text-yellow-500">
          {t.skills}
        </div>
        
        <div className="p-2.5 flex flex-col gap-2">
          <div className="flex gap-1 mb-1">
            <select 
              value={selectedSkill} 
              onChange={e => {
                const val = e.target.value;
                setSelectedSkill(val);
                if (val) {
                  const def = SKILLS.find(s => s.id === val);
                  if (def) setViewerData({ title: def.name[lang], desc: `${def.description[lang]}\n\n${def.attr}/${def.difficulty}`, type: 'skill' });
                }
              }} 
              className="flex-1 bg-[#222] border border-[#444] text-[#ddd] rounded p-1 text-[11px] outline-none"
            >
              <option value="">-- {t.addSkill} --</option>
              {SKILLS.filter(s => !skills.find(us => us.id === s.id)).map(s => (
                <option key={s.id} value={s.id}>{s.name[lang]} ({s.attr}/{s.difficulty})</option>
              ))}
            </select>
            <button onClick={handleAddSkill} className="px-2 bg-[#222] text-yellow-500 border border-[#444] rounded hover:bg-[#333]">+</button>
          </div>

          <div className="flex flex-col gap-1">
            {allSkillsToDisplay.map(s => {
              const def = SKILLS.find(sd => sd.id === s.id);
              if (!def) return null;
              const attrVal = finalAttrs[def.attr];
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
                  className={`border-l-4 p-1.5 bg-[#181818] flex justify-between items-center cursor-pointer transition-colors hover:bg-[#222] ${isGifted ? 'border-green-500' : 'border-[#444]'}`}
                  onClick={() => setViewerData({
                    title: def.name[lang], 
                    desc: `${def.description[lang]}\n\n${def.attr}/${def.difficulty}\nBase Attr: ${attrVal}\nPotion Bonus: +${potionBonus}`, 
                    type: 'skill',
                    rollTarget: typeof finalLevel === 'number' ? finalLevel : undefined
                  })}
                >
                  <div className="flex flex-col">
                    <span className="text-[12px] font-bold text-[#e5e5e5]">{def.name[lang]} <span className="text-[10px] font-normal text-[#aaa]">({def.attr}/{def.difficulty})</span> {isGifted && <span className="text-[10px] text-green-400 font-bold ml-1">(+{potionBonus} {lang === "es" ? "Poción" : "Potion"})</span>}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <select 
                      value={s.points} 
                      onChange={e => setSkillPoints(s.id, parseInt(e.target.value))}
                      className="bg-[#222] border border-[#444] text-[#ddd] rounded p-0.5 text-[11px] outline-none"
                    >
                      {[0, 1, 2, 4, 8, 16, 32].map(pts => <option key={pts} value={pts}>{pts}</option>)}
                    </select>
                    <span className="font-mono text-[14px] font-bold text-yellow-500 w-5 text-right">{finalLevel}</span>
                    <button onClick={() => removeSkill(s.id)} className="text-red-500 text-lg leading-none hover:text-red-400">×</button>
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
