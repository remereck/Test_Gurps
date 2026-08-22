import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sanitize(input: string): string {
  return input || '';
}

// Pence to standard format: £ X s Y d Z
export function formatMoney(pence: number): string {
  if (pence < 0) return "-";
  const pounds = Math.floor(pence / 240);
  const remainingAfterPounds = pence % 240;
  const soli = Math.floor(remainingAfterPounds / 12);
  const d = remainingAfterPounds % 12;

  let res = [];
  if (pounds > 0) res.push(`£${pounds}`);
  if (soli > 0) res.push(`${soli}s`);
  if (d > 0 || res.length === 0) res.push(`${d}d`);
  return res.join(" ");
}

export function getAttributeCost(base: number, target: number, isDxIq: boolean): number {
  if (target <= base) return 0;
  const multiplier = isDxIq ? 20 : 10;
  return (target - base) * multiplier;
}

export function getSkillLevelFromPoints(attrVal: number, diff: string, pts: number): number {
  let diffOffset = diff === 'E' ? 1 : diff === 'A' ? 2 : diff === 'H' ? 3 : diff === 'VH' ? 4 : diff === 'WC' ? 0 : 4;  
  
  if (pts === 0) {
      if (diff === 'VH' || diff === 'WC') return -999;
      return attrVal - (diffOffset + 3); 
  }
  
  if (diff === 'WC') {
      if (pts < 12) return attrVal - 3 + Math.floor(pts / 3);
      return attrVal + Math.floor((pts - 12) / 12);
  }

  let step = 0;
  if (pts === 1) step = 1;
  else if (pts === 2 || pts === 3) step = 2;
  else if (pts >= 4) step = 3 + Math.floor((pts - 4) / 4);
  
  return attrVal + step - diffOffset;
}
