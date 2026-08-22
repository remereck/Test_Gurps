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
      "es": "El DJ advierte de amenazas justo antes de que golpeen (se niega la sorpresa)."
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
      "es": "+1/nivel a las tiradas de HT para evitar la muerte; se pueden tomar de 1 a 5 niveles."
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
      "es": "+1/nivel para permanecer consciente cuando te reducen a 0 o menos PV."
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
      "es": "Ignora los penalizadores por dolor o conmoción de las heridas; +3 en las tiradas de HT para evitar ser derribado."
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
      "es": "ST extra solo para propósitos de levantar/cargar; no afecta al daño."
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
      "es": "+1/nivel a habilidades de Influencia (Liderazgo, Mendigar, Oratoria, Etiqueta, Seducción, Bajos Fondos); los PNJs están predispuestos a confiar en ti y escucharte [máx 4 niveles]."
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
      "es": "Fuente confiable de información o ayuda (varía por habilidad y frecuencia de aparición)."
    }
  },
  {
    "id": "church_organisation_informant",
    "name": {
      "en": "Church Organisation / Informant",
      "es": "Informante de la Organización / Iglesia"
    },
    "category": "Mental & Social Advantages",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "A representative of a church enforcement body (Nighthawks, Mandated / Punishers, Machinery Hivemind, etc.) has chosen you as an informant. / Receive help from authorities when in minor legal trouble or when caught / using Beyonder powers without harm to innocents. Earn contribution points / for important information or assistance, exchangeable for money or Beyonder / formulas/ingredients. 5 pts: newly recruited, must prove your worth. 10–15 / pts: trusted informant; the organisation's representative trusts your judgement.",
      "es": "Un representante de un cuerpo de aplicación de la ley eclesiástica (Halcones Nocturnos, Castigadores Mandatados, Mente Colmena de Maquinaria, etc.) te ha elegido como informante. Recibe ayuda de las autoridades en problemas legales menores o si te atrapan usando poderes de Beyonder sin dañar a inocentes. Gana puntos de contribución por información importante o asistencia, intercambiables por dinero, fórmulas o ingredientes de Beyonder. 5 pts: recién reclutado, debes probar tu valía. 10–15 pts: informante de confianza; el representante confía en tu criterio."
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
      "es": "Operas bajo la sanción de una iglesia u organización reconocida. Beneficios: Revólver +2, Magia Ritualística +1, Conocimiento Oculto (Beyonders) +3, Ocultismo +2, Idioma Hermes (Roto). Tienes Poderes Legales como investigador sancionado. Desventaja: Deber (hacia tu organización) — puedes ser convocado para misiones y debes seguir el protocolo institucional."
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
      "es": "+5 para recordar cosas tras una sola lectura; recuerdo casi perfecto."
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
      "es": "Siente las emociones; +3 a las tiradas de habilidades sociales."
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
      "es": "Reputación positiva (+1/nivel) a las reacciones dentro de un grupo específico. (El costo varía según lo grande que sea el grupo; normalmente 5 pts por un grupo grande o ciudad entera)."
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
      "es": "+1 a cualquier tarea que requiera pensamiento inventivo o fuera de lo común. Ideal para inventores, tácticos y solucionadores de problemas."
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
      "es": "Aritmética mental perfecta; puedes hacer estimaciones rápidas sin penalización; resolución de acertijos numéricos y cálculos mentales con +2."
    }
  },
  {
    "id": "absolute_direction",
    "name": {
      "en": "Absolute Direction",
      "es": "Sentido de la Orientación Absoluto"
    },
    "category": "Mental & Social Advantages",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "Always know which way is north; never become lost in natural terrain. +3 to / Navigation and Body Sense rolls.",
      "es": "Siempre sabes en qué dirección está el norte; nunca te pierdes en terrenos naturales. +3 a las tiradas de Navegación y Sentido del Cuerpo."
    }
  },
  {
    "id": "language_specify",
    "name": {
      "en": "Language (specify)",
      "es": "Idioma (especificar)"
    },
    "category": "Mental & Social Advantages",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "Individual language proficiency. See the Languages section for cost tables / based on proficiency (Native/Accented/Broken) and type (Common vs / Mystical).",
      "es": "Competencia en idioma individual. Consulta la sección de Idiomas para tablas de costos basados en la fluidez (Nativo/Acentuado/Roto) y tipo (Común vs Místico)."
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
      "es": "+2 a todas las tiradas de Lenguaje Corporal y Detectar Mentiras. Puedes 'leer' una habitación antes de entrar."
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
      "es": "Te mueves de manera creíble a través de dos clases sociales diferentes. +2 a Etiqueta en cualquiera de ellas; los PNJs rara vez cuestionan tu presencia."
    }
  },
  {
    "id": "connections_church_lay_staff",
    "name": {
      "en": "Connections: Church Lay / Staff",
      "es": "Conexiones: Personal Laico de la Iglesia"
    },
    "category": "Social & Reputation",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "Recognized civilian assistant to one Orthodox Church. Access to facilities; / some protection from routine Nighthawk scrutiny.",
      "es": "Eres un asistente civil reconocido para una Iglesia Ortodoxa. Tienes acceso a instalaciones y cierta protección frente al escrutinio rutinario de los Halcones Nocturnos."
    }
  },
  {
    "id": "connections_press_credentials",
    "name": {
      "en": "Connections: Press / Credentials",
      "es": "Conexiones: Credenciales de Prensa"
    },
    "category": "Social & Reputation",
    "cost": 3,
    "hasLevels": false,
    "description": {
      "en": "Recognized press identity. Opens doors otherwise closed; plausible reason / to be anywhere in a city.",
      "es": "Identidad de prensa reconocida. Te abre puertas que de otro modo estarían cerradas; excusa plausible para estar en cualquier parte de la ciudad."
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
      "es": "Conocido en círculos criminales. Los PNJs relevantes comienzan cautelosos; Intimidación en estos círculos obtiene +2."
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
      "es": "Eres muy conocido en un barrio (especificar). Tienes +2 a tiradas sociales allí; la gente cuida de ti."
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
      "es": "Una figura de mayor jerarquía o experiencia te ofrece guía intermitente. Una vez por sesión puedes consultarle para información, usar sus contactos, o pedir una tirada de habilidad en su nivel."
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
      "es": "Intrepidez"
    },
    "category": "Social & Reputation",
    "cost": 2,
    "hasLevels": true,
    "maxLevel": 5,
    "description": {
      "en": "+1 per level to Fright Checks; also grants immunity to intimidation from / beings with fewer levels of Fearlessness than you. Vital in a world of / horrors.",
      "es": "+1 por nivel a las tiradas de Voluntad (Will) o de Control de Miedo, para resistir intimidación, pánico y terrores sobrenaturales."
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
      "es": "Abogado del Inframundo"
    },
    "category": "Professional & Technical",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "Once per session cite an obscure legal technicality convincingly enough to / delay, redirect, or dismiss a legal problem.",
      "es": "Una vez por sesión, puedes citar un tecnicismo legal oscuro de forma suficientemente convincente como para retrasar, redirigir o desestimar un problema legal."
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
      "es": "Nunca sufres penalizaciones sociales por beber moderadamente; tiradas de Juerga (Carousing) para aparentar estar sobrio obtienen +3."
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
      "es": "Sin penalizaciones en climas fríos hasta llegar a temperaturas de congelación; tiradas de hipotermia a +2."
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
      "es": "Puedes contener la respiración durante HT × 3 segundos sin necesidad de tirar; tiradas de HT para resistir toxinas en el aire a +2."
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
      "es": "Recuperas 1 PV adicional por día de descanso. Las heridas que dejarían a otros postrados en cama te permiten seguir funcional en la mitad de tiempo."
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
      "es": "No requieres tiradas de HT ante entornos asquerosos: gore, sangre, cadáveres o condiciones repugnantes."
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
      "es": "Tiradas para resistir ser derribado o noqueado por golpes a la cabeza a +2; nunca te muerdes la lengua bajo el impacto."
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
      "es": "Tiradas de Percepción mientras duermes a +4; nunca te pillan completamente desprevenido por la noche."
    }
  },
  {
    "id": "low_profile_build",
    "name": {
      "en": "Low-Profile Build",
      "es": "Complexión de Perfil Bajo"
    },
    "category": "Physical & Innate",
    "cost": 3,
    "hasLevels": false,
    "description": {
      "en": "Physical appearance is unremarkable. All attempts to identify you from / description are at -2.",
      "es": "Tu apariencia física es anodina y nada destacable. Todos los intentos de identificarte a partir de una descripción sufren -2."
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
      "es": "Reduce todas las penalizaciones por oscuridad en 2; en condiciones de luz tenue (gas o luz de la luna) no sufres ninguna penalización."
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
      "es": "+6 para evitar derribos; +2 a Acrobacias, Escalar, Pilotar."
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
      "es": "+2 para evitar derribos; +1 a Acrobacias, Escalar, Pilotar."
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
      "es": "Las duraciones de aturdimiento se reducen a la mitad; te recuperas de ser derribado en la mitad de tiempo normal."
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
      "es": "+3 a Escalar y Escapismo; ignoras hasta -3 de penalizaciones de combate en espacios cerrados."
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
      "es": "+5 a Escalar y Escapismo; ignoras hasta -5 de penalizaciones de espacios cerrados por lucha o forcejeos; cualquier parte de tu cuerpo puede doblarse en cualquier dirección."
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
      "es": "+2 a las tiradas de Visión; notas detalles a la distancia, lees labios y detectas objetos ocultos."
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
      "es": "Versión mejorada de Visión Aguda (+4 a todas las tiradas de Visión); puedes leer microexpresiones a 10m, ver a través de ilusiones visuales menores y detectar objetos ocultos automáticamente."
    }
  },
  {
    "id": "acute_hearing",
    "name": {
      "en": "Acute Hearing",
      "es": "Audición Aguda"
    },
    "category": "Physical & Innate",
    "cost": 2,
    "hasLevels": false,
    "description": {
      "en": "+2 to Hearing rolls; detect faint sounds, eavesdrop through walls, identify / speech in noise.",
      "es": "+2 a tiradas de Audición; detectas sonidos débiles, escuchas a través de paredes e identificas habla entre ruidos."
    }
  },
  {
    "id": "resistant_specify",
    "name": {
      "en": "Resistant (specify)",
      "es": "Resistente (especificar)"
    },
    "category": "Physical & Innate",
    "cost": 3,
    "hasLevels": false,
    "description": {
      "en": "HT rolls to resist a specific category at +3 (3 pts) or +8 (5 pts). Common / choices: Disease, Poison, Temperature Extremes.",
      "es": "Tiradas de HT para resistir una categoría específica a +3 (3 pts) o +8 (5 pts). Opciones comunes: Enfermedad, Veneno, Temperaturas Extremas."
    }
  },
  {
    "id": "outdoorsman",
    "name": {
      "en": "Outdoorsman",
      "es": "Leñador / Hombre de Exteriores"
    },
    "category": "Physical & Innate",
    "cost": 10,
    "hasLevels": true,
    "maxLevel": 5,
    "description": {
      "en": "+1 per level to all Outdoor skills (Camouflage, Fishing, Naturalist, / Navigation, Survival, Tracking, Weather Sense). Max 4 levels.",
      "es": "+1 por nivel a todas las habilidades de Exteriores (Camuflaje, Pesca, Naturalista, Navegación, Supervivencia, Rastrear, Sentido del Clima). Max 4 niveles."
    }
  },
  {
    "id": "aura_sensitivity",
    "name": {
      "en": "Aura Sensitivity",
      "es": "Sensibilidad de Auras"
    },
    "category": "Perception & Detection",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "Sense the emotional weight of places. In locations where violence, grief, / or supernatural events occurred, receive a vague impression without / rolling.",
      "es": "Sientes el peso emocional de los lugares. En ubicaciones donde ocurrieron violencia, dolor o eventos sobrenaturales, recibes una impresión vaga sin necesidad de tirar."
    }
  },
  {
    "id": "death_sense",
    "name": {
      "en": "Death Sense",
      "es": "Sentido de la Muerte"
    },
    "category": "Perception & Detection",
    "cost": 10,
    "hasLevels": false,
    "description": {
      "en": "Passive awareness of recent death within 30 meters (within 24 hours). / Sense its direction without rolling; can sense whether a person is dying.",
      "es": "Conciencia pasiva de una muerte reciente en un radio de 30 metros (ocurrida en las últimas 24 horas). Sientes su dirección sin tirar; también puedes sentir si una persona se está muriendo."
    }
  },
  {
    "id": "divine_touchstone",
    "name": {
      "en": "Divine Touchstone",
      "es": "Piedra de Toque Divina"
    },
    "category": "Perception & Detection",
    "cost": 10,
    "hasLevels": false,
    "description": {
      "en": "An Orthodox deity has taken minor notice of you. Once per session ask / the GM a yes/no question your character senses as an impression.",
      "es": "Una deidad Ortodoxa te ha prestado menor atención. Una vez por sesión, puedes hacerle al DJ una pregunta de sí/no, que tu personaje percibirá como una impresión intuitiva."
    }
  },
  {
    "id": "dreamsight",
    "name": {
      "en": "Dreamsight",
      "es": "Visión de Sueños"
    },
    "category": "Perception & Detection",
    "cost": 10,
    "hasLevels": false,
    "description": {
      "en": "Dreams contain genuine information. Once per session the GM may offer / a cryptic dream-image related to current events; sharing it grants +1 to one / investigation roll.",
      "es": "Los sueños contienen información genuina. Una vez por sesión, el DJ puede ofrecerte una imagen onírica críptica relacionada con eventos actuales; compartirla otorga +1 a una tirada de investigación."
    }
  },
  {
    "id": "ether_body_awareness",
    "name": {
      "en": "Ether Body Awareness",
      "es": "Conciencia del Cuerpo Etérico"
    },
    "category": "Perception & Detection",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "Know immediately when a supernatural effect is targeting your soul, not / just your body — even without Spirit Vision.",
      "es": "Sabes de inmediato cuando un efecto sobrenatural está apuntando a tu alma y no solo a tu cuerpo, incluso sin Visión Espiritual."
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
      "es": "Una vez por sesión, al tomar una decisión con consecuencias importantes, puedes preguntarle al DJ: '¿Siento que esto está mal?'. El DJ debe responder honestamente."
    }
  },
  {
    "id": "ghost_proximity_sense",
    "name": {
      "en": "Ghost Proximity Sense",
      "es": "Sentido de Proximidad Fantasmal"
    },
    "category": "Perception & Detection",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "Passive. Sense when a spirit is within 10 meters — a cold certainty. No / details; no roll required.",
      "es": "Pasivo. Sientes cuando un espíritu está a 10 metros de ti — una fría certeza. No obtienes detalles ni se requiere tirada."
    }
  },
  {
    "id": "pathway_resonance",
    "name": {
      "en": "Pathway Resonance",
      "es": "Resonancia de la Vía"
    },
    "category": "Perception & Detection",
    "cost": 10,
    "hasLevels": false,
    "description": {
      "en": "Unexplained affinity with one specific Pathway (specify). +3 to rolls to / identify items, individuals, or rituals associated with it.",
      "es": "Afinidad inexplicable con una Vía específica (especificar). +3 a las tiradas para identificar objetos, individuos o rituales asociados con ella."
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
      "es": "Sientes cuándo se está realizando un ritual en un radio de 50 metros. Notas la perturbación espiritual sin tirar, incluso sin saber el tipo de ritual."
    }
  },
  {
    "id": "soul_reading_untrained",
    "name": {
      "en": "Soul Reading (Untrained)",
      "es": "Lectura de Alma (Sin Entrenar)"
    },
    "category": "Perception & Detection",
    "cost": 10,
    "hasLevels": false,
    "description": {
      "en": "Once per scene the GM may offer one true impression about a target's / emotional condition or hidden motive. Cannot be triggered deliberately.",
      "es": "Una vez por escena, el DJ puede ofrecerte una impresión verdadera sobre la condición emocional o un motivo oculto del objetivo. No se puede activar deliberadamente."
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
      "es": "Todos los intentos de alterar tu identidad mental (posesiones, compulsiones, efectos secundarios de vías) se realizan a -2 en tu contra."
    }
  },
  {
    "id": "cleansed_spirit",
    "name": {
      "en": "Cleansed Spirit",
      "es": "Espíritu Purificado"
    },
    "category": "Resistance & Resilience",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "CoR gained from passive exposure are halved. Active corruption from / deliberate acts is unaffected.",
      "es": "La Corrupción (CoR) ganada por exposición pasiva se reduce a la mitad. La corrupción activa por actos deliberados no se ve afectada."
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
      "es": "Inafectado por el leve malestar espiritual que el hierro causa a individuos sensibles. Raro en personas con herencia espiritual significativa."
    }
  },
  {
    "id": "faithful_grounding",
    "name": {
      "en": "Faithful Grounding",
      "es": "Arraigo Fiel"
    },
    "category": "Resistance & Resilience",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "Genuine faith acts as an anchor. Fright Checks in church buildings, / shrines, or during prayer are at +3.",
      "es": "La fe genuina actúa como tu ancla. Los Controles de Miedo dentro de edificios de iglesias, altares o durante la oración obtienen +3."
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
      "es": "+3 a todas las tiradas de Voluntad (Will) para resistir habilidades de Beyonder, susurros de dioses malvados y compulsiones de rituales. No se aplica a la presión social mundana."
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
      "es": "Tu Corrupción (CoR) Máxima es igual a Voluntad + 3 en lugar de solo tu valor base de Voluntad."
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
      "es": "Todo intento sobrenatural de entrar, leer o alterar tus sueños requiere un éxito adicional por un margen de 3 o más para surtir efecto."
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
      "es": "1 repetición de tirada (reroll) por sesión — puedes repetir cualquier tirada fallida."
    }
  },
  {
    "id": "beckoning_luck",
    "name": {
      "en": "Beckoning Luck",
      "es": "Suerte Llamativa"
    },
    "category": "Unusual Gifts",
    "cost": 30,
    "hasLevels": false,
    "description": {
      "en": "2 rerolls per session — reroll any failed roll, usable at any time. If the / re-roll also fails there is no additional effect — and fate may balance later.",
      "es": "2 repeticiones de tirada por sesión — puedes repetir cualquier tirada fallida en cualquier momento. Si la repetición también falla no hay efectos adicionales, y el destino puede equilibrarse más tarde."
    }
  },
  {
    "id": "born_under_a_named_star",
    "name": {
      "en": "Born Under a Named Star",
      "es": "Nacido Bajo una Estrella Nombrada"
    },
    "category": "Unusual Gifts",
    "cost": 15,
    "hasLevels": false,
    "description": {
      "en": "Seers and Diviners who read your fate always notice something unusual. / You register as 'marked' in ways they cannot fully interpret.",
      "es": "Los Videntes y Adivinos que leen tu destino siempre notan algo inusual. Registras como 'marcado' de maneras que ellos no pueden interpretar del todo."
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
      "es": "Un único objeto místico que ya posees, definido con el DJ. El costo escala con su poder: amuleto menor (5 pts), herramienta útil (10 pts) o equipo significativo (15 pts). El objeto debe coincidir con uno de los dominios de las 22 Vías. Si lo pierdes o se destruye, la ventaja cambia a 'Objeto Místico (Perdido)' sin reembolso de puntos."
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
      "es": "Un objeto que posees proporciona +1 a una habilidad específica cuando lo usas (especificar objeto y habilidad). Se pierde permanentemente si se destruye el objeto."
    }
  },
  {
    "id": "dead_language_fluency",
    "name": {
      "en": "Dead Language Fluency",
      "es": "Fluidez en Idioma Muerto"
    },
    "category": "Unusual Gifts",
    "cost": 5,
    "hasLevels": false,
    "description": {
      "en": "Read and speak one dead language (Ancient Hermes, Ancient Loen, etc.) / without having formally learned it. Origin unexplained.",
      "es": "Lees y hablas un idioma muerto (Antiguo Hermes, Antiguo Loen, etc.) sin haberlo aprendido formalmente. De origen inexplicable."
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
      "es": "Animales y espíritus se muestran inusualmente tranquilos cerca de ti. Los animales domésticos nunca se asustan; los espíritus no hostiles te observan en lugar de actuar en tu contra."
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
      "es": "Conoces la fórmula para tu próxima pócima de Secuencia 8 (ingredientes principales, suplementarios y método de preparación). Este conocimiento llega de forma instintiva una vez alcanzas la Secuencia 9. No te otorga los ingredientes, la poción ni el Método de Actuación; solo cubre la información de la secuencia inmediata siguiente."
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
      "es": "Comprendes de forma innata el Método de Actuación de tu Vía. Al final de cada sesión, tira 3d6 — el resultado es el porcentaje de progreso de digestión que ganas hacia tu poción actual, además de tu Ganancia de Digestión Per Sesión normal."
    }
  },
  {
    "id": "marked_by_ritual",
    "name": {
      "en": "Marked by Ritual",
      "es": "Marcado por Ritual"
    },
    "category": "Unusual Gifts",
    "cost": 10,
    "hasLevels": false,
    "description": {
      "en": "A lasting spiritual imprint (define with GM). Grants +2 to one type of SPI / roll but may attract unusual attention.",
      "es": "Tienes una huella espiritual duradera (definir con el DJ). Otorga +2 a un tipo específico de tirada de SPI, pero puede atraer atención inusual."
    }
  },
  {
    "id": "spirit_tongue",
    "name": {
      "en": "Spirit Tongue",
      "es": "Lengua de Espíritu"
    },
    "category": "Unusual Gifts",
    "cost": 10,
    "hasLevels": false,
    "description": {
      "en": "Communicate basic intent to ghosts and lingering spirits without the / Language of the Dead ability. Limited to yes/no exchanges.",
      "es": "Comunica intenciones básicas a fantasmas y espíritus persistentes sin tener la habilidad Idioma de los Muertos. Limitado a intercambios de sí/no."
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
      "es": "Una vez por arco de campaña, cuando estarías por morir en una tirada de muerte, tienes éxito automáticamente. El DJ decide el costo o sacrificio."
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
      "es": "Tu conexión con lo divino es inusualmente clara. +2 a Teología y Ritual Religioso; una vez por sesión, el DJ debe responder honestamente una pregunta factual sobre doctrina o historia de la Iglesia."
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
      "es": "Asesino Reacio"
    },
    "category": "Personal & Psychological",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "-4 to hit recognizable people with deadly force (-2 if face hidden); cannot / Aim. If you kill a recognizable person, become morose for 3d days — / Will rolls required to use violence again.",
      "es": "Solo usas fuerza letal si tu vida o la de otros está en peligro inminente. Puedes dudar y a menudo sufres un -4 para usar fuerza letal si personas inocentes pudieran verse afectadas, o contra enemigos que no usan fuerza letal. Fuerza no letal es aceptable."
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
      "es": "No Puede Matar"
    },
    "category": "Personal & Psychological",
    "cost": -15,
    "hasLevels": false,
    "description": {
      "en": "Unwilling to kill anyone, even through omission, or to allow comrades to / kill. If responsible for a death, react as Reluctant Killer (-5).",
      "es": "Poco dispuesto a matar a alguien, incluso por omisión, o permitir que compañeros maten. Si eres responsable de una muerte, reaccionas como Asesino Reacio (-5)."
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
      "es": "Usas la violencia solo para protegerte a ti mismo o a aquellos a tu cuidado, al grado mínimo necesario; sin ataques preventivos."
    }
  },
  {
    "id": "total_non_violence",
    "name": {
      "en": "Total Non-Violence",
      "es": "Total No Violencia"
    },
    "category": "Personal & Psychological",
    "cost": -30,
    "hasLevels": false,
    "description": {
      "en": "Will not use violence against intelligent creatures, even in self-defense. / May defend against animals.",
      "es": "No usarás violencia contra criaturas inteligentes, incluso en defensa propia. Puedes defenderte de animales."
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
      "es": "No puedes relajarte; siempre encuentras algo productivo que hacer. -2 a tiradas sociales en entornos de ocio; las tiradas para tomarte un día libre se hacen a Voluntad-3."
    }
  },
  {
    "id": "callous",
    "name": {
      "en": "Callous",
      "es": "Cruel / Insensible"
    },
    "category": "Personal & Psychological",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "-3 to social skill rolls when warmth or empathy is required. You may still / act kindly — but it is an effort and it shows.",
      "es": "-3 a tiradas de habilidades sociales cuando se requiere calidez o empatía. Aún puedes actuar amablemente, pero es un esfuerzo y se nota."
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
      "es": "Obligado a robar pequeños objetos cuando surge la oportunidad y no hay consecuencias obvias. Tira contra Voluntad para resistir cuando la situación facilita el robo."
    }
  },
  {
    "id": "skinny",
    "name": {
      "en": "Skinny",
      "es": "Flacucho / Delgado"
    },
    "category": "Personal & Psychological",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "-2 to ST for purposes of knockback and grappling; +2 to rolls to escape / bonds or fit into tight spaces. Clothing is hard to find off the rack.",
      "es": "-2 a ST a efectos de empuje y forcejeos; +2 a tiradas para escapar de ataduras o caber en espacios estrechos. La ropa es difícil de encontrar a medida."
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
      "es": "-1 a -2 a tiradas de habilidades sociales dependiendo de la severidad. Leve (-5): -1 en grupos de 6+; Severa (-10): -2 en grupos de 3+."
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
      "es": "Debes tirar contra Voluntad para emprender cualquier esfuerzo sostenido que no sea inmediatamente necesario o de interés personal. El desempleo es un riesgo real."
    }
  },
  {
    "id": "clueless",
    "name": {
      "en": "Clueless",
      "es": "Incompetente Social / Despistado"
    },
    "category": "Personal & Psychological",
    "cost": -10,
    "hasLevels": false,
    "description": {
      "en": "-3 to all social skill rolls; generally miss social cues and subtlety. You do / not understand subtext, sarcasm, or implication.",
      "es": "-3 a todas las tiradas sociales; generalmente no captas las señales sociales. No entiendes el subtexto, el sarcasmo o la implicación."
    }
  },
  {
    "id": "unfit",
    "name": {
      "en": "Unfit",
      "es": "Baja Forma"
    },
    "category": "Personal & Psychological",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "-1 to all HT rolls; recover FP at half normal rate. Unfit for sustained / physical exertion.",
      "es": "-1 a todas las tiradas de HT; recuperas FP a la mitad del ritmo normal. Inadecuado para esfuerzo físico sostenido."
    }
  },
  {
    "id": "vow_specify",
    "name": {
      "en": "Vow (specify)",
      "es": "Voto (especificar)"
    },
    "category": "Personal & Psychological",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "A solemn promise that restricts your actions. Common examples: Poverty / (give away all wealth beyond subsistence) -10, Partial Silence (limited / speech) -5, Vegetarian -5.",
      "es": "Una promesa solemne que restringe tus acciones. Ejemplos comunes: Pobreza (regalar toda la riqueza más allá de la subsistencia) -10, Silencio Parcial -5, Vegetariano -5."
    }
  },
  {
    "id": "charity_12",
    "name": {
      "en": "Charity (12)",
      "es": "Caritativo (12)"
    },
    "category": "Personal & Psychological",
    "cost": -15,
    "hasLevels": false,
    "description": {
      "en": "Cannot ignore genuine need. Must roll vs. 12 or help anyone who asks for / assistance you can reasonably provide. May be exploited.",
      "es": "No puedes ignorar una necesidad genuina. Debes tirar contra 12 o ayudar a cualquiera que pida asistencia que razonablemente puedas proporcionar. Puedes ser explotado."
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
      "es": "Debes tirar contra Voluntad para pasar tiempo prolongado en grupos de más de 3-4 personas. Buscas la soledad cuando estás estresado; -1 a tiradas sociales en multitudes."
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
      "es": "Debes ir a por golpes mortales en combate. Tirada de IQ necesaria para aceptar una rendición o tomar prisioneros. Los enemigos caídos reciben un tiro extra para asegurar."
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
      "es": "Extraños eventos sobrenaturales se sienten atraídos hacia ti constantemente."
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
      "es": "Debes tirar contra 12 o asumir que los extraños son amenazas; efecto secundario común de pociones."
    }
  },
  {
    "id": "hallucinations_12",
    "name": {
      "en": "Hallucinations (12)",
      "es": "Alucinaciones (12)"
    },
    "category": "Core Supernatural Disadvantages",
    "cost": -10,
    "hasLevels": false,
    "description": {
      "en": "Periodic false sensory experiences; visions, voices, phantom presences",
      "es": "Experiencias sensoriales falsas periódicas; visiones, voces, presencias fantasmas."
    }
  },
  {
    "id": "compulsion_pathway",
    "name": {
      "en": "Compulsion (pathway)",
      "es": "Compulsión (Vía)"
    },
    "category": "Core Supernatural Disadvantages",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "Uncontrollable urge tied to pathway nature; triggered by stress",
      "es": "Impulso incontrolable ligado a la naturaleza de tu Vía; desencadenado por el estrés."
    }
  },
  {
    "id": "delusion_minor",
    "name": {
      "en": "Delusion (minor)",
      "es": "Delirio (Menor)"
    },
    "category": "Core Supernatural Disadvantages",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "Firmly believes something false about the supernatural world",
      "es": "Crees firmemente algo falso sobre el mundo sobrenatural."
    }
  },
  {
    "id": "coldblooded",
    "name": {
      "en": "Coldblooded",
      "es": "Sangre Fría / Despiadado"
    },
    "category": "Core Supernatural Disadvantages",
    "cost": -10,
    "hasLevels": false,
    "description": {
      "en": "Morality erodes upon advancement. Roll Will when suppressing evil / desires (murder, lust, theft, etc.). Define with the GM which desires apply / to your character.",
      "es": "La moralidad se erosiona con el avance. Tira Voluntad al suprimir deseos malvados (asesinato, lujuria, robo, etc.). Define con el DJ qué deseos se aplican a tu personaje."
    }
  },
  {
    "id": "compulsive_behavior_indulge_evil_desires_sc_6",
    "name": {
      "en": "Compulsive Behavior / (Indulge Evil Desires) SC 6",
      "es": "Comportamiento Compulsivo (Indulgencia en Mal)"
    },
    "category": "Core Supernatural Disadvantages",
    "cost": -15,
    "hasLevels": false,
    "description": {
      "en": "When an opportunity to commit an evil act (murder, torture, betrayal, etc.) / presents itself, roll 3d6≤6 or indulge fully. Conscience offers no / resistance.",
      "es": "Cuando se presenta la oportunidad de cometer un acto malvado (asesinato, traición, tortura), tira 3d6≤6 o entrégate por completo. Tu conciencia no ofrece resistencia."
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
      "es": "Espiritualmente atado a una ubicación (especificar). Salir por más de una semana causa una creciente inquietud: -1 a Voluntad por semana adicional, acumulativo."
    }
  },
  {
    "id": "compulsion_collection_pathway",
    "name": {
      "en": "Compulsion: Collection / (pathway)",
      "es": "Compulsión: Coleccionismo (Vía)"
    },
    "category": "Compulsions & Obsessions",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "Compelled to collect specific items (bones, keys, mirrors, etc.). Roll vs. / Will-2 when presented with a collectible you do not own.",
      "es": "Obligado a coleccionar elementos específicos (huesos, llaves, espejos, etc.). Tira contra Voluntad-2 al ver un objeto de colección que no posees."
    }
  },
  {
    "id": "compulsion_confess",
    "name": {
      "en": "Compulsion: Confess",
      "es": "Compulsión: Confesar"
    },
    "category": "Compulsions & Obsessions",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "Under significant stress, must tell someone a true secret. Roll vs. Will-2 or / confess something genuine to the nearest trusted person.",
      "es": "Bajo estrés significativo, debes contar un secreto verdadero. Tira contra Voluntad-2 o confiesa algo genuino a la persona de confianza más cercana."
    }
  },
  {
    "id": "compulsion_preserve_the_dead",
    "name": {
      "en": "Compulsion: Preserve the / Dead",
      "es": "Compulsión: Preservar a los Muertos"
    },
    "category": "Compulsions & Obsessions",
    "cost": -10,
    "hasLevels": false,
    "description": {
      "en": "Cannot pass a neglected corpse without properly covering or / acknowledging it. Roll vs. Will-3 to continue without addressing them / first.",
      "es": "No puedes pasar junto a un cadáver descuidado sin cubrirlo o reconocerlo adecuadamente. Tira contra Voluntad-3 para continuar sin atenderlos primero."
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
      "es": "Atraído hacia lugares donde se han realizado rituales. Cerca de un sitio ritual, te ves obligado a investigar incluso sin una razón obvia."
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
      "es": "Evitas el contacto visual con extraños; realizas rituales de protección periódicamente. Si te interrumpen la rutina, -1 a tiradas de Voluntad durante el día."
    }
  },
  {
    "id": "honest_to_spirits",
    "name": {
      "en": "Honest to Spirits",
      "es": "Honesto con los Espíritus"
    },
    "category": "Compulsions & Obsessions",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "Cannot deliberately lie in the presence of ghosts or entities you know to be / spiritually present. Instinctive, not a rational choice.",
      "es": "No puedes mentir deliberadamente en presencia de fantasmas o entidades que sabes que están presentes. Es instintivo, no una elección racional."
    }
  },
  {
    "id": "pathway_pull",
    "name": {
      "en": "Pathway Pull",
      "es": "Atracción a la Vía"
    },
    "category": "Compulsions & Obsessions",
    "cost": -10,
    "hasLevels": false,
    "description": {
      "en": "A specific Pathway exerts a narrative pull before you drink a potion.",
      "es": "Una Vía específica ejerce un fuerte tirón narrativo sobrenatural sobre ti antes de beber una poción."
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
      "es": "Terror irracional a algo relacionado con el tiempo (relojes deteniéndose, espejos, horas específicas). Desencadenante: Control de Miedo inmediato a -3."
    }
  },
  {
    "id": "dead_eyed",
    "name": {
      "en": "Dead-Eyed",
      "es": "Ojos de Muerto"
    },
    "category": "Mental & Perceptual",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "-2 to first-impression social rolls with strangers; animals are skittish / around you; children sometimes cry.",
      "es": "-2 a tiradas sociales de primera impresión con extraños; los animales se asustan a tu alrededor; a veces los niños lloran."
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
      "es": "Tu presencia disturba o repele instintivamente a otros (consecuencia común de las Vías del Abismo y del Encadenado). Los PNJs reaccionan con inquietud o desconfianza."
    }
  },
  {
    "id": "entity_fixation",
    "name": {
      "en": "Entity Fixation",
      "es": "Fijación de Entidad"
    },
    "category": "Mental & Perceptual",
    "cost": -10,
    "hasLevels": false,
    "description": {
      "en": "-1 to all rolls when a specific entity type is present nearby; -2 to any roll / that requires you to ignore them.",
      "es": "-1 a todas las tiradas cuando un tipo específico de entidad está cerca; -2 a cualquier tirada que requiera que la ignores."
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
      "es": "En completo silencio (bajo tierra, en el mar, en edificios vacíos) debes tirar contra Voluntad-2 o sentirte obligado a hablar o hacer ruido."
    }
  },
  {
    "id": "haunted",
    "name": {
      "en": "Haunted",
      "es": "Embrujado / Acechado"
    },
    "category": "Mental & Perceptual",
    "cost": -10,
    "hasLevels": false,
    "description": {
      "en": "A specific ghost follows you. Other spiritual beings notice it; it may / interfere with rituals; can be used as leverage by those who know.",
      "es": "Un fantasma específico te sigue. Otros seres espirituales lo notan; puede interferir con rituales; puede ser usado como palanca por aquellos que lo saben."
    }
  },
  {
    "id": "memory_bleed",
    "name": {
      "en": "Memory Bleed",
      "es": "Fuga de Recuerdos"
    },
    "category": "Mental & Perceptual",
    "cost": -10,
    "hasLevels": false,
    "description": {
      "en": "Someone else's genuine memories intrude periodically — an unrelated / person from your past, or someone whose spiritual body overlapped yours.",
      "es": "Recuerdos genuinos de otra persona se entrometen periódicamente (alguien de tu pasado, o alguien cuyo cuerpo espiritual se superpuso al tuyo)."
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
      "es": "En momentos de alta actividad espiritual, los sentidos se separan de tu cuerpo. Todas las tiradas físicas tienen -2 durante el episodio (1d segundos)."
    }
  },
  {
    "id": "phobia_sacred_symbols",
    "name": {
      "en": "Phobia: Sacred Symbols",
      "es": "Fobia: Símbolos Sagrados"
    },
    "category": "Mental & Perceptual",
    "cost": -10,
    "hasLevels": false,
    "description": {
      "en": "A specific church's symbols, prayers, or holy items cause genuine fright. / Fright Check at -2 on direct exposure; -1 in consecrated buildings.",
      "es": "Símbolos, oraciones o elementos sagrados te causan miedo genuino. Control de Miedo a -2 en exposición directa; -1 dentro de edificios consagrados."
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
      "es": "Tu presencia espiritual se registra como mayor de lo que sugeriría tu Secuencia. Eres percibido como más poderoso de lo que eres; una maldición y una bendición."
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
      "es": "Un tipo de entidad específica o fenómeno sobrenatural que no puedes percibir con ninguna habilidad espiritual, independientemente de los resultados de tus tiradas."
    }
  },
  {
    "id": "phobia_specify",
    "name": {
      "en": "Phobia (specify)",
      "es": "Fobia (especificar)"
    },
    "category": "Mental & Perceptual",
    "cost": -5,
    "hasLevels": false,
    "description": {
      "en": "Irrational fear of a specific thing (cities, spiders, crowds, etc.). Fright / Check at -2 when exposed; -1 to all rolls while the phobic stimulus is / present and unavoidable. Severity depends on how common the trigger is.",
      "es": "Miedo irracional a algo específico. Control de Miedo a -2 al exponerse; -1 a todas las tiradas mientras el estímulo fóbico esté presente e inevitable."
    }
  }
];
