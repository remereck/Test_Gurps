import { Pathway } from '../types';

export const chainedPathway: Pathway = {
  id: 'chained',
  name: { en: 'Chained Pathway', es: 'Senda del Encadenado' },
  sequences: [
    {
      level: 9,
      name: { en: 'Prisoner', es: 'Prisionero' },
      statBonuses: [
        { stat: 'ST', bonus: 2 },
        { stat: 'HT', bonus: 1 },
        { stat: 'Per', bonus: 2 }
      ],
      skillBonuses: [
        { skillId: 'holdout', bonus: 5 },
        { skillId: 'lockpicking', bonus: 5 },
        { skillId: 'escape', bonus: 5 },
        { skillId: 'explosives_demolition', bonus: 3 },
        { skillId: 'intimidation', bonus: 2 },
        { skillId: 'stealth', bonus: 1 },
        { skillId: 'brawling', bonus: 1 }
      ],
      abilities: [
        {
          id: 'chained_seq9_binding',
          name: { en: 'Binding (Prisoner)', es: 'Atadura (Prisionero)' },
          type: 'passive',
          description: {
            en: 'Spirituality and desires are Bound; Spiritual Perception and readings against them are at -4 when composed. Appear indistinct and calm, making it hard to detect you are a Beyonder.',
            es: 'Espiritualidad y deseos están atados; la Percepción Espiritual y las lecturas contra ellos tienen -4 si están compuestos. Parecen indistintos y calmados, dificultando detectar que son Beyonders.'
          }
        },
        {
          id: 'chained_seq9_heart',
          name: { en: 'Turbulent Heart', es: 'Corazón Turbulento' },
          type: 'drawback',
          description: {
            en: 'Roll Will when suppressing desires. Define with the GM which new strong desires define your character.',
            es: 'Tira Voluntad al reprimir deseos. Define con el DJ qué nuevos deseos fuertes definen a tu personaje.'
          }
        },
        {
          id: 'chained_seq9_criminal',
          name: { en: 'Knowledge — Criminal Expert', es: 'Conocimiento — Experto Criminal' },
          type: 'passive',
          description: {
            en: 'Mastery of criminal techniques. Improvised weapons treated as Brawling or ST. Escape rolls against mundane confinement suffer no penalty. Always know hidden exits within 10m.',
            es: 'Dominio de técnicas criminales. Armas improvisadas se tratan como Pelea o ST. Tiradas de escape contra encierros mundanos no tienen penalización. Siempre conoce salidas ocultas en 10m.'
          }
        }
      ]
    },
    {
      level: 8,
      name: { en: 'Lunatic', es: 'Lunático' },
      statBonuses: [
        { stat: 'ST', bonus: 2 },
        { stat: 'HT', bonus: 1 },
        { stat: 'SPI', bonus: 1 }
      ],
      skillBonuses: [
        { skillId: 'brawling', bonus: 4 },
        { skillId: 'intimidation', bonus: 3 },
        { skillId: 'survival_any', bonus: 2 },
        { skillId: 'wrestling', bonus: 2 }
      ],
      abilities: [
        {
          id: 'chained_seq8_berserk',
          name: { en: 'Berserk (Voluntary)', es: 'Berserk (Voluntario)' },
          type: 'active',
          spiCost: 0,
          description: {
            en: 'Can choose to sacrifice rationality for power; not forced involuntarily.',
            es: 'Puede elegir sacrificar racionalidad por poder; no se fuerza involuntariamente.'
          }
        },
        {
          id: 'chained_seq8_dr',
          name: { en: 'DR 2 (Physical)', es: 'RD 2 (Física)' },
          type: 'passive',
          description: {
            en: 'Resistance to physical damage.',
            es: 'Resistencia al daño físico.'
          }
        },
        {
          id: 'chained_seq8_healing',
          name: { en: 'Rapid Healing', es: 'Curación Rápida' },
          type: 'passive',
          description: {
            en: '+5 to daily HT rolls to recover HP.',
            es: '+5 a tiradas diarias de HT para recuperar HP.'
          }
        },
        {
          id: 'chained_seq8_resistance',
          name: { en: 'Divination/Spirit Channel Resistance', es: 'Resistencia a Adivinación/Canalización' },
          type: 'passive',
          description: {
            en: 'Body and soul are Bound; Divination and Spirit Channeling targeting the Lunatic are at -4.',
            es: 'Cuerpo y alma están atados; Adivinación y Canalización Espiritual hacia el Lunático tienen -4.'
          }
        },
        {
          id: 'chained_seq8_curse',
          name: { en: "Lunatic's Curse", es: 'Maldición del Lunático' },
          type: 'drawback',
          description: {
            en: 'Loses control more easily; CoR thresholds reduced by 2. When injured below half HP, automatically enters uncontrolled empowered state (ST +3, HT +2, ignore pain, attack everything) until fight ends or Will-4.',
            es: 'Pierde el control más fácil; umbrales de CoR reducidos en 2. Al ser herido por debajo de media vida, entra en estado de poder descontrolado (ST+3, HT+2, ignora dolor, ataca a todos) hasta fin de pelea o Vol-4.'
          }
        },
        {
          id: 'chained_seq8_criminal',
          replaces: 'chained_seq9_criminal',
          name: { en: 'Knowledge — Criminal Expert+', es: 'Conocimiento — Experto Criminal+' },
          type: 'passive',
          description: {
            en: 'Knowledge — Criminal Expert: Mastery of criminal techniques. Escape rolls against mundane confinement suffer no penalty. Always know hidden exits within 10m, Knowledge — Criminal Expert+ Improvised weapons gain {{+1 damage}}. Escape {{supernatural confinement}} at full skill without penalty. Hidden exit awareness expands to {{20m}}.',
            es: 'Conocimiento — Experto Criminal: Dominio de técnicas criminales. Tiradas de escape contra encierros mundanos no tienen penalización. Siempre conoce salidas ocultas en 10m, Conocimiento — Experto Criminal+ Armas improvisadas ganan {{+1 de daño}}. Escapa de {{confinamiento sobrenatural}} con habilidad completa sin penalización. Salidas ocultas se expanden a {{20m}}.'
          }
        }
      ]
    },
    {
      level: 7,
      name: { en: 'Werewolf', es: 'Hombre Lobo' },
      statBonuses: [
        { stat: 'ST', bonus: 3 },
        { stat: 'DX', bonus: 1 },
        { stat: 'HT', bonus: 1 },
        { stat: 'SPI', bonus: 1 }
      ],
      skillBonuses: [
        { skillId: 'brawling', bonus: 4 },
        { skillId: 'intimidation', bonus: 4 },
        { skillId: 'survival_any', bonus: 3 },
        { skillId: 'stealth', bonus: 2 },
        { skillId: 'tracking', bonus: 3 }
      ],
      abilities: [
        {
          id: 'chained_seq7_dr',
          name: { en: 'DR 2 (All)', es: 'RD 2 (Todo)' },
          type: 'passive',
          description: {
            en: 'Physical toughness even outside transformation.',
            es: 'Dureza física incluso fuera de la transformación.'
          }
        },
        {
          id: 'chained_seq7_regeneration',
          name: { en: 'Regeneration (Fast)', es: 'Regeneración (Rápida)' },
          type: 'passive',
          description: {
            en: 'Recover 1 HP per minute while in Full Transformation only.',
            es: 'Recupera 1 HP por minuto solo en Transformación Completa.'
          }
        },
        {
          id: 'chained_seq7_move',
          name: { en: 'Basic Move +1', es: 'Movimiento Básico +1' },
          type: 'passive',
          description: {
            en: 'Increased movement speed.',
            es: 'Velocidad de movimiento aumentada.'
          }
        },
        {
          id: 'chained_seq7_night_vision',
          name: { en: 'Night Vision 9', es: 'Visión Nocturna 9' },
          type: 'passive',
          description: {
            en: 'See clearly in near-total darkness; no penalties in moonlight/starlight.',
            es: 'Ve claramente en oscuridad casi total; sin penalización con luz de luna/estrellas.'
          }
        },
        {
          id: 'chained_seq7_sun_vuln',
          name: { en: 'Sun Vulnerability', es: 'Vulnerabilidad al Sol' },
          type: 'drawback',
          description: {
            en: 'Sun abilities deal double damage and ignore DR. Regeneration suspended for 1 minute after hit.',
            es: 'Habilidades del Sol hacen doble daño e ignoran RD. Regeneración suspendida por 1 minuto al ser golpeado.'
          }
        },
        {
          id: 'chained_seq7_moon_curse',
          name: { en: 'Full Moon Curse', es: 'Maldición de Luna Llena' },
          type: 'drawback',
          description: {
            en: 'Every full moon roll Will-3 or enter uncontrolled semi-transformed state. Lunatic\'s curse retained.',
            es: 'Cada luna llena tira Voluntad-3 o entra en estado semi-transformado descontrolado. Se mantiene maldición de Lunático.'
          }
        },
        {
          id: 'chained_seq7_partial',
          name: { en: 'Partial Transformation', es: 'Transformación Parcial' },
          type: 'active',
          spiCost: 1, // per feature
          description: {
            en: 'Manifest claws, venom, or speed without full transformation. Lasts the scene.',
            es: 'Manifiesta garras, veneno o velocidad sin transformación completa. Dura la escena.'
          }
        },
        {
          id: 'chained_seq7_full',
          name: { en: 'Full Transformation', es: 'Transformación Completa' },
          type: 'active',
          spiCost: 1, // per minute
          description: {
            en: 'Lasts 1 min. ST+3, DX+2. Claws (sw+2 cut), Bite (thr+2 imp). Venom (HT-2 each round or -2 physical). Speed +1 Move. Regen 1 HP/min.',
            es: 'Dura 1 min. ST+3, DX+2. Garras (sw+2 corte), Mordisco (thr+2 imp). Veneno (HT-2 cada ronda o -2 físico). Vel +1 Mov. Regen 1 HP/min.'
          }
        },
        {
          id: 'chained_seq7_kin',
          name: { en: 'Werewolf Kin', es: 'Progenie de Hombre Lobo' },
          type: 'active',
          spiCost: 1,
          description: {
            en: 'If target failed HT against venom, SPI vs Will to make them puppet Werewolf for 1d hours.',
            es: 'Si el objetivo falló HT contra veneno, SPI vs Voluntad para hacerlo un Hombre Lobo títere por 1d horas.'
          }
        },
        {
          id: 'chained_seq7_dark',
          name: { en: 'Dark Horror', es: 'Horror Oscuro' },
          type: 'active',
          spiCost: 1,
          description: {
            en: 'Deepens darkness within 10m. Targets Will or -2 rational thought/move. Fail by 5+ paralyzed with dread.',
            es: 'Profundiza oscuridad en 10m. Objetivos tiran Vol o -2 pensamiento/mov. Fallo por 5+ paralizado por miedo.'
          }
        },
        {
          id: 'chained_seq7_repel',
          name: { en: 'Repel Light', es: 'Repeler Luz' },
          type: 'active',
          spiCost: 0,
          description: {
            en: 'Pushes back faint illumination within 5m.',
            es: 'Empuja la iluminación tenue en 5m.'
          }
        },
        {
          id: 'chained_seq7_anti_div',
          name: { en: 'Anti-Divination', es: 'Anti-Adivinación' },
          type: 'passive',
          description: {
            en: 'Divination reveals only figure covered in black hair. Higher seq may bypass with SPI vs SPI.',
            es: 'Adivinación solo revela figura cubierta de pelo negro. Secuencias altas pueden saltarlo con SPI vs SPI.'
          }
        },
        {
          id: 'chained_seq7_escape',
          name: { en: 'Escape Artist / Hidden Exits', es: 'Artista del Escape / Salidas Ocultas' },
          type: 'passive',
          description: {
            en: 'Escape supernatural bonds at full Escape +2. Sense hidden exits up to 30m, pierces Seq 7 concealment.',
            es: 'Escapa lazos sobrenaturales con Escape +2. Siente salidas ocultas hasta 30m, penetra ocultamiento de Seq 7.'
          }
        }
      ]
    },
    {
      level: 6,
      name: { en: 'Zombie', es: 'Zombi' },
      statBonuses: [
        { stat: 'SPI', bonus: 3 },
        { stat: 'ST', bonus: 1 },
        { stat: 'HT', bonus: 1 }
      ],
      skillBonuses: [],
      abilities: [
        {
          id: 'chained_seq6_main',
          name: { en: 'Zombie', es: 'Zombi' },
          type: 'active',
          spiCost: 2,
          description: {
            en: 'Undead traits and ice/death powers.',
            es: 'Rasgos de no-muerto y poderes de hielo/muerte.'
          }
        }
      ]
    }
  ]
};
