import { SkillDef } from './types';

export interface ExtendedSkillDef extends SkillDef {
  category: string;
}

export const SKILLS: ExtendedSkillDef[] = [
  {
    "id": "axe_mace",
    "name": {
      "en": "Axe/Mace",
      "es": "Hacha/Maza"
    },
    "category": "COMBAT",
    "attr": "DX",
    "difficulty": "A",
    "description": {
      "en": "Any short or medium unbalanced melee weapon",
      "es": "Cualquier arma cuerpo a cuerpo desequilibrada corta o mediana"
    }
  },
  {
    "id": "guns_pistol",
    "name": {
      "en": "Guns (Pistol)",
      "es": "Pistolas"
    },
    "category": "COMBAT",
    "attr": "DX",
    "difficulty": "E",
    "description": {
      "en": "Derringers, semi-automatic pistols",
      "es": "Derringers, pistolas semiautomáticas"
    }
  },
  {
    "id": "guns_revolver",
    "name": {
      "en": "Guns (Revolver)",
      "es": "Rev\u00f3lveres"
    },
    "category": "COMBAT",
    "attr": "DX",
    "difficulty": "E",
    "description": {
      "en": "Revolvers of all calibres",
      "es": "Revólveres de todos los calibres"
    }
  },
  {
    "id": "guns_rifle",
    "name": {
      "en": "Guns (Rifle)",
      "es": "Rifles"
    },
    "category": "COMBAT",
    "attr": "DX",
    "difficulty": "E",
    "description": {
      "en": "Rifles, muskets, carbines",
      "es": "Rifles, mosquetes, carabinas"
    }
  },
  {
    "id": "guns_shotgun",
    "name": {
      "en": "Guns (Shotgun)",
      "es": "Escopetas"
    },
    "category": "COMBAT",
    "attr": "DX",
    "difficulty": "E",
    "description": {
      "en": "Scatter weapons",
      "es": "Armas de dispersión (escopetas)"
    }
  },
  {
    "id": "fast_draw_pistol",
    "name": {
      "en": "Fast-Draw (Pistol)",
      "es": "Desenfundado R\u00e1pido (Pistola)"
    },
    "category": "COMBAT",
    "attr": "DX",
    "difficulty": "E",
    "description": {
      "en": "Quick weapon draw from holster",
      "es": "Desenfunde rápido de un arma desde la funda"
    }
  },
  {
    "id": "brawling",
    "name": {
      "en": "Brawling",
      "es": "Pelea Callejera"
    },
    "category": "COMBAT",
    "attr": "DX",
    "difficulty": "E",
    "description": {
      "en": "Untrained street fighting",
      "es": "Pelea callejera sin entrenamiento"
    }
  },
  {
    "id": "boxing",
    "name": {
      "en": "Boxing",
      "es": "Boxeo"
    },
    "category": "COMBAT",
    "attr": "DX",
    "difficulty": "A",
    "description": {
      "en": "Trained fisticuffs with technique",
      "es": "Pelea a puñetazos con técnica (boxeo)"
    }
  },
  {
    "id": "knife",
    "name": {
      "en": "Knife",
      "es": "Cuchillo"
    },
    "category": "COMBAT",
    "attr": "DX",
    "difficulty": "E",
    "description": {
      "en": "Combat knife use",
      "es": "Uso de cuchillos de combate"
    }
  },
  {
    "id": "bayonet",
    "name": {
      "en": "Bayonet",
      "es": "Bayoneta"
    },
    "category": "COMBAT",
    "attr": "DX",
    "difficulty": "A",
    "description": {
      "en": "Rifle-mounted blade",
      "es": "Hoja montada en un rifle"
    }
  },
  {
    "id": "wrestling",
    "name": {
      "en": "Wrestling",
      "es": "Lucha / Agarre"
    },
    "category": "COMBAT",
    "attr": "DX",
    "difficulty": "A",
    "description": {
      "en": "Grappling and takedowns",
      "es": "Agarres, forcejeos y derribos"
    }
  },
  {
    "id": "throwing",
    "name": {
      "en": "Throwing",
      "es": "Lanzamiento"
    },
    "category": "COMBAT",
    "attr": "DX",
    "difficulty": "A",
    "description": {
      "en": "Thrown weapons in general",
      "es": "Armas arrojadizas en general"
    }
  },
  {
    "id": "gunner_cannon",
    "name": {
      "en": "Gunner (Cannon)",
      "es": "Gunner (Cannon)"
    },
    "category": "COMBAT",
    "attr": "DX",
    "difficulty": "E",
    "description": {
      "en": "Artillery pieces, ship cannons, field guns",
      "es": "Piezas de artillería, cañones de barco, cañones de campaña"
    }
  },
  {
    "id": "shortsword",
    "name": {
      "en": "Shortsword",
      "es": "Espada Corta"
    },
    "category": "COMBAT",
    "attr": "DX",
    "difficulty": "A",
    "description": {
      "en": "Light one-handed blades; includes sabre, cutlass",
      "es": "Hojas ligeras a una mano; incluye sable, alfanje"
    }
  },
  {
    "id": "broadsword",
    "name": {
      "en": "Broadsword",
      "es": "Espada Ancha"
    },
    "category": "COMBAT",
    "attr": "DX",
    "difficulty": "A",
    "description": {
      "en": "Heavy one-handed blades; includes longsword",
      "es": "Hojas pesadas a una mano; incluye espada larga"
    }
  },
  {
    "id": "polearm",
    "name": {
      "en": "Polearm",
      "es": "Arma de Asta"
    },
    "category": "COMBAT",
    "attr": "DX",
    "difficulty": "A",
    "description": {
      "en": "Long hafted weapons; spears, halberds, pikes",
      "es": "Armas de asta larga; lanzas, alabardas, picas"
    }
  },
  {
    "id": "shield",
    "name": {
      "en": "Shield",
      "es": "Escudo"
    },
    "category": "COMBAT",
    "attr": "DX",
    "difficulty": "E",
    "description": {
      "en": "Block and parry with any shield type",
      "es": "Bloqueo y parada con cualquier tipo de escudo"
    }
  },
  {
    "id": "fast_talk",
    "name": {
      "en": "Fast-Talk",
      "es": "Charlataner\u00eda"
    },
    "category": "SOCIAL",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Con, deceive, talk your way out",
      "es": "Engañar, embaucar, usar la labia para salir de problemas"
    }
  },
  {
    "id": "intimidation",
    "name": {
      "en": "Intimidation",
      "es": "Intimidaci\u00f3n"
    },
    "category": "SOCIAL",
    "attr": "Will",
    "difficulty": "A",
    "description": {
      "en": "Threaten and coerce others",
      "es": "Amenazar y coaccionar a otros"
    }
  },
  {
    "id": "diplomacy",
    "name": {
      "en": "Diplomacy",
      "es": "Diplomacia"
    },
    "category": "SOCIAL",
    "attr": "IQ",
    "difficulty": "H",
    "description": {
      "en": "Negotiate peacefully; reach compromise",
      "es": "Negociar pacíficamente; llegar a un acuerdo"
    }
  },
  {
    "id": "public_speaking",
    "name": {
      "en": "Public Speaking",
      "es": "Oratoria"
    },
    "category": "SOCIAL",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Address crowds effectively",
      "es": "Dirigirse a multitudes de manera efectiva"
    }
  },
  {
    "id": "acting",
    "name": {
      "en": "Acting",
      "es": "Actuaci\u00f3n"
    },
    "category": "SOCIAL",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Disguise emotions; theatrical performance",
      "es": "Fingir emociones; actuación teatral"
    }
  },
  {
    "id": "leadership",
    "name": {
      "en": "Leadership",
      "es": "Liderazgo"
    },
    "category": "SOCIAL",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Command and inspire others",
      "es": "Comandar e inspirar a otros"
    }
  },
  {
    "id": "detect_lies",
    "name": {
      "en": "Detect Lies",
      "es": "Detectar Mentiras"
    },
    "category": "SOCIAL",
    "attr": "Per",
    "difficulty": "H",
    "description": {
      "en": "Spot deception and falsehood",
      "es": "Detectar engaños y falsedades"
    }
  },
  {
    "id": "interrogation",
    "name": {
      "en": "Interrogation",
      "es": "Interrogatorio"
    },
    "category": "SOCIAL",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Extract information under pressure",
      "es": "Extraer información bajo presión"
    }
  },
  {
    "id": "observation",
    "name": {
      "en": "Observation",
      "es": "Observación"
    },
    "category": "SOCIAL",
    "attr": "Per",
    "difficulty": "A",
    "description": {
      "en": "Notice and remember details",
      "es": "Notar y recordar detalles"
    }
  },
  {
    "id": "psychology",
    "name": {
      "en": "Psychology",
      "es": "Psicología"
    },
    "category": "SOCIAL",
    "attr": "IQ",
    "difficulty": "H",
    "description": {
      "en": "Understand and predict people",
      "es": "Entender y predecir el comportamiento de las personas"
    }
  },
  {
    "id": "savoir_faire",
    "name": {
      "en": "Savoir-Faire",
      "es": "Etiqueta"
    },
    "category": "SOCIAL",
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
      "es": "Seducción"
    },
    "category": "SOCIAL",
    "attr": "HT",
    "difficulty": "A",
    "description": {
      "en": "Attract, seduce, or distract through charisma",
      "es": "Atraer, seducir o distraer a través del carisma o atractivo"
    }
  },
  {
    "id": "panhandling",
    "name": {
      "en": "Panhandling",
      "es": "Mendigar"
    },
    "category": "SOCIAL",
    "attr": "IQ",
    "difficulty": "E",
    "description": {
      "en": "Beg for money or favours on the street",
      "es": "Mendigar dinero o favores en la calle"
    }
  },
  {
    "id": "disguise",
    "name": {
      "en": "Disguise",
      "es": "Disfraz"
    },
    "category": "SOCIAL",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Change appearance convincingly",
      "es": "Cambiar de apariencia de manera convincente"
    }
  },
  {
    "id": "forgery",
    "name": {
      "en": "Forgery",
      "es": "Falsificación"
    },
    "category": "SOCIAL",
    "attr": "IQ",
    "difficulty": "H",
    "description": {
      "en": "Create fake documents",
      "es": "Crear documentos e identificaciones falsas"
    }
  },
  {
    "id": "holdout",
    "name": {
      "en": "Holdout",
      "es": "Ocultar Objetos"
    },
    "category": "SOCIAL",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Conceal objects on your person",
      "es": "Ocultar objetos en tu persona o ropaje"
    }
  },
  {
    "id": "research",
    "name": {
      "en": "Research",
      "es": "Investigación / Búsqueda"
    },
    "category": "KNOWLEDGE",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Find information in libraries",
      "es": "Encontrar información en bibliotecas y archivos"
    }
  },
  {
    "id": "writing",
    "name": {
      "en": "Writing",
      "es": "Escritura"
    },
    "category": "KNOWLEDGE",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Compose documents, reports",
      "es": "Redactar documentos y reportes"
    }
  },
  {
    "id": "history",
    "name": {
      "en": "History",
      "es": "Historia"
    },
    "category": "KNOWLEDGE",
    "attr": "IQ",
    "difficulty": "H",
    "description": {
      "en": "Historical knowledge",
      "es": "Conocimiento histórico"
    }
  },
  {
    "id": "literature",
    "name": {
      "en": "Literature",
      "es": "Literatura"
    },
    "category": "KNOWLEDGE",
    "attr": "IQ",
    "difficulty": "H",
    "description": {
      "en": "Literary and cultural knowledge",
      "es": "Conocimiento literario y cultural"
    }
  },
  {
    "id": "occultism",
    "name": {
      "en": "Occultism",
      "es": "Ocultismo"
    },
    "category": "KNOWLEDGE",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "General supernatural lore",
      "es": "Sabiduría sobrenatural general"
    }
  },
  {
    "id": "hidden_lore",
    "name": {
      "en": "Hidden Lore",
      "es": "Conocimiento Oculto"
    },
    "category": "KNOWLEDGE",
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
      "es": "Taumaturgia"
    },
    "category": "KNOWLEDGE",
    "attr": "IQ",
    "difficulty": "VH",
    "description": {
      "en": "Deep magic theory",
      "es": "Teoría mágica profunda"
    }
  },
  {
    "id": "theology",
    "name": {
      "en": "Theology",
      "es": "Teología"
    },
    "category": "KNOWLEDGE",
    "attr": "IQ",
    "difficulty": "H",
    "description": {
      "en": "Religious doctrine and practice",
      "es": "Doctrina y práctica religiosa"
    }
  },
  {
    "id": "religious_ritual",
    "name": {
      "en": "Religious Ritual",
      "es": "Ritual Religioso"
    },
    "category": "KNOWLEDGE",
    "attr": "IQ",
    "difficulty": "H",
    "description": {
      "en": "Conduct religious ceremonies",
      "es": "Llevar a cabo ceremonias religiosas"
    }
  },
  {
    "id": "appraisal",
    "name": {
      "en": "Appraisal",
      "es": "Tasación"
    },
    "category": "KNOWLEDGE",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Value items and artifacts",
      "es": "Valorar y tasar artículos y artefactos"
    }
  },
  {
    "id": "merchant",
    "name": {
      "en": "Merchant",
      "es": "Comerciante / Mercader"
    },
    "category": "KNOWLEDGE",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Trade, negotiation, market knowledge",
      "es": "Comercio, negociación, conocimiento del mercado"
    }
  },
  {
    "id": "criminology",
    "name": {
      "en": "Criminology",
      "es": "Criminología"
    },
    "category": "KNOWLEDGE",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Crime investigation methods",
      "es": "Métodos de investigación criminal"
    }
  },
  {
    "id": "diagnosis",
    "name": {
      "en": "Diagnosis",
      "es": "Diagnóstico"
    },
    "category": "KNOWLEDGE",
    "attr": "IQ",
    "difficulty": "H",
    "description": {
      "en": "Identify ailments and conditions",
      "es": "Identificar dolencias y condiciones médicas"
    }
  },
  {
    "id": "physician",
    "name": {
      "en": "Physician",
      "es": "Medicina"
    },
    "category": "KNOWLEDGE",
    "attr": "IQ",
    "difficulty": "H",
    "description": {
      "en": "Medical treatment and surgery",
      "es": "Tratamiento médico general y cuidados"
    }
  },
  {
    "id": "surgery",
    "name": {
      "en": "Surgery",
      "es": "Cirug\u00eda"
    },
    "category": "KNOWLEDGE",
    "attr": "IQ",
    "difficulty": "VH",
    "description": {
      "en": "Invasive medical procedures; requires Physician",
      "es": "Procedimientos médicos invasivos; requiere la habilidad Médico"
    }
  },
  {
    "id": "pharmacy",
    "name": {
      "en": "Pharmacy",
      "es": "Farmacia / Botica"
    },
    "category": "KNOWLEDGE",
    "attr": "IQ",
    "difficulty": "H",
    "description": {
      "en": "Drug and remedy preparation",
      "es": "Preparación de medicamentos y remedios"
    }
  },
  {
    "id": "streetwise",
    "name": {
      "en": "Streetwise",
      "es": "Bajos Fondos"
    },
    "category": "KNOWLEDGE",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Urban underworld knowledge",
      "es": "Conocimiento del hampa y los bajos fondos"
    }
  },
  {
    "id": "gambling",
    "name": {
      "en": "Gambling",
      "es": "Juego de Apuestas"
    },
    "category": "KNOWLEDGE",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Games of chance",
      "es": "Juegos de azar y apuestas"
    }
  },
  {
    "id": "area_knowledge",
    "name": {
      "en": "Area Knowledge",
      "es": "Conocimiento del Área"
    },
    "category": "KNOWLEDGE",
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
      "es": "Actualidad"
    },
    "category": "KNOWLEDGE",
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
    "category": "KNOWLEDGE",
    "attr": "IQ",
    "difficulty": "H",
    "description": {
      "en": "Create and break codes, ciphers, and hidden messages",
      "es": "Crear y descifrar códigos, cifrados y mensajes ocultos"
    }
  },
  {
    "id": "alchemy",
    "name": {
      "en": "Alchemy",
      "es": "Alquimia"
    },
    "category": "KNOWLEDGE",
    "attr": "IQ",
    "difficulty": "VH",
    "description": {
      "en": "Transform substances; prepare elixirs, alchemical potions",
      "es": "Transformar sustancias; preparar elixires y pociones alquímicas"
    }
  },
  {
    "id": "ritualistic_magic",
    "name": {
      "en": "Ritualistic Magic",
      "es": "Magia Ritual"
    },
    "category": "KNOWLEDGE",
    "attr": "IQ",
    "difficulty": "VH",
    "description": {
      "en": "Perform supernatural rituals: divination, summoning, binding, enchanting",
      "es": "Realizar rituales sobrenaturales: adivinación, invocación, atadura, encantamiento"
    }
  },
  {
    "id": "pickpocket",
    "name": {
      "en": "Pickpocket",
      "es": "Hurto"
    },
    "category": "THIEF",
    "attr": "DX",
    "difficulty": "H",
    "description": {
      "en": "Steal from people's person",
      "es": "Robar de los bolsillos o persona"
    }
  },
  {
    "id": "lockpicking",
    "name": {
      "en": "Lockpicking",
      "es": "Ganzuar / Cerrajer\u00eda"
    },
    "category": "THIEF",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Open locks without key",
      "es": "Open locks without key"
    }
  },
  {
    "id": "stealth",
    "name": {
      "en": "Stealth",
      "es": "Sigilo"
    },
    "category": "THIEF",
    "attr": "DX",
    "difficulty": "A",
    "description": {
      "en": "Move silently, avoid detection",
      "es": "Moverse silenciosamente, evitar la detección"
    }
  },
  {
    "id": "shadowing",
    "name": {
      "en": "Shadowing",
      "es": "Seguimiento"
    },
    "category": "THIEF",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Follow without being noticed",
      "es": "Seguir a alguien sin ser notado"
    }
  },
  {
    "id": "traps",
    "name": {
      "en": "Traps",
      "es": "Trampas"
    },
    "category": "THIEF",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Detect, disarm, set traps",
      "es": "Detectar, desarmar y colocar trampas"
    }
  },
  {
    "id": "climbing",
    "name": {
      "en": "Climbing",
      "es": "Escalada"
    },
    "category": "PHYSICAL",
    "attr": "DX",
    "difficulty": "A",
    "description": {
      "en": "Scale surfaces and walls",
      "es": "Escalar superficies y paredes"
    }
  },
  {
    "id": "knot_tying",
    "name": {
      "en": "Knot-Tying",
      "es": "Atar Nudos"
    },
    "category": "PHYSICAL",
    "attr": "DX",
    "difficulty": "E",
    "description": {
      "en": "Bind, secure, and rig ropes; escape bonds at -2",
      "es": "Atar, asegurar y aparejar cuerdas; escapar de ataduras a -2"
    }
  },
  {
    "id": "acrobatics",
    "name": {
      "en": "Acrobatics",
      "es": "Acrobacias"
    },
    "category": "PHYSICAL",
    "attr": "DX",
    "difficulty": "H",
    "description": {
      "en": "Tumbling, balance, gymnastics",
      "es": "Acrobacias, equilibrio, gimnasia"
    }
  },
  {
    "id": "aerobatics",
    "name": {
      "en": "Aerobatics",
      "es": "Acrobacia Aérea"
    },
    "category": "PHYSICAL",
    "attr": "DX",
    "difficulty": "H",
    "description": {
      "en": "Aerial maneuvers, stunts, and diving",
      "es": "Maniobras aéreas, acrobacias y buceo en el aire"
    }
  },
  {
    "id": "running",
    "name": {
      "en": "Running",
      "es": "Carrera"
    },
    "category": "PHYSICAL",
    "attr": "HT",
    "difficulty": "A",
    "description": {
      "en": "Sprint and long-distance endurance",
      "es": "Sprint y resistencia en larga distancia"
    }
  },
  {
    "id": "swimming",
    "name": {
      "en": "Swimming",
      "es": "Nataci\u00f3n"
    },
    "category": "PHYSICAL",
    "attr": "HT",
    "difficulty": "E",
    "description": {
      "en": "Move through water",
      "es": "Nadar, moverse a través del agua"
    }
  },
  {
    "id": "jumping",
    "name": {
      "en": "Jumping",
      "es": "Saltar"
    },
    "category": "PHYSICAL",
    "attr": "DX",
    "difficulty": "E",
    "description": {
      "en": "Leap distances",
      "es": "Saltar largas distancias"
    }
  },
  {
    "id": "lifting",
    "name": {
      "en": "Lifting",
      "es": "Levantamiento"
    },
    "category": "PHYSICAL",
    "attr": "HT",
    "difficulty": "A",
    "description": {
      "en": "Hoist heavy loads",
      "es": "Levantar cargas pesadas"
    }
  },
  {
    "id": "hiking",
    "name": {
      "en": "Hiking",
      "es": "Excursionismo / Marcha"
    },
    "category": "PHYSICAL",
    "attr": "HT",
    "difficulty": "A",
    "description": {
      "en": "Long-distance foot travel",
      "es": "Viajar largas distancias a pie"
    }
  },
  {
    "id": "first_aid",
    "name": {
      "en": "First Aid",
      "es": "Primeros Auxilios"
    },
    "category": "PHYSICAL",
    "attr": "IQ",
    "difficulty": "E",
    "description": {
      "en": "Emergency medical care",
      "es": "Atención médica de emergencia, primeros auxilios"
    }
  },
  {
    "id": "mechanic",
    "name": {
      "en": "Mechanic",
      "es": "Mecánica"
    },
    "category": "CRAFT",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Repair machines (specify type)",
      "es": "Repair machines (specify type)"
    }
  },
  {
    "id": "engineering",
    "name": {
      "en": "Engineering",
      "es": "Ingeniería"
    },
    "category": "CRAFT",
    "attr": "IQ",
    "difficulty": "H",
    "description": {
      "en": "Design and analyse mechanical systems, structures, and blueprints",
      "es": "Diseñar y analizar sistemas mecánicos, estructuras y planos"
    }
  },
  {
    "id": "electrician",
    "name": {
      "en": "Electrician",
      "es": "Electricista"
    },
    "category": "CRAFT",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Work with electrical systems",
      "es": "Trabajar con sistemas eléctricos"
    }
  },
  {
    "id": "inventor",
    "name": {
      "en": "Inventor!",
      "es": "¡Inventor!"
    },
    "category": "CRAFT",
    "attr": "IQ",
    "difficulty": "WC",
    "description": {
      "en": "Wildcard skill covering all invention, engineering, and mechanical tasks",
      "es": "Habilidad comodín que cubre todas las tareas de invención, ingeniería y mecánica"
    }
  },
  {
    "id": "spiritual_intuition",
    "name": {
      "en": "Spiritual Intuition",
      "es": "Intuici\u00f3n Espiritual"
    },
    "category": "SPIRITUAL",
    "attr": "SPI",
    "difficulty": "H",
    "description": {
      "en": "Sense the flow of fate and changes in destiny; detect threats at a glance",
      "es": "Sentir el flujo del destino y los cambios; detectar amenazas a simple vista"
    }
  },
  {
    "id": "spiritual_perception",
    "name": {
      "en": "Spiritual Perception",
      "es": "Percepción Espiritual"
    },
    "category": "SPIRITUAL",
    "attr": "SPI",
    "difficulty": "A",
    "description": {
      "en": "Passive innate sense: see ghosts, auras, traces of magic; peers into Astral and Spiritual Bodies",
      "es": "Sentido innato pasivo: ver fantasmas, auras, rastros de magia; vislumbra Cuerpos Astrales y Espirituales"
    }
  },
  {
    "id": "divination_arts",
    "name": {
      "en": "Divination Arts",
      "es": "Artes de Adivinaci\u00f3n"
    },
    "category": "SPIRITUAL",
    "attr": "IQ",
    "difficulty": "H",
    "description": {
      "en": "Active analytical divination: pendulum, tarot, scrying, dream interpretation; SPI augments roll",
      "es": "Adivinación analítica activa: péndulo, tarot, adivinación, interpretación de sueños; SPI aumenta la tirada"
    }
  },
  {
    "id": "survival",
    "name": {
      "en": "Survival",
      "es": "Supervivencia"
    },
    "category": "SURVIVAL",
    "attr": "Per",
    "difficulty": "A",
    "description": {
      "en": "Live off land (specify terrain)",
      "es": "Live off land (specify terrain)"
    }
  },
  {
    "id": "urban_survival",
    "name": {
      "en": "Urban Survival",
      "es": "Supervivencia Urbana"
    },
    "category": "SURVIVAL",
    "attr": "Per",
    "difficulty": "A",
    "description": {
      "en": "Survive in urban environments",
      "es": "Sobrevivir en entornos urbanos y de ciudad"
    }
  },
  {
    "id": "scrounging",
    "name": {
      "en": "Scrounging",
      "es": "Rebuscar / Hurgar"
    },
    "category": "SURVIVAL",
    "attr": "Per",
    "difficulty": "E",
    "description": {
      "en": "Find useful items in unlikely places",
      "es": "Encontrar objetos útiles en lugares improbables (hurgar)"
    }
  },
  {
    "id": "navigation",
    "name": {
      "en": "Navigation",
      "es": "Navegaci\u00f3n"
    },
    "category": "SURVIVAL",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Find your way; chart courses",
      "es": "Encontrar el camino; trazar rutas de navegación"
    }
  },
  {
    "id": "tracking",
    "name": {
      "en": "Tracking",
      "es": "Rastreo"
    },
    "category": "SURVIVAL",
    "attr": "Per",
    "difficulty": "A",
    "description": {
      "en": "Follow trails and quarry",
      "es": "Seguir rastros y rastrear presas"
    }
  },
  {
    "id": "seamanship",
    "name": {
      "en": "Seamanship",
      "es": "Mariner\u00eda"
    },
    "category": "SURVIVAL",
    "attr": "IQ",
    "difficulty": "E",
    "description": {
      "en": "Work aboard ships",
      "es": "Trabajar a bordo de barcos"
    }
  },
  {
    "id": "camouflage",
    "name": {
      "en": "Camouflage",
      "es": "Camuflaje"
    },
    "category": "SURVIVAL",
    "attr": "IQ",
    "difficulty": "E",
    "description": {
      "en": "Hide yourself or objects",
      "es": "Ocultarse a sí mismo o esconder objetos"
    }
  },
  {
    "id": "tactics",
    "name": {
      "en": "Tactics",
      "es": "T\u00e1cticas"
    },
    "category": "SURVIVAL",
    "attr": "IQ",
    "difficulty": "H",
    "description": {
      "en": "Military and combat planning",
      "es": "Planificación táctica militar y de combate"
    }
  },
  {
    "id": "fortune_telling",
    "name": {
      "en": "Fortune Telling",
      "es": "Adivinación (Mundana)"
    },
    "category": "SURVIVAL",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Read cards, palms; mundane methods",
      "es": "Leer cartas, palmas; métodos mundanos de adivinación de ferias"
    }
  },
  {
    "id": "astrology",
    "name": {
      "en": "Astrology",
      "es": "Astrología"
    },
    "category": "SURVIVAL",
    "attr": "IQ",
    "difficulty": "H",
    "description": {
      "en": "Interpret celestial patterns for divination, navigation, and fate-reading",
      "es": "Interpretar patrones celestiales para adivinación, navegación y lectura del destino"
    }
  },
  {
    "id": "cogitation",
    "name": {
      "en": "Cogitation",
      "es": "Cogitación"
    },
    "category": "SURVIVAL",
    "attr": "Will",
    "difficulty": "H",
    "description": {
      "en": "Focused mental state to stabilise spirituality, resist mental interference, prepare for divination",
      "es": "Estado mental enfocado para estabilizar la espiritualidad, resistir la interferencia y prepararse para adivinar"
    }
  },
  {
    "id": "carousing",
    "name": {
      "en": "Carousing",
      "es": "Juerga / Socializar"
    },
    "category": "SURVIVAL",
    "attr": "HT",
    "difficulty": "E",
    "description": {
      "en": "Drink and socialize effectively",
      "es": "Beber y socializar de manera efectiva (Juerga)"
    }
  },
  {
    "id": "weather_sense",
    "name": {
      "en": "Weather Sense",
      "es": "Sentido del Clima"
    },
    "category": "SURVIVAL",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Predict weather from natural observation",
      "es": "Predecir el clima a partir de la observación natural"
    }
  },
  {
    "id": "boating_unpowered",
    "name": {
      "en": "Boating (Unpowered)",
      "es": "Boating (Unpowered)"
    },
    "category": "SURVIVAL",
    "attr": "DX",
    "difficulty": "A",
    "description": {
      "en": "Row and handle small unpowered boats",
      "es": "Remar y manejar pequeñas embarcaciones sin motor"
    }
  },
  {
    "id": "body_language",
    "name": {
      "en": "Body Language",
      "es": "Lenguaje Corporal"
    },
    "category": "INVESTIGATION",
    "attr": "Per",
    "difficulty": "A",
    "description": {
      "en": "Read physical cues; posture, expression, tells",
      "es": "Leer señales físicas; postura, expresión, tics verbales"
    }
  },
  {
    "id": "forensics",
    "name": {
      "en": "Forensics",
      "es": "Forense"
    },
    "category": "INVESTIGATION",
    "attr": "IQ",
    "difficulty": "H",
    "description": {
      "en": "Scientific crime scene investigation",
      "es": "Investigación científica de la escena del crimen"
    }
  },
  {
    "id": "intelligence_analysis",
    "name": {
      "en": "Intelligence Analysis",
      "es": "Análisis de Inteligencia"
    },
    "category": "INVESTIGATION",
    "attr": "IQ",
    "difficulty": "H",
    "description": {
      "en": "Evaluate and interpret gathered information",
      "es": "Evaluar e interpretar la información de inteligencia reunida"
    }
  },
  {
    "id": "search",
    "name": {
      "en": "Search",
      "es": "B\u00fasqueda"
    },
    "category": "INVESTIGATION",
    "attr": "Per",
    "difficulty": "A",
    "description": {
      "en": "Systematically locate hidden objects or people",
      "es": "Localizar sistemáticamente objetos o personas ocultas"
    }
  },
  {
    "id": "lip_reading",
    "name": {
      "en": "Lip Reading",
      "es": "Leer los Labios"
    },
    "category": "INVESTIGATION",
    "attr": "Per",
    "difficulty": "A",
    "description": {
      "en": "Understand speech without hearing it",
      "es": "Entender el habla sin escucharla (Leer los labios)"
    }
  },
  {
    "id": "cartography",
    "name": {
      "en": "Cartography",
      "es": "Cartografía"
    },
    "category": "INVESTIGATION",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Read, draw, and interpret maps",
      "es": "Leer, dibujar e interpretar mapas cartográficos"
    }
  },
  {
    "id": "performance",
    "name": {
      "en": "Performance",
      "es": "Actuación"
    },
    "category": "PERFORMANCE",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "General stage and platform performance",
      "es": "Actuación general en escenario y plataforma"
    }
  },
  {
    "id": "singing",
    "name": {
      "en": "Singing",
      "es": "Canto"
    },
    "category": "PERFORMANCE",
    "attr": "HT",
    "difficulty": "E",
    "description": {
      "en": "Vocal performance; also used by Bards for Beyonder abilities",
      "es": "Actuación vocal; también utilizada por Bardos para habilidades de Beyonder"
    }
  },
  {
    "id": "musical_instrument",
    "name": {
      "en": "Musical Instrument",
      "es": "Instrumento Musical"
    },
    "category": "PERFORMANCE",
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
      "es": "Danza / Baile"
    },
    "category": "PERFORMANCE",
    "attr": "DX",
    "difficulty": "A",
    "description": {
      "en": "Formal and social dance",
      "es": "Baile formal y social"
    }
  },
  {
    "id": "artist_drawing",
    "name": {
      "en": "Artist (Drawing)",
      "es": "Artist (Drawing)"
    },
    "category": "PERFORMANCE",
    "attr": "IQ",
    "difficulty": "H",
    "description": {
      "en": "Illustration and portraiture",
      "es": "Ilustración y retratos (dibujo)"
    }
  },
  {
    "id": "artist_painting",
    "name": {
      "en": "Artist (Painting)",
      "es": "Artist (Painting)"
    },
    "category": "PERFORMANCE",
    "attr": "IQ",
    "difficulty": "H",
    "description": {
      "en": "Painted works on canvas or paper",
      "es": "Obras pintadas en lienzo o papel"
    }
  },
  {
    "id": "ventriloquism",
    "name": {
      "en": "Ventriloquism",
      "es": "Ventriloquia"
    },
    "category": "PERFORMANCE",
    "attr": "IQ",
    "difficulty": "H",
    "description": {
      "en": "Project voice to deceive listeners",
      "es": "Proyectar la voz para engañar a los oyentes"
    }
  },
  {
    "id": "poetry",
    "name": {
      "en": "Poetry",
      "es": "Poesía"
    },
    "category": "PERFORMANCE",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Write verse; also aids public speaking",
      "es": "Escribir versos poéticos; también ayuda en la Oratoria"
    }
  },
  {
    "id": "accounting",
    "name": {
      "en": "Accounting",
      "es": "Contabilidad"
    },
    "category": "ACADEMIC",
    "attr": "IQ",
    "difficulty": "H",
    "description": {
      "en": "Financial records and business maths",
      "es": "Registros financieros y matemáticas comerciales"
    }
  },
  {
    "id": "administration",
    "name": {
      "en": "Administration",
      "es": "Administración"
    },
    "category": "ACADEMIC",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Bureaucratic management and procedure",
      "es": "Gestión y procedimientos burocráticos"
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
      "es": "Mercados, comercio y sistemas financieros"
    }
  },
  {
    "id": "philosophy",
    "name": {
      "en": "Philosophy",
      "es": "Filosofía"
    },
    "category": "ACADEMIC",
    "attr": "IQ",
    "difficulty": "H",
    "description": {
      "en": "Formal logic and ethical reasoning",
      "es": "Lógica formal y razonamiento ético"
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
      "es": "Estudio de la estructura del lenguaje; acelera el aprendizaje de idiomas"
    }
  },
  {
    "id": "anthropology",
    "name": {
      "en": "Anthropology",
      "es": "Antropología"
    },
    "category": "ACADEMIC",
    "attr": "IQ",
    "difficulty": "H",
    "description": {
      "en": "Cultures, customs, and social structures",
      "es": "Culturas, costumbres y estructuras sociales"
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
      "es": "Excavación y análisis de sitios antiguos"
    }
  },
  {
    "id": "sociology",
    "name": {
      "en": "Sociology",
      "es": "Sociología"
    },
    "category": "ACADEMIC",
    "attr": "IQ",
    "difficulty": "H",
    "description": {
      "en": "Broad study of human society and groups",
      "es": "Estudio amplio de la sociedad y grupos humanos"
    }
  },
  {
    "id": "astronomy",
    "name": {
      "en": "Astronomy",
      "es": "Astronomía"
    },
    "category": "ACADEMIC",
    "attr": "IQ",
    "difficulty": "H",
    "description": {
      "en": "Celestial bodies and their movements",
      "es": "Cuerpos celestiales y sus movimientos"
    }
  },
  {
    "id": "chemistry",
    "name": {
      "en": "Chemistry",
      "es": "Química"
    },
    "category": "ACADEMIC",
    "attr": "IQ",
    "difficulty": "H",
    "description": {
      "en": "Compounds, reactions, and substances",
      "es": "Compuestos, reacciones y sustancias químicas"
    }
  },
  {
    "id": "physics",
    "name": {
      "en": "Physics",
      "es": "Física"
    },
    "category": "ACADEMIC",
    "attr": "IQ",
    "difficulty": "VH",
    "description": {
      "en": "Natural laws governing matter and energy; requires Mathematics",
      "es": "Leyes naturales que rigen la materia y energía; requiere Matemáticas"
    }
  },
  {
    "id": "teaching",
    "name": {
      "en": "Teaching",
      "es": "Enseñanza"
    },
    "category": "ACADEMIC",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Instruct and educate others effectively",
      "es": "Instruir y educar a otros de manera efectiva"
    }
  },
  {
    "id": "speed_reading",
    "name": {
      "en": "Speed-Reading",
      "es": "Lectura Rápida"
    },
    "category": "ACADEMIC",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Read and comprehend text at high speed",
      "es": "Leer y comprender textos a alta velocidad"
    }
  },
  {
    "id": "carpentry",
    "name": {
      "en": "Carpentry",
      "es": "Carpintería"
    },
    "category": "TRADE",
    "attr": "IQ",
    "difficulty": "E",
    "description": {
      "en": "Work with wood; build and repair structures",
      "es": "Trabajar con madera; construir y reparar estructuras"
    }
  },
  {
    "id": "masonry",
    "name": {
      "en": "Masonry",
      "es": "Albañilería"
    },
    "category": "TRADE",
    "attr": "IQ",
    "difficulty": "E",
    "description": {
      "en": "Stonework and brick construction",
      "es": "Construcción en piedra y ladrillo"
    }
  },
  {
    "id": "sewing",
    "name": {
      "en": "Sewing",
      "es": "Costura"
    },
    "category": "TRADE",
    "attr": "DX",
    "difficulty": "E",
    "description": {
      "en": "Stitch, repair, and make garments",
      "es": "Coser, reparar y hacer prendas"
    }
  },
  {
    "id": "leatherworking",
    "name": {
      "en": "Leatherworking",
      "es": "Peletería / Cuero"
    },
    "category": "TRADE",
    "attr": "DX",
    "difficulty": "E",
    "description": {
      "en": "Craft and repair leather goods and harnesses",
      "es": "Fabricar y reparar artículos de cuero y arneses"
    }
  },
  {
    "id": "smith_iron",
    "name": {
      "en": "Smith (Iron)",
      "es": "Smith (Iron)"
    },
    "category": "TRADE",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Forge and work iron tools and parts",
      "es": "Forjar y trabajar herramientas y piezas de hierro"
    }
  },
  {
    "id": "cooking",
    "name": {
      "en": "Cooking",
      "es": "Cocina"
    },
    "category": "TRADE",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Prepare food; basic herbalism uses this as default",
      "es": "Preparar comida; la herboristería básica usa esto por defecto"
    }
  },
  {
    "id": "jeweler",
    "name": {
      "en": "Jeweler",
      "es": "Joyero"
    },
    "category": "TRADE",
    "attr": "IQ",
    "difficulty": "H",
    "description": {
      "en": "Work with precious metals and gems",
      "es": "Trabajar con metales preciosos y gemas"
    }
  },
  {
    "id": "machinist",
    "name": {
      "en": "Machinist",
      "es": "Maquinista"
    },
    "category": "TRADE",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Operate and maintain machine tools",
      "es": "Operar y mantener herramientas y maquinaria"
    }
  },
  {
    "id": "photography",
    "name": {
      "en": "Photography",
      "es": "Fotografía"
    },
    "category": "TRADE",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Operate cameras; develop images in darkroom",
      "es": "Operar cámaras; revelar imágenes en un cuarto oscuro"
    }
  },
  {
    "id": "freight_handling",
    "name": {
      "en": "Freight Handling",
      "es": "Manejo de Carga"
    },
    "category": "TRADE",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Dock and warehouse logistics",
      "es": "Logística portuaria y de almacenes"
    }
  },
  {
    "id": "riding_horse",
    "name": {
      "en": "Riding (Horse)",
      "es": "Riding (Horse)"
    },
    "category": "ANIMALS",
    "attr": "DX",
    "difficulty": "A",
    "description": {
      "en": "Ride and direct a mounted animal at speed",
      "es": "Montar y dirigir un animal a velocidad"
    }
  },
  {
    "id": "falconry",
    "name": {
      "en": "Falconry",
      "es": "Cetrería"
    },
    "category": "ANIMALS",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Train and hunt with birds of prey",
      "es": "Entrenar y cazar con aves rapaces"
    }
  },
  {
    "id": "fishing",
    "name": {
      "en": "Fishing",
      "es": "Pesca"
    },
    "category": "ANIMALS",
    "attr": "Per",
    "difficulty": "E",
    "description": {
      "en": "Catch fish; read water conditions",
      "es": "Atrapar peces; leer las condiciones del agua"
    }
  },
  {
    "id": "gardening",
    "name": {
      "en": "Gardening",
      "es": "Jardinería"
    },
    "category": "ANIMALS",
    "attr": "IQ",
    "difficulty": "E",
    "description": {
      "en": "Cultivate plants in managed spaces",
      "es": "Cultivar plantas en espacios manejados (jardines)"
    }
  },
  {
    "id": "farming",
    "name": {
      "en": "Farming",
      "es": "Agricultura"
    },
    "category": "ANIMALS",
    "attr": "IQ",
    "difficulty": "E",
    "description": {
      "en": "Cultivate crops and manage farmland",
      "es": "Cultivar cultivos y gestionar tierras de cultivo"
    }
  },
  {
    "id": "naturalist",
    "name": {
      "en": "Naturalist",
      "es": "Naturalista"
    },
    "category": "ANIMALS",
    "attr": "IQ",
    "difficulty": "H",
    "description": {
      "en": "Broad knowledge of plants, animals, and ecology",
      "es": "Amplio conocimiento de plantas, animales y ecología"
    }
  },
  {
    "id": "herbal_medicine",
    "name": {
      "en": "Herbal Medicine",
      "es": "Medicina Herbal"
    },
    "category": "ANIMALS",
    "attr": "IQ",
    "difficulty": "VH",
    "description": {
      "en": "Natural therapeutic use of plants; requires Naturalist",
      "es": "Uso terapéutico natural de plantas; requiere Naturalista"
    }
  },
  {
    "id": "herb_lore",
    "name": {
      "en": "Herb Lore",
      "es": "Conocimiento de Hierbas (Magia)"
    },
    "category": "ANIMALS",
    "attr": "IQ",
    "difficulty": "VH",
    "description": {
      "en": "Magical/occult plant knowledge; preparation of mystical herbal remedies and poisons",
      "es": "Conocimiento mágico/oculto de plantas; preparación de remedios y venenos"
    }
  },
  {
    "id": "veterinary",
    "name": {
      "en": "Veterinary",
      "es": "Veterinaria"
    },
    "category": "ANIMALS",
    "attr": "IQ",
    "difficulty": "H",
    "description": {
      "en": "Medical diagnosis and treatment for animals",
      "es": "Diagnóstico y tratamiento médico para animales"
    }
  },
  {
    "id": "filch",
    "name": {
      "en": "Filch",
      "es": "Hurtar / Ratear"
    },
    "category": "UNDERWORLD",
    "attr": "DX",
    "difficulty": "A",
    "description": {
      "en": "Swipe items from surfaces without notice",
      "es": "Hurtar pequeños objetos sin ser notado"
    }
  },
  {
    "id": "sleight_of_hand",
    "name": {
      "en": "Sleight of Hand",
      "es": "Juegos de Manos"
    },
    "category": "UNDERWORLD",
    "attr": "DX",
    "difficulty": "H",
    "description": {
      "en": "Conceal and manipulate objects in plain sight",
      "es": "Ocultar y manipular objetos a simple vista (Juegos de manos)"
    }
  },
  {
    "id": "escape",
    "name": {
      "en": "Escape",
      "es": "Escapismo"
    },
    "category": "UNDERWORLD",
    "attr": "DX",
    "difficulty": "H",
    "description": {
      "en": "Free oneself from bonds and confinement",
      "es": "Liberarse de ataduras y confinamiento"
    }
  },
  {
    "id": "counterfeiting",
    "name": {
      "en": "Counterfeiting",
      "es": "Falsificación (Moneda)"
    },
    "category": "UNDERWORLD",
    "attr": "IQ",
    "difficulty": "H",
    "description": {
      "en": "Replicate currency or official seals",
      "es": "Replicar moneda o sellos oficiales"
    }
  },
  {
    "id": "smuggling",
    "name": {
      "en": "Smuggling",
      "es": "Contrabando"
    },
    "category": "UNDERWORLD",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Move contraband past inspections",
      "es": "Pasar contrabando a través de inspecciones"
    }
  },
  {
    "id": "poisons",
    "name": {
      "en": "Poisons",
      "es": "Venenos"
    },
    "category": "UNDERWORLD",
    "attr": "IQ",
    "difficulty": "H",
    "description": {
      "en": "Know, prepare, and apply toxins; also detect them",
      "es": "Conocer, preparar y aplicar toxinas; también detectarlas"
    }
  },
  {
    "id": "soldier",
    "name": {
      "en": "Soldier",
      "es": "Soldado"
    },
    "category": "MILITARY",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "General military knowledge, drill, and doctrine",
      "es": "Conocimiento militar general, simulacros y doctrina"
    }
  },
  {
    "id": "strategy",
    "name": {
      "en": "Strategy",
      "es": "Estrategia"
    },
    "category": "MILITARY",
    "attr": "IQ",
    "difficulty": "H",
    "description": {
      "en": "Large-scale military and operational planning",
      "es": "Planificación militar y operativa a gran escala"
    }
  },
  {
    "id": "forward_observer",
    "name": {
      "en": "Forward Observer",
      "es": "Observador Avanzado"
    },
    "category": "MILITARY",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Direct artillery or ranged fire from a distant position",
      "es": "Dirigir artillería o fuego a distancia desde una posición distante"
    }
  },
  {
    "id": "navigation_sea",
    "name": {
      "en": "Navigation (Sea)",
      "es": "Navigation (Sea)"
    },
    "category": "MILITARY",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Determine course by stars and charts at sea",
      "es": "Determinar curso por estrellas y cartas náuticas en el mar"
    }
  },
  {
    "id": "navigation_land",
    "name": {
      "en": "Navigation (Land)",
      "es": "Navigation (Land)"
    },
    "category": "MILITARY",
    "attr": "IQ",
    "difficulty": "A",
    "description": {
      "en": "Orienteer and chart routes overland",
      "es": "Orientación y trazar rutas por tierra"
    }
  },
];
