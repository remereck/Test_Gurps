const fs = require('fs');
const path = require('path');

// 1. Sun Pathway
const sunTs = `import { Pathway } from '../types';

export const sunPathway: Pathway = {
  id: 'sun',
  name: { en: 'Sun Pathway', es: 'Senda del Sol' },
  sequences: [
    {
      level: 9,
      statBonuses: [{ stat: 'SPI', bonus: 1 }, { stat: 'HT', bonus: 1 }],
      skillBonuses: [
        { skillId: 'singing', bonus: 4 }
      ],
      abilities: [
        {
          id: 'sun_seq9_singing',
          name: { en: 'Singing — Buff Effects', es: 'Canto — Efectos de Mejora' },
          type: 'active',
          spiCost: 0,
          description: {
            en: 'Through Singing, a Bard imbues ONE effect for 10 min: (a) Courage (ignore Fear up to -3), (b) Strength (+1 ST-based rolls), (c) Agility (+1 DX-based rolls), (d) Spiritual Recovery (+1 SPI).',
            es: 'Mediante el Canto, un Bardo otorga UN efecto por 10 min: (a) Coraje (ignora Miedo hasta -3), (b) Fuerza (+1 a tiradas de ST), (c) Agilidad (+1 a tiradas de DX), (d) Recuperación Espiritual (+1 SPI).'
          }
        },
        {
          id: 'sun_seq9_fit',
          name: { en: 'Fit', es: 'En Forma' },
          type: 'passive',
          description: {
            en: '+1 to all HT rolls; recover FP at twice the normal rate.',
            es: '+1 a todas las tiradas de HT; recupera FP al doble del ritmo normal.'
          }
        }
      ]
    },
    {
      level: 8,
      statBonuses: [{ stat: 'SPI', bonus: 8 }],
      skillBonuses: [
        { skillId: 'ritualistic_magic', bonus: 3 }
      ],
      abilities: [
        {
          id: 'sun_seq8_sunshine',
          name: { en: 'Sunshine', es: 'Luz Solar' },
          type: 'active',
          spiCost: 3,
          description: {
            en: 'Creates light like a scorching Sun in a 5m radius. Undead/ghosts take 2d6 burning (HT/2 to halve). Living roll HT or blinded 1d3 turns (dazzled -1 on success). Lasts 1 min as full daylight.',
            es: 'Crea una luz como un Sol abrasador en 5m. No muertos/fantasmas sufren 2d6 quemadura (HT/2 reduce mitad). Vivos tiran HT o quedan ciegos 1d3 turnos. Dura 1 min.'
          }
        },
        {
          id: 'sun_seq8_blessing',
          name: { en: 'Blessing', es: 'Bendición' },
          type: 'active',
          spiCost: 2,
          description: {
            en: 'Bless self and allies within 5m for 10 min: +3 resistance vs Fear/Cold/Darkness/Death. Weapon attacks deal +2 dmg vs undead. Immune to low-level undead passive fear.',
            es: 'Bendice a ti y aliados a 5m por 10 min: +3 a resistencia vs Miedo/Frío/Oscuridad/Muerte. Armas infligen +2 de daño vs no muertos. Inmunidad al miedo de no muertos menores.'
          }
        },
        {
          id: 'sun_seq8_daytime',
          name: { en: 'Daytime', es: 'Día' },
          type: 'active',
          spiCost: 2,
          description: {
            en: 'Surrounding 10m receives Light, spreading naturally. Lasts 5 minutes.',
            es: '10m alrededor reciben Luz, esparciéndose naturalmente. Dura 5 minutos.'
          }
        },
        {
          id: 'sun_seq8_night_vision',
          name: { en: 'Night Vision', es: 'Visión Nocturna' },
          type: 'active',
          spiCost: 1,
          description: {
            en: 'Light two miniature Suns in eyes to see through Darkness.',
            es: 'Enciende dos Soles en miniatura en los ojos para ver a través de la Oscuridad.'
          }
        },
        {
          id: 'sun_seq8_evil_detection',
          name: { en: 'Evil Detection', es: 'Detección de Mal' },
          type: 'passive',
          description: {
            en: 'Passively senses undead creatures and evil entities within ~10m without roll. Manifests as a feeling of wrongness.',
            es: 'Siente pasivamente no muertos y entidades malvadas a ~10m sin tiradas. Se manifiesta como un presentimiento de maldad.'
          }
        },
        {
          id: 'sun_seq8_holy_water',
          name: { en: 'Holy Water', es: 'Agua Bendita' },
          type: 'active',
          spiCost: 0,
          description: {
            en: 'Ritual to imbue water with Sun authority. 1d6 corrosion vs undead/spirits (ignores non-magical DR). Can be used to exorcise or purify objects.',
            es: 'Ritual para imbuir agua con autoridad Solar. 1d6 de corrosión vs no muertos (ignora RD no mágica). Permite exorcizar o purificar objetos.'
          }
        },
        {
          id: 'sun_seq8_dr',
          name: { en: 'DR 2 (Fire/Light)', es: 'RD 2 (Fuego/Luz)' },
          type: 'passive',
          description: {
            en: 'Gain Damage Resistance 2 specifically against fire and light damage.',
            es: 'Gana Resistencia al Daño 2 específicamente contra daño de fuego y luz.'
          }
        },
        {
          id: 'sun_seq8_singing_upgrade',
          name: { en: 'Singing (Reinforced)', es: 'Canto (Reforzado)' },
          type: 'passive',
          description: {
            en: 'Song duration doubles to 20 min. Courage ignores Fear up to -5; Strength/Agility give +2 rolls; Spiritual Recovery restores 2 SPI.',
            es: 'La duración del canto se duplica a 20 min. Coraje ignora Miedo hasta -5; Fuerza/Agilidad dan +2; Recuperación Espiritual da 2 SPI.'
          }
        }
      ]
    },
    {
      level: 7,
      statBonuses: [{ stat: 'ST', bonus: 2 }, { stat: 'SPI', bonus: 2 }],
      skillBonuses: [
        { skillId: 'theology', bonus: 3 },
        { skillId: 'ritualistic_magic', bonus: 2 },
        { skillId: 'religious_ritual', bonus: 2 }
      ],
      abilities: [
        {
          id: 'sun_seq7_halo',
          name: { en: 'Sun Halo', es: 'Halo Solar' },
          type: 'active',
          spiCost: 2,
          description: {
            en: 'Allies within 20m ignore Fright Check penalties up to -5. Evil energies Purified. Lasts 5 min; +1 SPI/min extension.',
            es: 'Aliados a 20m ignoran Miedo hasta -5. Energías malvadas purificadas. Dura 5 min; +1 SPI/min por extensión.'
          }
        },
        {
          id: 'sun_seq7_holy_water',
          name: { en: 'Sun Holy Water', es: 'Agua Bendita Solar' },
          type: 'active',
          spiCost: 3,
          description: {
            en: 'Upgrades Holy Water: 2d6+2 corrosion vs undead (ignores non-mag DR).',
            es: 'Mejora Agua Bendita: 2d6+2 corrosión vs no muertos (ignora RD no mágica).'
          }
        },
        {
          id: 'sun_seq7_oath',
          name: { en: 'Holy Oath', es: 'Juramento Sagrado' },
          type: 'active',
          spiCost: 3,
          description: {
            en: 'Self buff 3 min: +2 ST/DX rolls, +1d6 fire dmg on attacks, attacks gain Holy tag.',
            es: 'Mejora personal de 3 min: +2 tiradas ST/DX, +1d6 fuego al atacar, los ataques ganan la etiqueta Sagrado.'
          }
        },
        {
          id: 'sun_seq7_light_summoning',
          name: { en: 'Holy Light Summoning', es: 'Invocación de Luz Sagrada' },
          type: 'active',
          spiCost: 4,
          description: {
            en: 'Beam from sky in 30m. 3d6 burning vs Undead/Evil (ignores non-mag DR). 1d6 vs others. Success by 3+ sustains for 2nd round free.',
            es: 'Rayo desde el cielo a 30m. 3d6 quemadura vs No muertos/Malvados (ignora RD). 1d6 otros. Éxito por 3+ lo mantiene 1 ronda gratis.'
          }
        },
        {
          id: 'sun_seq7_cleave',
          name: { en: 'Cleave of Purification', es: 'Corte de Purificación' },
          type: 'active',
          spiCost: 2,
          description: {
            en: 'Imbues weapons for 5 attacks or 1 min: bypass incorporeal DR. Target HT or -2 to rolls for 1d rounds. +3 to Purify wraiths.',
            es: 'Imbuye armas para 5 ataques o 1 min: ignora RD incorpórea. Objetivo tira HT o -2 a todo 1d rondas. +3 para Purificar espectros.'
          }
        },
        {
          id: 'sun_seq7_horror_immunity',
          name: { en: 'Horror Immunity', es: 'Inmunidad al Horror' },
          type: 'active',
          spiCost: 1,
          description: {
            en: 'Target immune to Fear for 10 min. Touch range. +1 SPI per extra target.',
            es: 'Objetivo inmune al Miedo por 10 min. Rango de toque. +1 SPI por objetivo adicional.'
          }
        },
        {
          id: 'sun_seq7_fire',
          name: { en: 'Fire of Light', es: 'Fuego de Luz' },
          type: 'active',
          spiCost: 3,
          description: {
            en: 'Dense golden flames in 5m radius (20m range). Living roll HT or 2d6 holy fire/round. Undead take double, HT-2 or Purified. Lasts 3 rounds.',
            es: 'Llamas doradas densas en 5m. Vivos tiran HT o 2d6 fuego sagrado/ronda. No muertos sufren el doble. Dura 3 rondas.'
          }
        },
        {
          id: 'sun_seq7_disease_res',
          name: { en: 'Disease & Poison Resistance', es: 'Resistencia a Veneno y Enfermedad' },
          type: 'passive',
          description: {
            en: '+2 to HT vs. disease, poison, and environmental hazards.',
            es: '+2 a HT vs. enfermedades, venenos y peligros ambientales.'
          }
        },
        {
          id: 'sun_seq7_very_fit',
          name: { en: 'Very Fit', es: 'Muy en Forma' },
          type: 'passive',
          description: {
            en: '+2 to all HT rolls; lose FP at half normal rate; recover FP at twice normal rate.',
            es: '+2 a tiradas HT; pierde FP a la mitad; recupera FP al doble.'
          }
        }
      ]
    },
    {
      level: 6,
      statBonuses: [
        { stat: 'SPI', bonus: 3 },
        { stat: 'ST', bonus: 1 },
        { stat: 'HT', bonus: 1 }
      ],
      skillBonuses: [],
      abilities: [
        {
          id: 'sun_seq6_main',
          name: { en: 'Notary', es: 'Notario' },
          type: 'active',
          spiCost: 2,
          description: {
            en: 'Can notarize powers and contracts.',
            es: 'Puede certificar poderes y contratos.'
          }
        }
      ]
    }
  ]
};
`;
fs.writeFileSync('src/data/pathways/sun.ts', sunTs);


// 2. Tyrant Pathway
const tyrantTs = `import { Pathway } from '../types';

export const tyrantPathway: Pathway = {
  id: 'tyrant',
  name: { en: 'Tyrant Pathway', es: 'Senda del Tirano' },
  sequences: [
    {
      level: 9,
      statBonuses: [{ stat: 'ST', bonus: 2 }, { stat: 'SPI', bonus: 1 }],
      skillBonuses: [
        { skillId: 'seamanship', bonus: 3 },
        { skillId: 'swimming', bonus: 4 },
        { skillId: 'navigation', bonus: 2 },
        { skillId: 'weather_sense', bonus: 2 }
      ],
      abilities: [
        {
          id: 'tyrant_seq9_scales',
          name: { en: 'Phantom Scales', es: 'Escamas Fantasma' },
          type: 'passive',
          description: {
            en: 'Illusory scales beneath the skin grant DR 1 vs physical impacts. Grapplers roll at -2 (slippery).',
            es: 'Escamas ilusorias otorgan RD 1 vs impactos físicos. Enemigos apresando tiran con -2 (resbaladizo).'
          }
        },
        {
          id: 'tyrant_seq9_aquatic',
          name: { en: 'Aquatic Affinity — Diving', es: 'Afinidad Acuática — Buceo' },
          type: 'passive',
          description: {
            en: 'Submerge 10 min without air. Dive to 15m without HT rolls. Ignore underwater movement penalties.',
            es: 'Sumérgete 10 min sin aire. Bucea hasta 15m sin tiradas de HT. Ignora penalizadores de movimiento bajo el agua.'
          }
        },
        {
          id: 'tyrant_seq9_balance',
          name: { en: 'Perfect Balance', es: 'Equilibrio Perfecto' },
          type: 'passive',
          description: {
            en: '+6 to avoid knockdown; +2 to Acrobatics, Climbing, Piloting.',
            es: '+6 para evitar ser derribado; +2 a Acrobacias, Escalar, Pilotar.'
          }
        }
      ]
    },
    {
      level: 8,
      statBonuses: [{ stat: 'ST', bonus: 2 }, { stat: 'DX', bonus: 2 }, { stat: 'SPI', bonus: 1 }],
      skillBonuses: [],
      abilities: [
        {
          id: 'tyrant_seq8_wrath',
          name: { en: 'Wrath', es: 'Ira' },
          type: 'active',
          spiCost: 0, // Uses Wrath points
          description: {
            en: 'Accumulate 4 wrath by hitting/being hit. At 4 wrath: Rampage (3 attacks at 0/-2/-4) or Raging Blow (+3 hit/dmg, ignores 2 DR).',
            es: 'Acumula 4 de ira al golpear/ser golpeado. A 4 de ira: Frenesí (3 ataques a 0/-2/-4) o Golpe Rabioso (+3 ataque/daño, ignora 2 RD).'
          }
        },
        {
          id: 'tyrant_seq8_scales',
          name: { en: 'Phantom Scales (Reinforced)', es: 'Escamas Fantasma (Reforzadas)' },
          type: 'passive',
          description: {
            en: 'Scales thicken into DR 2 (physical). Grappling penalty increases to -4.',
            es: 'Las escamas se espesan a RD 2 (física). La penalización de apresamiento aumenta a -4.'
          }
        },
        {
          id: 'tyrant_seq8_aquatic',
          name: { en: 'Amphibious (Reinforced)', es: 'Anfibio (Reforzado)' },
          type: 'passive',
          description: {
            en: 'Full Amphibious. Submerge 30 min without air. Dive 30m without protection.',
            es: 'Anfibio completo. Sumérgete 30 min sin aire. Bucea 30m sin protección.'
          }
        }
      ]
    },
    {
      level: 7,
      statBonuses: [{ stat: 'ST', bonus: 1 }, { stat: 'DX', bonus: 1 }, { stat: 'IQ', bonus: 1 }, { stat: 'SPI', bonus: 1 }],
      skillBonuses: [
        { skillId: 'navigation', bonus: 5 },
        { skillId: 'seamanship', bonus: 4 },
        { skillId: 'throwing', bonus: 4 },
        { skillId: 'weather_sense', bonus: 4 },
        { skillId: 'swimming', bonus: 3 },
        { skillId: 'mathematics', bonus: 2 }
      ],
      abilities: [
        {
          id: 'tyrant_seq7_aquatic',
          name: { en: 'Aquatic Affinity (Enhanced)', es: 'Afinidad Acuática (Mejorada)' },
          type: 'passive',
          description: {
            en: 'All skill rolls gain +1 while at sea or aboard a vessel.',
            es: 'Todas las tiradas de habilidad ganan +1 estando en el mar o en un barco.'
          }
        },
        {
          id: 'tyrant_seq7_navigator',
          name: { en: 'Navigator\\'s Precision', es: 'Precisión de Navegante' },
          type: 'passive',
          description: {
            en: 'Accurately judge distance. Throw weapons at full skill with eyes closed after locating target.',
            es: 'Juzga la distancia con precisión. Arroja armas con habilidad completa con los ojos cerrados tras localizar el objetivo.'
          }
        },
        {
          id: 'tyrant_seq7_water_spells',
          name: { en: 'Water Spells', es: 'Hechizos de Agua' },
          type: 'active',
          spiCost: 1, // Varies
          description: {
            en: 'Suffocation Film (2 SPI): Target suffocates. Azure Wave (2 SPI): Knock targets back 1d meters. Restorative Waters (1 SPI): Restore 1d-2 HP. Aqueous Cleanse (1 SPI).',
            es: 'Película de Asfixia (2 SPI): Asfixia. Ola Azur (2 SPI): Empuja enemigos 1d metros. Aguas Restaurativas (1 SPI): Cura 1d-2 HP. Limpieza Acuosa (1 SPI).'
          }
        },
        {
          id: 'tyrant_seq7_wrath',
          name: { en: 'Wrath — Roar', es: 'Ira — Rugido' },
          type: 'active',
          spiCost: 1,
          description: {
            en: 'Roar at target within 20m. Will-2 or target enters uncontrolled berserk rage.',
            es: 'Ruge a un objetivo a 20m. Voluntad-2 o entra en estado berserk incontrolable.'
          }
        },
        {
          id: 'tyrant_seq7_scales',
          name: { en: 'Phantom Scales (Mastered)', es: 'Escamas Fantasma (Maestría)' },
          type: 'passive',
          description: {
            en: 'DR increases to 4 (physical). Extends to cover throat and eyes. Lasts 25 mins.',
            es: 'La RD aumenta a 4 (física). Cubre garganta y ojos. Dura 25 minutos.'
          }
        },
        {
          id: 'tyrant_seq7_eidetic',
          name: { en: 'Eidetic Memory', es: 'Memoria Eidética' },
          type: 'passive',
          description: {
            en: '+5 to remember things after one reading; near-perfect recall.',
            es: '+5 para recordar cosas tras una lectura; recuerdo casi perfecto.'
          }
        },
        {
          id: 'tyrant_seq7_direction',
          name: { en: 'Absolute Direction', es: 'Dirección Absoluta' },
          type: 'passive',
          description: {
            en: 'Always know north. Never get lost. +3 to Navigation/Body Sense.',
            es: 'Siempre sabe dónde está el norte. Nunca se pierde. +3 a Navegación/Sentido Corporal.'
          }
        }
      ]
    },
    {
      level: 6,
      statBonuses: [
        { stat: 'SPI', bonus: 3 },
        { stat: 'ST', bonus: 1 },
        { stat: 'HT', bonus: 1 }
      ],
      skillBonuses: [],
      abilities: [
        {
          id: 'tyrant_seq6_main',
          name: { en: 'Wind-blessed', es: 'Bendecido por el Viento' },
          type: 'active',
          spiCost: 2,
          description: {
            en: 'Can control winds and fly.',
            es: 'Puede controlar los vientos y volar.'
          }
        }
      ]
    }
  ]
};
`;
fs.writeFileSync('src/data/pathways/tyrant.ts', tyrantTs);


// 3. White Tower Pathway
const whiteTowerTs = `import { Pathway } from '../types';

export const whiteTowerPathway: Pathway = {
  id: 'white_tower',
  name: { en: 'White Tower Pathway', es: 'Senda de la Torre Blanca' },
  sequences: [
    {
      level: 9,
      statBonuses: [{ stat: 'SPI', bonus: 3 }, { stat: 'IQ', bonus: 1 }],
      skillBonuses: [
        { skillId: 'research', bonus: 3 },
        { skillId: 'speed_reading', bonus: 2 },
        { skillId: 'ritualistic_magic', bonus: 2 }
      ],
      abilities: [
        {
          id: 'white_seq9_reading',
          name: { en: 'Reading — Knowledge Wealth', es: 'Lectura — Riqueza de Conocimiento' },
          type: 'active',
          spiCost: 0,
          description: {
            en: 'Roll IQ to recall general knowledge from books, even if not specifically researched. Learn languages in half the time.',
            es: 'Tira IQ para recordar conocimiento general de libros. Aprende idiomas en la mitad del tiempo.'
          }
        },
        {
          id: 'white_seq9_eidetic',
          name: { en: 'Eidetic Memory', es: 'Memoria Eidética' },
          type: 'passive',
          description: {
            en: '+5 to remember things after one reading; near-perfect recall.',
            es: '+5 para recordar cosas tras una lectura; recuerdo casi perfecto.'
          }
        }
      ]
    },
    {
      level: 8,
      statBonuses: [{ stat: 'IQ', bonus: 2 }, { stat: 'SPI', bonus: 2 }],
      skillBonuses: [
        { skillId: 'observation', bonus: 2 },
        { skillId: 'ritualistic_magic', bonus: 4 }
      ],
      abilities: [
        {
          id: 'white_seq8_fluid',
          name: { en: 'Fluid Intellect', es: 'Intelecto Fluido' },
          type: 'passive',
          description: {
            en: 'IQ-2 to unfamiliar IQ rolls; can attempt VH skills without default penalties.',
            es: 'IQ-2 a tiradas de IQ no familiares; puede intentar habilidades Muy Difíciles sin penalizaciones base.'
          }
        },
        {
          id: 'white_seq8_reading',
          name: { en: 'Reading (Reinforced)', es: 'Lectura (Reforzada)' },
          type: 'passive',
          description: {
            en: 'IQ roll for general knowledge gains +2. Obscure material penalties reduced by 2. Language learning time reduced to 1/3.',
            es: 'Tirada de IQ de conocimiento general gana +2. Penalizaciones de material oscuro reducidas en 2. Idiomas en 1/3 de tiempo.'
          }
        }
      ]
    },
    {
      level: 7,
      statBonuses: [{ stat: 'IQ', bonus: 1 }, { stat: 'DX', bonus: 1 }, { stat: 'SPI', bonus: 2 }],
      skillBonuses: [
        { skillId: 'criminology', bonus: 5 },
        { skillId: 'forensics', bonus: 5 },
        { skillId: 'intelligence_analysis', bonus: 4 },
        { skillId: 'ritualistic_magic', bonus: 2 },
        { skillId: 'guns_pistol', bonus: 3 },
        { skillId: 'brawling', bonus: 3 }
      ],
      abilities: [
        {
          id: 'white_seq7_reconstruction',
          name: { en: 'Reconstruction', es: 'Reconstrucción' },
          type: 'active',
          spiCost: 1,
          description: {
            en: 'Requires an item from the scene. Roll Ritualistic Magic to see a sensory flash of the past from the item\\'s perspective.',
            es: 'Requiere un objeto de la escena. Tira Magia Ritualística para ver un flash sensorial del pasado desde la perspectiva del objeto.'
          }
        },
        {
          id: 'white_seq7_recall',
          name: { en: 'Recall (Reinforced)', es: 'Recuerdo (Reforzado)' },
          type: 'passive',
          description: {
            en: '+4 to remember any fact personally encountered. Touch-based memory recovery extends to objects touched in the past 24 hours.',
            es: '+4 para recordar cualquier hecho encontrado personalmente. La recuperación de memoria abarca objetos tocados en las últimas 24 horas.'
          }
        },
        {
          id: 'white_seq7_eye',
          name: { en: 'Eye of the Mind', es: 'Ojo de la Mente' },
          type: 'passive',
          description: {
            en: 'Can analyze a scene in a single minute per item. Obscure material suffers only -3 penalty.',
            es: 'Analiza una escena en un solo minuto por objeto. El material oscuro solo sufre un -3 de penalización.'
          }
        },
        {
          id: 'white_seq7_ratiocination',
          name: { en: 'Ratiocination (Reinforced)', es: 'Raciocinio (Reforzado)' },
          type: 'passive',
          description: {
            en: 'Gains +3 to rolls reconstructing a conclusion from scattered clues. Time drops to 1d3 minutes.',
            es: 'Gana +3 a tiradas reconstruyendo conclusiones de pistas. El tiempo baja a 1d3 minutos.'
          }
        }
      ]
    },
    {
      level: 6,
      statBonuses: [
        { stat: 'SPI', bonus: 3 },
        { stat: 'ST', bonus: 1 },
        { stat: 'HT', bonus: 1 }
      ],
      skillBonuses: [],
      abilities: [
        {
          id: 'white_seq6_main',
          name: { en: 'Polymath', es: 'Erudito' },
          type: 'active',
          spiCost: 2,
          description: {
            en: 'Can analyze and mimic abilities through observation.',
            es: 'Puede analizar e imitar habilidades a través de la observación.'
          }
        }
      ]
    }
  ]
};
`;
fs.writeFileSync('src/data/pathways/white_tower.ts', whiteTowerTs);

console.log("Fixed sun.ts, tyrant.ts, white_tower.ts");
