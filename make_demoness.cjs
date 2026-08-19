const fs = require('fs');

const tsCode = `import { Pathway } from '../types';

export const demonessPathway: Pathway = {
  id: 'demoness',
  name: { en: 'Demoness Pathway', es: 'Senda de la Demonio' },
  sequences: [
    {
      level: 9,
      name: { en: 'Assassin', es: 'Asesino' },
      statBonuses: [
        { stat: 'DX', bonus: 2 },
        { stat: 'ST', bonus: 1 },
        { stat: 'SPI', bonus: 1 }
      ],
      skillBonuses: [
        { skillId: 'acrobatics', bonus: 2 }
      ],
      abilities: [
        {
          id: 'demoness_seq9_speed',
          name: { en: 'Basic Speed +0.25', es: 'Velocidad Básica +0.25' },
          type: 'passive',
          description: {
            en: 'Reflexes sharpen for precise timing.',
            es: 'Los reflejos se agudizan para una sincronización precisa.'
          }
        },
        {
          id: 'demoness_seq9_night_vision',
          name: { en: 'Night Vision', es: 'Visión Nocturna' },
          type: 'passive',
          description: {
            en: 'See in total darkness without penalty.',
            es: 'Ve en oscuridad total sin penalización.'
          }
        },
        {
          id: 'demoness_seq9_acute_vision',
          name: { en: 'Acute Vision', es: 'Visión Aguda' },
          type: 'passive',
          description: {
            en: '+2 to vision-based Perception rolls.',
            es: '+2 a tiradas de Percepción basadas en la visión.'
          }
        },
        {
          id: 'demoness_seq9_acute_hearing',
          name: { en: 'Acute Hearing', es: 'Audición Aguda' },
          type: 'passive',
          description: {
            en: '+2 to hearing-based Perception rolls.',
            es: '+2 a tiradas de Percepción basadas en la audición.'
          }
        },
        {
          id: 'demoness_seq9_feather_fall',
          name: { en: 'Feather Fall', es: 'Caída de Pluma' },
          type: 'passive',
          description: {
            en: 'Descend from any height safely and silently. Can glide 1m horizontal per 2m vertical. No perception roll detects landing through sound.',
            es: 'Desciende de cualquier altura de forma segura y silenciosa. Puede planear 1m horizontal por cada 2m verticales. Ninguna tirada de Percepción detecta el aterrizaje por sonido.'
          }
        },
        {
          id: 'demoness_seq9_shadow_conceal',
          name: { en: 'Shadow Concealment', es: 'Ocultamiento en las Sombras' },
          type: 'passive',
          description: {
            en: 'Instinctively blend with shadows. In dim light/shadow, observers roll Perception at -3 if stationary, -1 if moving slowly. Bright daylight negates.',
            es: 'Se funde instintivamente con las sombras. En luz tenue, observadores tiran Percepción con -3 si está quieto, -1 si se mueve lento. La luz diurna lo anula.'
          }
        },
        {
          id: 'demoness_seq9_mighty_blow',
          name: { en: 'Mighty Blow', es: 'Golpe Poderoso' },
          type: 'active',
          spiCost: 3, // FP
          description: {
            en: 'Spend 3 FP. Gain +3 to hit on a melee attack. On hit, multiply raw damage dice by 3 (before DR). Cannot be modified by other maneuvers.',
            es: 'Gasta 3 FP. Gana +3 al ataque cuerpo a cuerpo. Al golpear, multiplica los dados de daño bruto por 3 (antes de RD). No se puede modificar por otras maniobras.'
          }
        }
      ]
    },
    {
      level: 8,
      name: { en: 'Instigator', es: 'Instigador' },
      statBonuses: [
        { stat: 'DX', bonus: 1 },
        { stat: 'Per', bonus: 1 },
        { stat: 'SPI', bonus: 1 }
      ],
      skillBonuses: [
        { skillId: 'fast_talk', bonus: 4 },
        { skillId: 'psychology', bonus: 4 },
        { skillId: 'acting', bonus: 3 }
      ],
      abilities: [
        {
          id: 'demoness_seq8_charisma',
          name: { en: 'Charisma +2', es: 'Carisma +2' },
          type: 'passive',
          description: {
            en: '+2 to Influence skills; NPCs predisposed to trust and listen to you.',
            es: '+2 a habilidades de Influencia; los PNJs están predispuestos a confiar en ti y escucharte.'
          }
        },
        {
          id: 'demoness_seq8_instigate_pass',
          name: { en: 'Instigation — Passive', es: 'Instigación — Pasiva' },
          type: 'passive',
          description: {
            en: 'Sense emotions/malice within 10m. Roll Per to reveal hidden intent/anger. Social situations read instinctively; success reveals weakest link in room.',
            es: 'Siente emociones/malicia en 10m. Tira Percepción para revelar intenciones/ira ocultas. Lee situaciones sociales instintivamente; el éxito revela el eslabón más débil.'
          }
        },
        {
          id: 'demoness_seq8_instigate_act',
          name: { en: 'Instigation — Active', es: 'Instigación — Activa' },
          type: 'active',
          spiCost: 1, // Vague cost, using 0/1 conceptually, say 1 
          description: {
            en: 'Speak/gesture to surface suppressed desires. Fast-Talk (-6 if gesture only) vs Will. On success, target acts on desire within 1d min, believing it\'s their own. Ignites crowd effect.',
            es: 'Habla/gesticula para aflorar deseos reprimidos. Charlatanería (-6 si solo gesto) vs Voluntad. En éxito, el objetivo actúa en 1d min creyendo que es su idea. Inicia efecto de multitud.'
          }
        },
        {
          id: 'demoness_seq8_feather_fall',
          name: { en: 'Feather Fall (Reinforced)', es: 'Caída de Pluma (Reforzada)' },
          type: 'passive',
          description: {
            en: 'Glide 2m horizontal per 3m vertical, arrest fall instantly as free action without SPI cost.',
            es: 'Planea 2m horizontales por 3m verticales, frena caída al instante como acción libre sin coste de SPI.'
          }
        },
        {
          id: 'demoness_seq8_shadow_conceal',
          name: { en: 'Shadow Concealment (Reinforced)', es: 'Ocultamiento en las Sombras (Reforzado)' },
          type: 'passive',
          description: {
            en: 'Detection penalty increases to -5 when stationary, -2 when moving slowly in shadows.',
            es: 'La penalidad de detección aumenta a -5 quieto, -2 moviéndose lentamente en las sombras.'
          }
        }
      ]
    },
    {
      level: 7,
      name: { en: 'Witch', es: 'Bruja' },
      statBonuses: [
        { stat: 'SPI', bonus: 7 }
      ],
      skillBonuses: [
        { skillId: 'ritualistic_magic', bonus: 4 }, // Mirror, Dowsing
        { skillId: 'divination_arts', bonus: 2 },
        { skillId: 'occultism', bonus: 2 }
      ],
      abilities: [
        {
          id: 'demoness_seq7_charm',
          name: { en: 'Charisma +1 / Beauty', es: 'Carisma +1 / Belleza' },
          type: 'passive',
          description: {
            en: '+1 Influence skills. Potion perfects features to female (Appearance Beautiful). React favourably. Gain +2 total to targets attracted to gender.',
            es: '+1 a Influencia. La poción perfecciona las facciones hacia mujer (Apariencia Hermosa). Gana +2 total a objetivos atraídos al género.'
          }
        },
        {
          id: 'demoness_seq7_gender',
          name: { en: 'Permanent Changes', es: 'Cambios Permanentes' },
          type: 'passive',
          description: {
            en: 'Gender changes to female. Height +5cm. Body proportions approach perfection.',
            es: 'El género cambia a femenino. Altura +5cm. Proporciones se acercan a la perfección.'
          }
        },
        {
          id: 'demoness_seq7_invisibility',
          name: { en: 'Invisibility', es: 'Invisibilidad' },
          type: 'active',
          spiCost: 1, // X SPI
          description: {
            en: '1 SPI per 10 mins (up to 1h). Invisible to naked eye via shimmering powder and incantation. Ends on physical contact.',
            es: '1 SPI por 10 min (hasta 1h). Invisible a simple vista mediante polvo brillante. Termina con contacto físico.'
          }
        },
        {
          id: 'demoness_seq7_ice_proj',
          name: { en: 'Ice Projectiles', es: 'Proyectiles de Hielo' },
          type: 'active',
          spiCost: 1,
          description: {
            en: 'Project ice at target, 2d-2 damage.',
            es: 'Proyecta hielo al objetivo, 2d-2 de daño.'
          }
        },
        {
          id: 'demoness_seq7_mirror_sub',
          name: { en: 'Mirror/Staff Substitution', es: 'Sustitución con Espejo/Vara' },
          type: 'active',
          spiCost: 3,
          description: {
            en: 'Transfer next successful attack damage to mirror/staff (shatters). Can be used on ally within 30m if medium is provided.',
            es: 'Transfiere el daño del próximo ataque a espejo/vara (se rompe). Puede usarse en aliado a 30m con medio.'
          }
        },
        {
          id: 'demoness_seq7_black_flames',
          name: { en: 'Black Flames & Enchantment', es: 'Llamas Negras y Encantamiento' },
          type: 'active',
          spiCost: 2,
          description: {
            en: 'Flames burn spirituality. Cannot extinguish with water. Enchant weapon (2 SPI + 1/turn); on hit detonate flames in veins for 2d6+1 (cost 2 SPI). Compression (2 SPI) cannonball 2d6 + 1d3/turn burn.',
            es: 'Llamas queman espiritualidad. No se apagan con agua. Encanta arma (2 SPI + 1/turno); al impactar detona venas por 2d6+1 (2 SPI). Compresión (2 SPI) bola 2d6 + 1d3/turno quemadura.'
          }
        },
        {
          id: 'demoness_seq7_freeze',
          name: { en: 'Freeze', es: 'Congelar' },
          type: 'active',
          spiCost: 2, // 2-3
          description: {
            en: 'Target touch (2 SPI): HT-1 or 2d6-1 damage. Area 10m (3 SPI): All roll HT-1 or 2d6-1 damage.',
            es: 'Toque (2 SPI): HT-1 o 2d6-1 daño. Área 10m (3 SPI): Todos tiran HT-1 o 2d6-1 daño.'
          }
        },
        {
          id: 'demoness_seq7_ice_wind',
          name: { en: 'Ice Wind & Seal', es: 'Viento Helado y Sello' },
          type: 'active',
          spiCost: 2,
          description: {
            en: 'Wind (2 SPI +1/turn): 10m radius, -3 to sight/smell rolls. Seal (2 SPI): Cage of ice for 1d4 turns, break with ST-1.',
            es: 'Viento (2 SPI +1/turno): 10m, -3 a tiradas de vista/olfato. Sello (2 SPI): Jaula 1d4 turnos, rompe con ST-1.'
          }
        },
        {
          id: 'demoness_seq7_mirror_magic',
          name: { en: 'Mirror Magic / Cursing', es: 'Magia de Espejos / Maldición' },
          type: 'active',
          spiCost: 1,
          description: {
            en: 'Sense mirrors 25m. Hide in mirror 1d6s (2d6 dmg if destroyed). Curse with blood (+2) or flesh/hair doll (+4) using Ritual Magic to deal 2d6 dmg or use as ritual base.',
            es: 'Siente espejos 25m. Ocultarse en espejo 1d6s (2d6 daño si rompe). Maldice con sangre (+2) o muñeco (+4) para infligir 2d6 daño.'
          }
        },
        {
          id: 'demoness_seq7_feather_fall',
          name: { en: 'Feather Fall (Mastered)', es: 'Caída de Pluma (Maestría)' },
          type: 'passive',
          description: {
            en: 'Glide ratio 3:1. Can slow fall of 1 ally within 3m.',
            es: 'Planeo 3:1. Puede ralentizar caída de 1 aliado a 3m.'
          }
        },
        {
          id: 'demoness_seq7_shadow_conceal',
          name: { en: 'Shadow Concealment (Mastered)', es: 'Ocultamiento en las Sombras (Maestría)' },
          type: 'passive',
          description: {
            en: 'Stealth bonus -6. When still in total darkness, observers roll Per-4 to notice (invisible to mundane sight).',
            es: 'Bono sigilo -6. Quieto en total oscuridad, observadores tiran Per-4 (invisible a visión mundana).'
          }
        }
      ]
    },
    {
      level: 6,
      name: { en: 'Demoness of Pleasure', es: 'Demonio del Placer' },
      statBonuses: [
        { stat: 'SPI', bonus: 3 },
        { stat: 'ST', bonus: 1 },
        { stat: 'HT', bonus: 1 }
      ],
      skillBonuses: [],
      abilities: [
        {
          id: 'demoness_seq6_main',
          name: { en: 'Demoness of Pleasure', es: 'Demonio del Placer' },
          type: 'active',
          spiCost: 2,
          description: {
            en: 'Uses pleasure and threads to control.',
            es: 'Usa el placer y los hilos para controlar.'
          }
        }
      ]
    }
  ]
};
`;

fs.writeFileSync('src/data/pathways/demoness.ts', tsCode);
console.log("Demoness Pathway created");
