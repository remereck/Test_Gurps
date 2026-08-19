const fs = require('fs');

const foolTs = `import { Pathway } from '../types';

export const foolPathway: Pathway = {
  id: 'fool',
  name: { en: 'Fool Pathway', es: 'Senda del Loco' },
  sequences: [
    {
      level: 9,
      statBonuses: [{ stat: 'SPI', bonus: 9 }],
      skillBonuses: [
        { skillId: 'ritualistic_magic', bonus: 3 },
        { skillId: 'divination_arts', bonus: 3 },
        { skillId: 'spiritual_intuition', bonus: 3 },
        { skillId: 'occultism', bonus: 2 }
      ],
      abilities: [
        {
          id: 'fool_seq9_eidetic',
          name: { en: 'Eidetic Memory', es: 'Memoria Eidética' },
          type: 'passive',
          description: {
            en: 'Continuously grows as potion digests; allows memorisation of complex ritual steps and divination methods.',
            es: 'Crece continuamente mientras se digiere la poción; permite memorizar pasos de rituales complejos y métodos de adivinación.'
          }
        },
        {
          id: 'fool_seq9_spirit_vision',
          name: { en: 'Spirit Vision', es: 'Visión Espiritual' },
          type: 'active',
          spiCost: 1,
          description: {
            en: 'See ghosts, spectres, auras. Deduce health/emotional state. See through objects and detect faint sounds within 10m.',
            es: 'Ve fantasmas, espectros, auras. Deduce salud/estado emocional. Ve a través de objetos y detecta sonidos tenues a 10m.'
          }
        },
        {
          id: 'fool_seq9_danger',
          name: { en: 'Danger Intuition', es: 'Intuición de Peligro' },
          type: 'passive',
          description: {
            en: 'Provides a vague warning sense whenever mortal danger is near — no roll required.',
            es: 'Proporciona una vaga sensación de advertencia cada vez que hay peligro mortal cerca — no requiere tirada.'
          }
        }
      ]
    },
    {
      level: 8,
      statBonuses: [{ stat: 'ST', bonus: 1 }, { stat: 'DX', bonus: 2 }, { stat: 'SPI', bonus: 2 }],
      skillBonuses: [
        { skillId: 'acrobatics', bonus: 5 },
        { skillId: 'acting', bonus: 5 },
        { skillId: 'throwing', bonus: 3 },
        { skillId: 'spiritual_intuition', bonus: 3 }
      ],
      abilities: [
        {
          id: 'fool_seq8_balance',
          name: { en: 'Perfect Balance', es: 'Equilibrio Perfecto' },
          type: 'passive',
          description: {
            en: '+6 avoid knockdown; +2 Acrobatics, Climbing, Piloting.',
            es: '+6 evitar derribo; +2 Acrobacias, Escalar, Pilotar.'
          }
        },
        {
          id: 'fool_seq8_agility',
          name: { en: 'Clown Agility', es: 'Agilidad de Payaso' },
          type: 'passive',
          description: {
            en: 'Supernatural agility for impossible acrobatics. Land safely from any fall.',
            es: 'Agilidad sobrenatural para acrobacias imposibles. Aterriza seguro de cualquier caída.'
          }
        },
        {
          id: 'fool_seq8_paper_daggers',
          name: { en: 'Paper Daggers', es: 'Dagas de Papel' },
          type: 'active',
          spiCost: 1,
          description: {
            en: 'Turn paper as hard and sharp as steel. Deals sw-1 cut, pierces stone/bone. Lasts 1 attack.',
            es: 'Convierte el papel tan duro y afilado como acero. Hace daño sw-1 corte, perfora piedra/hueso. Dura 1 ataque.'
          }
        },
        {
          id: 'fool_seq8_intuition',
          name: { en: 'Clown Intuition', es: 'Intuición de Payaso' },
          type: 'passive',
          description: {
            en: 'Once per scene, make one free Dodge/Step before an attack hits. GM may grant vision "flash".',
            es: 'Una vez por escena, haz un Esquivar/Paso gratis antes de que un ataque impacte. El GM puede otorgar una "visión" fugaz.'
          }
        },
        {
          id: 'fool_seq8_spirit_vision',
          name: { en: 'Spirit Vision (Reinforced)', es: 'Visión Espiritual (Reforzada)' },
          type: 'passive',
          description: {
            en: 'Range increased to 15m. Read surface emotions and basic health without a roll.',
            es: 'Rango aumentado a 15m. Lee emociones superficiales y salud básica sin tirada.'
          }
        },
        {
          id: 'fool_seq8_danger_intuition',
          name: { en: 'Danger Intuition (Reinforced)', es: 'Intuición de Peligro (Reforzada)' },
          type: 'passive',
          description: {
            en: 'Warning now provides rough direction and general distance of the threat.',
            es: 'La advertencia ahora proporciona una dirección aproximada y distancia general de la amenaza.'
          }
        }
      ]
    },
    {
      level: 7,
      statBonuses: [{ stat: 'DX', bonus: 1 }, { stat: 'SPI', bonus: 2 }, { stat: 'Per', bonus: 1 }],
      skillBonuses: [
        { skillId: 'sleight_of_hand', bonus: 4 }
      ],
      abilities: [
        {
          id: 'fool_seq7_damage_transfer',
          name: { en: 'Damage Transfer', es: 'Transferencia de Daño' },
          type: 'active',
          spiCost: 1,
          description: {
            en: 'Transfer wound on a vital area to a non-vital area as a free action. Fatal becomes major wound.',
            es: 'Transfiere una herida de un área vital a una no vital (acción gratuita). Fatal se vuelve herida grave.'
          }
        },
        {
          id: 'fool_seq7_flaming_jump',
          name: { en: 'Flaming Jump', es: 'Salto Llameante' },
          type: 'active',
          spiCost: 1,
          description: {
            en: 'Step into any flame source within 30m and emerge from a different flame within range.',
            es: 'Entra en cualquier fuente de fuego a 30m y emerge de otra llama dentro del rango.'
          }
        },
        {
          id: 'fool_seq7_air_bullet',
          name: { en: 'Air Bullet', es: 'Bala de Aire' },
          type: 'active',
          spiCost: 1,
          description: {
            en: 'Fires invisible compressed-air projectile dealing 2d-1 pi damage. Uses DX/Sleight of Hand.',
            es: 'Dispara un proyectil invisible de aire comprimido (2d-1 perforante). Usa DX/Juego de Manos.'
          }
        },
        {
          id: 'fool_seq7_paper_substitute',
          name: { en: 'Paper Figurine Substitute', es: 'Sustituto de Figura de Papel' },
          type: 'active',
          spiCost: 3,
          description: {
            en: 'Swap places with a prepared paper figurine when taking damage. You reappear 2m away safe.',
            es: 'Cambia de lugar con una figura de papel preparada al recibir daño. Reapareces a 2m a salvo.'
          }
        },
        {
          id: 'fool_seq7_flame_controlling',
          name: { en: 'Flame Controlling', es: 'Control de Llamas' },
          type: 'active',
          spiCost: 1,
          description: {
            en: 'Manipulate flames within 30m as a free action, or hurl a flame jet (1d6 burn) as an attack.',
            es: 'Manipula llamas a 30m como acción gratuita, o lanza un chorro de llamas (1d6 fuego) como ataque.'
          }
        },
        {
          id: 'fool_seq7_illusion',
          name: { en: 'Illusion Creation', es: 'Creación de Ilusiones' },
          type: 'active',
          spiCost: 1,
          description: {
            en: 'Create multi-sensory illusion within 20m. Lasts 1 minute.',
            es: 'Crea una ilusión multisensorial a 20m. Dura 1 minuto.'
          }
        },
        {
          id: 'fool_seq7_underwater_breathing',
          name: { en: 'Underwater Breathing', es: 'Respiración Bajo el Agua' },
          type: 'active',
          spiCost: 1,
          description: {
            en: 'Creates an invisible 5m air pipe to the surface. Lasts 10 minutes.',
            es: 'Crea un tubo de aire invisible de 5m hacia la superficie. Dura 10 minutos.'
          }
        },
        {
          id: 'fool_seq7_bone_softening',
          name: { en: 'Bone Softening', es: 'Ablandamiento de Huesos' },
          type: 'passive',
          description: {
            en: '+4 to Escape rolls. Dislocate joints painlessly to slip through gaps.',
            es: '+4 a tiradas de Escape. Disloca articulaciones sin dolor para pasar por huecos.'
          }
        },
        {
          id: 'fool_seq7_paper_weaponry',
          name: { en: 'Paper Weaponry', es: 'Armamento de Papel' },
          type: 'active',
          spiCost: 1,
          description: {
            en: 'Turn paper into functional bladed weapon or simple tools for 1 minute. Lasts multiple attacks.',
            es: 'Convierte papel en armas blancas funcionales o herramientas simples por 1 minuto. Dura múltiples ataques.'
          }
        },
        {
          id: 'fool_seq7_clown_agility',
          name: { en: 'Clown Agility (Reinforced)', es: 'Agilidad de Payaso (Reforzada)' },
          type: 'passive',
          description: {
            en: 'Clown Intuition triggering range expands to 8m. Free Dodge/Step can evade Area of Effect attacks.',
            es: 'Rango de Intuición de Payaso se expande a 8m. Esquivar/Paso gratis puede evadir ataques de Área.'
          }
        },
        {
          id: 'fool_seq7_spirit_vision_reinforced',
          name: { en: 'Spirit Vision (Reinforced)', es: 'Visión Espiritual (Reforzada)' },
          type: 'passive',
          description: {
            en: 'Range expands to 20m. Can read Ether Body to determine exact HP, SPI, and Beyonder effects.',
            es: 'Rango se expande a 20m. Lee el Cuerpo Etérico para ver HP exactos, SPI y efectos Beyonder.'
          }
        }
      ]
    },
    {
      level: 6,
      statBonuses: [{ stat: 'DX', bonus: 2 }, { stat: 'SPI', bonus: 2 }],
      skillBonuses: [],
      abilities: [
        {
          id: 'fool_seq6_main',
          name: { en: 'Faceless', es: 'Sin Rostro' },
          type: 'active',
          spiCost: 2,
          description: {
            en: 'Advanced disguise, shapeshifting, and impersonation abilities.',
            es: 'Disfraces avanzados, cambio de forma y habilidades de suplantación.'
          }
        }
      ]
    }
  ]
};
`;

fs.writeFileSync('src/data/pathways/fool.ts', foolTs);
console.log("Rebuilt fool.ts");
