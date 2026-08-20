import React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { GLOSSARY } from '../../data/rulebookData';
import { SKILLS } from '../../data/skillsData';
import { ADVANTAGES, DISADVANTAGES } from '../../data/traitsData';
import { ITEMS } from '../../data/itemsData';
import { formatMoney } from '../../utils';

export function GlossaryView({ selectedItemId, lang }: { selectedItemId: string, lang: 'en' | 'es' }) {
  const item = GLOSSARY.find(g => g.id === selectedItemId);
  if (!item) return null;

  return (
    <div className="space-y-6 animate-fadeIn max-w-3xl">
      <div className="border-b-4 border-[#333] pb-3">
        <div className="flex items-center gap-3 mb-1">
          <span className="text-4xl filter drop-shadow-md">📖</span>
          <h2 className="text-3xl md:text-4xl font-black text-yellow-400 font-serif tracking-wide">{item.term}</h2>
        </div>
        <div className="mt-3">
          <span className={`text-xs uppercase font-mono px-2 py-0.5 rounded border ${
            item.category === 'mechanic' ? 'border-purple-800 text-purple-400 bg-purple-950/40' : 'border-blue-800 text-blue-400 bg-blue-950/40'
          }`}>
            {item.category === 'mechanic' ? (lang === 'es' ? 'Mecánica GURPS' : 'GURPS Mechanic') : (lang === 'es' ? 'Lore / Setting' : 'Lore / Setting')}
          </span>
        </div>
      </div>
      <div className="bg-[#111] p-5 rounded-lg border border-[#222] border-l-4 border-l-yellow-600/50 shadow-md">
        <div className="text-sm text-[#bbb] leading-relaxed font-serif markdown-body">
          <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
            {item.definition}
          </Markdown>
        </div>
      </div>
    </div>
  );
}

export function EquipmentView({ selectedItemId, lang }: { selectedItemId: string, lang: 'en' | 'es' }) {
  const item = ITEMS.find(i => i.id === selectedItemId);
  if (!item) return null;
  return (
    <div className="space-y-4 animate-fadeIn max-w-2xl">
      <div className="border-b-4 border-yellow-700/80 pb-2 mb-4">
        <h2 className="text-3xl font-black text-yellow-500 mb-1 font-serif tracking-wide">{item.name?.[lang] || 'Unknown'}</h2>
        <div className="text-xs text-[#aaa] italic">
          {item.category || 'General Equipment'}
        </div>
      </div>
      
      <div className="bg-[#111] p-0.5 rounded border border-[#333]">
        <div className="bg-[#181818] p-3 rounded-sm border border-[#222]">
          <div className="grid grid-cols-2 gap-4 text-sm mb-1">
            <div><span className="font-bold text-[#e5e5e5]">{lang === 'es' ? 'Costo' : 'Cost'}:</span> <span className="font-mono text-yellow-400">{formatMoney(item.costInPence)}</span></div>
            <div><span className="font-bold text-[#e5e5e5]">{lang === 'es' ? 'Peso' : 'Weight'}:</span> {item.weightLbs} lbs</div>
          </div>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#444] to-transparent my-3"></div>
          <p className="text-sm text-[#ccc] leading-relaxed whitespace-pre-wrap font-serif">
            {item.description?.[lang] || ''}
          </p>
        </div>
      </div>
    </div>
  );
}

export function SkillsView({ selectedItemId, lang }: { selectedItemId: string, lang: 'en' | 'es' }) {
  const skill = SKILLS.find(s => s.id === selectedItemId);
  if (!skill) return null;
  return (
    <div className="space-y-4 animate-fadeIn max-w-2xl">
      <div className="border-b-4 border-[#333] pb-2 mb-4">
        <div className="flex items-center gap-3 mb-1">
          <span className="text-4xl filter drop-shadow-md">🎯</span>
          <h2 className="text-3xl font-black text-[#e5e5e5] font-serif tracking-wide">{skill.name[lang]}</h2>
        </div>
        <div className="text-xs text-[#aaa] italic mt-2">
          <span className="font-bold text-yellow-500">{skill.attr}</span> / <span className="text-[#888]">{skill.difficulty}</span>
        </div>
      </div>
      <div className="bg-[#111] p-5 rounded-lg border border-[#222] border-l-4 border-l-blue-600/50 shadow-md">
        <p className="text-sm text-[#ccc] leading-relaxed whitespace-pre-wrap font-serif">
          {skill.description[lang]}
        </p>
      </div>
    </div>
  );
}

export function TraitsView({ selectedItemId, lang }: { selectedItemId: string, lang: 'en' | 'es' }) {
  const allTraits = [
    ...ADVANTAGES.map(a => ({ ...a, traitType: 'advantage' })),
    ...DISADVANTAGES.map(d => ({ ...d, traitType: 'disadvantage' })),
    { 
      id: 'quirks_info', 
      name: { en: 'Custom Quirks', es: 'Quirks Personalizados' }, 
      description: { 
        en: 'A Quirk is a minor trait that gives a small mechanical bonus or penalty, or is just for roleplay flavor.\n\nIn this system, you can define your own Quirks. If they are beneficial (Advantage), you spend points. If they are detrimental (Disadvantage), you gain points.', 
        es: 'Un Quirk es un rasgo menor que otorga un pequeño bono o penalizador mecánico, o simplemente sirve para dar sabor al rol.\n\nEn este sistema, puedes definir tus propios Quirks. Si son beneficiosos (Ventaja), gastas puntos. Si son perjudiciales (Desventaja), ganas puntos.' 
      }, 
      cost: 0, 
      hasLevels: false, 
      traitType: 'quirk' 
    }
  ];
  const trait = allTraits.find(t => t.id === selectedItemId);
  if (!trait) return null;
  
  const isAdv = trait.traitType === 'advantage';
  const isDis = trait.traitType === 'disadvantage';
  const isQuirk = trait.traitType === 'quirk';
  
  const icon = isAdv ? '⭐' : isDis ? '⚠️' : '💡';
  const colorClass = isAdv ? 'text-green-400 border-l-green-600/50' : isDis ? 'text-red-400 border-l-red-600/50' : 'text-yellow-400 border-l-yellow-600/50';

  return (
    <div className="space-y-4 animate-fadeIn max-w-2xl">
      <div className="border-b-4 border-[#333] pb-2 mb-4">
        <div className="flex items-center gap-3 mb-1">
          <span className="text-4xl filter drop-shadow-md">{icon}</span>
          <h2 className={`text-3xl font-black font-serif tracking-wide ${colorClass.split(' ')[0]}`}>{trait.name[lang]}</h2>
        </div>
        {!isQuirk && (
          <div className="flex gap-2 text-xs font-mono mt-3">
            <span className="bg-[#1a1a1a] border border-[#333] px-2 py-1 rounded text-[#ccc]">
              Cost: {trait.cost} {trait.hasLevels ? 'pts/level' : 'pts'}
            </span>
          </div>
        )}
      </div>
      <div className={`bg-[#111] p-5 rounded-lg border border-[#222] border-l-4 shadow-md ${colorClass.split(' ')[1]}`}>
        <p className="text-sm text-[#ccc] leading-relaxed whitespace-pre-wrap font-serif">
          {trait.description[lang]}
        </p>
      </div>
    </div>
  );
}
