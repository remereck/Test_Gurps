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
      <div className="w-full max-w-[1024px] mx-auto h-full flex flex-col p-2 md:p-3 gap-3 box-border relative">
        <TopNav />
        <main className="flex-1 flex flex-col md:grid md:grid-cols-[220px_1fr_300px] gap-4 md:gap-3 min-h-0 overflow-y-auto md:overflow-hidden pb-[140px] md:pb-0 custom-scrollbar pr-1 md:pr-0">
          <div className="flex flex-col gap-3 md:overflow-y-auto md:pr-1 md:custom-scrollbar shrink-0 md:shrink">
            <AttributePanel />
          </div>
          <div className="flex flex-col gap-3 md:overflow-y-auto md:pr-1 md:custom-scrollbar shrink-0 md:shrink">
            <PathwayPanel />
          </div>
          <div className="flex flex-col gap-3 md:overflow-y-auto md:pr-1 md:custom-scrollbar shrink-0 md:shrink">
            <SkillPanel />
            <InventoryPanel />
          </div>
        </main>
        
        {/* InfoViewer: Sticky at bottom on mobile, static on desktop */}
        <div className="fixed bottom-0 left-0 right-0 p-2 md:static md:p-0 md:shrink-0 md:h-[100px] bg-[#050505]/95 backdrop-blur-sm md:bg-transparent border-t border-[#333] md:border-none z-50 shadow-[0_-15px_25px_rgba(0,0,0,0.9)] md:shadow-none">
          <div className="w-full max-w-[1024px] mx-auto h-full max-h-[35vh] md:max-h-none min-h-[100px] md:min-h-0">
            <InfoViewer />
          </div>
        </div>
      </div>
    </div>
  );
}
