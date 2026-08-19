const fs = require('fs');
const path = require('path');

const skillsDataContent = fs.readFileSync('src/data/skillsData.ts', 'utf8');
const definedSkills = [...skillsDataContent.matchAll(/id:\s*'([^']+)'/g)].map(m => m[1]);

const pathwaysDir = 'src/data/pathways';
const pathwayFiles = fs.readdirSync(pathwaysDir).filter(f => f.endsWith('.ts'));

const usedSkills = new Set();
for (const file of pathwayFiles) {
  const content = fs.readFileSync(path.join(pathwaysDir, file), 'utf8');
  const matches = [...content.matchAll(/skillId:\s*'([^']+)'/g)];
  for (const match of matches) {
    usedSkills.add(match[1]);
  }
}

const missing = [];
for (const skill of usedSkills) {
  if (!definedSkills.includes(skill)) {
    missing.push(skill);
  }
}

console.log("Missing skills from skillsData.ts:", missing);
