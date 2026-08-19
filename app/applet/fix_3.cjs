const fs = require('fs');
const path = require('path');

// 1. Error Pathway
const errorTs = `import { Pathway } from '../types';

export const errorPathway: Pathway = {
  id: 'error',
  name: { en: 'Error Pathway', es: 'Senda de Error' },
  sequences: [
    {
      level: 9,
      statBonuses: [{ stat: 'SPI', bonus: 1 }],
      skillBonuses: [
        { skillId: 'observation', bonus: 2 }
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
`;
fs.writeFileSync('src/data/pathways/error.ts', errorTs);

// 2. Door Pathway
const doorTs = `import { Pathway } from '../types';

export const doorPathway: Pathway = {
  id: 'door',
  name: { en: 'Door Pathway', es: 'Senda de Puerta' },
  sequences: [
    {
      level: 9,
      statBonuses: [{ stat: 'SPI', bonus: 5 }],
      skillBonuses: [
        { skillId: 'running', bonus: 3 },
        { skillId: 'lockpicking', bonus: 6 },
        { skillId: 'climbing', bonus: 3 },
        { skillId: 'ritualistic_magic', bonus: 2 }
      ],
      abilities: [
        {
          id: 'door_seq9_opening',
          name: { en: 'Door Opening', es: 'Apertura de Puerta' },
          type: 'active',
          spiCost: 1,
          description: {
            en: 'Open any mundane lock by touch and will. Warded doors cost 1 SPI. Attack bodily doors for 1d-1 cut. Free Escape +2 vs mundane restraints.',
            es: 'Abre cualquier cerradura mundana al tacto. Puertas protegidas cuestan 1 SPI. Ataca puertas corporales por 1d-1 de corte. Escape gratis +2 vs restricciones mundanas.'
          }
        }
      ]
    },
    {
      level: 8,
      statBonuses: [{ stat: 'DX', bonus: 1 }, { stat: 'IQ', bonus: 1 }, { stat: 'SPI', bonus: 2 }],
      skillBonuses: [
        { skillId: 'sleight_of_hand', bonus: 4 },
        { skillId: 'escape', bonus: 3 },
        { skillId: 'acrobatics', bonus: 2 }
      ],
      abilities: [
        {
          id: 'door_seq8_spellcasting',
          name: { en: 'Trickmaster Spellcasting', es: 'Hechizos de Maestro de Trucos' },
          type: 'active',
          spiCost: 1,
          description: {
            en: 'Cast tricks (1 SPI each, 10m range): Flash (blind), Electric Shock (stun), Freezing (cold), Burning, Wind, Fog, Tumble, Loud Noise, Black Curtain, Escape Trick, Gas Transfer, Object Bounce.',
            es: 'Lanza trucos (1 SPI, rango 10m): Destello (ciega), Choque Eléctrico (aturde), Congelación, Quemadura, Viento, Niebla, Caída, Ruido Fuerte, Cortina Negra, Truco de Escape, Transferencia de Gas, Rebote de Objetos.'
          }
        },
        {
          id: 'door_seq8_opening',
          name: { en: 'Door Opening (Reinforced)', es: 'Apertura de Puerta (Reforzada)' },
          type: 'passive',
          description: {
            en: 'Open warded doors without a roll. Bodily-door attack deals 1d+1 cut. Escape bonus increases to +4.',
            es: 'Abre puertas protegidas sin tirar dados. El ataque de puerta corporal inflige 1d+1 de corte. El bono de escape aumenta a +4.'
          }
        }
      ]
    },
    {
      level: 7,
      statBonuses: [{ stat: 'IQ', bonus: 2 }, { stat: 'SPI', bonus: 3 }],
      skillBonuses: [
        { skillId: 'astrology', bonus: 4 },
        { skillId: 'ritualistic_magic', bonus: 3 }
      ],
      abilities: [
        {
          id: 'door_seq7_crystal',
          name: { en: 'Crystal Ball Focus', es: 'Foco de Bola de Cristal' },
          type: 'passive',
          description: {
            en: 'When using a crystal ball, gain +2 to Ritualistic Magic (divination) rolls.',
            es: 'Al usar una bola de cristal, gana +2 a las tiradas de Magia Ritualística (adivinación).'
          }
        },
        {
          id: 'door_seq7_interference',
          name: { en: 'Interference', es: 'Interferencia' },
          type: 'active',
          spiCost: 1,
          description: {
            en: 'Disrupt divination attempts against you. Roll SPI vs opponent. Success blurs their divination, critical success blocks it.',
            es: 'Interrumpe intentos de adivinación. Tira SPI vs oponente. El éxito nubla su adivinación, el éxito crítico la bloquea.'
          }
        },
        {
          id: 'door_seq7_opening',
          name: { en: 'Door Opening (Group)', es: 'Apertura de Puerta (Grupo)' },
          type: 'active',
          spiCost: 2,
          description: {
            en: 'Bring up to 3 additional people through a door or spatial obstacle. Usable twice per scene.',
            es: 'Lleva hasta 3 personas adicionales a través de una puerta u obstáculo espacial. Utilizable dos veces por escena.'
          }
        },
        {
          id: 'door_seq7_peephole',
          name: { en: 'Peephole', es: 'Mirilla' },
          type: 'active',
          spiCost: 1,
          description: {
            en: 'Creates a palm-sized invisible peephole through up to 1 meter of wood/stone for 1 minute.',
            es: 'Crea una mirilla invisible del tamaño de la palma a través de hasta 1 metro de madera/piedra durante 1 minuto.'
          }
        },
        {
          id: 'door_seq7_spellcasting',
          name: { en: 'Trickmaster Spellcasting (Reinforced)', es: 'Hechizos (Reforzados)' },
          type: 'passive',
          description: {
            en: 'Spells range doubled. Flash/Fog radii +2m. Escape Trick distance 10m. Gas Transfer 30m.',
            es: 'Rango de hechizos duplicado. Radios de Destello/Niebla +2m. Truco de Escape 10m. Transferencia de gas 30m.'
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
          id: 'door_seq6_main',
          name: { en: 'Scribe', es: 'Escriba' },
          type: 'active',
          spiCost: 2,
          description: {
            en: 'Can record and replicate Beyonder abilities.',
            es: 'Puede registrar y replicar habilidades de Beyonder.'
          }
        }
      ]
    }
  ]
};
`;
fs.writeFileSync('src/data/pathways/door.ts', doorTs);

// 3. Visionary Pathway
const visionaryTs = `import { Pathway } from '../types';

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
            en: 'Erases your presence from the target\\'s conscious mind. You remain physically present but they ignore you.',
            es: 'Borra tu presencia de la mente consciente del objetivo. Sigues estando presente físicamente pero te ignoran.'
          }
        },
        {
          id: 'visionary_seq7_frenzy',
          name: { en: 'Frenzy', es: 'Frenesí' },
          type: 'active',
          spiCost: 1,
          description: {
            en: 'Detonate a target\\'s emotions. Target rolls Will-3 or loses control, attacking indiscriminately.',
            es: 'Detona las emociones de un objetivo. El objetivo tira Voluntad-3 o pierde el control, atacando indiscriminadamente.'
          }
        },
        {
          id: 'visionary_seq7_placate',
          name: { en: 'Placate', es: 'Aplacar' },
          type: 'active',
          spiCost: 1,
          description: {
            en: 'Calm a target\\'s emotions instantly. Can stop frenzy or extreme emotional states.',
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
`;
fs.writeFileSync('src/data/pathways/visionary.ts', visionaryTs);

console.log('Fixed error.ts, door.ts, visionary.ts');
