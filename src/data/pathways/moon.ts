import { Pathway } from '../types';

export const moonPathway: Pathway = {
  id: 'moon',
  name: { en: 'Moon Pathway', es: 'Senda de la Luna' },
  sequences: [
    {
      level: 9,
      name: { en: 'Apothecary', es: 'Boticario' },
      statBonuses: [
        { stat: 'HT', bonus: 2 },
        { stat: 'SPI', bonus: 4 }
      ],
      skillBonuses: [
        { skillId: 'pharmacy', bonus: 5 },
        { skillId: 'poisons', bonus: 5 },
        { skillId: 'physician', bonus: 4 },
        { skillId: 'gardening', bonus: 3 },
        { skillId: 'herb_lore', bonus: 2 }
      ],
      abilities: [
        {
          id: 'moon_seq9_poison_resist',
          name: { en: 'Poison Resistance', es: 'Resistencia al Veneno' },
          type: 'passive',
          description: {
            en: '+3 to all HT rolls against poison and toxic substances.',
            es: '+3 a todas las tiradas de HT contra venenos y sustancias tóxicas.'
          }
        },
        {
          id: 'moon_seq9_spirit_vision',
          name: { en: 'Spirit Vision — Ether Body', es: 'Visión Espiritual — Cuerpo Etérico' },
          type: 'active',
          spiCost: 1, // per min
          description: {
            en: 'Read the Ether Body of living beings, revealing injuries, illnesses, toxins, and supernatural conditions. Costs 1 SPI per minute.',
            es: 'Lee el Cuerpo Etérico de seres vivos, revelando heridas, enfermedades, toxinas y condiciones sobrenaturales. Cuesta 1 SPI por minuto.'
          }
        },
        {
          id: 'moon_seq9_potion_concoction',
          name: { en: 'Potion Concoction', es: 'Elaboración de Pociones' },
          type: 'active',
          spiCost: 0,
          description: {
            en: 'Brew alchemical concoctions. Can carry up to (SPI) doses. Includes Libido, Gen/Spec Physical Enhancer, Healing (Minor/Mod/Maj), Energy Potion. Requires Pharmacy rolls.',
            es: 'Elabora pociones alquímicas. Puede llevar hasta (SPI) dosis. Incluye pociones curativas, de energía y potenciadores físicos. Requiere tiradas de Farmacia.'
          }
        }
      ]
    },
    {
      level: 8,
      name: { en: 'Beast Tamer', es: 'Domador de Bestias' },
      statBonuses: [
        { stat: 'ST', bonus: 2 },
        { stat: 'DX', bonus: 1 },
        { stat: 'SPI', bonus: 2 }
      ],
      skillBonuses: [
        { skillId: 'animal_handling_any', bonus: 5 }
      ],
      abilities: [
        {
          id: 'moon_seq8_empathy',
          name: { en: 'Empathy (Animals)', es: 'Empatía (Animales)' },
          type: 'passive',
          description: {
            en: 'Sense animal emotions and intent.',
            es: 'Siente emociones e intenciones animales.'
          }
        },
        {
          id: 'moon_seq8_animal_senses',
          name: { en: 'Animal Senses / Taming', es: 'Sentidos de Animales / Doma' },
          type: 'active',
          spiCost: 0,
          description: {
            en: 'Read thoughts/senses of, communicate to, and control animals within 50m. Control up to (IQ/2) at once. Tamed animals get +4 involving drinking potions.',
            es: 'Lee pensamientos/sentidos, comunícate y controla animales en 50m. Controla hasta (IQ/2) a la vez. Animales domados ganan +4 al beber pociones.'
          }
        },
        {
          id: 'moon_seq8_spirit_vision',
          name: { en: 'Spirit Vision (Reinforced)', es: 'Visión Espiritual (Reforzada)' },
          type: 'passive',
          description: {
            en: 'Reads health/emotional state of animals within 50m (no SPI cost). When examining a patient, Physician bonus increases to +3.',
            es: 'Lee salud/estado emocional de animales a 50m (sin SPI). Al examinar paciente, el bono de Médico aumenta a +3.'
          }
        },
        {
          id: 'moon_seq8_potion_concoction',
          name: { en: 'Potion Concoction (Reinforced)', es: 'Elaboración de Pociones (Reforzada)' },
          type: 'passive',
          description: {
            en: 'Penalty for all potions reduced by 1. Carry up to SPI x 1.5 doses (round up).',
            es: 'Penalidad para todas las pociones reducida en 1. Puede llevar hasta SPI x 1.5 dosis (redondeando hacia arriba).'
          }
        }
      ]
    },
    {
      level: 7,
      name: { en: 'Vampire', es: 'Vampiro' },
      statBonuses: [
        { stat: 'SPI', bonus: 2 },
        { stat: 'Basic Speed', bonus: 1 },
        { stat: 'ST', bonus: 3 },
        { stat: 'Per', bonus: 2 },
        { stat: 'DX', bonus: 2 }
      ],
      skillBonuses: [
        { skillId: 'ritualistic_magic', bonus: 3 }, // Moon, Darkness, Shadow
        { skillId: 'hidden_lore_any', bonus: 3 } // Darkness, Shadow, Moon
      ],
      abilities: [
        {
          id: 'moon_seq7_spirituality_absorption',
          name: { en: 'Spirituality Absorption', es: 'Absorción de Espiritualidad' },
          type: 'passive',
          description: {
            en: 'Restore SPI when feasting on spiritually rich blood.',
            es: 'Restaura SPI al alimentarse de sangre espiritualmente rica.'
          }
        },
        {
          id: 'moon_seq7_vampire_diet',
          name: { en: 'Vampire Diet', es: 'Dieta de Vampiro' },
          type: 'drawback',
          description: {
            en: 'Can only drink spiritually rich blood.',
            es: 'Solo puede beber sangre rica en espiritualidad.'
          }
        },
        {
          id: 'moon_seq7_sun_allergy',
          name: { en: 'Sun Allergy', es: 'Alergia al Sol' },
          type: 'drawback',
          description: {
            en: 'Extreme discomfort under direct sunlight.',
            es: 'Incomodidad extrema bajo la luz solar directa.'
          }
        },
        {
          id: 'moon_seq7_purification_weak',
          name: { en: 'Purification Weakness', es: 'Debilidad a la Purificación' },
          type: 'drawback',
          description: {
            en: '2d6 damage if targeted by purification.',
            es: '2d6 de daño si es objetivo de purificación.'
          }
        },
        {
          id: 'moon_seq7_slow_heart',
          name: { en: 'Slow-beating Heart', es: 'Corazón Lento' },
          type: 'drawback',
          description: {
            en: 'Piercing/stake attacks to the heart deal x2 damage.',
            es: 'Ataques punzantes/con estacas al corazón infligen el doble de daño.'
          }
        },
        {
          id: 'moon_seq7_wings',
          name: { en: 'Wings of Flight', es: 'Alas de Vuelo' },
          type: 'active',
          spiCost: 1, // per min
          description: {
            en: 'Gain +2 Basic Move for flight for 1 minute. Extends at 1 SPI/min.',
            es: 'Gana +2 Movimiento Básico para volar por 1 minuto. Se extiende por 1 SPI/min.'
          }
        },
        {
          id: 'moon_seq7_bat_swarm',
          name: { en: 'Bat Swarm Form', es: 'Forma de Enjambre de Murciélagos' },
          type: 'active',
          spiCost: 3,
          description: {
            en: 'Transform into illusory bats (1 min). Immune to non-magical physical damage. Can emit poison gas (1d6/2 turns) or black flames (1d6 burn/4 turns). Cannot use other abilities.',
            es: 'Forma de murciélagos ilusorios (1 min). Inmune al daño físico no mágico. Puede emitir gas venenoso o llamas negras. No puede usar otras habilidades.'
          }
        },
        {
          id: 'moon_seq7_corrosive_claw',
          name: { en: 'Corrosive Claw', es: 'Garra Corrosiva' },
          type: 'active',
          spiCost: 2,
          description: {
            en: 'Innate melee attack (Brawling). Counts as knife. Ignores natural DR, but not manufactured/magical armour.',
            es: 'Ataque cuerpo a cuerpo innato (Pelea). Cuenta como cuchillo. Ignora RD natural, pero no armadura mágica o fabricada.'
          }
        },
        {
          id: 'moon_seq7_abyss_shackles',
          name: { en: 'Abyss Shackles', es: 'Cadenas del Abismo' },
          type: 'active',
          spiCost: 2,
          description: {
            en: 'Ritualistic Magic vs target HT. Success: bound for 3 turns (ST-3 to break free). Dissolves if concentration broken.',
            es: 'Magia Ritual vs HT del objetivo. Éxito: atado 3 turnos (ST-3 para romper). Se disuelve si se rompe la concentración.'
          }
        },
        {
          id: 'moon_seq7_the_embrace',
          name: { en: 'The Embrace', es: 'El Abrazo' },
          type: 'active',
          spiCost: 7, // + permanent SPI loss
          description: {
            en: 'Using surplus characteristics, bestows vampire traits to human (1h ritual). Vampire loses 1 max SPI per use permanently until replenished.',
            es: 'Usando características sobrantes, otorga rasgos vampíricos a un humano. El vampiro pierde 1 SPI máximo permanentemente hasta reponerlo.'
          }
        },
        {
          id: 'moon_seq7_blood_servant',
          name: { en: 'Blood Servant Conversion', es: 'Conversión a Siervo de Sangre' },
          type: 'active',
          spiCost: 3,
          description: {
            en: 'Ritualistic Magic. Turns living creature into servant (must obey, cured of illnesses, +2 HT/HP). Crit fail: target hostile (+2 actions vs Vampire).',
            es: 'Magia Ritual. Convierte criatura en siervo (debe obedecer, cura enfermedades, +2 HT/HP). Fallo crit: objetivo hostil (+2 acciones vs Vampiro).'
          }
        },
        {
          id: 'moon_seq7_spirit_vision',
          name: { en: 'Spirit Vision (Mastered)', es: 'Visión Espiritual (Maestría)' },
          type: 'passive',
          description: {
            en: 'Animal range expands to 80m. Can read animal\'s emotional state, recent memories (24h), and spiritual tampering.',
            es: 'Alcance animal se expande a 80m. Puede leer estado emocional, recuerdos recientes (24h) y alteraciones espirituales.'
          }
        },
        {
          id: 'moon_seq7_beast_taming',
          name: { en: 'Beast Taming (Mastered)', es: 'Doma de Bestias (Maestría)' },
          type: 'passive',
          description: {
            en: 'Control up to 3 animals, issue complex commands. Controlled animals gain +2 ST and +1 Basic Speed.',
            es: 'Controla hasta 3 animales, da órdenes complejas. Animales controlados ganan +2 ST y +1 Velocidad Básica.'
          }
        },
        {
          id: 'moon_seq7_physician',
          name: { en: 'Physician (Mastered)', es: 'Médico (Maestría)' },
          type: 'passive',
          description: {
            en: '+3 bonus applies to own healing (+1 HP/day rest). May diagnose spiritual ailments in animals/moon creatures without penalty.',
            es: 'Bono +3 aplica a la curación propia (+1 HP/día reposo). Puede diagnosticar males espirituales en animales/criaturas lunares sin penalidad.'
          }
        }
      ]
    },
    {
      level: 6,
      name: { en: 'Potions Professor', es: 'Profesor de Pociones' },
      statBonuses: [
        { stat: 'SPI', bonus: 3 },
        { stat: 'ST', bonus: 1 },
        { stat: 'HT', bonus: 1 }
      ],
      skillBonuses: [],
      abilities: [
        {
          id: 'moon_seq6_main',
          name: { en: 'Potions Professor', es: 'Profesor de Pociones' },
          type: 'active',
          spiCost: 2,
          description: {
            en: 'Masters powerful restorative and offensive potions.',
            es: 'Domina pociones poderosas restaurativas y ofensivas.'
          }
        }
      ]
    }
  ]
};
