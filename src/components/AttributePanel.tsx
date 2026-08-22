import React, { useMemo, useState } from 'react';
import { useCharacterStore } from '../store';
import { TRANSLATIONS } from '../i18n';
import { getAttributeCost, getSkillLevelFromPoints } from '../utils';
import { ADVANTAGES, DISADVANTAGES } from '../data/traitsData';
import { PATHWAYS } from '../data/pathwaysData';
import { useCorruptionMetrics } from '../utils/corruption';
import { PlusCircle, X } from 'lucide-react';

export default function AttributePanel() {
  const [isSecondaryModalOpen, setSecondaryModalOpen] = useState(false);
  const { lang, ST, DX, IQ, HT, setAttribute, pathwayId, sequenceLevel, disadvantages, quirks, skills, advantages, setViewerData, spiUsed, setSpiUsed, corruption, setCorruption, hpDamage, setHpDamage, fpSpent, setFpSpent, secondaryPurchases, setSecondaryPurchase, activeTransformations } = useCharacterStore();
  const t = TRANSLATIONS[lang];
  const { textAccentClass, corruptionPercent, isLostControl, colorStage, maxCorruption } = useCorruptionMetrics();

  const currentSequence = useMemo(() => {
    if (!pathwayId || !sequenceLevel) return null;
    const pathway = PATHWAYS.find(p => p.id === pathwayId);
    return pathway?.sequences.find(s => s.level === sequenceLevel) || null;
  }, [pathwayId, sequenceLevel]);

  // Accumulate stat bonuses
  const statBonuses = useMemo(() => {
    const bonuses: Record<string, number> = { ST: 0, DX: 0, IQ: 0, HT: 0, Per: 0, Will: 0, SPI: 0, BasicSpeed: 0, HP: 0, FP: 0, BasicMove: 0 };
    if (pathwayId && sequenceLevel) {
      const pathway = PATHWAYS.find(p => p.id === pathwayId);
      if (pathway) {
        // Accumulate from 9 down to current sequence
        for (let seq = 9; seq >= sequenceLevel; seq--) {
          const seqData = pathway.sequences.find(s => s.level === seq);
          if (seqData) {
            seqData.statBonuses.forEach(b => {
              if (bonuses[b.stat] !== undefined) bonuses[b.stat] += b.bonus;
            });
          }
        }
      }
    }

    if (activeTransformations) {
      activeTransformations.forEach(trans => {
        if (trans.statBonuses) {
          trans.statBonuses.forEach(b => {
            if (bonuses[b.stat] !== undefined) bonuses[b.stat] += b.bonus;
          });
        }
      });
    }
    
    return bonuses;
  }, [pathwayId, sequenceLevel, activeTransformations]);

  const finalST = ST + statBonuses.ST;
  const finalDX = DX + statBonuses.DX;
  const finalIQ = IQ + statBonuses.IQ;
  const finalHT = HT + statBonuses.HT;

  const finalHP = finalST + statBonuses.HP + (secondaryPurchases?.HP || 0);
  const finalFP = finalHT + statBonuses.FP + (secondaryPurchases?.FP || 0);
  const finalWill = Math.max(1, finalIQ + statBonuses.Will + (secondaryPurchases?.Will || 0));
  const finalPer = finalIQ + statBonuses.Per + (secondaryPurchases?.Per || 0);
  const finalSpeed = ((finalHT + finalDX) / 4) + statBonuses.BasicSpeed + ((secondaryPurchases?.BasicSpeed || 0) * 0.25);
  const finalMove = Math.floor(finalSpeed) + (secondaryPurchases?.BasicMove || 0);
  const finalDodge = Math.floor(finalSpeed) + 3;
  const finalSPI = statBonuses.SPI;

  const basicLift = (finalST * finalST) / 5;

  // Calculate budget
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
        <div className={`bg-[#1a1a1a] px-3 py-2 border-b border-[#333] text-[11px] font-bold uppercase ${textAccentClass} transition-colors duration-500 ${isLostControl ? 'eldritch-illegible-panel eldritch-container-distortion' : ''} flex justify-between items-center`}>
          <span>{t.secondary}</span>
          <button 
            onClick={() => setSecondaryModalOpen(true)}
            className="text-[#aaa] hover:text-[#fff] transition-colors"
            title={lang === 'es' ? 'Comprar características secundarias' : 'Buy secondary characteristics'}
          >
            <PlusCircle size={14} />
          </button>
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
            <div className="flex flex-col pb-1 border-b border-[#222]">
              <div className="flex justify-between items-center">
                <span className="text-[12px] text-[#aaa] font-bold">Spirituality (SPI)</span>
                <div className="flex items-center gap-2">
                  <button onClick={() => {
                    const newUsed = spiUsed + 1;
                    setSpiUsed(newUsed);
                    if (finalSPI - newUsed < 0) {
                      setCorruption(Math.min(maxCorruption, corruption + 1));
                    }
                  }} className="px-1.5 py-0.5 bg-[#222] border border-[#444] rounded text-purple-400 text-xs hover:bg-[#333]">-</button>
                  <span className={`font-mono text-[16px] font-bold w-16 text-center ${finalSPI - spiUsed < 0 ? 'text-red-500 animate-pulse' : 'text-purple-500'}`}>{finalSPI - spiUsed} / {finalSPI}</span>
                  <button onClick={() => setSpiUsed(Math.max(0, spiUsed - 1))} className="px-1.5 py-0.5 bg-[#222] border border-[#444] rounded text-purple-400 text-xs hover:bg-[#333]">+</button>
                </div>
              </div>
              {finalSPI > 0 && (finalSPI - spiUsed) <= (finalSPI / 3) && (finalSPI - spiUsed) > 0 && (
                <div className="text-[10px] text-orange-400 mt-1 leading-tight font-semibold bg-[#222] p-1 rounded border border-orange-900/50">
                  ⚠️ {lang === 'es' ? 'Atrición Espiritual: -3 a tiradas de habilidades basadas en SPI y chequeos de Beyonder.' : 'Spiritual Attrition: -3 to all SPI-based skill rolls and Beyonder ability checks.'}
                </div>
              )}
              {finalSPI > 0 && (finalSPI - spiUsed) === 0 && (
                <div className="text-[10px] text-red-400 mt-1 leading-tight font-semibold bg-[#222] p-1 rounded border border-red-900/50">
                  ⚠️ {lang === 'es' ? 'Agotamiento Espiritual: Habilidades y Visión Espiritual desactivadas.' : 'Spiritual Exhaustion: All Beyonder abilities deactivate; cannot activate any SPI-cost abilities; Spirit Vision shuts off.'}
                </div>
              )}
              {finalSPI > 0 && (finalSPI - spiUsed) < 0 && (
                <div className="text-[10px] text-red-500 mt-1 leading-tight font-semibold animate-pulse bg-[#2a1111] p-1 rounded border border-red-900/50">
                  ☠️ {lang === 'es' ? 'Deuda de Alma: +1 Corrupción por cada punto por debajo de 0.' : 'Soul Debt: +1 CoR per 1 point below 0. See CoR (Chapter 6).'}
                </div>
              )}
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
                  {corruption} / {maxCorruption}
                </span>
                <button 
                  onClick={() => setCorruption(Math.min(maxCorruption, corruption + 1))} 
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

      {isSecondaryModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-[#111] border border-[#333] rounded-md w-full max-w-sm flex flex-col shadow-2xl">
            <div className="bg-[#1a1a1a] px-3 py-3 border-b border-[#333] flex justify-between items-center">
              <h3 className="text-[#eee] font-bold text-[13px] uppercase tracking-wider">
                {lang === 'es' ? 'Comprar Secundarias' : 'Buy Secondary Stats'}
              </h3>
              <button onClick={() => setSecondaryModalOpen(false)} className="text-[#888] hover:text-white transition-colors">
                <X size={16} />
              </button>
            </div>
            <div className="p-4 flex flex-col gap-3">
              {[
                { attr: 'HP', cost: 2, val: secondaryPurchases?.HP || 0, max: 10 },
                { attr: 'FP', cost: 3, val: secondaryPurchases?.FP || 0, max: 10 },
                { attr: 'Will', cost: 5, val: secondaryPurchases?.Will || 0, max: 10 },
                { attr: 'Per', cost: 5, val: secondaryPurchases?.Per || 0, max: 10 },
                { attr: 'BasicSpeed', cost: 5, val: secondaryPurchases?.BasicSpeed || 0, label: '+0.25', max: 8 },
                { attr: 'BasicMove', cost: 5, val: secondaryPurchases?.BasicMove || 0, max: 10 },
              ].map(item => (
                <div key={item.attr} className="flex justify-between items-center">
                  <div className="flex items-baseline gap-2">
                    <span className="text-[#eee] font-bold text-sm w-20">{item.attr}</span>
                    <span className="text-[#888] text-[11px]">({item.cost} Character Points/{item.label || '+1'})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => setSecondaryPurchase(item.attr as any, Math.max(0, item.val - 1))}
                      className="w-6 h-6 flex items-center justify-center bg-[#222] border border-[#444] rounded text-[#ccc] text-xs hover:bg-[#333] transition-colors"
                    >-</button>
                    <span className="w-5 text-center font-mono text-sm text-[#eee]">{item.val}</span>
                    <button 
                      onClick={() => setSecondaryPurchase(item.attr as any, Math.min(item.max, item.val + 1))}
                      className="w-6 h-6 flex items-center justify-center bg-[#222] border border-[#444] rounded text-[#ccc] text-xs hover:bg-[#333] transition-colors"
                    >+</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-[#1a1a1a] px-3 py-3 border-t border-[#333] flex justify-end">
              <button 
                onClick={() => setSecondaryModalOpen(false)} 
                className="px-4 py-1.5 bg-[#333] text-white font-bold text-xs rounded hover:bg-[#444] transition-colors uppercase tracking-wider"
              >
                {lang === 'es' ? 'Cerrar' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
