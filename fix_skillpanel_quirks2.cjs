const fs = require('fs');

let content = fs.readFileSync('src/components/SkillPanel.tsx', 'utf8');

// Replace the input for quirks section
const target = `<div className="flex flex-col gap-1.5 mt-2">
            <div className="flex items-center justify-between border-t border-[#222] pt-2">
              <span className="text-[11px] text-[#aaa]">{t.quirks}</span>
            </div>
            <div className="flex gap-1 mb-1.5">
              <input 
                type="text" 
                value={quirkText} 
                onChange={e => setQuirkText(e.target.value)}
                onFocus={() => {
                  setViewerData({
                    title: t.quirks, 
                    desc: lang === 'en' ? 'A minor personality trait, habit, or preference that brings the character to life. Each quirk gives you 1 extra character point (max 5).' : 'Un rasgo menor de personalidad, hábito o preferencia que da vida al personaje. Cada quirk te otorga 1 punto extra (máx 5).',
                    extra: 'Cost: -1 pts',
                    type: 'drawback'
                  });
                }}
                placeholder={t.addQuirk} 
                className="flex-1 bg-[#222] border border-[#444] text-[#ddd] rounded p-1 text-[11px] outline-none"
                onKeyDown={e => {
                  if (e.key === 'Enter' && quirkText && true) {
                    addQuirk(quirkText);
                    setQuirkText('');
                  }
                }}
              />
              <button onClick={() => { if(quirkText && true) { addQuirk(quirkText); setQuirkText(''); } }} className="px-2 bg-[#222] text-yellow-500 border border-[#444] rounded hover:bg-[#333]">+</button>
            </div>
            <div className="space-y-1">
              {quirks.map((q, i) => (
                <div key={i} className="flex justify-between items-center text-[11px] p-1.5 bg-[#181818] rounded border-l-4 border-yellow-700">
                  <span className="text-[#e5e5e5] truncate mr-2">{q}</span>
                  <div className="flex gap-2 items-center">
                    <span className="text-yellow-500 whitespace-nowrap">+1 pt</span>
                    <button onClick={() => removeQuirk(i)} className="text-red-500 hover:text-red-400 font-bold text-lg leading-none">×</button>
                  </div>
                </div>
              ))}
            </div>
          </div>`;

const newTarget = `<div className="flex flex-col gap-1.5 mt-2">
            <div className="flex items-center justify-between border-t border-[#222] pt-2">
              <span className="text-[11px] text-[#aaa]">{t.quirks}</span>
            </div>
            <div className="flex gap-1 mb-1.5">
              <input 
                type="text" 
                value={quirkName} 
                onChange={e => setQuirkName(e.target.value)}
                onFocus={() => {
                  setViewerData({
                    title: t.quirks, 
                    desc: lang === 'en' ? 'Custom trait, perk, or quirk. Positive cost = Advantage (spend points), Negative cost = Disadvantage (gain points).' : 'Rasgo personalizado, ventaja menor o peculiaridad. Costo positivo = Ventaja (gastas puntos), Costo negativo = Desventaja (ganas puntos).',
                    type: 'drawback'
                  });
                }}
                placeholder={lang === 'en' ? 'Custom Trait / Quirk...' : 'Rasgo / Quirk...'} 
                className="flex-1 bg-[#222] border border-[#444] text-[#ddd] rounded p-1 text-[11px] outline-none"
                onKeyDown={e => {
                  if (e.key === 'Enter' && quirkName) {
                    addQuirk({ name: quirkName, cost: quirkCost });
                    setQuirkName('');
                    setQuirkCost(-1);
                  }
                }}
              />
              <input 
                type="number" 
                value={quirkCost} 
                onChange={e => setQuirkCost(parseInt(e.target.value) || 0)}
                className="w-12 bg-[#222] border border-[#444] text-[#ddd] rounded p-1 text-[11px] outline-none text-center"
                title={lang === 'en' ? 'Cost (Points)' : 'Costo (Puntos)'}
              />
              <button onClick={() => { if(quirkName) { addQuirk({ name: quirkName, cost: quirkCost }); setQuirkName(''); setQuirkCost(-1); } }} className="px-2 bg-[#222] text-yellow-500 border border-[#444] rounded hover:bg-[#333]">+</button>
            </div>
            <div className="space-y-1">
              {quirks.map((q, i) => (
                <div key={i} className="flex justify-between items-center text-[11px] p-1.5 bg-[#181818] rounded border-l-4 border-yellow-700">
                  <span className="text-[#e5e5e5] truncate mr-2">{q.name}</span>
                  <div className="flex gap-2 items-center">
                    <span className={q.cost > 0 ? "text-yellow-500 whitespace-nowrap" : "text-red-400 whitespace-nowrap"}>{q.cost} pts</span>
                    <button onClick={() => removeQuirk(i)} className="text-red-500 hover:text-red-400 font-bold text-lg leading-none">×</button>
                  </div>
                </div>
              ))}
            </div>
          </div>`;

// let's do a substring replace to be safe.
const startIdx = content.indexOf('<div className="flex flex-col gap-1.5 mt-2">');
const endIdx = content.indexOf('</div>\n      </section>', startIdx);

if (startIdx !== -1 && endIdx !== -1) {
    const toReplace = content.substring(startIdx, endIdx);
    content = content.replace(toReplace, newTarget + '\n        </div>');
}

fs.writeFileSync('src/components/SkillPanel.tsx', content);
