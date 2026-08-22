import React, { useState, useMemo, useEffect } from 'react';
import { useCharacterStore } from '../store';
import { TRANSLATIONS } from '../i18n';
import { 
  ORTHODOX_CHURCHES, 
  SECRET_ORGANIZATIONS, 
  NATIONS, 
  GLOSSARY, 
  CORE_RULES_SUMMARY
} from '../data/rulebookData';
import { SKILLS } from '../data/skillsData';
import { ADVANTAGES, DISADVANTAGES } from '../data/traitsData';
import { ITEMS } from '../data/itemsData';
import { PATHWAYS } from "../data/pathwaysData";
import { useCorruptionMetrics } from '../utils/corruption';
import { formatMoney } from '../utils';
import { EmptyStateView, ChurchesView, OrganizationsView, NationsView, GlossaryView, EquipmentView, SkillsView, TraitsView, RulesView, PathwaysView } from './compendium';

interface CompendiumModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type TabType = 'pathways' | 'churches' | 'organizations' | 'nations' | 'glossary' | 'equipment' | 'skills' | 'traits' | 'rules';

export default function CompendiumModal({ isOpen, onClose }: CompendiumModalProps) {
  const { lang } = useCharacterStore();
  const t = TRANSLATIONS[lang];
  const { textAccentClass, borderClass } = useCorruptionMetrics();

  const [activeTab, setActiveTab] = useState<TabType>('pathways');
  const [searchQuery, setSearchQuery] = useState('');
  const [glossaryFilter, setGlossaryFilter] = useState<'all' | 'mechanic' | 'setting'>('all');
  const [itemCategoryFilter, setItemCategoryFilter] = useState<string>('all');
  const [skillAttrFilter, setSkillAttrFilter] = useState<string>('all');
  const [traitTypeFilter, setTraitTypeFilter] = useState<string>('all');
  const [pathwayTypeFilter, setPathwayTypeFilter] = useState<string>("all");
  
  // Master-Detail state
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const [isMobileDetailView, setIsMobileDetailView] = useState(false);


  // Reset selection when changing tabs
  useEffect(() => {
    setSelectedItemId(null);
    setIsMobileDetailView(false);
    setSearchQuery('');
  }, [activeTab]);


  // Filtered churches
  const filteredChurches = useMemo(() => {
    if (!searchQuery) return ORTHODOX_CHURCHES;
    const q = searchQuery.toLowerCase();
    return ORTHODOX_CHURCHES.filter(c => 
      c.deity.toLowerCase().includes(q) || 
      c.pathway.toLowerCase().includes(q) || 
      c.stronghold.toLowerCase().includes(q) ||
      c.beyonderFaction.toLowerCase().includes(q) ||
      c.keyNotes.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  // Filtered organizations
  const filteredOrgs = useMemo(() => {
    if (!searchQuery) return SECRET_ORGANIZATIONS;
    const q = searchQuery.toLowerCase();
    return SECRET_ORGANIZATIONS.filter(o => 
      o.name.toLowerCase().includes(q) || 
      o.orgType.toLowerCase().includes(q) || 
      o.alignment.toLowerCase().includes(q) ||
      o.knownFocus.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  // Filtered nations
  const filteredNations = useMemo(() => {
    if (!searchQuery) return NATIONS;
    const q = searchQuery.toLowerCase();
    return NATIONS.filter(n => 
      n.name.toLowerCase().includes(q) || 
      n.region.toLowerCase().includes(q) || 
      n.description.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  // Filtered glossary
  const filteredGlossary = useMemo(() => {
    return GLOSSARY.filter(g => {
      const matchCat = glossaryFilter === 'all' || g.category === glossaryFilter;
      const matchQuery = !searchQuery || 
        g.term.toLowerCase().includes(searchQuery.toLowerCase()) || 
        g.definition.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchQuery;
    });
  }, [searchQuery, glossaryFilter]);

  // Filtered equipment
  const filteredItems = useMemo(() => {
    return ITEMS.filter(i => {
      const matchCat = itemCategoryFilter === 'all' || i.category === itemCategoryFilter;
      const matchQuery = !searchQuery || 
        i.name?.[lang]?.toLowerCase().includes(searchQuery.toLowerCase()) || 
        i.description?.[lang]?.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchQuery;
    });
  }, [searchQuery, itemCategoryFilter, lang]);

  const itemCategories = useMemo(() => {
    const set = new Set<string>();
    ITEMS.forEach(i => { if (i.category) set.add(i.category); });
    return Array.from(set);
  }, []);

  // Filtered skills
  const filteredSkills = useMemo(() => {
    return SKILLS.filter(s => {
      const matchAttr = skillAttrFilter === 'all' || s.attr.toLowerCase() === skillAttrFilter;
      const matchQuery = !searchQuery || 
        s.name?.[lang]?.toLowerCase().includes(searchQuery.toLowerCase()) || 
        s.description?.[lang]?.toLowerCase().includes(searchQuery.toLowerCase());
      return matchAttr && matchQuery;
    });
  }, [searchQuery, skillAttrFilter, lang]);

  // Filtered traits
  const filteredTraits = useMemo(() => {
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
    return allTraits.filter(t => {
      if (t.id.startsWith('separator_') || t.name.en === '---') return false;
      const matchType = traitTypeFilter === 'all' || t.traitType === traitTypeFilter;
      const matchQuery = !searchQuery || 
        t.name?.[lang]?.toLowerCase().includes(searchQuery.toLowerCase()) || 
        t.description?.[lang]?.toLowerCase().includes(searchQuery.toLowerCase());
      return matchType && matchQuery;
    }).sort((a, b) => a.name[lang].localeCompare(b.name[lang]));
  }, [searchQuery, traitTypeFilter, lang]);


  // Filtered pathways
  const filteredPathways = useMemo(() => {
    return PATHWAYS.filter((p, index) => {
      const isStandard = index < 22; // The first 22 are the standard pathways
      const matchType = pathwayTypeFilter === 'all' || 
                        (pathwayTypeFilter === 'standard' && isStandard) || 
                        (pathwayTypeFilter === 'non-standard' && !isStandard);
      const matchQuery = !searchQuery || 
        (p.name?.[lang]?.toLowerCase() || p.name?.en?.toLowerCase() || '').includes(searchQuery.toLowerCase());
      return matchType && matchQuery;
    });
  }, [searchQuery, pathwayTypeFilter, lang]);

  const getListItems = () => {
    switch (activeTab) {
      
      case 'pathways':
        return filteredPathways.map((p, index) => {
          const isStandard = PATHWAYS.indexOf(p) < 22;
          
          let iconContent: React.ReactNode = '🌌';
          if (isStandard) {
            const fileName = p.id === 'fool' ? 'Fool_Symbol.webp' : 
              p.id === 'abyss' ? 'Abyss_Symbol2.webp' :
              p.id === 'black_emperor' ? 'Black_Emperor_Symbol2.webp' :
              p.id === 'chained' ? 'Chained_Symbol2.webp' :
              p.id === 'darkness' ? 'Darkness_Symbol2.webp' :
              p.id === 'death' ? 'Death_Symbol2.webp' :
              p.id === 'demoness' ? 'Demoness_Symbol2.webp' :
              p.id === 'door' ? 'Door_Symbol2.webp' :
              p.id === 'error' ? 'Error_Symbol2.webp' :
              p.id === 'hanged_man' ? 'Hanged_Man_Symbol2.webp' :
              p.id === 'hermit' ? 'Hermit_Symbol2.webp' :
              p.id === 'justiciar' ? 'Justiciar_Symbol2.webp' :
              p.id === 'moon' ? 'Moon_Symbol2.webp' :
              p.id === 'mother' ? 'Mother_Symbol2.webp' :
              p.id === 'paragon' ? 'Paragon_Symbol2.webp' :
              p.id === 'red_priest' ? 'Red_Priest_Symbol2.webp' :
              p.id === 'sun' ? 'Sun_Symbol2.webp' :
              p.id === 'twilight_giant' ? 'Twilight_Giant_Symbol2.webp' :
              p.id === 'tyrant' ? 'Tyrant_Symbol2.webp' :
              p.id === 'visionary' ? 'Visionary_Symbol2.webp' :
              p.id === 'wheel_of_fortune' ? 'Wheel_of_Fortune_Symbol2.webp' :
              p.id === 'white_tower' ? 'White_Tower_Symbol2.webp' : null;

            if (fileName) {
              iconContent = <img src={`./PathwaysSimbols/${fileName}`} alt={`${p.name?.en} Symbol`} className="w-6 h-6 object-contain drop-shadow-[0_0_2px_rgba(255,255,255,0.3)]" />;
            }
          }

          return { 
            id: p.id, 
            icon: iconContent, 
            title: p.name?.[lang] || p.name?.en || 'Unknown', 
            subtitle: isStandard ? (lang === 'es' ? 'Estándar' : 'Standard') : (lang === 'es' ? 'No Estándar' : 'Non-Standard') 
          };
        });
      case 'churches':
        return filteredChurches.map(c => ({ id: c.id, icon: '🏛️', title: c.deity, subtitle: c.stronghold }));
      case 'organizations':
        return filteredOrgs.map(o => ({ id: o.id, icon: '👁️', title: o.name, subtitle: o.orgType }));
      case 'nations':
        return filteredNations.map(n => ({ id: n.id, icon: '🗺️', title: n.name, subtitle: n.region }));
      case 'glossary':
        return filteredGlossary.map(g => ({ id: g.id, icon: g.category === 'mechanic' ? '⚙️' : '📜', title: g.term, subtitle: g.category }));
      case 'equipment':
        return filteredItems.map(i => ({ id: i.id, icon: '🗡️', title: i.name?.[lang] || 'Unknown', subtitle: formatMoney(i.costInPence) }));
      case 'skills':
        return filteredSkills.map(s => ({ id: s.id, icon: '🎯', title: s.name?.[lang] || 'Unknown', subtitle: `${s.attr}/${s.difficulty}` }));
      case 'traits':
        return filteredTraits.map(t => ({ 
          id: t.id, 
          icon: t.traitType === 'advantage' ? '⭐' : t.traitType === 'disadvantage' ? '⚠️' : '💡', 
          title: t.name?.[lang] || 'Unknown', 
          subtitle: t.traitType === 'quirk' ? (lang === 'es' ? 'Personalizado' : 'Custom') : `${t.cost} pts${t.hasLevels ? '/lvl' : ''}` 
        }));
      case 'rules':
        return [
          { id: 'rules_currency', icon: '💰', title: lang === 'es' ? 'Calculadora Monetaria' : 'Currency Calculator', subtitle: '£ / s / d' },
          { id: 'rules_divination', icon: '🔮', title: lang === 'es' ? 'Métodos de Adivinación' : 'Divination Methods', subtitle: 'Ch 6.5' },
          { id: 'rules_mechanics', icon: '🎲', title: lang === 'es' ? 'Mecánicas 3d6' : '3d6 Mechanics', subtitle: 'Rolls & Criticals' }
        ];
      default:
        return [];
    }
  };

  const handleSelectItem = (id: string) => {
    setSelectedItemId(id);
    setIsMobileDetailView(true);
  };

  const renderDetailView = () => {
    if (!selectedItemId && activeTab !== 'rules') {
      return <EmptyStateView activeTab={activeTab} lang={lang as 'en' | 'es'} />;
    }
    if (activeTab === 'pathways' && selectedItemId) return <PathwaysView selectedItemId={selectedItemId} lang={lang as 'en' | 'es'} />;
    if (activeTab === 'churches' && selectedItemId) return <ChurchesView selectedItemId={selectedItemId} lang={lang as 'en' | 'es'} />;
    if (activeTab === 'organizations' && selectedItemId) return <OrganizationsView selectedItemId={selectedItemId} lang={lang as 'en' | 'es'} />;
    if (activeTab === 'nations' && selectedItemId) return <NationsView selectedItemId={selectedItemId} />;
    if (activeTab === 'glossary' && selectedItemId) return <GlossaryView selectedItemId={selectedItemId} lang={lang as 'en' | 'es'} />;
    if (activeTab === 'equipment' && selectedItemId) return <EquipmentView selectedItemId={selectedItemId} lang={lang as 'en' | 'es'} />;
    if (activeTab === 'skills' && selectedItemId) return <SkillsView selectedItemId={selectedItemId} lang={lang as 'en' | 'es'} />;
    if (activeTab === 'traits' && selectedItemId) return <TraitsView selectedItemId={selectedItemId} lang={lang as 'en' | 'es'} />;
    if (activeTab === 'rules' && selectedItemId) return <RulesView selectedItemId={selectedItemId} lang={lang as 'en' | 'es'} />;
    return null;
  };

  const listItems = getListItems();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 md:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className={`w-full max-w-6xl h-[95vh] md:h-[90vh] bg-[#0c0c0c] border-2 ${borderClass} rounded-lg shadow-2xl flex flex-col overflow-hidden text-[#e5e5e5]`}>
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#141414] border-b border-[#2a2a2a] shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-xl">📜</span>
            <div>
              <h2 className={`m-0 text-base md:text-lg font-black uppercase tracking-wider ${textAccentClass}`}>
                {lang === 'es' ? 'Compendio y Base de Datos del Lore' : 'Rulebook Compendium & Lore Database'}
              </h2>
              <p className="m-0 text-[11px] text-[#888] hidden sm:block">
                {lang === 'es' ? 'Reglas oficiales, Lore, Organizaciones, Glosario y Equipo' : 'Official Rules, Lore, Organizations, Glossary & Equipment'}
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded bg-[#222] border border-[#444] text-[#aaa] hover:text-white hover:bg-[#333] transition-colors text-lg font-bold cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Master-Detail Body */}
        <div className="flex-1 flex overflow-hidden">
          
          {/* Left Panel: Sidebar List */}
          <div className={`${isMobileDetailView ? 'hidden md:flex' : 'flex'} w-full md:w-[320px] lg:w-[360px] flex-col bg-[#0f0f0f] border-r border-[#222]`}>
            {/* Category Selector */}
            <div className="p-3 border-b border-[#222] bg-[#141414]">
              <select 
                value={activeTab} 
                onChange={(e) => setActiveTab(e.target.value as TabType)}
                className="w-full bg-[#1e1e1e] border border-[#333] rounded px-3 py-2 text-sm text-[#eee] font-bold outline-none focus:border-yellow-500/50 appearance-none"
              >
                <option value="pathways">{lang === 'es' ? '🌌 Vías (Pathways)' : '🌌 Pathways'}</option>
                <option value="churches">{lang === 'es' ? '🏛️ Iglesias Ortodoxas' : '🏛️ Orthodox Churches'}</option>
                <option value="organizations">{lang === 'es' ? '👁️ Org. Secretas' : '👁️ Secret Orgs'}</option>
                <option value="nations">{lang === 'es' ? '🗺️ Naciones' : '🗺️ Nations'}</option>
                <option value="glossary">{lang === 'es' ? '📖 Glosario' : '📖 Glossary'}</option>
                <option value="equipment">{lang === 'es' ? '⚔️ Catálogo de Equipo' : '⚔️ Equipment Catalog'}</option>
                <option value="skills">{lang === 'es' ? '🎯 Habilidades' : '🎯 Skills'}</option>
                <option value="traits">{lang === 'es' ? '🧬 Ventajas & Desventajas' : '🧬 Advantages & Disadv.'}</option>
                <option value="rules">{lang === 'es' ? '⚖️ Reglas & Monedas' : '⚖️ Rules & Currency'}</option>
              </select>
            </div>

            {/* Filters / Search */}
            {(activeTab !== 'rules') && (
              <div className="p-3 border-b border-[#222] bg-[#141414] flex flex-col gap-3">
                {/* Extra Filters for certain tabs */}
                {activeTab === 'pathways' && (
                  <select 
                    value={pathwayTypeFilter}
                    onChange={(e) => setPathwayTypeFilter(e.target.value)}
                    className="w-full bg-[#1a1a1a] border border-[#333] rounded px-2 py-1.5 text-xs text-[#aaa] outline-none"
                  >
                    <option value="all">{lang === 'es' ? '-- Todas las vías --' : '-- All Pathways --'}</option>
                    <option value="standard">{lang === 'es' ? 'Estándar' : 'Standard'}</option>
                    <option value="non-standard">{lang === 'es' ? 'No Estándar' : 'Non-Standard'}</option>
                  </select>
                )}
                {activeTab === 'glossary' && (
                  <div className="flex bg-[#1a1a1a] rounded p-1 border border-[#333]">
                    {(['all', 'setting', 'mechanic'] as const).map(cat => (
                      <button
                        key={cat}
                        onClick={() => setGlossaryFilter(cat)}
                        className={`flex-1 py-1 text-[10px] uppercase font-bold rounded ${
                          glossaryFilter === cat ? 'bg-[#333] text-white shadow-sm' : 'text-[#888] hover:text-[#bbb]'
                        }`}
                      >
                        {cat === 'all' ? 'All' : cat}
                      </button>
                    ))}
                  </div>
                )}
                {activeTab === 'equipment' && (
                  <select 
                    value={itemCategoryFilter}
                    onChange={(e) => setItemCategoryFilter(e.target.value)}
                    className="w-full bg-[#1a1a1a] border border-[#333] rounded px-2 py-1.5 text-xs text-[#aaa] outline-none"
                  >
                    <option value="all">{lang === 'es' ? '-- Todas las categorías --' : '-- All Categories --'}</option>
                    {itemCategories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                  </select>
                )}
                {activeTab === 'skills' && (
                  <select 
                    value={skillAttrFilter}
                    onChange={(e) => setSkillAttrFilter(e.target.value)}
                    className="w-full bg-[#1a1a1a] border border-[#333] rounded px-2 py-1.5 text-xs text-[#aaa] outline-none"
                  >
                    <option value="all">{lang === 'es' ? '-- Todos los atributos --' : '-- All Attributes --'}</option>
                    <option value="st">ST (Fuerza)</option>
                    <option value="dx">DX (Destreza)</option>
                    <option value="iq">IQ (Inteligencia)</option>
                    <option value="ht">HT (Salud)</option>
                  </select>
                )}
                {activeTab === 'traits' && (
                  <select 
                    value={traitTypeFilter}
                    onChange={(e) => setTraitTypeFilter(e.target.value)}
                    className="w-full bg-[#1a1a1a] border border-[#333] rounded px-2 py-1.5 text-xs text-[#aaa] outline-none"
                  >
                    <option value="all">{lang === 'es' ? '-- Todos los tipos --' : '-- All Types --'}</option>
                    <option value="advantage">{lang === 'es' ? 'Ventajas' : 'Advantages'}</option>
                    <option value="disadvantage">{lang === 'es' ? 'Desventajas' : 'Disadvantages'}</option>
                    <option value="quirk">{lang === 'es' ? 'Quirks' : 'Quirks'}</option>
                  </select>
                )}

                {/* Search Input */}
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder={lang === 'es' ? 'Buscar...' : 'Search...'}
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    className="w-full bg-[#1a1a1a] border border-[#333] rounded pl-3 pr-8 py-1.5 text-xs text-[#ddd] placeholder-[#666] outline-none focus:border-yellow-500/50"
                  />
                  {searchQuery && (
                    <button 
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-[#888] hover:text-white"
                    >
                      ✕
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* Item List */}
            <div className="flex-1 overflow-y-auto custom-scrollbar bg-[#0a0a0a]">
              {listItems.length === 0 ? (
                <div className="p-4 text-center text-xs text-[#555]">
                  {lang === 'es' ? 'No se encontraron resultados.' : 'No results found.'}
                </div>
              ) : (
                <div className="flex flex-col">
                  {listItems.map((item, idx) => {
                    const isSelected = selectedItemId === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleSelectItem(item.id)}
                        className={`w-full text-left flex items-start gap-3 p-3 border-b border-[#1a1a1a] transition-colors ${
                          isSelected 
                            ? 'bg-[#1a1a1a] border-l-4 border-l-yellow-500' 
                            : 'hover:bg-[#141414] border-l-4 border-l-transparent'
                        }`}
                      >
                        <span className="text-xl leading-none mt-0.5 filter drop-shadow">{item.icon}</span>
                        <div className="flex flex-col gap-1 overflow-hidden">
                          <span className={`text-sm font-bold truncate ${isSelected ? 'text-yellow-400' : 'text-[#ddd]'}`}>
                            {item.title}
                          </span>
                          <span className={`text-[11px] truncate ${isSelected ? 'text-[#aaa]' : 'text-[#666]'}`}>
                            {item.subtitle}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Right Panel: Detail View */}
          <div className={`${!isMobileDetailView ? 'hidden md:flex' : 'flex'} flex-1 flex-col bg-[#050505] relative`}>
            {/* Mobile Back Button */}
            <div className="md:hidden flex items-center p-3 border-b border-[#222] bg-[#111]">
              <button 
                onClick={() => setIsMobileDetailView(false)}
                className="text-xs font-bold uppercase text-yellow-500 flex items-center gap-2"
              >
                ← {lang === 'es' ? 'Volver a la lista' : 'Back to list'}
              </button>
            </div>

            {/* Detail Content */}
            <div className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar">
              {renderDetailView()}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
