const fs = require('fs');

let pathways = ['moon', 'paragon', 'wheel_of_fortune', 'hermit', 'justiciar'];
for (const pathway of pathways) {
  let content = fs.readFileSync(`src/data/pathways/${pathway}.ts`, 'utf8');
  content = content.replace(/animal's/g, "animal\\'s");
  content = content.replace(/Sheriff's/g, "Sheriff\\'s");
  content = content.replace(/Pugilist's/g, "Pugilist\\'s");
  content = content.replace(/GM's/g, "GM\\'s");
  content = content.replace(/target's/g, "target\\'s");
  fs.writeFileSync(`src/data/pathways/${pathway}.ts`, content);
}
console.log("Fixed syntax");
