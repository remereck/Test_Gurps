import { Pathway } from '../types';

export const sunPathway: Pathway = {
  id: 'sun',
  name: { en: 'Sun Pathway', es: 'Senda del Sol' },
  sequences: [
    {
      level: 9,
      statBonuses: [{ stat: 'SPI', bonus: 1 }, { stat: 'HT', bonus: 1 }],
      skillBonuses: [
        { skillId: 'singing', bonus: 4 }
      ],
      abilities: [
        {
          id: 'sun_seq9_singing',
          name: { en: 'Singing — Buff Effects', es: 'Canto — Efectos de Mejora' },
          type: 'active',
          spiCost: 0,
          description: {
            en: 'Through Singing, a Bard imbues ONE effect for 10 min: (a) Courage (ignore Fear up to -3), (b) Strength (+1 ST-based rolls), (c) Agility (+1 DX-based rolls), (d) Spiritual Recovery (+1 SPI).',
            es: 'Mediante el Canto, un Bardo otorga UN efecto por 10 min: (a) Coraje (ignora Miedo hasta -3), (b) Fuerza (+1 a tiradas de ST), (c) Agilidad (+1 a tiradas de DX), (d) Recuperación Espiritual (+1 SPI).'
          }
        },
        {
          id: 'sun_seq9_fit',
          name: { en: 'Fit', es: 'En Forma' },
          type: 'passive',
          description: {
            en: '+1 to all HT rolls; recover FP at twice the normal rate.',
            es: '+1 a todas las tiradas de HT; recupera FP al doble del ritmo normal.'
          }
        }
      ]
    },
    {
      level: 8,
      statBonuses: [{ stat: 'SPI', bonus: 8 }],
      skillBonuses: [
        { skillId: 'ritualistic_magic', bonus: 3 }
      ],
      abilities: [
        {
          id: 'sun_seq8_light_creation',
          name: { en: 'Light Creation', es: 'Creación de Luz' },
          type: 'active',
          description: {
            en: 'Create light to reveal or burn.\n\n{{Sunshine}}: Creates light like a scorching Sun in a 5m radius. Undead/ghosts take 2d6 burning (HT/2 to halve). Living roll HT or blinded 1d3 turns (dazzled -1 on success). Lasts 1 min as full daylight.\n{{Daytime}}: Surrounding 10m receives Light, spreading naturally. Lasts 5 minutes.',
            es: 'Crea luz para revelar o quemar.\n\n{{Luz Solar}}: Crea luz como un Sol abrasador en 5m. No muertos sufren 2d6 quemadura. Vivos tiran HT o quedan ciegos 1d3 turnos. Dura 1 min.\n{{Día}}: 10m alrededor reciben Luz, esparciéndose naturalmente. Dura 5 minutos.'
          },
          spiOptions: [
            { name: { en: 'Sunshine', es: 'Luz Solar' }, cost: 3 },
            { name: { en: 'Daytime', es: 'Día' }, cost: 2 }
          ]
        },
        {
          id: 'sun_seq8_blessing',
          name: { en: 'Blessing', es: 'Bendición' },
          type: 'active',
          spiCost: 2,
          description: {
            en: 'Bless self and allies within 5m for 10 min: +3 resistance vs Fear/Cold/Darkness/Death. Weapon attacks deal +2 dmg vs undead. Immune to low-level undead passive fear.',
            es: 'Bendice a ti y aliados a 5m por 10 min: +3 a resistencia vs Miedo/Frío/Oscuridad/Muerte. Armas infligen +2 de daño vs no muertos. Inmunidad al miedo de no muertos menores.'
          }
        },
        {
          id: 'sun_seq8_night_vision',
          name: { en: 'Night Vision', es: 'Visión Nocturna' },
          type: 'active',
          spiCost: 1,
          description: {
            en: 'Light two miniature Suns in eyes to see through Darkness.',
            es: 'Enciende dos Soles en miniatura en los ojos para ver a través de la Oscuridad.'
          }
        },
        {
          id: 'sun_seq8_evil_detection',
          name: { en: 'Evil Detection', es: 'Detección de Mal' },
          type: 'passive',
          description: {
            en: 'Passively senses undead creatures and evil entities within ~10m without roll. Manifests as a feeling of wrongness.',
            es: 'Siente pasivamente no muertos y entidades malvadas a ~10m sin tiradas. Se manifiesta como un presentimiento de maldad.'
          }
        },
        {
          id: 'sun_seq8_holy_water',
          name: { en: 'Holy Water', es: 'Agua Bendita' },
          type: 'active',
          spiCost: 0,
          description: {
            en: 'Ritual to imbue water with Sun authority. 1d6 corrosion vs undead/spirits (ignores non-magical DR). Can be used to exorcise or purify objects.',
            es: 'Ritual para imbuir agua con autoridad Solar. 1d6 de corrosión vs no muertos (ignora RD no mágica). Permite exorcizar o purificar objetos.'
          }
        },
        {
          id: 'sun_seq8_dr',
          name: { en: 'DR 2 (Fire/Light)', es: 'RD 2 (Fuego/Luz)' },
          type: 'passive',
          description: {
            en: 'Gain Damage Resistance 2 specifically against fire and light damage.',
            es: 'Gana Resistencia al Daño 2 específicamente contra daño de fuego y luz.'
          }
        },
        {
          id: 'sun_seq8_singing_upgrade',
          replaces: 'sun_seq9_singing',
          name: { en: 'Singing — Buff Effects+', es: 'Canto — Efectos de Mejora+' },
          type: 'passive',
          description: {
            en: 'Singing: Bard imbues ONE effect for 10 min: Courage (-3 fear), Strength/Agility (+1 roll), or Spiritual Recovery (+1 SPI), Singing+ Song duration doubles to {{20 min}}. Courage ignores Fear up to {{-5}}; Strength/Agility give {{+2}} rolls; Spiritual Recovery restores {{2 SPI}}.',
            es: 'Canto: Otorga UN efecto por 10 min: Coraje (ignora Miedo -3), Fuerza/Agilidad (+1), o Recuperación Espiritual (+1 SPI), Canto+ La duración se duplica a {{20 min}}. Coraje ignora Miedo hasta {{-5}}; Fuerza/Agilidad dan {{+2}}; Recuperación Espiritual da {{2 SPI}}.'
          }
        }
      ]
    },
    {
      level: 7,
      statBonuses: [{ stat: 'ST', bonus: 2 }, { stat: 'SPI', bonus: 2 }],
      skillBonuses: [
        { skillId: 'theology', bonus: 3 },
        { skillId: 'ritualistic_magic', bonus: 2 },
        { skillId: 'religious_ritual', bonus: 2 }
      ],
      abilities: [
        {
          id: 'sun_seq7_halo',
          name: { en: 'Sun Halo', es: 'Halo Solar' },
          type: 'active',
          spiCost: 2,
          description: {
            en: 'Allies within 20m ignore Fright Check penalties up to -5. Evil energies Purified. Lasts 5 min; +1 SPI/min extension.',
            es: 'Aliados a 20m ignoran Miedo hasta -5. Energías malvadas purificadas. Dura 5 min; +1 SPI/min por extensión.'
          }
        },
        {
          id: 'sun_seq7_holy_water',
          replaces: 'sun_seq8_holy_water',
          name: { en: 'Holy Water+', es: 'Agua Bendita+' },
          type: 'active',
          spiCost: 3,
          description: {
            en: 'Holy Water: Imbue water with Sun authority. 1d6 corrosion vs undead/spirits (ignores non-magical DR), Holy Water+ Upgrades Holy Water: {{2d6+2}} corrosion vs undead (ignores non-magical DR).',
            es: 'Agua Bendita: Imbuir agua con autoridad Solar. 1d6 de corrosión vs no muertos/espíritus (ignora RD no mágica), Agua Bendita+ Mejora Agua Bendita: {{2d6+2}} corrosión vs no muertos (ignora RD no mágica).'
          }
        },
        {
          id: 'sun_seq7_oath',
          name: { en: 'Holy Oath', es: 'Juramento Sagrado' },
          type: 'active',
          spiCost: 3,
          description: {
            en: 'Self buff 3 min: +2 ST/DX rolls, +1d6 fire dmg on attacks, attacks gain Holy tag.',
            es: 'Mejora personal de 3 min: +2 tiradas ST/DX, +1d6 fuego al atacar, los ataques ganan la etiqueta Sagrado.'
          }
        },
        {
          id: 'sun_seq7_holy_spells',
          name: { en: 'Holy Spells', es: 'Hechizos Sagrados' },
          type: 'active',
          description: {
            en: 'Potent offensive and utility spells using solar power.\n\n{{Light Summoning}}: Beam from sky in 30m. 3d6 burning vs Undead/Evil (ignores non-mag DR). 1d6 vs others.\n{{Cleave of Purification}}: Imbues weapons for 5 attacks or 1 min: bypass incorporeal DR. Target HT or -2 to rolls for 1d rounds.\n{{Fire of Light}}: Dense golden flames in 5m radius (20m range). Living roll HT or 2d6 holy fire/round. Undead take double.',
            es: 'Potentes hechizos ofensivos y de utilidad usando poder solar.\n\n{{Invocación de Luz}}: Rayo desde el cielo a 30m. 3d6 quemadura vs No muertos/Malvados (ignora RD). 1d6 otros.\n{{Corte Purificador}}: Imbuye armas para 5 ataques o 1 min: ignora RD incorpórea. Objetivo tira HT o -2 a todo 1d rondas.\n{{Fuego de Luz}}: Llamas doradas densas en 5m. Vivos tiran HT o 2d6 fuego sagrado/ronda. No muertos sufren el doble.'
          },
          spiOptions: [
            { name: { en: 'Light Summoning', es: 'Invocación de Luz' }, cost: 4 },
            { name: { en: 'Cleave of Purification', es: 'Corte Purificador' }, cost: 2 },
            { name: { en: 'Fire of Light', es: 'Fuego de Luz' }, cost: 3 }
          ]
        },

        {
          id: 'sun_seq7_horror_immunity',
          name: { en: 'Horror Immunity', es: 'Inmunidad al Horror' },
          type: 'active',
          spiCost: 1,
          description: {
            en: 'Target immune to Fear for 10 min. Touch range. +1 SPI per extra target.',
            es: 'Objetivo inmune al Miedo por 10 min. Rango de toque. +1 SPI por objetivo adicional.'
          }
        },
        {
          id: 'sun_seq7_disease_res',
          name: { en: 'Disease & Poison Resistance', es: 'Resistencia a Veneno y Enfermedad' },
          type: 'passive',
          description: {
            en: '+2 to HT vs. disease, poison, and environmental hazards.',
            es: '+2 a HT vs. enfermedades, venenos y peligros ambientales.'
          }
        },
        {
          id: 'sun_seq7_very_fit',
          replaces: 'sun_seq9_fit',
          name: { en: 'Fit+', es: 'En Forma+' },
          type: 'passive',
          description: {
            en: 'Fit: +1 to all HT rolls; recover FP at twice the normal rate, Fit+ {{+2}} to all HT rolls; lose FP at {{half}} normal rate; recover FP at twice normal rate.',
            es: 'En Forma: +1 a todas las tiradas de HT; recupera FP al doble del ritmo normal, En Forma+ {{+2}} a tiradas HT; pierde FP a la {{mitad}}; recupera FP al doble.'
          }
        }
      ]
    },
    {
      level: 6,
      statBonuses: [
        { stat: 'SPI', bonus: 3 },
        { stat: 'ST', bonus: 1 },
        { stat: 'HT', bonus: 1 }
      ],
      skillBonuses: [],
      abilities: [
        {
          id: 'sun_seq6_main',
          name: { en: 'Notary', es: 'Notario' },
          type: 'active',
          spiCost: 2,
          description: {
            en: 'Can notarize powers and contracts.',
            es: 'Puede certificar poderes y contratos.'
          }
        }
      ]
    }
  ]
};
