import { Pathway } from '../types';

export const hangedManPathway: Pathway = {
  id: 'hanged_man',
  name: { en: 'Hanged Man Pathway', es: 'Senda del Colgado' },
  sequences: [
    {
      level: 9,
      statBonuses: [{ stat: 'SPI', bonus: 11 }],
      skillBonuses: [
        { skillId: 'ritualistic_magic', bonus: 2 },
        { skillId: 'spiritual_perception', bonus: 3 }
      ],
      abilities: [
        {
          id: 'hanged_seq9_drawback',
          name: { en: 'Paranoia, Hallucinations, or Compulsion', es: 'Paranoia, Alucinaciones o Compulsión' },
          type: 'drawback',
          description: {
            en: 'Choose one: Paranoia (trust no one), Hallucinations (see/hear things not there), or Compulsion (irresistible urge to seek hidden knowledge).',
            es: 'Elige uno: Paranoia (no confías en nadie), Alucinaciones (ves/escuchas cosas inexistentes), o Compulsión (impulso de buscar conocimiento oculto).'
          }
        },
        {
          id: 'hanged_seq9_knowledge',
          name: { en: 'Knowledge (Honorifics)', es: 'Conocimiento (Honoríficos)' },
          type: 'passive',
          description: {
            en: 'Learn three-part honorific names of secret existences.',
            es: 'Aprende nombres honoríficos de tres partes de existencias secretas.'
          }
        }
      ]
    },
    {
      level: 8,
      statBonuses: [{ stat: 'SPI', bonus: 3 }],
      skillBonuses: [
        { skillId: 'ritualistic_magic', bonus: 3 },
        { skillId: 'occultism', bonus: 3 },
        { skillId: 'spiritual_perception', bonus: 2 }
      ],
      abilities: [
        {
          id: 'hanged_seq8_hearing',
          name: { en: 'Acute Hearing', es: 'Audición Aguda' },
          type: 'passive',
          description: {
            en: '+2 to Hearing rolls; detect faint sounds, eavesdrop through walls.',
            es: '+2 a tiradas de Audición; detecta sonidos tenues, escucha a través de paredes.'
          }
        },
        {
          id: 'hanged_seq8_listen_passive',
          name: { en: 'Listening (Passive)', es: 'Escucha (Pasiva)' },
          type: 'passive',
          description: {
            en: 'Always hear voices of existences within 80m. Cannot be turned off. Roll 3d6 to avoid Corruption from high-level sources.',
            es: 'Siempre escucha voces de existencias a 80m. No se puede apagar. Tira 3d6 para evitar Corrupción de fuentes de alto nivel.'
          }
        },
        {
          id: 'hanged_seq8_listen_active',
          name: { en: 'Listening (Active)', es: 'Escucha (Activa)' },
          type: 'active',
          spiCost: 1,
          description: {
            en: 'Focus on a single source. Roll 3d6: <13 receives clear information, 14+ hears the True Creator or higher existence.',
            es: 'Enfoca en una sola fuente. Tira 3d6: <13 recibe información clara, 14+ escucha al Creador Verdadero u otra existencia superior.'
          }
        },
        {
          id: 'hanged_seq8_honorifics',
          replaces: 'hanged_seq9_knowledge',
          name: { en: 'Knowledge+', es: 'Conocimiento+' },
          type: 'passive',
          description: {
            en: 'Knowledge: Learn three-part honorific names of secret existences., {{Knowledge+: Gains 2 additional honorific names. Spiritual Perception rolls gain +2.}}',
            es: 'Conocimiento: Aprende nombres honoríficos de tres partes de existencias secretas., {{Conocimiento+: Gana 2 nombres honoríficos adicionales. Percepción Espiritual gana +2.}}'
          }
        },
        {
          id: 'hanged_seq8_perception_reinforced',
          name: { en: 'Spiritual Perception', es: 'Percepción Espiritual' },
          type: 'passive',
          description: {
            en: 'Passive range expands to 50m. Automatically detect active Beyonder abilities within range.',
            es: 'El rango pasivo se expande a 50m. Detecta automáticamente habilidades Beyonder activas en el rango.'
          }
        }
      ]
    },
    {
      level: 7,
      statBonuses: [{ stat: 'SPI', bonus: 3 }, { stat: 'Per', bonus: 1 }],
      skillBonuses: [
        { skillId: 'stealth', bonus: 3 },
        { skillId: 'occultism', bonus: 2 }
      ],
      abilities: [
        {
          id: 'hanged_seq7_shadow_lurking',
          name: { en: 'Shadow Lurking', es: 'Acecho en las Sombras' },
          type: 'active',
          spiCost: 1,
          description: {
            en: 'Conceal in shadows. Invisible to mundane senses (Per-2 to notice). Move between connected shadows. Lasts 1 min.',
            es: 'Oculto en sombras. Invisible a sentidos mundanos (Per-2 para notar). Se mueve entre sombras conectadas. Dura 1 min.'
          }
        },
        {
          id: 'hanged_seq7_shadow_shaping',
          name: { en: 'Shadow Shaping', es: 'Moldear Sombras' },
          type: 'active',
          spiCost: 1,
          description: {
            en: 'Shape shadows within 10m into weapons (shadow corrosion damage, bypass non-magical DR) or animal forms for 1 minute.',
            es: 'Moldea sombras en 10m en armas (daño por corrosión de sombra) o formas animales por 1 minuto.'
          }
        },
        {
          id: 'hanged_seq7_shadow_chrysalis',
          name: { en: 'Shadow Chrysalis', es: 'Crisálida de Sombra' },
          type: 'active',
          spiCost: 2,
          description: {
            en: 'Requires Shadow Lurking. Target\'s shadow forms a cocoon. Quick Contest ST vs SPI. Target trapped takes 1d-2 corrosion damage/turn.',
            es: 'Requiere Acecho en las Sombras. La sombra del objetivo forma un capullo. Contienda ST vs SPI. Atrapado sufre 1d-2 corrosión/turno.'
          }
        },
        {
          id: 'hanged_seq7_summon_shadow',
          name: { en: 'Summon Shadow', es: 'Invocar Sombra' },
          type: 'active',
          spiCost: 2,
          description: {
            en: 'Roll Ritualistic Magic. Summons shadow servitor for 1 min. Attacks for 1d6 corrosion. Failed roll makes it hostile.',
            es: 'Tira Magia Ritualística. Invoca servidor de sombra por 1 min. Ataca por 1d6 de corrosión. Si falla, es hostil.'
          }
        },
        {
          id: 'hanged_seq7_listening_control',
          name: { en: 'Listening Control', es: 'Control de Escucha' },
          type: 'passive',
          description: {
            en: 'Toggle passive Listening on/off. When active, range is 40m (or 80m reinforced) and can listen to 2 simultaneous conversations.',
            es: 'Activa/desactiva la Escucha pasiva. Al activarlo, el rango es 40m (o 80m reforzado) y puede escuchar 2 conversaciones.'
          }
        },
        {
          id: 'hanged_seq7_spiritual_perception',
          replaces: 'hanged_seq8_perception_reinforced',
          name: { en: 'Spiritual Perception++', es: 'Percepción Espiritual++' },
          type: 'passive',
          description: {
            en: 'Spiritual Perception+: Passive range expands to 50m. Automatically detect active Beyonder abilities within range., {{Spiritual Perception++: +3 to detect entities. Passive range 80m. Reveals emotional state.}}',
            es: 'Percepción Espiritual+: El rango pasivo se expande a 50m. Detecta automáticamente habilidades Beyonder activas en el rango., {{Percepción Espiritual++: +3 para detectar entidades. Rango pasivo 80m. Revela estado emocional.}}'
          }
        }
      ]
    },
    {
      level: 6,
      statBonuses: [{ stat: 'SPI', bonus: 3 }, { stat: 'HT', bonus: 1 }],
      skillBonuses: [],
      abilities: [
        {
          id: 'hanged_seq6_main',
          name: { en: 'Rose Bishop', es: 'Obispo de las Rosas' },
          type: 'active',
          spiCost: 2,
          description: {
            en: 'Flesh magic and blood manipulation.',
            es: 'Magia de carne y manipulación de sangre.'
          }
        }
      ]
    }
  ]
};
