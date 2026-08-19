const fs = require('fs');
let content = fs.readFileSync('src/components/InventoryPanel.tsx', 'utf8');

// Replace store hook
content = content.replace(
  "const { lang, inventory, addItem, removeItem, moneyPence, setMoneyPence, ST, pathwayId, sequenceLevel, setViewerData } = useCharacterStore();",
  "const { lang, inventory, customItems, addItem, removeItem, addCustomItem, removeCustomItem, moneyPence, setMoneyPence, ST, pathwayId, sequenceLevel, setViewerData } = useCharacterStore();"
);

// Add custom UI state
content = content.replace(
  "const [selectedItem, setSelectedItem] = useState('');",
  "const [selectedItem, setSelectedItem] = useState('');\n  const [showCustomForm, setShowCustomForm] = useState(false);\n  const [cName, setCName] = useState('');\n  const [cCost, setCCost] = useState(0);\n  const [cWeight, setCWeight] = useState(0);\n  const [cDesc, setCDesc] = useState('');"
);

// Replace ITEMS lookup
content = content.replace(
  "const totalWeight = inventory.reduce((acc, invItem) => {",
  "const allItems = [...ITEMS, ...customItems.map(c => ({ id: c.id, name: { en: c.name, es: c.name }, costInPence: c.costInPence, weightLbs: c.weightLbs, description: { en: c.description, es: c.description } }))];\n  const totalWeight = inventory.reduce((acc, invItem) => {"
);
content = content.replace("const def = ITEMS.find(i => i.id === invItem.id);", "const def = allItems.find(i => i.id === invItem.id);");
content = content.replace("const def = ITEMS.find(i => i.id === selectedItem);", "const def = allItems.find(i => i.id === selectedItem);");
content = content.replace("{ITEMS.map(i => (", "{allItems.filter(i => !i.id.startsWith('custom_')).map(i => ("); // Wait, don't want to buy custom items from the list, or maybe we do? Let's just exclude custom items from the buy list because you just add them via the form.

// Wait, let's inject the form HTML
const originalUI = `<div className="flex gap-1 mb-2">
            <select value={selectedItem} onChange={e => setSelectedItem(e.target.value)} className="flex-1 bg-[#222] border border-[#444] text-[#ddd] rounded p-1 text-[11px] outline-none">
              <option value="">-- {t.addItem} --</option>
              {ITEMS.map(i => (
                <option key={i.id} value={i.id}>{i.name[lang]} ({formatMoney(i.costInPence)})</option>
              ))}
            </select>
            <button onClick={handleBuy} className="px-2 bg-[#222] text-yellow-500 border border-[#444] rounded hover:bg-[#333] text-[11px] uppercase">{t.buy}</button>
          </div>`;

const newUI = `<div className="flex gap-1 mb-1">
            <select value={selectedItem} onChange={e => setSelectedItem(e.target.value)} className="flex-1 bg-[#222] border border-[#444] text-[#ddd] rounded p-1 text-[11px] outline-none">
              <option value="">-- {t.addItem} --</option>
              {ITEMS.map(i => (
                <option key={i.id} value={i.id}>{i.name[lang]} ({formatMoney(i.costInPence)})</option>
              ))}
            </select>
            <button onClick={handleBuy} className="px-2 bg-[#222] text-yellow-500 border border-[#444] rounded hover:bg-[#333] text-[11px] uppercase">{t.buy}</button>
            <button onClick={() => setShowCustomForm(!showCustomForm)} className="px-2 bg-[#222] text-yellow-500 border border-[#444] rounded hover:bg-[#333] text-[11px]">+</button>
          </div>
          
          {showCustomForm && (
            <div className="flex flex-col gap-1 mb-2 p-1.5 bg-[#181818] rounded border border-[#333]">
              <input type="text" placeholder="Name" value={cName} onChange={e => setCName(e.target.value)} className="bg-[#222] border border-[#444] text-[#ddd] rounded p-1 text-[11px] outline-none" />
              <div className="flex gap-1">
                <input type="number" placeholder="Cost (Pence)" value={cCost} onChange={e => setCCost(parseInt(e.target.value)||0)} className="flex-1 bg-[#222] border border-[#444] text-[#ddd] rounded p-1 text-[11px] outline-none" title="Cost in Pence" />
                <input type="number" step="0.1" placeholder="Weight (lbs)" value={cWeight} onChange={e => setCWeight(parseFloat(e.target.value)||0)} className="flex-1 bg-[#222] border border-[#444] text-[#ddd] rounded p-1 text-[11px] outline-none" title="Weight in lbs" />
              </div>
              <input type="text" placeholder="Description" value={cDesc} onChange={e => setCDesc(e.target.value)} className="bg-[#222] border border-[#444] text-[#ddd] rounded p-1 text-[11px] outline-none" />
              <button onClick={() => {
                if(cName) {
                  addCustomItem({ id: 'custom_' + Date.now(), name: cName, costInPence: cCost, weightLbs: cWeight, description: cDesc });
                  setCName(''); setCCost(0); setCWeight(0); setCDesc(''); setShowCustomForm(false);
                }
              }} className="mt-1 px-2 py-1 bg-[#222] text-yellow-500 border border-[#444] rounded hover:bg-[#333] text-[11px] uppercase">Add Custom Item</button>
            </div>
          )}
`;

content = content.replace(originalUI, newUI);

// the inventory map
content = content.replace("const def = ITEMS.find(i => i.id === inv.id);", "const def = allItems.find(i => i.id === inv.id);");

content = content.replace(
  "button onClick={() => { setMoneyPence(moneyPence + def.costInPence); removeItem(inv.id); }}",
  "button onClick={() => { if(inv.id.startsWith('custom_')) { removeCustomItem(inv.id); } else { setMoneyPence(moneyPence + def.costInPence); removeItem(inv.id); } }}"
);


fs.writeFileSync('src/components/InventoryPanel.tsx', content);
