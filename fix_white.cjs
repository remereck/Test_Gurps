const fs = require('fs');
let content = fs.readFileSync('src/data/pathways/white_tower.ts', 'utf8');

content = content.replace(
  "level: 8,",
  "level: 8,\n      name: { en: 'Student of Ratiocination', es: 'Estudiante de Raciocinio' },"
);

fs.writeFileSync('src/data/pathways/white_tower.ts', content);
console.log("Fixed white_tower.ts");
