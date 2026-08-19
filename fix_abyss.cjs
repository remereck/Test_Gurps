const fs = require('fs');
let content = fs.readFileSync('src/data/pathways/abyss.ts', 'utf8');

content = content.replace("Target's next attack deals half damage.", "Target\\'s next attack deals half damage.");
fs.writeFileSync('src/data/pathways/abyss.ts', content);
console.log("Fixed abyss.ts");
