import React, { useMemo } from 'react';
import { useCharacterStore } from '../store';
import { TRANSLATIONS } from '../i18n';
import { PATHWAYS } from '../data/pathwaysData';
import { SEQUENCE_TITLES } from '../data/sequenceTitles';
import { sanitize } from '../utils';
import { useCorruptionMetrics } from '../utils/corruption';

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

export default function PathwayPanel() {
  const { lang, pathwayId, sequenceLevel, setPathway, setSequence, setViewerData } = useCharacterStore();
  const t = TRANSLATIONS[lang];
  const { textAccentClass, isLostControl } = useCorruptionMetrics();

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
      <section className={`bg-[#111] border border-[#333] rounded-md flex flex-col overflow-hidden shrink-0 ${isLostControl ? 'eldritch-illegible-panel eldritch-container-distortion' : ''}`}>
        <div className={`bg-[#1a1a1a] px-3 py-2 border-b border-[#333] text-[11px] font-bold uppercase ${textAccentClass} transition-colors duration-500`}>
          {t.pathway}
        </div>
        <div className="p-2.5 flex flex-col gap-2">
          <div>
            <select
              value={pathwayId || ''}
              onChange={(e) => setPathway(e.target.value || null)}
              className="w-full bg-[#222] border border-[#444] text-[#ddd] rounded p-1.5 text-[11px] outline-none cursor-pointer"
            >
              <option value="">-- {t.selectPathway} --</option>
              <optgroup label={lang === 'es' ? '👑 22 Sendas Divinas Estándar' : '👑 22 Standard Divine Pathways'}>
                {standardPathways.map(p => (
                  <option key={p.id} value={p.id}>{p.name[lang]}</option>
                ))}
              </optgroup>
              {outerPathways.length > 0 && (
                <optgroup label={lang === 'es' ? '🌌 Sendas de Deidades Exteriores / Bendiciones' : '🌌 Outer Deity / Boon Pathways'}>
                  {outerPathways.map(p => (
                    <option key={p.id} value={p.id}>{p.name[lang]}</option>
                  ))}
                </optgroup>
              )}
            </select>
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
          <div className={`bg-[#1a1a1a] px-3 py-2 border-b border-[#333] text-[11px] font-bold uppercase ${textAccentClass} transition-colors duration-500`}>
            {t.abilities}
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
                            {ab.spiCost && (
                              <span className="text-[10px] bg-blue-900/40 text-blue-300 border border-blue-600/50 px-1.5 py-0.5 rounded font-mono font-bold">
                                {ab.spiCost} SPI
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-[#aaa] m-0 line-clamp-2 leading-tight">
                            {renderTextWithHighlights(sanitize(ab.description[lang]))}
                          </p>
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
