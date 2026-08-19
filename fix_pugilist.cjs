const fs = require('fs');
let content = fs.readFileSync('src/data/pathways/twilight_giant.ts', 'utf8');

content = content.replace(
  `name: { en: 'Pugilist', es: 'Púgil' },
      statBonuses: [
        { stat: 'ST', bonus: 2 },
        { stat: 'HT', bonus: 1 },
        { stat: 'Will', bonus: 1 },
        { stat: 'SPI', bonus: 1 }
      ],
      skillBonuses: [
        { skillId: 'brawling', bonus: 4 },
        { skillId: 'wrestling', bonus: 3 }
      ],`,
  `name: { en: 'Pugilist', es: 'Púgil' },
      statBonuses: [
        { stat: 'ST', bonus: 3 },
        { stat: 'HT', bonus: 1 },
        { stat: 'SPI', bonus: 1 }
      ],
      skillBonuses: [
        { skillId: 'brawling', bonus: 5 },
        { skillId: 'wrestling', bonus: 3 },
        { skillId: 'intimidation', bonus: 2 }
      ],`
);

// We need to add DR 1 (all) and High Pain Threshold to the abilities as Passives
content = content.replace(
  `abilities: [
        {
          id: 'tg_seq8_iron_body',`,
  `abilities: [
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
          id: 'tg_seq8_iron_body',`
);

fs.writeFileSync('src/data/pathways/twilight_giant.ts', content);
console.log("Fixed pugilist stats");
