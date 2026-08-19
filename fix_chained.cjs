const fs = require('fs');
let content = fs.readFileSync('src/data/pathways/chained.ts', 'utf8');

content = content.replace("Lunatic's curse retained.", "Lunatic\\'s curse retained.");
fs.writeFileSync('src/data/pathways/chained.ts', content);
console.log("Fixed chained.ts");
