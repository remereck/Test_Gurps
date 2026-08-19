import React, { useMemo } from 'react';
import { useCharacterStore } from '../store';
import { TRANSLATIONS } from '../i18n';
import { getAttributeCost, getSkillLevelFromPoints } from '../utils';
import { ADVANTAGES, DISADVANTAGES } from '../data/traitsData';
import { PATHWAYS } from '../data/pathwaysData';
import { useCorruptionMetrics } from '../utils/corruption';

export default function AttributePanel() {
  const { lang, ST, DX, IQ, HT, setAttribute, pathwayId, sequenceLevel, disadvantages, quirks, skills, advantages, setViewerData, spiUsed, setSpiUsed, corruption, setCorruption, hpDamage, setHpDamage, fpSpent, setFpSpent } = useCharacterStore();
  const t = TRANSLATIONS[lang];
  const { textAccentClass, corruptionPercent, isLostControl, colorStage } = useCorruptionMetrics();

  const currentSequence = useMemo(() => {
    if (!pathwayId || !sequenceLevel) return null;
    const pathway = PATHWAYS.find(p => p.id === pathwayId);
    return pathway?.sequences.find(s => s.level === sequenceLevel) || null;
  }, [pathwayId, sequenceLevel]);

  // Accumulate stat bonuses
  const statBonuses = useMemo(() => {
    const bonuses: Record<string, number> = { ST: 0, DX: 0, IQ: 0, HT: 0, Per: 0, Will: 0, SPI: 0, BasicSpeed: 0, HP: 0, FP: 0 };
    if (!pathwayId || !sequenceLevel) return bonuses;
    const pathway = PATHWAYS.find(p => p.id === pathwayId);
    if (!pathway) return bonuses;
    
    // Accumulate from 9 down to current sequence
    for (let seq = 9; seq >= sequenceLevel; seq--) {
      const seqData = pathway.sequences.find(s => s.level === seq);
      if (seqData) {
        seqData.statBonuses.forEach(b => {
          bonuses[b.stat] += b.bonus;
        });
      }
    }
    return bonuses;
  }, [pathwayId, sequenceLevel]);

  const finalST = ST + statBonuses.ST;
  const finalDX = DX + statBonuses.DX;
  const finalIQ = IQ + statBonuses.IQ;
  const finalHT = HT + statBonuses.HT;

  const finalHP = finalST + statBonuses.HP;
  const finalFP = finalHT + statBonuses.FP;
  const finalWill = Math.max(1, finalIQ + statBonuses.Will);
  const finalPer = finalIQ + statBonuses.Per;
  const finalSpeed = ((finalHT + finalDX) / 4) + statBonuses.BasicSpeed;
  const finalMove = Math.floor(finalSpeed);
  const finalDodge = Math.floor(finalSpeed) + 3;
  const finalSPI = statBonuses.SPI;

  const basicLift = (finalST * finalST) / 5;

  // Calculate budget
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
  const pointsRemaining = totalBudget - pointsSpent;

  const currentEffectiveHP = isLostControl ? 0 : Math.max(0, finalHP - hpDamage);

  return (
    <div className="flex flex-col gap-3">
      <section className={`bg-[#111] border border-[#333] rounded-md flex flex-col overflow-hidden shrink-0 obfuscate-zone ${isLostControl ? 'eldritch-illegible-panel eldritch-container-distortion' : ''}`}>
        <div className={`bg-[#1a1a1a] px-3 py-2 border-b border-[#333] text-[11px] font-bold uppercase ${textAccentClass} transition-colors duration-500`}>
          {t.attributes}
        </div>
        <div className="p-2.5 flex flex-col gap-2">
          {(['ST', 'DX', 'IQ', 'HT'] as const).map(attr => {
            const rawVal = { ST, DX, IQ, HT }[attr];
            const finalVal = { ST: finalST, DX: finalDX, IQ: finalIQ, HT: finalHT }[attr];
            const isExpensive = attr === 'DX' || attr === 'IQ';
            
            return (
              <div 
                key={attr} 
                data-info-target="true"
                className="flex justify-between items-center pb-1 border-b border-[#222] mb-1 last:border-0 last:mb-0 last:pb-0 cursor-pointer hover:bg-[#1a1a1a]"
                onClick={() => setViewerData({
                  title: `${attr} (Attribute)`,
                  desc: `Base: ${rawVal}\nFinal: ${finalVal}`,
                  type: 'skill',
                  rollTarget: finalVal
                })}
              >
                <span className="text-[12px] text-[#aaa] font-bold w-12">{attr}</span>
                <div className="flex items-center gap-2" onClick={e => e.stopPropagation()}>
                  <button onClick={() => setAttribute(attr, Math.max(9, rawVal - 1))} className={`px-1.5 py-0.5 bg-[#222] border border-[#444] rounded ${textAccentClass} text-xs hover:bg-[#333]`}>-</button>
                  <span className="w-5 text-center text-[12px]">{rawVal}</span>
                  <button onClick={() => setAttribute(attr, rawVal + 1)} className={`px-1.5 py-0.5 bg-[#222] border border-[#444] rounded ${textAccentClass} text-xs hover:bg-[#333]`}>+</button>
                </div>
                <span className="font-mono text-[16px] font-bold text-[#e5e5e5] w-16 text-right">
                  {finalVal} <span className="text-[10px] text-[#aaa] font-sans">[{getAttributeCost(9, rawVal, isExpensive)}]</span>
                </span>
              </div>
            );
          })}
        </div>
      </section>

      <section className={`bg-[#111] border border-[#333] rounded-md flex flex-col overflow-hidden shrink-0 obfuscate-zone`}>
        <div className={`bg-[#1a1a1a] px-3 py-2 border-b border-[#333] text-[11px] font-bold uppercase ${textAccentClass} transition-colors duration-500 ${isLostControl ? 'eldritch-illegible-panel eldritch-container-distortion' : ''}`}>
          {t.secondary}
        </div>
        <div className="p-2.5 flex flex-col gap-2">
          <div className={isLostControl ? 'eldritch-illegible-panel eldritch-container-distortion flex flex-col gap-2' : 'flex flex-col gap-2'}>
            <div className="flex justify-between items-center pb-1 border-b border-[#222]">
              <span className="text-[12px] text-[#aaa] font-bold w-12">HP</span>
              <div className="flex items-center gap-2">
                <button disabled={isLostControl} onClick={() => setHpDamage(hpDamage + 1)} className="px-1.5 py-0.5 bg-[#222] border border-[#444] rounded text-red-400 text-xs hover:bg-[#333] disabled:opacity-30" title="Take Damage">-</button>
                <span className={`font-mono text-[16px] font-bold w-16 text-center ${isLostControl ? 'text-red-600 animate-pulse' : 'text-red-500'}`}>
                  {currentEffectiveHP} / {finalHP}
                </span>
                <button disabled={isLostControl} onClick={() => setHpDamage(Math.max(0, hpDamage - 1))} className="px-1.5 py-0.5 bg-[#222] border border-[#444] rounded text-red-400 text-xs hover:bg-[#333] disabled:opacity-30" title="Heal">+</button>
              </div>
            </div>
            <div className="flex justify-between items-center pb-1 border-b border-[#222]">
              <span className="text-[12px] text-[#aaa] font-bold w-12">FP</span>
              <div className="flex items-center gap-2">
                <button onClick={() => setFpSpent(fpSpent + 1)} className="px-1.5 py-0.5 bg-[#222] border border-[#444] rounded text-green-400 text-xs hover:bg-[#333]" title="Spend FP">-</button>
                <span className="font-mono text-[16px] font-bold w-16 text-center text-green-500">{finalFP - fpSpent} / {finalFP}</span>
                <button onClick={() => setFpSpent(Math.max(0, fpSpent - 1))} className="px-1.5 py-0.5 bg-[#222] border border-[#444] rounded text-green-400 text-xs hover:bg-[#333]" title="Recover FP">+</button>
              </div>
            </div>
            <div className="flex justify-between items-center pb-1 border-b border-[#222]">
              <span className="text-[12px] text-[#aaa] font-bold">Will / Per</span>
              <span className="font-mono text-[16px] font-bold">{finalWill} / {finalPer}</span>
            </div>
            <div className="flex justify-between items-center pb-1 border-b border-[#222]">
              <span className="text-[12px] text-[#aaa] font-bold">Basic Speed</span>
              <span className="font-mono text-[16px] font-bold">{finalSpeed.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center pb-1 border-b border-[#222]">
              <span className="text-[12px] text-[#aaa] font-bold">Move / Dodge</span>
              <span className="font-mono text-[16px] font-bold">{finalMove} / {finalDodge}</span>
            </div>
            <div className="flex justify-between items-center pb-1 border-b border-[#222]">
              <span className="text-[12px] text-[#aaa] font-bold">Spirituality (SPI)</span>
              <div className="flex items-center gap-2">
                <button onClick={() => setSpiUsed(Math.min(finalSPI, spiUsed + 1))} className="px-1.5 py-0.5 bg-[#222] border border-[#444] rounded text-purple-400 text-xs hover:bg-[#333]">-</button>
                <span className="font-mono text-[16px] font-bold text-purple-500 w-16 text-center">{finalSPI - spiUsed} / {finalSPI}</span>
                <button onClick={() => setSpiUsed(Math.max(0, spiUsed - 1))} className="px-1.5 py-0.5 bg-[#222] border border-[#444] rounded text-purple-400 text-xs hover:bg-[#333]">+</button>
              </div>
            </div>
          </div>

          {/* CORRUPTION SECTION: ALWAYS REMAINS 100% CLEAR AND READABLE */}
          <div className="keep-readable flex flex-col gap-1.5 pt-1.5 border-t border-[#222]">
            <div className="flex justify-between items-center gap-1">
              <div className="flex items-center gap-1 min-w-0">
                <span className="text-[11px] text-red-500 font-bold uppercase tracking-wider">Corruption</span>
                <span className="text-[9px] text-zinc-400 font-mono">({corruptionPercent.toFixed(0)}%)</span>
              </div>
              <div className="flex items-center gap-1 shrink-0">
                <button 
                  onClick={() => setCorruption(Math.max(0, corruption - 1))} 
                  className="w-5 h-5 flex items-center justify-center bg-[#222] border border-[#444] rounded text-red-500 text-xs font-bold hover:bg-[#333] cursor-pointer shrink-0 transition-colors"
                  title="Reduce corruption"
                >
                  -
                </button>
                <span className={`font-mono text-[13px] font-bold w-12 text-center shrink-0 ${corruptionPercent >= 75 ? 'text-red-400 animate-pulse' : 'text-red-500'}`}>
                  {corruption} / {finalWill}
                </span>
                <button 
                  onClick={() => setCorruption(Math.min(finalWill, corruption + 1))} 
                  className="w-5 h-5 flex items-center justify-center bg-[#222] border border-[#444] rounded text-red-500 text-xs font-bold hover:bg-[#333] cursor-pointer shrink-0 transition-colors"
                  title="Increase corruption"
                >
                  +
                </button>
              </div>
            </div>

            {/* Visual Corruption Bar */}
            <div className="w-full h-1.5 bg-[#222] rounded-full overflow-hidden border border-[#333]">
              <div 
                className={`h-full transition-all duration-300 ${
                  corruptionPercent >= 75 ? 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]' :
                  corruptionPercent >= 50 ? 'bg-red-800' :
                  corruptionPercent >= 35 ? 'bg-[#cd7f32]' :
                  corruptionPercent >= 25 ? 'bg-[#b89528]' : 'bg-yellow-500'
                }`}
                style={{ width: `${corruptionPercent}%` }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
