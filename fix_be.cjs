const fs = require('fs');
let content = fs.readFileSync('src/data/pathways/black_emperor.ts', 'utf8');

content = content.replace("Bribe doesn't need to be accepted", "Bribe doesn\\'t need to be accepted");
fs.writeFileSync('src/data/pathways/black_emperor.ts', content);
console.log("Fixed black_emperor.ts");
