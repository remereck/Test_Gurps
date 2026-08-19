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
          spiCost: 1, // Actually uses FP, generalized to 1-2
          description: {
            en: 'Crown of Contempt (1 FP): 5m radius push and -2 to next attack. Poisonous Flames (2 FP): Melee touch 1d6 toxic + 1d6-2/2 turns. Toxic Black Smoke (1 FP): 3m radius cloud, 1d6-2 toxic/turn. Slowness (1 FP): -1 Spd/Move. Rending Grasp (2 FP): Tears 1d6 FP on touch. Fevered Haze (2 FP): 2m radius, -2 DX, -1 Move. Fracture (2 FP): Target\'s next attack deals half damage.',
            es: 'Corona del Desprecio (1 FP): Empuje en 5m y -2 al próximo ataque. Llamas Venenosas (2 FP): Toque cuerpo a cuerpo 1d6 tóxico + 1d6-2 por 2 turnos. Humo Negro Tóxico (1 FP): Nube de 3m, 1d6-2 tóxico/turno. Lentitud (1 FP): -1 Vel/Mov. Agarre Desgarrador (2 FP): Arranca 1d6 FP al toque. Neblina Febril (2 FP): 2m radio, -2 DX, -1 Mov. Fractura (2 FP): El próximo ataque del objetivo inflige la mitad de daño.'
          }
        },
        {
          id: 'abyss_seq8_spells_will',
          name: { en: 'Abyssal Curses (Resisted by Will)', es: 'Maldiciones Abismales (Resistidas por Voluntad)' },
          type: 'active',
          spiCost: 1, // Actually uses FP
          description: {
            en: 'Mirror of Inadequacy (2 FP): -2 to all rolls. Spiritual Covetousness (1 FP): Hoards instead of attacking. Hollow Craving (1 FP): -1 Will/Per. Sever the Bond (2 FP): Ally becomes rival. Drain (1 FP): Lose 2 FP. Stoke the Coal (1 FP): -2 to restraint rolls. Leaden Soul (2 FP): -1 Spd/Move, needs Will to act.',
            es: 'Espejo de Inadecuación (2 FP): -2 a toda tirada. Codicia Espiritual (1 FP): Acapara en lugar de atacar. Anhelo Hueco (1 FP): -1 Vol/Per. Cortar el Vínculo (2 FP): Aliado se vuelve rival. Drenaje (1 FP): Pierde 2 FP. Avivar el Carbón (1 FP): -2 a tiradas de contención. Alma de Plomo (2 FP): -1 Vel/Mov, requiere Vol para actuar.'
          }
        },
        {
          id: 'abyss_seq8_proficiency',
          name: { en: 'Criminal Proficiency (Reinforced)', es: 'Proficiencia Criminal (Reforzada)' },
          type: 'passive',
          description: {
            en: 'Improvised weapons treated as Brawling +2. Any firearm fired at effective DX+1. Poison-use rolls gain +2.',
            es: 'Armas improvisadas tratadas como Pelea +2. Cualquier arma de fuego disparada a DX+1 efectivo. Uso de veneno gana +2.'
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
