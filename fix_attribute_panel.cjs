const fs = require('fs');

let content = fs.readFileSync('src/components/AttributePanel.tsx', 'utf8');

// replace the store destructuring
content = content.replace(
  "const { lang, ST, DX, IQ, HT, setAttribute, pathwayId, sequenceLevel, disadvantages, quirks, skills, advantages, setViewerData, spiUsed, setSpiUsed, corruption, setCorruption } = useCharacterStore();",
  "const { lang, ST, DX, IQ, HT, setAttribute, pathwayId, sequenceLevel, disadvantages, quirks, skills, advantages, setViewerData, spiUsed, setSpiUsed, corruption, setCorruption, hpDamage, setHpDamage, fpSpent, setFpSpent } = useCharacterStore();"
);

// replace the HP / FP section
const oldRow = `<div className="flex justify-between items-center pb-1 border-b border-[#222]">
            <span className="text-[12px] text-[#aaa] font-bold">HP / FP</span>
            <span className="font-mono text-[16px] font-bold">{finalHP} / {finalFP}</span>
          </div>`;

const newRow = `<div className="flex justify-between items-center pb-1 border-b border-[#222]">
            <span className="text-[12px] text-[#aaa] font-bold w-12">HP</span>
            <div className="flex items-center gap-2">
              <button onClick={() => setHpDamage(hpDamage + 1)} className="px-1.5 py-0.5 bg-[#222] border border-[#444] rounded text-red-400 text-xs hover:bg-[#333]" title="Take Damage">-</button>
              <span className="font-mono text-[16px] font-bold w-16 text-center text-red-500">{finalHP - hpDamage} / {finalHP}</span>
              <button onClick={() => setHpDamage(Math.max(0, hpDamage - 1))} className="px-1.5 py-0.5 bg-[#222] border border-[#444] rounded text-red-400 text-xs hover:bg-[#333]" title="Heal">+</button>
            </div>
          </div>
          <div className="flex justify-between items-center pb-1 border-b border-[#222]">
            <span className="text-[12px] text-[#aaa] font-bold w-12">FP</span>
            <div className="flex items-center gap-2">
              <button onClick={() => setFpSpent(fpSpent + 1)} className="px-1.5 py-0.5 bg-[#222] border border-[#444] rounded text-green-400 text-xs hover:bg-[#333]" title="Spend FP">-</button>
              <span className="font-mono text-[16px] font-bold w-16 text-center text-green-500">{finalFP - fpSpent} / {finalFP}</span>
              <button onClick={() => setFpSpent(Math.max(0, fpSpent - 1))} className="px-1.5 py-0.5 bg-[#222] border border-[#444] rounded text-green-400 text-xs hover:bg-[#333]" title="Recover FP">+</button>
            </div>
          </div>`;

content = content.replace(oldRow, newRow);

fs.writeFileSync('src/components/AttributePanel.tsx', content);
