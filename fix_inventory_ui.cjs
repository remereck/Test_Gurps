const fs = require('fs');

let content = fs.readFileSync('src/components/InventoryPanel.tsx', 'utf8');

const startIdx = content.indexOf('<div className="flex gap-1 mb-2">');
const endIdx = content.indexOf('<div className="flex flex-col gap-1">');

if (startIdx !== -1 && endIdx !== -1) {
    const toReplace = content.substring(startIdx, endIdx);
    const newTarget = `<div className="flex gap-1 mb-1">
            <select value={selectedItem} onChange={e => setSelectedItem(e.target.value)} className="flex-1 bg-[#222] border border-[#444] text-[#ddd] rounded p-1 text-[11px] outline-none">
              <option value="">-- {t.addItem} --</option>
              {allItems.filter(i => !i.id.startsWith('custom_')).map(i => (
                <option key={i.id} value={i.id}>{i.name[lang]} ({formatMoney(i.costInPence)})</option>
              ))}
            </select>
            <button onClick={handleBuy} className="px-2 bg-[#222] text-yellow-500 border border-[#444] rounded hover:bg-[#333] text-[11px] uppercase">{t.buy}</button>
            <button onClick={() => setShowCustomForm(!showCustomForm)} className="px-2 bg-[#222] text-yellow-500 border border-[#444] rounded hover:bg-[#333] text-[11px] whitespace-nowrap">{lang === 'en' ? 'Custom' : 'Personalizado'}</button>
          </div>
          
          {showCustomForm && (
            <div className="flex flex-col gap-1 mb-2 p-2 bg-[#181818] rounded border border-yellow-700/50">
              <div className="text-[10px] uppercase text-yellow-500 font-bold mb-1">{lang === 'en' ? 'Create Custom Item' : 'Crear Objeto Personalizado'}</div>
              <input type="text" placeholder={lang === 'en' ? 'Item Name' : 'Nombre del Objeto'} value={cName} onChange={e => setCName(e.target.value)} className="bg-[#222] border border-[#444] text-[#ddd] rounded p-1 text-[11px] outline-none" />
              <div className="flex gap-1">
                <input type="number" placeholder={lang === 'en' ? 'Cost (Pence)' : 'Costo (Pence)'} value={cCost} onChange={e => setCCost(parseInt(e.target.value)||0)} className="flex-1 bg-[#222] border border-[#444] text-[#ddd] rounded p-1 text-[11px] outline-none" title="Cost in Pence" />
                <input type="number" step="0.1" placeholder={lang === 'en' ? 'Weight (lbs)' : 'Peso (lbs)'} value={cWeight} onChange={e => setCWeight(parseFloat(e.target.value)||0)} className="flex-1 bg-[#222] border border-[#444] text-[#ddd] rounded p-1 text-[11px] outline-none" title="Weight in lbs" />
              </div>
              <input type="text" placeholder={lang === 'en' ? 'Description / Effects' : 'Descripción / Efectos'} value={cDesc} onChange={e => setCDesc(e.target.value)} className="bg-[#222] border border-[#444] text-[#ddd] rounded p-1 text-[11px] outline-none" />
              <button onClick={() => {
                if(cName) {
                  addCustomItem({ id: 'custom_' + Date.now(), name: cName, costInPence: cCost, weightLbs: cWeight, description: cDesc });
                  setCName(''); setCCost(0); setCWeight(0); setCDesc(''); setShowCustomForm(false);
                }
              }} className="mt-1 px-2 py-1 bg-[#222] text-yellow-500 border border-[#444] rounded hover:bg-[#333] text-[11px] uppercase font-bold">{lang === 'en' ? 'Add Item' : 'Añadir Objeto'}</button>
            </div>
          )}\n          `;
    content = content.replace(toReplace, newTarget);
}

fs.writeFileSync('src/components/InventoryPanel.tsx', content);
