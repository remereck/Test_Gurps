import { Pathway } from '../types';

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
        { skillId: 'navigation_sea', bonus: 2 },
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
          replaces: 'tyrant_seq9_scales',
          name: { en: 'Phantom Scales+', es: 'Escamas Fantasma+' },
          type: 'passive',
          description: {
            en: 'Phantom Scales: Illusory scales beneath the skin grant DR 1 vs physical impacts. Grapplers roll at -2 (slippery), Phantom Scales+ Scales thicken into {{DR 2}} (physical). Grappling penalty increases to {{-4}}.',
            es: 'Escamas Fantasma: Escamas ilusorias otorgan RD 1 vs impactos. Enemigos apresando tiran con -2, Escamas Fantasma+ Las escamas se espesan a {{RD 2}} (física). La penalización de apresamiento aumenta a {{-4}}.'
          }
        },
        {
          id: 'tyrant_seq8_aquatic',
          replaces: 'tyrant_seq9_aquatic',
          name: { en: 'Aquatic Affinity+', es: 'Afinidad Acuática+' },
          type: 'passive',
          description: {
            en: 'Aquatic Affinity: Submerge 10 min without air. Dive to 15m without HT rolls. Ignore underwater movement penalties, Aquatic Affinity+ {{Full Amphibious}}. Submerge {{30 min}} without air. Dive {{30m}} without protection.',
            es: 'Afinidad Acuática: Sumérgete 10 min sin aire. Bucea a 15m sin tiradas de HT. Ignora penalizadores bajo el agua, Afinidad Acuática+ {{Anfibio completo}}. Sumérgete {{30 min}} sin aire. Bucea {{30m}} sin protección.'
          }
        }
      ]
    },
    {
      level: 7,
      statBonuses: [{ stat: 'ST', bonus: 1 }, { stat: 'DX', bonus: 1 }, { stat: 'IQ', bonus: 1 }, { stat: 'SPI', bonus: 1 }],
      skillBonuses: [
        { skillId: 'navigation_sea', bonus: 5 },
        { skillId: 'seamanship', bonus: 4 },
        { skillId: 'throwing', bonus: 4 },
        { skillId: 'weather_sense', bonus: 4 },
        { skillId: 'swimming', bonus: 3 },
        { skillId: 'mathematics', bonus: 2 }
      ],
      abilities: [
        {
          id: 'tyrant_seq7_aquatic',
          replaces: 'tyrant_seq8_aquatic',
          name: { en: 'Aquatic Affinity++', es: 'Afinidad Acuática++' },
          type: 'passive',
          description: {
            en: 'Aquatic Affinity+: Full Amphibious, 30 min air, 30m dive, Aquatic Affinity++ All skill rolls gain {{+1}} while at sea or aboard a vessel.',
            es: 'Afinidad Acuática+: Anfibio completo, 30 min aire, 30m buceo, Afinidad Acuática++ Todas las tiradas de habilidad ganan {{+1}} estando en el mar o en un barco.'
          }
        },
        {
          id: 'tyrant_seq7_navigator',
          name: { en: 'Navigator\'s Precision', es: 'Precisión de Navegante' },
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
          description: {
            en: 'Water-based magical effects.\n\n{{Suffocation Film}}: Target suffocates.\n{{Azure Wave}}: Knock targets back 1d meters.\n{{Restorative Waters}}: Restore 1d-2 HP.\n{{Aqueous Cleanse}}: Clean dirt and toxins.',
            es: 'Efectos mágicos basados en agua.\n\n{{Película de Asfixia}}: El objetivo se asfixia.\n{{Ola Azur}}: Empuja enemigos 1d metros.\n{{Aguas Restaurativas}}: Cura 1d-2 HP.\n{{Limpieza Acuosa}}: Limpia suciedad y toxinas.'
          },
          spiOptions: [
            { name: { en: 'Suffocation Film', es: 'Película Asfixia' }, cost: 2 },
            { name: { en: 'Azure Wave', es: 'Ola Azur' }, cost: 2 },
            { name: { en: 'Restorative Waters', es: 'Aguas Restaurativas' }, cost: 1 },
            { name: { en: 'Aqueous Cleanse', es: 'Limpieza Acuosa' }, cost: 1 }
          ]
        },
        {
          id: 'tyrant_seq7_wrath',
          replaces: 'tyrant_seq8_wrath',
          name: { en: 'Wrath+', es: 'Ira+' },
          type: 'active',
          spiCost: 1,
          description: {
            en: 'Wrath: Accumulate 4 wrath by hitting/being hit. At 4 wrath: Rampage or Raging Blow, Wrath+ Adds Roar ability: Roar at target within {{20m}}. Target rolls {{Will-2}} or enters uncontrolled berserk rage.',
            es: 'Ira: Acumula 4 de ira. A 4 de ira: Frenesí o Golpe Rabioso, Ira+ Añade Rugido: Ruge a un objetivo a {{20m}}. Objetivo tira {{Voluntad-2}} o entra en estado berserk incontrolable.'
          }
        },
        {
          id: 'tyrant_seq7_scales',
          replaces: 'tyrant_seq8_scales',
          name: { en: 'Phantom Scales++', es: 'Escamas Fantasma++' },
          type: 'passive',
          description: {
            en: 'Phantom Scales+: Scales grant DR 2 (physical) and Grapplers -4, Phantom Scales++ DR increases to {{4 (physical)}}. Extends to cover {{throat and eyes}}. Lasts 25 mins.',
            es: 'Escamas Fantasma+: RD 2 física y -4 a apresar, Escamas Fantasma++ La RD aumenta a {{4 (física)}}. Se extiende para cubrir {{garganta y ojos}}. Dura 25 minutos.'
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
