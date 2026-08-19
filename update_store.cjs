const fs = require('fs');

let content = fs.readFileSync('src/store.ts', 'utf8');

// replace import
content = content.replace("import { Language, UserSkill, UserItem, CoreAttr, UserTrait } from './types';", "import { Language, UserSkill, UserItem, CoreAttr, UserTrait, UserQuirk, CustomItemDef } from './types';");

// replace quirks typing
content = content.replace("quirks: string[];\n  addQuirk: (text: string) => void;", "quirks: UserQuirk[];\n  addQuirk: (quirk: UserQuirk) => void;");

// add customItems typing
content = content.replace("inventory: UserItem[];", "inventory: UserItem[];\n  customItems: CustomItemDef[];\n  addCustomItem: (item: CustomItemDef) => void;\n  removeCustomItem: (id: string) => void;");

// initial state
content = content.replace("inventory: [],", "inventory: [],\n  customItems: [],");

// addQuirk implementation
content = content.replace("addQuirk: (text) => set((state) => ({ quirks: [...state.quirks, text] })),", "addQuirk: (quirk) => set((state) => ({ quirks: [...state.quirks, quirk] })),");

// custom items implementations
const customItemImpl = `
  addCustomItem: (item) => set((state) => ({ customItems: [...state.customItems, item], inventory: [...state.inventory, { id: item.id, quantity: 1 }] })),
  removeCustomItem: (id) => set((state) => ({ customItems: state.customItems.filter(i => i.id !== id), inventory: state.inventory.filter(i => i.id !== id) })),
  moneyPence: 240,`;

content = content.replace("moneyPence: 240,", customItemImpl);

// export implementation
content = content.replace("quirks: state.quirks, inventory: state.inventory, moneyPence: state.moneyPence", "quirks: state.quirks, inventory: state.inventory, customItems: state.customItems, moneyPence: state.moneyPence");

// import implementation
content = content.replace('data.quirks = Array(data.quirksCount).fill("Imported Quirk");', 'data.quirks = Array(data.quirksCount).fill({ name: "Imported Quirk", cost: -1 });');
content = content.replace('if (typeof data.quirksCount === \'number\') {', 'if (typeof data.quirksCount === \'number\' && !data.quirks) {');
content = content.replace('if (data.quirks && typeof data.quirks[0] === "string")', 'if (data.quirks && typeof data.quirks[0] === "string") { data.quirks = data.quirks.map(q => ({ name: q, cost: -1 })); }');

// Add that last check properly
const importDataReplacement = `
      if (typeof data.quirksCount === 'number' && !data.quirks) {
        data.quirks = Array(data.quirksCount).fill({ name: "Imported Quirk", cost: -1 });
      } else if (data.quirks && typeof data.quirks[0] === 'string') {
        data.quirks = data.quirks.map((q: string) => ({ name: q, cost: -1 }));
      }
      
      if (!data.customItems) {
        data.customItems = [];
      }
`;
content = content.replace("if (typeof data.quirksCount === 'number') {", "/* replaced */");
content = content.replace("data.quirks = Array(data.quirksCount).fill({ name: \"Imported Quirk\", cost: -1 });", "/* replaced */");
content = content.replace("}", "} // replaced");

// well, let's just use string replace carefully

fs.writeFileSync('src/store.ts.bak', content);
