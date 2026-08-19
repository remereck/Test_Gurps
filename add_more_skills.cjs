const fs = require('fs');

let content = fs.readFileSync('src/data/skillsData.ts', 'utf8');

const newSkills = `  { id: 'fast_draw_revolver', name: { en: "Fast-Draw (Revolver)", es: "Desenfunde Rápido (Revólver)" }, attr: 'DX', difficulty: 'E', description: { en: "Draw a revolver instantly.", es: "Desenfunda un revólver al instante." } },
  { id: 'wrestling', name: { en: "Wrestling", es: "Lucha Libre" }, attr: 'DX', difficulty: 'A', description: { en: "Grappling and pinning in combat.", es: "Agarres e inmovilizaciones en combate." } },
  { id: 'boxing', name: { en: "Boxing", es: "Boxeo" }, attr: 'DX', difficulty: 'A', description: { en: "Unarmed striking with fists.", es: "Golpes desarmados con los puños." } },
  { id: 'streetwise', name: { en: "Streetwise", es: "Astucia Callejera" }, attr: 'IQ', difficulty: 'A', description: { en: "Navigating the criminal underworld and streets.", es: "Navegar por el inframundo criminal y las calles." } },
  { id: 'law', name: { en: "Law", es: "Leyes" }, attr: 'IQ', difficulty: 'H', description: { en: "Knowledge of legal codes and courts.", es: "Conocimiento de códigos legales y tribunales." } },
  { id: 'fast_talk', name: { en: "Fast-Talk", es: "Labia" }, attr: 'IQ', difficulty: 'A', description: { en: "Convincing people quickly with lies or half-truths.", es: "Convencer a la gente rápidamente con mentiras o medias verdades." } },
  { id: 'fast-talk', name: { en: "Fast-Talk", es: "Labia" }, attr: 'IQ', difficulty: 'A', description: { en: "Convincing people quickly with lies or half-truths.", es: "Convencer a la gente rápidamente con mentiras o medias verdades." } },
  { id: 'diplomacy', name: { en: "Diplomacy", es: "Diplomacia" }, attr: 'IQ', difficulty: 'H', description: { en: "Negotiating and resolving conflicts peacefully.", es: "Negociar y resolver conflictos pacíficamente." } },
  { id: 'holdout', name: { en: "Holdout", es: "Ocultar Objetos" }, attr: 'IQ', difficulty: 'A', description: { en: "Hiding items on your person.", es: "Esconder artículos en tu persona." } },
  { id: 'escape', name: { en: "Escape", es: "Escapismo" }, attr: 'DX', difficulty: 'H', description: { en: "Escaping restraints like ropes or handcuffs.", es: "Escapar de ataduras como cuerdas o esposas." } },
  { id: 'explosives_demolition', name: { en: "Explosives (Demolition)", es: "Explosivos (Demolición)" }, attr: 'IQ', difficulty: 'A', description: { en: "Using explosives to destroy structures.", es: "Uso de explosivos para destruir estructuras." } },
  { id: 'surgery', name: { en: "Surgery", es: "Cirugía" }, attr: 'IQ', difficulty: 'VH', description: { en: "Operating on patients to cure injuries/disease.", es: "Operar a pacientes para curar lesiones/enfermedades." } },
  { id: 'hidden_lore_spirits', name: { en: "Hidden Lore (Spirits)", es: "Conocimiento Oculto (Espíritus)" }, attr: 'IQ', difficulty: 'A', description: { en: "Knowledge about spirits and the Spirit World.", es: "Conocimiento sobre los espíritus y el Mundo Espiritual." } },
  { id: 'astrology', name: { en: "Astrology", es: "Astrología" }, attr: 'IQ', difficulty: 'H', description: { en: "Reading fates from the stars.", es: "Leer los destinos a través de las estrellas." } },
  { id: 'thaumatology', name: { en: "Thaumatology", es: "Taumaturgia" }, attr: 'IQ', difficulty: 'VH', description: { en: "The academic study of magical theory.", es: "El estudio académico de la teoría mágica." } },
  { id: 'hidden_lore_any', name: { en: "Hidden Lore (any)", es: "Conocimiento Oculto (cualquiera)" }, attr: 'IQ', difficulty: 'A', description: { en: "Secret knowledge of specific supernatural topics.", es: "Conocimiento secreto de temas sobrenaturales específicos." } },
  { id: 'hidden_lore_mysticism', name: { en: "Hidden Lore (Mysticism)", es: "Conocimiento Oculto (Misticismo)" }, attr: 'IQ', difficulty: 'A', description: { en: "Knowledge of mysticism and mystical artifacts.", es: "Conocimiento de misticismo y artefactos místicos." } },
  { id: 'alchemy', name: { en: "Alchemy", es: "Alquimia" }, attr: 'IQ', difficulty: 'VH', description: { en: "Creating magical potions and elixirs.", es: "Creación de pociones y elixires mágicos." } },
  { id: 'pharmacy', name: { en: "Pharmacy", es: "Farmacia" }, attr: 'IQ', difficulty: 'H', description: { en: "Creating medicinal drugs and remedies.", es: "Creación de medicamentos y remedios." } },
  { id: 'poisons', name: { en: "Poisons", es: "Venenos" }, attr: 'IQ', difficulty: 'H', description: { en: "Creating and using toxic substances.", es: "Creación y uso de sustancias tóxicas." } },
  { id: 'gardening', name: { en: "Gardening", es: "Jardinería" }, attr: 'IQ', difficulty: 'E', description: { en: "Growing plants in a garden setting.", es: "Cultivar plantas en un entorno de jardín." } },
  { id: 'herb_lore', name: { en: "Herb Lore", es: "Conocimiento de Hierbas" }, attr: 'IQ', difficulty: 'VH', description: { en: "Magical uses of herbs and plants.", es: "Usos mágicos de hierbas y plantas." } },
  { id: 'animal_handling_any', name: { en: "Animal Handling (any)", es: "Manejo de Animales (cualquiera)" }, attr: 'IQ', difficulty: 'A', description: { en: "Training and handling of specific animals.", es: "Entrenamiento y manejo de animales específicos." } },
  { id: 'herbal_medicine', name: { en: "Herbal Medicine", es: "Medicina Herbal" }, attr: 'IQ', difficulty: 'A', description: { en: "Healing using natural herbs and plants.", es: "Curación con hierbas y plantas naturales." } },
  { id: 'diagnosis', name: { en: "Diagnosis", es: "Diagnóstico" }, attr: 'IQ', difficulty: 'H', description: { en: "Identifying medical conditions and diseases.", es: "Identificación de condiciones médicas y enfermedades." } },
  { id: 'hypnotism', name: { en: "Hypnotism", es: "Hipnotismo" }, attr: 'IQ', difficulty: 'H', description: { en: "Putting subjects into a trance state.", es: "Poner a los sujetos en un estado de trance." } },
`;

content = content.replace('];', newSkills + '];');

fs.writeFileSync('src/data/skillsData.ts', content);
console.log("Added more missing skills");
