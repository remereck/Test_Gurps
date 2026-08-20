import { Pathway } from '../types';

export const darknessPathway: Pathway = {
  id: 'darkness',
  name: { en: 'Darkness Pathway', es: 'Senda de la Oscuridad' },
  sequences: [
    {
      level: 9,
      statBonuses: [{ stat: 'SPI', bonus: 9 }],
      skillBonuses: [
        { skillId: 'ritualistic_magic', bonus: 2 }
      ],
      abilities: [
        {
          id: 'darkness_seq9_sleep',
          name: { en: 'Reduced Sleep', es: 'Sueño Reducido' },
          type: 'passive',
          description: {
            en: 'Requires only 3-4 hours of rest per day.',
            es: 'Requiere solo 3-4 horas de descanso por día.'
          }
        },
        {
          id: 'darkness_seq9_nocturnality',
          name: { en: 'Nocturnality', es: 'Nocturnidad' },
          type: 'passive',
          description: {
            en: '+1 to all rolls during the night.',
            es: '+1 a todas las tiradas durante la noche.'
          }
        },
        {
          id: 'darkness_seq9_spirit_vision',
          name: { en: 'Spirit Vision — Limited Form', es: 'Visión Espiritual — Forma Limitada' },
          type: 'active',
          spiCost: 1,
          description: {
            en: 'See spiritual entities. Cannot read health/emotions. Detection only.',
            es: 'Ve entidades espirituales. No puede leer salud/emociones. Solo detección.'
          }
        },
        {
          id: 'darkness_seq9_danger',
          name: { en: 'Danger Detection in the Dark', es: 'Detección de Peligro en la Oscuridad' },
          type: 'passive',
          description: {
            en: 'Danger Sense heightened in low-light (+2). Navigates darkness without penalty.',
            es: 'Sentido del Peligro mejorado en poca luz (+2). Navega en la oscuridad sin penalización.'
          }
        }
      ]
    },
    {
      level: 8,
      statBonuses: [{ stat: 'SPI', bonus: 3 }],
      skillBonuses: [
        { skillId: 'brawling', bonus: 3 },
        { skillId: 'guns_pistol', bonus: 2 },
        { skillId: 'climbing', bonus: 2 },
        { skillId: 'ritualistic_magic', bonus: 2 }
      ],
      abilities: [
        {
          id: 'darkness_seq8_poem',
          name: { en: 'Midnight Poem — Spell Effects', es: 'Poema de Medianoche — Efectos de Hechizo' },
          type: 'active',
          spiCost: 2,
          description: {
            en: 'Recite poem for 1 round. Tranquilize (calm), Lullaby (sleep, ~20m radius), Pacify (unresponsive), or Fear (dread).',
            es: 'Recita un poema por 1 ronda. Tranquilizar (calma), Canción de Cuna (sueño, ~20m), Pacificar (no responde) o Miedo (terror).'
          }
        },
        {
          id: 'darkness_seq8_nocturnality',
          replaces: 'darkness_seq9_nocturnality',
          name: { en: 'Nocturnality+', es: 'Nocturnidad+' },
          type: 'passive',
          description: {
            en: 'Nocturnality: +1 to all rolls during the night., {{Nocturnality+: Bonus during night increases to +2. In total darkness, it becomes +3.}}',
            es: 'Nocturnidad: +1 a todas las tiradas durante la noche., {{Nocturnidad+: El bono nocturno aumenta a +2. En oscuridad total, pasa a ser +3.}}'
          }
        },
        {
          id: 'darkness_seq8_danger',
          replaces: 'darkness_seq9_danger',
          name: { en: 'Danger Detection+', es: 'Detección de Peligro+' },
          type: 'passive',
          description: {
            en: 'Danger Detection in the Dark: Danger Sense heightened in low-light (+2). Navigates darkness without penalty., {{Danger Detection+: Bonus in low-light is +4. Senses danger up to 20m away with pin-point direction.}}',
            es: 'Detección de Peligro en la Oscuridad: Sentido del Peligro mejorado en poca luz (+2). Navega en la oscuridad sin penalización., {{Detección de Peligro+: Bono con poca luz de +4. Siente peligro a 20m con dirección exacta.}}'
          }
        }
      ]
    },
    {
      level: 7,
      statBonuses: [{ stat: 'SPI', bonus: 3 }, { stat: 'IQ', bonus: 1 }],
      skillBonuses: [],
      abilities: [
        {
          id: 'darkness_seq7_silent_poem',
          name: { en: 'Silent Midnight Poem', es: 'Poema de Medianoche Silencioso' },
          type: 'active',
          spiCost: 1,
          description: {
            en: 'Chant Midnight Poems without opening the mouth.',
            es: 'Canta Poemas de Medianoche sin abrir la boca.'
          }
        },
        {
          id: 'darkness_seq7_nightmare_state',
          name: { en: 'Nightmare State', es: 'Estado de Pesadilla' },
          type: 'active',
          spiCost: 1,
          description: {
            en: 'Body sleeps, Soul Body enters dreams within city range. Can see glowing orbs of dreams.',
            es: 'El cuerpo duerme, el Cuerpo del Alma entra en sueños a rango de ciudad. Ve orbes brillantes de sueños.'
          }
        },
        {
          id: 'darkness_seq7_dream_shaping',
          name: { en: 'Dream Shaping', es: 'Moldear Sueños' },
          type: 'active',
          spiCost: 1,
          description: {
            en: 'Shape target\'s dream for interrogation. Interrogation rolls gain +3. Target rolls Will-2 or reveals secret.',
            es: 'Moldea el sueño del objetivo para interrogar. Gana +3 en interrogación. Objetivo tira Voluntad-2 o revela secretos.'
          }
        },
        {
          id: 'darkness_seq7_dream_invasion',
          name: { en: 'Dream Invasion', es: 'Invasión de Sueños' },
          type: 'active',
          spiCost: 2,
          description: {
            en: 'Drag target into a dream. Range 20m (100m if 2 turns prep). Both fall asleep into the dream.',
            es: 'Arrastra al objetivo a un sueño. Rango 20m (100m si prepara 2 turnos). Ambos se duermen en el sueño.'
          }
        },
        {
          id: 'darkness_seq7_limbs',
          name: { en: 'Nightmare Limbs', es: 'Extremidades de Pesadilla' },
          type: 'active',
          spiCost: 1,
          description: {
            en: 'Generates flesh tentacles from the back. Deals 1d6+1 damage.',
            es: 'Genera tentáculos de carne de la espalda. Infligen 1d6+1 de daño.'
          }
        },
        {
          id: 'darkness_seq7_shadows',
          name: { en: 'Shadows', es: 'Sombras' },
          type: 'active',
          spiCost: 0,
          description: {
            en: 'Merge into shadows gaining Invisibility (vision only) until attack or leaving. Stealth +4.',
            es: 'Se funde con las sombras ganando Invisibilidad (solo visual) hasta atacar. Sigilo +4.'
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
          id: 'darkness_seq6_main',
          name: { en: 'Soul Assurer', es: 'Apaciguador de Almas' },
          type: 'active',
          spiCost: 2,
          description: {
            en: 'Soothes souls and commands spiritual entities.',
            es: 'Apacigua almas y comanda entidades espirituales.'
          }
        }
      ]
    }
  ]
};
