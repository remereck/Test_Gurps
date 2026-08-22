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
          id: 'red_priest_seq8_provocation',
          name: { en: 'Provocation', es: 'Provocación' },
          type: 'active',
          description: {
            en: 'Taunt targets into attacking you or making mistakes.\n\n{{Vague Insult}}: General terms. Target rolls Will-2. Failure forces target to attack you for 1 turn.\n{{Detailed Insult}}: Based on specific observation. Target rolls Will-4. Failure forces target to attack you for 2 turns.\n{{Unique Insult}}: Targets insecurities. Target rolls Will-6. Failure forces target to attack you for 3 turns.',
            es: 'Burlarse de los objetivos para que te ataquen o cometan errores.\n\n{{Insulto Vago}}: Términos generales. Voluntad-2. Si falla, te ataca por 1 turno.\n{{Insulto Detallado}}: Basado en observación. Voluntad-4. Si falla, te ataca por 2 turnos.\n{{Insulto Único}}: Apunta a inseguridades. Voluntad-6. Si falla, te ataca por 3 turnos.'
          },
          spiOptions: [
            { name: { en: 'Vague Insult', es: 'Insulto Vago' }, cost: 0 },
            { name: { en: 'Detailed Insult', es: 'Insulto Detallado' }, cost: 0 },
            { name: { en: 'Unique Insult', es: 'Insulto Único' }, cost: 0 }
          ]
        },
        {
          id: 'red_priest_seq8_env_memory',
          replaces: 'red_priest_seq9_env_memory',
          name: { en: 'Environment Memory+', es: 'Memoria del Entorno+' },
          type: 'passive',
          description: {
            en: 'Environment Memory: Unwavering memory for surroundings and alterations; detect natural traps instinctively, Environment Memory+ Can now sense alterations within {{20 m}} and natural traps are detected automatically at 5 m {{without any roll}}.',
            es: 'Memoria del Entorno: Memoria inquebrantable de los alrededores y alteraciones; detecta trampas naturales instintivamente, Memoria del Entorno+ Ahora puede sentir alteraciones a {{20 m}} y las trampas naturales se detectan automáticamente a 5 m {{sin tirar}}.'
          }
        },
        {
          id: 'red_priest_seq8_survival',
          replaces: 'red_priest_seq9_survival',
          name: { en: 'Survival Knowledge+', es: 'Conocimiento de Supervivencia+' },
          type: 'passive',
          description: {
            en: 'Survival Knowledge: Innate knowledge of wild plants and animal organs; can prepare hemostatic poultices (1 min, restore 1d HP to bleeding wound or 2 HP if not bleeding), Survival Knowledge+ Hemostatic poultices now restore {{1d+1 HP}} to a bleeding wound (or {{3 HP}} if not bleeding). Can identify poisonous plants and animal organs instinctively {{regardless of terrain type}}.',
            es: 'Conocimiento de Supervivencia: Conocimiento innato de plantas silvestres y órganos animales; puede preparar cataplasmas hemostáticas (1 min, restaura 1d de HP a una herida sangrante o 2 HP si no sangra), Conocimiento de Supervivencia+ Las cataplasmas hemostáticas ahora restauran {{1d+1 de HP}} a una herida sangrante (o {{3 HP}} si no sangra). Puede identificar plantas y órganos venenosos instintivamente {{sin importar el terreno}}.'
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
          replaces: 'red_priest_seq8_spirit_vision',
          name: { en: 'Spirit Vision+', es: 'Visión Espiritual+' },
          type: 'active',
          spiCost: 1,
          description: {
            en: 'Spirit Vision: The Provoker activates Spirit Vision with a simple gesture — quickly and discreetly. No concentration or obvious ritual required, Spirit Vision+ The spirit vision is {{easier to activate}} and can now perceive the {{Ether Body}} of spirits and Beyonders.',
            es: 'Visión Espiritual: El Provoker activa la Visión Espiritual con un simple gesto, de manera rápida y discreta. No requiere concentración ni ritual obvio, Visión Espiritual+ La visión espiritual es {{más fácil de activar}} y ahora puede percibir el {{Cuerpo Etéreo}} de espíritus y Beyonders.'
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
          id: 'red_priest_seq7_pyromancy',
          name: { en: 'Pyromancy', es: 'Piromancia' },
          type: 'active',
          description: {
            en: 'Mastery over fire creation and manipulation.\n\n{{Pyrokinesis}}: Control existing flames in 5m (free). +15m per 1 SPI.\n{{Compress}}: Charge flame to add +3 damage per turn (max +9, 1d6 base).\n{{Fire Armour}}: Wreath body in flames for DR 1 and cold/poison resist.\n{{Conjure}}: Create a flaming improvised weapon for 1 min.\n{{Area Burst}}: 3m burst, 1d6+1 damage.\n{{Delay Explosions}}: Flame trap, 1d6+3 damage.\n{{Fire Enchant}}: Add +1d6 burning damage to weapon.\n{{Fire Ravens}}: 1 flaming raven construct (Move 8, 2 HP, 1d6-1 dmg) per SPI.\n{{Fire Infusion}}: 1 SPI per unarmed hit. Detonate stacks for 1d6 per stack.',
            es: 'Maestría sobre la creación y manipulación del fuego.\n\n{{Piroquinesis}}: Controla fuego existente en 5m (gratis). +15m por 1 SPI.\n{{Comprimir}}: Carga fuego sumando +3 daño/turno (máx +9, base 1d6).\n{{Armadura Fuego}}: Envuelve cuerpo para RD 1 y resistencia al frío/veneno.\n{{Conjurar}}: Crea arma de fuego improvisada por 1 min.\n{{Estallido de Área}}: Radio 3m, 1d6+1 daño.\n{{Explosiones Retrasadas}}: Trampa de fuego, 1d6+3 daño.\n{{Encantar con Fuego}}: +1d6 daño de fuego a arma.\n{{Cuervos de Fuego}}: 1 cuervo de fuego por SPI.\n{{Infusión Fuego}}: 1 SPI por golpe desarmado. Detona todo por 1d6 x marca.'
          },
          spiOptions: [
            { name: { en: 'Pyrokinesis', es: 'Piroquinesis' }, cost: 0 },
            { name: { en: 'Compress', es: 'Comprimir' }, cost: 1 },
            { name: { en: 'Fire Armour', es: 'Armadura Fuego' }, cost: 1 },
            { name: { en: 'Conjure', es: 'Conjurar' }, cost: 1 },
            { name: { en: 'Area Burst', es: 'Estallido Área' }, cost: 2 },
            { name: { en: 'Delay Explosions', es: 'Explosiones' }, cost: 2 },
            { name: { en: 'Fire Enchant', es: 'Encantar' }, cost: 1 },
            { name: { en: 'Fire Ravens', es: 'Cuervos Fuego' }, cost: 1 },
            { name: { en: 'Fire Infusion', es: 'Infusión Fuego' }, cost: 1 }
          ]
        },
        {
          id: 'red_priest_seq7_env_memory',
          replaces: 'red_priest_seq8_env_memory',
          name: { en: 'Environment Memory++', es: 'Memoria del Entorno++' },
          type: 'passive',
          description: {
            en: 'Environment Memory+: Can now sense alterations within 20 m and natural traps are detected automatically at 5 m without any roll, Environment Memory++ Range expands to {{30 m}}. You can replay the last {{10 minutes}} of any fire source\'s surroundings, and analysis of burned areas reveals exact cause and {{metaphysical traces}}.',
            es: 'Memoria del Entorno+: Ahora puede sentir alteraciones a 20 m y las trampas naturales se detectan automáticamente a 5 m sin tirar, Memoria del Entorno++ El rango se expande a {{30 m}}. Puedes reproducir los últimos {{10 minutos}} de los alrededores de cualquier fuego, y el análisis de áreas quemadas revela la causa exacta y {{rastros metafísicos}}.'
          }
        },
        {
          id: 'red_priest_seq7_survival',
          replaces: 'red_priest_seq8_survival',
          name: { en: 'Survival Knowledge++', es: 'Conocimiento de Supervivencia++' },
          type: 'passive',
          description: {
            en: 'Survival Knowledge+: Hemostatic poultices now restore 1d+1 HP to a bleeding wound (or 3 HP if not bleeding). Can identify poisonous plants and animal organs instinctively regardless of terrain type, Survival Knowledge++ Healing increases to {{1d6+2 HP}} and you can apply to self or an ally once per scene {{without needing to retreat}} from combat.',
            es: 'Conocimiento de Supervivencia+: Las cataplasmas hemostáticas ahora restauran 1d+1 de HP a una herida sangrante (o 3 HP si no sangra). Puede identificar plantas y órganos venenosos instintivamente sin importar el terreno, Conocimiento de Supervivencia++ La curación aumenta a {{1d6+2 HP}} y puede aplicarse a sí mismo o a un aliado una vez por escena {{sin necesidad de retirarse}} del combate.'
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
