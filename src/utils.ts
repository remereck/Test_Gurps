import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sanitize(input: string): string {
  if (!input) return '';
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;'
  };
  const reg = /[&<>"']/ig;
  return input.replace(reg, (match) => (map[match]));
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
  let cost = 0;
  const multiplier = isDxIq ? 20 : 10;
  for (let i = base + 1; i <= target; i++) {
    cost += multiplier * Math.pow(2, i - 10);
  }
  return cost;
}

export function getSkillLevelFromPoints(attrVal: number, diff: string, pts: number): number {
  let diffOffset = diff === 'E' ? 1 : diff === 'A' ? 2 : diff === 'H' ? 3 : 4;
  
  if (pts === 0) {
      if (diff === 'VH') return -999;
      return attrVal - (diffOffset + 3);
  }
  let step = 0;
  if (pts >= 1) step = 1;
  if (pts >= 2) step = 2;
  if (pts >= 4) step = 3;
  if (pts >= 8) step = 4;
  if (pts >= 16) step = 5;
  if (pts >= 32) step = 6;
  if (pts >= 64) step = 7;
  return attrVal + step - diffOffset;
}
