const fs = require('fs');
let content = fs.readFileSync('src/data/pathways/twilight_giant.ts', 'utf8');

// Replace the Sequence 7 section entirely
content = content.replace(
  `level: 7,
      name: { en: 'Weapon Master', es: 'Maestro de Armas' },
      statBonuses: [
        { stat: 'DX', bonus: 3 },
        { stat: 'ST', bonus: 1 },
        { stat: 'HT', bonus: 1 },
        { stat: 'SPI', bonus: 2 }
      ],
      skillBonuses: [
        { skillId: 'broadsword', bonus: 3 },
        { skillId: 'polearm', bonus: 2 },
        { skillId: 'armoury_any', bonus: 2 },
        { skillId: 'brawling', bonus: 2 }
      ],
      abilities: [
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
        }
      ]`,
  `level: 7,
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
            en: 'Charge an attack for 2 consecutive turns of concentration — the third turn\\'s melee attack deals double damage (minimum +1d6). May shatter non-magical shields/objects.',
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
          name: { en: 'Stone Body (Reinforced)', es: 'Cuerpo de Piedra (Reforzado)' },
          type: 'passive',
          description: {
            en: 'DR from Pugilist\\'s body increases by +1 (total DR 3 if combined with potion). Natural DR now protects against corrosion at half value (rounded down).',
            es: 'La RD del cuerpo de Púgil aumenta en +1 (RD total de 3 combinado con poción). La RD natural protege contra corrosión a la mitad del valor (redondeado hacia abajo).'
          }
        }
      ]`
);

fs.writeFileSync('src/data/pathways/twilight_giant.ts', content);
console.log("Fixed Weapon Master in Twilight Giant");
