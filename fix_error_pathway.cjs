const fs = require('fs');
let content = fs.readFileSync('src/data/pathways/error.ts', 'utf8');

const replacement = `      level: 9,
      statBonuses: [{ stat: 'SPI', bonus: 1 }],
      skillBonuses: [
        { skillId: 'observation', bonus: 2 },
        { skillId: 'knife', bonus: 3 },
        { skillId: 'shortsword', bonus: 3 },
        { skillId: 'sleight_of_hand', bonus: 4 },
        { skillId: 'pickpocket', bonus: 4 }
      ],`;

content = content.replace(/      level: 9,[\s\S]*?skillBonuses: \[\s*\{ skillId: 'observation', bonus: 2 \}\s*\],/, replacement);

fs.writeFileSync('src/data/pathways/error.ts', content);

let tyrantContent = fs.readFileSync('src/data/pathways/tyrant.ts', 'utf8');
tyrantContent = tyrantContent.replace(/{ skillId: 'navigation', bonus: 2 }/g, "{ skillId: 'navigation_sea', bonus: 2 }");
tyrantContent = tyrantContent.replace(/{ skillId: 'navigation', bonus: 5 }/g, "{ skillId: 'navigation_sea', bonus: 5 }");
fs.writeFileSync('src/data/pathways/tyrant.ts', tyrantContent);
