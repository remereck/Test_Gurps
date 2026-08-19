const fs = require('fs');
let content = fs.readFileSync('src/data/pathways/demoness.ts', 'utf8');

content = content.replace("believing it's their own", "believing it\\'s their own");
fs.writeFileSync('src/data/pathways/demoness.ts', content);
console.log("Fixed demoness.ts");
