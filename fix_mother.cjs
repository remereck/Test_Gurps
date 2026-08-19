const fs = require('fs');
let content = fs.readFileSync('src/data/pathways/mother.ts', 'utf8');

content = content.replace("arm's reach", "arm\\'s reach");
content = content.replace("Nature's Bounty", "Nature\\'s Bounty");
content = content.replace("Nature\\'s Bounty", "Nature\\'s Bounty"); // just in case
fs.writeFileSync('src/data/pathways/mother.ts', content);
console.log("Fixed mother.ts");
