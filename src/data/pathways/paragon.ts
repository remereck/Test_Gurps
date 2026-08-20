import { Pathway } from '../types';

export const paragonPathway: Pathway = {
  id: 'paragon',
  name: { en: 'Paragon Pathway', es: 'Senda del Parangón' },
  sequences: [
    {
      level: 9,
      name: { en: 'Savant', es: 'Sabio' },
      statBonuses: [
        { stat: 'IQ', bonus: 2 },
        { stat: 'SPI', bonus: 1 }
      ],
      skillBonuses: [
        { skillId: 'engineering', bonus: 3 },
        { skillId: 'mechanic', bonus: 3 }, // Steam Engines
        { skillId: 'chemistry', bonus: 2 },
        { skillId: 'research', bonus: 2 },
        { skillId: 'inventor', bonus: 2 } // Wildcard
      ],
      abilities: [
        {
          id: 'paragon_seq9_recall',
          name: { en: 'Recall — Total Memory', es: 'Recuerdo — Memoria Total' },
          type: 'passive',
          description: {
            en: 'Recall every piece of knowledge and experience encountered. No roll required. Understand operation of any mechanism within 1 minute (IQ roll, no penalty).',
            es: 'Recuerda todo el conocimiento y experiencia que haya encontrado. Sin tirada. Comprende el funcionamiento de cualquier mecanismo en 1 min (tirada de IQ sin penalidad).'
          }
        },
        {
          id: 'paragon_seq9_rapid_analysis',
          name: { en: 'Rapid Analysis', es: 'Análisis Rápido' },
          type: 'passive',
          description: {
            en: 'Improvised devices and repairs take half the normal construction time.',
            es: 'Los dispositivos improvisados y las reparaciones toman la mitad del tiempo normal.'
          }
        }
      ]
    },
    {
      level: 8,
      name: { en: 'Archaeologist', es: 'Arqueólogo' },
      statBonuses: [
        { stat: 'IQ', bonus: 1 },
        { stat: 'ST', bonus: 1 },
        { stat: 'HT', bonus: 1 },
        { stat: 'SPI', bonus: 1 }
      ],
      skillBonuses: [
        { skillId: 'ritualistic_magic', bonus: 1 },
        { skillId: 'history', bonus: 3 },
        { skillId: 'survival_any', bonus: 2 },
        { skillId: 'occultism', bonus: 3 }
      ],
      abilities: [
        {
          id: 'paragon_seq8_fluid_intellect',
          name: { en: 'Fluid Intellect', es: 'Intelecto Fluido' },
          type: 'passive',
          description: {
            en: 'IQ -2 to unfamiliar IQ rolls; can attempt VH skills.',
            es: 'IQ -2 a tiradas de IQ desconocidas; puede intentar habilidades Muy Difíciles.'
          }
        },
        {
          id: 'paragon_seq8_artifact_lore',
          name: { en: 'Artifact Lore', es: 'Conocimiento de Artefactos' },
          type: 'passive',
          description: {
            en: 'Identify age/origin/purpose of artifact by sight/touch. Rare items need History/Occultism -2 to -6.',
            es: 'Identifica edad/origen/propósito del artefacto con la vista/tacto. Ítems raros piden Historia/Ocultismo de -2 a -6.'
          }
        },
        {
          id: 'paragon_seq8_ruin_nav',
          name: { en: 'Ruin Navigation', es: 'Navegación de Ruinas' },
          type: 'passive',
          description: {
            en: 'Navigate ancient ruins/underground without penalty. Detect traps and structural hazards at Per +2.',
            es: 'Navega ruinas antiguas/subterráneos sin penalidad. Detecta trampas y peligros estructurales con Percepción +2.'
          }
        },
        {
          id: 'paragon_seq8_recall',
          replaces: 'paragon_seq9_recall',
          name: { en: 'Total Memory+', es: 'Memoria Total+' },
          type: 'passive',
          description: {
            en: 'Total Memory: Recall every piece of knowledge and experience encountered. No roll required. Understand operation of any mechanism within 1 minute (IQ roll, no penalty), Total Memory+ Can recall {{tactile/spatial memory}} (feel of an object, precise layout of a space) and time to understand mechanism drops to {{30 seconds}}.',
            es: 'Memoria Total: Recuerda todo el conocimiento y experiencia que haya encontrado. Sin tirada. Comprende el funcionamiento de cualquier mecanismo en 1 min (tirada de IQ sin penalidad), Memoria Total+ Puede recordar {{memorias táctiles/espaciales}} (textura de objeto, plano exacto de un lugar) y el tiempo para entender mecanismos se reduce a {{30 seg}}.'
          }
        },
        {
          id: 'paragon_seq8_rapid_analysis',
          replaces: 'paragon_seq9_rapid_analysis',
          name: { en: 'Rapid Analysis+', es: 'Análisis Rápido+' },
          type: 'passive',
          description: {
            en: 'Rapid Analysis: Improvised devices and repairs take half the normal construction time, Rapid Analysis+ Improvised devices and repairs take {{1/4}} normal construction time.',
            es: 'Análisis Rápido: Los dispositivos improvisados y las reparaciones toman la mitad del tiempo normal, Análisis Rápido+ Dispositivos improvisados y reparaciones toman {{1/4}} del tiempo normal.'
          }
        }
      ]
    },
    {
      level: 7,
      name: { en: 'Appraiser', es: 'Tasador' },
      statBonuses: [
        { stat: 'Per', bonus: 2 }
      ],
      skillBonuses: [
        { skillId: 'appraisal', bonus: 6 }
      ],
      abilities: [
        {
          id: 'paragon_seq7_appraisal',
          name: { en: 'Appraisal', es: 'Tasación' },
          type: 'passive',
          description: {
            en: 'Instantly identify general purpose/dangers/domain of Beyonder items. Rare items: roll Appraisal (success = 1 property, success by 3+ = all immediate dangers). Instinctively knows safest way to handle.',
            es: 'Identifica propósito/peligros/dominio de objetos Beyonder al instante. Raros: tira Tasación (éxito = 1 propiedad, éxito por 3+ = todos los peligros). Sabe instintivamente la forma segura de manejar.'
          }
        },
        {
          id: 'paragon_seq7_total_memory',
          replaces: 'paragon_seq8_recall',
          name: { en: 'Total Memory++', es: 'Memoria Total++' },
          type: 'passive',
          description: {
            en: 'Total Memory+: Recall every piece of knowledge. Understand mechanism within 30 seconds. Can recall tactile/spatial memory, Total Memory++ Can recall exact {{spiritual signature}} of appraised items and tactile memory extends to {{textures/spiritual resonance}}.',
            es: 'Memoria Total+: Recuerda todo el conocimiento. Entiende mecanismos en 30 seg. Puede recordar memorias táctiles/espaciales, Memoria Total++ Puede recordar la {{firma espiritual exacta}} de objetos tasados y la memoria táctil abarca {{texturas/resonancia espiritual}}.'
          }
        },
        {
          id: 'paragon_seq7_rapid_analysis',
          replaces: 'paragon_seq8_rapid_analysis',
          name: { en: 'Rapid Analysis++', es: 'Análisis Rápido++' },
          type: 'passive',
          description: {
            en: 'Rapid Analysis+: Improvised devices and repairs take 1/4 normal construction time, Rapid Analysis++ 1/4 time becomes {{1/5 time}} (min 1 sec) and you can appraise a common item instantly as a {{free action}}.',
            es: 'Análisis Rápido+: Dispositivos improvisados y reparaciones toman 1/4 del tiempo normal, Análisis Rápido++ El tiempo se vuelve {{1/5}} (mín 1 seg) y puedes tasar objetos comunes al instante como {{acción libre}}.'
          }
        }
      ]
    },
    {
      level: 6,
      name: { en: 'Artisan', es: 'Artesano' },
      statBonuses: [
        { stat: 'SPI', bonus: 3 },
        { stat: 'ST', bonus: 1 },
        { stat: 'HT', bonus: 1 }
      ],
      skillBonuses: [],
      abilities: [
        {
          id: 'paragon_seq6_main',
          name: { en: 'Artisan', es: 'Artesano' },
          type: 'active',
          spiCost: 2,
          description: {
            en: 'Can craft mystical items and mechanical constructs.',
            es: 'Puede fabricar objetos místicos y constructos mecánicos.'
          }
        }
      ]
    }
  ]
};
