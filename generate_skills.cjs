const fs = require('fs');

const skills = [
  { id: "ritualistic_magic", name: { en: "Ritualistic Magic", es: "Magia Ritualística" }, attr: "IQ", difficulty: "VH", desc: { en: "The ability to perform magical rituals and ceremonies.", es: "La habilidad de realizar ceremonias y rituales mágicos." } },
  { id: "divination_arts", name: { en: "Divination Arts", es: "Artes de Adivinación" }, attr: "IQ", difficulty: "H", desc: { en: "The skill of foreseeing the future or discovering hidden knowledge.", es: "La habilidad de prever el futuro o descubrir conocimientos ocultos." } },
  { id: "spiritual_intuition", name: { en: "Spiritual Intuition", es: "Intuición Espiritual" }, attr: "SPI", difficulty: "H", desc: { en: "An innate sense of spiritual presence and supernatural dangers.", es: "Un sentido innato de presencia espiritual y peligros sobrenaturales." } },
  { id: "spiritual_perception", name: { en: "Spiritual Perception", es: "Percepción Espiritual" }, attr: "SPI", difficulty: "A", desc: { en: "The ability to actively perceive spiritual entities and auras.", es: "La capacidad de percibir activamente entidades espirituales y auras." } },
  { id: "occultism", name: { en: "Occultism", es: "Ocultismo" }, attr: "IQ", difficulty: "A", desc: { en: "Knowledge of hidden lore, mysticism, and the supernatural.", es: "Conocimiento de tradiciones ocultas, misticismo y lo sobrenatural." } },
  { id: "knife", name: { en: "Knife", es: "Cuchillo" }, attr: "DX", difficulty: "E", desc: { en: "Skill in using small blades in combat.", es: "Habilidad para usar cuchillas pequeñas en combate." } },
  { id: "shortsword", name: { en: "Shortsword", es: "Espada Corta" }, attr: "DX", difficulty: "A", desc: { en: "Skill in using short swords and similar one-handed blades.", es: "Habilidad para usar espadas cortas y armas de filo similares." } },
  { id: "sleight_of_hand", name: { en: "Sleight of Hand", es: "Juego de Manos" }, attr: "DX", difficulty: "H", desc: { en: "The ability to manipulate objects secretly and perform magic tricks.", es: "La capacidad de manipular objetos en secreto y realizar trucos de magia." } },
  { id: "pickpocket", name: { en: "Pickpocket", es: "Carterista" }, attr: "DX", difficulty: "H", desc: { en: "The skill of stealing items from people without being noticed.", es: "La habilidad de robar objetos de personas sin ser notado." } },
  { id: "observation", name: { en: "Observation", es: "Observación" }, attr: "Per", difficulty: "A", desc: { en: "The ability to notice details and spot hidden things.", es: "La capacidad de notar detalles y detectar cosas ocultas." } },
  { id: "running", name: { en: "Running", es: "Correr" }, attr: "HT", difficulty: "A", desc: { en: "Training in sprinting and long-distance running.", es: "Entrenamiento en carreras de velocidad y larga distancia." } },
  { id: "lockpicking", name: { en: "Lockpicking", es: "Ganzuar" }, attr: "IQ", difficulty: "A", desc: { en: "The skill of opening mechanical locks without the key.", es: "La habilidad de abrir cerraduras mecánicas sin la llave." } },
  { id: "climbing", name: { en: "Climbing", es: "Escalar" }, attr: "DX", difficulty: "A", desc: { en: "The ability to scale walls, trees, and steep surfaces.", es: "La capacidad de escalar paredes, árboles y superficies empinadas." } },
  { id: "psychology", name: { en: "Psychology", es: "Psicología" }, attr: "IQ", difficulty: "H", desc: { en: "Understanding human behavior, motives, and mental states.", es: "Comprensión del comportamiento humano, motivos y estados mentales." } },
  { id: "body_language", name: { en: "Body Language", es: "Lenguaje Corporal" }, attr: "Per", difficulty: "A", desc: { en: "The ability to read physical cues to understand emotions.", es: "La capacidad de leer señales físicas para comprender las emociones." } },
  { id: "detect_lies", name: { en: "Detect Lies", es: "Detectar Mentiras" }, attr: "Per", difficulty: "H", desc: { en: "The skill of determining if someone is telling the truth.", es: "La habilidad de determinar si alguien dice la verdad." } },
  { id: "singing", name: { en: "Singing", es: "Canto" }, attr: "HT", difficulty: "E", desc: { en: "The ability to sing well and perform vocal music.", es: "La capacidad de cantar bien y interpretar música vocal." } },
  { id: "seamanship", name: { en: "Seamanship", es: "Navegación" }, attr: "IQ", difficulty: "E", desc: { en: "Basic skills required to work as part of a ship's crew.", es: "Habilidades básicas requeridas para trabajar como tripulante de un barco." } },
  { id: "swimming", name: { en: "Swimming", es: "Nadar" }, attr: "HT", difficulty: "E", desc: { en: "The ability to move through water and survive aquatic environments.", es: "La capacidad de moverse en el agua y sobrevivir en entornos acuáticos." } },
  { id: "navigation_sea", name: { en: "Navigation (Sea)", es: "Navegación (Mar)" }, attr: "IQ", difficulty: "A", desc: { en: "The skill of charting courses and navigating across the ocean.", es: "La habilidad de trazar rutas y navegar a través del océano." } },
  { id: "weather_sense", name: { en: "Weather Sense", es: "Sentido del Clima" }, attr: "IQ", difficulty: "A", desc: { en: "The ability to predict weather changes and natural phenomena.", es: "La capacidad de predecir cambios climáticos y fenómenos naturales." } },
  { id: "research", name: { en: "Research", es: "Investigación" }, attr: "IQ", difficulty: "A", desc: { en: "The skill of finding information in libraries and archives.", es: "La habilidad de encontrar información en bibliotecas y archivos." } },
  { id: "speed_reading", name: { en: "Speed-Reading", es: "Lectura Rápida" }, attr: "IQ", difficulty: "A", desc: { en: "The ability to read texts much faster than a normal person.", es: "La capacidad de leer textos mucho más rápido que una persona normal." } },
  { id: "brawling", name: { en: "Brawling", es: "Pelea Callejera" }, attr: "DX", difficulty: "E", desc: { en: "Unarmed combat skill focusing on practical, rough fighting.", es: "Habilidad de combate desarmado enfocada en peleas prácticas y rudas." } },
  { id: "guns_revolver", name: { en: "Guns (Revolver)", es: "Armas (Revólver)" }, attr: "DX", difficulty: "E", desc: { en: "Skill in firing and maintaining revolvers and handguns.", es: "Habilidad en disparar y mantener revólveres y pistolas." } },
  { id: "stealth", name: { en: "Stealth", es: "Sigilo" }, attr: "DX", difficulty: "A", desc: { en: "The ability to hide and move silently without being noticed.", es: "La capacidad de esconderse y moverse en silencio sin ser notado." } },
  { id: "acting", name: { en: "Acting", es: "Actuación" }, attr: "IQ", difficulty: "A", desc: { en: "The skill of pretending to be someone else and faking emotions.", es: "La habilidad de fingir ser otra persona y falsificar emociones." } },
  { id: "acrobatics", name: { en: "Acrobatics", es: "Acrobacias" }, attr: "DX", difficulty: "H", desc: { en: "The ability to perform gymnastic feats and complex movements.", es: "La capacidad de realizar proezas gimnásticas y movimientos complejos." } },
  { id: "throwing", name: { en: "Throwing", es: "Lanzar" }, attr: "DX", difficulty: "A", desc: { en: "Skill in throwing objects accurately and forcefully.", es: "Habilidad en lanzar objetos con precisión y fuerza." } },
  { id: "guns_pistol", name: { en: "Guns (Pistol)", es: "Armas (Pistola)" }, attr: "DX", difficulty: "E", desc: { en: "Skill in firing and maintaining semi-automatic pistols.", es: "Habilidad en disparar y mantener pistolas semiautomáticas." } },
  { id: "theology", name: { en: "Theology", es: "Teología" }, attr: "IQ", difficulty: "H", desc: { en: "The academic study of religion, deities, and divine matters.", es: "El estudio académico de la religión, las deidades y los asuntos divinos." } },
  { id: "religious_ritual", name: { en: "Religious Ritual", es: "Ritual Religioso" }, attr: "IQ", difficulty: "H", desc: { en: "Knowledge of formal religious ceremonies and practices.", es: "Conocimiento de ceremonias y prácticas religiosas formales." } },
  { id: "criminology", name: { en: "Criminology", es: "Criminología" }, attr: 'IQ', difficulty: 'A', desc: { en: "The study of crime, criminals, and criminal behavior.", es: "El estudio del crimen, los delincuentes y el comportamiento criminal." } },
  { id: "forensics", name: { en: "Forensics", es: "Ciencia Forense" }, attr: 'IQ', difficulty: 'H', desc: { en: "The application of science to investigate crimes and evidence.", es: "La aplicación de la ciencia para investigar crímenes y pruebas." } },
  { id: "intelligence_analysis", name: { en: "Intelligence Analysis", es: "Análisis de Inteligencia" }, attr: 'IQ', difficulty: 'H', desc: { en: "The skill of evaluating information to produce actionable insights.", es: "La habilidad de evaluar información para producir conocimientos útiles." } },
  { id: "mathematics", name: { en: "Mathematics (Applied)", es: "Matemáticas (Aplicada)" }, attr: 'IQ', difficulty: 'H', desc: { en: "The study of numbers, quantities, shapes, and patterns.", es: "El estudio de números, cantidades, formas y patrones." } }
];

let output = `import { SkillDef } from '../types';\n\nexport const SKILLS: SkillDef[] = [\n`;
skills.forEach(s => {
  output += `  { id: '${s.id}', name: { en: "${s.name.en}", es: "${s.name.es}" }, attr: '${s.attr}', difficulty: '${s.difficulty}', description: { en: "${s.desc.en}", es: "${s.desc.es}" } },\n`;
});
output += `];\n`;

fs.writeFileSync('src/data/skillsData.ts', output);
console.log("Updated skillsData.ts");
