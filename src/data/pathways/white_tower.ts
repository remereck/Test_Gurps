import { Pathway } from '../types';

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
      name: { en: 'Student of Ratiocination', es: 'Estudiante de Raciocinio' },
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
          replaces: 'white_seq9_reading',
          name: { en: 'Reading+', es: 'Lectura+' },
          type: 'passive',
          description: {
            en: 'Reading: Roll IQ to recall general knowledge from books, even if not specifically researched. Learn languages in half the time., {{Reading+: IQ roll for general knowledge gains +2. Obscure material penalties reduced by 2. Language learning time reduced to 1/3.}}',
            es: 'Lectura: Tira IQ para recordar conocimiento general de libros. Aprende idiomas en la mitad del tiempo., {{Lectura+: Tirada de IQ de conocimiento general gana +2. Penalizaciones de material oscuro reducidas en 2. Idiomas en 1/3 de tiempo.}}'
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
            en: 'Requires an item from the scene. Roll Ritualistic Magic to see a sensory flash of the past from the item\'s perspective.',
            es: 'Requiere un objeto de la escena. Tira Magia Ritualística para ver un flash sensorial del pasado desde la perspectiva del objeto.'
          }
        },
        {
          id: 'white_seq7_recall',
          replaces: 'white_seq9_eidetic',
          name: { en: 'Eidetic Memory+', es: 'Memoria Eidética+' },
          type: 'passive',
          description: {
            en: 'Eidetic Memory: +5 to remember things after one reading; near-perfect recall., {{Eidetic Memory+: +4 to remember any fact personally encountered. Touch-based memory recovery extends to objects touched in the past 24 hours.}}',
            es: 'Memoria Eidética: +5 para recordar cosas tras una lectura; recuerdo casi perfecto., {{Memoria Eidética+: +4 para recordar cualquier hecho encontrado personalmente. La recuperación de memoria abarca objetos tocados en las últimas 24 horas.}}'
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
          replaces: 'white_seq8_fluid',
          name: { en: 'Fluid Intellect+', es: 'Intelecto Fluido+' },
          type: 'passive',
          description: {
            en: 'Fluid Intellect: IQ-2 to unfamiliar IQ rolls; can attempt VH skills without default penalties., {{Fluid Intellect+: Gains +3 to rolls reconstructing a conclusion from scattered clues. Time drops to 1d3 minutes.}}',
            es: 'Intelecto Fluido: IQ-2 a tiradas de IQ no familiares; puede intentar habilidades Muy Difíciles sin penalizaciones base., {{Intelecto Fluido+: Gana +3 a tiradas reconstruyendo conclusiones de pistas. El tiempo baja a 1d3 minutos.}}'
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
