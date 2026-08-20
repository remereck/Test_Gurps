import { Pathway } from '../types';

export const twilightGiantPathway: Pathway = {
  id: 'twilight_giant',
  name: { en: 'Twilight Giant Pathway', es: 'Senda del Gigante del Crepúsculo' },
  sequences: [
    {
      level: 9,
      name: { en: 'Warrior', es: 'Guerrero' },
      statBonuses: [
        { stat: 'ST', bonus: 3 },
        { stat: 'DX', bonus: 2 },
        { stat: 'HT', bonus: 1 },
        { stat: 'SPI', bonus: 1 }
      ],
      skillBonuses: [
        { skillId: 'broadsword', bonus: 3 },
        { skillId: 'shield', bonus: 2 },
        { skillId: 'polearm', bonus: 2 },
        { skillId: 'armoury_any', bonus: 2 },
        { skillId: 'brawling', bonus: 2 }
      ],
      abilities: [
        {
          id: 'tg_seq9_combat_mastery',
          name: { en: 'Combat Mastery', es: 'Maestría en Combate' },
          type: 'passive',
          description: {
            en: 'Mastery of all kinds of weapons and armour, with no weapon they cannot use and no fighting style they cannot learn. Suffers no default penalty when using any weapon type for the first time — every weapon is treated as known at effective DX (no default penalty) from the moment it is picked up. Weapons used repeatedly in a session are treated as known at default +2. They also don and maintain any armour type without penalty and fight effectively in it.',
            es: 'Maestría en todo tipo de armas y armaduras, sin arma que no puedan usar ni estilo que no puedan aprender. No sufre penalización por defecto al usar cualquier tipo de arma por primera vez: cada arma se trata como conocida a nivel DX efectivo (sin penalización por defecto) desde el momento en que se recoge. Las armas usadas repetidamente en una sesión se tratan como conocidas a nivel defecto +2. También se equipan y mantienen cualquier tipo de armadura sin penalización y luchan eficazmente con ella.'
          }
        }
      ]
    },
    {
      level: 8,
      name: { en: 'Pugilist', es: 'Púgil' },
      statBonuses: [
        { stat: 'ST', bonus: 3 },
        { stat: 'HT', bonus: 1 },
        { stat: 'SPI', bonus: 1 }
      ],
      skillBonuses: [
        { skillId: 'brawling', bonus: 5 },
        { skillId: 'wrestling', bonus: 3 },
        { skillId: 'intimidation', bonus: 2 }
      ],
      abilities: [
        {
          id: 'tg_seq8_dr',
          name: { en: 'DR 1 (All)', es: 'RD 1 (Todo)' },
          type: 'passive',
          description: {
            en: 'Resistance to all physical damage.',
            es: 'Resistencia a todo daño físico.'
          }
        },
        {
          id: 'tg_seq8_pain_threshold',
          name: { en: 'High Pain Threshold', es: 'Alto Umbral de Dolor' },
          type: 'passive',
          description: {
            en: '+3 to HT rolls to avoid knockdown/stun; no shock penalty from injury.',
            es: '+3 a tiradas de HT para evitar derribo/aturdimiento; sin penalización por shock de heridas.'
          }
        },
        {
          id: 'tg_seq8_iron_body',
          name: { en: 'Iron Body', es: 'Cuerpo de Hierro' },
          type: 'active',
          spiCost: 0,
          description: {
            en: 'When taking damage from a supernatural source, may spend 1-3 FP as a reactive free action to reduce incoming damage by 2 per FP spent (applied after resistance roll, before DR).',
            es: 'Al recibir daño de una fuente sobrenatural, puede gastar 1-3 FP como acción libre reactiva para reducir el daño entrante en 2 por cada FP gastado (aplicado después de la tirada de resistencia, antes de la RD).'
          }
        },
        {
          id: 'tg_seq8_combat_mastery',
          replaces: 'tg_seq9_combat_mastery',
          name: { en: 'Combat Mastery+', es: 'Maestría en Combate+' },
          type: 'passive',
          description: {
            en: 'Combat Mastery: Mastery of all kinds of weapons and armour, with no weapon they cannot use and no fighting style they cannot learn. Suffers no default penalty when using any weapon type for the first time — every weapon is treated as known at effective DX (no default penalty) from the moment it is picked up. Weapons used repeatedly in a session are treated as known at default +2. They also don and maintain any armour type without penalty and fight effectively in it., {{Combat Mastery+: Treats any melee weapon as known at effective DX immediately (no warm-up needed). Ranged weapons still need one use to reach full proficiency.}}',
            es: 'Maestría en Combate: Maestría en todo tipo de armas y armaduras, sin arma que no puedan usar ni estilo que no puedan aprender. No sufre penalización por defecto al usar cualquier tipo de arma por primera vez: cada arma se trata como conocida a nivel DX efectivo (sin penalización por defecto) desde el momento en que se recoge. Las armas usadas repetidamente en una sesión se tratan como conocidas a nivel defecto +2. También se equipan y mantienen cualquier tipo de armadura sin penalización y luchan eficazmente con ella., {{Maestría en Combate+: Trata cualquier arma cuerpo a cuerpo como conocida a nivel DX efectivo inmediatamente (sin calentamiento). Las armas a distancia aún necesitan un uso para alcanzar la competencia completa.}}'
          }
        }
      ]
    },
    {
      level: 7,
      name: { en: 'Weapon Master', es: 'Maestro de Armas' },
      statBonuses: [
        { stat: 'ST', bonus: 2 },
        { stat: 'DX', bonus: 1 },
        { stat: 'HT', bonus: 1 },
        { stat: 'Per', bonus: 1 },
        { stat: 'SPI', bonus: 1 }
      ],
      skillBonuses: [
        { skillId: 'broadsword', bonus: 3 },
        { skillId: 'polearm', bonus: 2 },
        { skillId: 'shield', bonus: 2 },
        { skillId: 'armoury_any', bonus: 2 }
      ],
      abilities: [
        {
          id: 'tg_seq7_dr',
          name: { en: 'DR 1 (All)', es: 'RD 1 (Todo)' },
          type: 'passive',
          description: {
            en: 'Resistance to all physical damage (stacks with DR from Pugilist).',
            es: 'Resistencia a todo daño físico (se acumula con la RD de Púgil).'
          }
        },
        {
          id: 'tg_seq7_weapon_mastery',
          name: { en: 'Weapon Mastery', es: 'Dominio de Armas' },
          type: 'passive',
          description: {
            en: 'Can use any weapon at master-level standard the moment it enters their hands. Includes mundane, Beyonder, Mystical Items, and Sealed Artifacts. Requires no warm-up — every weapon is treated as known at effective DX instantly. Dons and maintains any armour type without penalty. Strict upgrade replacing Combat Mastery.',
            es: 'Puede usar cualquier arma a nivel de maestro en el momento en que entra en sus manos. Incluye mundanas, Beyonder, Objetos Místicos y Artefactos Sellados. No requiere calentamiento: cada arma se trata como conocida a nivel DX efectivo al instante. Se equipa y mantiene cualquier armadura sin penalidad. Mejora estricta que reemplaza Maestría en Combate.'
          }
        },
        {
          id: 'tg_seq7_negative_resist',
          name: { en: 'Negative Effect Resistance', es: 'Resistencia a Efectos Negativos' },
          type: 'passive',
          description: {
            en: 'When wielding Mystical Items or Sealed Artifacts, halves any FP or HP damage taken from its negative effects (after resistance, before modifiers, rounded down) and gains +3 to any resistance roll against its detrimental effects.',
            es: 'Al empuñar Objetos Místicos o Artefactos Sellados, reduce a la mitad cualquier daño de FP o HP recibido de sus efectos negativos (después de resistencia, antes de modificadores, redondeado hacia abajo) y gana +3 a cualquier tirada de resistencia contra sus efectos perjudiciales.'
          }
        },
        {
          id: 'tg_seq7_powerful_blow',
          name: { en: 'Powerful Blow', es: 'Golpe Poderoso' },
          type: 'active',
          spiCost: 0,
          description: {
            en: 'Charge an attack for 2 consecutive turns of concentration — the third turn\'s melee attack deals double damage (minimum +1d6). May shatter non-magical shields/objects.',
            es: 'Carga un ataque por 2 turnos consecutivos de concentración — el ataque cuerpo a cuerpo del tercer turno inflige doble daño (mínimo +1d6). Puede destrozar escudos u objetos no mágicos.'
          }
        },
        {
          id: 'tg_seq7_counterattack',
          name: { en: 'Counterattack', es: 'Contraataque' },
          type: 'passive',
          description: {
            en: 'After a successful active defense, may make an immediate counterattack at no penalty. Once per turn.',
            es: 'Después de una defensa activa exitosa, puede realizar un contraataque inmediato sin penalización. Una vez por turno.'
          }
        },
        {
          id: 'tg_seq7_stone_body',
          replaces: 'tg_seq8_dr',
          name: { en: 'Stone Body+', es: 'Cuerpo de Piedra+' },
          type: 'passive',
          description: {
            en: 'DR 1 (All): Resistance to all physical damage., {{Stone Body+: DR from Pugilist\'s body increases by +1 (total DR 3 if combined with potion). Natural DR now protects against corrosion at half value (rounded down).}}',
            es: 'RD 1 (Todo): Resistencia a todo daño físico., {{Cuerpo de Piedra+: La RD del cuerpo de Púgil aumenta en +1 (RD total de 3 combinado con poción). La RD natural protege contra corrosión a la mitad del valor (redondeado hacia abajo).}}'
          }
        }
      ]
    },
    {
      level: 6,
      name: { en: 'Dawn Paladin', es: 'Paladín del Alba' },
      statBonuses: [
        { stat: 'SPI', bonus: 3 },
        { stat: 'ST', bonus: 1 },
        { stat: 'HT', bonus: 1 }
      ],
      skillBonuses: [],
      abilities: [
        {
          id: 'tg_seq6_main',
          name: { en: 'Dawn Paladin', es: 'Paladín del Alba' },
          type: 'active',
          spiCost: 2,
          description: {
            en: 'Uses light of dawn to purge evil.',
            es: 'Usa la luz del alba para purgar el mal.'
          }
        }
      ]
    }
  ]
};
