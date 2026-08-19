import React, { useState } from 'react';
import { useCharacterStore } from '../store';
import { TRANSLATIONS } from '../i18n';
import { ITEMS } from '../data/itemsData';
import { PATHWAYS } from '../data/pathwaysData';
import { formatMoney } from '../utils';

export default function InventoryPanel() {
  const { lang, inventory, customItems, addItem, removeItem, addCustomItem, removeCustomItem, moneyPence, setMoneyPence, ST, pathwayId, sequenceLevel, setViewerData } = useCharacterStore();
  const t = TRANSLATIONS[lang];
  const [selectedItem, setSelectedItem] = useState('');
  const [showCustomForm, setShowCustomForm] = useState(false);
  const [cName, setCName] = useState('');
  const [cCost, setCCost] = useState(0);
  const [cWeight, setCWeight] = useState(0);
  const [cDesc, setCDesc] = useState('');

  // Get total stat bonuses to calculate final ST for BL
  const currentPathway = PATHWAYS.find(p => p.id === pathwayId);
  const statBonuses = React.useMemo(() => {
    let stBonus = 0;
    if (pathwayId && sequenceLevel && currentPathway) {
      for (let seq = 9; seq >= sequenceLevel; seq--) {
        const seqData = currentPathway.sequences.find(s => s.level === seq);
        if (seqData) {
          const b = seqData.statBonuses.find(x => x.stat === 'ST');
          if (b) stBonus += b.bonus;
        }
      }
    }
    return stBonus;
  }, [pathwayId, sequenceLevel, currentPathway]);

  const finalST = ST + statBonuses;
  const basicLift = (finalST * finalST) / 5;

  const allItems = [...ITEMS, ...customItems.map(c => ({ id: c.id, name: { en: c.name, es: c.name }, costInPence: c.costInPence, weightLbs: c.weightLbs, description: { en: c.description, es: c.description } }))];
  const totalWeight = inventory.reduce((acc, invItem) => {
    const def = allItems.find(i => i.id === invItem.id);
    return acc + (def ? def.weightLbs * invItem.quantity : 0);
  }, 0);

  const encumbranceLevel = totalWeight <= basicLift ? 0 :
                           totalWeight <= 2 * basicLift ? 1 :
                           totalWeight <= 3 * basicLift ? 2 :
                           totalWeight <= 6 * basicLift ? 3 :
                           totalWeight <= 10 * basicLift ? 4 : 5;

  const handleBuy = () => {
    if (!selectedItem) return;
    const def = allItems.find(i => i.id === selectedItem);
    if (!def) return;
    if (moneyPence >= def.costInPence) {
      setMoneyPence(moneyPence - def.costInPence);
      addItem(selectedItem);
      setSelectedItem('');
    } else {
      alert("Not enough funds!");
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <section className="bg-[#111] border border-[#333] rounded-md flex flex-col overflow-hidden shrink-0">
        <div className="bg-[#1a1a1a] px-3 py-2 border-b border-[#333] text-[11px] font-bold uppercase text-yellow-500">
          Money
        </div>
        <div className="p-2.5">
          <div className="grid grid-cols-3 gap-1">
            <div className="bg-[#1a1a1a] p-2 text-center rounded border border-[#333] flex flex-col items-center">
              <div className="text-[10px] text-yellow-500 font-bold mb-1">{t.pounds}</div>
              <input 
                type="number" 
                value={Math.floor(moneyPence / 240)} 
                onChange={(e) => {
                  const val = parseInt(e.target.value) || 0;
                  const currentSoli = Math.floor((moneyPence % 240) / 12);
                  const currentPence = moneyPence % 12;
                  setMoneyPence(Math.max(0, val * 240 + currentSoli * 12 + currentPence));
                }}
                className="w-full bg-[#222] border border-[#444] text-center font-mono text-[16px] font-bold text-[#e5e5e5] rounded outline-none appearance-none"
              />
            </div>
            <div className="bg-[#1a1a1a] p-2 text-center rounded border border-[#333] flex flex-col items-center">
              <div className="text-[10px] text-[#aaa] font-bold mb-1">{t.soli}</div>
              <input 
                type="number" 
                value={Math.floor((moneyPence % 240) / 12)} 
                onChange={(e) => {
                  const val = parseInt(e.target.value) || 0;
                  const currentPounds = Math.floor(moneyPence / 240);
                  const currentPence = moneyPence % 12;
                  setMoneyPence(Math.max(0, currentPounds * 240 + val * 12 + currentPence));
                }}
                className="w-full bg-[#222] border border-[#444] text-center font-mono text-[16px] font-bold text-[#e5e5e5] rounded outline-none appearance-none"
              />
            </div>
            <div className="bg-[#1a1a1a] p-2 text-center rounded border border-[#333] flex flex-col items-center">
              <div className="text-[10px] text-[#b45309] font-bold mb-1">{t.pence}</div>
              <input 
                type="number" 
                value={moneyPence % 12} 
                onChange={(e) => {
                  const val = parseInt(e.target.value) || 0;
                  const currentPounds = Math.floor(moneyPence / 240);
                  const currentSoli = Math.floor((moneyPence % 240) / 12);
                  setMoneyPence(Math.max(0, currentPounds * 240 + currentSoli * 12 + val));
                }}
                className="w-full bg-[#222] border border-[#444] text-center font-mono text-[16px] font-bold text-[#e5e5e5] rounded outline-none appearance-none"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#111] border border-[#333] rounded-md flex flex-col overflow-hidden shrink-0">
        <div className="bg-[#1a1a1a] px-3 py-2 border-b border-[#333] text-[11px] font-bold uppercase text-yellow-500 flex justify-between items-center">
          <span>{t.inventory}</span>
          <span className={encumbranceLevel > 0 ? 'text-red-400' : 'text-[#aaa]'}>Enc: {encumbranceLevel}</span>
        </div>
        <div className="p-2.5">
          <div className="text-[11px] text-[#aaa] mb-2 pb-2 border-b border-[#222]">
            {t.totalWeight}: {totalWeight.toFixed(1)} / {basicLift.toFixed(1)} {t.lbs} (BL)
            <br/>
            {t.penalty}: -{encumbranceLevel} {t.move}/{t.dodge}
          </div>
          
          <div className="flex flex-col gap-2 mb-3">
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
          )}
          <div className="flex flex-col gap-1">
            {inventory.map(inv => {
              const def = allItems.find(i => i.id === inv.id);
              if (!def) return null;
              return (
                <div 
                  key={inv.id} 
                  className="p-1.5 bg-[#181818] rounded flex justify-between items-center text-[11px] border-l-4 border-[#444]"
                  onMouseEnter={() => setViewerData({
                    title: def.name[lang], 
                    desc: def.description[lang], 
                    extra: `Weight: ${def.weightLbs} lbs | Cost: ${formatMoney(def.costInPence)}`
                  })}
                >
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#aaa]">{inv.quantity}x</span>
                    <span className="font-bold text-[#e5e5e5]">{def.name[lang]}</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <span className="text-[#aaa] font-mono">{(def.weightLbs * inv.quantity).toFixed(1)}{t.lbs}</span>
                    <button onClick={() => { if(inv.id.startsWith('custom_')) { removeCustomItem(inv.id); } else { setMoneyPence(moneyPence + def.costInPence); removeItem(inv.id); } }} className="text-yellow-500 hover:text-yellow-400 uppercase text-[10px] bg-[#222] border border-[#444] px-1.5 py-0.5 rounded">{t.sell}</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
