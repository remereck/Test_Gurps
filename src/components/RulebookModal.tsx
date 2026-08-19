import React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { useCharacterStore } from '../store';
import { rulebookMarkdown } from '../data/rulebook_markdown';

interface RulebookModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CHAPTERS = [
  { id: 'quick-start', label: 'Quick Start' },
  { id: 'ch1', label: 'Chapter 1: Introduction' },
  { id: 'ch2', label: 'Chapter 2: Core Rules' },
  { id: 'ch3', label: 'Chapter 3: Character Creation' },
  { id: 'ch4', label: 'Chapter 4: Spirituality' },
  { id: 'ch5', label: 'Chapter 5: Combat' },
  { id: 'ch6', label: 'Chapter 6: Beyonder System' },
  { id: 'ch6-5', label: 'Chapter 6.5: Divination Arts' },
  { id: 'ch7', label: 'Chapter 7: Ritualistic Magic' },
  { id: 'ch8', label: 'Chapter 8: Equipment' },
  { id: 'ch9', label: 'Chapter 9: Sequence 9' },
  { id: 'ch10', label: 'Chapter 10: Sequence 8' },
  { id: 'ch11', label: 'Chapter 11: Sequence 7' },
  { id: 'ch12', label: 'Chapter 12: Sequence 6' },
  { id: 'ch13', label: 'Chapter 13: Boon Granting' },
  { id: 'ch14', label: 'Chapter 14: Non-Standard' },
  { id: 'ch15', label: 'Chapter 15: Non-Std Potions' }
];

export default function RulebookModal({ isOpen, onClose }: RulebookModalProps) {
  const { lang } = useCharacterStore();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-2 md:p-6 bg-black/90 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-6xl h-[95vh] bg-[#0f0f0f] border border-[#333] rounded-lg shadow-2xl flex flex-col overflow-hidden text-[#e5e5e5]">
        
        {/* Header */}
        <div className="shrink-0 flex items-center justify-between px-6 py-4 border-b border-[#222] bg-[#141414]">
          <div className="flex items-center gap-3">
            <span className="text-3xl filter drop-shadow">📚</span>
            <h1 className="text-2xl font-black text-yellow-500 font-serif tracking-widest uppercase">
              {lang === 'es' ? 'Libro de Reglas' : 'Rulebook'}
            </h1>
          </div>
          <button 
            onClick={onClose}
            className="text-[#666] hover:text-[#fff] transition-colors p-2 text-2xl leading-none"
          >
            ×
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 flex overflow-hidden">
          {/* Sidebar Navigation */}
          <div className="hidden md:flex w-64 shrink-0 bg-[#111] border-r border-[#222] overflow-y-auto custom-scrollbar p-4 flex-col gap-1.5">
            <h3 className="text-yellow-600 font-bold mb-4 mt-2 uppercase text-xs tracking-widest px-2">
              {lang === 'es' ? 'Contenidos' : 'Contents'}
            </h3>
            {CHAPTERS.map(ch => (
              <button
                key={ch.id}
                onClick={() => scrollToSection(ch.id)}
                className="text-left px-3 py-2 text-sm text-[#aaa] hover:text-yellow-500 hover:bg-[#222] rounded transition-colors font-serif"
              >
                {ch.label}
              </button>
            ))}
          </div>

          <div className="flex-1 overflow-y-auto p-6 md:p-10 custom-scrollbar scroll-smooth relative" id="rulebook-scroll-container">
            <div className="markdown-body max-w-4xl mx-auto prose prose-invert prose-yellow prose-h1:font-black prose-h1:text-yellow-500 prose-h2:text-yellow-600 prose-h3:text-yellow-700 prose-a:text-blue-400 prose-blockquote:border-l-yellow-600 prose-blockquote:bg-yellow-950/20 prose-blockquote:p-4 prose-blockquote:italic prose-th:bg-[#222] prose-th:p-2 prose-td:p-2 prose-tr:border-b-[#333]">
              <Markdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={{
                table: ({node, ...props}) => <div className="overflow-x-auto my-8"><table className="w-full text-sm border-collapse" {...props} /></div>,
                th: ({node, ...props}) => <th className="border border-[#333] bg-[#1a1a1a] p-3 text-left font-bold text-yellow-500" {...props} />,
                td: ({node, ...props}) => <td className="border border-[#333] p-3" {...props} />,
                h1: ({node, ...props}) => <h1 className="text-4xl font-black text-yellow-500 font-serif border-b-2 border-yellow-700/50 pb-2 mb-6 mt-12" {...props} />,
                h2: ({node, ...props}) => <h2 className="text-3xl font-bold text-[#e5e5e5] font-serif border-b border-[#333] pb-2 mb-4 mt-10" {...props} />,
                h3: ({node, ...props}) => <h3 className="text-2xl font-bold text-yellow-600 font-serif mb-4 mt-8" {...props} />,
                h4: ({node, ...props}) => <h4 className="text-xl font-bold text-[#ccc] mb-3 mt-6" {...props} />,
                h5: ({node, ...props}) => <h5 className="text-lg font-bold text-yellow-600/80 mb-2 mt-4" {...props} />,
                h6: ({node, ...props}) => <h6 className="text-base font-bold text-[#aaa] uppercase tracking-wider mb-2 mt-4" {...props} />,
                p: ({node, ...props}) => <p className="leading-relaxed mb-4 text-[#bbb]" {...props} />,
                ul: ({node, ...props}) => <ul className="list-disc list-outside ml-6 mb-4 space-y-1 text-[#bbb]" {...props} />,
                ol: ({node, ...props}) => <ol className="list-decimal list-outside ml-6 mb-4 space-y-1 text-[#bbb]" {...props} />,
                li: ({node, ...props}) => <li className="pl-2" {...props} />,
                strong: ({node, ...props}) => <strong className="font-bold text-[#e5e5e5]" {...props} />,
                em: ({node, ...props}) => <em className="italic text-[#aaa]" {...props} />,
                blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-yellow-700 bg-[#111] p-4 my-6 italic text-[#aaa] shadow-inner" {...props} />,
                hr: ({node, ...props}) => <hr className="my-8 border-[#333]" {...props} />
              }}
            >
              {rulebookMarkdown}
            </Markdown>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}