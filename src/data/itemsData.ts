import { ItemDef } from '../types';

export const ITEMS: ItemDef[] = [
  // Weapons - Firearms
  { id: 'revolver', name: { en: 'Revolver (.38 cal)', es: 'Revólver (cal .38)' }, costInPence: 3 * 240, weightLbs: 2, description: { en: '2d pi, Acc 2, Range 150/1800', es: '2d pi, Acc 2, Alcance 150/1800' } },
  { id: 'revolver_heavy', name: { en: 'Heavy Revolver (.45 cal)', es: 'Revólver Pesado (cal .45)' }, costInPence: 5 * 240, weightLbs: 2.5, description: { en: '2d+1 pi+, Acc 2, Range 175/1900', es: '2d+1 pi+, Acc 2, Alcance 175/1900' } },
  { id: 'rifle', name: { en: 'Hunting Rifle', es: 'Rifle de Caza' }, costInPence: 8 * 240, weightLbs: 8, description: { en: '4d pi, Acc 3, Range 500/3500', es: '4d pi, Acc 3, Alcance 500/3500' } },
  { id: 'shotgun', name: { en: 'Pump Shotgun (12G)', es: 'Escopeta de Corredera (12G)' }, costInPence: 6 * 240, weightLbs: 7.5, description: { en: '1d+1 pi (x9), Acc 3, Range 50/125', es: '1d+1 pi (x9), Acc 3, Alcance 50/125' } },
  { id: 'derringer', name: { en: 'Derringer (.41)', es: 'Derringer (.41)' }, costInPence: 2 * 240, weightLbs: 0.5, description: { en: '1d+1 pi+, Acc 1, Range 80/900', es: '1d+1 pi+, Acc 1, Alcance 80/900' } },

  // Weapons - Melee
  { id: 'knife', name: { en: 'Combat Knife', es: 'Cuchillo de Combate' }, costInPence: 120, weightLbs: 1, description: { en: 'sw-1 cut / thr imp', es: 'sw-1 cut / thr imp' } },
  { id: 'broadsword', name: { en: 'Broadsword', es: 'Espada Ancha' }, costInPence: 3 * 240, weightLbs: 3, description: { en: 'sw+1 cut / thr+2 imp', es: 'sw+1 cut / thr+2 imp' } },
  { id: 'cane_sword', name: { en: 'Sword Cane', es: 'Bastón Espada' }, costInPence: 5 * 240, weightLbs: 2, description: { en: 'sw cut / thr+1 imp, concealable', es: 'sw cut / thr+1 imp, ocultable' } },
  { id: 'brass_knuckles', name: { en: 'Brass Knuckles', es: 'Puño Americano' }, costInPence: 60, weightLbs: 0.5, description: { en: '+1 to punching damage', es: '+1 al daño de puñetazo' } },
  { id: 'blackjack', name: { en: 'Blackjack', es: 'Cachiporra' }, costInPence: 48, weightLbs: 1, description: { en: 'sw cr, easy to conceal', es: 'sw cr, fácil de ocultar' } },

  // Armor & Clothing
  { id: 'heavy_coat', name: { en: 'Heavy Coat', es: 'Abrigo Pesado' }, costInPence: 2 * 240, weightLbs: 4, description: { en: 'DR 1 (torso, arms)', es: 'RD 1 (torso, brazos)' } },
  { id: 'leather_jacket', name: { en: 'Leather Jacket', es: 'Chaqueta de Cuero' }, costInPence: 3 * 240, weightLbs: 4, description: { en: 'DR 1 (torso, arms)', es: 'RD 1 (torso, brazos)' } },
  { id: 'fancy_clothes', name: { en: 'Fancy Suit/Dress', es: 'Traje/Vestido Elegante' }, costInPence: 10 * 240, weightLbs: 2, description: { en: '+1 to Reaction rolls in high society', es: '+1 a tiradas de Reacción en la alta sociedad' } },
  { id: 'work_clothes', name: { en: 'Work Clothes', es: 'Ropa de Trabajo' }, costInPence: 120, weightLbs: 2, description: { en: 'Sturdy, DR 0', es: 'Resistente, RD 0' } },

  // Gear & Tools
  { id: 'lantern', name: { en: 'Lantern (oil)', es: 'Linterna (aceite)' }, costInPence: 36, weightLbs: 2, description: { en: 'Illuminates 2m radius', es: 'Ilumina un radio de 2m' } },
  { id: 'flashlight', name: { en: 'Electric Flashlight', es: 'Linterna Eléctrica' }, costInPence: 2 * 240, weightLbs: 1.5, description: { en: 'Illuminates a narrow 10m beam', es: 'Ilumina un haz estrecho de 10m' } },
  { id: 'lockpicks', name: { en: 'Lock picks (set)', es: 'Ganzúas (set)' }, costInPence: 240, weightLbs: 0.5, description: { en: 'Required for Lockpicking skill', es: 'Requerido para la habilidad Ganzuar' } },
  { id: 'first_aid', name: { en: 'First Aid Kit', es: 'Botiquín de Primeros Auxilios' }, costInPence: 60, weightLbs: 2, description: { en: '+1 to First Aid', es: '+1 a Primeros Auxilios' } },
  { id: 'doctor_bag', name: { en: "Doctor's Bag", es: 'Maletín de Médico' }, costInPence: 5 * 240, weightLbs: 5, description: { en: '+2 to First Aid, required for Surgery', es: '+2 a Primeros Auxilios, requerido para Cirugía' } },
  { id: 'dynamite', name: { en: 'Dynamite (stick)', es: 'Dinamita (cartucho)' }, costInPence: 120, weightLbs: 0.5, description: { en: '6d cr ex', es: '6d cr ex' } },
  { id: 'matches', name: { en: 'Matches (box)', es: 'Fósforos (caja)' }, costInPence: 2, weightLbs: 0, description: { en: 'Used to light fires/lanterns', es: 'Usado para encender fuegos/linternas' } },
  { id: 'handcuffs', name: { en: 'Handcuffs', es: 'Esposas' }, costInPence: 240, weightLbs: 0.5, description: { en: 'Requires Escape roll to break free', es: 'Requiere tirada de Escapismo para liberarse' } },
  { id: 'magnifying_glass', name: { en: 'Magnifying Glass', es: 'Lupa' }, costInPence: 120, weightLbs: 0.5, description: { en: '+1 to Search/Forensics', es: '+1 a Búsqueda/Ciencia Forense' } },
  
  // Occult/Mystic items
  { id: 'silver_bullets', name: { en: 'Silver Bullets (x6)', es: 'Balas de Plata (x6)' }, costInPence: 3 * 240, weightLbs: 0.2, description: { en: 'Bypasses some supernatural DR', es: 'Ignora cierta RD sobrenatural' } },
  { id: 'holy_water', name: { en: 'Holy Water (vial)', es: 'Agua Bendita (frasco)' }, costInPence: 240, weightLbs: 0.5, description: { en: 'Damages certain spirits', es: 'Daña a ciertos espíritus' } },
  { id: 'chalk', name: { en: 'Ritual Chalk', es: 'Tiza Ritual' }, costInPence: 60, weightLbs: 0.1, description: { en: 'Required for drawing summoning circles', es: 'Requerida para dibujar círculos de invocación' } },
  { id: 'spirit_pendulum', name: { en: 'Spirit Pendulum', es: 'Péndulo Espiritual' }, costInPence: 4 * 240, weightLbs: 0.2, description: { en: '+1 to Divination', es: '+1 a Adivinación' } },
  
  // Ammunition
  { id: 'ammo_pistol', name: { en: 'Pistol Ammo (x50)', es: 'Munición de Pistola (x50)' }, costInPence: 120, weightLbs: 1.5, description: { en: 'For revolvers and handguns', es: 'Para revólveres y pistolas' } },
  { id: 'ammo_rifle', name: { en: 'Rifle Ammo (x20)', es: 'Munición de Rifle (x20)' }, costInPence: 240, weightLbs: 1, description: { en: 'For hunting rifles', es: 'Para rifles de caza' } },
  { id: 'ammo_shotgun', name: { en: 'Shotgun Shells (x25)', es: 'Cartuchos de Escopeta (x25)' }, costInPence: 180, weightLbs: 2, description: { en: 'For shotguns', es: 'Para escopetas' } },
];
