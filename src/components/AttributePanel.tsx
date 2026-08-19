import React, { useMemo } from 'react';
import { useCharacterStore } from '../store';
import { TRANSLATIONS } from '../i18n';
import { getAttributeCost, getSkillLevelFromPoints } from '../utils';
import { ADVANTAGES, DISADVANTAGES } from '../data/traitsData';
import { PATHWAYS } from '../data/pathwaysData';

export default function AttributePanel() {
  const { lang, ST, DX, IQ, HT, setAttribute, pathwayId, sequenceLevel, disadvantages, quirks, skills, advantages, setViewerData, spiUsed, setSpiUsed, corruption, setCorruption, hpDamage, setHpDamage, fpSpent, setFpSpent } = useCharacterStore();
  const t = TRANSLATIONS[lang];

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
  const finalWill = finalIQ + statBonuses.Will;
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

  return (
    <div className="flex flex-col gap-3">
      <section className="bg-[#111] border border-[#333] rounded-md flex flex-col overflow-hidden shrink-0">
        <div className="bg-[#1a1a1a] px-3 py-2 border-b border-[#333] text-[11px] font-bold uppercase text-yellow-500">
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
                  <button onClick={() => setAttribute(attr, Math.max(9, rawVal - 1))} className="px-1.5 py-0.5 bg-[#222] border border-[#444] rounded text-yellow-500 text-xs hover:bg-[#333]">-</button>
                  <span className="w-5 text-center text-[12px]">{rawVal}</span>
                  <button onClick={() => setAttribute(attr, rawVal + 1)} className="px-1.5 py-0.5 bg-[#222] border border-[#444] rounded text-yellow-500 text-xs hover:bg-[#333]">+</button>
                </div>
                <span className="font-mono text-[16px] font-bold text-[#e5e5e5] w-16 text-right">
                  {finalVal} <span className="text-[10px] text-[#aaa] font-sans">[{getAttributeCost(9, rawVal, isExpensive)}]</span>
                </span>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-[#111] border border-[#333] rounded-md flex flex-col overflow-hidden shrink-0">
        <div className="bg-[#1a1a1a] px-3 py-2 border-b border-[#333] text-[11px] font-bold uppercase text-yellow-500">
          {t.secondary}
        </div>
        <div className="p-2.5 flex flex-col gap-2">
          <div className="flex justify-between items-center pb-1 border-b border-[#222]">
            <span className="text-[12px] text-[#aaa] font-bold w-12">HP</span>
            <div className="flex items-center gap-2">
              <button onClick={() => setHpDamage(hpDamage + 1)} className="px-1.5 py-0.5 bg-[#222] border border-[#444] rounded text-red-400 text-xs hover:bg-[#333]" title="Take Damage">-</button>
              <span className="font-mono text-[16px] font-bold w-16 text-center text-red-500">{finalHP - hpDamage} / {finalHP}</span>
              <button onClick={() => setHpDamage(Math.max(0, hpDamage - 1))} className="px-1.5 py-0.5 bg-[#222] border border-[#444] rounded text-red-400 text-xs hover:bg-[#333]" title="Heal">+</button>
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
          <div className="flex justify-between items-center pb-1">
            <span className="text-[12px] text-red-500 font-bold uppercase tracking-wide">Corruption</span>
            <div className="flex items-center gap-2">
              <button onClick={() => setCorruption(Math.max(0, corruption - 1))} className="px-1.5 py-0.5 bg-[#222] border border-[#444] rounded text-red-500 text-xs hover:bg-[#333]">-</button>
              <span className="font-mono text-[16px] font-bold text-red-500 w-8 text-center">{corruption}</span>
              <button onClick={() => setCorruption(corruption + 1)} className="px-1.5 py-0.5 bg-[#222] border border-[#444] rounded text-red-500 text-xs hover:bg-[#333]">+</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
