import { Pathway } from '../types';

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
            en: 'Once per scene, make one free Dodge/Step before an attack hits. GM may grant vision flash.',
            es: 'Una vez por escena, haz un Esquivar/Paso gratis antes de que un ataque impacte. El GM puede otorgar una visión fugaz.'
          }
        },
        {
          id: 'fool_seq8_spirit_vision',
          replaces: 'fool_seq9_spirit_vision',
          name: { en: 'Spirit Vision+', es: 'Visión Espiritual+' },
          type: 'active',
          spiCost: 1,
          description: {
            en: 'Spirit Vision: See ghosts, spectres, auras. Deduce health/emotional state. See through objects and detect faint sounds within 10m, Spirit Vision+ Detect faint sounds within {{15m}} and read surface emotions and basic health {{without a roll}}.',
            es: 'Visión Espiritual: Ve fantasmas, espectros, auras. Deduce salud/estado emocional. Ve a través de objetos y detecta sonidos tenues a 10m, Visión Espiritual+ Detecta sonidos tenues a {{15m}} y lee emociones superficiales y salud básica {{sin tirada}}.'
          }
        },
        {
          id: 'fool_seq8_danger_intuition',
          replaces: 'fool_seq9_danger',
          name: { en: 'Danger Intuition+', es: 'Intuición de Peligro+' },
          type: 'passive',
          description: {
            en: 'Danger Intuition: Provides a vague warning sense whenever mortal danger is near — no roll required, Danger Intuition+ The warning now provides {{rough direction and general distance}} of the threat.',
            es: 'Intuición de Peligro: Proporciona una vaga sensación de advertencia cada vez que hay peligro mortal cerca — no requiere tirada, Intuición de Peligro+ La advertencia ahora proporciona una {{dirección aproximada y distancia general}} de la amenaza.'
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
          id: 'fool_seq7_magician_spells',
          name: { en: 'Magician Spells', es: 'Hechizos de Mago' },
          type: 'active',
          description: {
            en: 'A collection of mystical tricks and spells.\n\n{{Damage Transfer}}: Transfer wound on a vital area to a non-vital area as a free action. Fatal becomes major wound.\n{{Flaming Jump}}: Step into any flame source within 30m and emerge from a different flame within range.\n{{Air Bullet}}: Fires invisible compressed-air projectile dealing 2d-1 pi damage. Uses DX/Sleight of Hand.\n{{Paper Substitute}}: Swap places with a prepared paper figurine when taking damage. You reappear 2m away safe.\n{{Flame Controlling}}: Manipulate flames within 30m as a free action, or hurl a flame jet (1d6 burn) as an attack.\n{{Illusion Creation}}: Create multi-sensory illusion within 20m. Lasts 1 minute.\n{{Underwater Breathing}}: Creates an invisible 5m air pipe to the surface. Lasts 10 minutes.\n{{Paper Weaponry}}: Turn paper into functional bladed weapon or simple tools for 1 minute. Lasts multiple attacks.',
            es: 'Una colección de trucos y hechizos místicos.\n\n{{Transferencia de Daño}}: Transfiere una herida de un área vital a una no vital (acción gratuita). Fatal se vuelve herida grave.\n{{Salto Llameante}}: Entra en cualquier fuente de fuego a 30m y emerge de otra llama dentro del rango.\n{{Bala de Aire}}: Dispara un proyectil invisible de aire comprimido (2d-1 perforante). Usa DX/Juego de Manos.\n{{Sustituto de Papel}}: Cambia de lugar con una figura de papel preparada al recibir daño. Reapareces a 2m a salvo.\n{{Control de Llamas}}: Manipula llamas a 30m como acción gratuita, o lanza un chorro de llamas (1d6 fuego) como ataque.\n{{Creación de Ilusiones}}: Crea una ilusión multisensorial a 20m. Dura 1 minuto.\n{{Respiración Acuática}}: Crea un tubo de aire invisible de 5m hacia la superficie. Dura 10 minutos.\n{{Armamento de Papel}}: Convierte papel en armas blancas funcionales o herramientas simples por 1 minuto. Dura múltiples ataques.'
          },
          spiOptions: [
            { name: { en: 'Damage Transfer', es: 'Transferencia Daño' }, cost: 1 },
            { name: { en: 'Flaming Jump', es: 'Salto Llameante' }, cost: 1 },
            { name: { en: 'Air Bullet', es: 'Bala de Aire' }, cost: 1 },
            { name: { en: 'Paper Substitute', es: 'Sustituto Papel' }, cost: 3 },
            { name: { en: 'Flame Control', es: 'Control Llama' }, cost: 1 },
            { name: { en: 'Illusion', es: 'Ilusión' }, cost: 1 },
            { name: { en: 'Air Pipe', es: 'Tubo de Aire' }, cost: 1 },
            { name: { en: 'Paper Weapon', es: 'Arma de Papel' }, cost: 1 }
          ]
        },
        {
          id: 'fool_seq7_bone_softening',
          replaces: 'fool_seq8_intuition',
          name: { en: 'Clown Intuition+', es: 'Intuición de Payaso+' },
          type: 'passive',
          description: {
            en: 'Clown Intuition: Once per scene, make one free Dodge/Step before an attack hits. GM may grant vision flash, Clown Intuition+ Gives a short premonition when within {{8m}} of an attacker and the free Dodge/Step can evade {{Area of Effect}} attacks.',
            es: 'Intuición de Payaso: Una vez por escena, haz un Esquivar/Paso gratis antes de que un ataque impacte. El GM puede otorgar una visión fugaz, Intuición de Payaso+ Da una premonición de un ataque inminente al estar a {{8m}} del atacante y el Esquivar/Paso gratis puede evadir ataques de {{Área}}.'
          }
        },
        {
          id: 'fool_seq7_spirit_vision_reinforced',
          replaces: 'fool_seq8_spirit_vision',
          name: { en: 'Spirit Vision++', es: 'Visión Espiritual++' },
          type: 'active',
          spiCost: 1,
          description: {
            en: 'Spirit Vision+: See ghosts, spectres, auras. See through objects. Detect faint sounds within 15m and read surface emotions and basic health without a roll, Spirit Vision++ Range expands to {{20m}} and you can read the {{Ether Body}} to determine {{exact HP, SPI, and Beyonder effects}}.',
            es: 'Visión Espiritual+: Ve fantasmas, espectros, auras. Ve a través de objetos. Detecta sonidos tenues a 15m y lee emociones superficiales y salud básica sin tirada, Visión Espiritual++ Rango se expande a {{20m}} y lee el {{Cuerpo Etérico}} para ver {{HP exactos, SPI y efectos Beyonder}}.'
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
            en: 'Advanced disguise, shapeshifting, and impersonation abilities. You can completely alter your appearance, voice, and build.',
            es: 'Disfraces avanzados, cambio de forma y habilidades de suplantación. Puedes alterar completamente tu apariencia, voz y complexión.'
          },
          transformation: {
            durationInSeconds: 3600, // 1 hour
          }
        }
      ]
    }
  ]
};
