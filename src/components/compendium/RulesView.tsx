import React, { useState } from 'react';
import { CORE_RULES_SUMMARY } from '../../data/rulebookData';
import { formatMoney } from '../../utils';

export function RulesView({ selectedItemId, lang }: { selectedItemId: string, lang: 'en' | 'es' }) {
  // Currency converter state
  const [calcPounds, setCalcPounds] = useState(1);
  const [calcSoli, setCalcSoli] = useState(0);
  const [calcPence, setCalcPence] = useState(0);
  const totalCalculatedPence = calcPounds * 240 + calcSoli * 12 + calcPence;

  return (
    <div className="space-y-5 animate-fadeIn">
      {selectedItemId === 'rules_currency' && (
        <div className="bg-[#111] border border-yellow-600/30 rounded-lg p-5">
          <h3 className="text-lg font-bold text-yellow-500 uppercase tracking-wider mb-2">
            💰 {lang === 'es' ? 'Calculadora Monetaria' : 'Currency Calculator'}
          </h3>
          <div className="text-sm text-[#aaa] mb-6 border-b border-[#222] pb-4">
            1 Pound (£) = 20 Soli = 240 Pence (d) <br/> 1 Soli (s) = 12 Pence (d)
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-xl mb-6">
            <div>
              <label className="text-xs uppercase font-bold text-[#888] block mb-2">Pounds (£)</label>
              <input 
                type="number" min="0" value={calcPounds} 
                onChange={e => setCalcPounds(Math.max(0, parseInt(e.target.value) || 0))}
                className="w-full bg-[#1e1e1e] border border-[#3a3a3a] rounded p-3 text-center text-lg font-mono font-bold text-yellow-400"
              />
            </div>
            <div>
              <label className="text-xs uppercase font-bold text-[#888] block mb-2">Soli (s)</label>
              <input 
                type="number" min="0" value={calcSoli} 
                onChange={e => setCalcSoli(Math.max(0, parseInt(e.target.value) || 0))}
                className="w-full bg-[#1e1e1e] border border-[#3a3a3a] rounded p-3 text-center text-lg font-mono font-bold text-[#ddd]"
              />
            </div>
            <div>
              <label className="text-xs uppercase font-bold text-[#888] block mb-2">Pence (d)</label>
              <input 
                type="number" min="0" value={calcPence} 
                onChange={e => setCalcPence(Math.max(0, parseInt(e.target.value) || 0))}
                className="w-full bg-[#1e1e1e] border border-[#3a3a3a] rounded p-3 text-center text-lg font-mono font-bold text-[#b45309]"
              />
            </div>
          </div>
          <div className="bg-[#1a1a1a] p-4 rounded border border-[#333] flex items-center justify-between text-base">
            <span className="text-[#888]">{lang === 'es' ? 'Total en Peniques:' : 'Total in Pence:'} <strong className="text-white font-mono">{totalCalculatedPence} d</strong></span>
            <span className="text-yellow-400 font-mono font-bold text-xl">{formatMoney(totalCalculatedPence)}</span>
          </div>
        </div>
      )}

      {selectedItemId === 'rules_divination' && (
        <div className="bg-[#111] border border-purple-900/40 rounded-lg p-5">
          <h3 className="text-lg font-bold text-purple-400 uppercase tracking-wider mb-4">
            🔮 {lang === 'es' ? 'Métodos de Adivinación' : 'Divination Methods'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CORE_RULES_SUMMARY.divinationMethods.map((m, idx) => (
              <div key={idx} className="bg-[#1a1a1a] p-4 rounded border border-[#2a2a2a]">
                <h4 className="text-sm font-bold text-purple-300 mb-2">{m.name}</h4>
                <p className="text-sm text-[#bbb] leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedItemId === 'rules_mechanics' && (
        <div className="bg-[#111] border border-[#333] rounded-lg p-5">
          <h3 className="text-lg font-bold text-[#e5e5e5] uppercase tracking-wider mb-4">
            🎲 {lang === 'es' ? 'Mecánicas 3d6 y Críticos' : '3d6 Roll Mechanics'}
          </h3>
          <div className="space-y-4 text-sm text-[#bbb] leading-relaxed">
            <div className="p-4 bg-[#1a1a1a] rounded border border-[#2a2a2a]">
              <strong>{CORE_RULES_SUMMARY.diceSystem}</strong>
            </div>
            <div className="p-4 bg-[#1a1a1a] rounded border border-yellow-900/30 text-yellow-400/90">
              {CORE_RULES_SUMMARY.criticalRules}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
