import { Pathway } from '../types';

export const hermitPathway: Pathway = {
  id: 'hermit',
  name: { en: 'Hermit Pathway', es: 'Senda del Ermitaño' },
  sequences: [
    {
      level: 9,
      name: { en: 'Mystery Pryer', es: 'Indagador de Misterios' },
      statBonuses: [
        { stat: 'SPI', bonus: 9 }
      ],
      skillBonuses: [
        { skillId: 'ritualistic_magic', bonus: 4 },
        { skillId: 'occultism', bonus: 3 },
        { skillId: 'divination_arts', bonus: 2 },
        { skillId: 'thaumatology', bonus: 2 }
      ],
      abilities: [
        {
          id: 'hermit_seq9_knowledge_pursuit',
          name: { en: 'Knowledge Pursuit', es: 'Búsqueda de Conocimiento' },
          type: 'drawback',
          description: {
            en: 'Flat 3d6 roll under 14 — GM decides what info you uncover. On failure, gain 1 CoR. On crit failure, gain 3 CoR. May reveal formulas, incantations, etc.',
            es: 'Tirada fija de 3d6 bajo 14 — el DJ decide qué info descubres. Al fallar, ganas 1 CoR. En fallo crítico, ganas 3 CoR. Puede revelar fórmulas, encantamientos, etc.'
          }
        },
        {
          id: 'hermit_seq9_eyes_prying',
          name: { en: 'Eyes of Mystery Prying', es: 'Ojos que Indagan Misterios' },
          type: 'active',
          spiCost: 1, // per min
          description: {
            en: 'Passive: -2 to rolls trapping you in Dreams/Illusions. Active (1 SPI/min, SPI roll): Spirit Vision detects Mystical Items/Beyonders via Astral Projection. Examines Astral, Ether, and Heart/Mind body for injury, corruption, and abilities.',
            es: 'Pasivo: -2 a tiradas para atraparte en Sueños/Ilusiones. Activo (1 SPI/min, tirada SPI): Visión Espiritual detecta Objetos Místicos/Beyonders por Proyección Astral. Examina cuerpos Astral, Etérico y de Mente/Corazón buscando heridas, corrupción y habilidades.'
          }
        },
        {
          id: 'hermit_seq9_corruption',
          name: { en: 'Corruption Exposure', es: 'Exposición a la Corrupción' },
          type: 'passive',
          description: {
            en: 'When prying into target with 5+ CoR, evil artifact, or eldritch entity, make immediate Will roll or gain 1 CoR. GM may call for more rolls.',
            es: 'Al indagar a un objetivo con 5+ CoR, artefacto maligno o entidad eldritch, haz tirada de Voluntad inmediata o gana 1 CoR. El DJ puede pedir más tiradas.'
          }
        },
        {
          id: 'hermit_seq9_spirit_contract',
          name: { en: 'Spirit Contract (Ritual)', es: 'Contrato Espiritual (Ritual)' },
          type: 'passive',
          description: {
            en: 'Gains knowledge of Spirit World Creature Contract. Base difficulty reduced to -5. Penalty per existing contract reduced to -2.',
            es: 'Gana conocimiento del Contrato de Criatura del Mundo Espiritual. Dificultad base reducida a -5. Penalidad por contrato existente reducida a -2.'
          }
        },
        {
          id: 'hermit_seq9_quick_rituals',
          name: { en: 'Quick Rituals', es: 'Rituales Rápidos' },
          type: 'passive',
          description: {
            en: 'Penalty for rushed rituals is decreased by 3.',
            es: 'La penalidad por rituales apresurados se reduce en 3.'
          }
        }
      ]
    },
    {
      level: 8,
      name: { en: 'Melee Scholar', es: 'Erudito del Combate Cuerpo a Cuerpo' },
      statBonuses: [
        { stat: 'DX', bonus: 2 },
        { stat: 'ST', bonus: 1 },
        { stat: 'SPI', bonus: 1 }
      ],
      skillBonuses: [
        { skillId: 'occultism', bonus: 4 },
        { skillId: 'shortsword', bonus: 3 },
        { skillId: 'ritualistic_magic', bonus: 3 },
        { skillId: 'hidden_lore_any', bonus: 3 },
        { skillId: 'broadsword', bonus: 2 }
      ],
      abilities: [
        {
          id: 'hermit_seq8_combat_reflexes',
          name: { en: 'Combat Reflexes', es: 'Reflejos de Combate' },
          type: 'passive',
          description: {
            en: '+1 to all active defenses, +6 to recover from stun, never freeze in surprise.',
            es: '+1 a defensas activas, +6 para recuperarse de aturdimiento, nunca se congela por sorpresa.'
          }
        },
        {
          id: 'hermit_seq8_combat_prying',
          name: { en: 'Combat Prying', es: 'Indagación de Combate' },
          type: 'active',
          spiCost: 2,
          description: {
            en: 'Pry into mystery of combat and learn from target. You gain a permanent +1 in the relevant skill.',
            es: 'Indaga en el misterio del combate y aprende del objetivo. Ganas un +1 permanente en la habilidad relevante.'
          }
        },
        {
          id: 'hermit_seq8_eyes_prying',
          replaces: 'hermit_seq9_eyes_prying',
          name: { en: 'Eyes of Mystery Prying+', es: 'Ojos que Indagan Misterios+' },
          type: 'active',
          spiCost: 1,
          description: {
            en: 'Eyes of Mystery Prying: Passive: -2 to rolls trapping you in Dreams/Illusions. Active: Spirit Vision detects Mystical Items/Beyonders via Astral Projection. Examines Astral, Ether, and Heart/Mind body for injury, corruption, and abilities, Eyes of Mystery Prying+ Passive penalty to Dream/Illusion increases to {{-3}}. Active use reveals {{combat weaknesses}} (low HP, low defense, damage vulnerability) in Ether Body.',
            es: 'Ojos que Indagan Misterios: Pasivo: -2 a tiradas para atraparte en Sueños/Ilusiones. Activo: Visión Espiritual detecta Objetos Místicos/Beyonders por Proyección Astral. Examina cuerpos Astral, Etérico y de Mente/Corazón buscando heridas, corrupción y habilidades, Ojos que Indagan Misterios+ Penalidad pasiva a Sueño/Ilusión aumenta a {{-3}}. Uso activo revela {{debilidades de combate}} (HP bajo, defensa baja, vulnerabilidad al daño) en el Cuerpo Etérico.'
          }
        },
        {
          id: 'hermit_seq8_quick_rituals',
          replaces: 'hermit_seq9_quick_rituals',
          name: { en: 'Quick Rituals+', es: 'Rituales Rápidos+' },
          type: 'passive',
          description: {
            en: 'Quick Rituals: Penalty for rushed rituals is decreased by 3, Quick Rituals+ Penalty for rushed rituals is decreased by {{4}}.',
            es: 'Rituales Rápidos: La penalidad por rituales apresurados se reduce en 3, Rituales Rápidos+ La penalidad por rituales apresurados se reduce en {{4}}.'
          }
        }
      ]
    },
    {
      level: 7,
      name: { en: 'Warlock', es: 'Brujo' },
      statBonuses: [
        { stat: 'SPI', bonus: 2 }
      ],
      skillBonuses: [
        { skillId: 'thaumatology', bonus: 4 },
        { skillId: 'occultism', bonus: 3 },
        { skillId: 'spiritual_intuition', bonus: 2 },
        { skillId: 'hidden_lore_mysticism', bonus: 2 },
        { skillId: 'alchemy', bonus: 2 }
      ],
      abilities: [
        {
          id: 'hermit_seq7_spell_casting',
          name: { en: 'Spell Casting & Creation System', es: 'Lanzamiento y Sistema de Creación de Hechizos' },
          type: 'active',
          spiCost: 0, // Varies
          description: {
            en: 'Needs 1 turn Concentration, 1 turn cast, + medium. May design spells using Thaumatology. 1 SPI base, +1 SPI for strength/duration. Thaumatology roll determines efficiency or backfire.',
            es: 'Requiere 1 turno de Concentración, 1 turno de casteo, + medio. Puede diseñar hechizos usando Taumaturgia. 1 SPI base, +1 SPI por fuerza/duración. Tirada de Taumaturgia determina eficiencia o fracaso.'
          }
        },
        {
          id: 'hermit_seq7_eyes_prying',
          replaces: 'hermit_seq8_eyes_prying',
          name: { en: 'Eyes of Mystery Prying++', es: 'Ojos que Indagan Misterios++' },
          type: 'active',
          spiCost: 1,
          description: {
            en: 'Eyes of Mystery Prying+: Passive penalty to Dream/Illusion is -3. Active use reveals combat weaknesses in Ether Body, Eyes of Mystery Prying++ Read surface thoughts/dreams of sleeping targets {{without a roll}}. For waking targets, penalty to save is {{-4}} and you may learn {{1 random weakness/fear}} on success.',
            es: 'Ojos que Indagan Misterios+: Penalidad pasiva a Sueño/Ilusión es -3. Uso activo revela debilidades de combate en el Cuerpo Etérico, Ojos que Indagan Misterios++ Lee pensamientos superficiales/sueños de objetivos dormidos {{sin tirar}}. Para objetivos despiertos, penalidad de salvación {{-4}} y puede aprender {{1 debilidad/miedo aleatorio}} al tener éxito.'
          }
        },
        {
          id: 'hermit_seq7_quick_rituals',
          replaces: 'hermit_seq8_quick_rituals',
          name: { en: 'Quick Rituals++', es: 'Rituales Rápidos++' },
          type: 'passive',
          description: {
            en: 'Quick Rituals+: Penalty for rushed rituals is decreased by 4, Quick Rituals++ Rushed ritual penalty reduction is {{-5}}. Perform rituals at {{half time}} (min 1 min) and can maintain concentration on one ritual {{while moving}}.',
            es: 'Rituales Rápidos+: La penalidad por rituales apresurados se reduce en 4, Rituales Rápidos++ Reducción de penalidad por ritual rápido es {{-5}}. Realiza rituales en {{mitad de tiempo}} (mín 1 min) y puede mantener concentración en un ritual {{mientras se mueve}}.'
          }
        }
      ]
    },
    {
      level: 6,
      name: { en: 'Scroll Professor', es: 'Profesor de Pergaminos' },
      statBonuses: [
        { stat: 'SPI', bonus: 3 },
        { stat: 'ST', bonus: 1 },
        { stat: 'HT', bonus: 1 }
      ],
      skillBonuses: [],
      abilities: [
        {
          id: 'hermit_seq6_main',
          name: { en: 'Scroll Professor', es: 'Profesor de Pergaminos' },
          type: 'active',
          spiCost: 2,
          description: {
            en: 'Can write spells on scrolls.',
            es: 'Puede escribir hechizos en pergaminos.'
          }
        }
      ]
    }
  ]
};
