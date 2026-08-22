import { Pathway } from '../types';

export const blackEmperorPathway: Pathway = {
  id: 'black_emperor',
  name: { en: 'Black Emperor Pathway', es: 'Senda del Emperador Negro' },
  sequences: [
    {
      level: 9,
      name: { en: 'Lawyer', es: 'Abogado' },
      statBonuses: [
        { stat: 'IQ', bonus: 1 },
        { stat: 'SPI', bonus: 1 }
      ],
      skillBonuses: [
        { skillId: 'law', bonus: 4 },
        { skillId: 'fast_talk', bonus: 3 },
        { skillId: 'diplomacy', bonus: 3 }
      ],
      abilities: [
        {
          id: 'be_seq9_eloquence',
          name: { en: 'Eloquence', es: 'Elocuencia' },
          type: 'passive', // Used through fast talk
          description: {
            en: 'When a Lawyer argues with full conviction, all listeners must succeed at a Will roll (-3) or find themselves inclined to agree, even if the claim is logically weak. Strong contrary evidence overrides this.',
            es: 'Cuando un Abogado argumenta con total convicción, todos los oyentes deben superar una tirada de Voluntad (-3) o sentirse inclinados a estar de acuerdo, incluso si la afirmación es lógicamente débil. Evidencia contraria fuerte puede anular esto.'
          }
        }
      ]
    },
    {
      level: 8,
      name: { en: 'Barbarian', es: 'Bárbaro' },
      statBonuses: [
        { stat: 'ST', bonus: 3 },
        { stat: 'HT', bonus: 1 },
        { stat: 'Will', bonus: 2 },
        { stat: 'SPI', bonus: 1 }
      ],
      skillBonuses: [
        { skillId: 'brawling', bonus: 3 },
        { skillId: 'wrestling', bonus: 3 }
      ],
      abilities: [
        {
          id: 'be_seq8_physical',
          name: { en: 'Physical Enhancement', es: 'Mejora Física' },
          type: 'passive',
          description: {
            en: 'Breaks the rules of a normal body. ST and HT-based rolls gain +2 in situations involving feats of raw force, endurance, or breaking barriers.',
            es: 'Rompe las reglas de un cuerpo normal. Las tiradas basadas en ST y HT ganan +2 en situaciones que implican hazañas de fuerza bruta, resistencia o romper barreras.'
          }
        },
        {
          id: 'be_seq8_mental',
          name: { en: 'Mental Resistance', es: 'Resistencia Mental' },
          type: 'passive',
          description: {
            en: 'High resistance to psychological influences — mind control and fear-based effects suffer -4 against them.',
            es: 'Alta resistencia a influencias psicológicas: el control mental y los efectos basados en el miedo sufren un -4 contra ellos.'
          }
        },
        {
          id: 'be_seq8_eloquence',
          replaces: 'be_seq9_eloquence',
          name: { en: 'Eloquence+', es: 'Elocuencia+' },
          type: 'passive',
          description: {
            en: 'Eloquence: When a Lawyer argues with full conviction, all listeners must succeed at a Will roll (-3) or find themselves inclined to agree, even if the claim is logically weak, Eloquence+ Works through {{Intimidation}} as effectively as persuasion. The target still rolls Will at -3, but the argument may be a growled threat.',
            es: 'Elocuencia: Cuando un Abogado argumenta con total convicción, los oyentes deben superar una tirada de Voluntad (-3) o sentirse inclinados a estar de acuerdo, Elocuencia+ Funciona a través de {{Intimidación}} tan efectivamente como persuasión. El objetivo sigue tirando Voluntad a -3, pero el argumento puede ser una amenaza gruñida.'
          }
        }
      ]
    },
    {
      level: 7,
      name: { en: 'Briber', es: 'Sobornador' },
      statBonuses: [
        { stat: 'SPI', bonus: 4 }
      ],
      skillBonuses: [
        { skillId: 'intimidation', bonus: 2 } // inferred from reinforce: total +4 from all sources, barb gave nothing directly to intimidation, but let's just add +2
      ],
      abilities: [
        {
          id: 'be_seq7_bribery',
          name: { en: 'Bribery', es: 'Soborno' },
          type: 'active',
          description: {
            en: 'By offering a bribe (material/symbolic), impose an effect. Bribe doesn\'t need to be accepted, just thrown/near target. Diminishing Rule: effects drop by 1 each turn until 0.\n\n{{Weaken}}: Target suffers -4 to attack and defense rolls (drops -1/turn, lasts 4 turns).\n{{Charm}}: Target rolls Will at -3 (drops -1/turn, 3 turns max). Failure: cannot attack briber. Crit fail: lashes out at self/allies.\n{{Arrogance}}: Target rolls IQ at -2 (drops -1/turn, 2 turns max). Failure: reckless/stupid action. Crit fail: lose turn.\n{{Connection}}: Mystical link. Gain +2 to Divination and Tracking rolls against them (drops -1/turn, 2 turns max).',
            es: 'Al ofrecer un soborno (material/simbólico), impone un efecto. El soborno no necesita ser aceptado, solo lanzado/cerca del objetivo. Regla Decreciente: los efectos caen en 1 cada turno hasta 0.\n\n{{Debilitar}}: El objetivo sufre -4 a tiradas de ataque y defensa (cae -1/turno, dura 4 turnos).\n{{Encantar}}: Objetivo tira Voluntad a -3 (cae -1/turno, max 3 turnos). Fallo: no puede atacar al sobornador. Fallo crit: ataca a sí mismo/aliados.\n{{Arrogancia}}: Objetivo tira IQ a -2 (cae -1/turno, max 2 turnos). Fallo: acción imprudente/estúpida. Fallo crit: pierde turno.\n{{Conexión}}: Enlace místico. Gana +2 a tiradas de Adivinación y Rastreo contra ellos (cae -1/turno, max 2 turnos).'
          },
          spiOptions: [
            { name: { en: 'Weaken', es: 'Debilitar' }, cost: 1 },
            { name: { en: 'Charm', es: 'Encantar' }, cost: 1 },
            { name: { en: 'Arrogance', es: 'Arrogancia' }, cost: 1 },
            { name: { en: 'Connection', es: 'Conexión' }, cost: 1 }
          ]
        },
        {
          id: 'be_seq7_eloquence',
          replaces: 'be_seq8_eloquence',
          name: { en: 'Eloquence++', es: 'Elocuencia++' },
          type: 'passive',
          description: {
            en: 'Eloquence+: Works through Intimidation as effectively as persuasion. Target rolls Will at -3, Eloquence++ Intimidation Eloquence Will penalty is {{-5}}. Fast-Talk/Diplomacy penalty is {{-2}}. Successful Intimidation reduces next Bribery SPI cost by {{1}}.',
            es: 'Elocuencia+: Funciona a través de Intimidación tan efectivamente como persuasión. El objetivo tira Voluntad a -3, Elocuencia++ Penalización a Voluntad de Intimidación es {{-5}}. Para Charlatanería/Diplomacia es {{-2}}. Intimidación exitosa reduce coste SPI de próximo Soborno en {{1}}.'
          }
        }
      ]
    },
    {
      level: 6,
      name: { en: 'Baron of Corruption', es: 'Barón de la Corrupción' },
      statBonuses: [
        { stat: 'SPI', bonus: 3 },
        { stat: 'ST', bonus: 1 },
        { stat: 'HT', bonus: 1 }
      ],
      skillBonuses: [],
      abilities: [
        {
          id: 'be_seq6_main',
          name: { en: 'Baron of Corruption', es: 'Barón de la Corrupción' },
          type: 'active',
          spiCost: 2,
          description: {
            en: 'Can exploit loopholes and corrupt objects.',
            es: 'Puede explotar lagunas y corromper objetos.'
          }
        }
      ]
    }
  ]
};
