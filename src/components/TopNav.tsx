import React, { useRef, useState } from 'react';
import { useCharacterStore } from '../store';
import { TRANSLATIONS } from '../i18n';
import { getAttributeCost } from '../utils';
import { ADVANTAGES, DISADVANTAGES } from '../data/traitsData';
import { useCorruptionMetrics } from '../utils/corruption';
import CompendiumModal from './CompendiumModal';
import RulebookModal from './RulebookModal';

export default function TopNav() {
  const { lang, setLang, exportData, importData, ST, DX, IQ, HT, skills, disadvantages, advantages, quirks, secondaryPurchases } = useCharacterStore();
  const t = TRANSLATIONS[lang];
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { isLostControl, borderClass, textAccentClass, badgeClass } = useCorruptionMetrics();
  const [isCompendiumOpen, setIsCompendiumOpen] = useState(false);
  const [isRulebookModalOpen, setIsRulebookModalOpen] = useState(false);

  const pointsSpentOnAttributes = 
    getAttributeCost(9, ST, false) + 
    getAttributeCost(9, HT, false) + 
    getAttributeCost(9, DX, true) + 
    getAttributeCost(9, IQ, true);
    
  const pointsSpentOnSecondary = 
    (secondaryPurchases?.HP || 0) * 2 +
    (secondaryPurchases?.FP || 0) * 3 +
    (secondaryPurchases?.Will || 0) * 5 +
    (secondaryPurchases?.Per || 0) * 5 +
    (secondaryPurchases?.BasicSpeed || 0) * 5 +
    (secondaryPurchases?.BasicMove || 0) * 5;

  const pointsSpentOnSkills = skills.reduce((acc, s) => acc + s.points, 0);
  
  const advPoints = advantages.reduce((acc, t) => {
    const def = ADVANTAGES.find(a => a.id === t.id);
    return acc + (def ? def.cost * t.level : 0);
  }, 0);
  
  const disadvPointsRaw = disadvantages.reduce((acc, t) => {
    const def = DISADVANTAGES.find(d => d.id === t.id);
    return acc + (def ? def.cost * t.level : 0);
  }, 0);

  const quirksAdvCost = quirks.filter(q => q.cost > 0).reduce((a, b) => a + b.cost, 0);
  const quirksDisCost = quirks.filter(q => q.cost < 0).reduce((a, b) => a + b.cost, 0);
  const disadvPointsAllowed = Math.min(40, Math.abs(disadvPointsRaw + quirksDisCost));
  const totalBudget = 70 + disadvPointsAllowed;
  const pointsSpent = pointsSpentOnAttributes + pointsSpentOnSecondary + pointsSpentOnSkills + advPoints + quirksAdvCost;

  const handleExport = () => {
    const data = exportData();
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'gurps_character.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      if (ev.target?.result) {
        importData(ev.target.result as string);
      }
    };
    reader.readAsText(file);
    e.target.value = ''; // Reset
  };

  return (
    <>
      <header className={`flex flex-col xl:flex-row min-h-[60px] bg-[#111] border-b-2 ${borderClass} items-start xl:items-center justify-between p-3 md:px-5 rounded-t-lg shrink-0 gap-3 transition-colors duration-500`}>
        <div className="flex flex-col">
          {isLostControl ? (
            <h1 className="m-0 text-[18px] md:text-[20px] text-red-500 uppercase tracking-[2px] font-black animate-glitch">
              {lang === 'es' ? '¡PERDISTE EL CONTROL!' : 'YOU LOST CONTROL!'}
            </h1>
          ) : (
            <h1 className={`m-0 text-[16px] md:text-[18px] ${textAccentClass} uppercase tracking-[1px] font-bold transition-colors duration-500`}>
              {t.appTitle}
            </h1>
          )}
          <div className={`text-[10px] italic ${isLostControl ? 'text-red-400 font-bold tracking-wider' : 'opacity-70'}`}>
            {isLostControl ? 'CORRUPCIÓN 100% | RAMPAGER TRANSFORMATION' : 'V6.9e | Lord of the Mysteries System | Beyonder Sequence'}
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {/* Compendium / Database Button */}
          <button
            onClick={() => setIsCompendiumOpen(true)}
            className="bg-yellow-950/40 border border-yellow-700/60 text-yellow-400 hover:bg-yellow-900/50 hover:text-yellow-300 px-2.5 md:px-3 py-1.5 text-[10px] md:text-[11px] cursor-pointer rounded uppercase font-bold transition-all shadow-[0_0_10px_rgba(234,179,8,0.15)] flex items-center gap-1.5 print:hidden"
            title={lang === 'es' ? 'Abrir Compendio y Base de Datos' : 'Open Rulebook Compendium & Database'}
          >
            <span>📜</span>
            <span>{lang === 'es' ? 'Compendio / Lore' : 'Compendium / Lore'}</span>
          </button>

          <button
            onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
            className="bg-[#222] border border-[#444] text-[#ddd] px-2 md:px-3 py-1.5 text-[10px] md:text-[11px] cursor-pointer rounded uppercase hover:bg-[#333] transition-colors print:hidden"
          >
            {lang === 'en' ? 'ES' : 'EN'}
          </button>
          
          <div className="print:hidden">
            <input type="file" accept=".json" className="hidden" ref={fileInputRef} onChange={handleImport} />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="bg-[#222] border border-[#444] text-[#ddd] px-2 md:px-3 py-1.5 text-[10px] md:text-[11px] cursor-pointer rounded uppercase hover:bg-[#333] transition-colors"
            >
              {t.import}
            </button>
          </div>

          <button
            onClick={handleExport}
            className="bg-[#222] border border-[#444] text-[#ddd] px-2 md:px-3 py-1.5 text-[10px] md:text-[11px] cursor-pointer rounded uppercase hover:bg-[#333] transition-colors print:hidden"
          >
            {t.export}
          </button>

          <button
            onClick={() => setIsRulebookModalOpen(true)}
            className="bg-[#222] border border-[#444] text-[#ddd] px-2 md:px-3 py-1.5 text-[10px] md:text-[11px] cursor-pointer rounded uppercase hover:bg-[#333] transition-colors print:hidden no-underline flex items-center"
          >
            Rulebook
          </button>

          <div className={`px-2 md:px-3 py-1 rounded-full font-bold text-[12px] md:text-[14px] ${badgeClass} transition-all duration-500 font-mono`}>
            {pointsSpent} / {totalBudget} Character Points
          </div>
        </div>
      </header>

      {/* Compendium Modal */}
      <CompendiumModal 
        isOpen={isCompendiumOpen} 
        onClose={() => setIsCompendiumOpen(false)} 
      />

      <RulebookModal
        isOpen={isRulebookModalOpen}
        onClose={() => setIsRulebookModalOpen(false)}
      />
    </>
  );
}
