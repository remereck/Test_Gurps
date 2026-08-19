import { TraitDef } from '../types';

export interface ExtendedTraitDef extends TraitDef {
  category?: string;
}

export const ADVANTAGES: ExtendedTraitDef[] = [
  {
    "id": "combat_reflexes",
    "name": {
      "en": "Combat Reflexes",
      "es": "Combat Reflexes"
    },
    "category": "Combat Advantages",
    "cost": 15,
    "hasLevels": false,
    "description": {
      "en": "+1 to all active defenses, +6 to recover from stun, never freeze in surprise",
      "es": "+1 to all active defenses, +6 to recover from stun, never freeze in surprise"
    }
  },
  {
    "id": "danger_sense",
    "name": {
      "en": "Danger Sense",
      "es": "Danger Sense"
    },
    "category": "Combat Advantages",
    "cost": 15,
    "hasLevels": false,
    "description": {
      "en": "GM warns of threats just before they strike (surprise is negated)",
      "es": "GM warns of threats just before they strike (surprise is negated)"
    }
  },
  {
    "id": "hard_to_kill",
    "name": {
      "en": "Hard to Kill",
      "es": "Hard to Kill"
    },
    "category": "Combat Advantages",
    "cost": 2,
    "hasLevels": true,
    "maxLevel": 5,
    "description": {
      "en": "+1/level to HT rolls to avoid death; can take 1\u20135 levels",
      "es": "+1/level to HT rolls to avoid death; can take 1\u20135 levels"
    }
  },
  {
    "id": "hard_to_subdue",
    "name": {
      "en": "Hard to Subdue",
      "es": "Hard to Subdue"
    },
    "category": "Combat Advantages",
    "cost": 2,
    "hasLevels": true,
    "maxLevel": 5,
    "description": {
      "en": "+1/level to remain conscious when reduced to 0 or negative HP",
      "es": "+1/level to remain conscious when reduced to 0 or negative HP"
    }
  },
  {
    "id": "high_pain_threshold",
    "name": {
      "en": "High Pain Threshold",
      "es": "High Pain Threshold"
    },
    "category": "Combat Advantages",
    "cost": 10,
    "hasLevels": false,
    "description": {
      "en": "Ignore shock penalties from injury; +3 on HT rolls to avoid knockdown",
      "es": "Ignore shock penalties from injury; +3 on HT rolls to avoid knockdown"
    }
  },
  {
    "id": "lifting_st",
    "name": {
      "en": "Lifting ST",
      "es": "Lifting ST"
    },
    "category": "Combat Advantages",
    "cost": 3,
    "hasLevels": true,
    "maxLevel": 5,
    "description": {
      "en": "Extra ST only for lifting/carrying purposes; does not affect damage",
      "es": "Extra ST only for lifting/carrying purposes; does not affect damage"
    }
  },
  {
    "id": "charisma",
    "name": {
      "en": "Charisma",
      "es": "Charisma"
    },
    "category": "Mental & Social Advantages",
    "cost": 5,
    "hasLevels": true,
    "maxLevel": 5,
    "description": {
      "en": "+1/level to Influence skills (Leadership, Panhandling, Public Speaking, / Savoir-Faire, Sex Appeal, Streetwise); NPCs are predisposed to trust and / listen to you [max 4 levels]",
      "es": "+1/level to Influence skills (Leadership, Panhandling, Public Speaking, / Savoir-Faire, Sex Appeal, Streetwise); NPCs are predisposed to trust and / listen to you [max 4 levels]"
    }
  },
  {
    "id": "contact",
    "name": {
      "en": "Contact",
      "es": "Contact"
    },
    "category": "Mental & Social Advantages",
    "cost": 1,
    "hasLevels": false,
    "description": {
      "en": "Reliable source of information or aid (varies by skill and frequency)",
      "es": "Reliable source of information or aid (varies by skill and frequency)"
    }
  },
  {
    "id": "church_organisation_informant",
    "name": {
      "en": "Church Organisation / Informant",
      "es": "Church Organisation / Informant"
    },
    "category": "Mental & Social Advantages",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "A representative of a church enforcement body (Nighthawks, Mandated / Punishers, Machinery Hivemind, etc.) has chosen you as an informant. / Receive help from authorities when in minor legal trouble or when caught / using Beyonder powers without harm to innocents. Earn contribution points / for important information or assistance, exchangeable for money or Beyonder / formulas/ingredients. 5 pts: newly recruited, must prove your worth. 10\u201315 / pts: trusted informant; the organisation's representative trusts your judgement.",
      "es": "A representative of a church enforcement body (Nighthawks, Mandated / Punishers, Machinery Hivemind, etc.) has chosen you as an informant. / Receive help from authorities when in minor legal trouble or when caught / using Beyonder powers without harm to innocents. Earn contribution points / for important information or assistance, exchangeable for money or Beyonder / formulas/ingredients. 5 pts: newly recruited, must prove your worth. 10\u201315 / pts: trusted informant; the organisation's representative trusts your judgement."
    }
  },
  {
    "id": "separator_2",
    "name": {
      "en": "---",
      "es": "---"
    },
    "category": "Mental & Social Advantages",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "---",
      "es": "---"
    }
  },
  {
    "id": "official_beyonder",
    "name": {
      "en": "Official Beyonder",
      "es": "Official Beyonder"
    },
    "category": "Mental & Social Advantages",
    "cost": 15,
    "hasLevels": false,
    "description": {
      "en": "You operate under the sanction of a recognised church or organisation. / Benefits: Revolver +2, Ritualistic Magic +1, Hidden Lore (Beyonders) +3, / Occultism +2, Hermes Language (Broken). You have Legal Enforcement / Powers as a sanctioned investigator. Drawback: Duty (to your organisation) \u2014 / you can be called upon for assignments and must follow institutional protocol.",
      "es": "You operate under the sanction of a recognised church or organisation. / Benefits: Revolver +2, Ritualistic Magic +1, Hidden Lore (Beyonders) +3, / Occultism +2, Hermes Language (Broken). You have Legal Enforcement / Powers as a sanctioned investigator. Drawback: Duty (to your organisation) \u2014 / you can be called upon for assignments and must follow institutional protocol."
    }
  },
  {
    "id": "eidetic_memory",
    "name": {
      "en": "Eidetic Memory",
      "es": "Eidetic Memory"
    },
    "category": "Mental & Social Advantages",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "+5 to remember things after one reading; near-perfect recall",
      "es": "+5 to remember things after one reading; near-perfect recall"
    }
  },
  {
    "id": "empathy",
    "name": {
      "en": "Empathy",
      "es": "Empathy"
    },
    "category": "Mental & Social Advantages",
    "cost": 15,
    "hasLevels": false,
    "description": {
      "en": "Sense emotions; +3 to social skill rolls",
      "es": "Sense emotions; +3 to social skill rolls"
    }
  },
  {
    "id": "language_talent",
    "name": {
      "en": "Language Talent",
      "es": "Language Talent"
    },
    "category": "Mental & Social Advantages",
    "cost": 10,
    "hasLevels": false,
    "description": {
      "en": "All language skills cost half the normal points",
      "es": "All language skills cost half the normal points"
    }
  },
  {
    "id": "reputation",
    "name": {
      "en": "Reputation",
      "es": "Reputation"
    },
    "category": "Mental & Social Advantages",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "Known for something specific \u2014 positive reactions from relevant groups",
      "es": "Known for something specific \u2014 positive reactions from relevant groups"
    }
  },
  {
    "id": "voice",
    "name": {
      "en": "Voice",
      "es": "Voice"
    },
    "category": "Mental & Social Advantages",
    "cost": 10,
    "hasLevels": false,
    "description": {
      "en": "+2 to all rolls to influence others through speech",
      "es": "+2 to all rolls to influence others through speech"
    }
  },
  {
    "id": "alertness",
    "name": {
      "en": "Alertness",
      "es": "Alertness"
    },
    "category": "Mental & Social Advantages",
    "cost": 5,
    "hasLevels": true,
    "maxLevel": 5,
    "description": {
      "en": "+1 per level to all Per rolls. Notice more of your surroundings \u2014 active and / passive perception both benefit.",
      "es": "+1 per level to all Per rolls. Notice more of your surroundings \u2014 active and / passive perception both benefit."
    }
  },
  {
    "id": "healer",
    "name": {
      "en": "Healer",
      "es": "Healer"
    },
    "category": "Mental & Social Advantages",
    "cost": 10,
    "hasLevels": false,
    "description": {
      "en": "+2 to all rolls to diagnose, treat, and heal; +3 to First Aid specifically; HT rolls / to avoid or recover from disease at +2.",
      "es": "+2 to all rolls to diagnose, treat, and heal; +3 to First Aid specifically; HT rolls / to avoid or recover from disease at +2."
    }
  },
  {
    "id": "single_minded",
    "name": {
      "en": "Single-Minded",
      "es": "Single-Minded"
    },
    "category": "Mental & Social Advantages",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "+3 to any extended concentration task (research, crafting, lockpicking, etc.) / when you can focus without interruption.",
      "es": "+3 to any extended concentration task (research, crafting, lockpicking, etc.) / when you can focus without interruption."
    }
  },
  {
    "id": "versatile",
    "name": {
      "en": "Versatile",
      "es": "Versatile"
    },
    "category": "Mental & Social Advantages",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "+1 to defaults skill rolls \u2014 any time you use a skill at default, you are / effectively one level better.",
      "es": "+1 to defaults skill rolls \u2014 any time you use a skill at default, you are / effectively one level better."
    }
  },
  {
    "id": "intuition",
    "name": {
      "en": "Intuition",
      "es": "Intuition"
    },
    "category": "Mental & Social Advantages",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "Once per session, the GM may give you a meaningful hunch about a decision. / Ask the GM: 'Is this a good/bad idea?' The GM must answer honestly.",
      "es": "Once per session, the GM may give you a meaningful hunch about a decision. / Ask the GM: 'Is this a good/bad idea?' The GM must answer honestly."
    }
  },
  {
    "id": "lightning_calculator",
    "name": {
      "en": "Lightning Calculator",
      "es": "Lightning Calculator"
    },
    "category": "Mental & Social Advantages",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "Perfect mental arithmetic; quick estimates at no penalty; numerical puzzles / and mental maths at +2.",
      "es": "Perfect mental arithmetic; quick estimates at no penalty; numerical puzzles / and mental maths at +2."
    }
  },
  {
    "id": "absolute_direction",
    "name": {
      "en": "Absolute Direction",
      "es": "Absolute Direction"
    },
    "category": "Mental & Social Advantages",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "Always know which way is north; never become lost in natural terrain. +3 to / Navigation and Body Sense rolls.",
      "es": "Always know which way is north; never become lost in natural terrain. +3 to / Navigation and Body Sense rolls."
    }
  },
  {
    "id": "language_specify",
    "name": {
      "en": "Language (specify)",
      "es": "Language (specify)"
    },
    "category": "Mental & Social Advantages",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "Individual language proficiency. See the Languages section for cost tables / based on proficiency (Native/Accented/Broken) and type (Common vs / Mystical).",
      "es": "Individual language proficiency. See the Languages section for cost tables / based on proficiency (Native/Accented/Broken) and type (Common vs / Mystical)."
    }
  },
  {
    "id": "acute_social_awareness",
    "name": {
      "en": "Acute Social Awareness",
      "es": "Acute Social Awareness"
    },
    "category": "Social & Reputation",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "+2 to all Body Language and Detect Lies rolls. You read a room before / you enter it.",
      "es": "+2 to all Body Language and Detect Lies rolls. You read a room before / you enter it."
    }
  },
  {
    "id": "class_mobility",
    "name": {
      "en": "Class Mobility",
      "es": "Class Mobility"
    },
    "category": "Social & Reputation",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "Move believably across two social classes. +2 to Savoir-Faire in either; / NPCs rarely question your presence.",
      "es": "Move believably across two social classes. +2 to Savoir-Faire in either; / NPCs rarely question your presence."
    }
  },
  {
    "id": "connections_church_lay_staff",
    "name": {
      "en": "Connections: Church Lay / Staff",
      "es": "Connections: Church Lay / Staff"
    },
    "category": "Social & Reputation",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "Recognized civilian assistant to one Orthodox Church. Access to facilities; / some protection from routine Nighthawk scrutiny.",
      "es": "Recognized civilian assistant to one Orthodox Church. Access to facilities; / some protection from routine Nighthawk scrutiny."
    }
  },
  {
    "id": "connections_press_credentials",
    "name": {
      "en": "Connections: Press / Credentials",
      "es": "Connections: Press / Credentials"
    },
    "category": "Social & Reputation",
    "cost": 3,
    "hasLevels": false,
    "description": {
      "en": "Recognized press identity. Opens doors otherwise closed; plausible reason / to be anywhere in a city.",
      "es": "Recognized press identity. Opens doors otherwise closed; plausible reason / to be anywhere in a city."
    }
  },
  {
    "id": "__28",
    "name": {
      "en": "---",
      "es": "---"
    },
    "category": "Social & Reputation",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "---",
      "es": "---"
    }
  },
  {
    "id": "fearsome_reputation",
    "name": {
      "en": "Fearsome Reputation",
      "es": "Fearsome Reputation"
    },
    "category": "Social & Reputation",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "Known in criminal circles. Relevant NPCs start cautious; Intimidation in / these circles is at +2.",
      "es": "Known in criminal circles. Relevant NPCs start cautious; Intimidation in / these circles is at +2."
    }
  },
  {
    "id": "local_legend",
    "name": {
      "en": "Local Legend",
      "es": "Local Legend"
    },
    "category": "Social & Reputation",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "Well-known in one neighbourhood (specify). +2 to social rolls there; / people look out for you.",
      "es": "Well-known in one neighbourhood (specify). +2 to social rolls there; / people look out for you."
    }
  },
  {
    "id": "mentor",
    "name": {
      "en": "Mentor",
      "es": "Mentor"
    },
    "category": "Social & Reputation",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "Senior figure offers intermittent guidance. Once per session consult for / info, a contact, or a skill roll at their level.",
      "es": "Senior figure offers intermittent guidance. Once per session consult for / info, a contact, or a skill roll at their level."
    }
  },
  {
    "id": "multilingual",
    "name": {
      "en": "Multilingual",
      "es": "Multilingual"
    },
    "category": "Social & Reputation",
    "cost": 3,
    "hasLevels": false,
    "description": {
      "en": "Fluent in two additional languages. No penalty to language-dependent / social skills in those languages.",
      "es": "Fluent in two additional languages. No penalty to language-dependent / social skills in those languages."
    }
  },
  {
    "id": "natural_leader",
    "name": {
      "en": "Natural Leader",
      "es": "Natural Leader"
    },
    "category": "Social & Reputation",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "When you issue a direct command under pressure, allies may reroll their / first Fright Check or morale roll with +1. Once per scene.",
      "es": "When you issue a direct command under pressure, allies may reroll their / first Fright Check or morale roll with +1. Once per scene."
    }
  },
  {
    "id": "police_informant",
    "name": {
      "en": "Police Informant",
      "es": "Police Informant"
    },
    "category": "Social & Reputation",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "Arrangement with local constabulary. Minor legal trouble can often be / redirected. Discreet \u2014 exposure would be dangerous.",
      "es": "Arrangement with local constabulary. Minor legal trouble can often be / redirected. Discreet \u2014 exposure would be dangerous."
    }
  },
  {
    "id": "respectable_address",
    "name": {
      "en": "Respectable Address",
      "es": "Respectable Address"
    },
    "category": "Social & Reputation",
    "cost": 3,
    "hasLevels": false,
    "description": {
      "en": "Lodgings in a creditable neighbourhood. +1 to social rolls with / middle/upper class NPCs who would otherwise look down on you.",
      "es": "Lodgings in a creditable neighbourhood. +1 to social rolls with / middle/upper class NPCs who would otherwise look down on you."
    }
  },
  {
    "id": "street_credibility",
    "name": {
      "en": "Street Credibility",
      "es": "Street Credibility"
    },
    "category": "Social & Reputation",
    "cost": 3,
    "hasLevels": false,
    "description": {
      "en": "Trusted in the working-class underground. Call in small favours from / dock workers, factory hands, and street operators once per session.",
      "es": "Trusted in the working-class underground. Call in small favours from / dock workers, factory hands, and street operators once per session."
    }
  },
  {
    "id": "fearlessness",
    "name": {
      "en": "Fearlessness",
      "es": "Fearlessness"
    },
    "category": "Social & Reputation",
    "cost": 2,
    "hasLevels": true,
    "maxLevel": 5,
    "description": {
      "en": "+1 per level to Fright Checks; also grants immunity to intimidation from / beings with fewer levels of Fearlessness than you. Vital in a world of / horrors.",
      "es": "+1 per level to Fright Checks; also grants immunity to intimidation from / beings with fewer levels of Fearlessness than you. Vital in a world of / horrors."
    }
  },
  {
    "id": "fit",
    "name": {
      "en": "Fit",
      "es": "Fit"
    },
    "category": "Social & Reputation",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "+1 to all HT rolls; recover FP at twice the normal rate",
      "es": "+1 to all HT rolls; recover FP at twice the normal rate"
    }
  },
  {
    "id": "very_fit",
    "name": {
      "en": "Very Fit",
      "es": "Very Fit"
    },
    "category": "Social & Reputation",
    "cost": 15,
    "hasLevels": false,
    "description": {
      "en": "+2 to all HT rolls; lose FP at half the normal rate; recover FP at twice the / normal rate",
      "es": "+2 to all HT rolls; lose FP at half the normal rate; recover FP at twice the / normal rate"
    }
  },
  {
    "id": "wealth_comfortable",
    "name": {
      "en": "Wealth: Comfortable",
      "es": "Wealth: Comfortable"
    },
    "category": "Social & Reputation",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "Good income; start with \u00a35. Status 1 \u2014 those impressed by wealth treat / you better (GM discretion).",
      "es": "Good income; start with \u00a35. Status 1 \u2014 those impressed by wealth treat / you better (GM discretion)."
    }
  },
  {
    "id": "hunting_license",
    "name": {
      "en": "Hunting License",
      "es": "Hunting License"
    },
    "category": "Legal & Firearms",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "Legal in Loen for hunting rifle only. Costs \u00a35 to obtain in-game. Valid in / rural/suburban areas \u2014 carrying in city limits draws police attention.",
      "es": "Legal in Loen for hunting rifle only. Costs \u00a35 to obtain in-game. Valid in / rural/suburban areas \u2014 carrying in city limits draws police attention."
    }
  },
  {
    "id": "general_weapon_certificate",
    "name": {
      "en": "General Weapon Certificate",
      "es": "General Weapon Certificate"
    },
    "category": "Legal & Firearms",
    "cost": 15,
    "hasLevels": false,
    "description": {
      "en": "Full civilian firearm permit. Costs \u00a350 to obtain in-game. Allows carry of / any non-military weapon in cities; required for pistols, rifles, shotguns in / urban areas.",
      "es": "Full civilian firearm permit. Costs \u00a350 to obtain in-game. Allows carry of / any non-military weapon in cities; required for pistols, rifles, shotguns in / urban areas."
    }
  },
  {
    "id": "legal_enforcement_powers",
    "name": {
      "en": "Legal Enforcement Powers",
      "es": "Legal Enforcement Powers"
    },
    "category": "Legal & Firearms",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "Official authority to investigate, detain, and carry weapons in the line of / duty. Works within jurisdiction only; may vary by city or organization.",
      "es": "Official authority to investigate, detain, and carry weapons in the line of / duty. Works within jurisdiction only; may vary by city or organization."
    }
  },
  {
    "id": "black_market_access",
    "name": {
      "en": "Black Market Access",
      "es": "Black Market Access"
    },
    "category": "Professional & Technical",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "Reliable source for illegal or restricted goods. Once per session attempt to / acquire a specific item outside legal channels.",
      "es": "Reliable source for illegal or restricted goods. Once per session attempt to / acquire a specific item outside legal channels."
    }
  },
  {
    "id": "__45",
    "name": {
      "en": "---",
      "es": "---"
    },
    "category": "Professional & Technical",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "---",
      "es": "---"
    }
  },
  {
    "id": "experienced_investigator",
    "name": {
      "en": "Experienced Investigator",
      "es": "Experienced Investigator"
    },
    "category": "Professional & Technical",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "Once per investigation scene ask the GM one yes/no question about / observable evidence without a skill roll.",
      "es": "Once per investigation scene ask the GM one yes/no question about / observable evidence without a skill roll."
    }
  },
  {
    "id": "former_military_officer",
    "name": {
      "en": "Former Military Officer",
      "es": "Former Military Officer"
    },
    "category": "Professional & Technical",
    "cost": 10,
    "hasLevels": false,
    "description": {
      "en": "Leadership and Tactics at +1; military contacts; entitled to officer / courtesies in formal settings.",
      "es": "Leadership and Tactics at +1; military contacts; entitled to officer / courtesies in formal settings."
    }
  },
  {
    "id": "industrial_expertise",
    "name": {
      "en": "Industrial Expertise",
      "es": "Industrial Expertise"
    },
    "category": "Professional & Technical",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "Deep familiarity with a specific industry (specify). +2 to all relevant skill / rolls; NPCs in that industry trust your knowledge.",
      "es": "Deep familiarity with a specific industry (specify). +2 to all relevant skill / rolls; NPCs in that industry trust your knowledge."
    }
  },
  {
    "id": "medical_training_informal",
    "name": {
      "en": "Medical Training (Informal)",
      "es": "Medical Training (Informal)"
    },
    "category": "Professional & Technical",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "Use Physician at IQ-2 without purchasing the skill; First Aid rolls gain +1.",
      "es": "Use Physician at IQ-2 without purchasing the skill; First Aid rolls gain +1."
    }
  },
  {
    "id": "navigators_eye",
    "name": {
      "en": "Navigator's Eye",
      "es": "Navigator's Eye"
    },
    "category": "Professional & Technical",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "Never become lost in any city previously visited; rural navigation rolls at / +2.",
      "es": "Never become lost in any city previously visited; rural navigation rolls at / +2."
    }
  },
  {
    "id": "photographic_instinct",
    "name": {
      "en": "Photographic Instinct",
      "es": "Photographic Instinct"
    },
    "category": "Professional & Technical",
    "cost": 3,
    "hasLevels": false,
    "description": {
      "en": "Photography rolls at +2; instinctively know what to capture as evidence.",
      "es": "Photography rolls at +2; instinctively know what to capture as evidence."
    }
  },
  {
    "id": "safecracker",
    "name": {
      "en": "Safecracker",
      "es": "Safecracker"
    },
    "category": "Professional & Technical",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "+3 to Lockpicking for combination locks and mechanical safes / specifically.",
      "es": "+3 to Lockpicking for combination locks and mechanical safes / specifically."
    }
  },
  {
    "id": "underworld_lawyer",
    "name": {
      "en": "Underworld Lawyer",
      "es": "Underworld Lawyer"
    },
    "category": "Professional & Technical",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "Once per session cite an obscure legal technicality convincingly enough to / delay, redirect, or dismiss a legal problem.",
      "es": "Once per session cite an obscure legal technicality convincingly enough to / delay, redirect, or dismiss a legal problem."
    }
  },
  {
    "id": "alcohol_tolerance",
    "name": {
      "en": "Alcohol Tolerance",
      "es": "Alcohol Tolerance"
    },
    "category": "Physical & Innate",
    "cost": 1,
    "hasLevels": false,
    "description": {
      "en": "Never suffer social penalties from moderate drinking; Carousing rolls to / appear sober at +3.",
      "es": "Never suffer social penalties from moderate drinking; Carousing rolls to / appear sober at +3."
    }
  },
  {
    "id": "cold_resistance",
    "name": {
      "en": "Cold Resistance",
      "es": "Cold Resistance"
    },
    "category": "Physical & Innate",
    "cost": 2,
    "hasLevels": false,
    "description": {
      "en": "No penalties from cold weather up to freezing; hypothermia rolls at +2.",
      "es": "No penalties from cold weather up to freezing; hypothermia rolls at +2."
    }
  },
  {
    "id": "controlled_breathing",
    "name": {
      "en": "Controlled Breathing",
      "es": "Controlled Breathing"
    },
    "category": "Physical & Innate",
    "cost": 3,
    "hasLevels": false,
    "description": {
      "en": "Hold breath for HT \u00d7 3 seconds without a roll; HT rolls to resist airborne / toxins at +2.",
      "es": "Hold breath for HT \u00d7 3 seconds without a roll; HT rolls to resist airborne / toxins at +2."
    }
  },
  {
    "id": "fast_healer",
    "name": {
      "en": "Fast Healer",
      "es": "Fast Healer"
    },
    "category": "Physical & Innate",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "Recover 1 additional HP per day of rest. Injuries that would leave others / bedridden leave you functional in half the time.",
      "es": "Recover 1 additional HP per day of rest. Injuries that would leave others / bedridden leave you functional in half the time."
    }
  },
  {
    "id": "hard_stomach",
    "name": {
      "en": "Hard Stomach",
      "es": "Hard Stomach"
    },
    "category": "Physical & Innate",
    "cost": 2,
    "hasLevels": false,
    "description": {
      "en": "No HT rolls required for disgusting environments \u2014 gore, corpses, foul / conditions.",
      "es": "No HT rolls required for disgusting environments \u2014 gore, corpses, foul / conditions."
    }
  },
  {
    "id": "iron_jaw",
    "name": {
      "en": "Iron Jaw",
      "es": "Iron Jaw"
    },
    "category": "Physical & Innate",
    "cost": 3,
    "hasLevels": false,
    "description": {
      "en": "Knockdown rolls from blows to the head at +2; never bite through your / own tongue under shock.",
      "es": "Knockdown rolls from blows to the head at +2; never bite through your / own tongue under shock."
    }
  },
  {
    "id": "light_sleeper",
    "name": {
      "en": "Light Sleeper",
      "es": "Light Sleeper"
    },
    "category": "Physical & Innate",
    "cost": 2,
    "hasLevels": false,
    "description": {
      "en": "Perception rolls while sleeping at +4; never caught completely unaware at / night.",
      "es": "Perception rolls while sleeping at +4; never caught completely unaware at / night."
    }
  },
  {
    "id": "low_profile_build",
    "name": {
      "en": "Low-Profile Build",
      "es": "Low-Profile Build"
    },
    "category": "Physical & Innate",
    "cost": 3,
    "hasLevels": false,
    "description": {
      "en": "Physical appearance is unremarkable. All attempts to identify you from / description are at -2.",
      "es": "Physical appearance is unremarkable. All attempts to identify you from / description are at -2."
    }
  },
  {
    "id": "night_eyes",
    "name": {
      "en": "Night Eyes",
      "es": "Night Eyes"
    },
    "category": "Physical & Innate",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "Reduce all darkness penalties by 2; in dim gaslight or moonlight suffer no / penalty at all.",
      "es": "Reduce all darkness penalties by 2; in dim gaslight or moonlight suffer no / penalty at all."
    }
  },
  {
    "id": "perfect_balance",
    "name": {
      "en": "Perfect Balance",
      "es": "Perfect Balance"
    },
    "category": "Physical & Innate",
    "cost": 20,
    "hasLevels": false,
    "description": {
      "en": "+6 to avoid knockdown; +2 to Acrobatics, Climbing, Piloting",
      "es": "+6 to avoid knockdown; +2 to Acrobatics, Climbing, Piloting"
    }
  },
  {
    "id": "great_balance",
    "name": {
      "en": "Great Balance",
      "es": "Great Balance"
    },
    "category": "Physical & Innate",
    "cost": 10,
    "hasLevels": false,
    "description": {
      "en": "+2 to avoid knockdown; +1 to Acrobatics, Climbing, Piloting",
      "es": "+2 to avoid knockdown; +1 to Acrobatics, Climbing, Piloting"
    }
  },
  {
    "id": "rapid_recovery",
    "name": {
      "en": "Rapid Recovery",
      "es": "Rapid Recovery"
    },
    "category": "Physical & Innate",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "Stun durations halved; recover from knockdown in half normal time.",
      "es": "Stun durations halved; recover from knockdown in half normal time."
    }
  },
  {
    "id": "__66",
    "name": {
      "en": "---",
      "es": "---"
    },
    "category": "Physical & Innate",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "---",
      "es": "---"
    }
  },
  {
    "id": "flexibility",
    "name": {
      "en": "Flexibility",
      "es": "Flexibility"
    },
    "category": "Physical & Innate",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "+3 to Climbing and Escape; ignore up to -3 close-quarters penalties.",
      "es": "+3 to Climbing and Escape; ignore up to -3 close-quarters penalties."
    }
  },
  {
    "id": "double_jointed",
    "name": {
      "en": "Double-Jointed",
      "es": "Double-Jointed"
    },
    "category": "Physical & Innate",
    "cost": 15,
    "hasLevels": false,
    "description": {
      "en": "+5 to Climbing and Escape; ignore up to -5 close-quarters penalties for / wrestling or grappling; any body part bends any way.",
      "es": "+5 to Climbing and Escape; ignore up to -5 close-quarters penalties for / wrestling or grappling; any body part bends any way."
    }
  },
  {
    "id": "acute_vision",
    "name": {
      "en": "Acute Vision",
      "es": "Acute Vision"
    },
    "category": "Physical & Innate",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "+2 to Vision rolls; notice details at a distance, read lips, spot hidden / objects.",
      "es": "+2 to Vision rolls; notice details at a distance, read lips, spot hidden / objects."
    }
  },
  {
    "id": "incisive_vision",
    "name": {
      "en": "Incisive Vision",
      "es": "Incisive Vision"
    },
    "category": "Physical & Innate",
    "cost": 10,
    "hasLevels": false,
    "description": {
      "en": "Upgraded Acute Vision (+4 to all Vision rolls); can read / micro-expressions at 10m, see through minor visual illusions, spot / concealed objects automatically.",
      "es": "Upgraded Acute Vision (+4 to all Vision rolls); can read / micro-expressions at 10m, see through minor visual illusions, spot / concealed objects automatically."
    }
  },
  {
    "id": "acute_hearing",
    "name": {
      "en": "Acute Hearing",
      "es": "Acute Hearing"
    },
    "category": "Physical & Innate",
    "cost": 2,
    "hasLevels": false,
    "description": {
      "en": "+2 to Hearing rolls; detect faint sounds, eavesdrop through walls, identify / speech in noise.",
      "es": "+2 to Hearing rolls; detect faint sounds, eavesdrop through walls, identify / speech in noise."
    }
  },
  {
    "id": "resistant_specify",
    "name": {
      "en": "Resistant (specify)",
      "es": "Resistant (specify)"
    },
    "category": "Physical & Innate",
    "cost": 3,
    "hasLevels": false,
    "description": {
      "en": "HT rolls to resist a specific category at +3 (3 pts) or +8 (5 pts). Common / choices: Disease, Poison, Temperature Extremes.",
      "es": "HT rolls to resist a specific category at +3 (3 pts) or +8 (5 pts). Common / choices: Disease, Poison, Temperature Extremes."
    }
  },
  {
    "id": "outdoorsman",
    "name": {
      "en": "Outdoorsman",
      "es": "Outdoorsman"
    },
    "category": "Physical & Innate",
    "cost": 10,
    "hasLevels": true,
    "maxLevel": 5,
    "description": {
      "en": "+1 per level to all Outdoor skills (Camouflage, Fishing, Naturalist, / Navigation, Survival, Tracking, Weather Sense). Max 4 levels.",
      "es": "+1 per level to all Outdoor skills (Camouflage, Fishing, Naturalist, / Navigation, Survival, Tracking, Weather Sense). Max 4 levels."
    }
  },
  {
    "id": "aura_sensitivity",
    "name": {
      "en": "Aura Sensitivity",
      "es": "Aura Sensitivity"
    },
    "category": "Perception & Detection",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "Sense the emotional weight of places. In locations where violence, grief, / or supernatural events occurred, receive a vague impression without / rolling.",
      "es": "Sense the emotional weight of places. In locations where violence, grief, / or supernatural events occurred, receive a vague impression without / rolling."
    }
  },
  {
    "id": "death_sense",
    "name": {
      "en": "Death Sense",
      "es": "Death Sense"
    },
    "category": "Perception & Detection",
    "cost": 10,
    "hasLevels": false,
    "description": {
      "en": "Passive awareness of recent death within 30 meters (within 24 hours). / Sense its direction without rolling; can sense whether a person is dying.",
      "es": "Passive awareness of recent death within 30 meters (within 24 hours). / Sense its direction without rolling; can sense whether a person is dying."
    }
  },
  {
    "id": "divine_touchstone",
    "name": {
      "en": "Divine Touchstone",
      "es": "Divine Touchstone"
    },
    "category": "Perception & Detection",
    "cost": 10,
    "hasLevels": false,
    "description": {
      "en": "An Orthodox deity has taken minor notice of you. Once per session ask / the GM a yes/no question your character senses as an impression.",
      "es": "An Orthodox deity has taken minor notice of you. Once per session ask / the GM a yes/no question your character senses as an impression."
    }
  },
  {
    "id": "dreamsight",
    "name": {
      "en": "Dreamsight",
      "es": "Dreamsight"
    },
    "category": "Perception & Detection",
    "cost": 10,
    "hasLevels": false,
    "description": {
      "en": "Dreams contain genuine information. Once per session the GM may offer / a cryptic dream-image related to current events; sharing it grants +1 to one / investigation roll.",
      "es": "Dreams contain genuine information. Once per session the GM may offer / a cryptic dream-image related to current events; sharing it grants +1 to one / investigation roll."
    }
  },
  {
    "id": "ether_body_awareness",
    "name": {
      "en": "Ether Body Awareness",
      "es": "Ether Body Awareness"
    },
    "category": "Perception & Detection",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "Know immediately when a supernatural effect is targeting your soul, not / just your body \u2014 even without Spirit Vision.",
      "es": "Know immediately when a supernatural effect is targeting your soul, not / just your body \u2014 even without Spirit Vision."
    }
  },
  {
    "id": "fate_sensitivity",
    "name": {
      "en": "Fate Sensitivity",
      "es": "Fate Sensitivity"
    },
    "category": "Perception & Detection",
    "cost": 10,
    "hasLevels": false,
    "description": {
      "en": "Once per session when making a decision with major consequences, ask / the GM: 'Does this feel wrong?' The GM must answer honestly.",
      "es": "Once per session when making a decision with major consequences, ask / the GM: 'Does this feel wrong?' The GM must answer honestly."
    }
  },
  {
    "id": "ghost_proximity_sense",
    "name": {
      "en": "Ghost Proximity Sense",
      "es": "Ghost Proximity Sense"
    },
    "category": "Perception & Detection",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "Passive. Sense when a spirit is within 10 meters \u2014 a cold certainty. No / details; no roll required.",
      "es": "Passive. Sense when a spirit is within 10 meters \u2014 a cold certainty. No / details; no roll required."
    }
  },
  {
    "id": "pathway_resonance",
    "name": {
      "en": "Pathway Resonance",
      "es": "Pathway Resonance"
    },
    "category": "Perception & Detection",
    "cost": 10,
    "hasLevels": false,
    "description": {
      "en": "Unexplained affinity with one specific Pathway (specify). +3 to rolls to / identify items, individuals, or rituals associated with it.",
      "es": "Unexplained affinity with one specific Pathway (specify). +3 to rolls to / identify items, individuals, or rituals associated with it."
    }
  },
  {
    "id": "__82",
    "name": {
      "en": "---",
      "es": "---"
    },
    "category": "Perception & Detection",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "---",
      "es": "---"
    }
  },
  {
    "id": "ritual_intuition",
    "name": {
      "en": "Ritual Intuition",
      "es": "Ritual Intuition"
    },
    "category": "Perception & Detection",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "Sense when a ritual is being performed within 50 meters. Notice the / spiritual disturbance without rolling \u2014 even without knowing its type.",
      "es": "Sense when a ritual is being performed within 50 meters. Notice the / spiritual disturbance without rolling \u2014 even without knowing its type."
    }
  },
  {
    "id": "soul_reading_untrained",
    "name": {
      "en": "Soul Reading (Untrained)",
      "es": "Soul Reading (Untrained)"
    },
    "category": "Perception & Detection",
    "cost": 10,
    "hasLevels": false,
    "description": {
      "en": "Once per scene the GM may offer one true impression about a target's / emotional condition or hidden motive. Cannot be triggered deliberately.",
      "es": "Once per scene the GM may offer one true impression about a target's / emotional condition or hidden motive. Cannot be triggered deliberately."
    }
  },
  {
    "id": "anchored_soul",
    "name": {
      "en": "Anchored Soul",
      "es": "Anchored Soul"
    },
    "category": "Resistance & Resilience",
    "cost": 10,
    "hasLevels": false,
    "description": {
      "en": "All attempts to alter your mental identity \u2014 possession, compulsion, / pathway side effects \u2014 are at -2 against you.",
      "es": "All attempts to alter your mental identity \u2014 possession, compulsion, / pathway side effects \u2014 are at -2 against you."
    }
  },
  {
    "id": "cleansed_spirit",
    "name": {
      "en": "Cleansed Spirit",
      "es": "Cleansed Spirit"
    },
    "category": "Resistance & Resilience",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "CoR gained from passive exposure are halved. Active corruption from / deliberate acts is unaffected.",
      "es": "CoR gained from passive exposure are halved. Active corruption from / deliberate acts is unaffected."
    }
  },
  {
    "id": "cold_iron_tolerance",
    "name": {
      "en": "Cold Iron Tolerance",
      "es": "Cold Iron Tolerance"
    },
    "category": "Resistance & Resilience",
    "cost": 3,
    "hasLevels": false,
    "description": {
      "en": "Unaffected by the mild spiritual discomfort iron causes to sensitive / individuals. Rare in those with significant spiritual heritage.",
      "es": "Unaffected by the mild spiritual discomfort iron causes to sensitive / individuals. Rare in those with significant spiritual heritage."
    }
  },
  {
    "id": "faithful_grounding",
    "name": {
      "en": "Faithful Grounding",
      "es": "Faithful Grounding"
    },
    "category": "Resistance & Resilience",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "Genuine faith acts as an anchor. Fright Checks in church buildings, / shrines, or during prayer are at +3.",
      "es": "Genuine faith acts as an anchor. Fright Checks in church buildings, / shrines, or during prayer are at +3."
    }
  },
  {
    "id": "incorruptible_will",
    "name": {
      "en": "Incorruptible Will",
      "es": "Incorruptible Will"
    },
    "category": "Resistance & Resilience",
    "cost": 10,
    "hasLevels": false,
    "description": {
      "en": "+3 to all Will rolls to resist Beyonder abilities, evil god whispers, and / ritual compulsion. Does not apply to mundane social pressure.",
      "es": "+3 to all Will rolls to resist Beyonder abilities, evil god whispers, and / ritual compulsion. Does not apply to mundane social pressure."
    }
  },
  {
    "id": "spiritual_fortitude",
    "name": {
      "en": "Spiritual Fortitude",
      "es": "Spiritual Fortitude"
    },
    "category": "Resistance & Resilience",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "Maximum CoR equal Will + 3 rather than just Will.",
      "es": "Maximum CoR equal Will + 3 rather than just Will."
    }
  },
  {
    "id": "warded_dreams",
    "name": {
      "en": "Warded Dreams",
      "es": "Warded Dreams"
    },
    "category": "Resistance & Resilience",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "All supernatural attempts to enter, read, or alter your dreams require an / additional success by 3 or more to take effect.",
      "es": "All supernatural attempts to enter, read, or alter your dreams require an / additional success by 3 or more to take effect."
    }
  },
  {
    "id": "luck",
    "name": {
      "en": "Luck",
      "es": "Luck"
    },
    "category": "Unusual Gifts",
    "cost": 15,
    "hasLevels": false,
    "description": {
      "en": "1 reroll per session \u2014 may reroll any one failed roll.",
      "es": "1 reroll per session \u2014 may reroll any one failed roll."
    }
  },
  {
    "id": "beckoning_luck",
    "name": {
      "en": "Beckoning Luck",
      "es": "Beckoning Luck"
    },
    "category": "Unusual Gifts",
    "cost": 30,
    "hasLevels": false,
    "description": {
      "en": "2 rerolls per session \u2014 reroll any failed roll, usable at any time. If the / re-roll also fails there is no additional effect \u2014 and fate may balance later.",
      "es": "2 rerolls per session \u2014 reroll any failed roll, usable at any time. If the / re-roll also fails there is no additional effect \u2014 and fate may balance later."
    }
  },
  {
    "id": "born_under_a_named_star",
    "name": {
      "en": "Born Under a Named Star",
      "es": "Born Under a Named Star"
    },
    "category": "Unusual Gifts",
    "cost": 15,
    "hasLevels": false,
    "description": {
      "en": "Seers and Diviners who read your fate always notice something unusual. / You register as 'marked' in ways they cannot fully interpret.",
      "es": "Seers and Diviners who read your fate always notice something unusual. / You register as 'marked' in ways they cannot fully interpret."
    }
  },
  {
    "id": "mystical_item",
    "name": {
      "en": "Mystical Item",
      "es": "Mystical Item"
    },
    "category": "Unusual Gifts",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "A single mystical item you already possess, defined with the GM. Cost / scales with power: a minor charm (5 pts), a useful tool (10 pts), or a / significant piece of equipment (15 pts). The item should match one of the / 22 pathways' domains. If lost or destroyed, rename this advantage to / 'Mystical Item (Lost)' \u2014 no refund.",
      "es": "A single mystical item you already possess, defined with the GM. Cost / scales with power: a minor charm (5 pts), a useful tool (10 pts), or a / significant piece of equipment (15 pts). The item should match one of the / 22 pathways' domains. If lost or destroyed, rename this advantage to / 'Mystical Item (Lost)' \u2014 no refund."
    }
  },
  {
    "id": "charmed_object",
    "name": {
      "en": "Charmed Object",
      "es": "Charmed Object"
    },
    "category": "Unusual Gifts",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "One item you own provides +1 to one specific skill when used (specify / item and skill). Lost permanently if the item is destroyed.",
      "es": "One item you own provides +1 to one specific skill when used (specify / item and skill). Lost permanently if the item is destroyed."
    }
  },
  {
    "id": "dead_language_fluency",
    "name": {
      "en": "Dead Language Fluency",
      "es": "Dead Language Fluency"
    },
    "category": "Unusual Gifts",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "Read and speak one dead language (Ancient Hermes, Ancient Loen, etc.) / without having formally learned it. Origin unexplained.",
      "es": "Read and speak one dead language (Ancient Hermes, Ancient Loen, etc.) / without having formally learned it. Origin unexplained."
    }
  },
  {
    "id": "familiar_presence",
    "name": {
      "en": "Familiar Presence",
      "es": "Familiar Presence"
    },
    "category": "Unusual Gifts",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "Animals and spirits are unusually calm near you. Domestic animals never / startle; non-hostile spirits observe rather than act against you.",
      "es": "Animals and spirits are unusually calm near you. Domestic animals never / startle; non-hostile spirits observe rather than act against you."
    }
  },
  {
    "id": "__99",
    "name": {
      "en": "---",
      "es": "---"
    },
    "category": "Unusual Gifts",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "---",
      "es": "---"
    }
  },
  {
    "id": "sequence_knowledge",
    "name": {
      "en": "Sequence Knowledge",
      "es": "Sequence Knowledge"
    },
    "category": "Unusual Gifts",
    "cost": 15,
    "hasLevels": false,
    "description": {
      "en": "You know the formula for your next Sequence 8 potion \u2014 main / ingredients, supplementary ingredients, and basic preparation method. / This knowledge arrives instinctively once you reach Sequence 9. It does / not grant the ingredients, a pre-prepared potion, or an Acting Method. / Covers only the immediate next sequence.",
      "es": "You know the formula for your next Sequence 8 potion \u2014 main / ingredients, supplementary ingredients, and basic preparation method. / This knowledge arrives instinctively once you reach Sequence 9. It does / not grant the ingredients, a pre-prepared potion, or an Acting Method. / Covers only the immediate next sequence."
    }
  },
  {
    "id": "knows_the_acting_method",
    "name": {
      "en": "Knows the Acting Method",
      "es": "Knows the Acting Method"
    },
    "category": "Unusual Gifts",
    "cost": 15,
    "hasLevels": false,
    "description": {
      "en": "You innately understand the Acting Method for your Pathway. At the end / of each session, roll 3d6 \u2014 the result is the percentage of digestion / progress you gain toward your current potion, in addition to your normal / Digestion Gain Per Session.",
      "es": "You innately understand the Acting Method for your Pathway. At the end / of each session, roll 3d6 \u2014 the result is the percentage of digestion / progress you gain toward your current potion, in addition to your normal / Digestion Gain Per Session."
    }
  },
  {
    "id": "marked_by_ritual",
    "name": {
      "en": "Marked by Ritual",
      "es": "Marked by Ritual"
    },
    "category": "Unusual Gifts",
    "cost": 10,
    "hasLevels": false,
    "description": {
      "en": "A lasting spiritual imprint (define with GM). Grants +2 to one type of SPI / roll but may attract unusual attention.",
      "es": "A lasting spiritual imprint (define with GM). Grants +2 to one type of SPI / roll but may attract unusual attention."
    }
  },
  {
    "id": "spirit_tongue",
    "name": {
      "en": "Spirit Tongue",
      "es": "Spirit Tongue"
    },
    "category": "Unusual Gifts",
    "cost": 10,
    "hasLevels": false,
    "description": {
      "en": "Communicate basic intent to ghosts and lingering spirits without the / Language of the Dead ability. Limited to yes/no exchanges.",
      "es": "Communicate basic intent to ghosts and lingering spirits without the / Language of the Dead ability. Limited to yes/no exchanges."
    }
  },
  {
    "id": "uncanny_survivor",
    "name": {
      "en": "Uncanny Survivor",
      "es": "Uncanny Survivor"
    },
    "category": "Unusual Gifts",
    "cost": 10,
    "hasLevels": false,
    "description": {
      "en": "Once per campaign arc, when you would die on a death roll, succeed / automatically instead. The GM decides the cost.",
      "es": "Once per campaign arc, when you would die on a death roll, succeed / automatically instead. The GM decides the cost."
    }
  },
  {
    "id": "sanctity",
    "name": {
      "en": "Sanctity",
      "es": "Sanctity"
    },
    "category": "Unusual Gifts",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "Your connection to the divine is unusually clear. +2 to Theology and / Religious Ritual; once per session, the GM must answer one factual / question about Church doctrine or history honestly.",
      "es": "Your connection to the divine is unusually clear. +2 to Theology and / Religious Ritual; once per session, the GM must answer one factual / question about Church doctrine or history honestly."
    }
  }
];

export const DISADVANTAGES: ExtendedTraitDef[] = [
  {
    "id": "wealth_poor",
    "name": {
      "en": "Wealth: Poor",
      "es": "Wealth: Poor"
    },
    "category": "Core Disadvantages",
    "cost": -15,
    "hasLevels": false,
    "description": {
      "en": "Start with 5 soli; boarding house; barely afford basic food. Status\u22121 \u2014 / status-conscious NPCs look down on you (GM discretion).",
      "es": "Start with 5 soli; boarding house; barely afford basic food. Status\u22121 \u2014 / status-conscious NPCs look down on you (GM discretion)."
    }
  },
  {
    "id": "wealth_dead_broke",
    "name": {
      "en": "Wealth: Dead Broke",
      "es": "Wealth: Dead Broke"
    },
    "category": "Core Disadvantages",
    "cost": -25,
    "hasLevels": false,
    "description": {
      "en": "Start with \u00a30; no home; beg or steal for every meal. Status\u22122 \u2014 most / NPCs treat you with suspicion or disdain (GM discretion).",
      "es": "Start with \u00a30; no home; beg or steal for every meal. Status\u22122 \u2014 most / NPCs treat you with suspicion or disdain (GM discretion)."
    }
  },
  {
    "id": "wealth_struggling",
    "name": {
      "en": "Wealth: Struggling",
      "es": "Wealth: Struggling"
    },
    "category": "Core Disadvantages",
    "cost": -10,
    "hasLevels": false,
    "description": {
      "en": "Start with 15 soli; modest room; occasional luxuries",
      "es": "Start with 15 soli; modest room; occasional luxuries"
    }
  },
  {
    "id": "curious_12",
    "name": {
      "en": "Curious (12)",
      "es": "Curious (12)"
    },
    "category": "Core Disadvantages",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "Must roll vs. 12 or investigate any mystery encountered",
      "es": "Must roll vs. 12 or investigate any mystery encountered"
    }
  },
  {
    "id": "greed_12",
    "name": {
      "en": "Greed (12)",
      "es": "Greed (12)"
    },
    "category": "Core Disadvantages",
    "cost": -15,
    "hasLevels": false,
    "description": {
      "en": "Must roll vs. 12 or take any opportunity for significant profit",
      "es": "Must roll vs. 12 or take any opportunity for significant profit"
    }
  },
  {
    "id": "overconfidence_12",
    "name": {
      "en": "Overconfidence (12)",
      "es": "Overconfidence (12)"
    },
    "category": "Core Disadvantages",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "Believes they can handle situations they cannot",
      "es": "Believes they can handle situations they cannot"
    }
  },
  {
    "id": "bad_temper_12",
    "name": {
      "en": "Bad Temper (12)",
      "es": "Bad Temper (12)"
    },
    "category": "Core Disadvantages",
    "cost": -10,
    "hasLevels": false,
    "description": {
      "en": "Must roll vs. 12 to avoid angry outbursts when provoked",
      "es": "Must roll vs. 12 to avoid angry outbursts when provoked"
    }
  },
  {
    "id": "bully_12",
    "name": {
      "en": "Bully (12)",
      "es": "Bully (12)"
    },
    "category": "Core Disadvantages",
    "cost": -10,
    "hasLevels": false,
    "description": {
      "en": "Must roll vs. 12 to resist intimidating or humiliating someone weaker / when the opportunity arises",
      "es": "Must roll vs. 12 to resist intimidating or humiliating someone weaker / when the opportunity arises"
    }
  },
  {
    "id": "obsession_12",
    "name": {
      "en": "Obsession (12)",
      "es": "Obsession (12)"
    },
    "category": "Core Disadvantages",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "Consuming long-term goal dominates life and decisions",
      "es": "Consuming long-term goal dominates life and decisions"
    }
  },
  {
    "id": "nightmares_12",
    "name": {
      "en": "Nightmares (12)",
      "es": "Nightmares (12)"
    },
    "category": "Core Disadvantages",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "Disturbed sleep; wake unrefreshed \u2014 lose 1 FP each morning",
      "es": "Disturbed sleep; wake unrefreshed \u2014 lose 1 FP each morning"
    }
  },
  {
    "id": "code_of_honor",
    "name": {
      "en": "Code of Honor",
      "es": "Code of Honor"
    },
    "category": "Core Disadvantages",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "Personal code limits actions; must be followed even at cost",
      "es": "Personal code limits actions; must be followed even at cost"
    }
  },
  {
    "id": "sense_of_duty",
    "name": {
      "en": "Sense of Duty",
      "es": "Sense of Duty"
    },
    "category": "Core Disadvantages",
    "cost": -2,
    "hasLevels": false,
    "description": {
      "en": "Must help/protect certain groups even at personal risk",
      "es": "Must help/protect certain groups even at personal risk"
    }
  },
  {
    "id": "social_stigma",
    "name": {
      "en": "Social Stigma",
      "es": "Social Stigma"
    },
    "category": "Core Disadvantages",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "Society discriminates: Criminal Record -5, Servant Class -5",
      "es": "Society discriminates: Criminal Record -5, Servant Class -5"
    }
  },
  {
    "id": "secret",
    "name": {
      "en": "Secret",
      "es": "Secret"
    },
    "category": "Core Disadvantages",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "Dangerous hidden truth; exposure has severe consequences",
      "es": "Dangerous hidden truth; exposure has severe consequences"
    }
  },
  {
    "id": "blacklisted",
    "name": {
      "en": "Blacklisted",
      "es": "Blacklisted"
    },
    "category": "Social & Background",
    "cost": -10,
    "hasLevels": false,
    "description": {
      "en": "A specific industry, org, or church has your name. Employment or access / there fails automatically without disguise.",
      "es": "A specific industry, org, or church has your name. Employment or access / there fails automatically without disguise."
    }
  },
  {
    "id": "blood_feud",
    "name": {
      "en": "Blood Feud",
      "es": "Blood Feud"
    },
    "category": "Social & Background",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "A family, gang, or faction holds a grievance. Their agents appear as / recurring threats (scale reflects their power).",
      "es": "A family, gang, or faction holds a grievance. Their agents appear as / recurring threats (scale reflects their power)."
    }
  },
  {
    "id": "creditors_target",
    "name": {
      "en": "Creditor's Target",
      "es": "Creditor's Target"
    },
    "category": "Social & Background",
    "cost": -10,
    "hasLevels": false,
    "description": {
      "en": "You owe a dangerous debt. Periodic pressure, threats, or interference; / cannot ignore it without severe consequences.",
      "es": "You owe a dangerous debt. Periodic pressure, threats, or interference; / cannot ignore it without severe consequences."
    }
  },
  {
    "id": "drafted",
    "name": {
      "en": "Drafted",
      "es": "Drafted"
    },
    "category": "Social & Background",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "Technically in a military reserve or conscript pool. Mobilisation orders / can arrive at any time, legally compelling service.",
      "es": "Technically in a military reserve or conscript pool. Mobilisation orders / can arrive at any time, legally compelling service."
    }
  },
  {
    "id": "ex_convict",
    "name": {
      "en": "Ex-Convict",
      "es": "Ex-Convict"
    },
    "category": "Social & Background",
    "cost": -10,
    "hasLevels": false,
    "description": {
      "en": "Social Stigma in formal settings; increased police scrutiny; certain / employment and legal protections unavailable.",
      "es": "Social Stigma in formal settings; increased police scrutiny; certain / employment and legal protections unavailable."
    }
  },
  {
    "id": "famous_face",
    "name": {
      "en": "Famous Face",
      "es": "Famous Face"
    },
    "category": "Social & Background",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "Recognizable in the city. Disguise attempts at -2; surveillance harder; / strangers approach you, sometimes dangerously.",
      "es": "Recognizable in the city. Disguise attempts at -2; surveillance harder; / strangers approach you, sometimes dangerously."
    }
  },
  {
    "id": "fugitive_minor",
    "name": {
      "en": "Fugitive (Minor)",
      "es": "Fugitive (Minor)"
    },
    "category": "Social & Background",
    "cost": -10,
    "hasLevels": false,
    "description": {
      "en": "Open local warrant on a non-capital charge. Cannot approach police, visit / courts, or enter government buildings without risk.",
      "es": "Open local warrant on a non-capital charge. Cannot approach police, visit / courts, or enter government buildings without risk."
    }
  },
  {
    "id": "separator_1",
    "name": {
      "en": "---",
      "es": "---"
    },
    "category": "Social & Background",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "---",
      "es": "---"
    }
  },
  {
    "id": "fugitive_serious",
    "name": {
      "en": "Fugitive (Serious)",
      "es": "Fugitive (Serious)"
    },
    "category": "Social & Background",
    "cost": -20,
    "hasLevels": false,
    "description": {
      "en": "Serious criminal charges outstanding. Significant arrest risk on sight in / major cities; cannot use real name officially.",
      "es": "Serious criminal charges outstanding. Significant arrest risk on sight in / major cities; cannot use real name officially."
    }
  },
  {
    "id": "illegitimate_birth",
    "name": {
      "en": "Illegitimate Birth",
      "es": "Illegitimate Birth"
    },
    "category": "Social & Background",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "-1 to social rolls in formal/upper-class settings where this is known; / inheritance and legal rights are complicated.",
      "es": "-1 to social rolls in formal/upper-class settings where this is known; / inheritance and legal rights are complicated."
    }
  },
  {
    "id": "orphan_with_dependents",
    "name": {
      "en": "Orphan with Dependents",
      "es": "Orphan with Dependents"
    },
    "category": "Social & Background",
    "cost": -10,
    "hasLevels": false,
    "description": {
      "en": "Support younger siblings or a sick relative. Regular financial drain; their / safety is a lever enemies can use.",
      "es": "Support younger siblings or a sick relative. Regular financial drain; their / safety is a lever enemies can use."
    }
  },
  {
    "id": "refugee_status",
    "name": {
      "en": "Refugee Status",
      "es": "Refugee Status"
    },
    "category": "Social & Background",
    "cost": -10,
    "hasLevels": false,
    "description": {
      "en": "No legal right of permanent residence. No papers, no safety net; / deportation is a real threat; police encounters are dangerous.",
      "es": "No legal right of permanent residence. No papers, no safety net; / deportation is a real threat; police encounters are dangerous."
    }
  },
  {
    "id": "wanted_by_church",
    "name": {
      "en": "Wanted by Church",
      "es": "Wanted by Church"
    },
    "category": "Social & Background",
    "cost": -15,
    "hasLevels": false,
    "description": {
      "en": "An Orthodox Church has marked you. Not just the police \u2014 Nighthawks / or equivalent Beyonder enforcers may be looking.",
      "es": "An Orthodox Church has marked you. Not just the police \u2014 Nighthawks / or equivalent Beyonder enforcers may be looking."
    }
  },
  {
    "id": "duty_specify",
    "name": {
      "en": "Duty (specify)",
      "es": "Duty (specify)"
    },
    "category": "Social & Background",
    "cost": -2,
    "hasLevels": false,
    "description": {
      "en": "Regular, enforced obligation to an organization or individual. Value / reflects frequency and danger: -5 for light duty (roll 6 or less), -10 for / hazardous duty (roll 9 or less), -15 for extremely hazardous (roll 12 or / less; appears weekly). Specify organization and nature at creation.",
      "es": "Regular, enforced obligation to an organization or individual. Value / reflects frequency and danger: -5 for light duty (roll 6 or less), -10 for / hazardous duty (roll 9 or less), -15 for extremely hazardous (roll 12 or / less; appears weekly). Specify organization and nature at creation."
    }
  },
  {
    "id": "absent_mindedness",
    "name": {
      "en": "Absent-Mindedness",
      "es": "Absent-Mindedness"
    },
    "category": "Personal & Psychological",
    "cost": -15,
    "hasLevels": false,
    "description": {
      "en": "-3 to skill rolls requiring concentration or organisation in everyday life; / must roll vs. IQ to remember to do something if interrupted or distracted. / In combat, may forget to reload, change tactics, or use special abilities / (GM's discretion).",
      "es": "-3 to skill rolls requiring concentration or organisation in everyday life; / must roll vs. IQ to remember to do something if interrupted or distracted. / In combat, may forget to reload, change tactics, or use special abilities / (GM's discretion)."
    }
  },
  {
    "id": "addiction_laudanum",
    "name": {
      "en": "Addiction: Laudanum",
      "es": "Addiction: Laudanum"
    },
    "category": "Personal & Psychological",
    "cost": -10,
    "hasLevels": false,
    "description": {
      "en": "Must use daily or suffer -2 to all rolls from withdrawal; supply costs drain / income.",
      "es": "Must use daily or suffer -2 to all rolls from withdrawal; supply costs drain / income."
    }
  },
  {
    "id": "addiction_tobacco",
    "name": {
      "en": "Addiction: Tobacco",
      "es": "Addiction: Tobacco"
    },
    "category": "Personal & Psychological",
    "cost": -3,
    "hasLevels": false,
    "description": {
      "en": "Minor withdrawal irritability (-1 to Will) if unable to smoke for a full day.",
      "es": "Minor withdrawal irritability (-1 to Will) if unable to smoke for a full day."
    }
  },
  {
    "id": "chronic_insomnia",
    "name": {
      "en": "Chronic Insomnia",
      "es": "Chronic Insomnia"
    },
    "category": "Personal & Psychological",
    "cost": -10,
    "hasLevels": false,
    "description": {
      "en": "Lose 1 FP each morning that cannot be recovered through rest; rolls / requiring sustained concentration at -1.",
      "es": "Lose 1 FP each morning that cannot be recovered through rest; rolls / requiring sustained concentration at -1."
    }
  },
  {
    "id": "class_resentment",
    "name": {
      "en": "Class Resentment",
      "es": "Class Resentment"
    },
    "category": "Personal & Psychological",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "Must roll vs. Will-2 or express hostility when in prolonged contact with / the resented class.",
      "es": "Must roll vs. Will-2 or express hostility when in prolonged contact with / the resented class."
    }
  },
  {
    "id": "compulsive_gambling",
    "name": {
      "en": "Compulsive Gambling",
      "es": "Compulsive Gambling"
    },
    "category": "Personal & Psychological",
    "cost": -10,
    "hasLevels": false,
    "description": {
      "en": "Regular income loss; prone to debt; requires Will roll at -2 to leave a game / while ahead.",
      "es": "Regular income loss; prone to debt; requires Will roll at -2 to leave a game / while ahead."
    }
  },
  {
    "id": "duty_bound",
    "name": {
      "en": "Duty-Bound",
      "es": "Duty-Bound"
    },
    "category": "Personal & Psychological",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "An obligation takes priority over personal safety. Must regularly sacrifice / time, money, or risk to fulfil it.",
      "es": "An obligation takes priority over personal safety. Must regularly sacrifice / time, money, or risk to fulfil it."
    }
  },
  {
    "id": "glass_jaw",
    "name": {
      "en": "Glass Jaw",
      "es": "Glass Jaw"
    },
    "category": "Personal & Psychological",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "All knockdown rolls from head strikes at -2; concussion effects last / longer.",
      "es": "All knockdown rolls from head strikes at -2; concussion effects last / longer."
    }
  },
  {
    "id": "glory_hound",
    "name": {
      "en": "Glory Hound",
      "es": "Glory Hound"
    },
    "category": "Personal & Psychological",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "Must roll vs. Will or ensure your role in any success is publicly known, / even when discretion would be wiser.",
      "es": "Must roll vs. Will or ensure your role in any success is publicly known, / even when discretion would be wiser."
    }
  },
  {
    "id": "grief_stricken",
    "name": {
      "en": "Grief-Stricken",
      "es": "Grief-Stricken"
    },
    "category": "Personal & Psychological",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "In situations that echo a specific loss, Will rolls to act clearly are at -2. Can / be gradually resolved through play.",
      "es": "In situations that echo a specific loss, Will rolls to act clearly are at -2. Can / be gradually resolved through play."
    }
  },
  {
    "id": "guilt",
    "name": {
      "en": "Guilt",
      "es": "Guilt"
    },
    "category": "Personal & Psychological",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "-1 to Will in situations that echo the original act; may be exploited by / people who know the truth.",
      "es": "-1 to Will in situations that echo the original act; may be exploited by / people who know the truth."
    }
  },
  {
    "id": "__39",
    "name": {
      "en": "---",
      "es": "---"
    },
    "category": "Personal & Psychological",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "---",
      "es": "---"
    }
  },
  {
    "id": "impulsive",
    "name": {
      "en": "Impulsive",
      "es": "Impulsive"
    },
    "category": "Personal & Psychological",
    "cost": -10,
    "hasLevels": false,
    "description": {
      "en": "Must roll vs. IQ-2 to pause and plan; failure means you act on the first / reasonable impulse in any urgent situation.",
      "es": "Must roll vs. IQ-2 to pause and plan; failure means you act on the first / reasonable impulse in any urgent situation."
    }
  },
  {
    "id": "reckless",
    "name": {
      "en": "Reckless",
      "es": "Reckless"
    },
    "category": "Personal & Psychological",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "-1 to any roll where caution would be smarter; must roll vs. Will to back / down from a physical challenge.",
      "es": "-1 to any roll where caution would be smarter; must roll vs. Will to back / down from a physical challenge."
    }
  },
  {
    "id": "reputation_troublemaker",
    "name": {
      "en": "Reputation: Troublemaker",
      "es": "Reputation: Troublemaker"
    },
    "category": "Personal & Psychological",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "Employers, landlords, and officials treat you with pre-emptive suspicion / (GM discretion).",
      "es": "Employers, landlords, and officials treat you with pre-emptive suspicion / (GM discretion)."
    }
  },
  {
    "id": "social_anxiety",
    "name": {
      "en": "Social Anxiety",
      "es": "Social Anxiety"
    },
    "category": "Personal & Psychological",
    "cost": -10,
    "hasLevels": false,
    "description": {
      "en": "-2 to social skill rolls in groups of 6+; -3 when addressing strangers of / higher status.",
      "es": "-2 to social skill rolls in groups of 6+; -3 when addressing strangers of / higher status."
    }
  },
  {
    "id": "stubborn",
    "name": {
      "en": "Stubborn",
      "es": "Stubborn"
    },
    "category": "Personal & Psychological",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "Must roll vs. Will-3 to reverse your stated position in the same scene, even / when clearly wrong.",
      "es": "Must roll vs. Will-3 to reverse your stated position in the same scene, even / when clearly wrong."
    }
  },
  {
    "id": "superstitious_mundane",
    "name": {
      "en": "Superstitious (mundane)",
      "es": "Superstitious (mundane)"
    },
    "category": "Personal & Psychological",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "If warding routine is disrupted, -1 to all rolls for the day; will go out of / their way to observe superstitions.",
      "es": "If warding routine is disrupted, -1 to all rolls for the day; will go out of / their way to observe superstitions."
    }
  },
  {
    "id": "reluctant_killer",
    "name": {
      "en": "Reluctant Killer",
      "es": "Reluctant Killer"
    },
    "category": "Personal & Psychological",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "-4 to hit recognizable people with deadly force (-2 if face hidden); cannot / Aim. If you kill a recognizable person, become morose for 3d days \u2014 / Will rolls required to use violence again.",
      "es": "-4 to hit recognizable people with deadly force (-2 if face hidden); cannot / Aim. If you kill a recognizable person, become morose for 3d days \u2014 / Will rolls required to use violence again."
    }
  },
  {
    "id": "cannot_harm_innocents",
    "name": {
      "en": "Cannot Harm Innocents",
      "es": "Cannot Harm Innocents"
    },
    "category": "Personal & Psychological",
    "cost": -10,
    "hasLevels": false,
    "description": {
      "en": "Will not use deadly force when innocent bystanders might be affected, or / against enemies not using deadly force on you. Non-deadly force is / acceptable.",
      "es": "Will not use deadly force when innocent bystanders might be affected, or / against enemies not using deadly force on you. Non-deadly force is / acceptable."
    }
  },
  {
    "id": "cannot_kill",
    "name": {
      "en": "Cannot Kill",
      "es": "Cannot Kill"
    },
    "category": "Personal & Psychological",
    "cost": -15,
    "hasLevels": false,
    "description": {
      "en": "Unwilling to kill anyone, even through omission, or to allow comrades to / kill. If responsible for a death, react as Reluctant Killer (-5).",
      "es": "Unwilling to kill anyone, even through omission, or to allow comrades to / kill. If responsible for a death, react as Reluctant Killer (-5)."
    }
  },
  {
    "id": "self_defence_only",
    "name": {
      "en": "Self-Defence Only",
      "es": "Self-Defence Only"
    },
    "category": "Personal & Psychological",
    "cost": -15,
    "hasLevels": false,
    "description": {
      "en": "Use violence only to protect yourself or those in your care, to the / minimum degree necessary; no pre-emptive strikes.",
      "es": "Use violence only to protect yourself or those in your care, to the / minimum degree necessary; no pre-emptive strikes."
    }
  },
  {
    "id": "total_non_violence",
    "name": {
      "en": "Total Non-Violence",
      "es": "Total Non-Violence"
    },
    "category": "Personal & Psychological",
    "cost": -30,
    "hasLevels": false,
    "description": {
      "en": "Will not use violence against intelligent creatures, even in self-defense. / May defend against animals.",
      "es": "Will not use violence against intelligent creatures, even in self-defense. / May defend against animals."
    }
  },
  {
    "id": "workaholic",
    "name": {
      "en": "Workaholic",
      "es": "Workaholic"
    },
    "category": "Personal & Psychological",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "Cannot relax; always finds something productive to do. -2 to social rolls in / leisure settings; rolls to take a day off at Will-3.",
      "es": "Cannot relax; always finds something productive to do. -2 to social rolls in / leisure settings; rolls to take a day off at Will-3."
    }
  },
  {
    "id": "callous",
    "name": {
      "en": "Callous",
      "es": "Callous"
    },
    "category": "Personal & Psychological",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "-3 to social skill rolls when warmth or empathy is required. You may still / act kindly \u2014 but it is an effort and it shows.",
      "es": "-3 to social skill rolls when warmth or empathy is required. You may still / act kindly \u2014 but it is an effort and it shows."
    }
  },
  {
    "id": "kleptomania",
    "name": {
      "en": "Kleptomania",
      "es": "Kleptomania"
    },
    "category": "Personal & Psychological",
    "cost": -10,
    "hasLevels": false,
    "description": {
      "en": "Compelled to steal small objects when the opportunity arises and no / consequences are obvious. Roll vs. Will to resist when the situation makes / theft easy.",
      "es": "Compelled to steal small objects when the opportunity arises and no / consequences are obvious. Roll vs. Will to resist when the situation makes / theft easy."
    }
  },
  {
    "id": "skinny",
    "name": {
      "en": "Skinny",
      "es": "Skinny"
    },
    "category": "Personal & Psychological",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "-2 to ST for purposes of knockback and grappling; +2 to rolls to escape / bonds or fit into tight spaces. Clothing is hard to find off the rack.",
      "es": "-2 to ST for purposes of knockback and grappling; +2 to rolls to escape / bonds or fit into tight spaces. Clothing is hard to find off the rack."
    }
  },
  {
    "id": "shyness",
    "name": {
      "en": "Shyness",
      "es": "Shyness"
    },
    "category": "Personal & Psychological",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "-1 to -2 to social skill rolls depending on severity and audience. Mild (-5): / -1 in groups of 6+; Severe (-10): -2 in groups of 3+.",
      "es": "-1 to -2 to social skill rolls depending on severity and audience. Mild (-5): / -1 in groups of 6+; Severe (-10): -2 in groups of 3+."
    }
  },
  {
    "id": "laziness",
    "name": {
      "en": "Laziness",
      "es": "Laziness"
    },
    "category": "Personal & Psychological",
    "cost": -10,
    "hasLevels": false,
    "description": {
      "en": "Must roll vs. Will to undertake any sustained effort not immediately / necessary or personally interesting. Unemployment is a real risk.",
      "es": "Must roll vs. Will to undertake any sustained effort not immediately / necessary or personally interesting. Unemployment is a real risk."
    }
  },
  {
    "id": "clueless",
    "name": {
      "en": "Clueless",
      "es": "Clueless"
    },
    "category": "Personal & Psychological",
    "cost": -10,
    "hasLevels": false,
    "description": {
      "en": "-3 to all social skill rolls; generally miss social cues and subtlety. You do / not understand subtext, sarcasm, or implication.",
      "es": "-3 to all social skill rolls; generally miss social cues and subtlety. You do / not understand subtext, sarcasm, or implication."
    }
  },
  {
    "id": "__58",
    "name": {
      "en": "---",
      "es": "---"
    },
    "category": "Personal & Psychological",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "---",
      "es": "---"
    }
  },
  {
    "id": "unfit",
    "name": {
      "en": "Unfit",
      "es": "Unfit"
    },
    "category": "Personal & Psychological",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "-1 to all HT rolls; recover FP at half normal rate. Unfit for sustained / physical exertion.",
      "es": "-1 to all HT rolls; recover FP at half normal rate. Unfit for sustained / physical exertion."
    }
  },
  {
    "id": "vow_specify",
    "name": {
      "en": "Vow (specify)",
      "es": "Vow (specify)"
    },
    "category": "Personal & Psychological",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "A solemn promise that restricts your actions. Common examples: Poverty / (give away all wealth beyond subsistence) -10, Partial Silence (limited / speech) -5, Vegetarian -5.",
      "es": "A solemn promise that restricts your actions. Common examples: Poverty / (give away all wealth beyond subsistence) -10, Partial Silence (limited / speech) -5, Vegetarian -5."
    }
  },
  {
    "id": "charity_12",
    "name": {
      "en": "Charity (12)",
      "es": "Charity (12)"
    },
    "category": "Personal & Psychological",
    "cost": -15,
    "hasLevels": false,
    "description": {
      "en": "Cannot ignore genuine need. Must roll vs. 12 or help anyone who asks for / assistance you can reasonably provide. May be exploited.",
      "es": "Cannot ignore genuine need. Must roll vs. 12 or help anyone who asks for / assistance you can reasonably provide. May be exploited."
    }
  },
  {
    "id": "loner",
    "name": {
      "en": "Loner",
      "es": "Loner"
    },
    "category": "Personal & Psychological",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "Must roll vs. Will to spend extended time in groups larger than 3-4 people. / Seek solitude when stressed; -1 to social rolls in crowds.",
      "es": "Must roll vs. Will to spend extended time in groups larger than 3-4 people. / Seek solitude when stressed; -1 to social rolls in crowds."
    }
  },
  {
    "id": "bloodlust",
    "name": {
      "en": "Bloodlust",
      "es": "Bloodlust"
    },
    "category": "Personal & Psychological",
    "cost": -10,
    "hasLevels": false,
    "description": {
      "en": "Must go for killing blows in combat. IQ roll necessary to accept a / surrender or take a prisoner. Downed foes get an extra shot to make sure.",
      "es": "Must go for killing blows in combat. IQ roll necessary to accept a / surrender or take a prisoner. Downed foes get an extra shot to make sure."
    }
  },
  {
    "id": "weirdness_magnet",
    "name": {
      "en": "Weirdness Magnet",
      "es": "Weirdness Magnet"
    },
    "category": "Core Supernatural Disadvantages",
    "cost": -15,
    "hasLevels": false,
    "description": {
      "en": "Strange supernatural events are drawn to you constantly",
      "es": "Strange supernatural events are drawn to you constantly"
    }
  },
  {
    "id": "paranoia_12",
    "name": {
      "en": "Paranoia (12)",
      "es": "Paranoia (12)"
    },
    "category": "Core Supernatural Disadvantages",
    "cost": -10,
    "hasLevels": false,
    "description": {
      "en": "Must roll vs. 12 or assume strangers are threats; common potion side / effect",
      "es": "Must roll vs. 12 or assume strangers are threats; common potion side / effect"
    }
  },
  {
    "id": "hallucinations_12",
    "name": {
      "en": "Hallucinations (12)",
      "es": "Hallucinations (12)"
    },
    "category": "Core Supernatural Disadvantages",
    "cost": -10,
    "hasLevels": false,
    "description": {
      "en": "Periodic false sensory experiences; visions, voices, phantom presences",
      "es": "Periodic false sensory experiences; visions, voices, phantom presences"
    }
  },
  {
    "id": "compulsion_pathway",
    "name": {
      "en": "Compulsion (pathway)",
      "es": "Compulsion (pathway)"
    },
    "category": "Core Supernatural Disadvantages",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "Uncontrollable urge tied to pathway nature; triggered by stress",
      "es": "Uncontrollable urge tied to pathway nature; triggered by stress"
    }
  },
  {
    "id": "delusion_minor",
    "name": {
      "en": "Delusion (minor)",
      "es": "Delusion (minor)"
    },
    "category": "Core Supernatural Disadvantages",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "Firmly believes something false about the supernatural world",
      "es": "Firmly believes something false about the supernatural world"
    }
  },
  {
    "id": "coldblooded",
    "name": {
      "en": "Coldblooded",
      "es": "Coldblooded"
    },
    "category": "Core Supernatural Disadvantages",
    "cost": -10,
    "hasLevels": false,
    "description": {
      "en": "Morality erodes upon advancement. Roll Will when suppressing evil / desires (murder, lust, theft, etc.). Define with the GM which desires apply / to your character.",
      "es": "Morality erodes upon advancement. Roll Will when suppressing evil / desires (murder, lust, theft, etc.). Define with the GM which desires apply / to your character."
    }
  },
  {
    "id": "compulsive_behavior_indulge_evil_desires_sc_6",
    "name": {
      "en": "Compulsive Behavior / (Indulge Evil Desires) SC 6",
      "es": "Compulsive Behavior / (Indulge Evil Desires) SC 6"
    },
    "category": "Core Supernatural Disadvantages",
    "cost": -15,
    "hasLevels": false,
    "description": {
      "en": "When an opportunity to commit an evil act (murder, torture, betrayal, etc.) / presents itself, roll 3d6\u22646 or indulge fully. Conscience offers no / resistance.",
      "es": "When an opportunity to commit an evil act (murder, torture, betrayal, etc.) / presents itself, roll 3d6\u22646 or indulge fully. Conscience offers no / resistance."
    }
  },
  {
    "id": "bound_to_a_place",
    "name": {
      "en": "Bound to a Place",
      "es": "Bound to a Place"
    },
    "category": "Compulsions & Obsessions",
    "cost": -10,
    "hasLevels": false,
    "description": {
      "en": "Spiritually tethered to a location (specify). Leaving for more than one / week causes growing unease: -1 to Will per additional week, cumulative.",
      "es": "Spiritually tethered to a location (specify). Leaving for more than one / week causes growing unease: -1 to Will per additional week, cumulative."
    }
  },
  {
    "id": "compulsion_collection_pathway",
    "name": {
      "en": "Compulsion: Collection / (pathway)",
      "es": "Compulsion: Collection / (pathway)"
    },
    "category": "Compulsions & Obsessions",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "Compelled to collect specific items (bones, keys, mirrors, etc.). Roll vs. / Will-2 when presented with a collectible you do not own.",
      "es": "Compelled to collect specific items (bones, keys, mirrors, etc.). Roll vs. / Will-2 when presented with a collectible you do not own."
    }
  },
  {
    "id": "compulsion_confess",
    "name": {
      "en": "Compulsion: Confess",
      "es": "Compulsion: Confess"
    },
    "category": "Compulsions & Obsessions",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "Under significant stress, must tell someone a true secret. Roll vs. Will-2 or / confess something genuine to the nearest trusted person.",
      "es": "Under significant stress, must tell someone a true secret. Roll vs. Will-2 or / confess something genuine to the nearest trusted person."
    }
  },
  {
    "id": "compulsion_preserve_the_dead",
    "name": {
      "en": "Compulsion: Preserve the / Dead",
      "es": "Compulsion: Preserve the / Dead"
    },
    "category": "Compulsions & Obsessions",
    "cost": -10,
    "hasLevels": false,
    "description": {
      "en": "Cannot pass a neglected corpse without properly covering or / acknowledging it. Roll vs. Will-3 to continue without addressing them / first.",
      "es": "Cannot pass a neglected corpse without properly covering or / acknowledging it. Roll vs. Will-3 to continue without addressing them / first."
    }
  },
  {
    "id": "drawn_to_ritual_sites",
    "name": {
      "en": "Drawn to Ritual Sites",
      "es": "Drawn to Ritual Sites"
    },
    "category": "Compulsions & Obsessions",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "Pulled toward places where rituals have been performed. When within / blocks of a ritual site, compelled to investigate even without obvious / reason.",
      "es": "Pulled toward places where rituals have been performed. When within / blocks of a ritual site, compelled to investigate even without obvious / reason."
    }
  },
  {
    "id": "evil_eye_fear",
    "name": {
      "en": "Evil Eye Fear",
      "es": "Evil Eye Fear"
    },
    "category": "Compulsions & Obsessions",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "Avoid eye contact with strangers; periodically perform warding rituals. If / interrupted from a warding routine, -1 to Will rolls for the day.",
      "es": "Avoid eye contact with strangers; periodically perform warding rituals. If / interrupted from a warding routine, -1 to Will rolls for the day."
    }
  },
  {
    "id": "honest_to_spirits",
    "name": {
      "en": "Honest to Spirits",
      "es": "Honest to Spirits"
    },
    "category": "Compulsions & Obsessions",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "Cannot deliberately lie in the presence of ghosts or entities you know to be / spiritually present. Instinctive, not a rational choice.",
      "es": "Cannot deliberately lie in the presence of ghosts or entities you know to be / spiritually present. Instinctive, not a rational choice."
    }
  },
  {
    "id": "pathway_pull",
    "name": {
      "en": "Pathway Pull",
      "es": "Pathway Pull"
    },
    "category": "Compulsions & Obsessions",
    "cost": -10,
    "hasLevels": false,
    "description": {
      "en": "A specific Pathway exerts a narrative pull before you drink a potion.",
      "es": "A specific Pathway exerts a narrative pull before you drink a potion."
    }
  },
  {
    "id": "__79",
    "name": {
      "en": "---",
      "es": "---"
    },
    "category": "Compulsions & Obsessions",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "---",
      "es": "---"
    }
  },
  {
    "id": "chronophobia_temporal",
    "name": {
      "en": "Chronophobia (Temporal)",
      "es": "Chronophobia (Temporal)"
    },
    "category": "Mental & Perceptual",
    "cost": -10,
    "hasLevels": false,
    "description": {
      "en": "Irrational terror of something time-related (clocks stopping, mirrors, / specific hours). Triggered: immediate Fright Check at -3.",
      "es": "Irrational terror of something time-related (clocks stopping, mirrors, / specific hours). Triggered: immediate Fright Check at -3."
    }
  },
  {
    "id": "dead_eyed",
    "name": {
      "en": "Dead-Eyed",
      "es": "Dead-Eyed"
    },
    "category": "Mental & Perceptual",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "-2 to first-impression social rolls with strangers; animals are skittish / around you; children sometimes cry.",
      "es": "-2 to first-impression social rolls with strangers; animals are skittish / around you; children sometimes cry."
    }
  },
  {
    "id": "unsettling_appearance",
    "name": {
      "en": "Unsettling Appearance",
      "es": "Unsettling Appearance"
    },
    "category": "Mental & Perceptual",
    "cost": -4,
    "hasLevels": false,
    "description": {
      "en": "Your presence instinctively disturbs or repels others \u2014 a common / consequence of Abyss and Chained Pathway potions. NPCs react with / unease or distrust (GM discretion).",
      "es": "Your presence instinctively disturbs or repels others \u2014 a common / consequence of Abyss and Chained Pathway potions. NPCs react with / unease or distrust (GM discretion)."
    }
  },
  {
    "id": "entity_fixation",
    "name": {
      "en": "Entity Fixation",
      "es": "Entity Fixation"
    },
    "category": "Mental & Perceptual",
    "cost": -10,
    "hasLevels": false,
    "description": {
      "en": "-1 to all rolls when a specific entity type is present nearby; -2 to any roll / that requires you to ignore them.",
      "es": "-1 to all rolls when a specific entity type is present nearby; -2 to any roll / that requires you to ignore them."
    }
  },
  {
    "id": "fear_of_silence",
    "name": {
      "en": "Fear of Silence",
      "es": "Fear of Silence"
    },
    "category": "Mental & Perceptual",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "In complete silence \u2014 underground, at sea, in empty buildings \u2014 must / roll vs. Will-2 or feel compelled to speak or make noise.",
      "es": "In complete silence \u2014 underground, at sea, in empty buildings \u2014 must / roll vs. Will-2 or feel compelled to speak or make noise."
    }
  },
  {
    "id": "haunted",
    "name": {
      "en": "Haunted",
      "es": "Haunted"
    },
    "category": "Mental & Perceptual",
    "cost": -10,
    "hasLevels": false,
    "description": {
      "en": "A specific ghost follows you. Other spiritual beings notice it; it may / interfere with rituals; can be used as leverage by those who know.",
      "es": "A specific ghost follows you. Other spiritual beings notice it; it may / interfere with rituals; can be used as leverage by those who know."
    }
  },
  {
    "id": "memory_bleed",
    "name": {
      "en": "Memory Bleed",
      "es": "Memory Bleed"
    },
    "category": "Mental & Perceptual",
    "cost": -10,
    "hasLevels": false,
    "description": {
      "en": "Someone else's genuine memories intrude periodically \u2014 an unrelated / person from your past, or someone whose spiritual body overlapped yours.",
      "es": "Someone else's genuine memories intrude periodically \u2014 an unrelated / person from your past, or someone whose spiritual body overlapped yours."
    }
  },
  {
    "id": "perceptual_splitting",
    "name": {
      "en": "Perceptual Splitting",
      "es": "Perceptual Splitting"
    },
    "category": "Mental & Perceptual",
    "cost": -10,
    "hasLevels": false,
    "description": {
      "en": "At moments of high spiritual activity, senses temporarily separate from / your body. All physical rolls at -2 during an episode (1d seconds).",
      "es": "At moments of high spiritual activity, senses temporarily separate from / your body. All physical rolls at -2 during an episode (1d seconds)."
    }
  },
  {
    "id": "phobia_sacred_symbols",
    "name": {
      "en": "Phobia: Sacred Symbols",
      "es": "Phobia: Sacred Symbols"
    },
    "category": "Mental & Perceptual",
    "cost": -10,
    "hasLevels": false,
    "description": {
      "en": "A specific church's symbols, prayers, or holy items cause genuine fright. / Fright Check at -2 on direct exposure; -1 in consecrated buildings.",
      "es": "A specific church's symbols, prayers, or holy items cause genuine fright. / Fright Check at -2 on direct exposure; -1 in consecrated buildings."
    }
  },
  {
    "id": "spiritually_loud",
    "name": {
      "en": "Spiritually Loud",
      "es": "Spiritually Loud"
    },
    "category": "Mental & Perceptual",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "Spiritual presence registers as larger than your actual Sequence would / suggest. Perceived as more powerful than you are \u2014 a curse as much as a / blessing.",
      "es": "Spiritual presence registers as larger than your actual Sequence would / suggest. Perceived as more powerful than you are \u2014 a curse as much as a / blessing."
    }
  },
  {
    "id": "threshold_blindness",
    "name": {
      "en": "Threshold Blindness",
      "es": "Threshold Blindness"
    },
    "category": "Mental & Perceptual",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "One specific entity type or supernatural phenomenon you cannot perceive / with any spiritual skill, regardless of roll results (specify at creation).",
      "es": "One specific entity type or supernatural phenomenon you cannot perceive / with any spiritual skill, regardless of roll results (specify at creation)."
    }
  },
  {
    "id": "phobia_specify",
    "name": {
      "en": "Phobia (specify)",
      "es": "Phobia (specify)"
    },
    "category": "Mental & Perceptual",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "Irrational fear of a specific thing (cities, spiders, crowds, etc.). Fright / Check at -2 when exposed; -1 to all rolls while the phobic stimulus is / present and unavoidable. Severity depends on how common the trigger is.",
      "es": "Irrational fear of a specific thing (cities, spiders, crowds, etc.). Fright / Check at -2 when exposed; -1 to all rolls while the phobic stimulus is / present and unavoidable. Severity depends on how common the trigger is."
    }
  }
];
