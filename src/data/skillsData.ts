import { SkillDef } from '../types';

export interface ExtendedSkillDef extends SkillDef {
  category?: string;
}

export const SKILLS: ExtendedSkillDef[] = [
  {
    "id": "guns_pistol",
    "name": {
      "en": "Guns (Pistol)",
      "es": "Pistolas"
    },
    "category": "COMBAT SKILLS",
    "attr": "DX",
    "difficulty": "E",
    "description": {
      "en": "Derringers, semi-automatic pistols",
      "es": "Derringers y pistolas semiautom\u00e1ticas"
    }
  },
  {
    "id": "guns_revolver",
    "name": {
      "en": "Guns (Revolver)",
      "es": "Rev\u00f3lveres"
    },
    "category": "COMBAT SKILLS",
    "attr": "DX",
    "difficulty": "E",
    "description": {
      "en": "Revolvers of all calibres",
      "es": "Rev\u00f3lveres de todos los calibres"
    }
  },
  {
    "id": "guns_rifle",
    "name": {
      "en": "Guns (Rifle)",
      "es": "Rifles"
    },
    "category": "COMBAT SKILLS",
    "attr": "DX",
    "difficulty": "E",
    "description": {
      "en": "Rifles, muskets, carbines",
      "es": "Rifles, mosquetes y carabinas"
    }
  },
  {
    "id": "guns_shotgun",
    "name": {
      "en": "Guns (Shotgun)",
      "es": "Escopetas"
    },
    "category": "COMBAT SKILLS",
    "attr": "DX",
    "difficulty": "E",
    "description": {
      "en": "Scatter weapons",
      "es": "Armas de dispersi\u00f3n"
    }
  },
  {
    "id": "fast_draw_pistol",
    "name": {
      "en": "Fast-Draw (Pistol)",
      "es": "Desenfundado R\u00e1pido (Pistola)"
    },
    "category": "COMBAT SKILLS",
    "attr": "DX",
    "difficulty": "E",
    "description": {
      "en": "Quick weapon draw from holster",
      "es": "Desenfundado veloz del arma"
    }
  },
  {
    "id": "brawling",
    "name": {
      "en": "Brawling",
      "es": "Pelea Callejera"
    },
    "category": "COMBAT SKILLS",
    "attr": "DX",
    "difficulty": "E",
    "description": {
      "en": "Untrained street fighting",
      "es": "Combate sin entrenamiento formal"
    }
  },
  {
    "id": "boxing",
    "name": {
      "en": "Boxing",
      "es": "Boxeo"
    },
    "category": "COMBAT SKILLS",
    "attr": "DX",
    "difficulty": "A",
    "description": {
      "en": "Trained fisticuffs with technique",
      "es": "Pugilismo t\u00e9cnico"
    }
  },
  {
    "id": "knife",
    "name": {
      "en": "Knife",
      "es": "Cuchillo"
    },
    "category": "COMBAT SKILLS",
    "attr": "DX",
    "difficulty": "E",
    "description": {
      "en": "Combat knife use",
      "es": "Uso de cuchillos de combate"
    }
  },
  {
    "id": "axemace",
    "name": {
      "en": "Axe/Mace",
      "es": "Axe/Mace"
    },
    "category": "COMBAT SKILLS",
    "attr": "DX",
    "difficulty": "A",
    "description": {
      "en": "Heavy blunt/edged weapons",
      "es": "Heavy blunt/edged weapons"
    }
  },
  {
    "id": "bayonet",
    "name": {
      "en": "Bayonet",
      "es": "Bayonet"
    },
    "category": "COMBAT SKILLS",
    "attr": "DX",
    "difficulty": "A",
    "description": {
      "en": "Rifle-mounted blade",
      "es": "Rifle-mounted blade"
    }
  },
  {
    "id": "_",
    "name": {
      "en": "---",
      "es": "---"
    },
    "category": "COMBAT SKILLS",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "---",
      "es": "---"
    }
  },
  {
    "id": "wrestling",
    "name": {
      "en": "Wrestling",
      "es": "Lucha / Agarre"
    },
    "category": "COMBAT SKILLS",
    "attr": "DX",
    "difficulty": "A",
    "description": {
      "en": "Grappling and takedowns",
      "es": "T\u00e9cnicas de sujeci\u00f3n y agarre"
    }
  },
  {
    "id": "throwing",
    "name": {
      "en": "Throwing",
      "es": "Lanzamiento"
    },
    "category": "COMBAT SKILLS",
    "attr": "DX",
    "difficulty": "A",
    "description": {
      "en": "Thrown weapons in general",
      "es": "Lanzamiento de objetos y armas"
    }
  },
  {
    "id": "thrown_weapon_knife",
    "name": {
      "en": "Thrown Weapon (Knife)",
      "es": "Thrown Weapon (Knife)"
    },
    "category": "COMBAT SKILLS",
    "attr": "DX",
    "difficulty": "E",
    "description": {
      "en": "Throwing knives specifically",
      "es": "Throwing knives specifically"
    }
  },
  {
    "id": "gunner_machine_gun",
    "name": {
      "en": "Gunner (Machine Gun)",
      "es": "Gunner (Machine Gun)"
    },
    "category": "COMBAT SKILLS",
    "attr": "DX",
    "difficulty": "E",
    "description": {
      "en": "Vehicle-mounted machine guns, heavy weapon emplacements",
      "es": "Vehicle-mounted machine guns, heavy weapon emplacements"
    }
  },
  {
    "id": "gunner_cannon",
    "name": {
      "en": "Gunner (Cannon)",
      "es": "Gunner (Cannon)"
    },
    "category": "COMBAT SKILLS",
    "attr": "DX",
    "difficulty": "E",
    "description": {
      "en": "Artillery pieces, ship cannons, field guns",
      "es": "Artillery pieces, ship cannons, field guns"
    }
  },
  {
    "id": "shortsword",
    "name": {
      "en": "Shortsword",
      "es": "Espada Corta"
    },
    "category": "COMBAT SKILLS",
    "attr": "DX",
    "difficulty": "A",
    "description": {
      "en": "Light one-handed blades; includes sabre, cutlass",
      "es": "Espadas cortas y machetes"
    }
  },
  {
    "id": "broadsword",
    "name": {
      "en": "Broadsword",
      "es": "Espada Ancha"
    },
    "category": "COMBAT SKILLS",
    "attr": "DX",
    "difficulty": "A",
    "description": {
      "en": "Heavy one-handed blades; includes longsword",
      "es": "Espadas de una mano"
    }
  },
  {
    "id": "polearm",
    "name": {
      "en": "Polearm",
      "es": "Arma de Asta"
    },
    "category": "COMBAT SKILLS",
    "attr": "DX",
    "difficulty": "A",
    "description": {
      "en": "Long hafted weapons; spears, halberds, pikes",
      "es": "Lanzas, alabardas y picas"
    }
  },
  {
    "id": "shield",
    "name": {
      "en": "Shield",
      "es": "Escudo"
    },
    "category": "COMBAT SKILLS",
    "attr": "DX",
    "difficulty": "E",
    "description": {
      "en": "Block and parry with any shield type",
      "es": "Defensa y golpe con escudo"
    }
  },
  {
    "id": "fast_talk",
    "name": {
      "en": "Fast-Talk",
      "es": "Charlataner\u00eda"
    },
    "category": "SOCIAL SKILLS",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Con, deceive, talk your way out",
      "es": "Enga\u00f1o r\u00e1pido y persuasi\u00f3n verbal"
    }
  },
  {
    "id": "intimidation",
    "name": {
      "en": "Intimidation",
      "es": "Intimidaci\u00f3n"
    },
    "category": "SOCIAL SKILLS",
    "attr": "Will",
    "difficulty": "A",
    "description": {
      "en": "Threaten and coerce others",
      "es": "Coacci\u00f3n y presencia amenazante"
    }
  },
  {
    "id": "diplomacy",
    "name": {
      "en": "Diplomacy",
      "es": "Diplomacia"
    },
    "category": "SOCIAL SKILLS",
    "attr": "IQ",
    "difficulty": "H",
    "description": {
      "en": "Negotiate peacefully; reach compromise",
      "es": "Negociaci\u00f3n formal y elocuencia"
    }
  },
  {
    "id": "public_speaking",
    "name": {
      "en": "Public Speaking",
      "es": "Public Speaking"
    },
    "category": "SOCIAL SKILLS",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Address crowds effectively",
      "es": "Address crowds effectively"
    }
  },
  {
    "id": "acting",
    "name": {
      "en": "Acting",
      "es": "Actuaci\u00f3n"
    },
    "category": "SOCIAL SKILLS",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Disguise emotions; theatrical performance",
      "es": "Disfraz y encarnaci\u00f3n de roles (M\u00e9todo de Actuaci\u00f3n)"
    }
  },
  {
    "id": "leadership",
    "name": {
      "en": "Leadership",
      "es": "Leadership"
    },
    "category": "SOCIAL SKILLS",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Command and inspire others",
      "es": "Command and inspire others"
    }
  },
  {
    "id": "detect_lies",
    "name": {
      "en": "Detect Lies",
      "es": "Detect Lies"
    },
    "category": "SOCIAL SKILLS",
    "attr": "Per",
    "difficulty": "H",
    "description": {
      "en": "Spot deception and falsehood",
      "es": "Spot deception and falsehood"
    }
  },
  {
    "id": "interrogation",
    "name": {
      "en": "Interrogation",
      "es": "Interrogation"
    },
    "category": "SOCIAL SKILLS",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Extract information under pressure",
      "es": "Extract information under pressure"
    }
  },
  {
    "id": "observation",
    "name": {
      "en": "Observation",
      "es": "Observation"
    },
    "category": "SOCIAL SKILLS",
    "attr": "Per",
    "difficulty": "A",
    "description": {
      "en": "Notice and remember details",
      "es": "Notice and remember details"
    }
  },
  {
    "id": "psychology",
    "name": {
      "en": "Psychology",
      "es": "Psychology"
    },
    "category": "SOCIAL SKILLS",
    "attr": "IQ",
    "difficulty": "H",
    "description": {
      "en": "Understand and predict people",
      "es": "Understand and predict people"
    }
  },
  {
    "id": "savoir_faire",
    "name": {
      "en": "Savoir-Faire",
      "es": "Savoir-Faire"
    },
    "category": "SOCIAL SKILLS",
    "attr": "IQ",
    "difficulty": "E",
    "description": {
      "en": "Social graces (specify class)",
      "es": "Social graces (specify class)"
    }
  },
  {
    "id": "sex_appeal",
    "name": {
      "en": "Sex Appeal",
      "es": "Sex Appeal"
    },
    "category": "SOCIAL SKILLS",
    "attr": "HT",
    "difficulty": "A",
    "description": {
      "en": "Attract, seduce, or distract through charisma",
      "es": "Attract, seduce, or distract through charisma"
    }
  },
  {
    "id": "panhandling",
    "name": {
      "en": "Panhandling",
      "es": "Panhandling"
    },
    "category": "SOCIAL SKILLS",
    "attr": "IQ",
    "difficulty": "E",
    "description": {
      "en": "Beg for money or favours on the street",
      "es": "Beg for money or favours on the street"
    }
  },
  {
    "id": "disguise",
    "name": {
      "en": "Disguise",
      "es": "Disfraz"
    },
    "category": "SOCIAL SKILLS",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Change appearance convincingly",
      "es": "Alteraci\u00f3n f\u00edsica de apariencia"
    }
  },
  {
    "id": "forgery",
    "name": {
      "en": "Forgery",
      "es": "Forgery"
    },
    "category": "SOCIAL SKILLS",
    "attr": "IQ",
    "difficulty": "H",
    "description": {
      "en": "Create fake documents",
      "es": "Create fake documents"
    }
  },
  {
    "id": "holdout",
    "name": {
      "en": "Holdout",
      "es": "Holdout"
    },
    "category": "SOCIAL SKILLS",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Conceal objects on your person",
      "es": "Conceal objects on your person"
    }
  },
  {
    "id": "research",
    "name": {
      "en": "Research",
      "es": "Research"
    },
    "category": "KNOWLEDGE SKILLS",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Find information in libraries",
      "es": "Find information in libraries"
    }
  },
  {
    "id": "writing",
    "name": {
      "en": "Writing",
      "es": "Writing"
    },
    "category": "KNOWLEDGE SKILLS",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Compose documents, reports",
      "es": "Compose documents, reports"
    }
  },
  {
    "id": "history",
    "name": {
      "en": "History",
      "es": "Historia"
    },
    "category": "KNOWLEDGE SKILLS",
    "attr": "IQ",
    "difficulty": "H",
    "description": {
      "en": "Historical knowledge",
      "es": "Conocimiento de \u00e9pocas y eventos pasados"
    }
  },
  {
    "id": "literature",
    "name": {
      "en": "Literature",
      "es": "Literature"
    },
    "category": "KNOWLEDGE SKILLS",
    "attr": "IQ",
    "difficulty": "H",
    "description": {
      "en": "Literary and cultural knowledge",
      "es": "Literary and cultural knowledge"
    }
  },
  {
    "id": "occultism",
    "name": {
      "en": "Occultism",
      "es": "Ocultismo"
    },
    "category": "KNOWLEDGE SKILLS",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "General supernatural lore",
      "es": "Conocimiento de lo m\u00edstico, s\u00edmbolos y entidades"
    }
  },
  {
    "id": "hidden_lore",
    "name": {
      "en": "Hidden Lore",
      "es": "Hidden Lore"
    },
    "category": "KNOWLEDGE SKILLS",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Specific secret knowledge (specify type)",
      "es": "Specific secret knowledge (specify type)"
    }
  },
  {
    "id": "thaumatology",
    "name": {
      "en": "Thaumatology",
      "es": "Thaumatology"
    },
    "category": "KNOWLEDGE SKILLS",
    "attr": "IQ",
    "difficulty": "VH",
    "description": {
      "en": "Deep magic theory",
      "es": "Deep magic theory"
    }
  },
  {
    "id": "theology",
    "name": {
      "en": "Theology",
      "es": "Theology"
    },
    "category": "KNOWLEDGE SKILLS",
    "attr": "IQ",
    "difficulty": "H",
    "description": {
      "en": "Religious doctrine and practice",
      "es": "Religious doctrine and practice"
    }
  },
  {
    "id": "religious_ritual",
    "name": {
      "en": "Religious Ritual",
      "es": "Religious Ritual"
    },
    "category": "KNOWLEDGE SKILLS",
    "attr": "IQ",
    "difficulty": "H",
    "description": {
      "en": "Conduct religious ceremonies",
      "es": "Conduct religious ceremonies"
    }
  },
  {
    "id": "appraisal",
    "name": {
      "en": "Appraisal",
      "es": "Appraisal"
    },
    "category": "KNOWLEDGE SKILLS",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Value items and artifacts",
      "es": "Value items and artifacts"
    }
  },
  {
    "id": "__46",
    "name": {
      "en": "---",
      "es": "---"
    },
    "category": "KNOWLEDGE SKILLS",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "---",
      "es": "---"
    }
  },
  {
    "id": "merchant",
    "name": {
      "en": "Merchant",
      "es": "Merchant"
    },
    "category": "KNOWLEDGE SKILLS",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Trade, negotiation, market knowledge",
      "es": "Trade, negotiation, market knowledge"
    }
  },
  {
    "id": "criminology",
    "name": {
      "en": "Criminology",
      "es": "Criminology"
    },
    "category": "KNOWLEDGE SKILLS",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Crime investigation methods",
      "es": "Crime investigation methods"
    }
  },
  {
    "id": "explosives_demolition",
    "name": {
      "en": "Explosives (Demolition)",
      "es": "Explosives (Demolition)"
    },
    "category": "KNOWLEDGE SKILLS",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Prepare and set explosives to destroy targets",
      "es": "Prepare and set explosives to destroy targets"
    }
  },
  {
    "id": "diagnosis",
    "name": {
      "en": "Diagnosis",
      "es": "Diagnosis"
    },
    "category": "KNOWLEDGE SKILLS",
    "attr": "IQ",
    "difficulty": "H",
    "description": {
      "en": "Identify ailments and conditions",
      "es": "Identify ailments and conditions"
    }
  },
  {
    "id": "physician",
    "name": {
      "en": "Physician",
      "es": "Medicina"
    },
    "category": "KNOWLEDGE SKILLS",
    "attr": "IQ",
    "difficulty": "H",
    "description": {
      "en": "Medical treatment and surgery",
      "es": "Diagn\u00f3stico, tratamiento y f\u00e1rmacos"
    }
  },
  {
    "id": "surgery",
    "name": {
      "en": "Surgery",
      "es": "Cirug\u00eda"
    },
    "category": "KNOWLEDGE SKILLS",
    "attr": "IQ",
    "difficulty": "VH",
    "description": {
      "en": "Invasive medical procedures; requires Physician",
      "es": "Procedimientos quir\u00fargicos invasivos"
    }
  },
  {
    "id": "pharmacy",
    "name": {
      "en": "Pharmacy",
      "es": "Farmacia / Botica"
    },
    "category": "KNOWLEDGE SKILLS",
    "attr": "IQ",
    "difficulty": "H",
    "description": {
      "en": "Drug and remedy preparation",
      "es": "Preparaci\u00f3n de pociones, venenos y medicinas"
    }
  },
  {
    "id": "law_specify",
    "name": {
      "en": "Law (specify)",
      "es": "Law (specify)"
    },
    "category": "KNOWLEDGE SKILLS",
    "attr": "IQ",
    "difficulty": "H",
    "description": {
      "en": "Legal knowledge; specializations include Military, Criminal, Civil",
      "es": "Legal knowledge; specializations include Military, Criminal, Civil"
    }
  },
  {
    "id": "connoisseur_specify",
    "name": {
      "en": "Connoisseur (specify)",
      "es": "Connoisseur (specify)"
    },
    "category": "KNOWLEDGE SKILLS",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Expert knowledge of quality/value in a specific field (antiques, art, / wine, etc.)",
      "es": "Expert knowledge of quality/value in a specific field (antiques, art, / wine, etc.)"
    }
  },
  {
    "id": "streetwise",
    "name": {
      "en": "Streetwise",
      "es": "Streetwise"
    },
    "category": "KNOWLEDGE SKILLS",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Urban underworld knowledge",
      "es": "Urban underworld knowledge"
    }
  },
  {
    "id": "gambling",
    "name": {
      "en": "Gambling",
      "es": "Gambling"
    },
    "category": "KNOWLEDGE SKILLS",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Games of chance",
      "es": "Games of chance"
    }
  },
  {
    "id": "area_knowledge",
    "name": {
      "en": "Area Knowledge",
      "es": "Area Knowledge"
    },
    "category": "KNOWLEDGE SKILLS",
    "attr": "IQ",
    "difficulty": "E",
    "description": {
      "en": "Specific region (specify)",
      "es": "Specific region (specify)"
    }
  },
  {
    "id": "current_affairs",
    "name": {
      "en": "Current Affairs",
      "es": "Current Affairs"
    },
    "category": "KNOWLEDGE SKILLS",
    "attr": "IQ",
    "difficulty": "E",
    "description": {
      "en": "Recent events (specify topic)",
      "es": "Recent events (specify topic)"
    }
  },
  {
    "id": "cryptography",
    "name": {
      "en": "Cryptography",
      "es": "Criptograf\u00eda"
    },
    "category": "KNOWLEDGE SKILLS",
    "attr": "IQ",
    "difficulty": "H",
    "description": {
      "en": "Create and break codes, ciphers, and hidden messages",
      "es": "Descifrado de c\u00f3digos y escrituras secretas"
    }
  },
  {
    "id": "alchemy",
    "name": {
      "en": "Alchemy",
      "es": "Alquimia"
    },
    "category": "KNOWLEDGE SKILLS",
    "attr": "IQ",
    "difficulty": "VH",
    "description": {
      "en": "Transform substances; prepare elixirs, alchemical potions, and / magical compounds",
      "es": "Transmutaci\u00f3n de materiales y esencias"
    }
  },
  {
    "id": "ritualistic_magic",
    "name": {
      "en": "Ritualistic Magic",
      "es": "Magia Ritual"
    },
    "category": "KNOWLEDGE SKILLS",
    "attr": "IQ",
    "difficulty": "VH",
    "description": {
      "en": "Perform supernatural rituals: divination, summoning, binding,",
      "es": "Confecci\u00f3n y ejecuci\u00f3n de rituales"
    }
  },
  {
    "id": "pickpocket",
    "name": {
      "en": "Pickpocket",
      "es": "Hurto"
    },
    "category": "THIEF SKILLS",
    "attr": "DX",
    "difficulty": "H",
    "description": {
      "en": "Steal from people's person",
      "es": "Robo sigiloso y prestidigitaci\u00f3n"
    }
  },
  {
    "id": "lockpicking",
    "name": {
      "en": "Lockpicking",
      "es": "Ganzuar / Cerrajer\u00eda"
    },
    "category": "THIEF SKILLS",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Open locks without key",
      "es": "Apertura de cerraduras y mecanismos"
    }
  },
  {
    "id": "stealth",
    "name": {
      "en": "Stealth",
      "es": "Sigilo"
    },
    "category": "THIEF SKILLS",
    "attr": "DX",
    "difficulty": "A",
    "description": {
      "en": "Move silently, avoid detection",
      "es": "Movimiento silencioso e infiltraci\u00f3n"
    }
  },
  {
    "id": "shadowing",
    "name": {
      "en": "Shadowing",
      "es": "Seguimiento"
    },
    "category": "THIEF SKILLS",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Follow without being noticed",
      "es": "Rastreo urbano de objetivos sin ser visto"
    }
  },
  {
    "id": "traps",
    "name": {
      "en": "Traps",
      "es": "Traps"
    },
    "category": "THIEF SKILLS",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Detect, disarm, set traps",
      "es": "Detect, disarm, set traps"
    }
  },
  {
    "id": "climbing",
    "name": {
      "en": "Climbing",
      "es": "Escalada"
    },
    "category": "PHYSICAL SKILLS",
    "attr": "DX",
    "difficulty": "A",
    "description": {
      "en": "Scale surfaces and walls",
      "es": "Ascenso por muros y terrenos escarpados"
    }
  },
  {
    "id": "knot_tying",
    "name": {
      "en": "Knot-Tying",
      "es": "Knot-Tying"
    },
    "category": "PHYSICAL SKILLS",
    "attr": "DX",
    "difficulty": "E",
    "description": {
      "en": "Bind, secure, and rig ropes; escape bonds at -2",
      "es": "Bind, secure, and rig ropes; escape bonds at -2"
    }
  },
  {
    "id": "acrobatics",
    "name": {
      "en": "Acrobatics",
      "es": "Acrobacias"
    },
    "category": "PHYSICAL SKILLS",
    "attr": "DX",
    "difficulty": "H",
    "description": {
      "en": "Tumbling, balance, gymnastics",
      "es": "Maniobras gimn\u00e1sticas y equilibrio"
    }
  },
  {
    "id": "aerobatics",
    "name": {
      "en": "Aerobatics",
      "es": "Aerobatics"
    },
    "category": "PHYSICAL SKILLS",
    "attr": "DX",
    "difficulty": "H",
    "description": {
      "en": "Aerial maneuvers, stunts, and diving",
      "es": "Aerial maneuvers, stunts, and diving"
    }
  },
  {
    "id": "running",
    "name": {
      "en": "Running",
      "es": "Carrera"
    },
    "category": "PHYSICAL SKILLS",
    "attr": "HT",
    "difficulty": "A",
    "description": {
      "en": "Sprint and long-distance endurance",
      "es": "Velocidad y resistencia al correr"
    }
  },
  {
    "id": "swimming",
    "name": {
      "en": "Swimming",
      "es": "Nataci\u00f3n"
    },
    "category": "PHYSICAL SKILLS",
    "attr": "HT",
    "difficulty": "E",
    "description": {
      "en": "Move through water",
      "es": "Navegaci\u00f3n acu\u00e1tica"
    }
  },
  {
    "id": "jumping",
    "name": {
      "en": "Jumping",
      "es": "Jumping"
    },
    "category": "PHYSICAL SKILLS",
    "attr": "DX",
    "difficulty": "E",
    "description": {
      "en": "Leap distances",
      "es": "Leap distances"
    }
  },
  {
    "id": "lifting",
    "name": {
      "en": "Lifting",
      "es": "Lifting"
    },
    "category": "PHYSICAL SKILLS",
    "attr": "HT",
    "difficulty": "A",
    "description": {
      "en": "Hoist heavy loads",
      "es": "Hoist heavy loads"
    }
  },
  {
    "id": "hiking",
    "name": {
      "en": "Hiking",
      "es": "Hiking"
    },
    "category": "PHYSICAL SKILLS",
    "attr": "HT",
    "difficulty": "A",
    "description": {
      "en": "Long-distance foot travel; pace and endurance overland",
      "es": "Long-distance foot travel; pace and endurance overland"
    }
  },
  {
    "id": "first_aid",
    "name": {
      "en": "First Aid",
      "es": "Primeros Auxilios"
    },
    "category": "PHYSICAL SKILLS",
    "attr": "IQ",
    "difficulty": "E",
    "description": {
      "en": "Emergency medical care",
      "es": "Tratamiento de emergencia y estabilizaci\u00f3n"
    }
  },
  {
    "id": "mechanic",
    "name": {
      "en": "Mechanic",
      "es": "Mechanic"
    },
    "category": "CRAFT & TECHNICAL",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Repair machines (specify type)",
      "es": "Repair machines (specify type)"
    }
  },
  {
    "id": "__79",
    "name": {
      "en": "---",
      "es": "---"
    },
    "category": "CRAFT & TECHNICAL",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "---",
      "es": "---"
    }
  },
  {
    "id": "engineering",
    "name": {
      "en": "Engineering",
      "es": "Engineering"
    },
    "category": "CRAFT & TECHNICAL",
    "attr": "IQ",
    "difficulty": "H",
    "description": {
      "en": "Design and analyse mechanical systems, structures, and blueprints",
      "es": "Design and analyse mechanical systems, structures, and blueprints"
    }
  },
  {
    "id": "armoury_any",
    "name": {
      "en": "Armoury (any)",
      "es": "Armoury (any)"
    },
    "category": "CRAFT & TECHNICAL",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Repair and maintain weapons",
      "es": "Repair and maintain weapons"
    }
  },
  {
    "id": "electrician",
    "name": {
      "en": "Electrician",
      "es": "Electrician"
    },
    "category": "CRAFT & TECHNICAL",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Work with electrical systems",
      "es": "Work with electrical systems"
    }
  },
  {
    "id": "inventor",
    "name": {
      "en": "Inventor!",
      "es": "Inventor!"
    },
    "category": "CRAFT & TECHNICAL",
    "attr": "IQ",
    "difficulty": "WC",
    "description": {
      "en": "Wildcard skill covering all invention, engineering, and mechanical / tasks",
      "es": "Wildcard skill covering all invention, engineering, and mechanical / tasks"
    }
  },
  {
    "id": "spiritual_intuition",
    "name": {
      "en": "Spiritual Intuition",
      "es": "Intuici\u00f3n Espiritual"
    },
    "category": "SPIRITUAL SKILLS",
    "attr": "SPI",
    "difficulty": "H",
    "description": {
      "en": "Sense the flow of fate and changes in destiny; detect threats at a / glance",
      "es": "Sensibilidad y percepci\u00f3n del mundo espiritual"
    }
  },
  {
    "id": "spiritual_perception",
    "name": {
      "en": "Spiritual Perception",
      "es": "Spiritual Perception"
    },
    "category": "SPIRITUAL SKILLS",
    "attr": "SPI",
    "difficulty": "A",
    "description": {
      "en": "Passive innate sense: see ghosts, auras, and traces of magic. Peers / into the Astral and Spiritual Bodies of beings.",
      "es": "Passive innate sense: see ghosts, auras, and traces of magic. Peers / into the Astral and Spiritual Bodies of beings."
    }
  },
  {
    "id": "divination_arts",
    "name": {
      "en": "Divination Arts",
      "es": "Artes de Adivinaci\u00f3n"
    },
    "category": "SPIRITUAL SKILLS",
    "attr": "IQ",
    "difficulty": "H",
    "description": {
      "en": "Active analytical divination: pendulum, tarot, scrying, dream / interpretation. Uses tools to extract precise information from the / Spirit Realm. SPI augments the roll (1 SPI = +1).",
      "es": "Interpretaci\u00f3n de presagios, p\u00e9ndulo, tarot y sue\u00f1os"
    }
  },
  {
    "id": "survival",
    "name": {
      "en": "Survival",
      "es": "Supervivencia"
    },
    "category": "SURVIVAL & OTHER",
    "attr": "Per",
    "difficulty": "A",
    "description": {
      "en": "Live off land (specify terrain)",
      "es": "Subsistencia en entornos hostiles"
    }
  },
  {
    "id": "urban_survival",
    "name": {
      "en": "Urban Survival",
      "es": "Urban Survival"
    },
    "category": "SURVIVAL & OTHER",
    "attr": "Per",
    "difficulty": "A",
    "description": {
      "en": "Survive in urban environments",
      "es": "Survive in urban environments"
    }
  },
  {
    "id": "scrounging",
    "name": {
      "en": "Scrounging",
      "es": "Scrounging"
    },
    "category": "SURVIVAL & OTHER",
    "attr": "Per",
    "difficulty": "E",
    "description": {
      "en": "Find useful items in unlikely places",
      "es": "Find useful items in unlikely places"
    }
  },
  {
    "id": "navigation",
    "name": {
      "en": "Navigation",
      "es": "Navegaci\u00f3n"
    },
    "category": "SURVIVAL & OTHER",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Find your way; chart courses",
      "es": "Orientaci\u00f3n mar\u00edtima y cartas de navegaci\u00f3n"
    }
  },
  {
    "id": "tracking",
    "name": {
      "en": "Tracking",
      "es": "Rastreo"
    },
    "category": "SURVIVAL & OTHER",
    "attr": "Per",
    "difficulty": "A",
    "description": {
      "en": "Follow trails and quarry",
      "es": "Seguimiento de huellas en exteriores"
    }
  },
  {
    "id": "seamanship",
    "name": {
      "en": "Seamanship",
      "es": "Mariner\u00eda"
    },
    "category": "SURVIVAL & OTHER",
    "attr": "IQ",
    "difficulty": "E",
    "description": {
      "en": "Work aboard ships",
      "es": "Manejo de nav\u00edos y aparejos"
    }
  },
  {
    "id": "camouflage",
    "name": {
      "en": "Camouflage",
      "es": "Camouflage"
    },
    "category": "SURVIVAL & OTHER",
    "attr": "IQ",
    "difficulty": "E",
    "description": {
      "en": "Hide yourself or objects",
      "es": "Hide yourself or objects"
    }
  },
  {
    "id": "tactics",
    "name": {
      "en": "Tactics",
      "es": "T\u00e1cticas"
    },
    "category": "SURVIVAL & OTHER",
    "attr": "IQ",
    "difficulty": "H",
    "description": {
      "en": "Military and combat planning",
      "es": "Estrategia y movimiento en combate"
    }
  },
  {
    "id": "fortune_telling",
    "name": {
      "en": "Fortune Telling",
      "es": "Fortune Telling"
    },
    "category": "SURVIVAL & OTHER",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Read cards, palms; mundane methods",
      "es": "Read cards, palms; mundane methods"
    }
  },
  {
    "id": "astrology",
    "name": {
      "en": "Astrology",
      "es": "Astrology"
    },
    "category": "SURVIVAL & OTHER",
    "attr": "IQ",
    "difficulty": "H",
    "description": {
      "en": "Interpret celestial patterns for divination, navigation, and / fate-reading",
      "es": "Interpret celestial patterns for divination, navigation, and / fate-reading"
    }
  },
  {
    "id": "cogitation",
    "name": {
      "en": "Cogitation",
      "es": "Cogitation"
    },
    "category": "SURVIVAL & OTHER",
    "attr": "Will",
    "difficulty": "H",
    "description": {
      "en": "A focused mental state that allows Beyonders to stabilise their / spirituality, resist mental interference, and prepare for divination or / spirit-related abilities. Replaces Meditation for Beyonder purposes.",
      "es": "A focused mental state that allows Beyonders to stabilise their / spirituality, resist mental interference, and prepare for divination or / spirit-related abilities. Replaces Meditation for Beyonder purposes."
    }
  },
  {
    "id": "carousing",
    "name": {
      "en": "Carousing",
      "es": "Carousing"
    },
    "category": "SURVIVAL & OTHER",
    "attr": "HT",
    "difficulty": "E",
    "description": {
      "en": "Drink and socialize effectively",
      "es": "Drink and socialize effectively"
    }
  },
  {
    "id": "weather_sense",
    "name": {
      "en": "Weather Sense",
      "es": "Weather Sense"
    },
    "category": "SURVIVAL & OTHER",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Predict weather from natural observation",
      "es": "Predict weather from natural observation"
    }
  },
  {
    "id": "boating_sailboat",
    "name": {
      "en": "Boating (Sailboat)",
      "es": "Boating (Sailboat)"
    },
    "category": "SURVIVAL & OTHER",
    "attr": "DX",
    "difficulty": "A",
    "description": {
      "en": "Sail and maneuver sailing vessels",
      "es": "Sail and maneuver sailing vessels"
    }
  },
  {
    "id": "boating_unpowered",
    "name": {
      "en": "Boating (Unpowered)",
      "es": "Boating (Unpowered)"
    },
    "category": "SURVIVAL & OTHER",
    "attr": "DX",
    "difficulty": "A",
    "description": {
      "en": "Row and handle small unpowered boats",
      "es": "Row and handle small unpowered boats"
    }
  },
  {
    "id": "_investigation__dete",
    "name": {
      "en": "\u2014 INVESTIGATION & DETE",
      "es": "\u2014 INVESTIGATION & DETE"
    },
    "category": "SURVIVAL & OTHER",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "CTION",
      "es": "CTION"
    }
  },
  {
    "id": "body_language",
    "name": {
      "en": "Body Language",
      "es": "Body Language"
    },
    "category": "SURVIVAL & OTHER",
    "attr": "Per",
    "difficulty": "A",
    "description": {
      "en": "Read physical cues; posture, expression, tells",
      "es": "Read physical cues; posture, expression, tells"
    }
  },
  {
    "id": "forensics",
    "name": {
      "en": "Forensics",
      "es": "Forensics"
    },
    "category": "SURVIVAL & OTHER",
    "attr": "IQ",
    "difficulty": "H",
    "description": {
      "en": "Scientific crime scene investigation",
      "es": "Scientific crime scene investigation"
    }
  },
  {
    "id": "intelligence_analysis",
    "name": {
      "en": "Intelligence Analysis",
      "es": "Intelligence Analysis"
    },
    "category": "SURVIVAL & OTHER",
    "attr": "IQ",
    "difficulty": "H",
    "description": {
      "en": "Evaluate and interpret gathered information",
      "es": "Evaluate and interpret gathered information"
    }
  },
  {
    "id": "search",
    "name": {
      "en": "Search",
      "es": "B\u00fasqueda"
    },
    "category": "SURVIVAL & OTHER",
    "attr": "Per",
    "difficulty": "A",
    "description": {
      "en": "Systematically locate hidden objects or people",
      "es": "Inspecci\u00f3n minuciosa de \u00e1reas y personas"
    }
  },
  {
    "id": "lip_reading",
    "name": {
      "en": "Lip Reading",
      "es": "Lip Reading"
    },
    "category": "SURVIVAL & OTHER",
    "attr": "Per",
    "difficulty": "A",
    "description": {
      "en": "Understand speech without hearing it",
      "es": "Understand speech without hearing it"
    }
  },
  {
    "id": "cartography",
    "name": {
      "en": "Cartography",
      "es": "Cartography"
    },
    "category": "SURVIVAL & OTHER",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Read, draw, and interpret maps",
      "es": "Read, draw, and interpret maps"
    }
  },
  {
    "id": "__109",
    "name": {
      "en": "---",
      "es": "---"
    },
    "category": "SURVIVAL & OTHER",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "---",
      "es": "---"
    }
  },
  {
    "id": "performance",
    "name": {
      "en": "Performance",
      "es": "Performance"
    },
    "category": "PERFORMANCE & ARTS",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "General stage and platform performance",
      "es": "General stage and platform performance"
    }
  },
  {
    "id": "singing",
    "name": {
      "en": "Singing",
      "es": "Singing"
    },
    "category": "PERFORMANCE & ARTS",
    "attr": "HT",
    "difficulty": "E",
    "description": {
      "en": "Vocal performance; also used by Bards for Beyonder abilities",
      "es": "Vocal performance; also used by Bards for Beyonder abilities"
    }
  },
  {
    "id": "musical_instrument",
    "name": {
      "en": "Musical Instrument",
      "es": "Musical Instrument"
    },
    "category": "PERFORMANCE & ARTS",
    "attr": "IQ",
    "difficulty": "H",
    "description": {
      "en": "Play a specific instrument (specify)",
      "es": "Play a specific instrument (specify)"
    }
  },
  {
    "id": "dancing",
    "name": {
      "en": "Dancing",
      "es": "Dancing"
    },
    "category": "PERFORMANCE & ARTS",
    "attr": "DX",
    "difficulty": "A",
    "description": {
      "en": "Formal and social dance",
      "es": "Formal and social dance"
    }
  },
  {
    "id": "artist_drawing",
    "name": {
      "en": "Artist (Drawing)",
      "es": "Artist (Drawing)"
    },
    "category": "PERFORMANCE & ARTS",
    "attr": "IQ",
    "difficulty": "H",
    "description": {
      "en": "Illustration and portraiture",
      "es": "Illustration and portraiture"
    }
  },
  {
    "id": "artist_painting",
    "name": {
      "en": "Artist (Painting)",
      "es": "Artist (Painting)"
    },
    "category": "PERFORMANCE & ARTS",
    "attr": "IQ",
    "difficulty": "H",
    "description": {
      "en": "Painted works on canvas or paper",
      "es": "Painted works on canvas or paper"
    }
  },
  {
    "id": "ventriloquism",
    "name": {
      "en": "Ventriloquism",
      "es": "Ventriloquism"
    },
    "category": "PERFORMANCE & ARTS",
    "attr": "IQ",
    "difficulty": "H",
    "description": {
      "en": "Project voice to deceive listeners",
      "es": "Project voice to deceive listeners"
    }
  },
  {
    "id": "poetry",
    "name": {
      "en": "Poetry",
      "es": "Poetry"
    },
    "category": "PERFORMANCE & ARTS",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Write verse; also aids public speaking",
      "es": "Write verse; also aids public speaking"
    }
  },
  {
    "id": "accounting",
    "name": {
      "en": "Accounting",
      "es": "Accounting"
    },
    "category": "ACADEMIC",
    "attr": "IQ",
    "difficulty": "H",
    "description": {
      "en": "Financial records and business maths",
      "es": "Financial records and business maths"
    }
  },
  {
    "id": "administration",
    "name": {
      "en": "Administration",
      "es": "Administration"
    },
    "category": "ACADEMIC",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Bureaucratic management and procedure",
      "es": "Bureaucratic management and procedure"
    }
  },
  {
    "id": "economics",
    "name": {
      "en": "Economics",
      "es": "Econom\u00eda / Finanzas"
    },
    "category": "ACADEMIC",
    "attr": "IQ",
    "difficulty": "H",
    "description": {
      "en": "Markets, trade, and financial systems",
      "es": "Comercio, mercados y contabilidad"
    }
  },
  {
    "id": "philosophy",
    "name": {
      "en": "Philosophy",
      "es": "Philosophy"
    },
    "category": "ACADEMIC",
    "attr": "IQ",
    "difficulty": "H",
    "description": {
      "en": "Formal logic and ethical reasoning",
      "es": "Formal logic and ethical reasoning"
    }
  },
  {
    "id": "linguistics",
    "name": {
      "en": "Linguistics",
      "es": "Ling\u00fc\u00edstica"
    },
    "category": "ACADEMIC",
    "attr": "IQ",
    "difficulty": "H",
    "description": {
      "en": "Study of language structure; accelerates language learning",
      "es": "Comprensi\u00f3n de idiomas arcaicos como Hermes y Jotun"
    }
  },
  {
    "id": "anthropology",
    "name": {
      "en": "Anthropology",
      "es": "Anthropology"
    },
    "category": "ACADEMIC",
    "attr": "IQ",
    "difficulty": "H",
    "description": {
      "en": "Cultures, customs, and social structures",
      "es": "Cultures, customs, and social structures"
    }
  },
  {
    "id": "archaeology",
    "name": {
      "en": "Archaeology",
      "es": "Arqueolog\u00eda"
    },
    "category": "ACADEMIC",
    "attr": "IQ",
    "difficulty": "H",
    "description": {
      "en": "Excavation and analysis of ancient sites",
      "es": "Estudio de ruinas y civilizaciones antiguas"
    }
  },
  {
    "id": "sociology",
    "name": {
      "en": "Sociology",
      "es": "Sociology"
    },
    "category": "ACADEMIC",
    "attr": "IQ",
    "difficulty": "H",
    "description": {
      "en": "Broad study of human society and groups",
      "es": "Broad study of human society and groups"
    }
  },
  {
    "id": "astronomy",
    "name": {
      "en": "Astronomy",
      "es": "Astronomy"
    },
    "category": "ACADEMIC",
    "attr": "IQ",
    "difficulty": "H",
    "description": {
      "en": "Celestial bodies and their movements",
      "es": "Celestial bodies and their movements"
    }
  },
  {
    "id": "mathematics_applied",
    "name": {
      "en": "Mathematics (Applied)",
      "es": "Mathematics (Applied)"
    },
    "category": "ACADEMIC",
    "attr": "IQ",
    "difficulty": "H",
    "description": {
      "en": "Practical maths for engineering and science",
      "es": "Practical maths for engineering and science"
    }
  },
  {
    "id": "chemistry",
    "name": {
      "en": "Chemistry",
      "es": "Chemistry"
    },
    "category": "ACADEMIC",
    "attr": "IQ",
    "difficulty": "H",
    "description": {
      "en": "Compounds, reactions, and substances",
      "es": "Compounds, reactions, and substances"
    }
  },
  {
    "id": "physics",
    "name": {
      "en": "Physics",
      "es": "Physics"
    },
    "category": "ACADEMIC",
    "attr": "IQ",
    "difficulty": "VH",
    "description": {
      "en": "Natural laws governing matter and energy; requires Mathematics",
      "es": "Natural laws governing matter and energy; requires Mathematics"
    }
  },
  {
    "id": "teaching",
    "name": {
      "en": "Teaching",
      "es": "Teaching"
    },
    "category": "ACADEMIC",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Instruct and educate others effectively",
      "es": "Instruct and educate others effectively"
    }
  },
  {
    "id": "speed_reading",
    "name": {
      "en": "Speed-Reading",
      "es": "Speed-Reading"
    },
    "category": "ACADEMIC",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Read and comprehend text at high speed",
      "es": "Read and comprehend text at high speed"
    }
  },
  {
    "id": "carpentry",
    "name": {
      "en": "Carpentry",
      "es": "Carpentry"
    },
    "category": "TRADE & CRAFT",
    "attr": "IQ",
    "difficulty": "E",
    "description": {
      "en": "Work with wood; build and repair structures",
      "es": "Work with wood; build and repair structures"
    }
  },
  {
    "id": "masonry",
    "name": {
      "en": "Masonry",
      "es": "Masonry"
    },
    "category": "TRADE & CRAFT",
    "attr": "IQ",
    "difficulty": "E",
    "description": {
      "en": "Stonework and brick construction",
      "es": "Stonework and brick construction"
    }
  },
  {
    "id": "sewing",
    "name": {
      "en": "Sewing",
      "es": "Sewing"
    },
    "category": "TRADE & CRAFT",
    "attr": "DX",
    "difficulty": "E",
    "description": {
      "en": "Stitch, repair, and make garments",
      "es": "Stitch, repair, and make garments"
    }
  },
  {
    "id": "leatherworking",
    "name": {
      "en": "Leatherworking",
      "es": "Leatherworking"
    },
    "category": "TRADE & CRAFT",
    "attr": "DX",
    "difficulty": "E",
    "description": {
      "en": "Craft and repair leather goods and harnesses",
      "es": "Craft and repair leather goods and harnesses"
    }
  },
  {
    "id": "smith_iron",
    "name": {
      "en": "Smith (Iron)",
      "es": "Smith (Iron)"
    },
    "category": "TRADE & CRAFT",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Forge and work iron tools and parts",
      "es": "Forge and work iron tools and parts"
    }
  },
  {
    "id": "cooking",
    "name": {
      "en": "Cooking",
      "es": "Cooking"
    },
    "category": "TRADE & CRAFT",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Prepare food; basic herbalism uses this as default",
      "es": "Prepare food; basic herbalism uses this as default"
    }
  },
  {
    "id": "jeweler",
    "name": {
      "en": "Jeweler",
      "es": "Jeweler"
    },
    "category": "TRADE & CRAFT",
    "attr": "IQ",
    "difficulty": "H",
    "description": {
      "en": "Work with precious metals and gems",
      "es": "Work with precious metals and gems"
    }
  },
  {
    "id": "machinist",
    "name": {
      "en": "Machinist",
      "es": "Machinist"
    },
    "category": "TRADE & CRAFT",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Operate and maintain machine tools",
      "es": "Operate and maintain machine tools"
    }
  },
  {
    "id": "photography",
    "name": {
      "en": "Photography",
      "es": "Photography"
    },
    "category": "TRADE & CRAFT",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Operate cameras; develop images in darkroom",
      "es": "Operate cameras; develop images in darkroom"
    }
  },
  {
    "id": "freight_handling",
    "name": {
      "en": "Freight Handling",
      "es": "Freight Handling"
    },
    "category": "TRADE & CRAFT",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Dock and warehouse logistics",
      "es": "Dock and warehouse logistics"
    }
  },
  {
    "id": "animal_handling_any",
    "name": {
      "en": "Animal Handling (any)",
      "es": "Animal Handling (any)"
    },
    "category": "ANIMALS & OUTDOORS",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Control and care for animals (specify type)",
      "es": "Control and care for animals (specify type)"
    }
  },
  {
    "id": "__143",
    "name": {
      "en": "---",
      "es": "---"
    },
    "category": "ANIMALS & OUTDOORS",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "---",
      "es": "---"
    }
  },
  {
    "id": "riding_horse",
    "name": {
      "en": "Riding (Horse)",
      "es": "Riding (Horse)"
    },
    "category": "ANIMALS & OUTDOORS",
    "attr": "DX",
    "difficulty": "A",
    "description": {
      "en": "Ride and direct a mounted animal at speed",
      "es": "Ride and direct a mounted animal at speed"
    }
  },
  {
    "id": "falconry",
    "name": {
      "en": "Falconry",
      "es": "Falconry"
    },
    "category": "ANIMALS & OUTDOORS",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Train and hunt with birds of prey",
      "es": "Train and hunt with birds of prey"
    }
  },
  {
    "id": "fishing",
    "name": {
      "en": "Fishing",
      "es": "Fishing"
    },
    "category": "ANIMALS & OUTDOORS",
    "attr": "Per",
    "difficulty": "E",
    "description": {
      "en": "Catch fish; read water conditions",
      "es": "Catch fish; read water conditions"
    }
  },
  {
    "id": "gardening",
    "name": {
      "en": "Gardening",
      "es": "Gardening"
    },
    "category": "ANIMALS & OUTDOORS",
    "attr": "IQ",
    "difficulty": "E",
    "description": {
      "en": "Cultivate plants in managed spaces",
      "es": "Cultivate plants in managed spaces"
    }
  },
  {
    "id": "farming",
    "name": {
      "en": "Farming",
      "es": "Farming"
    },
    "category": "ANIMALS & OUTDOORS",
    "attr": "IQ",
    "difficulty": "E",
    "description": {
      "en": "Cultivate crops and manage farmland",
      "es": "Cultivate crops and manage farmland"
    }
  },
  {
    "id": "naturalist",
    "name": {
      "en": "Naturalist",
      "es": "Naturalist"
    },
    "category": "ANIMALS & OUTDOORS",
    "attr": "IQ",
    "difficulty": "H",
    "description": {
      "en": "Broad knowledge of plants, animals, and ecology",
      "es": "Broad knowledge of plants, animals, and ecology"
    }
  },
  {
    "id": "herbal_medicine",
    "name": {
      "en": "Herbal Medicine",
      "es": "Herbal Medicine"
    },
    "category": "ANIMALS & OUTDOORS",
    "attr": "IQ",
    "difficulty": "VH",
    "description": {
      "en": "Natural therapeutic use of plants; requires Naturalist",
      "es": "Natural therapeutic use of plants; requires Naturalist"
    }
  },
  {
    "id": "herb_lore",
    "name": {
      "en": "Herb Lore",
      "es": "Herb Lore"
    },
    "category": "ANIMALS & OUTDOORS",
    "attr": "IQ",
    "difficulty": "VH",
    "description": {
      "en": "Magical/occult plant knowledge; preparation of mystical herbal / remedies and poisons",
      "es": "Magical/occult plant knowledge; preparation of mystical herbal / remedies and poisons"
    }
  },
  {
    "id": "veterinary",
    "name": {
      "en": "Veterinary",
      "es": "Veterinary"
    },
    "category": "ANIMALS & OUTDOORS",
    "attr": "IQ",
    "difficulty": "H",
    "description": {
      "en": "Medical diagnosis and treatment for animals",
      "es": "Medical diagnosis and treatment for animals"
    }
  },
  {
    "id": "_underworld__cove_",
    "name": {
      "en": "\u2014 UNDERWORLD & COVE /",
      "es": "\u2014 UNDERWORLD & COVE /"
    },
    "category": "ANIMALS & OUTDOORS",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "/ \u2014 /",
      "es": "/ \u2014 /"
    }
  },
  {
    "id": "filch",
    "name": {
      "en": "Filch",
      "es": "Filch"
    },
    "category": "ANIMALS & OUTDOORS",
    "attr": "DX",
    "difficulty": "A",
    "description": {
      "en": "Swipe items from surfaces without notice",
      "es": "Swipe items from surfaces without notice"
    }
  },
  {
    "id": "sleight_of_hand",
    "name": {
      "en": "Sleight of Hand",
      "es": "Juegos de Manos"
    },
    "category": "ANIMALS & OUTDOORS",
    "attr": "DX",
    "difficulty": "H",
    "description": {
      "en": "Conceal and manipulate objects in plain sight",
      "es": "Manipulaci\u00f3n fina y trucos manuales"
    }
  },
  {
    "id": "escape",
    "name": {
      "en": "Escape",
      "es": "Escape"
    },
    "category": "ANIMALS & OUTDOORS",
    "attr": "DX",
    "difficulty": "H",
    "description": {
      "en": "Free oneself from bonds and confinement",
      "es": "Free oneself from bonds and confinement"
    }
  },
  {
    "id": "counterfeiting",
    "name": {
      "en": "Counterfeiting",
      "es": "Counterfeiting"
    },
    "category": "ANIMALS & OUTDOORS",
    "attr": "IQ",
    "difficulty": "H",
    "description": {
      "en": "Replicate currency or official seals",
      "es": "Replicate currency or official seals"
    }
  },
  {
    "id": "smuggling",
    "name": {
      "en": "Smuggling",
      "es": "Smuggling"
    },
    "category": "ANIMALS & OUTDOORS",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Move contraband past inspections",
      "es": "Move contraband past inspections"
    }
  },
  {
    "id": "poisons",
    "name": {
      "en": "Poisons",
      "es": "Poisons"
    },
    "category": "ANIMALS & OUTDOORS",
    "attr": "IQ",
    "difficulty": "H",
    "description": {
      "en": "Know, prepare, and apply toxins; also detect them",
      "es": "Know, prepare, and apply toxins; also detect them"
    }
  },
  {
    "id": "soldier",
    "name": {
      "en": "Soldier",
      "es": "Soldier"
    },
    "category": "MILITARY & NAVAL",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "General military knowledge, drill, and doctrine",
      "es": "General military knowledge, drill, and doctrine"
    }
  },
  {
    "id": "strategy",
    "name": {
      "en": "Strategy",
      "es": "Strategy"
    },
    "category": "MILITARY & NAVAL",
    "attr": "IQ",
    "difficulty": "H",
    "description": {
      "en": "Large-scale military and operational planning",
      "es": "Large-scale military and operational planning"
    }
  },
  {
    "id": "forward_observer",
    "name": {
      "en": "Forward Observer",
      "es": "Forward Observer"
    },
    "category": "MILITARY & NAVAL",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Direct artillery or ranged fire from a distant position",
      "es": "Direct artillery or ranged fire from a distant position"
    }
  },
  {
    "id": "shiphandling_ship",
    "name": {
      "en": "Shiphandling (Ship)",
      "es": "Shiphandling (Ship)"
    },
    "category": "MILITARY & NAVAL",
    "attr": "IQ",
    "difficulty": "H",
    "description": {
      "en": "Command and navigate a large sailing or steam vessel",
      "es": "Command and navigate a large sailing or steam vessel"
    }
  },
  {
    "id": "navigation_sea",
    "name": {
      "en": "Navigation (Sea)",
      "es": "Navigation (Sea)"
    },
    "category": "MILITARY & NAVAL",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Determine course by stars and charts at sea",
      "es": "Determine course by stars and charts at sea"
    }
  },
  {
    "id": "navigation_land",
    "name": {
      "en": "Navigation (Land)",
      "es": "Navigation (Land)"
    },
    "category": "MILITARY & NAVAL",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Orienteer and chart routes overland",
      "es": "Orienteer and chart routes overland"
    }
  }
];
