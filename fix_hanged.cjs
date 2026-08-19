const fs = require('fs');
let content = fs.readFileSync('src/data/pathways/hanged_man.ts', 'utf8');

// Fix Seq 7 shadow lurk description
content = content.replace(
  "Oculto en las sombras. Invisible a sentidos mundanos (Per-2 para notar). Se mueve entre sombras conectadas. Dura 1 min.",
  "Oculto en sombras. Invisible a sentidos mundanos (Per-2 para notar). Se mueve entre sombras conectadas. Dura 1 min."
);

fs.writeFileSync('src/data/pathways/hanged_man.ts', content);
console.log("Fixed hanged_man.ts");
