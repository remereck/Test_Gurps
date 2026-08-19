const fs = require('fs');

let content = fs.readFileSync('src/components/InventoryPanel.tsx', 'utf8');

const oldBlock = `<div className="flex gap-1 mb-1">
            <select value={selectedItem} onChange={e => setSelectedItem(e.target.value)} className="flex-1 bg-[#222] border border-[#444] text-[#ddd] rounded p-1 text-[11px] outline-none">
              <option value="">-- {t.addItem} --</option>
              {allItems.filter(i => !i.id.startsWith('custom_')).map(i => (
                <option key={i.id} value={i.id}>{i.name[lang]} ({formatMoney(i.costInPence)})</option>
              ))}
            </select>
            <button onClick={handleBuy} className="px-2 bg-[#222] text-yellow-500 border border-[#444] rounded hover:bg-[#333] text-[11px] uppercase">{t.buy}</button>
            <button onClick={() => setShowCustomForm(!showCustomForm)} className="px-2 bg-[#222] text-yellow-500 border border-[#444] rounded hover:bg-[#333] text-[11px] whitespace-nowrap">{lang === 'en' ? 'Custom' : 'Personalizado'}</button>
          </div>`;

const newBlock = `<div className="flex flex-col gap-2 mb-3">
            <div className="flex gap-1">
              <select value={selectedItem} onChange={e => setSelectedItem(e.target.value)} className="flex-1 bg-[#222] border border-[#444] text-[#ddd] rounded p-1 text-[11px] outline-none">
                <option value="">-- {t.addItem} --</option>
                {allItems.filter(i => !i.id.startsWith('custom_')).map(i => (
                  <option key={i.id} value={i.id}>{i.name[lang]} ({formatMoney(i.costInPence)})</option>
                ))}
              </select>
              <button onClick={handleBuy} className="px-2 bg-[#222] text-yellow-500 border border-[#444] rounded hover:bg-[#333] text-[11px] uppercase font-bold">{t.buy}</button>
            </div>
            <button onClick={() => setShowCustomForm(!showCustomForm)} className="w-full py-1.5 bg-[#1a1a1a] text-yellow-600 border border-dashed border-[#555] rounded hover:bg-[#222] hover:text-yellow-500 hover:border-yellow-600 text-[10px] uppercase font-bold transition-all">
              {showCustomForm 
                ? (lang === 'en' ? 'Cancel Custom Item' : 'Cancelar Objeto') 
                : (lang === 'en' ? '+ Create Custom Item' : '+ Crear Objeto Personalizado')}
            </button>
          </div>`;

content = content.replace(oldBlock, newBlock);

fs.writeFileSync('src/components/InventoryPanel.tsx', content);
