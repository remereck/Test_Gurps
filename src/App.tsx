import React, { useEffect } from 'react';
import TopNav from './components/TopNav';
import AttributePanel from './components/AttributePanel';
import PathwayPanel from './components/PathwayPanel';
import SkillPanel from './components/SkillPanel';
import InventoryPanel from './components/InventoryPanel';
import InfoViewer from './components/InfoViewer';
import CorruptionAtmosphere from './components/CorruptionAtmosphere';
import { useCharacterStore } from './store';
import { TRANSLATIONS } from './i18n';
import { useCorruptionMetrics } from './utils/corruption';
import { useEnchantmentTableObfuscation } from './utils/obfuscation';

export default function App() {
  const { lang, viewerData, setViewerData } = useCharacterStore();
  const t = TRANSLATIONS[lang];
  const { corruptionPercent, isLostControl } = useCorruptionMetrics();

  // Minecraft Enchantment Table / §k Obfuscated Text effect when Lost Control
  useEnchantmentTableObfuscation(isLostControl);

  // Global click listener to clear InfoViewer when clicking outside a target
  useEffect(() => {
    const handlePointerDown = (e: PointerEvent | TouchEvent) => {
      const target = e.target as HTMLElement;
      // If we click outside something that has data-info-target and outside the info viewer itself, close it.
      if (!target.closest('[data-info-target]') && !target.closest('[data-info-viewer]')) {
        setViewerData(null);
      }
    };
    window.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('touchstart', handlePointerDown, { passive: true });
    return () => {
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('touchstart', handlePointerDown);
    };
  }, [setViewerData]);

  return (
    <div className="h-screen bg-[#050505] text-[#e5e5e5] font-sans flex flex-col overflow-hidden selection:bg-yellow-500/30 relative">
      {/* Background Corruption Atmosphere Effects */}
      <CorruptionAtmosphere />

      <div className="w-full max-w-[1024px] mx-auto h-full flex flex-col p-2 md:p-3 gap-3 box-border relative z-10">
        <TopNav />
        <main className="flex-1 flex flex-col md:grid md:grid-cols-[240px_1fr_300px] gap-4 md:gap-3 min-h-0 overflow-y-auto md:overflow-hidden pb-[140px] md:pb-0 custom-scrollbar pr-1 md:pr-0">
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
        
        {/* InfoViewer: Sticky at bottom on mobile, floating on desktop */}
        <div 
          data-info-viewer="true"
          className={`fixed bottom-0 left-0 right-0 p-2 md:bottom-6 md:right-6 md:left-auto md:w-[350px] md:p-0 z-50 transition-all duration-300 ${!viewerData ? 'translate-y-[150%] opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'}`}
        >
          <div className="w-full h-full max-h-[40vh] md:max-h-[60vh] min-h-[100px] shadow-[0_-15px_40px_rgba(0,0,0,0.9)] md:shadow-2xl rounded-lg">
            <InfoViewer />
          </div>
        </div>
      </div>
    </div>
  );
}
