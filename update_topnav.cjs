const fs = require('fs');

const filesToUpdate = ['src/components/TopNav.tsx', 'src/components/AttributePanel.tsx'];

for (const file of filesToUpdate) {
  let content = fs.readFileSync(file, 'utf8');

  // We want to calculate the cost of custom traits/quirks
  // Positive costs are points spent (Advantages)
  // Negative costs are points gained (Disadvantages)
  // We'll consider that quirks limit of -5 doesn't apply to the whole cost, maybe just remove the 5 limit since they are fully custom. Or keep quirks up to -5 separate?
  // User asked: "Has que los Quirks funcione como ventajas y desventajas"
  // So Quirks shouldn't just be +5 limit. They act as actual advantages and disadvantages.

  content = content.replace(
    "const disadvPointsAllowed = Math.min(40, Math.abs(disadvPointsRaw));",
    "const quirksAdvCost = quirks.filter(q => q.cost > 0).reduce((a, b) => a + b.cost, 0);\n  const quirksDisCost = quirks.filter(q => q.cost < 0).reduce((a, b) => a + b.cost, 0);\n  const disadvPointsAllowed = Math.min(40, Math.abs(disadvPointsRaw + quirksDisCost));"
  );
  
  content = content.replace(
    "const totalBudget = 70 + disadvPointsAllowed + Math.min(5, quirks.length);",
    "const totalBudget = 70 + disadvPointsAllowed;"
  );
  
  content = content.replace(
    "const pointsSpent = pointsSpentOnAttributes + pointsSpentOnSkills + advPoints;",
    "const pointsSpent = pointsSpentOnAttributes + pointsSpentOnSkills + advPoints + quirksAdvCost;"
  );

  fs.writeFileSync(file, content);
}
