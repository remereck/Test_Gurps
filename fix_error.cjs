const fs = require('fs');
let content = fs.readFileSync('src/data/pathways/error.ts', 'utf8');

// Fix Seq 9 stat bonuses
content = content.replace(
  "statBonuses: [{ stat: 'SPI', bonus: 1 }]",
  "statBonuses: [{ stat: 'ST', bonus: 1 }, { stat: 'DX', bonus: 1 }, { stat: 'SPI', bonus: 1 }]"
);

fs.writeFileSync('src/data/pathways/error.ts', content);
console.log("Fixed error.ts stats");
