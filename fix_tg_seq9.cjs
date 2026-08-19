const fs = require('fs');

let content = fs.readFileSync('src/data/pathways/twilight_giant.ts', 'utf8');

content = content.replace(
  `{ skillId: 'broadsword', bonus: 3 },
        { skillId: 'polearm', bonus: 2 },
        { skillId: 'armoury_any', bonus: 2 }`,
  `{ skillId: 'broadsword', bonus: 3 },
        { skillId: 'shield', bonus: 2 },
        { skillId: 'polearm', bonus: 2 },
        { skillId: 'armoury_any', bonus: 2 },
        { skillId: 'brawling', bonus: 2 }`
);

fs.writeFileSync('src/data/pathways/twilight_giant.ts', content);
console.log("Fixed TG Seq 9 Skills");
