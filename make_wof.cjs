const fs = require('fs');

const tsCode = `import { Pathway } from '../types';

export const wheelOfFortunePathway: Pathway = {
  id: 'wheel_of_fortune',
  name: { en: 'Wheel of Fortune Pathway', es: 'Senda de la Rueda de la Fortuna' },
  sequences: [
    {
      level: 9,
      name: { en: 'Monster', es: 'Monstruo' },
      statBonuses: [
        { stat: 'SPI', bonus: 12 }
      ],
      skillBonuses: [
        { skillId: 'spiritual_perception', bonus: 2 },
        { skillId: 'spiritual_intuition', bonus: 1 }
      ],
      abilities: [
        {
          id: 'wof_seq9_monster_trance',
          name: { en: 'Monster Trance', es: 'Trance de Monstruo' },
          type: 'drawback',
          description: {
            en: 'Occasionally enters a trance-like state (GM\\'s discretion), usually triggered by strong fate currents. Unaware of surroundings and vulnerable.',
            es: 'Ocasionalmente entra en un estado de trance (a discreción del DJ), por fuertes corrientes de destino. Inconsciente del entorno y vulnerable.'
          }
        },
        {
          id: 'wof_seq9_foresight',
          name: { en: 'Foresight', es: 'Previsión' },
          type: 'passive',
          description: {
            en: 'Once per session, receives a spontaneous, unbidden vision of something about to happen (cryptic image/impression). Cannot be triggered on demand.',
            es: 'Una vez por sesión, recibe una visión espontánea de algo que está por suceder (imagen críptica). No puede ser activado a voluntad.'
          }
        },
        {
          id: 'wof_seq9_danger_premonition',
          name: { en: 'Danger Premonition', es: 'Premonición de Peligro' },
          type: 'passive',
          description: {
            en: 'Passive Danger Sense that includes premonitions of bad luck and fate-based traps, not only physical violence.',
            es: 'Sentido de Peligro pasivo que incluye premoniciones de mala suerte y trampas del destino, no solo violencia física.'
          }
        }
      ]
    },
    {
      level: 8,
      name: { en: 'Robot', es: 'Robot' },
      statBonuses: [
        { stat: 'SPI', bonus: 3 },
        { stat: 'IQ', bonus: 1 },
        { stat: 'DX', bonus: 2 }
      ],
      skillBonuses: [
        { skillId: 'mathematics', bonus: 4 }, // Applied
        { skillId: 'brawling', bonus: 2 },
        { skillId: 'guns_any', bonus: 2 }
      ],
      abilities: [
        {
          id: 'wof_seq8_divination_affinity',
          name: { en: 'Divination Affinity', es: 'Afinidad de Adivinación' },
          type: 'passive',
          description: {
            en: '+2 to all Divination and Anti-Divination rolls.',
            es: '+2 a todas las tiradas de Adivinación y Anti-Adivinación.'
          }
        },
        {
          id: 'wof_seq8_danger_sense',
          name: { en: 'Danger Sense', es: 'Sentido del Peligro' },
          type: 'passive',
          description: {
            en: 'GM warns of threats just before they strike; surprise is negated.',
            es: 'El DJ advierte de amenazas justo antes de que golpeen; se niega la sorpresa.'
          }
        },
        {
          id: 'wof_seq8_danger_calc',
          name: { en: 'Danger Calculation', es: 'Cálculo de Peligro' },
          type: 'passive',
          description: {
            en: 'Roughly guess which direction danger is coming from, even without making a roll. Complements Danger Sense.',
            es: 'Puede adivinar aproximadamente de qué dirección viene el peligro sin tirar. Complementa el Sentido del Peligro.'
          }
        },
        {
          id: 'wof_seq8_foresight',
          name: { en: 'Foresight (Reinforced)', es: 'Previsión (Reforzada)' },
          type: 'active',
          spiCost: 0,
          description: {
            en: 'Vision increases to twice per session. Can attempt to trigger vision once per day (1 min concentration, SPI roll -4).',
            es: 'La visión aumenta a dos veces por sesión. Puede intentar activar la visión una vez al día (1 min concentración, SPI -4).'
          }
        },
        {
          id: 'wof_seq8_danger_premonition',
          name: { en: 'Danger Premonition (Reinforced)', es: 'Premonición de Peligro (Reforzada)' },
          type: 'passive',
          description: {
            en: 'Now includes supernatural threats (curses, spirit attacks) and provides a 2-second warning before danger strikes.',
            es: 'Ahora incluye amenazas sobrenaturales (maldiciones, ataques) y proporciona 2 segundos de advertencia.'
          }
        }
      ]
    },
    {
      level: 7,
      name: { en: 'Lucky One', es: 'Afortunado' },
      statBonuses: [
        { stat: 'SPI', bonus: 2 }
      ],
      skillBonuses: [],
      abilities: [
        {
          id: 'wof_seq7_lucky_one',
          name: { en: 'Lucky One', es: 'Afortunado' },
          type: 'passive',
          description: {
            en: '5 rerolls per session.',
            es: '5 repeticiones de tirada por sesión.'
          }
        },
        {
          id: 'wof_seq7_passive_luck',
          name: { en: 'Passive Luck', es: 'Suerte Pasiva' },
          type: 'passive',
          description: {
            en: 'At session start roll 1d6: 1 (Find 1d6 soli. No passive luck). 2-3 (Luck die = 1d6). 4-5 (Luck die = 1d6+2). 6 (Luck die = 2d6). Once per session, after any 3d6 roll, subtract your luck die from the total (min 3) to negate critical failure.',
            es: 'Al inicio de sesión tira 1d6: 1 (Encuentras 1d6 soli, sin suerte pasiva). 2-3 (Dado de suerte = 1d6). 4-5 (1d6+2). 6 (2d6). Una vez por sesión, puedes restar tu dado de suerte a una tirada de 3d6 (mín 3) para negar fallo crítico.'
          }
        },
        {
          id: 'wof_seq7_foresight',
          name: { en: 'Foresight (Mastered)', es: 'Previsión (Maestría)' },
          type: 'passive',
          description: {
            en: 'Use Foresight up to 3 times per session. GM warns of impending danger at least 3 seconds before it occurs.',
            es: 'Usa Previsión hasta 3 veces por sesión. El DJ advierte de peligros 3 segundos antes de que ocurran.'
          }
        },
        {
          id: 'wof_seq7_premonition',
          name: { en: 'Premonition (Mastered)', es: 'Premonición (Maestría)' },
          type: 'passive',
          description: {
            en: 'When Premonition triggers, gain +3 (instead of +2) to any single roll made to avoid/mitigate the foreseen event. Can be applied after seeing roll result.',
            es: 'Cuando Premonición se activa, gana +3 a una tirada para evitar/mitigar el evento previsto. Puede aplicarse tras ver el resultado de la tirada.'
          }
        }
      ]
    },
    {
      level: 6,
      name: { en: 'Calamity Priest', es: 'Sacerdote de la Calamidad' },
      statBonuses: [
        { stat: 'SPI', bonus: 3 },
        { stat: 'ST', bonus: 1 },
        { stat: 'HT', bonus: 1 }
      ],
      skillBonuses: [],
      abilities: [
        {
          id: 'wof_seq6_main',
          name: { en: 'Calamity Priest', es: 'Sacerdote de la Calamidad' },
          type: 'active',
          spiCost: 2,
          description: {
            en: 'Can bring bad luck and disasters to enemies.',
            es: 'Puede traer mala suerte y desastres a los enemigos.'
          }
        }
      ]
    }
  ]
};
`;

fs.writeFileSync('src/data/pathways/wheel_of_fortune.ts', tsCode);
console.log("Wheel of Fortune Pathway created");
