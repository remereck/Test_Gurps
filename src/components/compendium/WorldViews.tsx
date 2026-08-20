import React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { ORTHODOX_CHURCHES, SECRET_ORGANIZATIONS, NATIONS } from '../../data/rulebookData';

export function ChurchesView({ selectedItemId, lang }: { selectedItemId: string, lang: 'en' | 'es' }) {
  const church = ORTHODOX_CHURCHES.find(c => c.id === selectedItemId);
  if (!church) return null;
  return (
    <div className="space-y-6 animate-fadeIn max-w-3xl">
      <div className="border-b-4 border-yellow-700/80 pb-3">
        <div className="flex items-center gap-3 mb-1">
          <span className="text-4xl filter drop-shadow-md">🏛️</span>
          <h2 className="text-3xl md:text-4xl font-black text-yellow-500 font-serif tracking-wide">{church.deity}</h2>
        </div>
        <div className="flex flex-wrap gap-2 mt-3">
          <span className="text-xs uppercase font-bold bg-yellow-950/40 text-yellow-400 border border-yellow-700/50 px-2 py-0.5 rounded">Orthodox</span>
          <span className="text-xs uppercase font-bold bg-purple-950/40 text-purple-400 border border-purple-800/50 px-2 py-0.5 rounded">Pathway: {church.pathway}</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[#111] p-4 rounded-lg border border-[#333] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-yellow-600"></div>
          <h3 className="text-xs text-[#888] font-bold uppercase mb-2">{lang === 'es' ? 'Territorio / Fortaleza' : 'Stronghold'}</h3>
          <p className="text-[#ddd] text-sm font-serif">{church.stronghold}</p>
        </div>
        <div className="bg-[#111] p-4 rounded-lg border border-[#333] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-red-600"></div>
          <h3 className="text-xs text-[#888] font-bold uppercase mb-2">{lang === 'es' ? 'Fuerza de Choque Beyonder' : 'Beyonder Faction'}</h3>
          <p className="text-red-400 font-bold text-sm font-serif">{church.beyonderFaction}</p>
        </div>
      </div>
      <div className="bg-[#0f0f0f] border border-[#222] p-5 rounded-lg shadow-inner">
        <h3 className="text-xs text-[#888] font-bold uppercase mb-3 flex items-center gap-2">
           <span className="w-4 h-px bg-[#555]"></span> {lang === 'es' ? 'Notas Clave & Lore' : 'Key Notes & Lore'} <span className="flex-1 h-px bg-[#333]"></span>
        </h3>
        <div className="text-[#bbb] text-sm leading-relaxed font-serif pl-4 border-l-2 border-[#444] markdown-body">
          <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
            {church.keyNotes}
          </Markdown>
        </div>
      </div>
    </div>
  );
}

export function OrganizationsView({ selectedItemId, lang }: { selectedItemId: string, lang: 'en' | 'es' }) {
  const org = SECRET_ORGANIZATIONS.find(o => o.id === selectedItemId);
  if (!org) return null;
  
  const isHostile = org.alignment.toLowerCase().includes('hostile');
  const isNeutral = org.alignment.toLowerCase().includes('neutral') || org.alignment.toLowerCase().includes('secret');
  const badgeColor = isHostile ? 'bg-red-950/50 text-red-400 border-red-800' : isNeutral ? 'bg-blue-950/50 text-blue-400 border-blue-800' : 'bg-yellow-950/50 text-yellow-400 border-yellow-800';

  return (
    <div className="space-y-6 animate-fadeIn max-w-3xl">
      <div className="border-b-4 border-yellow-700/80 pb-3">
        <div className="flex items-center gap-3 mb-1">
          <span className="text-4xl filter drop-shadow-md">👁️</span>
          <h2 className="text-3xl md:text-4xl font-black text-[#e5e5e5] font-serif tracking-wide">{org.name}</h2>
        </div>
        <div className="flex flex-wrap gap-2 mt-3">
          <span className={`text-xs uppercase font-bold border px-2 py-0.5 rounded ${badgeColor}`}>
            {org.alignment}
          </span>
          <span className="text-xs uppercase font-bold bg-[#222] text-[#aaa] border border-[#444] px-2 py-0.5 rounded">
            {org.orgType}
          </span>
        </div>
      </div>
      <div className="bg-[#111] p-5 rounded-lg border border-[#333] shadow-md">
        <h3 className="text-xs text-[#888] font-bold uppercase mb-3 flex items-center gap-2">
           <span className="w-4 h-px bg-[#555]"></span> {lang === 'es' ? 'Foco y Propósito' : 'Known Focus'} <span className="flex-1 h-px bg-[#333]"></span>
        </h3>
        <div className="text-[#bbb] text-sm leading-relaxed font-serif markdown-body">
          <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
            {org.knownFocus}
          </Markdown>
        </div>
      </div>
    </div>
  );
}

export function NationsView({ selectedItemId }: { selectedItemId: string }) {
  const nation = NATIONS.find(n => n.id === selectedItemId);
  if (!nation) return null;
  return (
    <div className="space-y-6 animate-fadeIn max-w-3xl">
      <div className="border-b-4 border-yellow-700/80 pb-3">
        <div className="flex items-center gap-3 mb-1">
          <span className="text-4xl filter drop-shadow-md">🗺️</span>
          <h2 className="text-3xl md:text-4xl font-black text-yellow-500 font-serif tracking-wide">{nation.name}</h2>
        </div>
        <div className="mt-3">
          <span className="text-xs text-[#888] bg-[#222] border border-[#444] px-2 py-0.5 rounded uppercase font-bold">{nation.region}</span>
        </div>
      </div>
      <div className="bg-[#111] p-5 rounded-lg border border-[#333] shadow-md relative">
        <div className="absolute top-0 right-0 p-8 text-9xl opacity-5 select-none pointer-events-none font-serif">
          {nation.name.charAt(0)}
        </div>
        <div className="text-sm text-[#ccc] leading-relaxed font-serif relative z-10 markdown-body">
          <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
            {nation.description}
          </Markdown>
        </div>
      </div>
    </div>
  );
}
