import { useMemo, useEffect } from 'react';
import { useCharacterStore } from '../store';
import { PATHWAYS } from '../data/pathwaysData';

export interface CorruptionMetrics {
  corruption: number;
  finalWill: number;
  maxCorruption: number;
  corruptionPercent: number;
  colorStage: 'gold' | 'fadedGold' | 'bronze' | 'matteRed' | 'brightRed';
  borderClass: string;
  borderColorHex: string;
  textAccentClass: string;
  bgAccentClass: string;
  badgeClass: string;
  show3RedEyes: boolean;
  show5RedEyes: boolean;
  showVioletEye: boolean;
  showRedCracks: boolean;
  isLostControl: boolean;
}

export function useCorruptionMetrics(): CorruptionMetrics {
  const { IQ, pathwayId, sequenceLevel, corruption, setHpDamage, ST } = useCharacterStore();

  const currentPathway = useMemo(() => {
    if (!pathwayId || !sequenceLevel) return null;
    return PATHWAYS.find(p => p.id === pathwayId) || null;
  }, [pathwayId, sequenceLevel]);

  const statBonuses = useMemo(() => {
    const bonuses: Record<string, number> = { ST: 0, DX: 0, IQ: 0, HT: 0, Per: 0, Will: 0, SPI: 0, BasicSpeed: 0, HP: 0, FP: 0 };
    if (!pathwayId || !sequenceLevel || !currentPathway) return bonuses;
    
    for (let seq = 9; seq >= sequenceLevel; seq--) {
      const seqData = currentPathway.sequences.find(s => s.level === seq);
      if (seqData) {
        seqData.statBonuses.forEach(b => {
          bonuses[b.stat] += b.bonus;
        });
      }
    }
    return bonuses;
  }, [pathwayId, sequenceLevel, currentPathway]);

  const finalIQ = IQ + (statBonuses.IQ || 0);
  const finalWill = Math.max(1, finalIQ + (statBonuses.Will || 0));
  const finalST = ST + (statBonuses.ST || 0);
  const finalHP = finalST + (statBonuses.HP || 0);
  const maxCorruption = finalWill;

  const corruptionPercent = Math.min(100, Math.max(0, (corruption / maxCorruption) * 100));

  // Determine stage colors
  // < 25%: Full Gold
  // 25% - 34.99%: Faded Gold (pierde intensidad el amarillo)
  // 35% - 49.99%: Bronze
  // 50% - 74.99%: Matte Red
  // >= 75%: Bright Red
  let colorStage: 'gold' | 'fadedGold' | 'bronze' | 'matteRed' | 'brightRed' = 'gold';
  let borderClass = 'border-yellow-500';
  let borderColorHex = '#eab308';
  let textAccentClass = 'text-yellow-500';
  let bgAccentClass = 'bg-yellow-500';
  let badgeClass = 'bg-yellow-500 text-black shadow-[0_0_10px_rgba(234,179,8,0.4)]';

  if (corruptionPercent >= 75) {
    colorStage = 'brightRed';
    borderClass = 'border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.6)]';
    borderColorHex = '#ef4444';
    textAccentClass = 'text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]';
    bgAccentClass = 'bg-red-600';
    badgeClass = 'bg-red-600 text-white shadow-[0_0_15px_rgba(239,68,68,0.8)] animate-pulse';
  } else if (corruptionPercent >= 50) {
    colorStage = 'matteRed';
    borderClass = 'border-[#991b1b]';
    borderColorHex = '#991b1b';
    textAccentClass = 'text-red-700';
    bgAccentClass = 'bg-red-800';
    badgeClass = 'bg-red-900 text-red-200 border border-red-700';
  } else if (corruptionPercent >= 35) {
    colorStage = 'bronze';
    borderClass = 'border-[#cd7f32]';
    borderColorHex = '#cd7f32';
    textAccentClass = 'text-[#cd7f32]';
    bgAccentClass = 'bg-[#cd7f32]';
    badgeClass = 'bg-[#cd7f32] text-black shadow-[0_0_8px_rgba(205,127,50,0.4)]';
  } else if (corruptionPercent >= 25) {
    colorStage = 'fadedGold';
    borderClass = 'border-[#b89528]/80';
    borderColorHex = '#b89528';
    textAccentClass = 'text-[#cca32e]';
    bgAccentClass = 'bg-[#b89528]';
    badgeClass = 'bg-[#b89528] text-black/90 shadow-[0_0_4px_rgba(184,149,40,0.2)]';
  }

  const show3RedEyes = corruptionPercent >= 35;
  const show5RedEyes = corruptionPercent >= 50;
  const showVioletEye = corruptionPercent >= 75;
  const showRedCracks = corruptionPercent >= 90;
  const isLostControl = corruptionPercent >= 100;

  // If corruption hits 100%, life drops to 0
  useEffect(() => {
    if (isLostControl) {
      setHpDamage(finalHP);
    }
  }, [isLostControl, finalHP, setHpDamage]);

  return {
    corruption,
    finalWill,
    maxCorruption,
    corruptionPercent,
    colorStage,
    borderClass,
    borderColorHex,
    textAccentClass,
    bgAccentClass,
    badgeClass,
    show3RedEyes,
    show5RedEyes,
    showVioletEye,
    showRedCracks,
    isLostControl,
  };
}
