import { Pathway } from '../types';

export const redPriestPathway: Pathway = {
  id: 'red_priest',
  name: { en: 'Red Priest Pathway', es: 'Senda de Red Priest' },
  sequences: [
    {
      level: 9,
      statBonuses: [
        { stat: 'ST', bonus: 2 },
        { stat: 'DX', bonus: 2 },
        { stat: 'Per', bonus: 1 },
        { stat: 'SPI', bonus: 1 }
      ],
      skillBonuses: [
        { skillId: 'tracking', bonus: 4 },
        { skillId: 'traps', bonus: 4 },
        { skillId: 'explosives_demolition', bonus: 4 },
        { skillId: 'survival', bonus: 2 }
      ],
      abilities: [
        {
          id: 'red_priest_seq9_env_memory',
          name: { en: 'Environment Memory', es: 'Memoria del Entorno' },
          type: 'passive',
          description: {
            en: 'Unwavering memory for surroundings and alterations; detect natural traps instinctively.',
            es: 'Memoria inquebrantable de los alrededores y alteraciones; detecta trampas naturales instintivamente.'
          }
        },
        {
          id: 'red_priest_seq9_survival',
          name: { en: 'Survival Knowledge', es: 'Conocimiento de Supervivencia' },
          type: 'passive',
          description: {
            en: 'Innate knowledge of wild plants and animal organs; can prepare hemostatic poultices (1 min, restore 1d HP to bleeding wound or 2 HP if not bleeding).',
            es: 'Conocimiento innato de plantas silvestres y órganos animales; puede preparar cataplasmas hemostáticas (1 min, restaura 1d de HP a una herida sangrante o 2 HP si no sangra).'
          }
        }
      ]
    },
    {
      level: 8,
      statBonuses: [
        { stat: 'ST', bonus: 1 },
        { stat: 'HT', bonus: 1 },
        { stat: 'SPI', bonus: 3 }
      ],
      skillBonuses: [
        { skillId: 'intimidation', bonus: 3 },
        { skillId: 'fast_talk', bonus: 2 },
        { skillId: 'psychology', bonus: 2 }
      ],
      abilities: [
        {
          id: 'red_priest_seq8_spirit_vision',
          name: { en: 'Spirit Vision', es: 'Visión Espiritual' },
          type: 'active',
          spiCost: 1,
          description: {
            en: 'The Provoker activates Spirit Vision with a simple gesture — quickly and discreetly. No concentration or obvious ritual required. Costs 1 SPI per minute.',
            es: 'El Provoker activa la Visión Espiritual con un simple gesto, de manera rápida y discreta. No requiere concentración ni ritual obvio. Cuesta 1 SPI por minuto.'
          }
        },
        {
          id: 'red_priest_seq8_vague_insult',
          name: { en: 'Provocation: Vague Insult', es: 'Provocación: Insulto Vago' },
          type: 'active',
          spiCost: 0,
          description: {
            en: 'These insults can target an individual or multiple people and are made up from general terms and insulting words. Target must succeed at a Will roll (-2) to resist being provoked. Failing will cause the target to only target the Provoker for 1 turn.',
            es: 'Estos insultos pueden dirigirse a un individuo o a varias personas y están formados por términos generales y palabras insultantes. El objetivo debe superar una tirada de Voluntad (-2) para no ser provocado. Si falla, el objetivo solo atacará al Provoker durante 1 turno.'
          }
        },
        {
          id: 'red_priest_seq8_detailed_insult',
          name: { en: 'Provocation: Detailed Insult', es: 'Provocación: Insulto Detallado' },
          type: 'active',
          spiCost: 0,
          description: {
            en: 'The Provoker uses a specific observation as a base for constructing an insult. Target must succeed at a Will roll (-4) to resist. Failing causes the target to only target the Provoker for 2 turns. Can target up to 2 subjects if correlated.',
            es: 'El Provoker usa una observación específica para construir un insulto. El objetivo debe superar Voluntad (-4) para resistir. Si falla, solo atacará al Provoker durante 2 turnos. Puede afectar hasta a 2 sujetos si hay correlación.'
          }
        },
        {
          id: 'red_priest_seq8_unique_insult',
          name: { en: 'Provocation: Unique Insult', es: 'Provocación: Insulto Único' },
          type: 'active',
          spiCost: 0,
          description: {
            en: 'Based on something that is a part of the target and they know it, hurting their ego. Target must succeed at a Will roll (-6) to resist. Failing causes the target to only target the Provoker for 3 turns.',
            es: 'Basado en una inseguridad conocida por el objetivo, hiriendo su ego. El objetivo debe superar Voluntad (-6) para resistir. Si falla, solo atacará al Provoker durante 3 turnos.'
          }
        },
        {
          id: 'red_priest_seq8_env_memory',
          name: { en: 'Reinforced Environment Memory', es: 'Memoria del Entorno Reforzada' },
          type: 'passive',
          description: {
            en: 'Can now sense alterations within 20 m (double original range). Natural traps are detected automatically at 5 m without any roll.',
            es: 'Ahora puede sentir alteraciones a 20 m (el doble del rango). Las trampas naturales se detectan automáticamente a 5 m sin tirar.'
          }
        },
        {
          id: 'red_priest_seq8_survival',
          name: { en: 'Reinforced Survival Knowledge', es: 'Conocimiento de Supervivencia Reforzado' },
          type: 'passive',
          description: {
            en: 'Hemostatic poultices now restore 1d+1 HP to a bleeding wound (or 3 HP if not bleeding). Can identify poisonous plants and animal organs instinctively regardless of terrain type.',
            es: 'Las cataplasmas hemostáticas ahora restauran 1d+1 de HP a una herida sangrante (o 3 HP si no sangra). Puede identificar plantas y órganos venenosos instintivamente sin importar el terreno.'
          }
        }
      ]
    },
    {
      level: 7,
      statBonuses: [
        { stat: 'ST', bonus: 1 },
        { stat: 'HT', bonus: 1 },
        { stat: 'SPI', bonus: 7 }
      ],
      skillBonuses: [
        { skillId: 'brawling', bonus: 2 },
        { skillId: 'throwing', bonus: 2 }
      ],
      abilities: [
        {
          id: 'red_priest_seq7_spirit_vision',
          name: { en: 'Spirit Vision Enhancement', es: 'Mejora de Visión Espiritual' },
          type: 'passive',
          description: {
            en: 'The Pyromaniac\'s spirit vision is easier to activate and can now perceive the Ether Body of spirits and Beyonders.',
            es: 'La visión espiritual del Pyromaniac es más fácil de activar y ahora puede percibir el Cuerpo Etéreo de espíritus y Beyonders.'
          }
        },
        {
          id: 'red_priest_seq7_danger_intuition',
          name: { en: 'Danger Intuition Buff', es: 'Mejora de Intuición de Peligro' },
          type: 'passive',
          description: {
            en: 'Pre-emptive threat detection is enhanced. Enemies tracking the Pyromaniac suffer -2 to their Tracking rolls.',
            es: 'La detección anticipada de amenazas se mejora. Los enemigos que rastrean al Pyromaniac sufren -2 a sus tiradas de Rastreo.'
          }
        },
        {
          id: 'red_priest_seq7_pyrokinesis',
          name: { en: 'Pyrokinesis', es: 'Piroquinesis' },
          type: 'active',
          spiCost: 0,
          description: {
            en: 'Freely control existing flames within a 5-meter radius at no cost (shape, move, intensify, or extinguish). Creating flames from nothing requires Conjure. Each additional 15m range costs 1 SPI.',
            es: 'Controla libremente las llamas existentes en un radio de 5 metros sin coste (forma, mueve, intensifica o extingue). Crear llamas de la nada requiere Conjurar. Cada 15m adicionales de alcance cuestan 1 SPI.'
          }
        },
        {
          id: 'red_priest_seq7_compress',
          name: { en: 'Compress', es: 'Comprimir' },
          type: 'active',
          spiCost: 1,
          description: {
            en: 'Compresses an existing flame before releasing it. Base damage is 1d6 burning. Each turn spent charging adds +3 damage (max +9, requiring 3 turns of charging).',
            es: 'Comprime una llama existente antes de soltarla. El daño base es 1d6 por quemadura. Cada turno cargando añade +3 de daño (máx +9, requiere 3 turnos).'
          }
        },
        {
          id: 'red_priest_seq7_fire_armour',
          name: { en: 'Fire Armour', es: 'Armadura de Fuego' },
          type: 'active',
          spiCost: 1,
          description: {
            en: 'Wreathes the body in protective flame, granting DR 1 and resistance to cold and poison effects. Lasts until dismissed.',
            es: 'Envuelve el cuerpo en llamas protectoras, otorgando DR 1 y resistencia al frío y al veneno. Dura hasta que se descarte.'
          }
        },
        {
          id: 'red_priest_seq7_conjure',
          name: { en: 'Conjure', es: 'Conjurar' },
          type: 'active',
          spiCost: 1,
          description: {
            en: 'Conjures a crude flame weapon (improvised weapon stats) that deals burning damage. Lasts 1 minute.',
            es: 'Conjura un arma de fuego rudimentaria (estadísticas de arma improvisada) que inflige daño por quemadura. Dura 1 minuto.'
          }
        },
        {
          id: 'red_priest_seq7_area_burst',
          name: { en: 'Area Burst', es: 'Estallido de Área' },
          type: 'active',
          spiCost: 2,
          description: {
            en: 'Creates a burst of flame in a 3-meter radius. Targets take 1d6+1 burning damage (Dodge to halve).',
            es: 'Crea un estallido de llamas en un radio de 3 metros. Los objetivos reciben 1d6+1 de daño por quemadura (Esquivar reduce a la mitad).'
          }
        },
        {
          id: 'red_priest_seq7_delay_explosions',
          name: { en: 'Delay Explosions', es: 'Explosiones Retrasadas' },
          type: 'active',
          spiCost: 2,
          description: {
            en: 'Sets a delayed flame trap. 1d6+3 burning damage on detonation (Dodge to halve). Lasts 1 hour or until triggered.',
            es: 'Coloca una trampa de fuego retardada. 1d6+3 de daño por quemadura al detonar (Esquivar a la mitad). Dura 1 hora o hasta ser activada.'
          }
        },
        {
          id: 'red_priest_seq7_fire_enchant',
          name: { en: 'Fire Enchant', es: 'Encantar con Fuego' },
          type: 'active',
          spiCost: 1,
          description: {
            en: 'Enchants a held weapon with flame. The weapon deals +1d6 burning damage for 1 minute. Affects spirits and incorporeal beings normally.',
            es: 'Encanta un arma sostenida con fuego. El arma inflige +1d6 de daño por quemadura durante 1 minuto. Afecta a los espíritus normalmente.'
          }
        },
        {
          id: 'red_priest_seq7_fire_ravens',
          name: { en: 'Fire Ravens', es: 'Cuervos de Fuego' },
          type: 'active',
          spiCost: 1,
          description: {
            en: 'Conjures 1 flaming raven construct per SPI spent. Each raven has Move 8, HP 2, and deals 1d6-1 burning damage on impact (Dodge to avoid). Disperse after 3 turns.',
            es: 'Conjura 1 cuervo de fuego por SPI gastado. Cada cuervo tiene Mov 8, 2 HP e inflige 1d6-1 de quemadura al impactar. Se dispersan tras 3 turnos.'
          }
        },
        {
          id: 'red_priest_seq7_fire_infusion',
          name: { en: 'Fire Infusion', es: 'Infusión de Fuego' },
          type: 'active',
          spiCost: 1,
          description: {
            en: 'Cost: 1 SPI per hit (free action). Unarmed strikes add 1 stack. Detonate all stacks as a standard action, dealing 1d6 burning damage per stack.',
            es: '1 SPI por golpe (acción gratuita). Golpes desarmados añaden 1 acumulación. Detonar todas como acción estándar inflige 1d6 de daño por quemadura por acumulación.'
          }
        },
        {
          id: 'red_priest_seq7_env_memory',
          name: { en: 'Reinforced Environment Memory', es: 'Memoria del Entorno Reforzada' },
          type: 'passive',
          description: {
            en: 'Range expands to 30 m. Replay the last 10 minutes of any fire source\'s surroundings. Survival Knowledge analysis of burned area reveals exact cause and metaphysical traces.',
            es: 'El rango se expande a 30 m. Reproduce los últimos 10 minutos de los alrededores de cualquier fuego. El análisis revela la causa exacta y rastros metafísicos.'
          }
        },
        {
          id: 'red_priest_seq7_survival',
          name: { en: 'Reinforced Survival Knowledge', es: 'Conocimiento de Supervivencia Reforzado' },
          type: 'passive',
          description: {
            en: 'Healing increases to 1d6+2 HP. Can apply to self or an ally once per scene without needing to retreat from combat.',
            es: 'La curación aumenta a 1d6+2 HP. Puede aplicarse a sí mismo o a un aliado una vez por escena sin necesidad de retirarse del combate.'
          }
        }
      ]
    },
    {
      level: 6,
      statBonuses: [
        { stat: 'SPI', bonus: 3 },
        { stat: 'ST', bonus: 1 },
        { stat: 'HT', bonus: 1 }
      ],
      skillBonuses: [
        { skillId: 'tactics', bonus: 4 },
        { skillId: 'leadership', bonus: 3 }
      ],
      abilities: [
        {
          id: 'red_priest_seq6_conspirer',
          name: { en: 'Conspirer Core Ability', es: 'Habilidad Central de Conspirador' },
          type: 'active',
          spiCost: 2,
          description: {
            en: 'Master of schemes, gains strength when plans succeed. (Details pending in core rules)',
            es: 'Maestro de planes, gana fuerza cuando los complots tienen éxito. (Detalles pendientes)'
          }
        }
      ]
    }
  ]
};
