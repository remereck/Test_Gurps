export type Language = 'en' | 'es';

export interface Attribute {
  name: 'ST' | 'DX' | 'IQ' | 'HT';
  value: number; // Base is 9
}

export type CoreAttr = 'ST' | 'DX' | 'IQ' | 'HT' | 'Per' | 'Will' | 'SPI';
export type SkillDiff = 'E' | 'A' | 'H' | 'VH' | 'WC';

export interface SkillDef {
  id: string;
  name: { en: string; es: string };
  attr: CoreAttr;
  difficulty: SkillDiff;
  description: { en: string; es: string };
}

export interface UserSkill {
  id: string;
  points: number;
}

export interface TraitDef {
  id: string;
  name: { en: string; es: string };
  cost: number;
  description: { en: string; es: string };
  hasLevels?: boolean;
  maxLevel?: number;
}

export interface UserQuirk { name: string; cost: number; }

export interface CustomItemDef { id: string; name: string; costInPence: number; weightLbs: number; description: string; }

export interface UserTrait {
  id: string;
  level: number;
}

export interface ItemDef {
  id: string;
  name: { en: string; es: string };
  costInPence: number;
  weightLbs: number;
  description: { en: string; es: string };
}

export interface UserItem {
  id: string;
  quantity: number;
}

export interface PotionSkillBonus {
  skillId: string;
  bonus: number;
}

export interface PotionStatBonus {
  stat: CoreAttr | 'BasicSpeed' | 'Basic Speed' | 'HP' | 'FP' | string;
  bonus: number;
}

export interface PotionAbility {
  id: string;
  name: { en: string; es: string };
  type: 'passive' | 'active' | 'drawback';
  description: { en: string; es: string };
  spiCost?: number;
}

export interface Sequence {
  level: number;
  name?: { en: string; es: string } | string;
  statBonuses: PotionStatBonus[];
  skillBonuses: PotionSkillBonus[];
  abilities: PotionAbility[];
}

export interface Pathway {
  id: string;
  name: { en: string; es: string };
  sequences: Sequence[];
}
