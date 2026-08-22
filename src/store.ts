import { create } from 'zustand';
import { Language, UserSkill, UserItem, CoreAttr, UserTrait, UserQuirk, CustomItemDef } from './types';
import { getAttributeCost } from './utils';

export interface ActiveTransformation {
  abilityId: string;
  name: { en: string; es: string };
  activationGameTime: number;
  durationInSeconds: number;
  statBonuses?: any[];
  maxCorruptionChange?: number;
}

export interface StatusEffect {
  id: string;
  name: string;
  description: string;
  durationInSeconds: number; // 0 for infinite/manual
  activationGameTime: number;
}

export interface CharacterState {
  lang: Language;
  setLang: (lang: Language) => void;

  // Game Time & Transformations
  gameTimeElapsed: number; // in seconds
  addGameTime: (seconds: number) => void;
  activeTransformations: ActiveTransformation[];
  toggleTransformation: (trans: Omit<ActiveTransformation, 'activationGameTime'>) => void;
  
  // Status Effects
  statusEffects: StatusEffect[];
  addStatusEffect: (effect: Omit<StatusEffect, 'id' | 'activationGameTime'>) => void;
  removeStatusEffect: (id: string) => void;

  // Core Attributes
  ST: number;
  DX: number;
  IQ: number;
  HT: number;
  setAttribute: (attr: 'ST' | 'DX' | 'IQ' | 'HT', value: number) => void;

  secondaryPurchases: {
    HP: number;
    FP: number;
    Will: number;
    Per: number;
    BasicSpeed: number;
    BasicMove: number;
  };
  setSecondaryPurchase: (attr: 'HP' | 'FP' | 'Will' | 'Per' | 'BasicSpeed' | 'BasicMove', amount: number) => void;

  // Pathway
  pathwayId: string | null;
  sequenceLevel: 9 | 8 | 7 | 6 | null;
  setPathway: (id: string | null) => void;
  setSequence: (level: 9 | 8 | 7 | 6 | null) => void;

  // Lists
  skills: UserSkill[];
  setSkillPoints: (id: string, points: number) => void;
  removeSkill: (id: string) => void;

  advantages: UserTrait[];
  addAdvantage: (id: string) => void;
  removeAdvantage: (id: string) => void;
  setAdvantageLevel: (id: string, level: number) => void;

  disadvantages: UserTrait[];
  addDisadvantage: (id: string) => void;
  removeDisadvantage: (id: string) => void;
  setDisadvantageLevel: (id: string, level: number) => void;

  quirks: UserQuirk[];
  addQuirk: (quirk: UserQuirk) => void;
  removeQuirk: (index: number) => void;

  inventory: UserItem[];
  customItems: CustomItemDef[];
  addItem: (id: string) => void;
  removeItem: (id: string) => void;
  addCustomItem: (item: CustomItemDef) => void;
  removeCustomItem: (id: string) => void;

  // Money
  moneyPence: number;
  setMoneyPence: (amount: number) => void;
  hpDamage: number;
  setHpDamage: (val: number) => void;
  fpSpent: number;
  setFpSpent: (val: number) => void;

  // Vitals & Corruption
  spiUsed: number;
  setSpiUsed: (val: number) => void;
  corruption: number;
  setCorruption: (val: number) => void;

  // Viewer State
  viewerData: { title: string; desc: string; extra?: string; type?: string; rollTarget?: number; spiCost?: number } | null;
  setViewerData: (data: { title: string; desc: string; extra?: string; type?: string; rollTarget?: number; spiCost?: number } | null) => void;

  exportData: () => string;
  importData: (json: string) => void;
}

const initialState = {
  ST: 9,
  DX: 9,
  IQ: 9,
  HT: 9,
  pathwayId: null,
  sequenceLevel: null,
  skills: [],
  advantages: [],
  disadvantages: [],
  quirks: [],
  inventory: [],
  customItems: [],
  moneyPence: 240, // 1 pound default
  spiUsed: 0,
  corruption: 0,
  secondaryPurchases: { HP: 0, FP: 0, Will: 0, Per: 0, BasicSpeed: 0, BasicMove: 0 },
  gameTimeElapsed: 0,
  activeTransformations: [],
  statusEffects: [],
};

export const useCharacterStore = create<CharacterState>((set, get) => ({
  lang: 'es',
  setLang: (lang) => set({ lang }),

  // Game Time & Transformations
  gameTimeElapsed: initialState.gameTimeElapsed,
  activeTransformations: initialState.activeTransformations,
  statusEffects: initialState.statusEffects,
  addGameTime: (seconds: number) => set((state) => {
    const newTime = state.gameTimeElapsed + seconds;
    // Auto-remove expired transformations
    const newTransformations = state.activeTransformations.filter(t => 
      t.activationGameTime + t.durationInSeconds > newTime
    );
    // Auto-remove expired status effects
    const newStatuses = state.statusEffects.filter(s => 
      s.durationInSeconds === 0 || s.activationGameTime + s.durationInSeconds > newTime
    );
    return { gameTimeElapsed: newTime, activeTransformations: newTransformations, statusEffects: newStatuses };
  }),
  toggleTransformation: (trans) => set((state) => {
    const exists = state.activeTransformations.find(t => t.abilityId === trans.abilityId);
    if (exists) {
      return { activeTransformations: state.activeTransformations.filter(t => t.abilityId !== trans.abilityId) };
    }
    return { activeTransformations: [...state.activeTransformations, { ...trans, activationGameTime: state.gameTimeElapsed }] };
  }),
  addStatusEffect: (effect) => set((state) => ({
    statusEffects: [...state.statusEffects, { ...effect, id: Math.random().toString(36).substr(2, 9), activationGameTime: state.gameTimeElapsed }]
  })),
  removeStatusEffect: (id) => set((state) => ({
    statusEffects: state.statusEffects.filter(s => s.id !== id)
  })),
  
  ...initialState,

  setAttribute: (attr, value) => set({ [attr]: value }),
  setSecondaryPurchase: (attr, amount) => set((state) => ({ secondaryPurchases: { ...state.secondaryPurchases, [attr]: amount } })),
  setPathway: (id) => set({ pathwayId: id, sequenceLevel: id ? 9 : null }),
  setSequence: (level) => set({ sequenceLevel: level }),

  setSkillPoints: (id, points) => set((state) => {
    const existing = state.skills.find(s => s.id === id);
    if (existing) {
      return { skills: state.skills.map(s => s.id === id ? { ...s, points } : s) };
    }
    return { skills: [...state.skills, { id, points }] };
  }),
  removeSkill: (id) => set((state) => ({ skills: state.skills.filter(s => s.id !== id) })),

  addAdvantage: (id) => set((state) => {
    if (!state.advantages.find(a => a.id === id)) {
      return { advantages: [...state.advantages, { id, level: 1 }] };
    }
    return state;
  }),
  removeAdvantage: (id) => set((state) => ({ advantages: state.advantages.filter(a => a.id !== id) })),
  setAdvantageLevel: (id, level) => set((state) => ({
    advantages: state.advantages.map(a => a.id === id ? { ...a, level } : a)
  })),

  addDisadvantage: (id) => set((state) => {
    if (!state.disadvantages.find(d => d.id === id)) {
      return { disadvantages: [...state.disadvantages, { id, level: 1 }] };
    }
    return state;
  }),
  removeDisadvantage: (id) => set((state) => ({ disadvantages: state.disadvantages.filter(d => d.id !== id) })),
  setDisadvantageLevel: (id, level) => set((state) => ({
    disadvantages: state.disadvantages.map(d => d.id === id ? { ...d, level } : d)
  })),

  addQuirk: (quirk) => set((state) => ({ quirks: [...state.quirks, quirk] })),
  removeQuirk: (index) => set((state) => ({ quirks: state.quirks.filter((_, i) => i !== index) })),

  addItem: (id) => set((state) => {
    const existing = state.inventory.find(i => i.id === id);
    if (existing) {
      return { inventory: state.inventory.map(i => i.id === id ? { ...i, quantity: i.quantity + 1 } : i) };
    }
    return { inventory: [...state.inventory, { id, quantity: 1 }] };
  }),
  removeItem: (id) => set((state) => {
    const existing = state.inventory.find(i => i.id === id);
    if (existing && existing.quantity > 1) {
      return { inventory: state.inventory.map(i => i.id === id ? { ...i, quantity: i.quantity - 1 } : i) };
    }
    return { inventory: state.inventory.filter(i => i.id !== id) };
  }),

  addCustomItem: (item) => set((state) => ({
    customItems: [...state.customItems, item],
    inventory: [...state.inventory, { id: item.id, quantity: 1 }]
  })),
  removeCustomItem: (id) => set((state) => ({
    customItems: state.customItems.filter(i => i.id !== id),
    inventory: state.inventory.filter(i => i.id !== id)
  })),

  moneyPence: 240,
  setMoneyPence: (amount) => set({ moneyPence: amount }),
  hpDamage: 0,
  setHpDamage: (val) => set({ hpDamage: val }),
  fpSpent: 0,
  setFpSpent: (val) => set({ fpSpent: val }),

  spiUsed: 0,
  setSpiUsed: (val) => set({ spiUsed: val }),
  corruption: 0,
  setCorruption: (val) => set({ corruption: val }),

  viewerData: null,
  setViewerData: (data) => set({ viewerData: data }),

  exportData: () => {
    const state = get();
    const dataToExport = {
      ST: state.ST, DX: state.DX, IQ: state.IQ, HT: state.HT,
      pathwayId: state.pathwayId, sequenceLevel: state.sequenceLevel,
      skills: state.skills, advantages: state.advantages, disadvantages: state.disadvantages,
      quirks: state.quirks, inventory: state.inventory, customItems: state.customItems,
      moneyPence: state.moneyPence, spiUsed: state.spiUsed, corruption: state.corruption,
      secondaryPurchases: state.secondaryPurchases
    };
    return JSON.stringify(dataToExport, null, 2);
  },
  importData: (json: string) => {
    try {
      const data = JSON.parse(json);
      
      if (data.advantages && typeof data.advantages[0] === 'string') {
        data.advantages = data.advantages.map((id: string) => ({ id, level: 1 }));
      }
      if (data.disadvantages && typeof data.disadvantages[0] === 'string') {
        data.disadvantages = data.disadvantages.map((id: string) => ({ id, level: 1 }));
      }
      
      if (typeof data.quirksCount === 'number' && !data.quirks) {
        data.quirks = Array(data.quirksCount).fill({ name: "Imported Quirk", cost: -1 });
      } else if (data.quirks && typeof data.quirks[0] === 'string') {
        data.quirks = data.quirks.map((q: string) => ({ name: q, cost: -1 }));
      }
      
      if (!data.customItems) {
        data.customItems = [];
      }
      if (!data.secondaryPurchases) {
        data.secondaryPurchases = { HP: 0, FP: 0, Will: 0, Per: 0, BasicSpeed: 0, BasicMove: 0 };
      }

      set({ ...initialState, ...data });
    } catch (e) {
      alert("Invalid JSON file");
    }
  }
}));
