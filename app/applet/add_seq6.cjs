const fs = require('fs');
const path = require('path');

const dir = 'src/data/pathways/';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts') && f !== 'generated.ts');

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Check if Sequence 6 is already there
  if (content.includes('level: 6')) {
    continue;
  }

  // We want to insert the Sequence 6 object into the sequences array.
  // A simple way is to find the beginning of the sequences array: `sequences: [`
  const seq6 = `
    {
      level: 6,
      statBonuses: [],
      skillBonuses: [],
      abilities: [
        {
          id: 'seq6_placeholder',
          name: { en: 'Sequence 6 Data Pending', es: 'Datos de Secuencia 6 Pendientes' },
          type: 'passive',
          description: {
            en: 'The details for Sequence 6 are not available in the current database.',
            es: 'Los detalles para la Secuencia 6 no están disponibles en la base de datos actual.'
          }
        }
      ]
    },`;
  
  content = content.replace('sequences: [', 'sequences: [' + seq6);
  fs.writeFileSync(filePath, content);
}

console.log('Sequence 6 placeholders added.');
