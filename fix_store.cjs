const fs = require('fs');

let content = fs.readFileSync('src/store.ts', 'utf8');

// Replace moneyPence: number; setMoneyPence: (amount: number) => void;
// I'll just rely on what's there and replace by search
const toReplaceTypes = `  moneyPence: number;
  setMoneyPence: (amount: number) => void;`;

const newTypes = `  moneyPence: number;
  setMoneyPence: (amount: number) => void;
  hpDamage: number;
  setHpDamage: (val: number) => void;
  fpSpent: number;
  setFpSpent: (val: number) => void;`;

content = content.replace(toReplaceTypes, newTypes);

const toReplaceImpl = `  moneyPence: 240,
  setMoneyPence: (amount) => set({ moneyPence: amount }),`;

const newImpl = `  moneyPence: 240,
  setMoneyPence: (amount) => set({ moneyPence: amount }),
  hpDamage: 0,
  setHpDamage: (val) => set({ hpDamage: val }),
  fpSpent: 0,
  setFpSpent: (val) => set({ fpSpent: val }),`;

content = content.replace(toReplaceImpl, newImpl);

fs.writeFileSync('src/store.ts', content);
