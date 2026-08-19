const fs = require('fs');

let content = fs.readFileSync('src/components/SkillPanel.tsx', 'utf8');

// Replace quirkText state with two states: quirkName and quirkCost
content = content.replace(
  "const [quirkText, setQuirkText] = useState('');",
  "const [quirkName, setQuirkName] = useState('');\n  const [quirkCost, setQuirkCost] = useState<number>(-1);"
);

// Replace quirks references
// The "({quirks.length}/5)" was changed, now we don't have a 5 limit maybe? Or keep the limit of 5? "Quirks" in GURPS is usually max 5, but if they are general custom traits, maybe no limit?
// Let's remove the limit in UI.
content = content.replace("{t.quirks} ({quirks.length}/5)", "{t.quirks}");
content = content.replace("quirks.length < 5", "true"); // remove limits
content = content.replace("quirks.length < 5", "true");
content = content.replace("quirks.length < 5", "true");

// The input section for quirks:
const oldInputSection = `<div className="flex gap-1 mb-1.5">
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
            </div>`;

const newInputSection = `<div className="flex gap-1 mb-1.5">
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
            </div>`;
content = content.replace(oldInputSection, newInputSection);

// Wait, the replace string might have failed because the `oldInputSection` wasn't exact. Let's use regex or simpler replace.

fs.writeFileSync('src/components/SkillPanel.tsx', content);
