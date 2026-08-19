import { Pathway } from '../types';

export const redPriestPathway: Pathway = {
  id: 'red_priest',
  name: { en: 'Red Priest Pathway', es: 'Senda de Red Priest' },
  sequences: [
    {
      level: 6,
      statBonuses: [
        { stat: 'SPI', bonus: 3 },
        { stat: 'ST', bonus: 1 },
        { stat: 'HT', bonus: 1 }
      ],
      skillBonuses: [],
      abilities: [
        {
          id: 'red_priest_seq6_main',
          name: { en: 'Conspirer', es: 'Conspirador' },
          type: 'active',
          spiCost: 2,
          description: {
            en: 'Master of schemes, gains strength when plans succeed.',
            es: 'Maestro de esquemas, gana fuerza cuando los planes tienen éxito.'
          }
        }
      ]
    },
    {
      level: 9,
      statBonuses: [{"stat":"ST","bonus":2},{"stat":"DX","bonus":2},{"stat":"Per","bonus":1},{"stat":"SPI","bonus":1}],
      skillBonuses: [],
      abilities: [
        {
          "id": "seq_9_abilities",
          "name": {
            "en": "Hunter Abilities",
            "es": "Habilidades de Hunter"
          },
          "type": "active",
          "spiCost": 0,
          "description": {
            "en": "**Acute Vision**\n\n+2 to vi Percept distant\n\nsion-based ion rolls; spot details\n\nSurvival (any terrain)/Per [Average]\n\n+2\n\n**Danger Sense (partial)**\n\nwarning immedi — less non-ph\n\nsense for ate physical danger reliable for ysical threats\n\n**Ability** **Environme** surrounding alteration to instinctivel and animal can be rend environmen and a First\n\n**nt Memo** s. Any pr a visited y without organs, in ered into p ts. Hemos Aid roll at\n\n**ry:**Hunters have an u eviously visited locatio location. Natural traps any roll.**Survival Kno** cluding which plants a oisons to coat weapon tatic poultices prepare +2); if not bleeding, th\n\nnwavering memory for any alterations made to n is perfectly recalled, and the Hunter automat — unstable cliffs, quicksand, deadfall zones **wledge:**The Hunter possesses innate knowled nd organs serve as hemostatic agents when inj s. Identifying and preparing these requires no d this way restore 1d HP to a bleeding wound ey restore 2 HP. Only one such poultice per in\n\ntheir ically notices any — are detected ge of wild plants ured and which roll in wilderness (requires 1 minute jury per character.",
            "es": "**Acute Vision**\n\n+2 to vi Percept distant\n\nsion-based ion rolls; spot details\n\nSurvival (any terrain)/Per [Average]\n\n+2\n\n**Danger Sense (partial)**\n\nwarning immedi — less non-ph\n\nsense for ate physical danger reliable for ysical threats\n\n**Ability** **Environme** surrounding alteration to instinctivel and animal can be rend environmen and a First\n\n**nt Memo** s. Any pr a visited y without organs, in ered into p ts. Hemos Aid roll at\n\n**ry:**Hunters have an u eviously visited locatio location. Natural traps any roll.**Survival Kno** cluding which plants a oisons to coat weapon tatic poultices prepare +2); if not bleeding, th\n\nnwavering memory for any alterations made to n is perfectly recalled, and the Hunter automat — unstable cliffs, quicksand, deadfall zones **wledge:**The Hunter possesses innate knowled nd organs serve as hemostatic agents when inj s. Identifying and preparing these requires no d this way restore 1d HP to a bleeding wound ey restore 2 HP. Only one such poultice per in\n\ntheir ically notices any — are detected ge of wild plants ured and which roll in wilderness (requires 1 minute jury per character."
          }
        }
      ]
    },
    {
      level: 8,
      statBonuses: [{"stat":"ST","bonus":1},{"stat":"DX","bonus":1},{"stat":"SPI","bonus":1},{"stat":"Per","bonus":1}],
      skillBonuses: [],
      abilities: [
        {
          "id": "seq_8_abilities",
          "name": {
            "en": "Provoker Abilities",
            "es": "Habilidades de Provoker"
          },
          "type": "active",
          "spiCost": 0,
          "description": {
            "en": "**Ability Spirit Vision (1 SPI per minute, standard):** The Provoker activates Spirit Vision with a simple gesture — quickly and discreetly. No concentration or obvious ritual required. **Provocation: Vague Insult:** These insults can target an individual or multiple people and are made up from general terms and insulting words, such as, but not limited to: \"Fuck you\", \"Idiot\", \"Dogshit\". Target must succeed at a Will roll (-2) to resist being provoked. Failing will cause the target to only target the Provoker for 1 turn. **Detailed Insult:** The Provoker uses a specific observation as a base for constructing an insult, for example: \"That's the first warm reception you've had in years.\" Target must succeed at a Will roll (-4) to resist being provoked. Failing will cause the target to only target the Provoker for 2 turns. The Provoker can target up to 2 subjects at once, but there must be a correlation between the subjects and the core of the insult. **Unique Insult:** This must be based on something that is a part of the target, and they know it — that is why it hurts their ego especially. Target must succeed at a Will roll (-6) to resist being provoked. Failing will cause the target to only target the Provoker for 3 turns. **Reinforce Environment Memory:** The Provoker can now sense alterations within 20 m (double the original range). **d Abilities** Natural traps are detected automatically at 5 m without any roll. **Survival Knowledge:** Hemostatic poultices now restore 1d+1 HP to a bleeding wound (or 3 HP if not bleeding). The Provoker can identify poisonous plants and animal organs instinctively regardless of terrain type.",
            "es": "**Ability Spirit Vision (1 SPI per minute, standard):** The Provoker activates Spirit Vision with a simple gesture — quickly and discreetly. No concentration or obvious ritual required. **Provocation: Vague Insult:** These insults can target an individual or multiple people and are made up from general terms and insulting words, such as, but not limited to: \"Fuck you\", \"Idiot\", \"Dogshit\". Target must succeed at a Will roll (-2) to resist being provoked. Failing will cause the target to only target the Provoker for 1 turn. **Detailed Insult:** The Provoker uses a specific observation as a base for constructing an insult, for example: \"That's the first warm reception you've had in years.\" Target must succeed at a Will roll (-4) to resist being provoked. Failing will cause the target to only target the Provoker for 2 turns. The Provoker can target up to 2 subjects at once, but there must be a correlation between the subjects and the core of the insult. **Unique Insult:** This must be based on something that is a part of the target, and they know it — that is why it hurts their ego especially. Target must succeed at a Will roll (-6) to resist being provoked. Failing will cause the target to only target the Provoker for 3 turns. **Reinforce Environment Memory:** The Provoker can now sense alterations within 20 m (double the original range). **d Abilities** Natural traps are detected automatically at 5 m without any roll. **Survival Knowledge:** Hemostatic poultices now restore 1d+1 HP to a bleeding wound (or 3 HP if not bleeding). The Provoker can identify poisonous plants and animal organs instinctively regardless of terrain type."
          }
        }
      ]
    },
    {
      level: 7,
      statBonuses: [{"stat":"SPI","bonus":7},{"stat":"HT","bonus":1},{"stat":"ST","bonus":1}],
      skillBonuses: [],
      abilities: [
        {
          "id": "seq_7_abilities",
          "name": {
            "en": "Pyromaniac Abilities",
            "es": "Habilidades de Pyromaniac"
          },
          "type": "active",
          "spiCost": 0,
          "description": {
            "en": "**Ability**\n\n**Spirit Vision Enhancement:**The Pyromaniac's spirit vision is easier to activate and can now perceive the Ether Body of spirits and Beyonders.**Danger Intuition Buff:**Pre-emptive threat detection is enhanced. Enemies tracking the Pyromaniac suffer -2 to their Tracking rolls.**Pyrokinesis:**The Pyromaniac can freely control existing flames within a 5-meter radius at no cost (shape, move, intensify, or extinguish). Creating flames from nothing requires Conjure (1 SPI). Each additional 15 meters of range costs 1 SPI. All abilities below are part of Pyrokinesis.**Compress (1 SPI):**Compresses an existing flame before releasing it. Base damage is 1d6 burning. Each turn spent charging adds +3 damage (max +9, requiring 3 turns of charging). **Fire Armour (1 SPI):**Wreathes the body in protective flame, granting DR 1 and resistance to cold and poison effects. Lasts until dismissed.**Conjure (1 SPI):**Conjures a crude flame weapon (improvised weapon stats) that deals burning damage. Lasts 1 minute.**Area Burst (2 SPI):**Creates a burst of flame in a 3-meter radius. Targets take 1d6+1 burning damage (Dodge to halve).**Delay Explosions (2 SPI):**Sets a delayed flame trap. 1d6+3 burning damage on detonation (Dodge to halve). Lasts 1 hour or until triggered.**Fire** **Enchant (1 SPI):**Enchants a held weapon with flame. The weapon deals +1d6 burning damage for 1 minute. Affects spirits and incorporeal beings normally.**Fire Ravens (1 SPI per raven):**Conjures 1 flaming raven construct per SPI spent. Each raven has Move 8, HP 2, and deals 1d6-1 burning damage on impact (Dodge to avoid). Ravens disperse after 3 turns.**Fire Infusion (1 SPI per hit, free action):**When hitting a target with an unarmed strike, infuse it with 1 stack of Fire Infusion. On a subsequent turn, the Pyromaniac may detonate all stacks on a target as a standard action, dealing 1d6 burning damage per stack.\n\n**Reinforce** **d Abilities**\n\n**Environment Memory:**Range expands to 30 m. The Pyromaniac can replay the last 10 minutes of any fire source's surroundings (from 5 minutes). A successful Survival Knowledge analysis of a burned area reveals the exact cause of ignition and any metaphysical traces left behind.**Survival Knowledge:**The healing from a successful Survival Knowledge check increases to 1d6+2 HP (from 1d6+1). The Pyromaniac may apply this to self or an ally once per scene without needing to retreat from combat.",
            "es": "**Ability**\n\n**Spirit Vision Enhancement:**The Pyromaniac's spirit vision is easier to activate and can now perceive the Ether Body of spirits and Beyonders.**Danger Intuition Buff:**Pre-emptive threat detection is enhanced. Enemies tracking the Pyromaniac suffer -2 to their Tracking rolls.**Pyrokinesis:**The Pyromaniac can freely control existing flames within a 5-meter radius at no cost (shape, move, intensify, or extinguish). Creating flames from nothing requires Conjure (1 SPI). Each additional 15 meters of range costs 1 SPI. All abilities below are part of Pyrokinesis.**Compress (1 SPI):**Compresses an existing flame before releasing it. Base damage is 1d6 burning. Each turn spent charging adds +3 damage (max +9, requiring 3 turns of charging). **Fire Armour (1 SPI):**Wreathes the body in protective flame, granting DR 1 and resistance to cold and poison effects. Lasts until dismissed.**Conjure (1 SPI):**Conjures a crude flame weapon (improvised weapon stats) that deals burning damage. Lasts 1 minute.**Area Burst (2 SPI):**Creates a burst of flame in a 3-meter radius. Targets take 1d6+1 burning damage (Dodge to halve).**Delay Explosions (2 SPI):**Sets a delayed flame trap. 1d6+3 burning damage on detonation (Dodge to halve). Lasts 1 hour or until triggered.**Fire** **Enchant (1 SPI):**Enchants a held weapon with flame. The weapon deals +1d6 burning damage for 1 minute. Affects spirits and incorporeal beings normally.**Fire Ravens (1 SPI per raven):**Conjures 1 flaming raven construct per SPI spent. Each raven has Move 8, HP 2, and deals 1d6-1 burning damage on impact (Dodge to avoid). Ravens disperse after 3 turns.**Fire Infusion (1 SPI per hit, free action):**When hitting a target with an unarmed strike, infuse it with 1 stack of Fire Infusion. On a subsequent turn, the Pyromaniac may detonate all stacks on a target as a standard action, dealing 1d6 burning damage per stack.\n\n**Reinforce** **d Abilities**\n\n**Environment Memory:**Range expands to 30 m. The Pyromaniac can replay the last 10 minutes of any fire source's surroundings (from 5 minutes). A successful Survival Knowledge analysis of a burned area reveals the exact cause of ignition and any metaphysical traces left behind.**Survival Knowledge:**The healing from a successful Survival Knowledge check increases to 1d6+2 HP (from 1d6+1). The Pyromaniac may apply this to self or an ally once per scene without needing to retreat from combat."
          }
        }
      ]
    },
  ]
};
