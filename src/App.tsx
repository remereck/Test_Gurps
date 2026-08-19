import React from 'react';
import TopNav from './components/TopNav';
import AttributePanel from './components/AttributePanel';
import PathwayPanel from './components/PathwayPanel';
import SkillPanel from './components/SkillPanel';
import InventoryPanel from './components/InventoryPanel';
import InfoViewer from './components/InfoViewer';
import { useCharacterStore } from './store';
import { TRANSLATIONS } from './i18n';

export default function App() {
  const { lang } = useCharacterStore();
  const t = TRANSLATIONS[lang];

  return (
    <div className="h-screen bg-[#050505] text-[#e5e5e5] font-sans flex flex-col overflow-hidden selection:bg-yellow-500/30">
      <div className="w-full max-w-[1024px] mx-auto h-full flex flex-col p-3 gap-3 box-border">
        <TopNav />
        <main className="flex-1 grid grid-cols-[220px_1fr_300px] gap-3 min-h-0">
          <div className="flex flex-col gap-3 overflow-y-auto pr-1 custom-scrollbar">
            <AttributePanel />
          </div>
          <div className="flex flex-col gap-3 overflow-y-auto pr-1 custom-scrollbar">
            <PathwayPanel />
          </div>
          <div className="flex flex-col gap-3 overflow-y-auto pr-1 custom-scrollbar">
            <SkillPanel />
            <InventoryPanel />
          </div>
        </main>
        <div className="shrink-0 h-[100px]">
          <InfoViewer />
        </div>
      </div>
    </div>
  );
}
