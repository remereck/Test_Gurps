import React, { useMemo, useState, useRef, useEffect } from 'react';
import { useCharacterStore } from '../store';
import { TRANSLATIONS } from '../i18n';
import { PATHWAYS } from '../data/pathwaysData';
import { SEQUENCE_TITLES } from '../data/sequenceTitles';
import { sanitize } from '../utils';
import { useCorruptionMetrics } from '../utils/corruption';
import { ChevronDown, Check } from 'lucide-react';

function renderTextWithHighlights(text: string) {
  if (!text) return null;
  const parts = text.split(/(\{\{.*?\}\})/g);
  return parts.map((part, i) => {
    if (part.startsWith('{{') && part.endsWith('}}')) {
      return <span key={i} className="text-blue-400 font-semibold inline">{part.slice(2, -2)}</span>;
    }
    return <React.Fragment key={i}>{part}</React.Fragment>;
  });
}

// Standard 22 pathways ids
const STANDARD_PATHWAY_IDS = new Set([
  'fool', 'error', 'door', 'visionary', 'sun', 'tyrant', 'white_tower', 'hanged_man',
  'darkness', 'death', 'twilight_giant', 'demoness', 'red_priest', 'hermit', 'paragon',
  'wheel_of_fortune', 'mother', 'moon', 'abyss', 'chained', 'justiciar', 'black_emperor'
]);

const getFileName = (id: string) => {
  const map: Record<string, string> = {
    'fool': 'Fool_Symbol.webp',
    'abyss': 'Abyss_Symbol2.webp',
    'black_emperor': 'Black_Emperor_Symbol2.webp',
    'chained': 'Chained_Symbol2.webp',
    'darkness': 'Darkness_Symbol2.webp',
    'death': 'Death_Symbol2.webp',
    'demoness': 'Demoness_Symbol2.webp',
    'door': 'Door_Symbol2.webp',
    'error': 'Error_Symbol2.webp',
    'hanged_man': 'Hanged_Man_Symbol2.webp',
    'hermit': 'Hermit_Symbol2.webp',
    'justiciar': 'Justiciar_Symbol2.webp',
    'moon': 'Moon_Symbol2.webp',
    'mother': 'Mother_Symbol2.webp',
    'paragon': 'Paragon_Symbol2.webp',
    'red_priest': 'Red_Priest_Symbol2.webp',
    'sun': 'Sun_Symbol2.webp',
    'twilight_giant': 'Twilight_Giant_Symbol2.webp',
    'tyrant': 'Tyrant_Symbol2.webp',
    'visionary': 'Visionary_Symbol2.webp',
    'wheel_of_fortune': 'Wheel_of_Fortune_Symbol2.webp',
    'white_tower': 'White_Tower_Symbol2.webp',
  };
  return map[id] || null;
};

export default function PathwayPanel() {
  const { lang, pathwayId, sequenceLevel, setPathway, setSequence, setViewerData, gameTimeElapsed, activeTransformations, toggleTransformation, setSpiUsed, spiUsed } = useCharacterStore();
  const t = TRANSLATIONS[lang];
  const { textAccentClass, isLostControl } = useCorruptionMetrics();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleAbilityClick = (ability: any) => {
    setViewerData({
      title: ability.name[lang],
      desc: ability.description[lang],
      extra: ability.spiCost ? `Cost: ${ability.spiCost} SPI` : undefined,
      type: ability.type,
      spiCost: ability.spiCost
    });
  };

  const currentPathway = PATHWAYS.find(p => p.id === pathwayId);

  const accumulatedAbilities = useMemo(() => {
    if (!pathwayId || !sequenceLevel) return [];
    const pathway = PATHWAYS.find(p => p.id === pathwayId);
    if (!pathway) return [];
    const abs: any[] = [];
    for (let seq = 9; seq >= sequenceLevel; seq--) {
      const seqData = pathway.sequences.find(s => s.level === seq);
      if (seqData) {
        seqData.abilities.forEach(newAb => {
          if (newAb.replaces) {
            const index = abs.findIndex(a => a.id === newAb.replaces);
            if (index !== -1) {
              abs[index] = newAb;
            } else {
              abs.push(newAb);
            }
          } else {
            abs.push(newAb);
          }
        });
      }
    }
    return abs;
  }, [pathwayId, sequenceLevel]);

  const standardPathways = useMemo(() => PATHWAYS.filter(p => STANDARD_PATHWAY_IDS.has(p.id)), []);
  const outerPathways = useMemo(() => PATHWAYS.filter(p => !STANDARD_PATHWAY_IDS.has(p.id)), []);

  const getSequenceName = (pId: string, level: number) => {
    const fromMap = SEQUENCE_TITLES[pId]?.[level];
    if (fromMap) return fromMap;
    const seqData = currentPathway?.sequences.find(s => s.level === level);
    if (seqData?.name) {
      if (typeof seqData.name === 'string') return seqData.name;
      return seqData.name[lang];
    }
    return `Sequence ${level}`;
  };

  return (
    <div className="flex flex-col gap-3 obfuscate-zone">
      <section className={`bg-[#111] border border-[#333] rounded-md flex flex-col shrink-0 ${isLostControl ? 'eldritch-illegible-panel eldritch-container-distortion' : ''}`}>
        <div className={`bg-[#1a1a1a] px-3 py-2 border-b border-[#333] text-[11px] font-bold uppercase ${textAccentClass} transition-colors duration-500`}>
          <div className="flex justify-between items-center w-full">
            <span>{t.pathway}</span>
            {currentPathway && getFileName(currentPathway.id) && (
              <img 
                src={`./PathwaysSimbols/${getFileName(currentPathway.id)}`} 
                alt="Pathway Symbol" 
                className="w-4 h-4 object-contain opacity-80"
              />
            )}
          </div>
        </div>
        <div className="p-2.5 flex flex-col gap-2 relative">
          {currentPathway && getFileName(currentPathway.id) && (
            <div className="absolute right-4 top-1/2 -translate-y-1/2 w-16 h-16 opacity-10 pointer-events-none mix-blend-screen">
              <img src={`./PathwaysSimbols/${getFileName(currentPathway.id)}`} alt="Symbol" className="w-full h-full object-contain" />
            </div>
          )}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full bg-[#222] border border-[#444] text-[#ddd] rounded p-1.5 text-[11px] outline-none cursor-pointer flex justify-between items-center relative z-10 hover:bg-[#2a2a2a] transition-colors"
            >
              <span className="flex items-center gap-2 truncate">
                {currentPathway ? (
                  <>
                    {getFileName(currentPathway.id) && (
                      <img src={`./PathwaysSimbols/${getFileName(currentPathway.id)}`} alt="" className="w-4 h-4 object-contain" />
                    )}
                    {currentPathway.name[lang]}
                  </>
                ) : (
                  `-- ${t.selectPathway} --`
                )}
              </span>
              <ChevronDown className={`w-3.5 h-3.5 text-[#888] transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-[#1a1a1a] border border-[#444] rounded-md shadow-xl z-50 max-h-60 overflow-y-auto">
                <div className="py-1">
                  <div className="px-2 py-1.5 text-[10px] font-bold text-[#888] uppercase bg-[#111] sticky top-0 z-10 border-b border-[#333]">
                    {lang === 'es' ? '👑 22 Sendas Divinas Estándar' : '👑 22 Standard Divine Pathways'}
                  </div>
                  {standardPathways.map(p => (
                    <button
                      key={p.id}
                      className="w-full text-left px-2 py-1.5 hover:bg-[#333] flex items-center justify-between group transition-colors"
                      onClick={() => { setPathway(p.id); setIsDropdownOpen(false); }}
                    >
                      <span className={`text-[11px] flex items-center gap-2 ${pathwayId === p.id ? 'text-yellow-500 font-semibold' : 'text-[#ddd] group-hover:text-white'}`}>
                        {getFileName(p.id) && (
                          <img src={`./PathwaysSimbols/${getFileName(p.id)}`} alt="" className="w-4 h-4 object-contain opacity-80 group-hover:opacity-100" />
                        )}
                        {p.name[lang]}
                      </span>
                      {pathwayId === p.id && <Check className="w-3.5 h-3.5 text-yellow-500" />}
                    </button>
                  ))}
                  
                  {outerPathways.length > 0 && (
                    <>
                      <div className="px-2 py-1.5 text-[10px] font-bold text-[#888] uppercase bg-[#111] sticky top-0 z-10 border-b border-[#333] border-t">
                        {lang === 'es' ? '🌌 Sendas de Deidades Exteriores / Bendiciones' : '🌌 Outer Deity / Boon Pathways'}
                      </div>
                      {outerPathways.map(p => (
                        <button
                          key={p.id}
                          className="w-full text-left px-2 py-1.5 hover:bg-[#333] flex items-center justify-between group transition-colors"
                          onClick={() => { setPathway(p.id); setIsDropdownOpen(false); }}
                        >
                          <span className={`text-[11px] flex items-center gap-2 ${pathwayId === p.id ? 'text-yellow-500 font-semibold' : 'text-[#ddd] group-hover:text-white'}`}>
                            {p.name[lang]}
                          </span>
                          {pathwayId === p.id && <Check className="w-3.5 h-3.5 text-yellow-500" />}
                        </button>
                      ))}
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
          {pathwayId && (
            <div>
              <select
                value={sequenceLevel || ''}
                onChange={(e) => setSequence(parseInt(e.target.value) as any)}
                className="w-full bg-[#222] border border-[#444] text-[#ddd] rounded p-1.5 text-[11px] outline-none cursor-pointer"
              >
                {[9, 8, 7, 6].map(seq => {
                  const seqData = currentPathway?.sequences.find(s => s.level === seq);
                  const title = getSequenceName(pathwayId, seq);
                  return (
                    <option key={seq} value={seq} disabled={!seqData}>
                      Seq {seq}: {title} {!seqData && '(No Impl)'}
                    </option>
                  );
                })}
              </select>
            </div>
          )}
        </div>
      </section>

      {accumulatedAbilities.length > 0 && (
        <section className={`bg-[#111] border border-[#333] rounded-md flex flex-col overflow-hidden shrink-0 ${isLostControl ? 'eldritch-illegible-panel eldritch-container-distortion' : ''}`}>
          <div className={`bg-[#1a1a1a] px-3 py-2 border-b border-[#333] text-[11px] font-bold uppercase ${textAccentClass} transition-colors duration-500 flex justify-between items-center`}>
            <span>{t.abilities}</span>
            <div className="flex items-center gap-2 text-[10px]">
              <span className="text-[#888] normal-case">{lang === 'es' ? 'Tiempo de juego:' : 'Game time:'} {gameTimeElapsed}s</span>
              <button onClick={() => useCharacterStore.getState().addGameTime(1)} className="px-1.5 py-0.5 bg-[#333] hover:bg-[#444] rounded text-white transition-colors">+1s</button>
              <button onClick={() => useCharacterStore.getState().addGameTime(10)} className="px-1.5 py-0.5 bg-[#333] hover:bg-[#444] rounded text-white transition-colors">+10s</button>
              <button onClick={() => useCharacterStore.getState().addGameTime(60)} className="px-1.5 py-0.5 bg-[#333] hover:bg-[#444] rounded text-white transition-colors">+1m</button>
            </div>
          </div>
          <div className="p-2.5 flex flex-col gap-3">
            {['passive', 'active', 'drawback'].map(typeCategory => {
              const categoryAbilities = accumulatedAbilities.filter(ab => ab.type === typeCategory);
              if (categoryAbilities.length === 0) return null;

              let typeTitle = typeCategory === 'passive' ? (lang === 'es' ? 'Habilidades Pasivas' : 'Passive Abilities') : 
                              typeCategory === 'active' ? (lang === 'es' ? 'Habilidades Activas' : 'Active Abilities') : 
                              (lang === 'es' ? 'Desventajas' : 'Drawbacks');
              
              let headerColor = typeCategory === 'passive' ? 'text-purple-400' :
                                typeCategory === 'active' ? 'text-blue-400' : 'text-red-400';

              return (
                <div key={typeCategory} className="flex flex-col gap-1.5">
                  <div className={`text-[10px] font-bold uppercase ${headerColor} mb-1 border-b border-[#333] pb-1`}>
                    {typeTitle}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    {categoryAbilities.map(ab => {
                      let borderStyle = 'border-[#444]';
                      if (ab.type === 'active') borderStyle = 'border-blue-500';
                      if (ab.type === 'drawback') borderStyle = 'border-red-500';
                      if (ab.type === 'passive') borderStyle = 'border-purple-500';

                      return (
                        <div
                          key={ab.id}
                          data-info-target="true"
                          className={`p-2 bg-[#181818] border-l-4 ${borderStyle} rounded-r flex flex-col gap-1 cursor-pointer transition-colors hover:bg-[#222]`}
                          onClick={() => handleAbilityClick(ab)}
                        >
                          <div className="flex justify-between items-center">
                            <span className="text-[12px] font-bold text-[#e5e5e5]">{sanitize(ab.name[lang])}</span>
                            {ab.spiCost !== undefined && (
                              <span className="text-[10px] bg-blue-900/40 text-blue-300 border border-blue-600/50 px-1.5 py-0.5 rounded font-mono font-bold">
                                {Array.isArray(ab.spiCost) ? ab.spiCost.join('/') : ab.spiCost} SPI
                              </span>
                            )}
                          </div>
                          
                          <p className="text-[11px] text-[#aaa] m-0 line-clamp-2 leading-tight">
                            {renderTextWithHighlights(sanitize(ab.description[lang]))}
                          </p>

                          {ab.subAbilities && ab.subAbilities.length > 0 && (
                            <div className="flex flex-wrap gap-1 mt-1">
                              {ab.subAbilities.map(sub => (
                                <span key={sub.id} className="text-[9px] bg-[#333] text-[#bbb] px-1.5 py-0.5 rounded">
                                  {sub.name[lang]} {sub.spiCost ? `(${sub.spiCost} SPI)` : ''}
                                </span>
                              ))}
                            </div>
                          )}

                          {ab.spiOptions && (
                            <div className="flex flex-wrap gap-1.5 mt-1.5" onClick={e => e.stopPropagation()}>
                              {ab.spiOptions.map((opt, i) => (
                                <button
                                  key={i}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setSpiUsed(spiUsed + opt.cost);
                                  }}
                                  className="text-[10px] px-2 py-0.5 bg-blue-900/30 hover:bg-blue-800/50 border border-blue-700/50 rounded text-blue-300 transition-colors"
                                >
                                  {opt.name[lang]}: <span className="font-bold">{opt.cost} SPI</span>
                                </button>
                              ))}
                            </div>
                          )}

                          {ab.transformation && (
                            <div className="flex items-center gap-2 mt-1.5" onClick={e => e.stopPropagation()}>
                              {(() => {
                                const activeTrans = activeTransformations.find(t => t.abilityId === ab.id);
                                const timeRemaining = activeTrans ? Math.max(0, activeTrans.activationGameTime + (activeTrans.durationInSeconds || 0) - gameTimeElapsed) : 0;
                                const isActive = !!activeTrans && timeRemaining > 0;
                                
                                return (
                                  <>
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        toggleTransformation({
                                          abilityId: ab.id,
                                          name: ab.name,
                                          durationInSeconds: ab.transformation!.durationInSeconds || 9999,
                                          statBonuses: ab.transformation!.statBonuses,
                                          maxCorruptionChange: ab.transformation!.maxCorruptionChange,
                                        });
                                      }}
                                      className={`text-[10px] px-2 py-1 rounded border transition-colors ${isActive ? 'bg-purple-900/50 border-purple-500 text-purple-200' : 'bg-[#222] border-[#444] text-[#888] hover:bg-[#333]'}`}
                                    >
                                      {isActive ? (lang === 'es' ? 'Desactivar Transformación' : 'Deactivate Transformation') : (lang === 'es' ? 'Activar Transformación' : 'Activate Transformation')}
                                    </button>
                                    {isActive && (
                                      <span className="text-[10px] text-purple-400 font-mono">
                                        ⏱ {timeRemaining}s
                                      </span>
                                    )}
                                  </>
                                );
                              })()}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}
