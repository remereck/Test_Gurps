import { Pathway } from '../types';

export const visionaryPathway: Pathway = {
  id: 'visionary',
  name: { en: 'Visionary Pathway', es: 'Senda de Visionario' },
  sequences: [
    {
      level: 9,
      statBonuses: [{ stat: 'IQ', bonus: 1 }, { stat: 'SPI', bonus: 2 }],
      skillBonuses: [
        { skillId: 'psychology', bonus: 3 },
        { skillId: 'body_language', bonus: 3 },
        { skillId: 'observation', bonus: 2 },
        { skillId: 'detect_lies', bonus: 2 }
      ],
      abilities: [
        {
          id: 'visionary_seq9_body_language',
          name: { en: 'Body Language Analysis', es: 'Análisis de Lenguaje Corporal' },
          type: 'active',
          spiCost: 1, // Actually uses FP, but representing generally
          description: {
            en: 'Analyze expressions/manners to reveal surface thoughts and dominant emotions. Sharp targets can sense observation.',
            es: 'Analiza expresiones/modales para revelar pensamientos superficiales y emociones dominantes. Objetivos astutos pueden sentirlo.'
          }
        }
      ]
    },
    {
      level: 8,
      statBonuses: [{ stat: 'IQ', bonus: 1 }, { stat: 'SPI', bonus: 2 }],
      skillBonuses: [
        { skillId: 'psychology', bonus: 2 },
        { skillId: 'detect_lies', bonus: 3 },
        { skillId: 'acting', bonus: 3 }
      ],
      abilities: [
        {
          id: 'visionary_seq8_mind_reading',
          name: { en: 'Mind Reading', es: 'Lectura Mental' },
          type: 'active',
          spiCost: 1,
          description: {
            en: 'Roll Psychology vs Will to read surface thoughts undetected. Predict immediate actions. 1 SPI/minute.',
            es: 'Tira Psicología vs Voluntad para leer pensamientos superficiales. Predice acciones inmediatas. 1 SPI/minuto.'
          }
        },
        {
          id: 'visionary_seq8_body_language',
          name: { en: 'Enhanced Body Language Analysis', es: 'Análisis de Lenguaje Corporal Mejorado' },
          type: 'passive',
          description: {
            en: 'Passively read deeper emotional states, spiritual condition, and hidden auras with no SPI cost. Now always-on.',
            es: 'Lee pasivamente estados emocionales más profundos, condiciones espirituales y auras ocultas sin costo. Siempre activo.'
          }
        }
      ]
    },
    {
      level: 7,
      statBonuses: [{ stat: 'IQ', bonus: 2 }, { stat: 'SPI', bonus: 3 }],
      skillBonuses: [
        { skillId: 'psychology', bonus: 4 },
        { skillId: 'hypnotism', bonus: 3 }
      ],
      abilities: [
        {
          id: 'visionary_seq7_psychiatrist',
          name: { en: 'Psychological Invisibility', es: 'Invisibilidad Psicológica' },
          type: 'active',
          spiCost: 2,
          description: {
            en: 'Erases your presence from the target\'s conscious mind. You remain physically present but they ignore you.',
            es: 'Borra tu presencia de la mente consciente del objetivo. Sigues estando presente físicamente pero te ignoran.'
          }
        },
        {
          id: 'visionary_seq7_frenzy',
          name: { en: 'Frenzy', es: 'Frenesí' },
          type: 'active',
          spiCost: 1,
          description: {
            en: 'Detonate a target\'s emotions. Target rolls Will-3 or loses control, attacking indiscriminately.',
            es: 'Detona las emociones de un objetivo. El objetivo tira Voluntad-3 o pierde el control, atacando indiscriminadamente.'
          }
        },
        {
          id: 'visionary_seq7_placate',
          name: { en: 'Placate', es: 'Aplacar' },
          type: 'active',
          spiCost: 1,
          description: {
            en: 'Calm a target\'s emotions instantly. Can stop frenzy or extreme emotional states.',
            es: 'Calma las emociones de un objetivo al instante. Puede detener el frenesí o estados emocionales extremos.'
          }
        },
        {
          id: 'visionary_seq7_mind_reading',
          name: { en: 'Mind Reading (Reinforced)', es: 'Lectura Mental (Reforzada)' },
          type: 'passive',
          description: {
            en: 'Mind Reading is faster and requires less focus. Surface thoughts are perceived effortlessly.',
            es: 'La lectura mental es más rápida y requiere menos enfoque. Los pensamientos superficiales se perciben sin esfuerzo.'
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
          id: 'visionary_seq6_main',
          name: { en: 'Hypnotist', es: 'Hipnotizador' },
          type: 'active',
          spiCost: 2,
          description: {
            en: 'Can hypnotize and subtly alter memories.',
            es: 'Puede hipnotizar y alterar sutilmente los recuerdos.'
          }
        }
      ]
    }
  ]
};
