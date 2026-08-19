import { Pathway } from '../types';

export const motherPathway: Pathway = {
  id: 'mother',
  name: { en: 'Mother Pathway', es: 'Senda de la Madre' },
  sequences: [
    {
      level: 9,
      name: { en: 'Planter', es: 'Plantador' },
      statBonuses: [
        { stat: 'ST', bonus: 3 },
        { stat: 'SPI', bonus: 2 },
        { stat: 'HT', bonus: 1 }
      ],
      skillBonuses: [
        { skillId: 'farming', bonus: 6 },
        { skillId: 'gardening', bonus: 6 },
        { skillId: 'naturalist', bonus: 4 },
        { skillId: 'herbal_medicine', bonus: 2 },
        { skillId: 'weather_sense', bonus: 4 }
      ],
      abilities: [
        {
          id: 'mother_seq9_tools',
          name: { en: 'Farming Tools Proficiency', es: 'Proficiencia en Herramientas Agrícolas' },
          type: 'passive',
          description: {
            en: 'When fighting with a farming tool, choose the most appropriate skill and gain +2 to the attack roll.',
            es: 'Al luchar con una herramienta agrícola, elige la habilidad más apropiada y gana +2 a la tirada de ataque.'
          }
        }
      ]
    },
    {
      level: 8,
      name: { en: 'Doctor', es: 'Doctor' },
      statBonuses: [
        { stat: 'SPI', bonus: 2 }
      ],
      skillBonuses: [
        { skillId: 'physician', bonus: 5 },
        { skillId: 'surgery', bonus: 3 },
        { skillId: 'pharmacy', bonus: 3 },
        { skillId: 'first_aid', bonus: 3 },
        { skillId: 'diagnosis', bonus: 3 }
      ],
      abilities: [
        {
          id: 'mother_seq8_ancient_hermes',
          name: { en: 'Ancient Hermes', es: 'Hermes Antiguo' },
          type: 'passive',
          description: {
            en: 'Fluent — can speak, read, and write this dead mystical language.',
            es: 'Fluido — puede hablar, leer y escribir este antiguo lenguaje místico.'
          }
        },
        {
          id: 'mother_seq8_soul_suture',
          name: { en: 'Soul Suture', es: 'Sutura del Alma' },
          type: 'active',
          spiCost: 1,
          description: {
            en: 'Repairs spiritual and physical damage, healing 1d6+2 HP in a conscious, stable target over 10 mins. Crit success heals 2d6+2. Affects living targets only, cannot deal damage.',
            es: 'Repara daño físico y espiritual, sanando 1d6+2 HP en un objetivo consciente y estable durante 10 min. Éxito crítico sana 2d6+2. Afecta solo a vivos, no causa daño.'
          }
        },
        {
          id: 'mother_seq8_spirit_vision',
          name: { en: 'Spirit Vision (Enhanced)', es: 'Visión Espiritual (Mejorada)' },
          type: 'passive',
          description: {
            en: 'Activates automatically at no SPI cost when examining a patient. Sees Ether Body, spiritual injuries, and emotional state. Spirit Vision and Diagnosis gain +2 while treating a patient.',
            es: 'Se activa automáticamente sin coste de SPI al examinar un paciente. Ve Cuerpo Etérico, heridas espirituales y estado emocional. Visión Espiritual y Diagnóstico ganan +2.'
          }
        },
        {
          id: 'mother_seq8_soothe',
          name: { en: 'Soothe', es: 'Calmar' },
          type: 'active',
          spiCost: 2,
          description: {
            en: 'When a target within arm\'s reach fails a SPI roll causing CoR, roll Physician (-2) to soothe wound, reducing net CoR gain by 1. Must use within 1 min of event.',
            es: 'Cuando un objetivo a distancia de brazo falla SPI ganando CoR, tira Médico (-2) para calmar la herida, reduciendo CoR neto en 1. Usar dentro de 1 min del evento.'
          }
        },
        {
          id: 'mother_seq8_farming_tools',
          name: { en: 'Farming Tools Proficiency (Reinforced)', es: 'Proficiencia en Herramientas Agrícolas (Reforzada)' },
          type: 'passive',
          description: {
            en: 'Tool bonus increases to +4. Can apply First Aid or emergency procedures with any tool at hand with no penalty.',
            es: 'Bono de herramienta aumenta a +4. Puede aplicar Primeros Auxilios o emergencias con cualquier herramienta a mano sin penalización.'
          }
        }
      ]
    },
    {
      level: 7,
      name: { en: 'Harvest Priest', es: 'Sacerdote de la Cosecha' },
      statBonuses: [
        { stat: 'IQ', bonus: 1 },
        { stat: 'Per', bonus: 1 },
        { stat: 'Will', bonus: 1 },
        { stat: 'SPI', bonus: 2 }
      ],
      skillBonuses: [
        { skillId: 'farming', bonus: 4 },
        { skillId: 'naturalist', bonus: 3 },
        { skillId: 'survival_any', bonus: 2 },
        { skillId: 'ritualistic_magic', bonus: 2 } // Nature, Life, Weather
      ],
      abilities: [
        {
          id: 'mother_seq7_disease_resist',
          name: { en: 'Disease Resistance', es: 'Resistencia a Enfermedades' },
          type: 'passive',
          description: {
            en: '+3 to HT vs disease and natural toxins.',
            es: '+3 a HT contra enfermedades y toxinas naturales.'
          }
        },
        {
          id: 'mother_seq7_command_plants',
          name: { en: 'Command Plants', es: 'Comandar Plantas' },
          type: 'active',
          spiCost: 2,
          description: {
            en: 'Exert authority over plant life within 20m. Simple commands for up to 1h. Intelligent plant creatures contest SPI vs Will (new roll each min). +3 resist if command harms them/allies.',
            es: 'Autoridad sobre vida vegetal en 20m. Órdenes simples hasta 1h. Plantas inteligentes contestan SPI vs Voluntad (nueva tirada cada min). +3 resistir si la orden daña a ellos/aliados.'
          }
        },
        {
          id: 'mother_seq7_weather_rituals',
          name: { en: 'Weather Rituals', es: 'Rituales Meteorológicos' },
          type: 'active',
          spiCost: 0,
          description: {
            en: 'Clear Skies (2 SPI): 200m radius, 1d6 min. Summon Rain (2 SPI): 200m radius, 1d6 min. Calm Winds (1 SPI): 100m radius, lasts 10 min.',
            es: 'Cielos Despejados (2 SPI): radio 200m, 1d6 min. Invocar Lluvia (2 SPI): radio 200m, 1d6 min. Calmar Vientos (1 SPI): radio 100m, dura 10 min.'
          }
        },
        {
          id: 'mother_seq7_natures_bounty',
          name: { en: 'Nature\'s Bounty', es: 'Recompensa de la Naturaleza' },
          type: 'active',
          spiCost: 1,
          description: {
            en: 'Accelerate plant growth in 5m radius (1 min). Produces food for 2 people. Does not affect magical/spiritually-altered flora.',
            es: 'Acelera crecimiento vegetal en 5m (1 min). Produce comida para 2 personas. No afecta flora mágica/alterada.'
          }
        },
        {
          id: 'mother_seq7_restorative_harvest',
          name: { en: 'Restorative Harvest', es: 'Cosecha Restauradora' },
          type: 'active',
          spiCost: 2,
          description: {
            en: 'Touch living plant to heal self/ally for 1d HP. Plant wilts for 24h and cannot be used again.',
            es: 'Toca planta viva para curar a ti/aliado por 1d HP. La planta se marchita por 24h y no puede reusarse.'
          }
        },
        {
          id: 'mother_seq7_spirit_vision_nature',
          name: { en: 'Spirit Vision (Nature)', es: 'Visión Espiritual (Naturaleza)' },
          type: 'active',
          spiCost: 1, // per min
          description: {
            en: 'Reads health/spiritual state of natural life. Senses disease/corruption within 100m.',
            es: 'Lee salud/estado espiritual de vida natural. Siente enfermedades/corrupción en 100m.'
          }
        },
        {
          id: 'mother_seq7_farming_tools',
          name: { en: 'Farming Tools (Mastered)', es: 'Herramientas Agrícolas (Maestría)' },
          type: 'passive',
          description: {
            en: 'Use any tool as weapon at no default penalty, attack bonus +5. Counts as Beyonder weapon to harm spirits.',
            es: 'Usa cualquier herramienta como arma sin penalidad, bono de ataque +5. Cuenta como arma Beyonder contra espíritus.'
          }
        },
        {
          id: 'mother_seq7_physician',
          name: { en: 'Physician (Supernatural)', es: 'Médico (Sobrenatural)' },
          type: 'passive',
          description: {
            en: '+3 Physician bonus applies to supernatural ailments. Healing time for natural diseases is halved.',
            es: 'Bono +3 de Médico se aplica a males sobrenaturales. Tiempo de cura para enfermedades naturales a la mitad.'
          }
        },
        {
          id: 'mother_seq7_potion_brewing',
          name: { en: 'Potion Brewing', es: 'Elaboración de Pociones' },
          type: 'passive',
          description: {
            en: '-1 penalty without lab eliminated when using natural ingredients. Brewing time for healing potions halved.',
            es: 'Penalidad -1 sin laboratorio eliminada con ingredientes naturales. Tiempo para pociones curativas a la mitad.'
          }
        }
      ]
    },
    {
      level: 6,
      name: { en: 'Biologist', es: 'Biólogo' },
      statBonuses: [
        { stat: 'SPI', bonus: 3 },
        { stat: 'ST', bonus: 1 },
        { stat: 'HT', bonus: 1 }
      ],
      skillBonuses: [],
      abilities: [
        {
          id: 'mother_seq6_main',
          name: { en: 'Biologist', es: 'Biólogo' },
          type: 'active',
          spiCost: 2,
          description: {
            en: 'Mastery over biological life and cross-breeding.',
            es: 'Maestría sobre la vida biológica y los cruces.'
          }
        }
      ]
    }
  ]
};
