import React, { useState, useEffect } from 'react';
import { useCharacterStore } from '../store';
import { TRANSLATIONS } from '../i18n';
import { PATHWAYS } from '../data/pathwaysData';
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

export default function InfoViewer() {
  const { lang, viewerData, spiUsed, setSpiUsed, pathwayId, sequenceLevel } = useCharacterStore();
  const t = TRANSLATIONS[lang];
  const { textAccentClass, isLostControl } = useCorruptionMetrics();
  
  const [rollResult, setRollResult] = useState<{ rolls: number[]; total: number; success: boolean | string; margin: number } | null>(null);

  useEffect(() => {
    setRollResult(null);
  }, [viewerData]);

  // Determine Max SPI dynamically if the ability requires SPI cost checks
  const statBonuses = React.useMemo(() => {
    let spiBonus = 0;
    if (pathwayId && sequenceLevel) {
      const pathway = PATHWAYS.find(p => p.id === pathwayId);
      if (pathway) {
        for (let seq = 9; seq >= sequenceLevel; seq--) {
          const seqData = pathway.sequences.find(s => s.level === seq);
          if (seqData) {
            const b = seqData.statBonuses.find(x => x.stat === 'SPI');
            if (b) spiBonus += b.bonus;
          }
        }
      }
    }
    return { SPI: spiBonus };
  }, [pathwayId, sequenceLevel]);
  
  const finalSPI = statBonuses.SPI;

  const handleRoll = () => {
    if (!viewerData?.rollTarget) return;
    const rolls = [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1];
    const total = rolls.reduce((a, b) => a + b, 0);
    const target = viewerData.rollTarget;
    
    let success: boolean | string = false;
    let margin = target - total;

    if (total <= 4) success = 'critical';
    else if (total === 5 && target >= 15) success = 'critical';
    else if (total === 6 && target >= 16) success = 'critical';
    else if (total >= 18) success = 'fumble';
    else if (total === 17 && target <= 15) success = 'fumble';
    else success = total <= target;

    setRollResult({ rolls, total, success, margin });
  };

  const handleUsePower = () => {
    if (!viewerData?.spiCost) return;
    setSpiUsed(Math.min(finalSPI, spiUsed + viewerData.spiCost));
  };

  if (!viewerData) {
    return (
      <div className="h-full bg-[#111] border border-[#333] rounded-md flex flex-col items-center justify-center text-[#aaa] text-[12px] italic">
        {t.clickToView}
      </div>
    );
  }

  let borderColor = "border-[#333]";
  if (viewerData.type === 'passive') borderColor = "border-purple-500";
  else if (viewerData.type === 'active') borderColor = "border-blue-500";
  else if (viewerData.type === 'drawback') borderColor = "border-red-500";
  else if (viewerData.type === 'skill') borderColor = "border-green-500";

  return (
    <div className={`h-full bg-[#111] border-l-4 ${borderColor} rounded-md p-3 flex flex-col overflow-y-auto custom-scrollbar relative obfuscate-zone ${isLostControl ? 'eldritch-illegible-panel eldritch-container-distortion' : ''}`}>
      <div className="flex justify-between items-start mb-1">
        <h3 className={`m-0 text-[14px] font-bold ${textAccentClass} uppercase transition-colors duration-500`}>
          {sanitize(viewerData.title)}
        </h3>
        {viewerData.type && (
          <span className="text-[10px] text-[#aaa] uppercase font-bold bg-[#222] px-1.5 py-0.5 rounded">
            {viewerData.type}
          </span>
        )}
      </div>
      <div className="text-[12px] text-[#e5e5e5] leading-[1.4] whitespace-pre-wrap flex-1">
        {renderTextWithHighlights(sanitize(viewerData.desc))}
      </div>
      
      {(viewerData.extra || viewerData.rollTarget !== undefined || viewerData.spiCost !== undefined) && (
        <div className={`mt-2 text-[11px] ${textAccentClass} font-bold border-t border-[#333] pt-1 flex items-center justify-between transition-colors duration-500`}>
          <span>{viewerData.extra ? sanitize(viewerData.extra) : 'Info'}</span>
          <div className="flex gap-2">
            {viewerData.spiCost !== undefined && (
              <button 
                onClick={handleUsePower}
                className="bg-[#222] border border-purple-500/50 text-purple-400 px-2 py-0.5 rounded hover:bg-[#333] hover:text-white transition-colors cursor-pointer"
              >
                USE ({viewerData.spiCost} SPI)
              </button>
            )}
            {viewerData.rollTarget !== undefined && (
              <button 
                onClick={handleRoll}
                className={`bg-[#222] border border-current ${textAccentClass} px-2 py-0.5 rounded hover:bg-[#333] hover:text-white transition-colors cursor-pointer`}
              >
                ROLL 3d6
              </button>
            )}
          </div>
        </div>
      )}

      {rollResult && (
        <div className="mt-2 p-2 bg-[#1a1a1a] border border-[#333] rounded flex flex-col gap-1">
          <div className="flex justify-between items-center">
            <span className="text-[11px] text-[#aaa]">Target: <span className="text-[#e5e5e5] font-bold">{viewerData.rollTarget}</span></span>
            <div className="flex gap-1">
              {rollResult.rolls.map((r, i) => (
                <div key={i} className={`w-5 h-5 bg-[#222] border border-[#444] rounded flex items-center justify-center font-mono text-[10px] ${textAccentClass}`}>{r}</div>
              ))}
            </div>
          </div>
          <div className="flex justify-between items-center border-t border-[#222] pt-1 mt-1">
            <div className="flex flex-col">
              <span className={`text-[12px] font-bold uppercase tracking-wide
                ${rollResult.success === 'critical' ? 'text-green-400' : 
                  rollResult.success === 'fumble' ? 'text-red-500' : 
                  rollResult.success ? 'text-green-500' : 'text-red-400'}`}>
                {rollResult.success === 'critical' ? 'Critical Success!' : 
                 rollResult.success === 'fumble' ? 'Critical Failure!' : 
                 rollResult.success ? 'Success' : 'Failure'}
              </span>
              <span className="text-[10px] text-[#aaa]">Margin: {rollResult.margin > 0 ? `+${rollResult.margin}` : rollResult.margin}</span>
            </div>
            <span className={`font-mono text-[18px] font-bold ${textAccentClass}`}>{rollResult.total}</span>
          </div>
        </div>
      )}
    </div>
  );
}
