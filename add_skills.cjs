const fs = require('fs');

let content = fs.readFileSync('src/data/skillsData.ts', 'utf8');

const newSkills = `  { id: 'broadsword', name: { en: "Broadsword", es: "Espada Ancha" }, attr: 'DX', difficulty: 'A', description: { en: "Skill with one-handed broadswords and similar weapons.", es: "Habilidad con espadas anchas de una mano y armas similares." } },
  { id: 'shield', name: { en: "Shield", es: "Escudo" }, attr: 'DX', difficulty: 'E', description: { en: "Skill in using shields to block attacks.", es: "Habilidad para usar escudos para bloquear ataques." } },
  { id: 'polearm', name: { en: "Polearm", es: "Arma de Asta" }, attr: 'DX', difficulty: 'A', description: { en: "Skill with pole-based melee weapons.", es: "Habilidad con armas de cuerpo a cuerpo basadas en astas." } },
  { id: 'armoury_any', name: { en: "Armoury (any)", es: "Armería (cualquiera)" }, attr: 'IQ', difficulty: 'A', description: { en: "Skill in making and repairing weapons and armor.", es: "Habilidad para fabricar y reparar armas y armaduras." } },
  { id: 'appraisal', name: { en: "Appraisal", es: "Tasación" }, attr: 'IQ', difficulty: 'A', description: { en: "Skill in estimating the value and properties of items.", es: "Habilidad para estimar el valor y las propiedades de los artículos." } },
  { id: 'engineering', name: { en: "Engineering", es: "Ingeniería" }, attr: 'IQ', difficulty: 'H', description: { en: "Skill in designing complex structures and machines.", es: "Habilidad en el diseño de estructuras y máquinas complejas." } },
  { id: 'mechanic', name: { en: "Mechanic", es: "Mecánica" }, attr: 'IQ', difficulty: 'A', description: { en: "Skill in repairing and maintaining machines.", es: "Habilidad para reparar y mantener máquinas." } },
  { id: 'chemistry', name: { en: "Chemistry", es: "Química" }, attr: 'IQ', difficulty: 'H', description: { en: "Knowledge of chemical properties and reactions.", es: "Conocimiento de propiedades químicas y reacciones." } },
  { id: 'inventor', name: { en: "Inventor!", es: "¡Inventor!" }, attr: 'IQ', difficulty: 'WC', description: { en: "Wildcard skill for inventing and prototyping new devices.", es: "Habilidad comodín para inventar y crear prototipos de nuevos dispositivos." } },
  { id: 'history', name: { en: "History", es: "Historia" }, attr: 'IQ', difficulty: 'H', description: { en: "Knowledge of past events, cultures, and civilizations.", es: "Conocimiento de eventos, culturas y civilizaciones pasadas." } },
  { id: 'survival_any', name: { en: "Survival (any)", es: "Supervivencia (cualquiera)" }, attr: 'Per', difficulty: 'A', description: { en: "Ability to survive in harsh natural environments.", es: "Capacidad para sobrevivir en entornos naturales hostiles." } },
  { id: 'poise', name: { en: "Poise", es: "Porte" }, attr: 'IQ', difficulty: 'A', description: { en: "Ability to maintain composure and authority.", es: "Capacidad de mantener la compostura y la autoridad." } },
  { id: 'intimidation', name: { en: "Intimidation", es: "Intimidación" }, attr: 'Will', difficulty: 'A', description: { en: "Skill in frightening or coercing others.", es: "Habilidad para asustar o coaccionar a otros." } },
  { id: 'interrogation', name: { en: "Interrogation", es: "Interrogatorio" }, attr: 'IQ', difficulty: 'A', description: { en: "Skill in extracting information from subjects.", es: "Habilidad para extraer información de los sujetos." } },
  { id: 'physician', name: { en: "Physician", es: "Médico" }, attr: 'IQ', difficulty: 'H', description: { en: "Medical knowledge to diagnose and treat injuries/diseases.", es: "Conocimiento médico para diagnosticar y tratar lesiones / enfermedades." } },
  { id: 'first_aid', name: { en: "First Aid", es: "Primeros Auxilios" }, attr: 'IQ', difficulty: 'E', description: { en: "Immediate care for injuries to prevent worsening.", es: "Atención inmediata de lesiones para evitar que empeoren." } },
  { id: 'animal_handling', name: { en: "Animal Handling", es: "Manejo de Animales" }, attr: 'IQ', difficulty: 'A', description: { en: "Skill in training and controlling animals.", es: "Habilidad en el entrenamiento y control de animales." } },
  { id: 'veterinary', name: { en: "Veterinary", es: "Veterinaria" }, attr: 'IQ', difficulty: 'H', description: { en: "Medical treatment of animals.", es: "Tratamiento médico de animales." } },
  { id: 'farming', name: { en: "Farming", es: "Agricultura" }, attr: 'IQ', difficulty: 'E', description: { en: "Knowledge of growing crops and managing agricultural land.", es: "Conocimiento del cultivo de plantas y gestión de tierras agrícolas." } },
  { id: 'naturalist', name: { en: "Naturalist", es: "Naturalista" }, attr: 'IQ', difficulty: 'H', description: { en: "Knowledge of natural world, flora, and fauna.", es: "Conocimiento del mundo natural, flora y fauna." } },
  { id: 'tracking', name: { en: "Tracking", es: "Rastreo" }, attr: 'Per', difficulty: 'A', description: { en: "Following trails and signs left by creatures or people.", es: "Seguimiento de rastros y señales dejadas por criaturas o personas." } },
  { id: 'traps', name: { en: "Traps", es: "Trampas" }, attr: 'IQ', difficulty: 'A', description: { en: "Skill in building, detecting, and disarming traps.", es: "Habilidad en la construcción, detección y desarme de trampas." } },
  { id: 'explosives', name: { en: "Explosives", es: "Explosivos" }, attr: 'IQ', difficulty: 'A', description: { en: "Handling and using explosive materials safely.", es: "Manipulación y uso seguro de materiales explosivos." } },
  { id: 'guns_any', name: { en: "Guns (any)", es: "Armas de Fuego (cualquiera)" }, attr: 'DX', difficulty: 'E', description: { en: "General skill for using firearms.", es: "Habilidad general para el uso de armas de fuego." } },
`;

// Insert right before the closing bracket of the array, or just find the end of the array.
content = content.replace('];', newSkills + '];');

fs.writeFileSync('src/data/skillsData.ts', content);
console.log("Added missing skills");
