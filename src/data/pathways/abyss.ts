import { Pathway } from '../types';

export const abyssPathway: Pathway = {
  id: 'abyss',
  name: { en: 'Abyss Pathway', es: 'Senda del Abismo' },
  sequences: [
    {
      level: 9,
      name: { en: 'Criminal', es: 'Criminal' },
      statBonuses: [
        { stat: 'ST', bonus: 2 },
        { stat: 'Per', bonus: 2 },
        { stat: 'SPI', bonus: 1 },
        { stat: 'Will', bonus: -1 }
      ],
      skillBonuses: [
        { skillId: 'guns_revolver', bonus: 3 },
        { skillId: 'knife', bonus: 2 },
        { skillId: 'brawling', bonus: 2 },
        { skillId: 'throwing', bonus: 1 },
        { skillId: 'fast_draw_revolver', bonus: 2 },
        { skillId: 'wrestling', bonus: 1 },
        { skillId: 'boxing', bonus: 1 },
        { skillId: 'streetwise', bonus: 1 }
      ],
      abilities: [
        {
          id: 'abyss_seq9_mind',
          name: { en: "Criminal's Mind", es: 'Mente Criminal' },
          type: 'drawback',
          description: {
            en: 'Roll Will when suppressing evil desires. Define with the GM which new evil desires define your character — murder, lust, theft, etc.',
            es: 'Tira Voluntad al reprimir deseos malvados. Define con el DJ qué nuevos deseos malvados definen a tu personaje: asesinato, lujuria, robo, etc.'
          }
        },
        {
          id: 'abyss_seq9_weapons',
          name: { en: 'Criminal Proficiency — Universal Weapons', es: 'Proficiencia Criminal — Armas Universales' },
          type: 'passive',
          description: {
            en: 'Regardless of the weapon, they can utilize all of them to kill effectively. Treat any improvised weapon as Knife or Brawling skill. Equally deadly with ranged weapons, can pick up any firearm and fire it with ease using the most similar Gun skill.',
            es: 'Independientemente del arma, pueden utilizarlas todas para matar con eficacia. Trata cualquier arma improvisada con la habilidad de Cuchillo o Pelea. Igualmente mortales con armas a distancia, pueden usar cualquier arma de fuego con facilidad usando la habilidad de Armas de Fuego más similar.'
          }
        }
      ]
    },
    {
      level: 8,
      name: { en: 'Unwinged Angel (Coldblooded)', es: 'Ángel sin Alas (Sangre Fría)' },
      statBonuses: [
        { stat: 'ST', bonus: 2 },
        { stat: 'SPI', bonus: 1 },
        { stat: 'Will', bonus: -1 }
      ],
      skillBonuses: [],
      abilities: [
        {
          id: 'abyss_seq8_bloodlust',
          name: { en: 'Bloodlust', es: 'Sed de Sangre' },
          type: 'drawback',
          description: {
            en: 'Must go for killing blows in combat. IQ roll to accept surrender or take prisoners.',
            es: 'Debe ir a por golpes mortales en combate. Tirada de IQ para aceptar rendición o tomar prisioneros.'
          }
        },
        {
          id: 'abyss_seq8_callous',
          name: { en: 'Callous', es: 'Cruel' },
          type: 'drawback',
          description: {
            en: '-3 to social skill rolls when warmth or empathy is required.',
            es: '-3 a tiradas de habilidades sociales cuando se requiere calidez o empatía.'
          }
        },
        {
          id: 'abyss_seq8_compulsion',
          name: { en: 'Compulsive Behavior (Indulge Evil Desires)', es: 'Comportamiento Compulsivo (Complacer Deseos Malvados)' },
          type: 'drawback',
          description: {
            en: 'When an opportunity to commit an evil act (murder, torture, betrayal, etc.) presents itself, roll 3d6≤6 or indulge fully.',
            es: 'Cuando se presenta una oportunidad para cometer un acto malvado (asesinato, tortura, traición, etc.), tira 3d6≤6 o complace completamente.'
          }
        },
        {
          id: 'abyss_seq8_appearance',
          name: { en: 'Unsettling Appearance', es: 'Apariencia Inquietante' },
          type: 'drawback',
          description: {
            en: 'NPCs are unsettled by your presence (GM discretion).',
            es: 'Los PNJs se inquietan por tu presencia (a discreción del DJ).'
          }
        },
        {
          id: 'abyss_seq8_power_roll',
          name: { en: 'Abyss Power Roll', es: 'Tirada de Poder del Abismo' },
          type: 'passive',
          description: {
            en: 'Spells are innate demonic abilities requiring designated FP cost instead of SPI. You may sacrifice 1 HP to fuel any spell. Roll 3d6 at start of day. <8: pick 3 spells. 8-14: pick 2 spells. >14: pick 1 spell.',
            es: 'Los hechizos son habilidades demoníacas innatas que requieren coste de FP en lugar de SPI. Puedes sacrificar 1 HP para potenciar cualquier hechizo. Tira 3d6 al inicio del día. <8: elige 3 hechizos. 8-14: elige 2 hechizos. >14: elige 1 hechizo.'
          }
        },
        {
          id: 'abyss_seq8_spells_ht',
          name: { en: 'Abyssal Spells (Resisted by HT)', es: 'Hechizos Abismales (Resistidos por HT)' },
          type: 'active',
          description: {
            en: 'Demonic abilities fueled by FP instead of SPI.\n\n{{Crown of Contempt}}: 5m radius push and -2 to next attack.\n{{Poisonous Flames}}: Melee touch 1d6 toxic + 1d6-2/2 turns.\n{{Toxic Black Smoke}}: 3m radius cloud, 1d6-2 toxic/turn.\n{{Slowness}}: -1 Spd/Move.\n{{Rending Grasp}}: Tears 1d6 FP on touch.\n{{Fevered Haze}}: 2m radius, -2 DX, -1 Move.\n{{Fracture}}: Target\'s next attack deals half damage.',
            es: 'Habilidades demoníacas potenciadas por FP en lugar de SPI.\n\n{{Corona del Desprecio}}: Empuje en 5m y -2 al próximo ataque.\n{{Llamas Venenosas}}: Toque 1d6 tóxico + 1d6-2 por 2 turnos.\n{{Humo Negro Tóxico}}: Nube de 3m, 1d6-2 tóxico/turno.\n{{Lentitud}}: -1 Vel/Mov.\n{{Agarre Desgarrador}}: Arranca 1d6 FP al toque.\n{{Neblina Febril}}: 2m radio, -2 DX, -1 Mov.\n{{Fractura}}: Próximo ataque del objetivo inflige mitad de daño.'
          },
          spiOptions: [
            { name: { en: 'Crown of Contempt', es: 'Corona del Desprecio' }, cost: 1 },
            { name: { en: 'Poisonous Flames', es: 'Llamas Venenosas' }, cost: 2 },
            { name: { en: 'Toxic Black Smoke', es: 'Humo Negro Tóxico' }, cost: 1 },
            { name: { en: 'Slowness', es: 'Lentitud' }, cost: 1 },
            { name: { en: 'Rending Grasp', es: 'Agarre Desgarrador' }, cost: 2 },
            { name: { en: 'Fevered Haze', es: 'Neblina Febril' }, cost: 2 },
            { name: { en: 'Fracture', es: 'Fractura' }, cost: 2 }
          ]
        },
        {
          id: 'abyss_seq8_spells_will',
          name: { en: 'Abyssal Curses (Resisted by Will)', es: 'Maldiciones Abismales (Resistidas por Voluntad)' },
          type: 'active',
          description: {
            en: 'Demonic curses fueled by FP instead of SPI.\n\n{{Mirror of Inadequacy}}: -2 to all rolls.\n{{Spiritual Covetousness}}: Hoards instead of attacking.\n{{Hollow Craving}}: -1 Will/Per.\n{{Sever the Bond}}: Ally becomes rival.\n{{Drain}}: Lose 2 FP.\n{{Stoke the Coal}}: -2 to restraint rolls.\n{{Leaden Soul}}: -1 Spd/Move, needs Will to act.',
            es: 'Maldiciones demoníacas potenciadas por FP en lugar de SPI.\n\n{{Espejo de Inadecuación}}: -2 a toda tirada.\n{{Codicia Espiritual}}: Acapara en lugar de atacar.\n{{Anhelo Hueco}}: -1 Vol/Per.\n{{Cortar el Vínculo}}: Aliado se vuelve rival.\n{{Drenaje}}: Pierde 2 FP.\n{{Avivar el Carbón}}: -2 a tiradas de contención.\n{{Alma de Plomo}}: -1 Vel/Mov, requiere Vol para actuar.'
          },
          spiOptions: [
            { name: { en: 'Mirror of Inadequacy', es: 'Espejo Inadecuación' }, cost: 2 },
            { name: { en: 'Spiritual Covetousness', es: 'Codicia Espiritual' }, cost: 1 },
            { name: { en: 'Hollow Craving', es: 'Anhelo Hueco' }, cost: 1 },
            { name: { en: 'Sever the Bond', es: 'Cortar Vínculo' }, cost: 2 },
            { name: { en: 'Drain', es: 'Drenaje' }, cost: 1 },
            { name: { en: 'Stoke the Coal', es: 'Avivar Carbón' }, cost: 1 },
            { name: { en: 'Leaden Soul', es: 'Alma Plomo' }, cost: 2 }
          ]
        },
        {
          id: 'abyss_seq8_proficiency',
          replaces: 'abyss_seq9_weapons',
          name: { en: 'Criminal Proficiency+', es: 'Proficiencia Criminal+' },
          type: 'passive',
          description: {
            en: 'Criminal Proficiency: Regardless of the weapon, they can utilize all of them to kill effectively. Treat any improvised weapon as Knife or Brawling skill, Criminal Proficiency+ Improvised weapons treated as Brawling {{+2}}. Any firearm fired at effective {{DX+1}}. Poison-use rolls gain {{+2}}.',
            es: 'Proficiencia Criminal: Independientemente del arma, pueden utilizarlas todas para matar con eficacia. Trata cualquier arma improvisada con la habilidad de Cuchillo o Pelea, Proficiencia Criminal+ Armas improvisadas tratadas como Pelea {{+2}}. Cualquier arma de fuego disparada a {{DX+1}} efectivo. Uso de veneno gana {{+2}}.'
          }
        }
      ]
    },
    {
      level: 7,
      name: { en: 'Serial Killer', es: 'Asesino en Serie' },
      statBonuses: [
        { stat: 'SPI', bonus: 3 },
        { stat: 'ST', bonus: 1 },
        { stat: 'HT', bonus: 1 }
      ],
      skillBonuses: [],
      abilities: [
        {
          id: 'abyss_seq7_main',
          name: { en: 'Serial Killer', es: 'Asesino en Serie' },
          type: 'active',
          spiCost: 2,
          description: {
            en: 'Advanced combat and killing abilities.',
            es: 'Habilidades avanzadas de combate y asesinato.'
          }
        }
      ]
    },
    {
      level: 6,
      name: { en: 'Devil', es: 'Diablo' },
      statBonuses: [
        { stat: 'SPI', bonus: 3 },
        { stat: 'ST', bonus: 1 },
        { stat: 'HT', bonus: 1 }
      ],
      skillBonuses: [],
      abilities: [
        {
          id: 'abyss_seq6_main',
          name: { en: 'Devil', es: 'Diablo' },
          type: 'active',
          spiCost: 2,
          description: {
            en: 'Demonic transformation and danger precognition.',
            es: 'Transformación demoníaca y precognición de peligro.'
          }
        }
      ]
    }
  ]
};
