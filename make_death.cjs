const fs = require('fs');

const tsCode = `import { Pathway } from '../types';

export const deathPathway: Pathway = {
  id: 'death',
  name: { en: 'Death Pathway', es: 'Senda de la Muerte' },
  sequences: [
    {
      level: 9,
      name: { en: 'Corpse Collector', es: 'Recolector de Cadáveres' },
      statBonuses: [
        { stat: 'SPI', bonus: 6 },
        { stat: 'ST', bonus: 1 },
        { stat: 'HT', bonus: 1 }
      ],
      skillBonuses: [
        { skillId: 'physician', bonus: 2 },
        { skillId: 'surgery', bonus: 1 }
      ],
      abilities: [
        {
          id: 'death_seq9_cold_resist',
          name: { en: 'Cold Resistance', es: 'Resistencia al Frío' },
          type: 'passive',
          description: {
            en: 'No penalties from cold environments; hypothermia rolls at +2.',
            es: 'Sin penalizaciones por entornos fríos; tiradas de hipotermia con +2.'
          }
        },
        {
          id: 'death_seq9_decay_resist',
          name: { en: 'Resistant (Decay and Corrosiveness)', es: 'Resistente (Decadencia y Corrosión)' },
          type: 'passive',
          description: {
            en: 'HT rolls to resist corrosiveness (acid, rust) and decay effects at +3.',
            es: 'Tiradas de HT para resistir corrosión (ácido, óxido) y efectos de decadencia con +3.'
          }
        },
        {
          id: 'death_seq9_fear_sunlight',
          name: { en: 'Fear of Sunlight and Purification', es: 'Miedo a la Luz Solar y Purificación' },
          type: 'drawback',
          description: {
            en: '-1 to Will, skills, and combat actions under strong holy/purified/sunlight effects. Must roll Will to approach source. Sunlight/purification/holy attacks gain +1 against you.',
            es: '-1 a Voluntad, habilidades y acciones de combate bajo fuertes efectos sagrados/purificados/luz solar. Debe tirar Voluntad para acercarse. Ataques de luz solar/sagrados ganan +1.'
          }
        },
        {
          id: 'death_seq9_undead_deterrence',
          name: { en: 'Undead Deterrence', es: 'Disuasión de No-Muertos' },
          type: 'passive',
          description: {
            en: 'Mindless undead (IQ 5-) with SPI <= yours ignore you unless provoked. Intelligent/controlled undead may roll Will to act against you. No effect on SPI > yours or Seq 5+ creations.',
            es: 'No-muertos sin mente con SPI <= al tuyo te ignoran salvo provocación. Inteligentes/controlados tiran Voluntad para actuar. Sin efecto si su SPI es mayor o creaciones de Seq 5+.'
          }
        },
        {
          id: 'death_seq9_undead_detect',
          name: { en: 'Undead Detection', es: 'Detección de No-Muertos' },
          type: 'passive',
          description: {
            en: 'Detect undead and spirit creatures within 15 meters without rolling. Observation rolls to understand them at +3.',
            es: 'Detecta criaturas no-muertas y espíritus en 15 metros sin tirar. Tiradas de observación para entenderlos con +3.'
          }
        },
        {
          id: 'death_seq9_spirit_vision',
          name: { en: 'Spirit Vision', es: 'Visión Espiritual' },
          type: 'active',
          spiCost: 1, // per minute
          description: {
            en: 'See spiritual entities and Ether Body of living beings for limited health/spiritual analysis.',
            es: 'Ve entidades espirituales y el Cuerpo Etérico de seres vivos para análisis limitado de salud/espiritual.'
          }
        }
      ]
    },
    {
      level: 8,
      name: { en: 'Gravedigger', es: 'Sepulturero' },
      statBonuses: [
        { stat: 'DX', bonus: 2 },
        { stat: 'SPI', bonus: 3 }
      ],
      skillBonuses: [
        { skillId: 'occultism', bonus: 4 },
        { skillId: 'hidden_lore_spirits', bonus: 3 },
        { skillId: 'ritualistic_magic', bonus: 2 }
      ],
      abilities: [
        {
          id: 'death_seq8_spirit_comm',
          name: { en: 'Spirit Communication', es: 'Comunicación Espiritual' },
          type: 'active',
          spiCost: 1,
          description: {
            en: 'Communicate with nearby spirits and command them to do simple actions (grasp, immobilize, reveal info). Range 10 ft, 1 min. Spirits make ST vs target ST to grapple.',
            es: 'Comunícate con espíritus cercanos y ordénales acciones simples (agarrar, inmovilizar, revelar info). Alcance 10 pies, 1 min. El espíritu tira ST vs ST para agarrar.'
          }
        },
        {
          id: 'death_seq8_eye_death',
          name: { en: 'Eye of Death', es: 'Ojo de la Muerte' },
          type: 'active',
          spiCost: 1, // FP
          description: {
            en: 'Examine Undead/Spirit. GM reveals one vulnerability. For scene: +2 hit, +2 damage, ignore 2 DR against that creature. Costs 1 FP.',
            es: 'Examina un No-muerto/Espíritu. El DJ revela una debilidad. En la escena: +2 ataque, +2 daño, ignora 2 RD contra esa criatura. Cuesta 1 FP.'
          }
        },
        {
          id: 'death_seq8_spirit_vision',
          name: { en: 'Spirit Vision (Enhanced)', es: 'Visión Espiritual (Mejorada)' },
          type: 'passive',
          description: {
            en: 'Examine parts of a Soul to deduce health/emotions, detect magical auras, and perceive spirits passively.',
            es: 'Examina partes de un Alma para deducir salud/emociones, detectar auras mágicas y percibir espíritus pasivamente.'
          }
        },
        {
          id: 'death_seq8_undead_deterrence',
          name: { en: 'Undead Deterrence (Reinforced)', es: 'Disuasión de No-Muertos (Reforzada)' },
          type: 'passive',
          description: {
            en: 'Affects undead with SPI <= yours + 2. Controlled undead roll Will at -4 to act against you.',
            es: 'Afecta a no-muertos con SPI <= al tuyo + 2. No-muertos controlados tiran Voluntad con -4 para atacarte.'
          }
        },
        {
          id: 'death_seq8_undead_detect',
          name: { en: 'Undead Detection (Reinforced)', es: 'Detección de No-Muertos (Reforzada)' },
          type: 'passive',
          description: {
            en: 'Range increases to 25m. Identify specific type of undead without a roll.',
            es: 'El alcance aumenta a 25m. Identifica el tipo específico de no-muerto sin tirar.'
          }
        }
      ]
    },
    {
      level: 7,
      name: { en: 'Spirit Medium', es: 'Médium Espiritual' },
      statBonuses: [
        { stat: 'SPI', bonus: 3 },
        { stat: 'ST', bonus: 1 },
        { stat: 'HT', bonus: 1 }
      ],
      skillBonuses: [],
      abilities: [
        {
          id: 'death_seq7_main',
          name: { en: 'Spirit Medium', es: 'Médium Espiritual' },
          type: 'active',
          spiCost: 2,
          description: {
            en: 'Can commune and control dead bodies and spirits.',
            es: 'Puede comunicarse y controlar cuerpos muertos y espíritus.'
          }
        }
      ]
    },
    {
      level: 6,
      name: { en: 'Soul Assurer', es: 'Asegurador de Almas' },
      statBonuses: [
        { stat: 'SPI', bonus: 3 },
        { stat: 'ST', bonus: 1 },
        { stat: 'HT', bonus: 1 }
      ],
      skillBonuses: [],
      abilities: [
        {
          id: 'death_seq6_main',
          name: { en: 'Soul Assurer', es: 'Asegurador de Almas' },
          type: 'active',
          spiCost: 2,
          description: {
            en: 'Control over death and decay.',
            es: 'Control sobre la muerte y la decadencia.'
          }
        }
      ]
    }
  ]
};
`;

fs.writeFileSync('src/data/pathways/death.ts', tsCode);
console.log("Death Pathway created");
