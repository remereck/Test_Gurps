const fs = require('fs');
let content = fs.readFileSync('src/components/SkillPanel.tsx', 'utf8');

// 1. Compute potionSkills and allSkillsToDisplay
const injection = `
  const potionSkills: string[] = [];
  if (pathwayId && sequenceLevel && currentPathway) {
    for (let seq = 9; seq >= sequenceLevel; seq--) {
      const seqData = currentPathway.sequences.find(s => s.level === seq);
      if (seqData) {
        seqData.skillBonuses.forEach(b => {
          if (!potionSkills.includes(b.skillId)) potionSkills.push(b.skillId);
        });
      }
    }
  }

  const allSkillsToDisplay = [...skills];
  potionSkills.forEach(psId => {
    if (!allSkillsToDisplay.find(s => s.id === psId)) {
      allSkillsToDisplay.push({ id: psId, points: 0 });
    }
  });

  return (
`;
content = content.replace('  return (', injection);

// 2. Replace skills.map with allSkillsToDisplay.map
content = content.replace('{skills.map(s => {', '{allSkillsToDisplay.map(s => {');

// 3. Highlight the name/bonus 
content = content.replace(
  '<span className="text-[12px] font-bold text-[#e5e5e5]">{def.name[lang]} <span className="text-[10px] font-normal text-[#aaa]">({def.attr}/{def.difficulty})</span></span>',
  '<span className="text-[12px] font-bold text-[#e5e5e5]">{def.name[lang]} <span className="text-[10px] font-normal text-[#aaa]">({def.attr}/{def.difficulty})</span> {isGifted && <span className="text-[10px] text-green-400 font-bold ml-1">(+{potionBonus} Potion)</span>}</span>'
);

fs.writeFileSync('src/components/SkillPanel.tsx', content);
