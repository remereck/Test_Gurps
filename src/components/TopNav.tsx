import React, { useRef } from 'react';
import { useCharacterStore } from '../store';
import { TRANSLATIONS } from '../i18n';
import { getAttributeCost } from '../utils';
import { ADVANTAGES, DISADVANTAGES } from '../data/traitsData';

export default function TopNav() {
  const { lang, setLang, exportData, importData, ST, DX, IQ, HT, skills, disadvantages, advantages, quirks } = useCharacterStore();
  const t = TRANSLATIONS[lang];
  const fileInputRef = useRef<HTMLInputElement>(null);

  const pointsSpentOnAttributes = 
    getAttributeCost(9, ST, false) + 
    getAttributeCost(9, HT, false) + 
    getAttributeCost(9, DX, true) + 
    getAttributeCost(9, IQ, true);
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
  const pointsSpent = pointsSpentOnAttributes + pointsSpentOnSkills + advPoints + quirksAdvCost;

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
    <header className="flex flex-col md:flex-row md:h-[60px] bg-[#111] border-b-2 border-yellow-500 items-start md:items-center justify-between p-3 md:px-5 rounded-t-lg shrink-0 gap-3 md:gap-0">
      <div className="flex flex-col">
        <h1 className="m-0 text-[16px] md:text-[18px] text-yellow-500 uppercase tracking-[1px] font-bold">{t.appTitle}</h1>
        <div className="text-[10px] opacity-70 italic">V6.9e | Lord of the Mysteries System | Beyonder Sequence 8</div>
      </div>
      <div className="flex flex-wrap items-center gap-2">
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
          onClick={() => window.print()}
          className="bg-[#222] border border-[#444] text-[#ddd] px-2 md:px-3 py-1.5 text-[10px] md:text-[11px] cursor-pointer rounded uppercase hover:bg-[#333] transition-colors print:hidden"
        >
          PDF
        </button>
        <div className="bg-yellow-500 text-black px-2 md:px-3 py-1 rounded-full font-bold text-[12px] md:text-[14px]">
          {pointsSpent} / {totalBudget} CP
        </div>
      </div>
    </header>
  );
}
