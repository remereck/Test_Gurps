import { Pathway } from '../types';

export const errorPathway: Pathway = {
  id: 'error',
  name: { en: 'Error Pathway', es: 'Senda de Error' },
  sequences: [
    {
      level: 9,
      statBonuses: [{ stat: 'ST', bonus: 1 }, { stat: 'DX', bonus: 1 }, { stat: 'SPI', bonus: 1 }],
      skillBonuses: [
        { skillId: 'observation', bonus: 2 },
        { skillId: 'knife', bonus: 3 },
        { skillId: 'shortsword', bonus: 3 },
        { skillId: 'sleight_of_hand', bonus: 4 },
        { skillId: 'pickpocket', bonus: 4 }
      ],
      abilities: [
        {
          id: 'error_seq9_treasure',
          name: { en: 'Treasure Sense', es: 'Sentido del Tesoro' },
          type: 'passive',
          description: {
            en: 'Can sense the presence of valuable items within a 10-meter range. Vague pull stronger for higher value.',
            es: 'Puede sentir la presencia de objetos valiosos en un rango de 10 metros. Un tirón vago que es más fuerte para valores más altos.'
          }
        }
      ]
    },
    {
      level: 8,
      statBonuses: [
        { stat: 'DX', bonus: 1 },
        { stat: 'IQ', bonus: 1 },
        { stat: 'SPI', bonus: 2 }
      ],
      skillBonuses: [
        { skillId: 'fast-talk', bonus: 5 },
        { skillId: 'acrobatics', bonus: 2 },
        { skillId: 'observation', bonus: 2 }
      ],
      abilities: [
        {
          id: 'error_seq8_mental',
          name: { en: 'Mental Disruption', es: 'Interrupción Mental' },
          type: 'active',
          spiCost: 1,
          description: {
            en: 'Cause certain hallucinations to be experienced by a target. Target rolls Will-3. Effects last up to 1 hour or until they break free.',
            es: 'Causa ciertas alucinaciones a un objetivo. El objetivo tira Voluntad-3. Los efectos duran hasta 1 hora o hasta que se liberen.'
          }
        },
        {
          id: 'error_seq8_reminder',
          name: { en: 'Reminder / Theft', es: 'Recordatorio / Robo' },
          type: 'active',
          description: {
            en: 'Steal spiritual materials from a 2m distance as long as it interacts with the spirit world. Also steal small non-material items partially in contact with the spirit world.',
            es: 'Roba materiales espirituales a 2m de distancia mientras interactúen con el mundo espiritual. También roba pequeños objetos inmateriales.'
          }
        },
        {
          id: 'error_seq8_treasure',
          name: { en: 'Superior Observation', es: 'Observación Superior' },
          type: 'passive',
          description: {
            en: 'Treasure sense upgrades to 20m. Read target micro-expressions: +2 to Detect Lies, Body Language, Observation.',
            es: 'El sentido del tesoro se actualiza a 20m. Lee microexpresiones: +2 a Detectar Mentiras, Lenguaje Corporal, Observación.'
          }
        }
      ]
    },
    {
      level: 7,
      statBonuses: [
        { stat: 'IQ', bonus: 1 },
        { stat: 'DX', bonus: 1 },
        { stat: 'SPI', bonus: 2 }
      ],
      skillBonuses: [
        { skillId: 'sleight_of_hand', bonus: 3 },
        { skillId: 'pickpocket', bonus: 3 },
        { skillId: 'stealth', bonus: 2 }
      ],
      abilities: [
        {
          id: 'error_seq7_decryption',
          name: { en: 'Decryption', es: 'Descifrado' },
          type: 'active',
          spiCost: 1,
          description: {
            en: 'Requires concentration and a physical item/scene. Roll IQ to reveal information (Trace, Standard, Sharp, Undeniable).',
            es: 'Requiere concentración y un objeto/escena física. Tira IQ para revelar información (Rastro, Estándar, Agudo, Innegable).'
          }
        },
        {
          id: 'error_seq7_knowledge',
          name: { en: 'Beyonder Knowledge', es: 'Conocimiento Beyonder' },
          type: 'passive',
          description: {
            en: 'Deep knowledge of mystical objects, sealed artifacts, and standard rituals.',
            es: 'Profundo conocimiento de objetos místicos, artefactos sellados y rituales estándar.'
          }
        },
        {
          id: 'error_seq7_observation',
          name: { en: 'Superior Observation (Reinforced)', es: 'Observación Superior (Reforzada)' },
          type: 'passive',
          description: {
            en: 'Range expands to 30m. Read micro-expressions at a glance. Detect Lies/Body Language bonus increases to +3.',
            es: 'El rango se expande a 30m. Lee microexpresiones de un vistazo. La bonificación aumenta a +3.'
          }
        },
        {
          id: 'error_seq7_mental',
          name: { en: 'Mental Disruption (Reinforced)', es: 'Interrupción Mental (Reforzada)' },
          type: 'active',
          spiCost: 2,
          description: {
            en: 'Will penalty increases to -4. Can target up to 2 individuals simultaneously for 2 SPI.',
            es: 'La penalización de Voluntad aumenta a -4. Puede apuntar hasta 2 personas a la vez por 2 SPI.'
          }
        },
        {
          id: 'error_seq7_theft',
          name: { en: 'Reminder / Theft (Reinforced)', es: 'Recordatorio / Robo (Reforzado)' },
          type: 'active',
          description: {
            en: 'Reminder distance increases to 10m. Can steal actively guarded spiritual materials from containers/hands.',
            es: 'La distancia de recordatorio aumenta a 10m. Puede robar materiales espirituales vigilados de contenedores/manos.'
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
          id: 'error_seq6_main',
          name: { en: 'Prometheus', es: 'Prometeo' },
          type: 'active',
          spiCost: 2,
          description: {
            en: 'Can steal abilities and time from others.',
            es: 'Puede robar habilidades y tiempo de otros.'
          }
        }
      ]
    }
  ]
};
