import React from 'react';
import { PATHWAYS } from '../../data/pathwaysData';
import { SEQUENCE_TITLES } from '../../data/sequenceTitles';

interface PathwaysViewProps {
  selectedItemId: string;
  lang: 'en' | 'es';
}

export function PathwaysView({ selectedItemId, lang }: PathwaysViewProps) {
  const pathway = PATHWAYS.find(p => p.id === selectedItemId);

  if (!pathway) return <div className="text-[#888]">Pathway not found.</div>;

  const isStandard = PATHWAYS.indexOf(pathway) < 22;
  const fileName = pathway.id === 'fool' ? 'Fool_Symbol.webp' : 
    pathway.id === 'abyss' ? 'Abyss_Symbol2.webp' :
    pathway.id === 'black_emperor' ? 'Black_Emperor_Symbol2.webp' :
    pathway.id === 'chained' ? 'Chained_Symbol2.webp' :
    pathway.id === 'darkness' ? 'Darkness_Symbol2.webp' :
    pathway.id === 'death' ? 'Death_Symbol2.webp' :
    pathway.id === 'demoness' ? 'Demoness_Symbol2.webp' :
    pathway.id === 'door' ? 'Door_Symbol2.webp' :
    pathway.id === 'error' ? 'Error_Symbol2.webp' :
    pathway.id === 'hanged_man' ? 'Hanged_Man_Symbol2.webp' :
    pathway.id === 'hermit' ? 'Hermit_Symbol2.webp' :
    pathway.id === 'justiciar' ? 'Justiciar_Symbol2.webp' :
    pathway.id === 'moon' ? 'Moon_Symbol2.webp' :
    pathway.id === 'mother' ? 'Mother_Symbol2.webp' :
    pathway.id === 'paragon' ? 'Paragon_Symbol2.webp' :
    pathway.id === 'red_priest' ? 'Red_Priest_Symbol2.webp' :
    pathway.id === 'sun' ? 'Sun_Symbol2.webp' :
    pathway.id === 'twilight_giant' ? 'Twilight_Giant_Symbol2.webp' :
    pathway.id === 'tyrant' ? 'Tyrant_Symbol2.webp' :
    pathway.id === 'visionary' ? 'Visionary_Symbol2.webp' :
    pathway.id === 'wheel_of_fortune' ? 'Wheel_of_Fortune_Symbol2.webp' :
    pathway.id === 'white_tower' ? 'White_Tower_Symbol2.webp' : null;

  return (
    <div className="animate-fadeIn max-w-4xl mx-auto pb-16 relative">
      <div className="mb-8 pr-32">
        <h2 className="text-3xl font-black text-yellow-500 uppercase tracking-widest font-serif mb-2">
          {pathway.name[lang] || pathway.name.en}
        </h2>
        <div className="w-16 h-1 bg-yellow-600/50 rounded mb-4"></div>
      </div>

      {isStandard && fileName && (
        <div className="absolute top-0 right-4 w-28 h-28 opacity-80 mix-blend-screen drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] pointer-events-none">
          <img src={`./PathwaysSimbols/${fileName}`} alt={`${pathway.name.en} Symbol`} className="w-full h-full object-contain" />
        </div>
      )}

      <div className="space-y-12">
        {pathway.sequences.map(seq => {
          let title = typeof seq.name === 'string' ? seq.name : (seq.name?.[lang] || seq.name?.en);
          if (!title) {
            title = SEQUENCE_TITLES[pathway.id]?.[seq.level] || 'Unknown';
          }
          
          return (
            <div key={seq.level} className="bg-[#111] border border-[#222] rounded-lg overflow-hidden">
              <div className="bg-[#1a1a1a] border-b border-[#333] p-4 flex items-center justify-between">
                <h3 className="text-xl font-bold text-[#eee] font-serif">
                  Sequence {seq.level}: <span className="text-yellow-500">{title}</span>
                </h3>
              </div>
              
              <div className="p-4 space-y-6">
                {/* Stat Bonuses */}
                {seq.statBonuses && seq.statBonuses.length > 0 && (
                  <div>
                    <h4 className="text-sm font-bold text-[#aaa] uppercase tracking-wider mb-3">
                      {lang === 'es' ? 'Bonos de Estadísticas' : 'Stat Bonuses'}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {seq.statBonuses.map((sb, i) => (
                        <div key={i} className="bg-[#222] border border-[#333] px-3 py-1 rounded text-sm text-[#ddd]">
                          <span className="text-yellow-400 font-bold">+{sb.bonus}</span> {sb.stat}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Skill Bonuses */}
                {seq.skillBonuses && seq.skillBonuses.length > 0 && (
                  <div>
                    <h4 className="text-sm font-bold text-[#aaa] uppercase tracking-wider mb-3">
                      {lang === 'es' ? 'Bonos de Habilidades' : 'Skill Bonuses'}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {seq.skillBonuses.map((sb, i) => (
                        <div key={i} className="bg-[#222] border border-[#333] px-3 py-1 rounded text-sm text-[#ddd]">
                          <span className="text-yellow-400 font-bold">+{sb.bonus}</span> {sb.skillId}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Abilities Table */}
                {seq.abilities && seq.abilities.length > 0 && (
                  <div>
                    <h4 className="text-sm font-bold text-[#aaa] uppercase tracking-wider mb-3">
                      {lang === 'es' ? 'Habilidades de la Poción' : 'Potion Abilities'}
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border-collapse border border-[#333]">
                        <thead>
                          <tr className="bg-[#1a1a1a]">
                            <th className="border border-[#333] p-2 text-left font-bold text-yellow-500 w-1/4">
                              {lang === 'es' ? 'Habilidad' : 'Ability'}
                            </th>
                            <th className="border border-[#333] p-2 text-left font-bold text-[#aaa] w-16">
                              {lang === 'es' ? 'Tipo' : 'Type'}
                            </th>
                            <th className="border border-[#333] p-2 text-left font-bold text-[#aaa] w-16">
                              SPI
                            </th>
                            <th className="border border-[#333] p-2 text-left font-bold text-[#aaa]">
                              {lang === 'es' ? 'Descripción' : 'Description'}
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {seq.abilities.map(ab => (
                            <tr key={ab.id} className="border-b border-[#333] hover:bg-[#151515] transition-colors">
                              <td className="border border-[#333] p-2 font-bold text-[#ddd]">
                                {ab.name?.[lang] || ab.name?.en}
                              </td>
                              <td className="border border-[#333] p-2 text-[#aaa]">
                                {ab.type === 'active' && <span className="text-blue-400">Active</span>}
                                {ab.type === 'passive' && <span className="text-green-400">Passive</span>}
                                {ab.type === 'drawback' && <span className="text-red-400">Drawback</span>}
                              </td>
                              <td className="border border-[#333] p-2 text-yellow-500 font-bold">
                                {ab.spiCost ? ab.spiCost : '-'}
                              </td>
                              <td className="border border-[#333] p-2 text-[#bbb] whitespace-pre-line">
                                {ab.description?.[lang] || ab.description?.en}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
