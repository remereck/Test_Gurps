const fs = require('fs');

// 1. Hanged Man Pathway
const hangedManTs = `import { Pathway } from '../types';

export const hangedManPathway: Pathway = {
  id: 'hanged_man',
  name: { en: 'Hanged Man Pathway', es: 'Senda del Colgado' },
  sequences: [
    {
      level: 9,
      statBonuses: [{ stat: 'SPI', bonus: 11 }],
      skillBonuses: [
        { skillId: 'ritualistic_magic', bonus: 2 },
        { skillId: 'spiritual_perception', bonus: 3 }
      ],
      abilities: [
        {
          id: 'hanged_seq9_drawback',
          name: { en: 'Paranoia, Hallucinations, or Compulsion', es: 'Paranoia, Alucinaciones o Compulsión' },
          type: 'drawback',
          description: {
            en: 'Choose one: Paranoia (trust no one), Hallucinations (see/hear things not there), or Compulsion (irresistible urge to seek hidden knowledge).',
            es: 'Elige uno: Paranoia (no confías en nadie), Alucinaciones (ves/escuchas cosas inexistentes), o Compulsión (impulso de buscar conocimiento oculto).'
          }
        },
        {
          id: 'hanged_seq9_knowledge',
          name: { en: 'Knowledge (Honorifics)', es: 'Conocimiento (Honoríficos)' },
          type: 'passive',
          description: {
            en: 'Learn three-part honorific names of secret existences.',
            es: 'Aprende nombres honoríficos de tres partes de existencias secretas.'
          }
        }
      ]
    },
    {
      level: 8,
      statBonuses: [{ stat: 'SPI', bonus: 3 }],
      skillBonuses: [
        { skillId: 'ritualistic_magic', bonus: 3 },
        { skillId: 'occultism', bonus: 3 },
        { skillId: 'spiritual_perception', bonus: 2 }
      ],
      abilities: [
        {
          id: 'hanged_seq8_hearing',
          name: { en: 'Acute Hearing', es: 'Audición Aguda' },
          type: 'passive',
          description: {
            en: '+2 to Hearing rolls; detect faint sounds, eavesdrop through walls.',
            es: '+2 a tiradas de Audición; detecta sonidos tenues, escucha a través de paredes.'
          }
        },
        {
          id: 'hanged_seq8_listen_passive',
          name: { en: 'Listening (Passive)', es: 'Escucha (Pasiva)' },
          type: 'passive',
          description: {
            en: 'Always hear voices of existences within 80m. Cannot be turned off. Roll 3d6 to avoid Corruption from high-level sources.',
            es: 'Siempre escucha voces de existencias a 80m. No se puede apagar. Tira 3d6 para evitar Corrupción de fuentes de alto nivel.'
          }
        },
        {
          id: 'hanged_seq8_listen_active',
          name: { en: 'Listening (Active)', es: 'Escucha (Activa)' },
          type: 'active',
          spiCost: 1,
          description: {
            en: 'Focus on a single source. Roll 3d6: <13 receives clear information, 14+ hears the True Creator or higher existence.',
            es: 'Enfoca en una sola fuente. Tira 3d6: <13 recibe información clara, 14+ escucha al Creador Verdadero u otra existencia superior.'
          }
        },
        {
          id: 'hanged_seq8_honorifics',
          name: { en: 'Knowledge (Reinforced)', es: 'Conocimiento (Reforzado)' },
          type: 'passive',
          description: {
            en: 'Gains 2 additional honorific names. Spiritual Perception rolls gain +2.',
            es: 'Gana 2 nombres honoríficos adicionales. Percepción Espiritual gana +2.'
          }
        },
        {
          id: 'hanged_seq8_perception_reinforced',
          name: { en: 'Spiritual Perception (Reinforced)', es: 'Percepción Espiritual (Reforzada)' },
          type: 'passive',
          description: {
            en: 'Passive range expands to 50m. Automatically detect active Beyonder abilities within range.',
            es: 'El rango pasivo se expande a 50m. Detecta automáticamente habilidades Beyonder activas en el rango.'
          }
        }
      ]
    },
    {
      level: 7,
      statBonuses: [{ stat: 'SPI', bonus: 3 }, { stat: 'Per', bonus: 1 }],
      skillBonuses: [
        { skillId: 'stealth', bonus: 3 },
        { skillId: 'occultism', bonus: 2 }
      ],
      abilities: [
        {
          id: 'hanged_seq7_shadow_lurking',
          name: { en: 'Shadow Lurking', es: 'Acecho en las Sombras' },
          type: 'active',
          spiCost: 1,
          description: {
            en: 'Conceal in shadows. Invisible to mundane senses (Per-2 to notice). Move between connected shadows. Lasts 1 min.',
            es: 'Oculto en las sombras. Invisible a sentidos mundanos (Per-2 para notar). Se mueve entre sombras conectadas. Dura 1 min.'
          }
        },
        {
          id: 'hanged_seq7_shadow_shaping',
          name: { en: 'Shadow Shaping', es: 'Moldear Sombras' },
          type: 'active',
          spiCost: 1,
          description: {
            en: 'Shape shadows within 10m into weapons (shadow corrosion damage, bypass non-magical DR) or animal forms for 1 minute.',
            es: 'Moldea sombras en 10m en armas (daño por corrosión de sombra) o formas animales por 1 minuto.'
          }
        },
        {
          id: 'hanged_seq7_shadow_chrysalis',
          name: { en: 'Shadow Chrysalis', es: 'Crisálida de Sombra' },
          type: 'active',
          spiCost: 2,
          description: {
            en: 'Requires Shadow Lurking. Target\\'s shadow forms a cocoon. Quick Contest ST vs SPI. Target trapped takes 1d-2 corrosion damage/turn.',
            es: 'Requiere Acecho en las Sombras. La sombra del objetivo forma un capullo. Contienda ST vs SPI. Atrapado sufre 1d-2 corrosión/turno.'
          }
        },
        {
          id: 'hanged_seq7_summon_shadow',
          name: { en: 'Summon Shadow', es: 'Invocar Sombra' },
          type: 'active',
          spiCost: 2,
          description: {
            en: 'Roll Ritualistic Magic. Summons shadow servitor for 1 min. Attacks for 1d6 corrosion. Failed roll makes it hostile.',
            es: 'Tira Magia Ritualística. Invoca servidor de sombra por 1 min. Ataca por 1d6 de corrosión. Si falla, es hostil.'
          }
        },
        {
          id: 'hanged_seq7_listening_control',
          name: { en: 'Listening Control', es: 'Control de Escucha' },
          type: 'passive',
          description: {
            en: 'Toggle passive Listening on/off. When active, range is 40m (or 80m reinforced) and can listen to 2 simultaneous conversations.',
            es: 'Activa/desactiva la Escucha pasiva. Al activarlo, el rango es 40m (o 80m reforzado) y puede escuchar 2 conversaciones.'
          }
        },
        {
          id: 'hanged_seq7_spiritual_perception',
          name: { en: 'Spiritual Perception (Mastered)', es: 'Percepción Espiritual (Maestría)' },
          type: 'passive',
          description: {
            en: '+3 to detect entities. Passive range 80m. Reveals emotional state.',
            es: '+3 para detectar entidades. Rango pasivo 80m. Revela estado emocional.'
          }
        }
      ]
    },
    {
      level: 6,
      statBonuses: [{ stat: 'SPI', bonus: 3 }, { stat: 'HT', bonus: 1 }],
      skillBonuses: [],
      abilities: [
        {
          id: 'hanged_seq6_main',
          name: { en: 'Rose Bishop', es: 'Obispo de las Rosas' },
          type: 'active',
          spiCost: 2,
          description: {
            en: 'Flesh magic and blood manipulation.',
            es: 'Magia de carne y manipulación de sangre.'
          }
        }
      ]
    }
  ]
};
`;
fs.writeFileSync('src/data/pathways/hanged_man.ts', hangedManTs);

// 2. Darkness Pathway
const darknessTs = `import { Pathway } from '../types';

export const darknessPathway: Pathway = {
  id: 'darkness',
  name: { en: 'Darkness Pathway', es: 'Senda de la Oscuridad' },
  sequences: [
    {
      level: 9,
      statBonuses: [{ stat: 'SPI', bonus: 9 }],
      skillBonuses: [
        { skillId: 'ritualistic_magic', bonus: 2 }
      ],
      abilities: [
        {
          id: 'darkness_seq9_sleep',
          name: { en: 'Reduced Sleep', es: 'Sueño Reducido' },
          type: 'passive',
          description: {
            en: 'Requires only 3-4 hours of rest per day.',
            es: 'Requiere solo 3-4 horas de descanso por día.'
          }
        },
        {
          id: 'darkness_seq9_nocturnality',
          name: { en: 'Nocturnality', es: 'Nocturnidad' },
          type: 'passive',
          description: {
            en: '+1 to all rolls during the night.',
            es: '+1 a todas las tiradas durante la noche.'
          }
        },
        {
          id: 'darkness_seq9_spirit_vision',
          name: { en: 'Spirit Vision — Limited Form', es: 'Visión Espiritual — Forma Limitada' },
          type: 'active',
          spiCost: 1,
          description: {
            en: 'See spiritual entities. Cannot read health/emotions. Detection only.',
            es: 'Ve entidades espirituales. No puede leer salud/emociones. Solo detección.'
          }
        },
        {
          id: 'darkness_seq9_danger',
          name: { en: 'Danger Detection in the Dark', es: 'Detección de Peligro en la Oscuridad' },
          type: 'passive',
          description: {
            en: 'Danger Sense heightened in low-light (+2). Navigates darkness without penalty.',
            es: 'Sentido del Peligro mejorado en poca luz (+2). Navega en la oscuridad sin penalización.'
          }
        }
      ]
    },
    {
      level: 8,
      statBonuses: [{ stat: 'SPI', bonus: 3 }],
      skillBonuses: [
        { skillId: 'brawling', bonus: 3 },
        { skillId: 'guns_pistol', bonus: 2 },
        { skillId: 'climbing', bonus: 2 },
        { skillId: 'ritualistic_magic', bonus: 2 }
      ],
      abilities: [
        {
          id: 'darkness_seq8_poem',
          name: { en: 'Midnight Poem — Spell Effects', es: 'Poema de Medianoche — Efectos de Hechizo' },
          type: 'active',
          spiCost: 2,
          description: {
            en: 'Recite poem for 1 round. Tranquilize (calm), Lullaby (sleep, ~20m radius), Pacify (unresponsive), or Fear (dread).',
            es: 'Recita un poema por 1 ronda. Tranquilizar (calma), Canción de Cuna (sueño, ~20m), Pacificar (no responde) o Miedo (terror).'
          }
        },
        {
          id: 'darkness_seq8_nocturnality',
          name: { en: 'Nocturnality (Reinforced)', es: 'Nocturnidad (Reforzada)' },
          type: 'passive',
          description: {
            en: 'Bonus during night increases to +2. In total darkness, it becomes +3.',
            es: 'El bono nocturno aumenta a +2. En oscuridad total, pasa a ser +3.'
          }
        },
        {
          id: 'darkness_seq8_danger',
          name: { en: 'Danger Detection (Reinforced)', es: 'Detección de Peligro (Reforzada)' },
          type: 'passive',
          description: {
            en: 'Bonus in low-light is +4. Senses danger up to 20m away with pin-point direction.',
            es: 'Bono con poca luz de +4. Siente peligro a 20m con dirección exacta.'
          }
        }
      ]
    },
    {
      level: 7,
      statBonuses: [{ stat: 'SPI', bonus: 3 }, { stat: 'IQ', bonus: 1 }],
      skillBonuses: [],
      abilities: [
        {
          id: 'darkness_seq7_silent_poem',
          name: { en: 'Silent Midnight Poem', es: 'Poema de Medianoche Silencioso' },
          type: 'active',
          spiCost: 1,
          description: {
            en: 'Chant Midnight Poems without opening the mouth.',
            es: 'Canta Poemas de Medianoche sin abrir la boca.'
          }
        },
        {
          id: 'darkness_seq7_nightmare_state',
          name: { en: 'Nightmare State', es: 'Estado de Pesadilla' },
          type: 'active',
          spiCost: 1,
          description: {
            en: 'Body sleeps, Soul Body enters dreams within city range. Can see glowing orbs of dreams.',
            es: 'El cuerpo duerme, el Cuerpo del Alma entra en sueños a rango de ciudad. Ve orbes brillantes de sueños.'
          }
        },
        {
          id: 'darkness_seq7_dream_shaping',
          name: { en: 'Dream Shaping', es: 'Moldear Sueños' },
          type: 'active',
          spiCost: 1,
          description: {
            en: 'Shape target\\'s dream for interrogation. Interrogation rolls gain +3. Target rolls Will-2 or reveals secret.',
            es: 'Moldea el sueño del objetivo para interrogar. Gana +3 en interrogación. Objetivo tira Voluntad-2 o revela secretos.'
          }
        },
        {
          id: 'darkness_seq7_dream_invasion',
          name: { en: 'Dream Invasion', es: 'Invasión de Sueños' },
          type: 'active',
          spiCost: 2,
          description: {
            en: 'Drag target into a dream. Range 20m (100m if 2 turns prep). Both fall asleep into the dream.',
            es: 'Arrastra al objetivo a un sueño. Rango 20m (100m si prepara 2 turnos). Ambos se duermen en el sueño.'
          }
        },
        {
          id: 'darkness_seq7_limbs',
          name: { en: 'Nightmare Limbs', es: 'Extremidades de Pesadilla' },
          type: 'active',
          spiCost: 1,
          description: {
            en: 'Generates flesh tentacles from the back. Deals 1d6+1 damage.',
            es: 'Genera tentáculos de carne de la espalda. Infligen 1d6+1 de daño.'
          }
        },
        {
          id: 'darkness_seq7_shadows',
          name: { en: 'Shadows', es: 'Sombras' },
          type: 'active',
          spiCost: 0,
          description: {
            en: 'Merge into shadows gaining Invisibility (vision only) until attack or leaving. Stealth +4.',
            es: 'Se funde con las sombras ganando Invisibilidad (solo visual) hasta atacar. Sigilo +4.'
          }
        }
      ]
    },
    {
      level: 6,
      statBonuses: [{ stat: 'SPI', bonus: 3 }, { stat: 'HT', bonus: 1 }],
      skillBonuses: [],
      abilities: [
        {
          id: 'darkness_seq6_main',
          name: { en: 'Soul Assurer', es: 'Apaciguador de Almas' },
          type: 'active',
          spiCost: 2,
          description: {
            en: 'Soothes souls and commands spiritual entities.',
            es: 'Apacigua almas y comanda entidades espirituales.'
          }
        }
      ]
    }
  ]
};
`;
fs.writeFileSync('src/data/pathways/darkness.ts', darknessTs);

// 3. Death Pathway
const deathTs = `import { Pathway } from '../types';

export const deathPathway: Pathway = {
  id: 'death',
  name: { en: 'Death Pathway', es: 'Senda de la Muerte' },
  sequences: [
    {
      level: 9,
      statBonuses: [{ stat: 'SPI', bonus: 6 }, { stat: 'ST', bonus: 1 }, { stat: 'HT', bonus: 1 }],
      skillBonuses: [
        { skillId: 'forensics', bonus: 2 } // Use forensics/physician proxy
      ],
      abilities: [
        {
          id: 'death_seq9_cold',
          name: { en: 'Cold Resistance', es: 'Resistencia al Frío' },
          type: 'passive',
          description: {
            en: 'No penalties from cold environments; hypothermia rolls at +2.',
            es: 'Sin penalizaciones por frío; tiradas de hipotermia con +2.'
          }
        },
        {
          id: 'death_seq9_decay_res',
          name: { en: 'Resistant (Decay)', es: 'Resistente (Decadencia)' },
          type: 'passive',
          description: {
            en: 'HT rolls to resist corrosiveness and decay effects at +3.',
            es: 'Tiradas de HT para resistir corrosión y efectos de decadencia con +3.'
          }
        },
        {
          id: 'death_seq9_fear_sun',
          name: { en: 'Fear of Sunlight/Purification', es: 'Miedo a la Luz Solar/Purificación' },
          type: 'drawback',
          description: {
            en: '-1 to Will/skills under strong sunlight or holy effects. Sunlight attacks gain +1 against you.',
            es: '-1 a Voluntad/habilidades bajo luz solar fuerte o efectos sagrados. Ataques de luz ganan +1.'
          }
        },
        {
          id: 'death_seq9_deterrence',
          name: { en: 'Undead Deterrence', es: 'Disuasión de No Muertos' },
          type: 'passive',
          description: {
            en: 'Mindless undead ignore you. Intelligent undead must roll Will to attack.',
            es: 'Los no muertos sin mente te ignoran. Los inteligentes deben tirar Voluntad para atacar.'
          }
        },
        {
          id: 'death_seq9_detection',
          name: { en: 'Undead Detection', es: 'Detección de No Muertos' },
          type: 'passive',
          description: {
            en: 'Detect undead within 15m without rolling. +3 to Observation to understand them.',
            es: 'Detecta no muertos en 15m sin tirar. +3 a Observación para entenderlos.'
          }
        },
        {
          id: 'death_seq9_spirit_vision',
          name: { en: 'Spirit Vision', es: 'Visión Espiritual' },
          type: 'active',
          spiCost: 1,
          description: {
            en: 'See spiritual entities and Ether Body to analyze health/spiritual conditions.',
            es: 'Ve entidades espirituales y el Cuerpo Etérico para analizar la salud.'
          }
        }
      ]
    },
    {
      level: 8,
      statBonuses: [{ stat: 'DX', bonus: 2 }, { stat: 'SPI', bonus: 3 }],
      skillBonuses: [
        { skillId: 'occultism', bonus: 4 },
        { skillId: 'ritualistic_magic', bonus: 2 }
      ],
      abilities: [
        {
          id: 'death_seq8_gravedigger',
          name: { en: 'Gravedigger Abilities', es: 'Habilidades de Sepulturero' },
          type: 'passive',
          description: {
            en: 'Improved physical agility. Greater connection to the underworld.',
            es: 'Agilidad física mejorada. Mayor conexión con el inframundo.'
          }
        }
      ]
    },
    {
      level: 7,
      statBonuses: [{ stat: 'SPI', bonus: 3 }, { stat: 'Per', bonus: 1 }, { stat: 'Will', bonus: 1 }],
      skillBonuses: [
        { skillId: 'occultism', bonus: 2 },
        { skillId: 'ritualistic_magic', bonus: 2 },
        { skillId: 'spiritual_perception', bonus: 2 }
      ],
      abilities: [
        {
          id: 'death_seq7_channeling',
          name: { en: 'Spirit Channeling', es: 'Canalización de Espíritus' },
          type: 'active',
          spiCost: 2,
          description: {
            en: 'Communicate with natural spirits and dead souls. Living souls require a SPI vs Will contest.',
            es: 'Comunícate con espíritus y almas muertas. Almas vivas requieren contienda de SPI vs Voluntad.'
          }
        },
        {
          id: 'death_seq7_frost_shadow',
          name: { en: 'Frost Shadow', es: 'Sombra de Escarcha' },
          type: 'active',
          spiCost: 1,
          description: {
            en: 'Summon combat spirit for Ice Armor, Frost Scythe, or Freezing Field.',
            es: 'Invoca un espíritu de combate para Armadura de Hielo, Guadaña de Escarcha o Campo Congelante.'
          }
        },
        {
          id: 'death_seq7_affinity',
          name: { en: 'Spirit Affinity', es: 'Afinidad de Espíritu' },
          type: 'passive',
          description: {
            en: 'Understand spirits without magic. Spirits treat you as kin and may share info unprompted.',
            es: 'Entiende espíritus sin magia. Te tratan como pariente y pueden compartir info sin preguntar.'
          }
        },
        {
          id: 'death_seq7_zombie',
          name: { en: 'Zombie Disguise', es: 'Disfraz de Zombi' },
          type: 'active',
          spiCost: 1,
          description: {
            en: 'Disguise as zombie; +1 Will vs death/cold/decay auras.',
            es: 'Disfraz de zombi; +1 Voluntad vs auras de muerte/frío/decadencia.'
          }
        },
        {
          id: 'death_seq7_eye',
          name: { en: 'Eye of Death', es: 'Ojo de la Muerte' },
          type: 'active',
          spiCost: 1,
          description: {
            en: 'Reveals weaknesses of Undead/Spirits. +2 hit, +2 dmg, ignore 2 DR for the scene.',
            es: 'Revela debilidades de No Muertos/Espíritus. +2 ataque/daño, ignora 2 RD en la escena.'
          }
        },
        {
          id: 'death_seq7_control',
          name: { en: 'Controlled Zombie', es: 'Zombi Controlado' },
          type: 'passive',
          description: {
            en: 'Maintain control over up to 3 zombies. Zombies gain +2 ST, +1 HP.',
            es: 'Mantén control sobre hasta 3 zombis. Zombis ganan +2 ST, +1 HP.'
          }
        },
        {
          id: 'death_seq7_corpse_vision',
          name: { en: 'Corpse Vision', es: 'Visión de Cadáver' },
          type: 'active',
          spiCost: 0,
          description: {
            en: 'See through eyes of any corpse touched in the past week up to 30m away. Lasts 5 mins.',
            es: 'Ve a través de cadáveres tocados en la última semana hasta 30m. Dura 5 min.'
          }
        }
      ]
    },
    {
      level: 6,
      statBonuses: [{ stat: 'SPI', bonus: 3 }, { stat: 'IQ', bonus: 1 }],
      skillBonuses: [],
      abilities: [
        {
          id: 'death_seq6_main',
          name: { en: 'Necromancer', es: 'Nigromante' },
          type: 'active',
          spiCost: 2,
          description: {
            en: 'Advanced control over death and corpses.',
            es: 'Control avanzado sobre la muerte y los cadáveres.'
          }
        }
      ]
    }
  ]
};
`;
fs.writeFileSync('src/data/pathways/death.ts', deathTs);

console.log("Fixed hanged_man.ts, darkness.ts, death.ts");
