import { TraitDef } from '../types';

export interface ExtendedTraitDef extends TraitDef {
  category?: string;
}

export const ADVANTAGES: ExtendedTraitDef[] = [
  {
    "id": "combat_reflexes",
    "name": {
      "en": "Combat Reflexes",
      "es": "Reflejos de Combate"
    },
    "category": "Combat Advantages",
    "cost": 15,
    "hasLevels": false,
    "description": {
      "en": "+1 to all active defenses, +6 to recover from stun, never freeze in surprise",
      "es": "+1 a todas las defensas activas, +6 para recuperarse de aturdimiento, nunca te congelas por sorpresa."
    }
  },
  {
    "id": "danger_sense",
    "name": {
      "en": "Danger Sense",
      "es": "Sentido del Peligro"
    },
    "category": "Combat Advantages",
    "cost": 15,
    "hasLevels": false,
    "description": {
      "en": "GM warns of threats just before they strike (surprise is negated)",
      "es": "El DJ advierte de amenazas justo antes de que golpeen (niega la sorpresa)."
    }
  },
  {
    "id": "hard_to_kill",
    "name": {
      "en": "Hard to Kill",
      "es": "Difícil de Matar"
    },
    "category": "Combat Advantages",
    "cost": 2,
    "hasLevels": true,
    "maxLevel": 5,
    "description": {
      "en": "+1/level to HT rolls to avoid death; can take 1–5 levels",
      "es": "+1/nivel a las tiradas de Salud para evitar la muerte; máximo 5 niveles."
    }
  },
  {
    "id": "hard_to_subdue",
    "name": {
      "en": "Hard to Subdue",
      "es": "Difícil de Someter"
    },
    "category": "Combat Advantages",
    "cost": 2,
    "hasLevels": true,
    "maxLevel": 5,
    "description": {
      "en": "+1/level to remain conscious when reduced to 0 or negative HP",
      "es": "+1/nivel para permanecer consciente al llegar a 0 o menos PV."
    }
  },
  {
    "id": "high_pain_threshold",
    "name": {
      "en": "High Pain Threshold",
      "es": "Alto Umbral de Dolor"
    },
    "category": "Combat Advantages",
    "cost": 10,
    "hasLevels": false,
    "description": {
      "en": "Ignore shock penalties from injury; +3 on HT rolls to avoid knockdown",
      "es": "Ignora penalizadores por dolor; +3 en tiradas de Salud para evitar ser derribado."
    }
  },
  {
    "id": "lifting_st",
    "name": {
      "en": "Lifting ST",
      "es": "Fuerza de Levantamiento"
    },
    "category": "Combat Advantages",
    "cost": 3,
    "hasLevels": true,
    "maxLevel": 5,
    "description": {
      "en": "Extra ST only for lifting/carrying purposes; does not affect damage",
      "es": "Fue extra solo para levantar/cargar; no afecta el daño."
    }
  },
  {
    "id": "charisma",
    "name": {
      "en": "Charisma",
      "es": "Carisma"
    },
    "category": "Mental & Social Advantages",
    "cost": 5,
    "hasLevels": true,
    "maxLevel": 5,
    "description": {
      "en": "+1/level to Influence skills (Leadership, Panhandling, Public Speaking, / Savoir-Faire, Sex Appeal, Streetwise); NPCs are predisposed to trust and / listen to you [max 4 levels]",
      "es": "+1/nivel a habilidades de Influencia. Los PNJs tienden a confiar y escucharte [máx 4 niveles]."
    }
  },
  {
    "id": "contact",
    "name": {
      "en": "Contact",
      "es": "Contacto"
    },
    "category": "Mental & Social Advantages",
    "cost": 1,
    "hasLevels": false,
    "description": {
      "en": "Reliable source of information or aid (varies by skill and frequency)",
      "es": "Fuente confiable de información o ayuda (varía por habilidad y frecuencia)."
    }
  },
  {
    "id": "church_organisation_informant",
    "name": {
      "en": "Church Organisation / Informant",
      "es": "Informante de la Iglesia"
    },
    "category": "Mental & Social Advantages",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "A representative of a church enforcement body (Nighthawks, Mandated / Punishers, Machinery Hivemind, etc.) has chosen you as an informant. / Receive help from authorities when in minor legal trouble or when caught / using Beyonder powers without harm to innocents. Earn contribution points / for important information or assistance, exchangeable for money or Beyonder / formulas/ingredients. 5 pts: newly recruited, must prove your worth. 10–15 / pts: trusted informant; the organisation's representative trusts your judgement.",
      "es": "Un representante de la iglesia te ha elegido como informante. Recibe ayuda en problemas legales menores. 5 pts: novato. 10-15 pts: informante de confianza."
    }
  },
  {
    "id": "official_beyonder",
    "name": {
      "en": "Official Beyonder",
      "es": "Beyonder Oficial"
    },
    "category": "Mental & Social Advantages",
    "cost": 15,
    "hasLevels": false,
    "description": {
      "en": "You operate under the sanction of a recognised church or organisation. / Benefits: Revolver +2, Ritualistic Magic +1, Hidden Lore (Beyonders) +3, / Occultism +2, Hermes Language (Broken). You have Legal Enforcement / Powers as a sanctioned investigator. Drawback: Duty (to your organisation) — / you can be called upon for assignments and must follow institutional protocol.",
      "es": "Operas bajo una iglesia. Beneficios: Revólver +2, Magia Ritualística +1, Conocimiento Oculto +3. Poderes legales, pero tienes el Deber de seguir protocolos."
    }
  },
  {
    "id": "eidetic_memory",
    "name": {
      "en": "Eidetic Memory",
      "es": "Memoria Eidética"
    },
    "category": "Mental & Social Advantages",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "+5 to remember things after one reading; near-perfect recall",
      "es": "+5 para recordar cosas tras leerlas una vez; recuerdo casi perfecto."
    }
  },
  {
    "id": "empathy",
    "name": {
      "en": "Empathy",
      "es": "Empatía"
    },
    "category": "Mental & Social Advantages",
    "cost": 15,
    "hasLevels": false,
    "description": {
      "en": "Sense emotions; +3 to social skill rolls",
      "es": "Siente emociones; +3 a tiradas de habilidades sociales."
    }
  },
  {
    "id": "language_talent",
    "name": {
      "en": "Language Talent",
      "es": "Talento para los Idiomas"
    },
    "category": "Mental & Social Advantages",
    "cost": 10,
    "hasLevels": false,
    "description": {
      "en": "All language skills cost half the normal points",
      "es": "Todas las habilidades de idiomas cuestan la mitad de los puntos normales."
    }
  },
  {
    "id": "reputation",
    "name": {
      "en": "Reputation",
      "es": "Reputación"
    },
    "category": "Mental & Social Advantages",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "Known for something specific — positive reactions from relevant groups",
      "es": "Conocido por algo específico; reacciones positivas de grupos relevantes."
    }
  },
  {
    "id": "voice",
    "name": {
      "en": "Voice",
      "es": "Voz"
    },
    "category": "Mental & Social Advantages",
    "cost": 10,
    "hasLevels": false,
    "description": {
      "en": "+2 to all rolls to influence others through speech",
      "es": "+2 a todas las tiradas para influenciar a otros hablando."
    }
  },
  {
    "id": "alertness",
    "name": {
      "en": "Alertness",
      "es": "Alerta"
    },
    "category": "Mental & Social Advantages",
    "cost": 5,
    "hasLevels": true,
    "maxLevel": 5,
    "description": {
      "en": "+1 per level to all Per rolls. Notice more of your surroundings — active and / passive perception both benefit.",
      "es": "+1 por nivel a tiradas de Percepción. Notas más de tu entorno (activa y pasiva)."
    }
  },
  {
    "id": "healer",
    "name": {
      "en": "Healer",
      "es": "Sanador"
    },
    "category": "Mental & Social Advantages",
    "cost": 10,
    "hasLevels": false,
    "description": {
      "en": "+2 to all rolls to diagnose, treat, and heal; +3 to First Aid specifically; HT rolls / to avoid or recover from disease at +2.",
      "es": "+2 a diagnosticar y tratar; +3 a Primeros Auxilios; +2 para evitar enfermedades."
    }
  },
  {
    "id": "single_minded",
    "name": {
      "en": "Single-Minded",
      "es": "Determinado"
    },
    "category": "Mental & Social Advantages",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "+3 to any extended concentration task (research, crafting, lockpicking, etc.) / when you can focus without interruption.",
      "es": "+3 a tareas de concentración prolongada (investigación, artesanía, etc.) si no hay interrupciones."
    }
  },
  {
    "id": "versatile",
    "name": {
      "en": "Versatile",
      "es": "Versátil"
    },
    "category": "Mental & Social Advantages",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "+1 to defaults skill rolls — any time you use a skill at default, you are / effectively one level better.",
      "es": "+1 a las tiradas de habilidades por defecto."
    }
  },
  {
    "id": "intuition",
    "name": {
      "en": "Intuition",
      "es": "Intuición"
    },
    "category": "Mental & Social Advantages",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "Once per session, the GM may give you a meaningful hunch about a decision. / Ask the GM: 'Is this a good/bad idea?' The GM must answer honestly.",
      "es": "Una vez por sesión, el DJ puede darte una corazonada sobre una decisión. Puedes preguntar: '¿Es buena idea?' y el DJ debe responder honestamente."
    }
  },
  {
    "id": "lightning_calculator",
    "name": {
      "en": "Lightning Calculator",
      "es": "Calculadora Humana"
    },
    "category": "Mental & Social Advantages",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "Perfect mental arithmetic; quick estimates at no penalty; numerical puzzles / and mental maths at +2.",
      "es": "Aritmética mental perfecta; matemáticas y puzzles numéricos con +2."
    }
  },
  {
    "id": "absolute_direction",
    "name": {
      "en": "Absolute Direction",
      "es": "Sentido de la Orientación"
    },
    "category": "Mental & Social Advantages",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "Always know which way is north; never become lost in natural terrain. +3 to / Navigation and Body Sense rolls.",
      "es": "Siempre sabes dónde está el norte; nunca te pierdes en la naturaleza. +3 a Navegación."
    }
  },
  {
    "id": "language_specify",
    "name": {
      "en": "Language (specify)",
      "es": "Idioma (específico)"
    },
    "category": "Mental & Social Advantages",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "Individual language proficiency. See the Languages section for cost tables / based on proficiency (Native/Accented/Broken) and type (Common vs / Mystical).",
      "es": "Competencia en idioma individual (Nativo/Acentuado/Roto)."
    }
  },
  {
    "id": "acute_social_awareness",
    "name": {
      "en": "Acute Social Awareness",
      "es": "Conciencia Social Aguda"
    },
    "category": "Social & Reputation",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "+2 to all Body Language and Detect Lies rolls. You read a room before / you enter it.",
      "es": "+2 a Lenguaje Corporal y Detectar Mentiras. Lees la habitación antes de entrar."
    }
  },
  {
    "id": "class_mobility",
    "name": {
      "en": "Class Mobility",
      "es": "Movilidad de Clase"
    },
    "category": "Social & Reputation",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "Move believably across two social classes. +2 to Savoir-Faire in either; / NPCs rarely question your presence.",
      "es": "Te mueves con credibilidad entre dos clases sociales. +2 a Etiqueta en cualquiera de ellas."
    }
  },
  {
    "id": "connections_church_lay_staff",
    "name": {
      "en": "Connections: Church Lay / Staff",
      "es": "Conexiones: Personal Laico de Iglesia"
    },
    "category": "Social & Reputation",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "Recognized civilian assistant to one Orthodox Church. Access to facilities; / some protection from routine Nighthawk scrutiny.",
      "es": "Asistente civil reconocido. Acceso a instalaciones y protección de escrutinio rutinario de los Halcones Nocturnos."
    }
  },
  {
    "id": "connections_press_credentials",
    "name": {
      "en": "Connections: Press / Credentials",
      "es": "Conexiones: Prensa"
    },
    "category": "Social & Reputation",
    "cost": 3,
    "hasLevels": false,
    "description": {
      "en": "Recognized press identity. Opens doors otherwise closed; plausible reason / to be anywhere in a city.",
      "es": "Identidad de prensa reconocida. Abre puertas; excusa plausible para estar en cualquier parte."
    }
  },
  {
    "id": "fearsome_reputation",
    "name": {
      "en": "Fearsome Reputation",
      "es": "Reputación Temible"
    },
    "category": "Social & Reputation",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "Known in criminal circles. Relevant NPCs start cautious; Intimidation in / these circles is at +2.",
      "es": "Conocido en círculos criminales. PNJs relevantes son cautelosos; Intimidación en estos círculos tiene +2."
    }
  },
  {
    "id": "local_legend",
    "name": {
      "en": "Local Legend",
      "es": "Leyenda Local"
    },
    "category": "Social & Reputation",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "Well-known in one neighbourhood (specify). +2 to social rolls there; / people look out for you.",
      "es": "Muy conocido en un barrio. +2 a tiradas sociales allí; la gente cuida de ti."
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
      "es": "Una figura mayor ofrece guía intermitente. Consulta una vez por sesión para información o ayuda."
    }
  },
  {
    "id": "multilingual",
    "name": {
      "en": "Multilingual",
      "es": "Multilingüe"
    },
    "category": "Social & Reputation",
    "cost": 3,
    "hasLevels": false,
    "description": {
      "en": "Fluent in two additional languages. No penalty to language-dependent / social skills in those languages.",
      "es": "Fluidez en dos idiomas adicionales. Sin penalizador en habilidades sociales que dependan de ellos."
    }
  },
  {
    "id": "natural_leader",
    "name": {
      "en": "Natural Leader",
      "es": "Líder Nato"
    },
    "category": "Social & Reputation",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "When you issue a direct command under pressure, allies may reroll their / first Fright Check or morale roll with +1. Once per scene.",
      "es": "Al dar una orden directa bajo presión, los aliados pueden repetir tiradas de moral con +1. Una vez por escena."
    }
  },
  {
    "id": "police_informant",
    "name": {
      "en": "Police Informant",
      "es": "Informante Policial"
    },
    "category": "Social & Reputation",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "Arrangement with local constabulary. Minor legal trouble can often be / redirected. Discreet — exposure would be dangerous.",
      "es": "Acuerdo con la policía local. Problemas legales menores pueden ser redirigidos. Exponerlo sería peligroso."
    }
  },
  {
    "id": "respectable_address",
    "name": {
      "en": "Respectable Address",
      "es": "Dirección Respetable"
    },
    "category": "Social & Reputation",
    "cost": 3,
    "hasLevels": false,
    "description": {
      "en": "Lodgings in a creditable neighbourhood. +1 to social rolls with / middle/upper class NPCs who would otherwise look down on you.",
      "es": "Vives en un buen barrio. +1 a tiradas sociales con PNJs de clase media/alta."
    }
  },
  {
    "id": "street_credibility",
    "name": {
      "en": "Street Credibility",
      "es": "Credibilidad Callejera"
    },
    "category": "Social & Reputation",
    "cost": 3,
    "hasLevels": false,
    "description": {
      "en": "Trusted in the working-class underground. Call in small favours from / dock workers, factory hands, and street operators once per session.",
      "es": "Confiable en el mundo trabajador. Puedes pedir pequeños favores a trabajadores una vez por sesión."
    }
  },
  {
    "id": "fearlessness",
    "name": {
      "en": "Fearlessness",
      "es": "Valentía"
    },
    "category": "Social & Reputation",
    "cost": 2,
    "hasLevels": true,
    "maxLevel": 5,
    "description": {
      "en": "+1 per level to Fright Checks; also grants immunity to intimidation from / beings with fewer levels of Fearlessness than you. Vital in a world of / horrors.",
      "es": "+1 por nivel a tiradas de Miedo; inmunidad a la intimidación de seres con menos niveles de Valentía."
    }
  },
  {
    "id": "fit",
    "name": {
      "en": "Fit",
      "es": "En Forma"
    },
    "category": "Social & Reputation",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "+1 to all HT rolls; recover FP at twice the normal rate",
      "es": "+1 a tiradas de Salud; recuperas Fatiga el doble de rápido."
    }
  },
  {
    "id": "very_fit",
    "name": {
      "en": "Very Fit",
      "es": "Muy en Forma"
    },
    "category": "Social & Reputation",
    "cost": 15,
    "hasLevels": false,
    "description": {
      "en": "+2 to all HT rolls; lose FP at half the normal rate; recover FP at twice the / normal rate",
      "es": "+2 a tiradas de Salud; pierdes Fatiga a la mitad de velocidad y recuperas el doble de rápido."
    }
  },
  {
    "id": "wealth_comfortable",
    "name": {
      "en": "Wealth: Comfortable",
      "es": "Riqueza: Cómodo"
    },
    "category": "Social & Reputation",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "Good income; start with £5. Status 1 — those impressed by wealth treat / you better (GM discretion).",
      "es": "Buen ingreso; empiezas con £5. Estatus 1."
    }
  },
  {
    "id": "hunting_license",
    "name": {
      "en": "Hunting License",
      "es": "Licencia de Caza"
    },
    "category": "Legal & Firearms",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "Legal in Loen for hunting rifle only. Costs £5 to obtain in-game. Valid in / rural/suburban areas — carrying in city limits draws police attention.",
      "es": "Legal en Loen solo para rifles de caza. Válido en zonas rurales."
    }
  },
  {
    "id": "general_weapon_certificate",
    "name": {
      "en": "General Weapon Certificate",
      "es": "Certificado General de Armas"
    },
    "category": "Legal & Firearms",
    "cost": 15,
    "hasLevels": false,
    "description": {
      "en": "Full civilian firearm permit. Costs £50 to obtain in-game. Allows carry of / any non-military weapon in cities; required for pistols, rifles, shotguns in / urban areas.",
      "es": "Permiso civil de armas completo. Permite llevar pistolas y rifles en la ciudad."
    }
  },
  {
    "id": "legal_enforcement_powers",
    "name": {
      "en": "Legal Enforcement Powers",
      "es": "Poderes Legales"
    },
    "category": "Legal & Firearms",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "Official authority to investigate, detain, and carry weapons in the line of / duty. Works within jurisdiction only; may vary by city or organization.",
      "es": "Autoridad oficial para investigar y arrestar."
    }
  },
  {
    "id": "black_market_access",
    "name": {
      "en": "Black Market Access",
      "es": "Acceso al Mercado Negro"
    },
    "category": "Professional & Technical",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "Reliable source for illegal or restricted goods. Once per session attempt to / acquire a specific item outside legal channels.",
      "es": "Fuente confiable de bienes ilegales. Intenta adquirir algo fuera de la ley una vez por sesión."
    }
  },
  {
    "id": "experienced_investigator",
    "name": {
      "en": "Experienced Investigator",
      "es": "Investigador Experimentado"
    },
    "category": "Professional & Technical",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "Once per investigation scene ask the GM one yes/no question about / observable evidence without a skill roll.",
      "es": "Pregunta al DJ una vez por escena de investigación algo sobre la evidencia sin tirar dados."
    }
  },
  {
    "id": "former_military_officer",
    "name": {
      "en": "Former Military Officer",
      "es": "Ex-Oficial Militar"
    },
    "category": "Professional & Technical",
    "cost": 10,
    "hasLevels": false,
    "description": {
      "en": "Leadership and Tactics at +1; military contacts; entitled to officer / courtesies in formal settings.",
      "es": "Liderazgo y Tácticas a +1; contactos militares."
    }
  },
  {
    "id": "industrial_expertise",
    "name": {
      "en": "Industrial Expertise",
      "es": "Experiencia Industrial"
    },
    "category": "Professional & Technical",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "Deep familiarity with a specific industry (specify). +2 to all relevant skill / rolls; NPCs in that industry trust your knowledge.",
      "es": "Familiaridad profunda con una industria. +2 a habilidades relevantes."
    }
  },
  {
    "id": "medical_training_informal",
    "name": {
      "en": "Medical Training (Informal)",
      "es": "Entrenamiento Médico (Informal)"
    },
    "category": "Professional & Technical",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "Use Physician at IQ-2 without purchasing the skill; First Aid rolls gain +1.",
      "es": "Usa Medicina a Int-2 sin tenerla; Primeros Auxilios con +1."
    }
  },
  {
    "id": "navigators_eye",
    "name": {
      "en": "Navigator's Eye",
      "es": "Ojo de Navegante"
    },
    "category": "Professional & Technical",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "Never become lost in any city previously visited; rural navigation rolls at / +2.",
      "es": "Nunca te pierdes en una ciudad ya visitada; +2 en zonas rurales."
    }
  },
  {
    "id": "photographic_instinct",
    "name": {
      "en": "Photographic Instinct",
      "es": "Instinto Fotográfico"
    },
    "category": "Professional & Technical",
    "cost": 3,
    "hasLevels": false,
    "description": {
      "en": "Photography rolls at +2; instinctively know what to capture as evidence.",
      "es": "Tiradas de Fotografía con +2; sabes instintivamente qué capturar."
    }
  },
  {
    "id": "safecracker",
    "name": {
      "en": "Safecracker",
      "es": "Ladrón de Cajas Fuertes"
    },
    "category": "Professional & Technical",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "+3 to Lockpicking for combination locks and mechanical safes / specifically.",
      "es": "+3 a Ganzúas para cajas fuertes mecánicas."
    }
  },
  {
    "id": "underworld_lawyer",
    "name": {
      "en": "Underworld Lawyer",
      "es": "Abogado del Bajomundo"
    },
    "category": "Professional & Technical",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "Once per session cite an obscure legal technicality convincingly enough to / delay, redirect, or dismiss a legal problem.",
      "es": "+2 a Leyes criminales; sabe cómo evadir tecnicismos."
    }
  },
  {
    "id": "alcohol_tolerance",
    "name": {
      "en": "Alcohol Tolerance",
      "es": "Tolerancia al Alcohol"
    },
    "category": "Physical & Innate",
    "cost": 1,
    "hasLevels": false,
    "description": {
      "en": "Never suffer social penalties from moderate drinking; Carousing rolls to / appear sober at +3.",
      "es": "+2 a resistir los efectos del alcohol."
    }
  },
  {
    "id": "cold_resistance",
    "name": {
      "en": "Cold Resistance",
      "es": "Resistencia al Frío"
    },
    "category": "Physical & Innate",
    "cost": 2,
    "hasLevels": false,
    "description": {
      "en": "No penalties from cold weather up to freezing; hypothermia rolls at +2.",
      "es": "Comodidad en climas fríos sin equipo especial."
    }
  },
  {
    "id": "controlled_breathing",
    "name": {
      "en": "Controlled Breathing",
      "es": "Respiración Controlada"
    },
    "category": "Physical & Innate",
    "cost": 3,
    "hasLevels": false,
    "description": {
      "en": "Hold breath for HT × 3 seconds without a roll; HT rolls to resist airborne / toxins at +2.",
      "es": "+2 a tiradas para aguantar la respiración o resistir gases."
    }
  },
  {
    "id": "fast_healer",
    "name": {
      "en": "Fast Healer",
      "es": "Curación Rápida"
    },
    "category": "Physical & Innate",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "Recover 1 additional HP per day of rest. Injuries that would leave others / bedridden leave you functional in half the time.",
      "es": "+1 a tiradas de recuperación de PV; sanas el doble de rápido de lo normal."
    }
  },
  {
    "id": "hard_stomach",
    "name": {
      "en": "Hard Stomach",
      "es": "Estómago de Hierro"
    },
    "category": "Physical & Innate",
    "cost": 2,
    "hasLevels": false,
    "description": {
      "en": "No HT rolls required for disgusting environments — gore, corpses, foul / conditions.",
      "es": "+3 a resistir comida podrida, venenos ingeridos o náuseas."
    }
  },
  {
    "id": "iron_jaw",
    "name": {
      "en": "Iron Jaw",
      "es": "Mandíbula de Hierro"
    },
    "category": "Physical & Innate",
    "cost": 3,
    "hasLevels": false,
    "description": {
      "en": "Knockdown rolls from blows to the head at +2; never bite through your / own tongue under shock.",
      "es": "+3 a las tiradas para no quedar aturdido por golpes a la cabeza."
    }
  },
  {
    "id": "light_sleeper",
    "name": {
      "en": "Light Sleeper",
      "es": "Sueño Ligero"
    },
    "category": "Physical & Innate",
    "cost": 2,
    "hasLevels": false,
    "description": {
      "en": "Perception rolls while sleeping at +4; never caught completely unaware at / night.",
      "es": "Te despiertas por cualquier ruido sospechoso sin penalización."
    }
  },
  {
    "id": "low_profile_build",
    "name": {
      "en": "Low-Profile Build",
      "es": "Complectura Discreta"
    },
    "category": "Physical & Innate",
    "cost": 3,
    "hasLevels": false,
    "description": {
      "en": "Physical appearance is unremarkable. All attempts to identify you from / description are at -2.",
      "es": "Físicamente pasas desapercibido. +1 a Sigilo."
    }
  },
  {
    "id": "night_eyes",
    "name": {
      "en": "Night Eyes",
      "es": "Ojos Nocturnos"
    },
    "category": "Physical & Innate",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "Reduce all darkness penalties by 2; in dim gaslight or moonlight suffer no / penalty at all.",
      "es": "Ves en la oscuridad con menos penalizadores (-2 a visión en la oscuridad)."
    }
  },
  {
    "id": "perfect_balance",
    "name": {
      "en": "Perfect Balance",
      "es": "Equilibrio Perfecto"
    },
    "category": "Physical & Innate",
    "cost": 20,
    "hasLevels": false,
    "description": {
      "en": "+6 to avoid knockdown; +2 to Acrobatics, Climbing, Piloting",
      "es": "+2 a Acrobacias; no pierdes equilibrio fácilmente."
    }
  },
  {
    "id": "great_balance",
    "name": {
      "en": "Great Balance",
      "es": "Gran Equilibrio"
    },
    "category": "Physical & Innate",
    "cost": 10,
    "hasLevels": false,
    "description": {
      "en": "+2 to avoid knockdown; +1 to Acrobatics, Climbing, Piloting",
      "es": "+1 a habilidades de equilibrio y agilidad."
    }
  },
  {
    "id": "rapid_recovery",
    "name": {
      "en": "Rapid Recovery",
      "es": "Recuperación Rápida"
    },
    "category": "Physical & Innate",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "Stun durations halved; recover from knockdown in half normal time.",
      "es": "El aturdimiento dura la mitad del tiempo."
    }
  },
  {
    "id": "flexibility",
    "name": {
      "en": "Flexibility",
      "es": "Flexibilidad"
    },
    "category": "Physical & Innate",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "+3 to Climbing and Escape; ignore up to -3 close-quarters penalties.",
      "es": "+3 a Escapar y Trepar."
    }
  },
  {
    "id": "double_jointed",
    "name": {
      "en": "Double-Jointed",
      "es": "Doble Articulación"
    },
    "category": "Physical & Innate",
    "cost": 15,
    "hasLevels": false,
    "description": {
      "en": "+5 to Climbing and Escape; ignore up to -5 close-quarters penalties for / wrestling or grappling; any body part bends any way.",
      "es": "+5 a Escapar y Trepar; puedes doblarte de formas antinaturales."
    }
  },
  {
    "id": "acute_vision",
    "name": {
      "en": "Acute Vision",
      "es": "Visión Aguda"
    },
    "category": "Physical & Innate",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "+2 to Vision rolls; notice details at a distance, read lips, spot hidden / objects.",
      "es": "+2 a Percepción visual; lees los labios y ves de lejos."
    }
  },
  {
    "id": "incisive_vision",
    "name": {
      "en": "Incisive Vision",
      "es": "Visión Incisiva"
    },
    "category": "Physical & Innate",
    "cost": 10,
    "hasLevels": false,
    "description": {
      "en": "Upgraded Acute Vision (+4 to all Vision rolls); can read / micro-expressions at 10m, see through minor visual illusions, spot / concealed objects automatically.",
      "es": "+4 a Visión; lees micro-expresiones, ves a través de ilusiones menores."
    }
  },
  {
    "id": "acute_hearing",
    "name": {
      "en": "Acute Hearing",
      "es": "Oído Agudo"
    },
    "category": "Physical & Innate",
    "cost": 2,
    "hasLevels": false,
    "description": {
      "en": "+2 to Hearing rolls; detect faint sounds, eavesdrop through walls, identify / speech in noise.",
      "es": "+2 a Audición; puedes escuchar a través de paredes."
    }
  },
  {
    "id": "resistant_specify",
    "name": {
      "en": "Resistant (specify)",
      "es": "Resistente (Específico)"
    },
    "category": "Physical & Innate",
    "cost": 3,
    "hasLevels": false,
    "description": {
      "en": "HT rolls to resist a specific category at +3 (3 pts) or +8 (5 pts). Common / choices: Disease, Poison, Temperature Extremes.",
      "es": "+3 a resistir venenos o enfermedades (a elegir)."
    }
  },
  {
    "id": "outdoorsman",
    "name": {
      "en": "Outdoorsman",
      "es": "Superviviente"
    },
    "category": "Physical & Innate",
    "cost": 10,
    "hasLevels": true,
    "maxLevel": 5,
    "description": {
      "en": "+1 per level to all Outdoor skills (Camouflage, Fishing, Naturalist, / Navigation, Survival, Tracking, Weather Sense). Max 4 levels.",
      "es": "+1 a habilidades de Naturaleza (Supervivencia, Rastrear, etc.)."
    }
  },
  {
    "id": "aura_sensitivity",
    "name": {
      "en": "Aura Sensitivity",
      "es": "Sensibilidad de Aura"
    },
    "category": "Perception & Detection",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "Sense the emotional weight of places. In locations where violence, grief, / or supernatural events occurred, receive a vague impression without / rolling.",
      "es": "Sientes la emoción de los lugares. Recibes vagas impresiones de violencia o pena sin tirar."
    }
  },
  {
    "id": "death_sense",
    "name": {
      "en": "Death Sense",
      "es": "Sentido de Muerte"
    },
    "category": "Perception & Detection",
    "cost": 10,
    "hasLevels": false,
    "description": {
      "en": "Passive awareness of recent death within 30 meters (within 24 hours). / Sense its direction without rolling; can sense whether a person is dying.",
      "es": "Conciencia pasiva de muertes recientes en 30 metros."
    }
  },
  {
    "id": "divine_touchstone",
    "name": {
      "en": "Divine Touchstone",
      "es": "Contacto Divino"
    },
    "category": "Perception & Detection",
    "cost": 10,
    "hasLevels": false,
    "description": {
      "en": "An Orthodox deity has taken minor notice of you. Once per session ask / the GM a yes/no question your character senses as an impression.",
      "es": "Una Deidad Ortodoxa te presta leve atención. Puedes hacerle una pregunta de sí/no al DJ por sesión."
    }
  },
  {
    "id": "dreamsight",
    "name": {
      "en": "Dreamsight",
      "es": "Visión Onírica"
    },
    "category": "Perception & Detection",
    "cost": 10,
    "hasLevels": false,
    "description": {
      "en": "Dreams contain genuine information. Once per session the GM may offer / a cryptic dream-image related to current events; sharing it grants +1 to one / investigation roll.",
      "es": "Los sueños contienen información genuina y otorgan +1 a una investigación por sesión."
    }
  },
  {
    "id": "ether_body_awareness",
    "name": {
      "en": "Ether Body Awareness",
      "es": "Consciencia del Cuerpo Etérico"
    },
    "category": "Perception & Detection",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "Know immediately when a supernatural effect is targeting your soul, not / just your body — even without Spirit Vision.",
      "es": "Sabes cuándo un efecto mágico apunta a tu alma sin necesidad de Visión Espiritual."
    }
  },
  {
    "id": "fate_sensitivity",
    "name": {
      "en": "Fate Sensitivity",
      "es": "Sensibilidad al Destino"
    },
    "category": "Perception & Detection",
    "cost": 10,
    "hasLevels": false,
    "description": {
      "en": "Once per session when making a decision with major consequences, ask / the GM: 'Does this feel wrong?' The GM must answer honestly.",
      "es": "Al tomar decisiones importantes, puedes preguntar al DJ si 'se siente mal' y debe responder."
    }
  },
  {
    "id": "ghost_proximity_sense",
    "name": {
      "en": "Ghost Proximity Sense",
      "es": "Sentido de Fantasmas"
    },
    "category": "Perception & Detection",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "Passive. Sense when a spirit is within 10 meters — a cold certainty. No / details; no roll required.",
      "es": "Sientes si hay espíritus en 10 metros como un frío. Pasivo, sin detalles."
    }
  },
  {
    "id": "pathway_resonance",
    "name": {
      "en": "Pathway Resonance",
      "es": "Resonancia de Senda"
    },
    "category": "Perception & Detection",
    "cost": 10,
    "hasLevels": false,
    "description": {
      "en": "Unexplained affinity with one specific Pathway (specify). +3 to rolls to / identify items, individuals, or rituals associated with it.",
      "es": "Afinidad inexplicada con una Senda específica. +3 a identificar sus rituales u objetos."
    }
  },
  {
    "id": "ritual_intuition",
    "name": {
      "en": "Ritual Intuition",
      "es": "Intuición Ritualística"
    },
    "category": "Perception & Detection",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "Sense when a ritual is being performed within 50 meters. Notice the / spiritual disturbance without rolling — even without knowing its type.",
      "es": "Sientes rituales realizándose en 50 metros de forma pasiva."
    }
  },
  {
    "id": "soul_reading_untrained",
    "name": {
      "en": "Soul Reading (Untrained)",
      "es": "Lectura de Almas (Inexperto)"
    },
    "category": "Perception & Detection",
    "cost": 10,
    "hasLevels": false,
    "description": {
      "en": "Once per scene the GM may offer one true impression about a target's / emotional condition or hidden motive. Cannot be triggered deliberately.",
      "es": "El DJ te da una impresión verdadera por escena del estado emocional de alguien. Aleatorio."
    }
  },
  {
    "id": "anchored_soul",
    "name": {
      "en": "Anchored Soul",
      "es": "Alma Anclada"
    },
    "category": "Resistance & Resilience",
    "cost": 10,
    "hasLevels": false,
    "description": {
      "en": "All attempts to alter your mental identity — possession, compulsion, / pathway side effects — are at -2 against you.",
      "es": "Los intentos de alterar tu mente (posesión, compulsión, corrupción) tienen un -2."
    }
  },
  {
    "id": "cleansed_spirit",
    "name": {
      "en": "Cleansed Spirit",
      "es": "Espíritu Limpio"
    },
    "category": "Resistance & Resilience",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "CoR gained from passive exposure are halved. Active corruption from / deliberate acts is unaffected.",
      "es": "La Corrupción de Residuos obtenida pasivamente se reduce a la mitad."
    }
  },
  {
    "id": "cold_iron_tolerance",
    "name": {
      "en": "Cold Iron Tolerance",
      "es": "Tolerancia al Hierro Frío"
    },
    "category": "Resistance & Resilience",
    "cost": 3,
    "hasLevels": false,
    "description": {
      "en": "Unaffected by the mild spiritual discomfort iron causes to sensitive / individuals. Rare in those with significant spiritual heritage.",
      "es": "No te afecta la incomodidad que el hierro frío causa a entidades mágicas."
    }
  },
  {
    "id": "faithful_grounding",
    "name": {
      "en": "Faithful Grounding",
      "es": "Fe Arraigada"
    },
    "category": "Resistance & Resilience",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "Genuine faith acts as an anchor. Fright Checks in church buildings, / shrines, or during prayer are at +3.",
      "es": "+3 a las tiradas de Miedo en iglesias u orando."
    }
  },
  {
    "id": "incorruptible_will",
    "name": {
      "en": "Incorruptible Will",
      "es": "Voluntad Incorruptible"
    },
    "category": "Resistance & Resilience",
    "cost": 10,
    "hasLevels": false,
    "description": {
      "en": "+3 to all Will rolls to resist Beyonder abilities, evil god whispers, and / ritual compulsion. Does not apply to mundane social pressure.",
      "es": "+3 a tiradas de Voluntad contra habilidades de Beyonder y corrupción."
    }
  },
  {
    "id": "spiritual_fortitude",
    "name": {
      "en": "Spiritual Fortitude",
      "es": "Fortaleza Espiritual"
    },
    "category": "Resistance & Resilience",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "Maximum CoR equal Will + 3 rather than just Will.",
      "es": "La Corrupción máxima es Voluntad + 3."
    }
  },
  {
    "id": "warded_dreams",
    "name": {
      "en": "Warded Dreams",
      "es": "Sueños Protegidos"
    },
    "category": "Resistance & Resilience",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "All supernatural attempts to enter, read, or alter your dreams require an / additional success by 3 or more to take effect.",
      "es": "Los ataques a tus sueños requieren 3 éxitos adicionales."
    }
  },
  {
    "id": "luck",
    "name": {
      "en": "Luck",
      "es": "Suerte"
    },
    "category": "Unusual Gifts",
    "cost": 15,
    "hasLevels": false,
    "description": {
      "en": "1 reroll per session — may reroll any one failed roll.",
      "es": "1 repetición de tirada fallida por sesión."
    }
  },
  {
    "id": "beckoning_luck",
    "name": {
      "en": "Beckoning Luck",
      "es": "Suerte Constante"
    },
    "category": "Unusual Gifts",
    "cost": 30,
    "hasLevels": false,
    "description": {
      "en": "2 rerolls per session — reroll any failed roll, usable at any time. If the / re-roll also fails there is no additional effect — and fate may balance later.",
      "es": "2 repeticiones por sesión."
    }
  },
  {
    "id": "born_under_a_named_star",
    "name": {
      "en": "Born Under a Named Star",
      "es": "Nacido bajo una Estrella con Nombre"
    },
    "category": "Unusual Gifts",
    "cost": 15,
    "hasLevels": false,
    "description": {
      "en": "Seers and Diviners who read your fate always notice something unusual. / You register as 'marked' in ways they cannot fully interpret.",
      "es": "Los videntes siempre notan que estás marcado por el destino."
    }
  },
  {
    "id": "mystical_item",
    "name": {
      "en": "Mystical Item",
      "es": "Objeto Místico"
    },
    "category": "Unusual Gifts",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "A single mystical item you already possess, defined with the GM. Cost / scales with power: a minor charm (5 pts), a useful tool (10 pts), or a / significant piece of equipment (15 pts). The item should match one of the / 22 pathways' domains. If lost or destroyed, rename this advantage to / 'Mystical Item (Lost)' — no refund.",
      "es": "Posees un objeto místico menor o herramienta mágica de bajo nivel."
    }
  },
  {
    "id": "charmed_object",
    "name": {
      "en": "Charmed Object",
      "es": "Objeto Encantado"
    },
    "category": "Unusual Gifts",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "One item you own provides +1 to one specific skill when used (specify / item and skill). Lost permanently if the item is destroyed.",
      "es": "Un objeto que te otorga +1 a una habilidad específica."
    }
  },
  {
    "id": "dead_language_fluency",
    "name": {
      "en": "Dead Language Fluency",
      "es": "Fluidez en Lengua Muerta"
    },
    "category": "Unusual Gifts",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "Read and speak one dead language (Ancient Hermes, Ancient Loen, etc.) / without having formally learned it. Origin unexplained.",
      "es": "Hablas y lees una lengua antigua (Hermes, Jotun, etc) innatamente."
    }
  },
  {
    "id": "familiar_presence",
    "name": {
      "en": "Familiar Presence",
      "es": "Presencia Familiar"
    },
    "category": "Unusual Gifts",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "Animals and spirits are unusually calm near you. Domestic animals never / startle; non-hostile spirits observe rather than act against you.",
      "es": "Animales y espíritus son dóciles cerca de ti."
    }
  },
  {
    "id": "sequence_knowledge",
    "name": {
      "en": "Sequence Knowledge",
      "es": "Conocimiento de Secuencia"
    },
    "category": "Unusual Gifts",
    "cost": 15,
    "hasLevels": false,
    "description": {
      "en": "You know the formula for your next Sequence 8 potion — main / ingredients, supplementary ingredients, and basic preparation method. / This knowledge arrives instinctively once you reach Sequence 9. It does / not grant the ingredients, a pre-prepared potion, or an Acting Method. / Covers only the immediate next sequence.",
      "es": "Conoces la fórmula de tu próxima secuencia instintivamente."
    }
  },
  {
    "id": "knows_the_acting_method",
    "name": {
      "en": "Knows the Acting Method",
      "es": "Conoce el Método de Actuación"
    },
    "category": "Unusual Gifts",
    "cost": 15,
    "hasLevels": false,
    "description": {
      "en": "You innately understand the Acting Method for your Pathway. At the end / of each session, roll 3d6 — the result is the percentage of digestion / progress you gain toward your current potion, in addition to your normal / Digestion Gain Per Session.",
      "es": "Comprendes instintivamente cómo actuar tu poción. Bonus a la digestión."
    }
  },
  {
    "id": "marked_by_ritual",
    "name": {
      "en": "Marked by Ritual",
      "es": "Marcado por un Ritual"
    },
    "category": "Unusual Gifts",
    "cost": 10,
    "hasLevels": false,
    "description": {
      "en": "A lasting spiritual imprint (define with GM). Grants +2 to one type of SPI / roll but may attract unusual attention.",
      "es": "Garantiza +2 a un tipo de tirada espiritual, pero atrae atención."
    }
  },
  {
    "id": "spirit_tongue",
    "name": {
      "en": "Spirit Tongue",
      "es": "Lengua de Espíritus"
    },
    "category": "Unusual Gifts",
    "cost": 10,
    "hasLevels": false,
    "description": {
      "en": "Communicate basic intent to ghosts and lingering spirits without the / Language of the Dead ability. Limited to yes/no exchanges.",
      "es": "Te comunicas básicamente con espíritus sin tener Lenguaje de los Muertos."
    }
  },
  {
    "id": "uncanny_survivor",
    "name": {
      "en": "Uncanny Survivor",
      "es": "Superviviente Sobrenatural"
    },
    "category": "Unusual Gifts",
    "cost": 10,
    "hasLevels": false,
    "description": {
      "en": "Once per campaign arc, when you would die on a death roll, succeed / automatically instead. The GM decides the cost.",
      "es": "Una vez por arco de campaña, si fueras a morir, sobrevives milagrosamente. El DJ decide el costo."
    }
  },
  {
    "id": "sanctity",
    "name": {
      "en": "Sanctity",
      "es": "Santidad"
    },
    "category": "Unusual Gifts",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "Your connection to the divine is unusually clear. +2 to Theology and / Religious Ritual; once per session, the GM must answer one factual / question about Church doctrine or history honestly.",
      "es": "Conexión clara con lo divino. +2 a Teología."
    }
  }
];

export const DISADVANTAGES: ExtendedTraitDef[] = [
  {
    "id": "wealth_poor",
    "name": {
      "en": "Wealth: Poor",
      "es": "Riqueza: Pobre"
    },
    "category": "Core Disadvantages",
    "cost": -15,
    "hasLevels": false,
    "description": {
      "en": "Start with 5 soli; boarding house; barely afford basic food. Status−1 — / status-conscious NPCs look down on you (GM discretion).",
      "es": "Empiezas con £1."
    }
  },
  {
    "id": "wealth_dead_broke",
    "name": {
      "en": "Wealth: Dead Broke",
      "es": "Riqueza: En la Ruina"
    },
    "category": "Core Disadvantages",
    "cost": -25,
    "hasLevels": false,
    "description": {
      "en": "Start with £0; no home; beg or steal for every meal. Status−2 — most / NPCs treat you with suspicion or disdain (GM discretion).",
      "es": "Empiezas sin dinero."
    }
  },
  {
    "id": "wealth_struggling",
    "name": {
      "en": "Wealth: Struggling",
      "es": "Riqueza: Apurado"
    },
    "category": "Core Disadvantages",
    "cost": -10,
    "hasLevels": false,
    "description": {
      "en": "Start with 15 soli; modest room; occasional luxuries",
      "es": "Ganas lo justo para sobrevivir. Empiezas con £2."
    }
  },
  {
    "id": "curious_12",
    "name": {
      "en": "Curious (12)",
      "es": "Curioso (12 o menos)"
    },
    "category": "Core Disadvantages",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "Must roll vs. 12 or investigate any mystery encountered",
      "es": "Debes tirar Autocontrol para no investigar algo inusual."
    }
  },
  {
    "id": "greed_12",
    "name": {
      "en": "Greed (12)",
      "es": "Codicia (12 o menos)"
    },
    "category": "Core Disadvantages",
    "cost": -15,
    "hasLevels": false,
    "description": {
      "en": "Must roll vs. 12 or take any opportunity for significant profit",
      "es": "Deseo fuerte de dinero; tirada para rechazar ofertas lucrativas."
    }
  },
  {
    "id": "overconfidence_12",
    "name": {
      "en": "Overconfidence (12)",
      "es": "Exceso de Confianza (12 o menos)"
    },
    "category": "Core Disadvantages",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "Believes they can handle situations they cannot",
      "es": "Te crees invencible; actúas temerariamente."
    }
  },
  {
    "id": "bad_temper_12",
    "name": {
      "en": "Bad Temper (12)",
      "es": "Mal Genio (12 o menos)"
    },
    "category": "Core Disadvantages",
    "cost": -10,
    "hasLevels": false,
    "description": {
      "en": "Must roll vs. 12 to avoid angry outbursts when provoked",
      "es": "Pierdes los estribos fácilmente ante provocaciones."
    }
  },
  {
    "id": "bully_12",
    "name": {
      "en": "Bully (12)",
      "es": "Abusón (12 o menos)"
    },
    "category": "Core Disadvantages",
    "cost": -10,
    "hasLevels": false,
    "description": {
      "en": "Must roll vs. 12 to resist intimidating or humiliating someone weaker / when the opportunity arises",
      "es": "Disfrutas acosando o controlando a otros."
    }
  },
  {
    "id": "obsession_12",
    "name": {
      "en": "Obsession (12)",
      "es": "Obsesión (12 o menos)"
    },
    "category": "Core Disadvantages",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "Consuming long-term goal dominates life and decisions",
      "es": "Impulso incontrolable hacia una meta o tema."
    }
  },
  {
    "id": "nightmares_12",
    "name": {
      "en": "Nightmares (12)",
      "es": "Pesadillas (12 o menos)"
    },
    "category": "Core Disadvantages",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "Disturbed sleep; wake unrefreshed — lose 1 FP each morning",
      "es": "Pierdes fatiga y sufres estrés al dormir por pesadillas recurrentes."
    }
  },
  {
    "id": "code_of_honor",
    "name": {
      "en": "Code of Honor",
      "es": "Código de Honor"
    },
    "category": "Core Disadvantages",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "Personal code limits actions; must be followed even at cost",
      "es": "Sigues reglas estrictas (caballerosidad, código pirata, etc)."
    }
  },
  {
    "id": "sense_of_duty",
    "name": {
      "en": "Sense of Duty",
      "es": "Sentido del Deber"
    },
    "category": "Core Disadvantages",
    "cost": -2,
    "hasLevels": false,
    "description": {
      "en": "Must help/protect certain groups even at personal risk",
      "es": "Obligación de proteger a un grupo específico (ej. amigos, nación)."
    }
  },
  {
    "id": "social_stigma",
    "name": {
      "en": "Social Stigma",
      "es": "Estigma Social"
    },
    "category": "Core Disadvantages",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "Society discriminates: Criminal Record -5, Servant Class -5",
      "es": "Perteneces a una minoría o grupo despreciado. Penalizador social."
    }
  },
  {
    "id": "secret",
    "name": {
      "en": "Secret",
      "es": "Secreto"
    },
    "category": "Core Disadvantages",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "Dangerous hidden truth; exposure has severe consequences",
      "es": "Ocultas algo que arruinaría tu vida o reputación si se descubre."
    }
  },
  {
    "id": "blacklisted",
    "name": {
      "en": "Blacklisted",
      "es": "En la Lista Negra"
    },
    "category": "Social & Background",
    "cost": -10,
    "hasLevels": false,
    "description": {
      "en": "A specific industry, org, or church has your name. Employment or access / there fails automatically without disguise.",
      "es": "Vetado de empleo, gremios o servicios importantes."
    }
  },
  {
    "id": "blood_feud",
    "name": {
      "en": "Blood Feud",
      "es": "Disputa de Sangre"
    },
    "category": "Social & Background",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "A family, gang, or faction holds a grievance. Their agents appear as / recurring threats (scale reflects their power).",
      "es": "Una familia u organización rival busca matarte o arruinarte activamente."
    }
  },
  {
    "id": "creditors_target",
    "name": {
      "en": "Creditor's Target",
      "es": "Objetivo de Acreedores"
    },
    "category": "Social & Background",
    "cost": -10,
    "hasLevels": false,
    "description": {
      "en": "You owe a dangerous debt. Periodic pressure, threats, or interference; / cannot ignore it without severe consequences.",
      "es": "Debes dinero a gente peligrosa que te busca."
    }
  },
  {
    "id": "drafted",
    "name": {
      "en": "Drafted",
      "es": "Reclutado"
    },
    "category": "Social & Background",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "Technically in a military reserve or conscript pool. Mobilisation orders / can arrive at any time, legally compelling service.",
      "es": "Estás atado a un servicio obligatorio."
    }
  },
  {
    "id": "ex_convict",
    "name": {
      "en": "Ex-Convict",
      "es": "Ex-Convicto"
    },
    "category": "Social & Background",
    "cost": -10,
    "hasLevels": false,
    "description": {
      "en": "Social Stigma in formal settings; increased police scrutiny; certain / employment and legal protections unavailable.",
      "es": "Antecedentes penales conocidos. La policía desconfía de ti."
    }
  },
  {
    "id": "famous_face",
    "name": {
      "en": "Famous Face",
      "es": "Cara Famosa"
    },
    "category": "Social & Background",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "Recognizable in the city. Disguise attempts at -2; surveillance harder; / strangers approach you, sometimes dangerously.",
      "es": "Te reconocen a donde vayas. Imposible ser discreto."
    }
  },
  {
    "id": "fugitive_minor",
    "name": {
      "en": "Fugitive (Minor)",
      "es": "Fugitivo (Menor)"
    },
    "category": "Social & Background",
    "cost": -10,
    "hasLevels": false,
    "description": {
      "en": "Open local warrant on a non-capital charge. Cannot approach police, visit / courts, or enter government buildings without risk.",
      "es": "Buscado por delitos menores."
    }
  },
  {
    "id": "fugitive_serious",
    "name": {
      "en": "Fugitive (Serious)",
      "es": "Fugitivo (Grave)"
    },
    "category": "Social & Background",
    "cost": -20,
    "hasLevels": false,
    "description": {
      "en": "Serious criminal charges outstanding. Significant arrest risk on sight in / major cities; cannot use real name officially.",
      "es": "Buscado por delitos capitales. La policía activa te persigue."
    }
  },
  {
    "id": "illegitimate_birth",
    "name": {
      "en": "Illegitimate Birth",
      "es": "Nacimiento Ilegítimo"
    },
    "category": "Social & Background",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "-1 to social rolls in formal/upper-class settings where this is known; / inheritance and legal rights are complicated.",
      "es": "Bastardo. Despreciado por la nobleza y clases altas."
    }
  },
  {
    "id": "orphan_with_dependents",
    "name": {
      "en": "Orphan with Dependents",
      "es": "Huérfano con Dependientes"
    },
    "category": "Social & Background",
    "cost": -10,
    "hasLevels": false,
    "description": {
      "en": "Support younger siblings or a sick relative. Regular financial drain; their / safety is a lever enemies can use.",
      "es": "Debes cuidar a hermanos u otros que dependen de ti económicamente."
    }
  },
  {
    "id": "refugee_status",
    "name": {
      "en": "Refugee Status",
      "es": "Refugiado"
    },
    "category": "Social & Background",
    "cost": -10,
    "hasLevels": false,
    "description": {
      "en": "No legal right of permanent residence. No papers, no safety net; / deportation is a real threat; police encounters are dangerous.",
      "es": "Huyendo de tu nación sin dinero ni derechos legales claros."
    }
  },
  {
    "id": "wanted_by_church",
    "name": {
      "en": "Wanted by Church",
      "es": "Buscado por la Iglesia"
    },
    "category": "Social & Background",
    "cost": -15,
    "hasLevels": false,
    "description": {
      "en": "An Orthodox Church has marked you. Not just the police — Nighthawks / or equivalent Beyonder enforcers may be looking.",
      "es": "Hereje o usuario mágico ilegal buscado por Inquisidores."
    }
  },
  {
    "id": "duty_specify",
    "name": {
      "en": "Duty (specify)",
      "es": "Deber (Específico)"
    },
    "category": "Social & Background",
    "cost": -2,
    "hasLevels": false,
    "description": {
      "en": "Regular, enforced obligation to an organization or individual. Value / reflects frequency and danger: -5 for light duty (roll 6 or less), -10 for / hazardous duty (roll 9 or less), -15 for extremely hazardous (roll 12 or / less; appears weekly). Specify organization and nature at creation.",
      "es": "Obligación de servir a un empleador, ejército o culto (frecuencia variable)."
    }
  },
  {
    "id": "absent_mindedness",
    "name": {
      "en": "Absent-Mindedness",
      "es": "Distraído"
    },
    "category": "Personal & Psychological",
    "cost": -15,
    "hasLevels": false,
    "description": {
      "en": "-3 to skill rolls requiring concentration or organisation in everyday life; / must roll vs. IQ to remember to do something if interrupted or distracted. / In combat, may forget to reload, change tactics, or use special abilities / (GM's discretion).",
      "es": "-5 a notar cosas obvias si estás concentrado en otra cosa."
    }
  },
  {
    "id": "addiction_laudanum",
    "name": {
      "en": "Addiction: Laudanum",
      "es": "Adicción (Láudano)"
    },
    "category": "Personal & Psychological",
    "cost": -10,
    "hasLevels": false,
    "description": {
      "en": "Must use daily or suffer -2 to all rolls from withdrawal; supply costs drain / income.",
      "es": "Dependencia severa. Sufres abstinencia sin tu dosis diaria."
    }
  },
  {
    "id": "addiction_tobacco",
    "name": {
      "en": "Addiction: Tobacco",
      "es": "Adicción (Tabaco)"
    },
    "category": "Personal & Psychological",
    "cost": -3,
    "hasLevels": false,
    "description": {
      "en": "Minor withdrawal irritability (-1 to Will) if unable to smoke for a full day.",
      "es": "Dependencia menor. Penalizador leve sin ello."
    }
  },
  {
    "id": "chronic_insomnia",
    "name": {
      "en": "Chronic Insomnia",
      "es": "Insomnio Crónico"
    },
    "category": "Personal & Psychological",
    "cost": -10,
    "hasLevels": false,
    "description": {
      "en": "Lose 1 FP each morning that cannot be recovered through rest; rolls / requiring sustained concentration at -1.",
      "es": "Problemas para dormir. Frecuentemente comienzas con menos Fatiga."
    }
  },
  {
    "id": "class_resentment",
    "name": {
      "en": "Class Resentment",
      "es": "Resentimiento de Clase"
    },
    "category": "Personal & Psychological",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "Must roll vs. Will-2 or express hostility when in prolonged contact with / the resented class.",
      "es": "Odio hacia los nobles o burgueses. Reacciones negativas de su parte."
    }
  },
  {
    "id": "compulsive_gambling",
    "name": {
      "en": "Compulsive Gambling",
      "es": "Jugador Compulsivo"
    },
    "category": "Personal & Psychological",
    "cost": -10,
    "hasLevels": false,
    "description": {
      "en": "Regular income loss; prone to debt; requires Will roll at -2 to leave a game / while ahead.",
      "es": "Tirada para evitar apostar cuando se presenta la oportunidad."
    }
  },
  {
    "id": "duty_bound",
    "name": {
      "en": "Duty-Bound",
      "es": "Ligado al Deber"
    },
    "category": "Personal & Psychological",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "An obligation takes priority over personal safety. Must regularly sacrifice / time, money, or risk to fulfil it.",
      "es": "Cumplirás órdenes hasta el final."
    }
  },
  {
    "id": "glass_jaw",
    "name": {
      "en": "Glass Jaw",
      "es": "Mandíbula de Cristal"
    },
    "category": "Personal & Psychological",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "All knockdown rolls from head strikes at -2; concussion effects last / longer.",
      "es": "-3 para evitar quedar aturdido o KO por golpes."
    }
  },
  {
    "id": "glory_hound",
    "name": {
      "en": "Glory Hound",
      "es": "Buscador de Gloria"
    },
    "category": "Personal & Psychological",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "Must roll vs. Will or ensure your role in any success is publicly known, / even when discretion would be wiser.",
      "es": "Tomas riesgos enormes para ser el centro de atención."
    }
  },
  {
    "id": "grief_stricken",
    "name": {
      "en": "Grief-Stricken",
      "es": "Luto Severo"
    },
    "category": "Personal & Psychological",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "In situations that echo a specific loss, Will rolls to act clearly are at -2. Can / be gradually resolved through play.",
      "es": "Melancolía que afecta tus tiradas de voluntad."
    }
  },
  {
    "id": "guilt",
    "name": {
      "en": "Guilt",
      "es": "Culpa"
    },
    "category": "Personal & Psychological",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "-1 to Will in situations that echo the original act; may be exploited by / people who know the truth.",
      "es": "Cargas con una tragedia de la que te crees responsable."
    }
  },
  {
    "id": "impulsive",
    "name": {
      "en": "Impulsive",
      "es": "Impulsivo"
    },
    "category": "Personal & Psychological",
    "cost": -10,
    "hasLevels": false,
    "description": {
      "en": "Must roll vs. IQ-2 to pause and plan; failure means you act on the first / reasonable impulse in any urgent situation.",
      "es": "Actúas sin pensar. Tirada de autocontrol para planear antes de actuar."
    }
  },
  {
    "id": "reckless",
    "name": {
      "en": "Reckless",
      "es": "Imprudente"
    },
    "category": "Personal & Psychological",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "-1 to any roll where caution would be smarter; must roll vs. Will to back / down from a physical challenge.",
      "es": "Tomas decisiones peligrosas de forma rutinaria."
    }
  },
  {
    "id": "reputation_troublemaker",
    "name": {
      "en": "Reputation: Troublemaker",
      "es": "Reputación: Problemático"
    },
    "category": "Personal & Psychological",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "Employers, landlords, and officials treat you with pre-emptive suspicion / (GM discretion).",
      "es": "La gente asume que causarás desastres."
    }
  },
  {
    "id": "social_anxiety",
    "name": {
      "en": "Social Anxiety",
      "es": "Ansiedad Social"
    },
    "category": "Personal & Psychological",
    "cost": -10,
    "hasLevels": false,
    "description": {
      "en": "-2 to social skill rolls in groups of 6+; -3 when addressing strangers of / higher status.",
      "es": "Penalizadores en entornos con mucha gente."
    }
  },
  {
    "id": "stubborn",
    "name": {
      "en": "Stubborn",
      "es": "Terco"
    },
    "category": "Personal & Psychological",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "Must roll vs. Will-3 to reverse your stated position in the same scene, even / when clearly wrong.",
      "es": "Rara vez admites un error o cambias de opinión."
    }
  },
  {
    "id": "superstitious_mundane",
    "name": {
      "en": "Superstitious (mundane)",
      "es": "Supersticioso (Mundano)"
    },
    "category": "Personal & Psychological",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "If warding routine is disrupted, -1 to all rolls for the day; will go out of / their way to observe superstitions.",
      "es": "Crees en la mala suerte, gatos negros y portentos."
    }
  },
  {
    "id": "reluctant_killer",
    "name": {
      "en": "Reluctant Killer",
      "es": "Asesino Renuente"
    },
    "category": "Personal & Psychological",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "-4 to hit recognizable people with deadly force (-2 if face hidden); cannot / Aim. If you kill a recognizable person, become morose for 3d days — / Will rolls required to use violence again.",
      "es": "Penalizadores fuertes para atacar o rematar a humanos conscientes."
    }
  },
  {
    "id": "cannot_harm_innocents",
    "name": {
      "en": "Cannot Harm Innocents",
      "es": "No dañar inocentes"
    },
    "category": "Personal & Psychological",
    "cost": -10,
    "hasLevels": false,
    "description": {
      "en": "Will not use deadly force when innocent bystanders might be affected, or / against enemies not using deadly force on you. Non-deadly force is / acceptable.",
      "es": "Incapaz moralmente de lastimar a no-combatientes."
    }
  },
  {
    "id": "cannot_kill",
    "name": {
      "en": "Cannot Kill",
      "es": "No Matar"
    },
    "category": "Personal & Psychological",
    "cost": -15,
    "hasLevels": false,
    "description": {
      "en": "Unwilling to kill anyone, even through omission, or to allow comrades to / kill. If responsible for a death, react as Reluctant Killer (-5).",
      "es": "Nunca tomas una vida, pase lo que pase."
    }
  },
  {
    "id": "self_defence_only",
    "name": {
      "en": "Self-Defence Only",
      "es": "Solo Defensa Propia"
    },
    "category": "Personal & Psychological",
    "cost": -15,
    "hasLevels": false,
    "description": {
      "en": "Use violence only to protect yourself or those in your care, to the / minimum degree necessary; no pre-emptive strikes.",
      "es": "Nunca inicias un combate letal."
    }
  },
  {
    "id": "total_non_violence",
    "name": {
      "en": "Total Non-Violence",
      "es": "Pacifismo Total"
    },
    "category": "Personal & Psychological",
    "cost": -30,
    "hasLevels": false,
    "description": {
      "en": "Will not use violence against intelligent creatures, even in self-defense. / May defend against animals.",
      "es": "No participarás en combates ni empuñarás armas."
    }
  },
  {
    "id": "workaholic",
    "name": {
      "en": "Workaholic",
      "es": "Adicto al Trabajo"
    },
    "category": "Personal & Psychological",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "Cannot relax; always finds something productive to do. -2 to social rolls in / leisure settings; rolls to take a day off at Will-3.",
      "es": "Incomodidad o estrés si no estás trabajando en tus tareas."
    }
  },
  {
    "id": "callous",
    "name": {
      "en": "Callous",
      "es": "Insensible"
    },
    "category": "Personal & Psychological",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "-3 to social skill rolls when warmth or empathy is required. You may still / act kindly — but it is an effort and it shows.",
      "es": "No sientes empatía por el dolor ajeno. -3 a habilidades sociales suaves."
    }
  },
  {
    "id": "kleptomania",
    "name": {
      "en": "Kleptomania",
      "es": "Cleptomanía"
    },
    "category": "Personal & Psychological",
    "cost": -10,
    "hasLevels": false,
    "description": {
      "en": "Compelled to steal small objects when the opportunity arises and no / consequences are obvious. Roll vs. Will to resist when the situation makes / theft easy.",
      "es": "Deseo incontrolable de robar objetos sin importar su valor."
    }
  },
  {
    "id": "skinny",
    "name": {
      "en": "Skinny",
      "es": "Escuálido"
    },
    "category": "Personal & Psychological",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "-2 to ST for purposes of knockback and grappling; +2 to rolls to escape / bonds or fit into tight spaces. Clothing is hard to find off the rack.",
      "es": "-2 a resistir empujones y derribos; menor peso."
    }
  },
  {
    "id": "shyness",
    "name": {
      "en": "Shyness",
      "es": "Timidez"
    },
    "category": "Personal & Psychological",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "-1 to -2 to social skill rolls depending on severity and audience. Mild (-5): / -1 in groups of 6+; Severe (-10): -2 in groups of 3+.",
      "es": "Penalizador para hablar con extraños."
    }
  },
  {
    "id": "laziness",
    "name": {
      "en": "Laziness",
      "es": "Pereza"
    },
    "category": "Personal & Psychological",
    "cost": -10,
    "hasLevels": false,
    "description": {
      "en": "Must roll vs. Will to undertake any sustained effort not immediately / necessary or personally interesting. Unemployment is a real risk.",
      "es": "Evitas el trabajo físico duro siempre que es posible."
    }
  },
  {
    "id": "clueless",
    "name": {
      "en": "Clueless",
      "es": "Ignorante Social"
    },
    "category": "Personal & Psychological",
    "cost": -10,
    "hasLevels": false,
    "description": {
      "en": "-3 to all social skill rolls; generally miss social cues and subtlety. You do / not understand subtext, sarcasm, or implication.",
      "es": "-4 a captar indirectas, lenguaje corporal y reglas sociales."
    }
  },
  {
    "id": "unfit",
    "name": {
      "en": "Unfit",
      "es": "Fuera de Forma"
    },
    "category": "Personal & Psychological",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "-1 to all HT rolls; recover FP at half normal rate. Unfit for sustained / physical exertion.",
      "es": "-1 a tiradas de Salud; la Fatiga se pierde el doble de rápido."
    }
  },
  {
    "id": "vow_specify",
    "name": {
      "en": "Vow (specify)",
      "es": "Voto (Específico)"
    },
    "category": "Personal & Psychological",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "A solemn promise that restricts your actions. Common examples: Poverty / (give away all wealth beyond subsistence) -10, Partial Silence (limited / speech) -5, Vegetarian -5.",
      "es": "Promesa inquebrantable (ej. 'Nunca mentir')."
    }
  },
  {
    "id": "charity_12",
    "name": {
      "en": "Charity (12)",
      "es": "Caridad (12 o menos)"
    },
    "category": "Personal & Psychological",
    "cost": -15,
    "hasLevels": false,
    "description": {
      "en": "Cannot ignore genuine need. Must roll vs. 12 or help anyone who asks for / assistance you can reasonably provide. May be exploited.",
      "es": "Siempre das dinero a los necesitados si puedes."
    }
  },
  {
    "id": "loner",
    "name": {
      "en": "Loner",
      "es": "Solitario"
    },
    "category": "Personal & Psychological",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "Must roll vs. Will to spend extended time in groups larger than 3-4 people. / Seek solitude when stressed; -1 to social rolls in crowds.",
      "es": "Prefieres operar solo; sufres estrés en multitudes o equipos grandes."
    }
  },
  {
    "id": "bloodlust",
    "name": {
      "en": "Bloodlust",
      "es": "Sed de Sangre"
    },
    "category": "Personal & Psychological",
    "cost": -10,
    "hasLevels": false,
    "description": {
      "en": "Must go for killing blows in combat. IQ roll necessary to accept a / surrender or take a prisoner. Downed foes get an extra shot to make sure.",
      "es": "Buscas rematar a enemigos heridos siempre. Tirada para contenerse."
    }
  },
  {
    "id": "weirdness_magnet",
    "name": {
      "en": "Weirdness Magnet",
      "es": "Imán de Rarezas"
    },
    "category": "Core Supernatural Disadvantages",
    "cost": -15,
    "hasLevels": false,
    "description": {
      "en": "Strange supernatural events are drawn to you constantly",
      "es": "Lo sobrenatural y lo bizarro ocurren a tu alrededor constantemente."
    }
  },
  {
    "id": "paranoia_12",
    "name": {
      "en": "Paranoia (12)",
      "es": "Paranoia (12 o menos)"
    },
    "category": "Core Supernatural Disadvantages",
    "cost": -10,
    "hasLevels": false,
    "description": {
      "en": "Must roll vs. 12 or assume strangers are threats; common potion side / effect",
      "es": "Confías en nadie. Asumes que todos tienen motivos ocultos."
    }
  },
  {
    "id": "hallucinations_12",
    "name": {
      "en": "Hallucinations (12)",
      "es": "Alucinaciones (12 o menos)"
    },
    "category": "Core Supernatural Disadvantages",
    "cost": -10,
    "hasLevels": false,
    "description": {
      "en": "Periodic false sensory experiences; visions, voices, phantom presences",
      "es": "Ves y escuchas cosas que no están ahí bajo estrés."
    }
  },
  {
    "id": "compulsion_pathway",
    "name": {
      "en": "Compulsion (pathway)",
      "es": "Compulsión de Senda"
    },
    "category": "Core Supernatural Disadvantages",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "Uncontrollable urge tied to pathway nature; triggered by stress",
      "es": "Una necesidad patológica dictada por tu senda mística."
    }
  },
  {
    "id": "delusion_minor",
    "name": {
      "en": "Delusion (minor)",
      "es": "Engaño (Menor)"
    },
    "category": "Core Supernatural Disadvantages",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "Firmly believes something false about the supernatural world",
      "es": "Creencia falsa firme y demostrable que afecta cómo actúas."
    }
  },
  {
    "id": "coldblooded",
    "name": {
      "en": "Coldblooded",
      "es": "Sangre Fría"
    },
    "category": "Core Supernatural Disadvantages",
    "cost": -10,
    "hasLevels": false,
    "description": {
      "en": "Morality erodes upon advancement. Roll Will when suppressing evil / desires (murder, lust, theft, etc.). Define with the GM which desires apply / to your character.",
      "es": "Careces de reacciones emocionales y moralidad convencional."
    }
  },
  {
    "id": "compulsive_behavior_indulge_evil_desires_sc_6",
    "name": {
      "en": "Compulsive Behavior / (Indulge Evil Desires) SC 6",
      "es": "Comportamiento Compulsivo (Malos Deseos)"
    },
    "category": "Core Supernatural Disadvantages",
    "cost": -15,
    "hasLevels": false,
    "description": {
      "en": "When an opportunity to commit an evil act (murder, torture, betrayal, etc.) / presents itself, roll 3d6≤6 or indulge fully. Conscience offers no / resistance.",
      "es": "Cedes ante tus peores impulsos."
    }
  },
  {
    "id": "bound_to_a_place",
    "name": {
      "en": "Bound to a Place",
      "es": "Atado a un Lugar"
    },
    "category": "Compulsions & Obsessions",
    "cost": -10,
    "hasLevels": false,
    "description": {
      "en": "Spiritually tethered to a location (specify). Leaving for more than one / week causes growing unease: -1 to Will per additional week, cumulative.",
      "es": "Tu poder o cordura falla si te alejas de tu lugar de poder."
    }
  },
  {
    "id": "compulsion_collection_pathway",
    "name": {
      "en": "Compulsion: Collection / (pathway)",
      "es": "Compulsión de Recolección"
    },
    "category": "Compulsions & Obsessions",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "Compelled to collect specific items (bones, keys, mirrors, etc.). Roll vs. / Will-2 when presented with a collectible you do not own.",
      "es": "Sientes la necesidad incontrolable de acumular ciertos objetos de poder."
    }
  },
  {
    "id": "compulsion_confess",
    "name": {
      "en": "Compulsion: Confess",
      "es": "Compulsión por Confesarse"
    },
    "category": "Compulsions & Obsessions",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "Under significant stress, must tell someone a true secret. Roll vs. Will-2 or / confess something genuine to the nearest trusted person.",
      "es": "Necesidad de contar tus pecados a alguien."
    }
  },
  {
    "id": "compulsion_preserve_the_dead",
    "name": {
      "en": "Compulsion: Preserve the / Dead",
      "es": "Compulsión de Preservar Muertos"
    },
    "category": "Compulsions & Obsessions",
    "cost": -10,
    "hasLevels": false,
    "description": {
      "en": "Cannot pass a neglected corpse without properly covering or / acknowledging it. Roll vs. Will-3 to continue without addressing them / first.",
      "es": "Incapacidad para dañar cadáveres; deseo de embalsamarlos."
    }
  },
  {
    "id": "drawn_to_ritual_sites",
    "name": {
      "en": "Drawn to Ritual Sites",
      "es": "Atraído a Sitios Rituales"
    },
    "category": "Compulsions & Obsessions",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "Pulled toward places where rituals have been performed. When within / blocks of a ritual site, compelled to investigate even without obvious / reason.",
      "es": "Sientes la necesidad de visitar lugares de poder oscuro."
    }
  },
  {
    "id": "evil_eye_fear",
    "name": {
      "en": "Evil Eye Fear",
      "es": "Miedo al Mal de Ojo"
    },
    "category": "Compulsions & Obsessions",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "Avoid eye contact with strangers; periodically perform warding rituals. If / interrupted from a warding routine, -1 to Will rolls for the day.",
      "es": "Paranoia extrema de maldiciones menores y mala suerte."
    }
  },
  {
    "id": "honest_to_spirits",
    "name": {
      "en": "Honest to Spirits",
      "es": "Honesto con Espíritus"
    },
    "category": "Compulsions & Obsessions",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "Cannot deliberately lie in the presence of ghosts or entities you know to be / spiritually present. Instinctive, not a rational choice.",
      "es": "Incapaz de mentirle a entidades fantasmales."
    }
  },
  {
    "id": "pathway_pull",
    "name": {
      "en": "Pathway Pull",
      "es": "Tirón de la Senda"
    },
    "category": "Compulsions & Obsessions",
    "cost": -10,
    "hasLevels": false,
    "description": {
      "en": "A specific Pathway exerts a narrative pull before you drink a potion.",
      "es": "Sufres estrés si no actúas de acuerdo a tu método de actuación prolongadamente."
    }
  },
  {
    "id": "chronophobia_temporal",
    "name": {
      "en": "Chronophobia (Temporal)",
      "es": "Cronofobia (Temporal)"
    },
    "category": "Mental & Perceptual",
    "cost": -10,
    "hasLevels": false,
    "description": {
      "en": "Irrational terror of something time-related (clocks stopping, mirrors, / specific hours). Triggered: immediate Fright Check at -3.",
      "es": "Miedo extremo a la pérdida o paso de tiempo; pánico si estás atrapado."
    }
  },
  {
    "id": "dead_eyed",
    "name": {
      "en": "Dead-Eyed",
      "es": "Ojos Muertos"
    },
    "category": "Mental & Perceptual",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "-2 to first-impression social rolls with strangers; animals are skittish / around you; children sometimes cry.",
      "es": "Tu mirada es naturalmente inquietante; -1 a interacciones pacíficas."
    }
  },
  {
    "id": "unsettling_appearance",
    "name": {
      "en": "Unsettling Appearance",
      "es": "Apariencia Inquietante"
    },
    "category": "Mental & Perceptual",
    "cost": -4,
    "hasLevels": false,
    "description": {
      "en": "Your presence instinctively disturbs or repels others — a common / consequence of Abyss and Chained Pathway potions. NPCs react with / unease or distrust (GM discretion).",
      "es": "Incluso disfrazado, irradias un aura que incomoda a otros."
    }
  },
  {
    "id": "entity_fixation",
    "name": {
      "en": "Entity Fixation",
      "es": "Fijación por Entidad"
    },
    "category": "Mental & Perceptual",
    "cost": -10,
    "hasLevels": false,
    "description": {
      "en": "-1 to all rolls when a specific entity type is present nearby; -2 to any roll / that requires you to ignore them.",
      "es": "Estás marcado mentalmente por un Dios Exterior."
    }
  },
  {
    "id": "fear_of_silence",
    "name": {
      "en": "Fear of Silence",
      "es": "Miedo al Silencio"
    },
    "category": "Mental & Perceptual",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "In complete silence — underground, at sea, in empty buildings — must / roll vs. Will-2 or feel compelled to speak or make noise.",
      "es": "Pánico en entornos sin ruido; escuchas los desvaríos del cosmos."
    }
  },
  {
    "id": "haunted",
    "name": {
      "en": "Haunted",
      "es": "Embrujado"
    },
    "category": "Mental & Perceptual",
    "cost": -10,
    "hasLevels": false,
    "description": {
      "en": "A specific ghost follows you. Other spiritual beings notice it; it may / interfere with rituals; can be used as leverage by those who know.",
      "es": "Espíritus inofensivos pero molestos te siguen a todas partes."
    }
  },
  {
    "id": "memory_bleed",
    "name": {
      "en": "Memory Bleed",
      "es": "Sangrado de Memoria"
    },
    "category": "Mental & Perceptual",
    "cost": -10,
    "hasLevels": false,
    "description": {
      "en": "Someone else's genuine memories intrude periodically — an unrelated / person from your past, or someone whose spiritual body overlapped yours.",
      "es": "Tus propios recuerdos se mezclan con los de fantasmas u otros seres."
    }
  },
  {
    "id": "perceptual_splitting",
    "name": {
      "en": "Perceptual Splitting",
      "es": "División Perceptual"
    },
    "category": "Mental & Perceptual",
    "cost": -10,
    "hasLevels": false,
    "description": {
      "en": "At moments of high spiritual activity, senses temporarily separate from / your body. All physical rolls at -2 during an episode (1d seconds).",
      "es": "Ocasionalmente ves el Mundo Espiritual y el físico empalmados, confundiendo ambos."
    }
  },
  {
    "id": "phobia_sacred_symbols",
    "name": {
      "en": "Phobia: Sacred Symbols",
      "es": "Fobia (Símbolos Sagrados)"
    },
    "category": "Mental & Perceptual",
    "cost": -10,
    "hasLevels": false,
    "description": {
      "en": "A specific church's symbols, prayers, or holy items cause genuine fright. / Fright Check at -2 on direct exposure; -1 in consecrated buildings.",
      "es": "Miedo irracional a símbolos de Iglesias Ortodoxas."
    }
  },
  {
    "id": "spiritually_loud",
    "name": {
      "en": "Spiritually Loud",
      "es": "Espiritualmente Ruidoso"
    },
    "category": "Mental & Perceptual",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "Spiritual presence registers as larger than your actual Sequence would / suggest. Perceived as more powerful than you are — a curse as much as a / blessing.",
      "es": "Entidades y Beyonders de alta secuencia te notan más fácil."
    }
  },
  {
    "id": "threshold_blindness",
    "name": {
      "en": "Threshold Blindness",
      "es": "Ceguera de Umbral"
    },
    "category": "Mental & Perceptual",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "One specific entity type or supernatural phenomenon you cannot perceive / with any spiritual skill, regardless of roll results (specify at creation).",
      "es": "Incapaz de percibir entidades inmateriales aunque te hagan daño."
    }
  },
  {
    "id": "phobia_specify",
    "name": {
      "en": "Phobia (specify)",
      "es": "Fobia (Específica)"
    },
    "category": "Mental & Perceptual",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "Irrational fear of a specific thing (cities, spiders, crowds, etc.). Fright / Check at -2 when exposed; -1 to all rolls while the phobic stimulus is / present and unavoidable. Severity depends on how common the trigger is.",
      "es": "Miedo paralizante hacia un objeto o situación."
    }
  }
];
