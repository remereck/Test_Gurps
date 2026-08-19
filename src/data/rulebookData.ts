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
    "id": "gloss_24",
    "term": "3d6",
    "category": "mechanic",
    "definition": "Three six-sided dice rolled together. The standard die roll for all success checks. Add the three numbers for your result (range 3\u201318)."
  },
  {
    "id": "gloss_1",
    "term": "Acting Method",
    "category": "setting",
    "definition": "The practice of embodying your Beyonder potion's 'role' to digest it safely. The more faithfully you act, the faster you digest (see Digestion)."
  },
  {
    "id": "gloss_2",
    "term": "Astral Projection / Astral Body",
    "category": "setting",
    "definition": "The layer of a soul that reveals emotional state. Visible through Spirit Vision."
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
    "definition": "A person who has consumed a potion and gained supernatural abilities along a divine Pathway. Beyonders progress from Sequence 9 (weakest) to Sequence 0 (godlike)."
  },
  {
    "id": "gloss_5",
    "term": "Beyonder Weapon",
    "category": "mechanic",
    "definition": "A weapon imbued with spiritual power (either innately or through a Beyonder's ability) that can damage spirit bodies, incorporeal beings, and spiritually reinforced targets as though it were a Beyonder-level effect. Mundane weapons without this property deal half or no damage to such targets at the GM's discretion."
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
    "definition": "The currency used to build characters. You spend points on attributes, advantages, and skills. Disadvantages give points back. Starting budget: 70 points."
  },
  {
    "id": "gloss_8",
    "term": "CoR",
    "category": "mechanic",
    "definition": "A measure of how close a Beyonder is to losing control. Max CoR = Will score. At max, the character becomes an NPC monster."
  },
  {
    "id": "gloss_9",
    "term": "Critical Success / Failure",
    "category": "mechanic",
    "definition": "Rolling 3\u20134 is always a critical success (brilliant result). Rolling 17\u201318 is always a critical failure (disaster)."
  },
  {
    "id": "gloss_10",
    "term": "Digestion",
    "category": "mechanic",
    "definition": "The process of safely incorporating a potion's power. Tracked as 0% -> 100%. Must be at or near 100% before advancing to the next Sequence."
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
    "definition": "Energy for physical exertion, extra effort, and some supernatural abilities. Recovered by rest. Equal to HT at character creation."
  },
  {
    "id": "gloss_13",
    "term": "Game Master (GM)",
    "category": "setting",
    "definition": "The player who runs the game \u2014 describes the world, plays NPCs, calls for rolls, and keeps the story moving."
  },
  {
    "id": "gloss_14",
    "term": "HP (Hit Points)",
    "category": "mechanic",
    "definition": "Physical damage capacity. Equal to ST at character creation. At 0 HP you are near death; negative HP forces consciousness checks."
  },
  {
    "id": "gloss_15",
    "term": "Loen Kingdom",
    "category": "setting",
    "definition": "See Backlund. The dominant nation of the Fifth Epoch, equivalent to Victorian Britain."
  },
  {
    "id": "gloss_16",
    "term": "Losing Control",
    "category": "setting",
    "definition": "When a Beyonder's CoR reaches their maximum. They transform into a monster or mad creature \u2014 permanently removed from play."
  },
  {
    "id": "gloss_17",
    "term": "Margin of Success / Failure",
    "category": "mechanic",
    "definition": "The difference between your roll and your target number. A bigger margin means a better (or worse) outcome."
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
    "definition": "An alchemical brew that grants Beyonder powers. Must be brewed from specific ingredients, then consumed. Brings side effects and corruption risk."
  },
  {
    "id": "gloss_21",
    "term": "SPI \u2014 Spirituality",
    "category": "mechanic",
    "definition": "A spiritual stat (not a buyable attribute). Measures connection to the spirit world. Fixed at 0 for mortals; increased only by Beyonder potions or supernatural means. Used for Spirit Vision, Ritualistic Magic (as a resource), and Beyonder abilities. Page 156 _Powered by GURPS: Pathways \u2014 Lord of the Mysteries_"
  },
  {
    "id": "gloss_23",
    "term": "Sea of Collective Subconscious",
    "category": "setting",
    "definition": "A shared psychic realm containing the unconscious minds of all sentient beings. Accessible via certain Visionary-pathway abilities (e.g., Psychological Cue). The GM determines effects when a character enters this realm."
  },
  {
    "id": "gloss_20",
    "term": "Sequence",
    "category": "setting",
    "definition": "The numerical rank of a Beyonder's power level. Sequence 9 = newly awakened. Sequence 0 = god-equivalent. Lower numbers are stronger."
  },
  {
    "id": "gloss_22",
    "term": "Spirit Vision",
    "category": "mechanic",
    "definition": "A Beyonder ability that reveals auras, Ether Bodies, Astral Bodies, and supernatural entities. Costs 1 SPI per activation regardless of duration."
  },
  {
    "id": "gloss_25",
    "term": "Will",
    "category": "mechanic",
    "definition": "Mental fortitude and resistance to influence. = IQ at character creation. Used to resist intimidation, mind control, and CoR. _This glossary covers only the terms unique to this book. For full GURPS terminology, refer to the GURPS Basic Set Characters (4th Edition)._ ## **GURPS: VEILED EPOCH**"
  }
];

export const CORE_RULES_SUMMARY = {
  diceSystem: "GURPS 3d6 Roll-Under: Roll 3 six-sided dice. If Total <= Effective Skill/Attribute, the action succeeds. Margin of Success = Target - Roll.",
  criticalRules: "Critical Success: Roll of 3 or 4 (always), 5 (if skill >= 15), 6 (if skill >= 16). Critical Failure: Roll of 18 (always), 17 (if skill <= 15).",
  currency: {
    pound: "1 Pound (£) = 20 Soli = 240 Pence",
    soli: "1 Soli (s) = 12 Pence",
    pence: "1 Penny / Pence (d) = Base Copper Coin"
  },
  corruptionTiers: [
    { range: "0 - 34%", label: "Safe / Normal", effect: "Stable mind, standard Beyonder abilities and spirit control." },
    { range: "35 - 49%", label: "First Warning", effect: "Subtle auditory whispers, faint phantom sightings in mirrors, mild temperature drops." },
    { range: "50 - 74%", label: "Dangerous Corruption", effect: "Persistent hallucinations, physical twitches, -1 to all Will rolls to maintain focus." },
    { range: "75 - 99%", label: "Imminent Rampager", effect: "Rapid flesh mutation, intense phantom screams, -3 to Will, at risk of immediate collapse." },
    { range: "100%", label: "Lost Control (Rampager)", effect: "Total loss of human mind. Body mutates into an Eldritch Monster. Irreversible." }
  ],
  divinationMethods: [
    { name: "Astrology / Horary", desc: "Maps planetary alignments and spirit world echoes to decipher broad fate patterns." },
    { name: "Spirit Pendulum (Dowsing)", desc: "Uses a crystal or topaz pendulum over a map/object. Clockwise = Yes, Counter-Clockwise = No." },
    { name: "Dream Divination", desc: "Enter Cogitation or sleep while holding a divination statement; spirit reveals symbolic revelations." },
    { name: "Coin Tossing", desc: "Quick binary divination on simple immediate choices with high spirituality." },
    { name: "Tarot Divination", desc: "Reveals complex archetypal pathways and warns of hidden dangers." }
  ]
};
