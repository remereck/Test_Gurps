import { Pathway } from '../types';

export const justiciarPathway: Pathway = {
  id: 'justiciar',
  name: { en: 'Justiciar Pathway', es: 'Senda del Justiciero' },
  sequences: [
    {
      level: 9,
      name: { en: 'Arbiter', es: 'Árbitro' },
      statBonuses: [
        { stat: 'ST', bonus: 1 },
        { stat: 'DX', bonus: 1 },
        { stat: 'Will', bonus: 1 },
        { stat: 'SPI', bonus: 1 }
      ],
      skillBonuses: [
        { skillId: 'brawling', bonus: 2 },
        { skillId: 'wrestling', bonus: 2 }
      ],
      abilities: [
        {
          id: 'justiciar_seq9_voice',
          name: { en: 'Voice', es: 'Voz' },
          type: 'passive',
          description: {
            en: '+2 to all rolls to influence others through speech.',
            es: '+2 a todas las tiradas para influenciar a otros mediante el habla.'
          }
        },
        {
          id: 'justiciar_seq9_authority',
          name: { en: 'Authority', es: 'Autoridad' },
          type: 'active',
          spiCost: 1,
          description: {
            en: '1 SPI for scene. Opposing NPCs roll Will; on failure suffer -1 to attack, defense, and Quick Contests vs Arbiter. Crit failure: penalty -2 and cannot attack Arbiter for 1d turns. Player chars feel strong pull but choose freely.',
            es: '1 SPI por escena. PNJs oponentes tiran Voluntad; si fallan sufren -1 al ataque, defensa y Competiciones Rápidas contra el Árbitro. Fallo crit: penalidad -2 y no pueden atacarlo por 1d turnos. PJs sienten el impulso pero son libres.'
          }
        }
      ]
    },
    {
      level: 8,
      name: { en: 'Sheriff', es: 'Alguacil' },
      statBonuses: [
        { stat: 'IQ', bonus: 1 },
        { stat: 'Per', bonus: 2 },
        { stat: 'SPI', bonus: 1 }
      ],
      skillBonuses: [
        { skillId: 'guns_any', bonus: 3 },
        { skillId: 'shortsword', bonus: 2 },
        { skillId: 'brawling', bonus: 2 },
        { skillId: 'criminology', bonus: 3 },
        { skillId: 'tracking', bonus: 2 }
      ],
      abilities: [
        {
          id: 'justiciar_seq8_eidetic_memory',
          name: { en: 'Eidetic Memory', es: 'Memoria Eidética' },
          type: 'passive',
          description: {
            en: '+5 to remember things after one reading; near-perfect recall.',
            es: '+5 para recordar cosas tras una lectura; memoria casi perfecta.'
          }
        },
        {
          id: 'justiciar_seq8_evil_sense',
          name: { en: 'Evil Sense', es: 'Sentido del Mal' },
          type: 'passive',
          description: {
            en: 'Senses presence of Evil, Disorder, and Madness within 25m. Directional. High-Seq Beyonders can roll Will vs Per to hide.',
            es: 'Siente presencia del Mal, Desorden y Locura en 25m. Direccional. Beyonders de Alta Secuencia tiran Voluntad vs Percepción para ocultarse.'
          }
        },
        {
          id: 'justiciar_seq8_jurisdiction',
          name: { en: 'Jurisdiction', es: 'Jurisdicción' },
          type: 'active',
          spiCost: 0,
          description: {
            en: 'Intimidation/Admin contested by highest Will in area. Grants powers in stages: 0 (No trust), 1 (Mixed: Combat Reflexes, Sense Ext, +2 persuasion), 2 (Full: +1 to stats, Danger Sense). Retries after 24h.',
            es: 'Intimidación/Admin vs Voluntad más alta del área. Otorga poderes por etapas: 0 (Sin confianza), 1 (Mixta: Reflejos Combate, Ext. Sentidos, +2 persuasión), 2 (Total: +1 a stats, Sentido del Peligro). Reintento en 24h.'
          }
        },
        {
          id: 'justiciar_seq8_authority',
          name: { en: 'Authority (Reinforced)', es: 'Autoridad (Reforzada)' },
          type: 'passive',
          description: {
            en: 'Will penalty for opponents increases to -2 within Sheriff\'s Jurisdiction area.',
            es: 'La penalidad de Voluntad para oponentes aumenta a -2 dentro de la Jurisdicción del Alguacil.'
          }
        }
      ]
    },
    {
      level: 7,
      name: { en: 'Interrogator', es: 'Interrogador' },
      statBonuses: [
        { stat: 'ST', bonus: 2 },
        { stat: 'SPI', bonus: 5 }
      ],
      skillBonuses: [
        { skillId: 'brawling', bonus: 2 },
        { skillId: 'guns_any', bonus: 1 },
        { skillId: 'explosives_demolition', bonus: 2 }
      ],
      abilities: [
        {
          id: 'justiciar_seq7_illusory_torture',
          name: { en: 'Illusory Torture Devices', es: 'Dispositivos de Tortura Ilusorios' },
          type: 'active',
          spiCost: 1,
          description: {
            en: 'Shape spirituality into torture device (held). Deals spirit body damage as Knife (thr-1 cut / sw-2 imp).',
            es: 'Forma espiritualidad en dispositivo de tortura (sostenido). Inflige daño de cuerpo espiritual como Cuchillo (thr-1 corte / sw-2 imp).'
          }
        },
        {
          id: 'justiciar_seq7_psychic_lashing',
          name: { en: 'Psychic Lashing', es: 'Latigazo Psíquico' },
          type: 'active',
          spiCost: 2,
          description: {
            en: 'Coats held object with illusory lightning for 1 min. Attacks deal +2 spirit body damage in addition to normal damage.',
            es: 'Cubre un objeto con rayo ilusorio por 1 min. Ataques infligen +2 de daño de cuerpo espiritual además del normal.'
          }
        },
        {
          id: 'justiciar_seq7_psychic_piercing',
          name: { en: 'Psychic Piercing', es: 'Perforación Psíquica' },
          type: 'active',
          spiCost: 1,
          description: {
            en: 'Range 5m. Target rolls HT or mentally Stunned 1 turn. Deals 2d6-3 spirit body damage.',
            es: 'Alcance 5m. Objetivo tira HT o queda Aturdido mentalmente 1 turno. Inflige 2d6-3 daño al cuerpo espiritual.'
          }
        },
        {
          id: 'justiciar_seq7_whip_of_pain',
          name: { en: 'Whip of Pain', es: 'Látigo del Dolor' },
          type: 'active',
          spiCost: 1, // continuous 1/turn
          description: {
            en: 'Deals 1d6-3 spirit body damage per turn (costs 1 SPI/turn). Target rolls HT or mentally Stunned. Subseq turns roll Will to recover.',
            es: 'Inflige 1d6-3 daño espiritual por turno (1 SPI/turno). Objetivo tira HT o Aturdido mentalmente. Siguientes turnos tira Voluntad para recuperar.'
          }
        },
        {
          id: 'justiciar_seq7_authority',
          name: { en: 'Authority (Mastered)', es: 'Autoridad (Maestría)' },
          type: 'passive',
          description: {
            en: 'Penalty within Jurisdiction increases to -4. Project Authority as free action once/scene: hostile NPCs in 10m hesitate for 1 turn (no actions except defense).',
            es: 'Penalidad en Jurisdicción aumenta a -4. Proyecta Autoridad como acción libre una vez/escena: PNJs hostiles en 10m dudan 1 turno (solo defensa).'
          }
        },
        {
          id: 'justiciar_seq7_jurisdiction',
          name: { en: 'Jurisdiction (Mastered)', es: 'Jurisdicción (Maestría)' },
          type: 'passive',
          description: {
            en: 'Knowledge of local laws/procedures extends to neighbouring jurisdictions. IQ bonus +4 for obscure/hidden regulations.',
            es: 'Conocimiento de leyes locales se extiende a jurisdicciones vecinas. Bono de IQ +4 para regulaciones ocultas/oscuras.'
          }
        }
      ]
    },
    {
      level: 6,
      name: { en: 'Judge', es: 'Juez' },
      statBonuses: [
        { stat: 'SPI', bonus: 3 },
        { stat: 'ST', bonus: 1 },
        { stat: 'HT', bonus: 1 }
      ],
      skillBonuses: [],
      abilities: [
        {
          id: 'justiciar_seq6_main',
          name: { en: 'Judge', es: 'Juez' },
          type: 'active',
          spiCost: 2,
          description: {
            en: 'Can formulate laws and sentence crimes.',
            es: 'Puede formular leyes y sentenciar crímenes.'
          }
        }
      ]
    }
  ]
};
