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
          replaces: 'error_seq9_treasure',
          name: { en: 'Treasure Sense+', es: 'Sentido del Tesoro+' },
          type: 'passive',
          description: {
            en: 'Treasure Sense: Can sense the presence of valuable items within a 10-meter range. Vague pull stronger for higher value, Treasure Sense+ Treasure sense upgrades to {{20m}}. Read target micro-expressions: {{+2}} to Detect Lies, Body Language, Observation.',
            es: 'Sentido del Tesoro: Puede sentir la presencia de objetos valiosos en un rango de 10 metros. Un tirón vago que es más fuerte para valores más altos, Sentido del Tesoro+ El sentido del tesoro se actualiza a {{20m}}. Lee microexpresiones: {{+2}} a Detectar Mentiras, Lenguaje Corporal, Observación.'
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
          replaces: 'error_seq8_treasure',
          name: { en: 'Treasure Sense++', es: 'Sentido del Tesoro++' },
          type: 'passive',
          description: {
          en: 'Treasure Sense+: Treasure sense upgrades to 20m and read target micro-expressions (+2 bonus), Treasure Sense++ Treasure sense upgrades to {{30m}}, read target micro-expressions {{at a glance}}, and {{+3}} to Detect Lies, Body Language, Observation.',
            es: 'Sentido del Tesoro+: El sentido del tesoro a 20m y lee microexpresiones (+2 bono), Sentido del Tesoro++ El sentido del tesoro se actualiza a {{30m}}, lee microexpresiones {{de un vistazo}}, y {{+3}} a Detectar Mentiras, Lenguaje Corporal, Observación.'
            }
        },
        {
          id: 'error_seq7_mental',
          replaces: 'error_seq8_mental',
          name: { en: 'Mental Disruption+', es: 'Interrupción Mental+' },
          type: 'active',
          spiCost: 2,
          description: {
            en: 'Mental Disruption: Cause certain hallucinations to be experienced by a target. Target rolls Will-3. Effects last up to 1 hour or until they break free, Mental Disruption+ Target rolls Will{{-4}} and you can target up to {{2}} individuals simultaneously for {{2 SPI}}.',
            es: 'Interrupción Mental: Causa ciertas alucinaciones a un objetivo. El objetivo tira Voluntad-3. Los efectos duran hasta 1 hora o hasta que se liberen, Interrupción Mental+ El objetivo tira Voluntad{{-4}} y puedes apuntar hasta {{2}} personas a la vez por {{2 SPI}}.'
          }
        },
        {
          id: 'error_seq7_theft',
          replaces: 'error_seq8_reminder',
          name: { en: 'Reminder / Theft+', es: 'Recordatorio / Robo+' },
          type: 'active',
          description: {
            en: 'Reminder / Theft: Steal spiritual materials from a 2m distance as long as it interacts with the spirit world. Also steal small non-material items partially in contact with the spirit world, Reminder / Theft+ Steal spiritual materials from a {{10m}} distance and can steal {{actively guarded}} spiritual materials from {{containers/hands}}.',
            es: 'Recordatorio / Robo: Roba materiales espirituales a 2m de distancia mientras interactúen con el mundo espiritual. También roba pequeños objetos inmateriales, Recordatorio / Robo+ Roba materiales espirituales a {{10m}} de distancia y puede robar materiales espirituales {{vigilados de contenedores/manos}}.'
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
          description: {
            en: 'Can steal abstract concepts from others.\n\n{{Steal Ability}}: Temporarily steal a Beyonder ability. Roll SPI vs SPI.\n{{Steal Time}}: Steal someone\'s turn/time, causing them to skip an action while you gain it.',
            es: 'Puede robar conceptos abstractos de otros.\n\n{{Robar Habilidad}}: Roba temporalmente una habilidad Beyonder. Tira SPI vs SPI.\n{{Robar Tiempo}}: Roba el turno/tiempo de alguien, haciendo que pierdan su acción y tú la ganes.'
          },
          spiOptions: [
            { name: { en: 'Steal Ability', es: 'Robar Habilidad' }, cost: 2 },
            { name: { en: 'Steal Time', es: 'Robar Tiempo' }, cost: 3 }
          ]
        }
      ]
    }
  ]
};
