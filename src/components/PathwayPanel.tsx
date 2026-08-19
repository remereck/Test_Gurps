import React, { useMemo } from 'react';
import { useCharacterStore } from '../store';
import { TRANSLATIONS } from '../i18n';
import { PATHWAYS } from '../data/pathwaysData';
import { sanitize } from '../utils';

export default function PathwayPanel() {
  const { lang, pathwayId, sequenceLevel, setPathway, setSequence, setViewerData } = useCharacterStore();
  const t = TRANSLATIONS[lang];

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
    const abs = [];
    for (let seq = 9; seq >= sequenceLevel; seq--) {
      const seqData = pathway.sequences.find(s => s.level === seq);
      if (seqData) {
        abs.push(...seqData.abilities);
      }
    }
    return abs;
  }, [pathwayId, sequenceLevel]);

  return (
    <div className="flex flex-col gap-3">
      <section className="bg-[#111] border border-[#333] rounded-md flex flex-col overflow-hidden shrink-0">
        <div className="bg-[#1a1a1a] px-3 py-2 border-b border-[#333] text-[11px] font-bold uppercase text-yellow-500">
          {t.pathway}
        </div>
        <div className="p-2.5 flex flex-col gap-2">
          <div>
            <select
              value={pathwayId || ''}
              onChange={(e) => setPathway(e.target.value || null)}
              className="w-full bg-[#222] border border-[#444] text-[#ddd] rounded p-1.5 text-[11px] outline-none"
            >
              <option value="">-- {t.selectPathway} --</option>
              {PATHWAYS.map(p => (
                <option key={p.id} value={p.id}>{p.name[lang]}</option>
              ))}
            </select>
          </div>
          {pathwayId && (
            <div>
              <select
                value={sequenceLevel || ''}
                onChange={(e) => setSequence(parseInt(e.target.value) as any)}
                className="w-full bg-[#222] border border-[#444] text-[#ddd] rounded p-1.5 text-[11px] outline-none"
              >
                {[9, 8, 7, 6].map(seq => {
                  const seqData = currentPathway?.sequences.find(s => s.level === seq);
                  return (
                    <option key={seq} value={seq} disabled={!seqData}>
                      Sequence {seq} {!seqData && '(Not Implemented)'}
                    </option>
                  );
                })}
              </select>
            </div>
          )}
        </div>
      </section>

      {accumulatedAbilities.length > 0 && (
        <section className="bg-[#111] border border-[#333] rounded-md flex flex-col overflow-hidden shrink-0">
          <div className="bg-[#1a1a1a] px-3 py-2 border-b border-[#333] text-[11px] font-bold uppercase text-yellow-500">
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
                  {categoryAbilities.map(ab => {
                    let bColor = "border-l-4 border-yellow-500 bg-[#181818]";
                    if (ab.type === 'passive') bColor = "border-l-4 border-purple-500 bg-[#181818]";
                    else if (ab.type === 'active') bColor = "border-l-4 border-blue-500 bg-[#181818]";
                    else if (ab.type === 'drawback') bColor = "border-l-4 border-red-500 bg-[#2a1111]";
                    
                    return (
                      <div
                        key={ab.id}
                        onClick={() => handleAbilityClick(ab)}
                        className={`p-1.5 cursor-pointer hover:brightness-125 transition-all ${bColor}`}
                      >
                        <div className="font-bold text-[12px] text-[#e5e5e5]">{ab.name[lang]}</div>
                        <div className="text-[10px] text-[#aaa] truncate mt-0.5">{ab.description[lang]}</div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}
