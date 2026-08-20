export interface ChurchLore {
  id: string;
  deity: string;
  pathway: string;
  stronghold: string;
  beyonderFaction: string;
  keyNotes: string;
}

export interface OrganizationLore {
  id: string;
  name: string;
  orgType: string;
  alignment: string;
  knownFocus: string;
}

export interface NationLore {
  id: string;
  name: string;
  region: string;
  description: string;
}

export interface GlossaryTerm {
  id: string;
  term: string;
  category: string;
  definition: string;
}

export const ORTHODOX_CHURCHES: ChurchLore[] = [
  {
    "id": "church_1",
    "deity": "Evernight  /  Goddess",
    "pathway": "Darkness",
    "stronghold": "Night, darkness, death,  /  fate. Dominant in Loen  /  Kingdom; domains in East  /  Balam.",
    "beyonderFaction": "Nighthawks (local) +  /  Red Gloves (elite,  /  Seq 7+)",
    "keyNotes": "HQ: Cathedral of Serenity, / Amantha Mts. Promotes gender / equality. Clergymen in / black-red robes. Rivals: Church / of the God of Combat."
  },
  {
    "id": "church_2",
    "deity": "Lord of Storms",
    "pathway": "Tyrant",
    "stronghold": "Sea, storms, sailors. Strong  /  in Loen, Rorsted  /  Archipelago, Sonia Sea.",
    "beyonderFaction": "Mandated Punishers",
    "keyNotes": "HQ: Chasm of Storms / Cathedral, Pasu Island. Most / male-centric church. Doctrine: / vent all anger like a storm. Even / pirates worship informally. / Rivals: Eternal Blazing Sun, / God of Knowledge."
  },
  {
    "id": "church_3",
    "deity": "Eternal Blazing  /  Sun",
    "pathway": "Sun",
    "stronghold": "Light, fire, holy war.  /  Dominant in Intis  /  Republic; strong in  /  Southern Continent  /  colonies.",
    "beyonderFaction": "Inquisitors",
    "keyNotes": "Gold-adorned cathedrals. Sun / Sacrifice is their major festival / (longest day of year). At least / one female Angel. Rivals: Lord / of Storms, God of Knowledge."
  },
  {
    "id": "church_4",
    "deity": "God of  /  Knowledge &  /  Wisdom",
    "pathway": "White / Tower",
    "stronghold": "Learning, secrets, the  /  mind. Lenburg, Segar,  /  Masin (expelled from  /  Feynapotter in 738).",
    "beyonderFaction": "The Knowing Eye",
    "keyNotes": "Discriminates by intelligence, / not gender. Prizes scholars and / investigators. Symbol: / omniscient eye on an open / book. Rivals: Lord of Storms, / Eternal Blazing Sun."
  },
  {
    "id": "church_5",
    "deity": "Earth Mother",
    "pathway": "Mother",
    "stronghold": "Nature, fertility,  /  reproduction. Feynapotter  /  Kingdom; limited in Loen.",
    "beyonderFaction": "Fertility Order  /  (limited)",
    "keyNotes": "Promotes gender equality with / emphasis on birth as sacred. / Quiet and pastoral. Split into / 'Favored' and 'Blessed' divisions / to guard against false / revelations."
  },
  {
    "id": "church_6",
    "deity": "God of Combat",
    "pathway": "Twilight / Giant",
    "stronghold": "War, strength, martial  /  glory. Feysac Empire (sole  /  state religion).",
    "beyonderFaction": "The Bloodgrave  /  Order",
    "keyNotes": "Most male-centric church. / Militaristic and aggressive. / Historically hostile to Evernight / Goddess. Beyonders are among / the most physically powerful / Demigods in the world."
  },
  {
    "id": "church_7",
    "deity": "God of Steam &  /  Machinery",
    "pathway": "Paragon",
    "stronghold": "Industry, invention,  /  progress. Intis Republic;  /  formerly major in Loen  /  (expelled post-1350).",
    "beyonderFaction": "Machinery Hivemind",
    "keyNotes": "Formerly God of / Craftsmanship; renamed in / Roselle's era. Fewest Sealed / Artifacts. Neutral on gender. / Hivemind members often / mechanize parts of their own / bodies."
  }
];

export const SECRET_ORGANIZATIONS: OrganizationLore[] = [
  {
    "id": "org_1",
    "name": "Nighthawks",
    "orgType": "Church Division / (Evernight)",
    "alignment": "Orthodox",
    "knownFocus": "See Orthodox Divisions table above. The primary supernatural police of Loen Kingdom."
  },
  {
    "id": "org_2",
    "name": "Machinery Hivemind",
    "orgType": "Church Division / (Steam)",
    "alignment": "Orthodox",
    "knownFocus": "See Orthodox Divisions table above. Operate in Intis and industrialised Loen territory."
  },
  {
    "id": "org_3",
    "name": "Twilight Hermit / Order",
    "orgType": "Ancient (Second / Epoch)",
    "alignment": "Secretive / / Neutral",
    "knownFocus": "The oldest known secret organization, founded by Adam, eldest son of the Ancient Sun God. Aims to guide history from the shadows so the Original Creator may one day resurrect. Has members embedded at the highest levels of every church and government. Members may not speak the Order's name outside. Possesses the Second Blasphemy Slate."
  },
  {
    "id": "org_4",
    "name": "Rose School of / Thought",
    "orgType": "Early Fifth Epoch",
    "alignment": "Hostile",
    "knownFocus": "Originally worshipped the Chained God; believes magic is a science of the will. Retains bloody ancient rituals including sacrifice. Main influence covers the Southern Continent. Their ideology holds that desire, combined with Beyonder power, can accomplish anything. Considered dangerous and heretical by the Orthodox Churches."
  },
  {
    "id": "org_5",
    "name": "Psychology / Alchemists",
    "orgType": "Newly Founded",
    "alignment": "Neutral / / Academic",
    "knownFocus": "Formed from a scholarly seminar that discovered ruins left by the ancient being Hermes. Holds formulas of the Visionary Pathway. Believes human consciousness is an island above a vast subconscious sea. Operates loosely \u2014 more seminar than army. Secretly under the influence of the Twilight Hermit Order."
  },
  {
    "id": "org_6",
    "name": "Secret Order",
    "orgType": "Fourth Epoch",
    "alignment": "Unknown",
    "knownFocus": "Founded by the Zaratul Family after the War of the Four Emperors. Extremely secretive \u2014 goals and philosophy are largely unknown. Their founder Zaratul failed an advancement beyond Sequence 1 and became a monster. Believed to be searching for relics of the Antigonus Family (Fool Pathway). Deep connections to the Intis Republic."
  },
  {
    "id": "org_7",
    "name": "Aurora Order",
    "orgType": "Early Fifth Epoch",
    "alignment": "Hostile",
    "knownFocus": "Worshippers of the True Creator \u2014 a dangerous ancient fallen god. Considered extremely dangerous and hunted actively by the Orthodox Churches. Members pursue radical ends using the power of the True Creator's pathway group."
  },
  {
    "id": "org_8",
    "name": "Abraham Family",
    "orgType": "Fourth Epoch",
    "alignment": "Neutral / / Allied",
    "knownFocus": "One of the five great angel families of the Fourth Epoch Tudor Empire. Survived into the Fifth Epoch and maintains connections across multiple power structures. Has provided aid and information to various independent Beyonder parties."
  }
];

export const NATIONS: NationLore[] = [
  {
    "id": "nation_1",
    "name": "Loen Kingdom \u2014 The Dominant Power",
    "region": "Northern Continent",
    "description": "The strongest nation on the Northern Continent, located in the east. Founded by the Augustus Family after the collapse of the Trunsoest Empire, Loen's industrial and economic strength is unrivalled. Its capital, Backlund, is the most populous city in the known world \u2014 a sprawling mass of factories, fog, poverty, and aristocratic excess. Politically, Loen resembles a constitutional monarchy under tension: the old noble landowning class clings to its privileges while a rising New Party of industrialists and capitalists \u2014 empowered by the Industrial Revolution \u2014 pushes for reform. The Church of the Evernight Goddess holds enormous influence over Loen's spiritual life, and its Nighthawk Beyonder faction polices supernatural threats within the kingdom's borders."
  },
  {
    "id": "nation_2",
    "name": "Intis Republic \u2014 Revolution's Legacy",
    "region": "Northern Continent",
    "description": "The second-strongest nation, located in the west. Originally the Intis Kingdom, it was overthrown by the legendary Emperor Roselle Gustav, whose reign transformed the continent and left behind a scattered legacy of golden diaries. After Roselle's death, Intis became a parliamentary republic, governed by a National Convention of over 300 members with the authority to appoint the president, prime minister, and ministers. Its national slogan is _Freedom, Equality, Fraternity._ Internally, Intis is fractious: the National Party, Enlightenment Party, and Revolutionary Party compete in elections, while the Emperor Party and the underground Carbonari seek change by other means. The Church of the God of Steam and Machinery holds particular sway here."
  },
  {
    "id": "nation_3",
    "name": "Feynapotter Kingdom \u2014 The Pious Realm",
    "region": "Northern Continent",
    "description": "The third power on the Northern Continent, Feynapotter is the most religiously conservative of the four great nations. Its monarchy rules in close partnership with the Church of the God of Knowledge and Wisdom. Scholarship, arcane research, and magical tradition are central to its culture. Feynapotter sits between Loen and Feysac geographically, making it a frequent site of diplomatic tension and proxy conflict."
  },
  {
    "id": "nation_4",
    "name": "Feysac Empire \u2014 The Northern Giant",
    "region": "Northern Continent",
    "description": "The northernmost empire and the most militaristic of the four powers. Feysac's brutal winters and vast interior have produced a culture that prizes strength, endurance, and martial honour. After Roselle opened the sea routes to the Southern Continent (Balam), Feysac sent its own armies south to claim colonial territory \u2014 competing bitterly with Loen and Intis for resources and influence. The Church of the God of Combat and Hunting holds significant power within the empire."
  }
];

export const GLOSSARY: GlossaryTerm[] = [
  {
    "id": "gloss_1",
    "term": "Acting Method",
    "category": "setting",
    "definition": "The practice of embodying your Beyonder potion's 'role' to digest it safely. The primary method of Digestion is the **Acting Method**: the Beyonder engrosses themselves in the 'role' of the potion, embodying its nature deeply and consistently. Most Beyonders must wait years between potions to minimise the risk of losing control."
  },
  {
    "id": "gloss_2",
    "term": "Astral Projection / Astral Body",
    "category": "setting",
    "definition": "Located beneath the Ether Body, it directly reflects a person's emotional and mental state.\n*(Note: The **Spirit Body (Cuerpo Espiritual)** is the fundamental essence that resides within, capable of leaving the physical body upon death or for spirit projection to the Spirit World).* \nWhen a Beyonder activates Spirit Vision, they primarily observe the **Ether Body** and the **Astral Projection**."
  },
  {
    "id": "gloss_3",
    "term": "Backlund",
    "category": "setting",
    "definition": "The capital of the Loen Kingdom. A sprawling industrial city of fog, factories, slums, and aristocratic mansions. Most campaigns begin here."
  },
  {
    "id": "gloss_4",
    "term": "Beyonder",
    "category": "setting",
    "definition": "There are multiple Pathways for Beyonders to take, all starting from Sequence 9. Beyonders gain power from specific potions or boons, but must endure the side effects — paranoia, hallucinations, altered perception — that ensue upon consuming or being bestowed with them. There is always a chance they will succumb to these side effects and lose control, becoming monsters themselves. In cases where Beyonders grow very old or sustain serious injury, using their abilities risks triggering that same loss of control."
  },
  {
    "id": "gloss_5",
    "term": "Beyonder Weapon",
    "category": "mechanic",
    "definition": "**Beyonder Weapons** are weapons that have been augmented by Beyonder means or have Beyonder characteristics embedded in them. This includes: a spirit channel's power manifesting as a weapon, a sealed artifact in weapon form, a mundane weapon reinforced by ritual or spirituality, and any weapon conjured by a Beyonder ability. \nSome Beyonder weapons deal **spiritual damage** alongside physical damage — they can harm spirits, incorporeal beings, and targets with physical DR as though it were a Beyonder-level effect."
  },
  {
    "id": "gloss_6",
    "term": "Body of Heart and Mind",
    "category": "setting",
    "definition": "The layer of a soul governing emotion, reason, and self-awareness. Lies between the Astral Body and the Spirit Body. Targeted by Visionary pathway mental manipulation abilities such as Frenzy and Telepathy."
  },
  {
    "id": "gloss_7",
    "term": "Character Points",
    "category": "mechanic",
    "definition": "GURPS 4th Edition uses a unified point-buy system. Every character is built from the same currency — Character Points — spent on four things: **Attributes** , **Advantages** , **Disadvantages** (which give points back), and **Skills**."
  },
  {
    "id": "gloss_8",
    "term": "CoR (Corruption)",
    "category": "mechanic",
    "definition": "**CoR** measures how close a Beyonder is to losing their humanity and sanity. Maximum CoR equals the character's Will score. Reaching maximum CoR means the character becomes an NPC monster or irreversibly mad Beyonder — removed from play.\n\n|**Action**|**CoR Gained**|\n|---|---|\n|Using powers while drained of Spirituality|1 CoR per use|\n|Seeing or Hearing things you're not supposed to|1–3 CoR per session|\n|Witnessing higher-Sequence powers (Seq 6 or above)|1–4 CoR|\n|Using forbidden rituals|2–5 CoR|\n|Advancing sequence without full digestion|10+ CoR|\n|Ritual magic critical failure|1d CoR|\n\n**[!] At maximum CoR: The character is permanently lost. The GM takes full control. The other characters now have a new enemy.**"
  },
  {
    "id": "gloss_9",
    "term": "Critical Success / Failure",
    "category": "mechanic",
    "definition": "- **Critical Success:** Roll of 3 or 4 (always succeeds brilliantly). A critical success on an attack roll deals double damage.\n- **Critical Failure:** Roll of 17 or 18, or fail by 10+ (disaster)."
  },
  {
    "id": "gloss_10",
    "term": "Digestion",
    "category": "mechanic",
    "definition": "After consuming a potion, a Beyonder must _digest_ it — safely incorporating its power over time. Digestion is tracked as a percentage from 0% to 100%. The primary method is the **Acting Method** : the Beyonder engrosses themselves in the 'role' of the potion, embodying its nature deeply and consistently. Most Beyonders must wait years between potions to minimise the risk of losing control. From **Sequence 5 onward** , advancement also requires a ritual in addition to the potion — without it, the likelihood of losing control becomes near-certain. \n\n|**Acting Quality**|**Digestion Gain Per Session**|\n|---|---|\n|Exemplary (fully embodies pathway nature)|+15–20%|\n|Good (follows most requirements)|+10–15%|\n|Adequate (follows some requirements)|+5–10%|\n|Poor (barely follows pathway)|+0–5%|\n|None (ignores pathway nature entirely)|0% or loses progress|\n\n**Character Point Investment:** A Beyonder may spend earned character points to accelerate digestion at a rate of **1 character point = 1% digestion progress** . This represents the Beyonder using experience and insight to better understand their potion's nature. Digestion progress does **not** decay; once gained, it is permanent. \n\n##### **Potion Consumption Roll**\nWhen a Beyonder drinks a potion to advance to the next Sequence, they must make a **Potion Consumption Roll (PCR)** . This is a raw 3d6 roll — no stat or skill applies. Only the drinker's digestion of their current potion matters.\n\n###### **Roll 3d6 <= 10 + Digestion Modifier.**\n\nThe Digestion Modifier depends on how fully the current potion has been digested:\n\n|**Digestion of Current Potion**|**Modifier**|**Effective Target**|\n|---|---|---|\n|0%|-9|1 — always fails|\n|10%|-7|3|\n|20%|-5|5|\n|30%|-4|6|\n|40%|-2|8|\n|50%|0|10 — even odds|\n|60%|+2|12|\n|70%|+4|14|\n|80%|+5|15|\n|90%|+7|17|\n|100%|+9|19 — always succeeds|"
  },
  {
    "id": "gloss_11",
    "term": "Ether Body",
    "category": "mechanic",
    "definition": "The outermost layer of a soul, visible through Spirit Vision. Shows physical health \u2014 white = healthy, dark = ill."
  },
  {
    "id": "gloss_12",
    "term": "FP (Fatigue Points)",
    "category": "mechanic",
    "definition": "FP are used by All-Out maneuvers, Extra Effort, and rituals. They recover quickly compared to HP. Rest (sitting, no strenuous activity) recovers 1 FP per 10 minutes. Sleep recovers all FP."
  },
  {
    "id": "gloss_13",
    "term": "Game Master (GM)",
    "category": "setting",
    "definition": "One person at the table — the GM — plays the role of the world itself. They describe the foggy streets of Backlund, play the shopkeepers and villains you meet, and decide what happens when you take risks."
  },
  {
    "id": "gloss_14",
    "term": "HP (Hit Points)",
    "category": "mechanic",
    "definition": "Physical damage capacity. Equal to ST at character creation. HP are restored through three distinct mechanisms: natural recovery, external healing, and regeneration."
  },
  {
    "id": "gloss_15",
    "term": "Loen Kingdom",
    "category": "setting",
    "definition": "The primary setting of the game, equivalent to the Victorian/Edwardian era of early industrial capitalism. It is centered on its teeming capital Backlund, a city divided sharply by class."
  },
  {
    "id": "gloss_16",
    "term": "Losing Control",
    "category": "setting",
    "definition": "No matter the pathway, the higher the Sequence, the greater the insanity and inhuman inclinations that accumulate. Losing control is not solely linked to the potion's effects — it is also intricately connected to a Beyonder's emotions and mental health. The key lies in self-control: resisting the temptations of evil gods and devils, suppressing greed and jealousy, and guarding against the erosion of desire. \n\nLosing control progresses through three stages: \n\n|**Stage**|**Description**|\n|---|---|\n|Stage 1 — Warning Signs|Auditory and visual hallucinations begin. The Beyonder may dismiss them as exhaustion or stress.|\n|Stage 2 — Loss of Control|The body and mind are partially out of control. The Beyonder periodically displays terrifying or strange states they cannot fully explain or suppress.|\n|Stage 3 — Rampager|Complete breakdown. The Beyonder transforms into a terrifying monster. The transition from Stage 2 to Stage 3 can happen rapidly — sometimes within moments of the symptoms appearing.|"
  },
  {
    "id": "gloss_17",
    "term": "Margin of Success / Failure",
    "category": "mechanic",
    "definition": "The difference between your roll and your target is your margin of success/failure. The degree of success or failure often determines the quality of outcome:\n- **Success by 0–2:** Barely succeeded\n- **Success by 3–4:** Clean success\n- **Success by 5+:** Exceptional result\n- **Failure by 1–2:** Barely failed"
  },
  {
    "id": "gloss_18",
    "term": "Pathway",
    "category": "setting",
    "definition": "One of 22 divine progressions. Each pathway runs from Sequence 9 to Sequence 0 and grants specific abilities. Examples: Fool Pathway, Error Pathway, Darkness Pathway."
  },
  {
    "id": "gloss_19",
    "term": "Potion",
    "category": "setting",
    "definition": "Beyonder Potions are the source of a Beyonder's power. Every Sequence requires a specific **Potion Formula**.\n\n- **Main Ingredients:** Usually one or two Beyonder characteristics (crystallized powers from monsters or deceased Beyonders of the same pathway and sequence).\n- **Supplementary Ingredients:** Distilled water, specific herbs, powders, or creature blood. These dilute the madness of the main ingredients.\n- **Brewing:** The supplementary ingredients are mixed first, usually into pure water or alcohol, followed by the main ingredients. Once the main ingredients dissolve, the potion is ready and must be consumed immediately, or preserved in a spirituality-sealed container."
  },
  {
    "id": "gloss_21",
    "term": "SPI \u2014 Spirituality",
    "category": "mechanic",
    "definition": "Spirituality (SPI) is a finite resource. Once spent on abilities, rituals, and skills, it must be carefully restored through rest. \n\n###### **Rest:** \nA character who rests — sitting quietly, sleeping, or engaging in no strenuous physical or spiritual activity — recovers **1 SPI per hour** . This is the standard recovery rate. Combat, ritual casting, or heavy physical exertion interrupts rest and halts recovery. \n\n**Cogitation:** A character may attempt a **Cogitation** roll (Will/Hard) during a rest period. On success, SPI recovery is **doubled** (2 SPI per hour) for that rest. On failure, recovery remains 1 SPI per hour. \n\n###### **SPI Threshold Penalties** \nAs SPI is depleted, the spirit body weakens. Track SPI loss against your maximum SPI value just like HP: \n\n|**SPI Level**|**Effect**|\n|---|---|\n|<= 1/3 Max SPI|Spiritual Attrition: -3 to all SPI-based skill rolls and Beyonder ability checks|\n|0 SPI|Spiritual Exhaustion: All Beyonder abilities deactivate; cannot activate any SPI-cost abilities; Spirit Vision shuts off|\n|Below 0 SPI|Soul Debt: +1 CoR per 1 point below 0 (e.g. SPI -4 = +4 CoR). See CoR (Chapter 6).|"
  }
  ,
  {
    "id": "gloss_20",
    "term": "Sequence",
    "category": "setting",
    "definition": "In the hidden world of Beyonders, humans consume carefully crafted potions to walk the path of supreme ascension, unlocking occult powers beyond ordinary comprehension. Twenty-two pathways guide this journey, each beginning at Sequence 9. The lower the sequence, the greater the Beyonder's power. Those who descend all the way to Sequence 0 attain abilities that rival the gods themselves, a transcendence so rare and extraordinary that it is known simply as the path of the divine."
  },
  {
    "id": "gloss_22",
    "term": "Spirit Vision",
    "category": "mechanic",
    "definition": "The spirit sees what the eye cannot. Through Spirit Vision, Beyonders perceive the auras of life — colors of emotion, threads of health, darkness of corruption. Activate by expending 1 SPI. \n\n##### **The Parts of the Soul (Las Partes del Alma)**\nAccording to mysticism, a living being is composed of four primary layers:\n1. **Physical Body (Cuerpo Físico):** The material shell.\n2. **Ether Body (Cuerpo de Éter):** The outermost spiritual layer that manifests as the aura of life. It reflects vital energy, physical health, and biological functions.\n3. **Astral Projection (Proyección Astral):** Located beneath the Ether Body, it directly reflects a person's emotional and mental state.\n4. **Body of Heart and Mind (Cuerpo de la Mente y el Corazón):** The inner core of consciousness, deep thoughts, and spirituality. Telepathists interact primarily with this layer.\n\n*(Note: The **Spirit Body (Cuerpo Espiritual)** is the fundamental essence that resides within, capable of leaving the physical body upon death or for spirit projection to the Spirit World).*\n\nWhen a Beyonder activates Spirit Vision, they primarily observe the **Ether Body** and the **Astral Projection**.\n\n##### **A. Astral Projection Colors** \nThe Astral Projection lies beneath the Ether Body and reveals emotional state: \n\n|**Color**|**Meaning**|\n|---|---|\n|Red|Passion, excitement, anger|\n|Orange|Warmth, satisfaction|\n|Yellow|Happiness, extroversion|\n|Green|Calm, peace, balance|\n|Blue|Coldness, stillness, logic|\n|White|Brightness, ambition|\n|Dark|Worry, sorrow, fear|\n|Purple|Spirituality, madness|\n\n##### **B. Ether Body Colors** \nThe Ether Body is the outermost layer — shows physical health: \n\n|**Body Region**|**Color**|\n|---|---|\n|Limbs active|Red|\n|Brain|Purple|\n|Waste systems|Orange|\n|Digestion|Yellow|\n|Heart/reg|Green|\n|Nerves|Blue|\n|Healthy|White|\n|Ill|Dark/Thin|\n\nA balanced body appears **white** . Darkness or thinning indicates illness. \n\n##### **C. Pathway Differences** \nNot all Beyonders perceive equally. Pathway and Sequence determine what can be seen: \n\n|**Pathway (Seq 9)**|**Spirit Vision Ability**|\n|---|---|\n|Seer (Fool)|Standard: Ether Body + Astral|\n|Mystery Pryer (Hermit)|**Eyes of Mystery Prying:**See truth, reality, Astral Body|\n|Spectator (Visionary)|Enhanced: Read emotions & thoughts|\n|Sleepless (Darkness)|Limited: Spiritual entities only (no Ether Body analysis)|\n|Corpse Collector (Death)|Passive: See spirits & undead without activation|\n\n##### **D. Reading Spirit Vision** \n**Using Spirit Vision:** Activate by expending 1 SPI (one activation, no per-minute cost to maintain). Make a Perception-based roll to interpret correctly. \n\n|**Roll**|**Effect**|\n|---|---|\n|Success|Identify primary emotion or general health|\n|Success by 3+|Detect specific feelings|\n|Success by 5+|Sense recent events|\n|Critical|Full reading|\n|Failure|Incorrect reading|"
  },
  {
    "id": "gloss_24",
    "term": "3d6",
    "category": "mechanic",
    "definition": "When your character attempts something where failure is interesting — picking a lock, dodging a bullet, lying to a detective — you roll dice to see if you succeed. This book uses three six-sided dice (3d6). You add or subtract modifiers based on how hard the task is and how skilled your character is, then roll. If the total is **equal to or less than your target number**, you succeed."
  },
  {
    "id": "gloss_25",
    "term": "Will",
    "category": "mechanic",
    "definition": "- **Will** = IQ — mental resistance and courage"
  }
];

export const COMBAT_ACTIONS = [
  {
    "id": "action_1",
    "name": "Attack",
    "type": "Maneuver",
    "description": "Attack any foe in reach. Roll your weapon skill. If you hit, they may defend."
  },
  {
    "id": "action_2",
    "name": "All-Out Attack",
    "type": "Maneuver",
    "description": "Attack with a bonus (+4 to hit, or +2 damage, or two attacks). You lose all active defenses until your next turn."
  },
  {
    "id": "action_3",
    "name": "Move",
    "type": "Maneuver",
    "description": "Move your full Basic Move. You may still dodge."
  },
  {
    "id": "action_4",
    "name": "Move and Attack",
    "type": "Maneuver",
    "description": "Move your full Basic Move and attack at a severe penalty (usually -4). You cannot parry or block."
  },
  {
    "id": "action_5",
    "name": "All-Out Defense",
    "type": "Maneuver",
    "description": "Take no offensive action. Gain +2 to one active defense (Dodge, Parry, or Block) or gain two different defenses against a single attack."
  },
  {
    "id": "action_6",
    "name": "Ready",
    "type": "Maneuver",
    "description": "Draw a weapon, reload a gun, open a door, or drink a potion. You may still defend."
  },
  {
    "id": "action_7",
    "name": "Evaluate",
    "type": "Maneuver",
    "description": "Study a foe. Gain +1 to your next attack against them (max +3)."
  },
  {
    "id": "action_8",
    "name": "Concentrate",
    "type": "Maneuver",
    "description": "Focus on a mental task or ritual. If you are hurt or distracted, make a Will-3 roll to maintain concentration."
  }
];

export const CORRUPTION_TIERS = [
  { range: "0 - 34%", label: "Safe / Normal", effect: "Stable mind, standard Beyonder abilities and spirit control." },
  { range: "35 - 49%", label: "First Warning", effect: "Subtle auditory whispers, faint phantom sightings in mirrors, mild temperature drops." },
  { range: "50 - 74%", label: "Dangerous Corruption", effect: "Persistent hallucinations, physical twitches, -1 to all Will rolls to maintain focus." },
  { range: "75 - 99%", label: "Imminent Rampager", effect: "Rapid flesh mutation, intense phantom screams, -3 to Will, at risk of immediate collapse." },
  { range: "100%", label: "Lost Control (Rampager)", effect: "Total loss of human mind. Body mutates into an Eldritch Monster. Irreversible." }
];

export const DIVINATION_METHODS = [
  { name: "Astrology / Horary", desc: "Maps planetary alignments and spirit world echoes to decipher broad fate patterns." },
  { name: "Tarot / Cards", desc: "Draws symbolic cards to query specific situations. Meaning depends heavily on reader's intuition." },
  { name: "Pendulum", desc: "Simple yes/no or direction finding tool using a weighted crystal on a chain." },
  { name: "Scrying (Mirror/Water)", desc: "Staring into a reflective surface to catch visual glimpses of distant or future events." },
  { name: "Dream Divination", desc: "Analyzing symbolic dreams. Highly potent for certain pathways (like Seer or Nightmare)." },
  { name: "Coin Toss", desc: "A quick, binary divination relying on immediate fate. Very fast but lacks nuance." }
];

export const FACTIONS = [
  {
    id: "f1",
    name: "Church of the Evernight Goddess",
    desc: "The dominant religion in the Loen Kingdom. Associated with darkness, tranquility, concealment, and the dead. Their official Beyonders are the Nighthawks."
  },
  {
    id: "f2",
    name: "Church of the Lord of Storms",
    desc: "A powerful church with strong ties to the Royal Navy and Loen military. Associated with the sea, storms, tyranny, and rage. Their official Beyonders are the Mandated Punishers."
  },
  {
    id: "f3",
    name: "Church of the God of Steam and Machinery",
    desc: "The driving force behind the industrial revolution. Associated with technology, knowledge, invention, and alchemy. Their official Beyonders are the Machinery Hivemind."
  },
  {
    id: "f4",
    name: "Secret Order",
    desc: "An ancient, hidden organization heavily tied to the Seer pathway. They operate from the shadows, prioritizing history, divination, and destiny."
  },
  {
    id: "f5",
    name: "Moses Ascetic Order",
    desc: "A reclusive group of scholars and mystics focused on the Mystery Pryer pathway. They seek hidden knowledge and are responsible for many advanced rituals."
  },
  {
    id: "f6",
    name: "Aurora Order",
    desc: "A fanatic, dangerous cult worshiping the True Creator. Associated with the Secrets Supplicant pathway. They are considered highly corrupted terrorists by orthodox churches."
  }
];


export const CORE_RULES_SUMMARY = {
  divinationMethods: [
    { name: "Astrology / Horary", desc: "Maps planetary alignments and spirit world echoes to decipher broad fate patterns." },
    { name: "Tarot / Cards", desc: "Draws symbolic cards to query specific situations. Meaning depends heavily on reader's intuition." },
    { name: "Pendulum", desc: "Simple yes/no or direction finding tool using a weighted crystal on a chain." },
    { name: "Scrying (Mirror/Water)", desc: "Staring into a reflective surface to catch visual glimpses of distant or future events." },
    { name: "Dream Divination", desc: "Analyzing symbolic dreams. Highly potent for certain pathways (like Seer or Nightmare)." },
    { name: "Coin Toss", desc: "A quick, binary divination relying on immediate fate. Very fast but lacks nuance." }
  ],
  diceSystem: "When your character attempts something where failure is interesting — picking a lock, dodging a bullet, lying to a detective — you roll dice to see if you succeed. This book uses three six-sided dice (3d6). You add or subtract modifiers based on how hard the task is and how skilled your character is, then roll. Equal to or under your target number = success.",
  criticalRules: "Rolling a 3 or 4 is a critical success. Rolling a 17 or 18 is a critical failure. A critical success on an attack roll deals double damage."
};

