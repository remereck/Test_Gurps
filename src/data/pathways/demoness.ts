import { Pathway } from '../types';

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
          replaces: 'demoness_seq9_feather_fall',
          name: { en: 'Feather Fall+', es: 'Caída de Pluma+' },
          type: 'passive',
          description: {
            en: 'Feather Fall: Descend from any height safely and silently. Can glide 1m horizontal per 2m vertical. No perception roll detects landing through sound, Feather Fall+ Glide {{2m}} horizontal per 3m vertical and you can arrest fall instantly as a {{free action without SPI cost}}.',
            es: 'Caída de Pluma: Desciende de cualquier altura de forma segura y silenciosa. Puede planear 1m horizontal por cada 2m verticales. Ninguna tirada de Percepción detecta el aterrizaje por sonido, Caída de Pluma+ Planea {{2m}} horizontales por 3m verticales y frena la caída al instante como {{acción libre sin coste de SPI}}.'
          }
        },
        {
          id: 'demoness_seq8_shadow_conceal',
          replaces: 'demoness_seq9_shadow_conceal',
          name: { en: 'Shadow Concealment+', es: 'Ocultamiento en las Sombras+' },
          type: 'passive',
          description: {
            en: 'Shadow Concealment: Instinctively blend with shadows. In dim light/shadow, observers roll Perception at -3 if stationary, -1 if moving slowly. Bright daylight negates, Shadow Concealment+ Detection penalty increases to {{-5}} when stationary and {{-2}} when moving slowly in shadows.',
            es: 'Ocultamiento en las Sombras: Se funde instintivamente con las sombras. En luz tenue, observadores tiran Percepción con -3 si está quieto, -1 si se mueve lento. La luz diurna lo anula, Ocultamiento en las Sombras+ La penalidad de detección aumenta a {{-5}} quieto y {{-2}} moviéndose lentamente en las sombras.'
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
          id: 'demoness_seq7_witch_magic',
          name: { en: 'Witch\'s Dark Arts', es: 'Artes Oscuras de Bruja' },
          type: 'active',
          description: {
            en: 'A versatile arsenal of offensive black magic.\n\n{{Ice Projectiles}}: Project ice at target, 2d-2 damage.\n{{Black Flames}}: Flames burn spirituality. Cannot extinguish with water. Enchant weapon (2 SPI) or detonate for 2d6+1.\n{{Freeze}}: Target touch (2 SPI): HT-1 or 2d6-1 damage. Area 10m (3 SPI).\n{{Ice Wind & Seal}}: Wind (2 SPI): 10m radius obscurement. Seal (2 SPI): Cage of ice for 1d4 turns.\n{{Mirror Magic / Cursing}}: Hide in mirror 1d6s. Curse with blood or doll using Ritual Magic to deal 2d6 dmg.\n{{Substitution}}: Transfer next successful attack damage to mirror/staff (shatters).',
            es: 'Un arsenal versátil de magia negra ofensiva.\n\n{{Proyectiles de Hielo}}: Proyecta hielo al objetivo, 2d-2 de daño.\n{{Llamas Negras}}: Llamas que queman espiritualidad. Encanta arma (2 SPI) o detona por 2d6+1.\n{{Congelar}}: Toque (2 SPI): HT-1 o 2d6-1 daño. Área 10m (3 SPI).\n{{Viento Helado y Sello}}: Viento (2 SPI): 10m radio. Sello (2 SPI): Jaula de hielo 1d4 turnos.\n{{Magia de Espejos / Maldición}}: Ocultarse en espejo 1d6s. Maldice con sangre o muñeco para 2d6 daño.\n{{Sustitución}}: Transfiere el daño del próximo ataque a espejo/vara (se rompe).'
          },
          spiOptions: [
            { name: { en: 'Ice Projectiles', es: 'Proyectiles de Hielo' }, cost: 1 },
            { name: { en: 'Black Flames', es: 'Llamas Negras' }, cost: 2 },
            { name: { en: 'Freeze (Touch)', es: 'Congelar (Toque)' }, cost: 2 },
            { name: { en: 'Freeze (Area)', es: 'Congelar (Área)' }, cost: 3 },
            { name: { en: 'Ice Wind', es: 'Viento Helado' }, cost: 2 },
            { name: { en: 'Ice Seal', es: 'Sello Helado' }, cost: 2 },
            { name: { en: 'Mirror Magic / Curse', es: 'Magia de Espejos' }, cost: 1 },
            { name: { en: 'Substitution', es: 'Sustitución' }, cost: 3 }
          ]
        },
        {
          id: 'demoness_seq7_feather_fall',
          replaces: 'demoness_seq8_feather_fall',
          name: { en: 'Feather Fall++', es: 'Caída de Pluma++' },
          type: 'passive',
          description: {
            en: 'Feather Fall+: Fall without taking damage. Move lightly as a feather, Feather Fall++ Glide ratio {{3:1}}. Can slow fall of {{1 ally}} within 3m.',
            es: 'Caída de Pluma+: Cae sin daño. Se mueve ligero como una pluma, Caída de Pluma++ Planeo {{3:1}}. Puede ralentizar caída de {{1 aliado}} a 3m.'
          }
        },
        {
          id: 'demoness_seq7_shadow_conceal',
          replaces: 'demoness_seq8_shadow_conceal',
          name: { en: 'Shadow Concealment++', es: 'Ocultamiento en las Sombras++' },
          type: 'passive',
          description: {
            en: 'Shadow Concealment+: Effectively invisible while standing still in darkness. Move in shadows quietly, Shadow Concealment++ Stealth bonus {{-6}}. When still in total darkness, observers roll Per-4 to notice ({{invisible}} to mundane sight).',
            es: 'Ocultamiento en las Sombras+: Efectivamente invisible al estar quieto en oscuridad, Ocultamiento en las Sombras++ Bono sigilo {{-6}}. Quieto en total oscuridad, observadores tiran Per-4 ({{invisible}} a visión mundana).'
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
