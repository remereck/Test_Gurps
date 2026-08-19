import React from 'react';

export function EmptyStateView({ activeTab, lang }: { activeTab: string, lang: 'en' | 'es' }) {
  const getEmptyState = () => {
    switch (activeTab) {
      case 'churches':
        return {
          icon: '🏛️',
          title: lang === 'es' ? 'Iglesias Ortodoxas' : 'Orthodox Churches',
          desc: lang === 'es' ? 'Explora los dogmas, territorios y fuerzas de las deidades establecidas en la Quinta Época.' : 'Explore the dogmas, territories, and forces of the deities established in the Fifth Epoch.'
        };
      case 'organizations':
        return {
          icon: '👁️',
          title: lang === 'es' ? 'Organizaciones Secretas' : 'Secret Organizations',
          desc: lang === 'es' ? 'Descubre los misterios, cultos y facciones ocultas que operan desde las sombras.' : 'Discover the mysteries, cults, and hidden factions operating from the shadows.'
        };
      case 'nations':
        return {
          icon: '🗺️',
          title: lang === 'es' ? 'Naciones del Mundo' : 'Nations of the World',
          desc: lang === 'es' ? 'Conoce la geopolítica, regiones y características de las grandes potencias.' : 'Learn the geopolitics, regions, and characteristics of the great powers.'
        };
      case 'glossary':
        return {
          icon: '📖',
          title: lang === 'es' ? 'Glosario de Términos' : 'Glossary of Terms',
          desc: lang === 'es' ? 'Conceptos mecánicos y de Lore fundamentales para tu supervivencia como Beyonder.' : 'Mechanical and Lore concepts fundamental to your survival as a Beyonder.'
        };
      case 'equipment':
        return {
          icon: '⚔️',
          title: lang === 'es' ? 'Catálogo de Equipo' : 'Equipment Catalog',
          desc: lang === 'es' ? 'Revisa armas, armaduras y artefactos mundanos para equipar a tu personaje.' : 'Review weapons, armor, and mundane artifacts to equip your character.'
        };
      case 'skills':
        return {
          icon: '🎯',
          title: lang === 'es' ? 'Habilidades' : 'Skills',
          desc: lang === 'es' ? 'Habilidades y aptitudes en las que puede entrenar un personaje.' : 'Skills and aptitudes in which a character can train.'
        };
      case 'traits':
        return {
          icon: '🧬',
          title: lang === 'es' ? 'Ventajas y Desventajas' : 'Advantages & Disadvantages',
          desc: lang === 'es' ? 'Rasgos innatos, peculiaridades, defectos y aptitudes especiales.' : 'Innate traits, quirks, flaws, and special aptitudes.'
        };
      default:
        return { icon: '📚', title: '', desc: '' };
    }
  };

  const emptyState = getEmptyState();

  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-6 opacity-40 select-none">
      <div className="text-6xl mb-6 drop-shadow-xl filter grayscale contrast-125">{emptyState.icon}</div>
      <h2 className="text-2xl font-bold text-yellow-600 mb-2 tracking-widest uppercase">{emptyState.title}</h2>
      <div className="w-16 h-0.5 bg-yellow-700/50 mb-4 mx-auto"></div>
      <p className="text-sm text-[#888] max-w-sm italic">
        {emptyState.desc}
      </p>
      <p className="mt-8 text-xs text-[#555] font-mono bg-[#111] px-3 py-1.5 rounded border border-[#222]">
        {lang === 'es' ? '← Selecciona una entrada de la lista' : '← Select an entry from the list'}
      </p>
    </div>
  );
}
