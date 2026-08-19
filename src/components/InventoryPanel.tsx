import React, { useState, useMemo } from 'react';
import { useCharacterStore } from '../store';
import { TRANSLATIONS } from '../i18n';
import { ITEMS, ExtendedItemDef } from '../data/itemsData';
import { PATHWAYS } from '../data/pathwaysData';
import { formatMoney } from '../utils';
import { useCorruptionMetrics } from '../utils/corruption';

export default function InventoryPanel() {
  const { 
    lang, inventory, customItems, addItem, removeItem, 
    addCustomItem, removeCustomItem, moneyPence, setMoneyPence, 
    ST, pathwayId, sequenceLevel, setViewerData 
  } = useCharacterStore();
  const t = TRANSLATIONS[lang];
  const { textAccentClass, isLostControl } = useCorruptionMetrics();
  const [selectedItem, setSelectedItem] = useState('');
  const [showCustomForm, setShowCustomForm] = useState(false);
  const [cName, setCName] = useState('');
  const [cCost, setCCost] = useState(0);
  const [cWeight, setCWeight] = useState(0);
  const [cDesc, setCDesc] = useState('');

  // Get total stat bonuses to calculate final ST for Basic Lift
  const currentPathway = PATHWAYS.find(p => p.id === pathwayId);
  const statBonuses = useMemo(() => {
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

  const allItems: ExtendedItemDef[] = [
    ...ITEMS, 
    ...customItems.map(c => ({ 
      id: c.id, 
      name: { en: c.name, es: c.name }, 
      costInPence: c.costInPence, 
      weightLbs: c.weightLbs, 
      category: 'Custom Items',
      description: { en: c.description, es: c.description } 
    }))
  ];

  const totalWeight = inventory.reduce((acc, invItem) => {
    const def = allItems.find(i => i.id === invItem.id);
    return acc + (def ? def.weightLbs * invItem.quantity : 0);
  }, 0);

  const encumbranceLevel = totalWeight <= basicLift ? 0 :
                           totalWeight <= 2 * basicLift ? 1 :
                           totalWeight <= 3 * basicLift ? 2 :
                           totalWeight <= 6 * basicLift ? 3 :
                           totalWeight <= 10 * basicLift ? 4 : 5;

  const encumbranceNames = ['None (0)', 'Light (1)', 'Medium (2)', 'Heavy (3)', 'Extra Heavy (4)', 'Overloaded (5)'];

  const handleBuy = () => {
    if (!selectedItem) return;
    const def = allItems.find(i => i.id === selectedItem);
    if (!def) return;
    if (moneyPence >= def.costInPence) {
      setMoneyPence(moneyPence - def.costInPence);
      addItem(selectedItem);
      setSelectedItem('');
    } else {
      alert(lang === 'es' ? '¡Fondos insuficientes!' : 'Not enough funds!');
    }
  };

  // Grouped items by category
  const groupedItems = useMemo(() => {
    const map = new Map<string, ExtendedItemDef[]>();
    allItems.forEach(item => {
      const cat = item.category || 'General Tools';
      if (!map.has(cat)) map.set(cat, []);
      map.get(cat)!.push(item);
    });
    return map;
  }, [allItems]);

  return (
    <div className="flex flex-col gap-3 obfuscate-zone">
      
      {/* MONEY SECTION */}
      <section className={`bg-[#111] border border-[#333] rounded-md flex flex-col overflow-hidden shrink-0 ${isLostControl ? 'eldritch-illegible-panel eldritch-container-distortion' : ''}`}>
        <div className={`bg-[#1a1a1a] px-3 py-2 border-b border-[#333] text-[11px] font-bold uppercase ${textAccentClass} transition-colors duration-500 flex justify-between items-center`}>
          <span>{lang === 'es' ? 'Fondos y Dinero (£ / s / d)' : 'Money & Wealth (£ / s / d)'}</span>
          <span className="text-[10px] text-yellow-500 font-mono">{formatMoney(moneyPence)}</span>
        </div>
        <div className="p-2.5">
          <div className="grid grid-cols-3 gap-1.5">
            <div className="bg-[#1a1a1a] p-2 text-center rounded border border-[#333] flex flex-col items-center">
              <div className={`text-[10px] ${textAccentClass} font-bold mb-1 transition-colors duration-500`}>{t.pounds} (£)</div>
              <input 
                type="number" 
                min="0"
                value={Math.floor(moneyPence / 240)} 
                onChange={(e) => {
                  const val = parseInt(e.target.value) || 0;
                  const currentSoli = Math.floor((moneyPence % 240) / 12);
                  const currentPence = moneyPence % 12;
                  setMoneyPence(Math.max(0, val * 240 + currentSoli * 12 + currentPence));
                }}
                className="w-full bg-[#222] border border-[#444] text-center font-mono text-[16px] font-bold text-yellow-400 rounded outline-none appearance-none p-1"
              />
            </div>
            <div className="bg-[#1a1a1a] p-2 text-center rounded border border-[#333] flex flex-col items-center">
              <div className="text-[10px] text-[#aaa] font-bold mb-1">{t.soli} (s)</div>
              <input 
                type="number" 
                min="0"
                value={Math.floor((moneyPence % 240) / 12)} 
                onChange={(e) => {
                  const val = parseInt(e.target.value) || 0;
                  const currentPounds = Math.floor(moneyPence / 240);
                  const currentPence = moneyPence % 12;
                  setMoneyPence(Math.max(0, currentPounds * 240 + val * 12 + currentPence));
                }}
                className="w-full bg-[#222] border border-[#444] text-center font-mono text-[16px] font-bold text-[#ddd] rounded outline-none appearance-none p-1"
              />
            </div>
            <div className="bg-[#1a1a1a] p-2 text-center rounded border border-[#333] flex flex-col items-center">
              <div className="text-[10px] text-[#b45309] font-bold mb-1">{t.pence} (d)</div>
              <input 
                type="number" 
                min="0"
                value={moneyPence % 12} 
                onChange={(e) => {
                  const val = parseInt(e.target.value) || 0;
                  const currentPounds = Math.floor(moneyPence / 240);
                  const currentSoli = Math.floor((moneyPence % 240) / 12);
                  setMoneyPence(Math.max(0, currentPounds * 240 + currentSoli * 12 + val));
                }}
                className="w-full bg-[#222] border border-[#444] text-center font-mono text-[16px] font-bold text-[#b45309] rounded outline-none appearance-none p-1"
              />
            </div>
          </div>
        </div>
      </section>

      {/* INVENTORY SECTION */}
      <section className={`bg-[#111] border border-[#333] rounded-md flex flex-col overflow-hidden shrink-0 ${isLostControl ? 'eldritch-illegible-panel eldritch-container-distortion' : ''}`}>
        <div className={`bg-[#1a1a1a] px-3 py-2 border-b border-[#333] text-[11px] font-bold uppercase ${textAccentClass} transition-colors duration-500 flex justify-between items-center`}>
          <span>{t.inventory} ({inventory.length})</span>
          <span className="text-[10px] text-[#888] font-normal">
            BL: {basicLift.toFixed(1)} lbs | {totalWeight.toFixed(1)} lbs
          </span>
        </div>

        <div className="p-2.5 flex flex-col gap-2">
          {/* Add Item Dropdown with Categories */}
          <div className="flex gap-1">
            <select 
              value={selectedItem} 
              data-info-target="true"
              onChange={e => {
                const val = e.target.value;
                setSelectedItem(val);
                if (val) {
                  const def = allItems.find(i => i.id === val);
                  if (def) setViewerData({ title: def.name[lang], desc: `${def.description[lang]}\n\nWeight: ${def.weightLbs} lbs | Cost: ${formatMoney(def.costInPence)}`, type: 'item' });
                }
              }} 
              className="flex-1 bg-[#222] border border-[#444] text-[#ddd] rounded p-1 text-[11px] outline-none cursor-pointer"
            >
              <option value="">-- {t.addItem} ({ITEMS.length}) --</option>
              {Array.from(groupedItems.entries()).map(([cat, list]) => (
                <optgroup key={cat} label={cat}>
                  {list.map(i => (
                    <option key={i.id} value={i.id}>{i.name[lang]} ({formatMoney(i.costInPence)})</option>
                  ))}
                </optgroup>
              ))}
            </select>
            <button 
              onClick={handleBuy} 
              className="px-2.5 bg-[#222] text-yellow-500 border border-[#444] rounded hover:bg-[#333] font-bold cursor-pointer" 
              title={lang === 'es' ? 'Comprar / Agregar' : 'Buy / Add'}
            >
              +
            </button>
          </div>

          {/* Encumbrance Banner */}
          <div className="flex justify-between items-center text-[10px] bg-[#1a1a1a] p-1.5 rounded border border-[#2c2c2c]">
            <span className="text-[#888]">{lang === 'es' ? 'Sobrecarga:' : 'Encumbrance:'}</span>
            <span className={`font-bold ${encumbranceLevel > 2 ? 'text-red-400' : encumbranceLevel > 0 ? 'text-yellow-500' : 'text-green-400'}`}>
              {encumbranceNames[encumbranceLevel]}
            </span>
          </div>

          {/* Inventory Items List */}
          <div className="flex flex-col gap-1 max-h-48 overflow-y-auto custom-scrollbar">
            {inventory.map(invItem => {
              const def = allItems.find(i => i.id === invItem.id);
              if (!def) return null;
              return (
                <div 
                  key={invItem.id} 
                  data-info-target="true"
                  className="flex justify-between items-center text-[11px] p-1.5 bg-[#181818] rounded border border-[#2a2a2a] hover:bg-[#222] cursor-pointer"
                  onClick={() => setViewerData({
                    title: def.name[lang], 
                    desc: `${def.description[lang]}\n\nWeight: ${(def.weightLbs * invItem.quantity).toFixed(1)} lbs (${def.weightLbs} lbs each)\nUnit Cost: ${formatMoney(def.costInPence)}`, 
                    type: 'item'
                  })}
                >
                  <div className="flex flex-col flex-1 pr-1">
                    <span className="text-[#e5e5e5] font-semibold">{def.name[lang]}</span>
                    <span className="text-[9px] text-[#777]">{(def.weightLbs * invItem.quantity).toFixed(1)} lbs</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-yellow-500 font-mono text-[10px]">{formatMoney(def.costInPence * invItem.quantity)}</span>
                    <span className="bg-[#2a2a2a] px-1.5 py-0.5 rounded text-[10px] font-mono text-[#aaa]">x{invItem.quantity}</span>
                    <button 
                      onClick={(e) => { e.stopPropagation(); removeItem(invItem.id); }} 
                      className="text-red-500 hover:text-red-400 font-bold text-base leading-none ml-1 cursor-pointer"
                    >
                      ×
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Custom Item Trigger */}
          <div className="pt-1 border-t border-[#222]">
            <button 
              onClick={() => setShowCustomForm(!showCustomForm)}
              className="text-[10px] text-yellow-600 hover:text-yellow-400 font-bold cursor-pointer"
            >
              {showCustomForm ? (lang === 'es' ? '▲ Cerrar Creador de Objeto' : '▲ Close Custom Item') : (lang === 'es' ? '+ Crear Objeto Personalizado' : '+ Custom Item Creator')}
            </button>

            {showCustomForm && (
              <div className="mt-2 p-2 bg-[#181818] border border-[#333] rounded flex flex-col gap-1.5 text-[11px]">
                <input 
                  type="text" 
                  placeholder={lang === 'es' ? 'Nombre del objeto...' : 'Item name...'} 
                  value={cName}
                  onChange={e => setCName(e.target.value)}
                  className="bg-[#222] border border-[#444] rounded p-1 text-[#ddd] outline-none"
                />
                <div className="grid grid-cols-2 gap-1">
                  <input 
                    type="number" 
                    placeholder={lang === 'es' ? 'Costo (peniques d)' : 'Cost (pence d)'} 
                    value={cCost || ''}
                    onChange={e => setCCost(parseInt(e.target.value) || 0)}
                    className="bg-[#222] border border-[#444] rounded p-1 text-[#ddd] outline-none"
                  />
                  <input 
                    type="number" 
                    placeholder={lang === 'es' ? 'Peso (lbs)' : 'Weight (lbs)'} 
                    value={cWeight || ''}
                    onChange={e => setCWeight(parseFloat(e.target.value) || 0)}
                    className="bg-[#222] border border-[#444] rounded p-1 text-[#ddd] outline-none"
                  />
                </div>
                <input 
                  type="text" 
                  placeholder={lang === 'es' ? 'Descripción / Estadísticas...' : 'Description / Stats...'} 
                  value={cDesc}
                  onChange={e => setCDesc(e.target.value)}
                  className="bg-[#222] border border-[#444] rounded p-1 text-[#ddd] outline-none"
                />
                <button 
                  onClick={() => {
                    if (cName) {
                      addCustomItem({ id: `custom_${Date.now()}`, name: cName, costInPence: cCost, weightLbs: cWeight, description: cDesc });
                      setCName(''); setCCost(0); setCWeight(0); setCDesc('');
                      setShowCustomForm(false);
                    }
                  }}
                  className="bg-yellow-600/30 text-yellow-400 border border-yellow-500/50 py-1 rounded font-bold hover:bg-yellow-600/50 transition-colors"
                >
                  {lang === 'es' ? 'Guardar Objeto' : 'Save Item'}
                </button>
              </div>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}
