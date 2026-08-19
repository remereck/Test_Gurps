import { ItemDef } from '../types';

export interface ExtendedItemDef extends ItemDef {
  category?: string;
}

export const ITEMS: ExtendedItemDef[] = [
  {
    "id": "wpn_revolver_38_cal",
    "name": {
      "en": "Revolver (.38 cal)",
      "es": "Revolver (.38 cal)"
    },
    "costInPence": 720,
    "weightLbs": 2.0,
    "category": "Weapons",
    "description": {
      "en": "Damage: 2d pi | Acc: 2 | Range: 150/1800 | Skill: Guns (Revolver) | Cost: \u00a33",
      "es": "Da\u00f1o: 2d pi | Prec: 2 | Alcance: 150/1800 | Habilidad: Guns (Revolver) | Costo: \u00a33"
    }
  },
  {
    "id": "wpn_revolver_44_cal",
    "name": {
      "en": "Revolver (.44 cal)",
      "es": "Revolver (.44 cal)"
    },
    "costInPence": 960,
    "weightLbs": 2.0,
    "category": "Weapons",
    "description": {
      "en": "Damage: 2d+2 pi | Acc: 2 | Range: 175/1900 | Skill: Guns (Revolver) | Cost: \u00a34",
      "es": "Da\u00f1o: 2d+2 pi | Prec: 2 | Alcance: 175/1900 | Habilidad: Guns (Revolver) | Costo: \u00a34"
    }
  },
  {
    "id": "wpn_bolt_action_rifle",
    "name": {
      "en": "Bolt-Action Rifle",
      "es": "Bolt-Action Rifle"
    },
    "costInPence": 1920,
    "weightLbs": 8.0,
    "category": "Weapons",
    "description": {
      "en": "Damage: 5d pi+ | Acc: 4 | Range: 500/3500 | Skill: Guns (Rifle) | Cost: \u00a38",
      "es": "Da\u00f1o: 5d pi+ | Prec: 4 | Alcance: 500/3500 | Habilidad: Guns (Rifle) | Costo: \u00a38"
    }
  },
  {
    "id": "wpn_hunting_rifle",
    "name": {
      "en": "Hunting Rifle",
      "es": "Hunting Rifle"
    },
    "costInPence": 1920,
    "weightLbs": 8.0,
    "category": "Weapons",
    "description": {
      "en": "Damage: 4d pi | Acc: 3 | Range: 500/3500 | Skill: Guns (Rifle) | Cost: \u00a38",
      "es": "Da\u00f1o: 4d pi | Prec: 3 | Alcance: 500/3500 | Habilidad: Guns (Rifle) | Costo: \u00a38"
    }
  },
  {
    "id": "wpn_double_barrel_shotgun",
    "name": {
      "en": "Double-Barrel Shotgun",
      "es": "Double-Barrel Shotgun"
    },
    "costInPence": 960,
    "weightLbs": 8.0,
    "category": "Weapons",
    "description": {
      "en": "Damage: 1d+1 pi | Acc: 1 | Range: 40/800 | Skill: Guns (Shotgun) | Cost: \u00a34",
      "es": "Da\u00f1o: 1d+1 pi | Prec: 1 | Alcance: 40/800 | Habilidad: Guns (Shotgun) | Costo: \u00a34"
    }
  },
  {
    "id": "wpn_combat_knife",
    "name": {
      "en": "Combat Knife",
      "es": "Combat Knife"
    },
    "costInPence": 120,
    "weightLbs": 1.0,
    "category": "Weapons",
    "description": {
      "en": "Damage: sw-1 cut / thr / imp | Acc: 0 | Range: C/1 | Skill: Knife | Cost: 10s",
      "es": "Da\u00f1o: sw-1 cut / thr / imp | Prec: 0 | Alcance: C/1 | Habilidad: Knife | Costo: 10s"
    }
  },
  {
    "id": "wpn_truncheonbaton",
    "name": {
      "en": "Truncheon/Baton",
      "es": "Truncheon/Baton"
    },
    "costInPence": 60,
    "weightLbs": 2.0,
    "category": "Weapons",
    "description": {
      "en": "Damage: sw cr | Acc: 0 | Range: C | Skill: Brawling | Cost: 5s",
      "es": "Da\u00f1o: sw cr | Prec: 0 | Alcance: C | Habilidad: Brawling | Costo: 5s"
    }
  },
  {
    "id": "wpn_hand_axe",
    "name": {
      "en": "Hand Axe",
      "es": "Hand Axe"
    },
    "costInPence": 96,
    "weightLbs": 3.0,
    "category": "Weapons",
    "description": {
      "en": "Damage: sw+1 cut | Acc: 1 | Range: C/1 | Skill: Axe/Mace | Cost: 8s",
      "es": "Da\u00f1o: sw+1 cut | Prec: 1 | Alcance: C/1 | Habilidad: Axe/Mace | Costo: 8s"
    }
  },
  {
    "id": "wpn_broadsword",
    "name": {
      "en": "Broadsword",
      "es": "Broadsword"
    },
    "costInPence": 720,
    "weightLbs": 3.0,
    "category": "Weapons",
    "description": {
      "en": "Damage: sw+1 cut / thr+2 / imp | Acc: 0 | Range: C | Skill: Broadsword | Cost: \u00a33",
      "es": "Da\u00f1o: sw+1 cut / thr+2 / imp | Prec: 0 | Alcance: C | Habilidad: Broadsword | Costo: \u00a33"
    }
  },
  {
    "id": "arm_heavy_coat_leathercanvas",
    "name": {
      "en": "Heavy Coat (leather/canvas)",
      "es": "Heavy Coat (leather/canvas)"
    },
    "costInPence": 480,
    "weightLbs": 4.0,
    "category": "Armour & Clothing",
    "description": {
      "en": "DR: 1 | Concealable; protects torso and arms | Cost: \u00a32",
      "es": "RD: 1 | Concealable; protects torso and arms | Costo: \u00a32"
    }
  },
  {
    "id": "arm_mail_shirt_under_coat",
    "name": {
      "en": "Mail Shirt (under coat)",
      "es": "Mail Shirt (under coat)"
    },
    "costInPence": 2400,
    "weightLbs": 12.0,
    "category": "Armour & Clothing",
    "description": {
      "en": "DR: 3/1 | DR 3 vs cutting, DR 1 vs other; worn under clothing | Cost: \u00a310",
      "es": "RD: 3/1 | DR 3 vs cutting, DR 1 vs other; worn under clothing | Costo: \u00a310"
    }
  },
  {
    "id": "arm_bulletproof_vest_early",
    "name": {
      "en": "Bulletproof Vest (early)",
      "es": "Bulletproof Vest (early)"
    },
    "costInPence": 6000,
    "weightLbs": 15.0,
    "category": "Armour & Clothing",
    "description": {
      "en": "DR: 4 | Bulky, obvious; TL5+1 prototype; stops most pistol rounds | Cost: \u00a325",
      "es": "RD: 4 | Bulky, obvious; TL5+1 prototype; stops most pistol rounds | Costo: \u00a325"
    }
  },
  {
    "id": "eq_lantern_oil",
    "name": {
      "en": "Lantern (oil)",
      "es": "Lantern (oil)"
    },
    "costInPence": 36,
    "weightLbs": 1.5,
    "category": "General Tools",
    "description": {
      "en": "Illuminates 2 m radius; 2 hrs/pint of oil | Cost: 3s",
      "es": "Illuminates 2 m radius; 2 hrs/pint of oil | Costo: 3s"
    }
  },
  {
    "id": "eq_rope_50_ft_hemp",
    "name": {
      "en": "Rope (50 ft hemp)",
      "es": "Rope (50 ft hemp)"
    },
    "costInPence": 24,
    "weightLbs": 2.0,
    "category": "General Tools",
    "description": {
      "en": "Supports up to 180 kg | Cost: 2s",
      "es": "Supports up to 180 kg | Costo: 2s"
    }
  },
  {
    "id": "eq_rope_20_ft",
    "name": {
      "en": "Rope, 20 ft",
      "es": "Rope, 20 ft"
    },
    "costInPence": 12,
    "weightLbs": 2.0,
    "category": "General Tools",
    "description": {
      "en": "Light duty; climbing or binding | Cost: 1s",
      "es": "Light duty; climbing or binding | Costo: 1s"
    }
  },
  {
    "id": "eq_lock_picks_set",
    "name": {
      "en": "Lock picks (set)",
      "es": "Lock picks (set)"
    },
    "costInPence": 240,
    "weightLbs": 0.5,
    "category": "General Tools",
    "description": {
      "en": "Required for Lockpicking skill; full set | Cost: \u00a31",
      "es": "Required for Lockpicking skill; full set | Costo: \u00a31"
    }
  },
  {
    "id": "eq_lockpick_set_basic",
    "name": {
      "en": "Lockpick set (basic)",
      "es": "Lockpick set (basic)"
    },
    "costInPence": 36,
    "weightLbs": 0.5,
    "category": "General Tools",
    "description": {
      "en": "Low-quality; -1 to Lockpicking | Cost: 3s",
      "es": "Low-quality; -1 to Lockpicking | Costo: 3s"
    }
  },
  {
    "id": "eq_notebook_and_pen",
    "name": {
      "en": "Notebook and pen",
      "es": "Notebook and pen"
    },
    "costInPence": 12,
    "weightLbs": 0.5,
    "category": "General Tools",
    "description": {
      "en": "Record keeping; required for investigative work | Cost: 1s",
      "es": "Record keeping; required for investigative work | Costo: 1s"
    }
  },
  {
    "id": "eq_pencil_case_6_pencils",
    "name": {
      "en": "Pencil case (6 pencils)",
      "es": "Pencil case (6 pencils)"
    },
    "costInPence": 1,
    "weightLbs": 0.1,
    "category": "General Tools",
    "description": {
      "en": "Spare pencils and eraser | Cost: 1d",
      "es": "Spare pencils and eraser | Costo: 1d"
    }
  },
  {
    "id": "eq_ink_bottle_small",
    "name": {
      "en": "Ink bottle (small)",
      "es": "Ink bottle (small)"
    },
    "costInPence": 3,
    "weightLbs": 0.5,
    "category": "General Tools",
    "description": {
      "en": "Refill for fountain pens; 50 pages' worth | Cost: 3d",
      "es": "Refill for fountain pens; 50 pages' worth | Costo: 3d"
    }
  },
  {
    "id": "eq_parchment_5_sheets",
    "name": {
      "en": "Parchment (5 sheets)",
      "es": "Parchment (5 sheets)"
    },
    "costInPence": 2,
    "weightLbs": 0.5,
    "category": "General Tools",
    "description": {
      "en": "Formal documents or diagrams | Cost: 2d",
      "es": "Formal documents or diagrams | Costo: 2d"
    }
  },
  {
    "id": "eq_quill__penknife",
    "name": {
      "en": "Quill & penknife",
      "es": "Quill & penknife"
    },
    "costInPence": 12,
    "weightLbs": 0.5,
    "category": "General Tools",
    "description": {
      "en": "Writing set; penknife usable as tiny blade | Cost: 1s",
      "es": "Writing set; penknife usable as tiny blade | Costo: 1s"
    }
  },
  {
    "id": "eq_compass_brass",
    "name": {
      "en": "Compass (brass)",
      "es": "Compass (brass)"
    },
    "costInPence": 36,
    "weightLbs": 0.5,
    "category": "General Tools",
    "description": {
      "en": "Navigation (Land) +1 when exploring unfamiliar terrain | Cost: 3s",
      "es": "Navigation (Land) +1 when exploring unfamiliar terrain | Costo: 3s"
    }
  },
  {
    "id": "eq_magnifying_glass",
    "name": {
      "en": "Magnifying glass",
      "es": "Magnifying glass"
    },
    "costInPence": 36,
    "weightLbs": 0.5,
    "category": "General Tools",
    "description": {
      "en": "+1 to Search for fine details | Cost: 3s",
      "es": "+1 to Search for fine details | Costo: 3s"
    }
  },
  {
    "id": "eq_small_scale_brass",
    "name": {
      "en": "Small scale (brass)",
      "es": "Small scale (brass)"
    },
    "costInPence": 60,
    "weightLbs": 0.5,
    "category": "General Tools",
    "description": {
      "en": "Weighing small goods; Merchant +1 when appraising unknown items | Cost: 5s",
      "es": "Weighing small goods; Merchant +1 when appraising unknown items | Costo: 5s"
    }
  },
  {
    "id": "eq_map_case_leather",
    "name": {
      "en": "Map case (leather)",
      "es": "Map case (leather)"
    },
    "costInPence": 24,
    "weightLbs": 0.5,
    "category": "General Tools",
    "description": {
      "en": "Protects maps and documents from weather | Cost: 2s",
      "es": "Protects maps and documents from weather | Costo: 2s"
    }
  },
  {
    "id": "eq_canteen_tin",
    "name": {
      "en": "Canteen (tin)",
      "es": "Canteen (tin)"
    },
    "costInPence": 12,
    "weightLbs": 0.5,
    "category": "General Tools",
    "description": {
      "en": "Holds 1 L of water | Cost: 1s",
      "es": "Holds 1 L of water | Costo: 1s"
    }
  },
  {
    "id": "eq_chalk_bag",
    "name": {
      "en": "Chalk bag",
      "es": "Chalk bag"
    },
    "costInPence": 1,
    "weightLbs": 0.5,
    "category": "General Tools",
    "description": {
      "en": "Chalk for marking; 20 pieces | Cost: 1d",
      "es": "Chalk for marking; 20 pieces | Costo: 1d"
    }
  },
  {
    "id": "eq_sand_timer_1_min",
    "name": {
      "en": "Sand timer (1 min)",
      "es": "Sand timer (1 min)"
    },
    "costInPence": 24,
    "weightLbs": 0.5,
    "category": "General Tools",
    "description": {
      "en": "Short-duration timer | Cost: 2s",
      "es": "Short-duration timer | Costo: 2s"
    }
  },
  {
    "id": "eq_candles_3x",
    "name": {
      "en": "Candles (3x)",
      "es": "Candles (3x)"
    },
    "costInPence": 1,
    "weightLbs": 0.5,
    "category": "General Tools",
    "description": {
      "en": "Poor light; 1 m radius dim light each; 2 hrs each | Cost: 1d",
      "es": "Poor light; 1 m radius dim light each; 2 hrs each | Costo: 1d"
    }
  },
  {
    "id": "eq_candles_6x_scented",
    "name": {
      "en": "Candles (6x, scented)",
      "es": "Candles (6x, scented)"
    },
    "costInPence": 2,
    "weightLbs": 0.5,
    "category": "General Tools",
    "description": {
      "en": "As above; used in rituals | Cost: 2d",
      "es": "As above; used in rituals | Costo: 2d"
    }
  },
  {
    "id": "eq_incense_sticks_10x",
    "name": {
      "en": "Incense sticks (10x)",
      "es": "Incense sticks (10x)"
    },
    "costInPence": 1,
    "weightLbs": 0.5,
    "category": "General Tools",
    "description": {
      "en": "Masking odors; ritual atmosphere | Cost: 1d",
      "es": "Masking odors; ritual atmosphere | Costo: 1d"
    }
  },
  {
    "id": "eq_caffeine_pills_tin",
    "name": {
      "en": "Caffeine pills (tin)",
      "es": "Caffeine pills (tin)"
    },
    "costInPence": 1,
    "weightLbs": 0.5,
    "category": "General Tools",
    "description": {
      "en": "Stay awake for +2 hrs; fatigue recovery delayed | Cost: 1d",
      "es": "Stay awake for +2 hrs; fatigue recovery delayed | Costo: 1d"
    }
  },
  {
    "id": "eq_coffee_ground_bag",
    "name": {
      "en": "Coffee, ground (bag)",
      "es": "Coffee, ground (bag)"
    },
    "costInPence": 1,
    "weightLbs": 0.5,
    "category": "General Tools",
    "description": {
      "en": "Enough for 10 cups; morale booster | Cost: 1d",
      "es": "Enough for 10 cups; morale booster | Costo: 1d"
    }
  },
  {
    "id": "eq_whistle_signal",
    "name": {
      "en": "Whistle (signal)",
      "es": "Whistle (signal)"
    },
    "costInPence": 2,
    "weightLbs": 0.5,
    "category": "General Tools",
    "description": {
      "en": "Audible up to 200 m | Cost: 2d",
      "es": "Audible up to 200 m | Costo: 2d"
    }
  },
  {
    "id": "eq_pocket_watch_tin",
    "name": {
      "en": "Pocket watch (tin)",
      "es": "Pocket watch (tin)"
    },
    "costInPence": 60,
    "weightLbs": 0.5,
    "category": "General Tools",
    "description": {
      "en": "Keeps time; social status item among commoners | Cost: 5s",
      "es": "Keeps time; social status item among commoners | Costo: 5s"
    }
  },
  {
    "id": "eq_iron_lockbox",
    "name": {
      "en": "Iron lockbox",
      "es": "Iron lockbox"
    },
    "costInPence": 96,
    "weightLbs": 0.5,
    "category": "General Tools",
    "description": {
      "en": "Secure storage; DR 5, HP 10 | Cost: 8s",
      "es": "Secure storage; DR 5, HP 10 | Costo: 8s"
    }
  },
  {
    "id": "eq_bedroll",
    "name": {
      "en": "Bedroll",
      "es": "Bedroll"
    },
    "costInPence": 60,
    "weightLbs": 0.5,
    "category": "General Tools",
    "description": {
      "en": "Sleeping outdoors; +1 to Survival when rested | Cost: 5s",
      "es": "Sleeping outdoors; +1 to Survival when rested | Costo: 5s"
    }
  },
  {
    "id": "eq_trap_wire_10_m",
    "name": {
      "en": "Trap wire (10 m)",
      "es": "Trap wire (10 m)"
    },
    "costInPence": 12,
    "weightLbs": 0.5,
    "category": "General Tools",
    "description": {
      "en": "Tripwire or snare; -2 to spot if camouflaged | Cost: 1s",
      "es": "Tripwire or snare; -2 to spot if camouflaged | Costo: 1s"
    }
  },
  {
    "id": "eq_first_aid_kit",
    "name": {
      "en": "First aid kit",
      "es": "First aid kit"
    },
    "costInPence": 60,
    "weightLbs": 2.0,
    "category": "Medical & Herbal",
    "description": {
      "en": "+1 to First Aid; 10 uses before restock | Cost: 5s",
      "es": "+1 to First Aid; 10 uses before restock | Costo: 5s"
    }
  },
  {
    "id": "eq_bandages_roll_5x",
    "name": {
      "en": "Bandages (roll, 5x)",
      "es": "Bandages (roll, 5x)"
    },
    "costInPence": 2,
    "weightLbs": 0.5,
    "category": "Medical & Herbal",
    "description": {
      "en": "Single-use; stops bleeding at -1 to First Aid | Cost: 2d",
      "es": "Single-use; stops bleeding at -1 to First Aid | Costo: 2d"
    }
  },
  {
    "id": "eq_antiseptic_bottle",
    "name": {
      "en": "Antiseptic (bottle)",
      "es": "Antiseptic (bottle)"
    },
    "costInPence": 12,
    "weightLbs": 0.5,
    "category": "Medical & Herbal",
    "description": {
      "en": "+1 to infection-resistance rolls; 20 doses | Cost: 1s",
      "es": "+1 to infection-resistance rolls; 20 doses | Costo: 1s"
    }
  },
  {
    "id": "eq_herbal_salves_3x",
    "name": {
      "en": "Herbal salves (3x)",
      "es": "Herbal salves (3x)"
    },
    "costInPence": 12,
    "weightLbs": 0.5,
    "category": "Medical & Herbal",
    "description": {
      "en": "+1 to First Aid on burns & rashes | Cost: 1s",
      "es": "+1 to First Aid on burns & rashes | Costo: 1s"
    }
  },
  {
    "id": "eq_scalpel_set",
    "name": {
      "en": "Scalpel set",
      "es": "Scalpel set"
    },
    "costInPence": 24,
    "weightLbs": 0.5,
    "category": "Medical & Herbal",
    "description": {
      "en": "Surgery +1; also usable as fine knife | Cost: 2s",
      "es": "Surgery +1; also usable as fine knife | Costo: 2s"
    }
  },
  {
    "id": "eq_medicine_bag_leather",
    "name": {
      "en": "Medicine bag (leather)",
      "es": "Medicine bag (leather)"
    },
    "costInPence": 120,
    "weightLbs": 0.5,
    "category": "Medical & Herbal",
    "description": {
      "en": "Organizes medical gear; +1 to Physician when treating from it | Cost: 10s",
      "es": "Organizes medical gear; +1 to Physician when treating from it | Costo: 10s"
    }
  },
  {
    "id": "eq_herbs_assorted_pouch",
    "name": {
      "en": "Herbs (assorted, pouch)",
      "es": "Herbs (assorted, pouch)"
    },
    "costInPence": 24,
    "weightLbs": 0.5,
    "category": "Medical & Herbal",
    "description": {
      "en": "Herbal Medicine component; 10 doses | Cost: 2s",
      "es": "Herbal Medicine component; 10 doses | Costo: 2s"
    }
  },
  {
    "id": "eq_medical_reference_pamphlet",
    "name": {
      "en": "Medical reference (pamphlet)",
      "es": "Medical reference (pamphlet)"
    },
    "costInPence": 12,
    "weightLbs": 0.5,
    "category": "Medical & Herbal",
    "description": {
      "en": "+1 to Diagnosis when consulted | Cost: 1s",
      "es": "+1 to Diagnosis when consulted | Costo: 1s"
    }
  },
  {
    "id": "eq_portable_medicine_chest",
    "name": {
      "en": "Portable medicine chest",
      "es": "Portable medicine chest"
    },
    "costInPence": 120,
    "weightLbs": 10.0,
    "category": "Medical & Herbal",
    "description": {
      "en": "Field hospital; +2 to First Aid & Surgery; 50 doses | Cost: 10s",
      "es": "Field hospital; +2 to First Aid & Surgery; 50 doses | Costo: 10s"
    }
  },
  {
    "id": "eq_mortar__pestle",
    "name": {
      "en": "Mortar & pestle",
      "es": "Mortar & pestle"
    },
    "costInPence": 12,
    "weightLbs": 0.5,
    "category": "Medical & Herbal",
    "description": {
      "en": "Grinding herbs; needed for Herbal Medicine | Cost: 1s",
      "es": "Grinding herbs; needed for Herbal Medicine | Costo: 1s"
    }
  },
  {
    "id": "eq_prayer_book_small",
    "name": {
      "en": "Prayer book (small)",
      "es": "Prayer book (small)"
    },
    "costInPence": 12,
    "weightLbs": 0.5,
    "category": "Medical & Herbal",
    "description": {
      "en": "Religious comfort; +1 to Religious Ritual | Cost: 1s",
      "es": "Religious comfort; +1 to Religious Ritual | Costo: 1s"
    }
  },
  {
    "id": "eq_holy_book_leather",
    "name": {
      "en": "Holy book (leather)",
      "es": "Holy book (leather)"
    },
    "costInPence": 96,
    "weightLbs": 0.5,
    "category": "Medical & Herbal",
    "description": {
      "en": "Full scripture; +1 to Theology; social status with church | Cost: 8s",
      "es": "Full scripture; +1 to Theology; social status with church | Costo: 8s"
    }
  },
  {
    "id": "eq_holy_symbol_wooden",
    "name": {
      "en": "Holy symbol (wooden)",
      "es": "Holy symbol (wooden)"
    },
    "costInPence": 24,
    "weightLbs": 0.5,
    "category": "Medical & Herbal",
    "description": {
      "en": "Simple faith focus; -1 to ritual effects vs. quality symbols | Cost: 2s",
      "es": "Simple faith focus; -1 to ritual effects vs. quality symbols | Costo: 2s"
    }
  },
  {
    "id": "eq_holy_symbol_quality",
    "name": {
      "en": "Holy symbol (quality)",
      "es": "Holy symbol (quality)"
    },
    "costInPence": 1260,
    "weightLbs": 0.5,
    "category": "Medical & Herbal",
    "description": {
      "en": "Spiritual focus; +1 to Ritualistic Magic & Religious Ritual | Cost: 5s\u2013\u00a35",
      "es": "Spiritual focus; +1 to Ritualistic Magic & Religious Ritual | Costo: 5s\u2013\u00a35"
    }
  },
  {
    "id": "eq_rosary_wooden",
    "name": {
      "en": "Rosary (wooden)",
      "es": "Rosary (wooden)"
    },
    "costInPence": 1,
    "weightLbs": 0.5,
    "category": "Medical & Herbal",
    "description": {
      "en": "Cogitation aid; +1 to Cogitation when used | Cost: 1d",
      "es": "Cogitation aid; +1 to Cogitation when used | Costo: 1d"
    }
  },
  {
    "id": "eq_heavy_boots_leather",
    "name": {
      "en": "Heavy boots (leather)",
      "es": "Heavy boots (leather)"
    },
    "costInPence": 72,
    "weightLbs": 0.5,
    "category": "Clothing & Protective",
    "description": {
      "en": "Sturdy footwear; +1 to Forced Entry when kicking | Cost: 6s",
      "es": "Sturdy footwear; +1 to Forced Entry when kicking | Costo: 6s"
    }
  },
  {
    "id": "eq_dockworkers_coat",
    "name": {
      "en": "Dockworker's coat",
      "es": "Dockworker's coat"
    },
    "costInPence": 96,
    "weightLbs": 2.0,
    "category": "Clothing & Protective",
    "description": {
      "en": "Thick canvas; DR 1 on torso; water-resistant | Cost: 8s",
      "es": "Thick canvas; DR 1 on torso; water-resistant | Costo: 8s"
    }
  },
  {
    "id": "eq_heavy_coat_oilskin",
    "name": {
      "en": "Heavy coat (oilskin)",
      "es": "Heavy coat (oilskin)"
    },
    "costInPence": 120,
    "weightLbs": 2.0,
    "category": "Clothing & Protective",
    "description": {
      "en": "Weatherproof; DR 1 on torso; +1 to Hiking in rain | Cost: 10s",
      "es": "Weatherproof; DR 1 on torso; +1 to Hiking in rain | Costo: 10s"
    }
  },
  {
    "id": "eq_apron_thick_leather",
    "name": {
      "en": "Apron (thick leather)",
      "es": "Apron (thick leather)"
    },
    "costInPence": 60,
    "weightLbs": 0.5,
    "category": "Clothing & Protective",
    "description": {
      "en": "DR 1 on torso front; soaks spills | Cost: 5s",
      "es": "DR 1 on torso front; soaks spills | Costo: 5s"
    }
  },
  {
    "id": "eq_work_gloves_leather",
    "name": {
      "en": "Work gloves (leather)",
      "es": "Work gloves (leather)"
    },
    "costInPence": 12,
    "weightLbs": 0.5,
    "category": "Clothing & Protective",
    "description": {
      "en": "Protects hands; +1 to Lifting vs sharp objects | Cost: 1s",
      "es": "Protects hands; +1 to Lifting vs sharp objects | Costo: 1s"
    }
  },
  {
    "id": "eq_dark_clothing_set",
    "name": {
      "en": "Dark clothing (set)",
      "es": "Dark clothing (set)"
    },
    "costInPence": 60,
    "weightLbs": 0.5,
    "category": "Clothing & Protective",
    "description": {
      "en": "-1 to spot at night; common street wear | Cost: 5s",
      "es": "-1 to spot at night; common street wear | Costo: 5s"
    }
  },
  {
    "id": "eq_dark_clothes_quality",
    "name": {
      "en": "Dark clothes (quality)",
      "es": "Dark clothes (quality)"
    },
    "costInPence": 96,
    "weightLbs": 0.5,
    "category": "Clothing & Protective",
    "description": {
      "en": "As above; blends in at social functions too | Cost: 8s",
      "es": "As above; blends in at social functions too | Costo: 8s"
    }
  },
  {
    "id": "eq_spare_clothes_servant_class",
    "name": {
      "en": "Spare clothes (servant class)",
      "es": "Spare clothes (servant class)"
    },
    "costInPence": 60,
    "weightLbs": 0.5,
    "category": "Clothing & Protective",
    "description": {
      "en": "Clean change for social situations | Cost: 5s",
      "es": "Clean change for social situations | Costo: 5s"
    }
  },
  {
    "id": "eq_fine_clothes_quality",
    "name": {
      "en": "Fine clothes (quality)",
      "es": "Fine clothes (quality)"
    },
    "costInPence": 360,
    "weightLbs": 0.5,
    "category": "Clothing & Protective",
    "description": {
      "en": "+1 to Savoir-Faire (High Society); status marker | Cost: \u00a31 10s",
      "es": "+1 to Savoir-Faire (High Society); status marker | Costo: \u00a31 10s"
    }
  },
  {
    "id": "eq_velvet_shawl",
    "name": {
      "en": "Velvet shawl",
      "es": "Velvet shawl"
    },
    "costInPence": 144,
    "weightLbs": 0.5,
    "category": "Clothing & Protective",
    "description": {
      "en": "Warmth; romantic interests may find you more appealing (GM discretion) | Cost: 12s",
      "es": "Warmth; romantic interests may find you more appealing (GM discretion) | Costo: 12s"
    }
  },
  {
    "id": "eq_spectacles_reading",
    "name": {
      "en": "Spectacles (reading)",
      "es": "Spectacles (reading)"
    },
    "costInPence": 60,
    "weightLbs": 0.5,
    "category": "Clothing & Protective",
    "description": {
      "en": "Corrects vision; -3 to Search without them if shortsighted | Cost: 5s",
      "es": "Corrects vision; -3 to Search without them if shortsighted | Costo: 5s"
    }
  },
  {
    "id": "eq_camera_simple_box",
    "name": {
      "en": "Camera (simple box)",
      "es": "Camera (simple box)"
    },
    "costInPence": 60,
    "weightLbs": 1.5,
    "category": "Specialized Equipment",
    "description": {
      "en": "Single-shot; documentary evidence; -2 to Photography | Cost: 5s",
      "es": "Single-shot; documentary evidence; -2 to Photography | Costo: 5s"
    }
  },
  {
    "id": "eq_camera_early_folding",
    "name": {
      "en": "Camera (early folding)",
      "es": "Camera (early folding)"
    },
    "costInPence": 480,
    "weightLbs": 1.5,
    "category": "Specialized Equipment",
    "description": {
      "en": "Better lens; Photography +1; 12 plates | Cost: \u00a32",
      "es": "Better lens; Photography +1; 12 plates | Costo: \u00a32"
    }
  },
  {
    "id": "eq_disguise_kit_basic",
    "name": {
      "en": "Disguise kit (basic)",
      "es": "Disguise kit (basic)"
    },
    "costInPence": 24,
    "weightLbs": 2.0,
    "category": "Specialized Equipment",
    "description": {
      "en": "Makeup and prosthetics; +1 to Disguise; 5 uses | Cost: 2s",
      "es": "Makeup and prosthetics; +1 to Disguise; 5 uses | Costo: 2s"
    }
  },
  {
    "id": "eq_disguise_kit_advanced",
    "name": {
      "en": "Disguise kit (advanced)",
      "es": "Disguise kit (advanced)"
    },
    "costInPence": 120,
    "weightLbs": 2.0,
    "category": "Specialized Equipment",
    "description": {
      "en": "+2 to Disguise; 10 uses; includes wigs | Cost: 10s",
      "es": "+2 to Disguise; 10 uses; includes wigs | Costo: 10s"
    }
  },
  {
    "id": "eq_chemical_testing_kit",
    "name": {
      "en": "Chemical testing kit",
      "es": "Chemical testing kit"
    },
    "costInPence": 60,
    "weightLbs": 2.0,
    "category": "Specialized Equipment",
    "description": {
      "en": "+1 to Chemistry when testing samples; 10 tests | Cost: 5s",
      "es": "+1 to Chemistry when testing samples; 10 tests | Costo: 5s"
    }
  },
  {
    "id": "eq_crystal_ball_glass",
    "name": {
      "en": "Crystal ball (glass)",
      "es": "Crystal ball (glass)"
    },
    "costInPence": 480,
    "weightLbs": 0.5,
    "category": "Specialized Equipment",
    "description": {
      "en": "Fortune-telling prop; +1 to Fortune-Telling or Psychology | Cost: \u00a32",
      "es": "Fortune-telling prop; +1 to Fortune-Telling or Psychology | Costo: \u00a32"
    }
  },
  {
    "id": "eq_tarot_deck_common",
    "name": {
      "en": "Tarot deck (common)",
      "es": "Tarot deck (common)"
    },
    "costInPence": 24,
    "weightLbs": 0.5,
    "category": "Specialized Equipment",
    "description": {
      "en": "Divination tool; +1 to Fortune-Telling | Cost: 2s",
      "es": "Divination tool; +1 to Fortune-Telling | Costo: 2s"
    }
  },
  {
    "id": "eq_tarot_deck_quality",
    "name": {
      "en": "Tarot deck (quality)",
      "es": "Tarot deck (quality)"
    },
    "costInPence": 120,
    "weightLbs": 0.5,
    "category": "Specialized Equipment",
    "description": {
      "en": "+2 to Fortune-Telling; intricate artwork | Cost: 10s",
      "es": "+2 to Fortune-Telling; intricate artwork | Costo: 10s"
    }
  },
  {
    "id": "eq_ledger_book",
    "name": {
      "en": "Ledger book",
      "es": "Ledger book"
    },
    "costInPence": 24,
    "weightLbs": 0.5,
    "category": "Specialized Equipment",
    "description": {
      "en": "Business records; +1 to Accounting for regular accounts | Cost: 2s",
      "es": "Business records; +1 to Accounting for regular accounts | Costo: 2s"
    }
  },
  {
    "id": "eq_index_cards_box_100",
    "name": {
      "en": "Index cards (box, 100)",
      "es": "Index cards (box, 100)"
    },
    "costInPence": 2,
    "weightLbs": 0.5,
    "category": "Specialized Equipment",
    "description": {
      "en": "Reference filing; +1 to Research for organized notes | Cost: 2d",
      "es": "Reference filing; +1 to Research for organized notes | Costo: 2d"
    }
  },
  {
    "id": "eq_rare_book_catalogue",
    "name": {
      "en": "Rare book catalogue",
      "es": "Rare book catalogue"
    },
    "costInPence": 60,
    "weightLbs": 0.5,
    "category": "Specialized Equipment",
    "description": {
      "en": "Reference; +1 to Connoisseur (Books) when appraising tomes | Cost: 5s",
      "es": "Reference; +1 to Connoisseur (Books) when appraising tomes | Costo: 5s"
    }
  },
  {
    "id": "eq_personal_lending_ledger",
    "name": {
      "en": "Personal lending ledger",
      "es": "Personal lending ledger"
    },
    "costInPence": 36,
    "weightLbs": 0.5,
    "category": "Specialized Equipment",
    "description": {
      "en": "Tracking loans; +1 to Merchant when collecting debts | Cost: 3s",
      "es": "Tracking loans; +1 to Merchant when collecting debts | Costo: 3s"
    }
  },
  {
    "id": "eq_blueprints_rolled_set",
    "name": {
      "en": "Blueprints (rolled, set)",
      "es": "Blueprints (rolled, set)"
    },
    "costInPence": 2,
    "weightLbs": 0.5,
    "category": "Specialized Equipment",
    "description": {
      "en": "Engineering reference; +1 to Engineering for one structure type | Cost: 2d",
      "es": "Engineering reference; +1 to Engineering for one structure type | Costo: 2d"
    }
  },
  {
    "id": "eq_timesheet_ledger",
    "name": {
      "en": "Timesheet ledger",
      "es": "Timesheet ledger"
    },
    "costInPence": 12,
    "weightLbs": 0.5,
    "category": "Specialized Equipment",
    "description": {
      "en": "Labour management; +1 to Administration for shift planning | Cost: 1s",
      "es": "Labour management; +1 to Administration for shift planning | Costo: 1s"
    }
  },
  {
    "id": "eq_false_badge_tin",
    "name": {
      "en": "False badge (tin)",
      "es": "False badge (tin)"
    },
    "costInPence": 24,
    "weightLbs": 0.5,
    "category": "Specialized Equipment",
    "description": {
      "en": "May pass casual inspection; -5 to fool officials | Cost: 2s",
      "es": "May pass casual inspection; -5 to fool officials | Costo: 2s"
    }
  },
  {
    "id": "eq_simple_identification_card",
    "name": {
      "en": "Simple Identification Card",
      "es": "Simple Identification Card"
    },
    "costInPence": 12,
    "weightLbs": 0.5,
    "category": "Specialized Equipment",
    "description": {
      "en": "A simple forgery of official identification. Works only for basic inspections (e.g. / steam locomotive ticket purchase). There is a real chance the inspector notices the / forgery. | Cost: 5Gp / 3 pts",
      "es": "A simple forgery of official identification. Works only for basic inspections (e.g. / steam locomotive ticket purchase). There is a real chance the inspector notices the / forgery. | Costo: 5Gp / 3 pts"
    }
  },
  {
    "id": "eq_basic_identification_papers",
    "name": {
      "en": "Basic Identification Papers",
      "es": "Basic Identification Papers"
    },
    "costInPence": 12,
    "weightLbs": 0.1,
    "category": "Specialized Equipment",
    "description": {
      "en": "Forged selection of multiple identification papers \u2014 birth certificate, university / degrees, etc. High enough quality to apply for employment. Fails under normal / police or official Beyonder scrutiny. | Cost: 30Gp / 5 pts",
      "es": "Forged selection of multiple identification papers \u2014 birth certificate, university / degrees, etc. High enough quality to apply for employment. Fails under normal / police or official Beyonder scrutiny. | Costo: 30Gp / 5 pts"
    }
  },
  {
    "id": "eq_press_badge",
    "name": {
      "en": "Press badge",
      "es": "Press badge"
    },
    "costInPence": 24,
    "weightLbs": 0.5,
    "category": "Specialized Equipment",
    "description": {
      "en": "Newspaper credentials; +1 to Gather Information in public | Cost: 2s",
      "es": "Newspaper credentials; +1 to Gather Information in public | Costo: 2s"
    }
  },
  {
    "id": "eq_grappling_hook__rope_15_ft",
    "name": {
      "en": "Grappling hook & rope 15 ft",
      "es": "Grappling hook & rope 15 ft"
    },
    "costInPence": 48,
    "weightLbs": 2.0,
    "category": "Specialized Equipment",
    "description": {
      "en": "Climbing +1 on walls; supports 135 kg | Cost: 4s",
      "es": "Climbing +1 on walls; supports 135 kg | Costo: 4s"
    }
  },
  {
    "id": "eq_dolly_hand_cart",
    "name": {
      "en": "Dolly (hand cart)",
      "es": "Dolly (hand cart)"
    },
    "costInPence": 72,
    "weightLbs": 10.0,
    "category": "Specialized Equipment",
    "description": {
      "en": "Move up to 90 kg; Move \u00d7\u00bd when pushing | Cost: 6s",
      "es": "Move up to 90 kg; Move \u00d7\u00bd when pushing | Costo: 6s"
    }
  },
  {
    "id": "eq_signal_mirror",
    "name": {
      "en": "Signal mirror",
      "es": "Signal mirror"
    },
    "costInPence": 2,
    "weightLbs": 0.5,
    "category": "Specialized Equipment",
    "description": {
      "en": "Attract attention up to 1 km in sunlight | Cost: 2d",
      "es": "Attract attention up to 1 km in sunlight | Costo: 2d"
    }
  },
  {
    "id": "eq_chemical_light_sticks_3x",
    "name": {
      "en": "Chemical light sticks (3x)",
      "es": "Chemical light sticks (3x)"
    },
    "costInPence": 12,
    "weightLbs": 0.5,
    "category": "Specialized Equipment",
    "description": {
      "en": "Cold light; 1 m radius; 1 hr each (TL5 alchemical) | Cost: 1s",
      "es": "Cold light; 1 m radius; 1 hr each (TL5 alchemical) | Costo: 1s"
    }
  },
  {
    "id": "eq_drinking_flask_tin_hip",
    "name": {
      "en": "Drinking flask (tin, hip)",
      "es": "Drinking flask (tin, hip)"
    },
    "costInPence": 2,
    "weightLbs": 0.5,
    "category": "Specialized Equipment",
    "description": {
      "en": "Holds 0.5 L; concealable on person | Cost: 2d",
      "es": "Holds 0.5 L; concealable on person | Costo: 2d"
    }
  },
  {
    "id": "eq_heavy_tankard_pewter",
    "name": {
      "en": "Heavy tankard (pewter)",
      "es": "Heavy tankard (pewter)"
    },
    "costInPence": 12,
    "weightLbs": 0.5,
    "category": "Specialized Equipment",
    "description": {
      "en": "Improvised weapon; 1d-2 cr; +1 to Carousing in pubs | Cost: 1s",
      "es": "Improvised weapon; 1d-2 cr; +1 to Carousing in pubs | Costo: 1s"
    }
  },
  {
    "id": "ammo_revolver_50",
    "name": {
      "en": "Revolver Ammo (50 rounds)",
      "es": "Munici\u00f3n de Rev\u00f3lver (50 balas)"
    },
    "costInPence": 120,
    "weightLbs": 1.5,
    "category": "Ammunition",
    "description": {
      "en": "50 standard rounds for .38 / .45 revolvers",
      "es": "50 balas est\u00e1ndar para rev\u00f3lveres cal .38 / .45"
    }
  },
  {
    "id": "ammo_rifle_20",
    "name": {
      "en": "Rifle Ammo (20 rounds)",
      "es": "Munici\u00f3n de Rifle (20 balas)"
    },
    "costInPence": 240,
    "weightLbs": 1.0,
    "category": "Ammunition",
    "description": {
      "en": "20 high-velocity rifle cartridges",
      "es": "20 cartuchos de alta velocidad para rifle"
    }
  },
  {
    "id": "ammo_shotgun_25",
    "name": {
      "en": "Shotgun Shells (25 shells)",
      "es": "Cartuchos de Escopeta (25 cartuchos)"
    },
    "costInPence": 180,
    "weightLbs": 2.0,
    "category": "Ammunition",
    "description": {
      "en": "25 12-gauge buckshot shells",
      "es": "25 cartuchos de perdigones calibre 12"
    }
  },
  {
    "id": "occult_silver_bullets_6",
    "name": {
      "en": "Purified Silver Bullets (x6)",
      "es": "Balas de Plata Purificadas (x6)"
    },
    "costInPence": 720,
    "weightLbs": 0.3,
    "category": "Specialized Equipment",
    "description": {
      "en": "Infused with Sun/Purification domain to bypass wraith and demonic DR",
      "es": "Imbuidas con dominio de Sol/Purificaci\u00f3n para ignorar RD de espectros y demonios"
    }
  },
  {
    "id": "occult_holy_water_flask",
    "name": {
      "en": "Holy Water Flask (Church consecrated)",
      "es": "Frasco de Agua Bendita (Consagrada)"
    },
    "costInPence": 240,
    "weightLbs": 0.5,
    "category": "Specialized Equipment",
    "description": {
      "en": "Causes 2d burning damage to evil spirits and curses",
      "es": "Causa 2d de da\u00f1o abrasador a esp\u00edritus malignos y maldiciones"
    }
  }
];
