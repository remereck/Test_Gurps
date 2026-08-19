export const part2 = `
<div id="ch5"></div>

### **Chapter 5: Combat — Violence in the Fog** 

_"Gunfights in Backlund's alleys are brief and brutal. A revolver shot at close range ends arguments permanently. Beyonders fight differently — with inhuman speed, supernatural senses, and abilities that make conventional tactics useless. Learn to fight, or learn to run."_ 

##### **Initiative and Turn Order** 

Combat is simultaneous in fiction but sequential in play. Turn order is determined at the start of each combat and stays fixed for the entire fight unless a character's Basic Speed changes (from injury or supernatural effects). 

|**Priority**|**Rule**|
|---|---|
|1st|Highest Basic Speed acts first.|
|Tie|Highest DX breaks the tie.|
|Still tied|Roll 1d6 — higher result goes first. Stays fixed for the fight.|
|Surprise|Surprised characters skip their first turn entirely and cannot defend on it.|

**Basic Speed reminder:** Basic Speed = (HT + DX) / 4. At starting attributes of 9, all characters begin at Basic Speed 4.50. Raising DX or HT raises your speed. Combat Reflexes does not raise Basic Speed but grants a +1 to all active defenses and prevents freezing on surprise — a strong pick for any fighter. 

##### **The Combat Round** 

Each combat round represents approximately 1 second. On your turn, you choose one **maneuver** . When attacked, you may attempt one or more **active defenses** . 

##### **Maneuvers (Choose One Per Turn)** 

|**Maneuver**|**Movement**|**Description**|
|---|---|---|
|Move|Full Move|Move up to your full Basic Move in meters. May face any direction.|
|Ready|Step|Reload a weapon, draw an item, drink a vial, or prepare equipment.|
|Aim (Ranged)|Step|Add weapon's ACC to your next ranged Attack. +1 per additional Aim (max ACC+2). Canceled by any Active Defense or injury.|
|Do Nothing|None|If Stunned: -4 to Active Defense. Otherwise rest to recover FP.|
|Concentrate|Step*|Channel powers or skills requiring focus. Roll Will-3 if injured or defending.|
|Wait|—|Define a trigger; if it occurs, perform your chosen maneuver immediately.|
|Regular Attack|Step|Make one melee or ranged attack. Step 1 meter before or after.|
|All-Out Attack (Determined)|Step|Pay 2 FP. +4 to hit melee, +1 to hit ranged. Cannot defend next turn.|
|All-Out Attack (Strong)|Step|Pay 2 FP. +2 to damage. Cannot defend next turn.|
|All-Out Attack (Double)|Step|Pay 2 FP. Two separate attacks (roll twice). Cannot defend next turn.|
|Charge Attack|Full Move|Move full distance, then attack. -4 to hit. Cannot defend next turn.|
|All-Out Defense (Increased)|Step|Pay 2 FP. +2 to one active defense until next turn. Cannot attack.|
|All-Out Defense (Double)|Step|Pay 2 FP. Use two different defenses vs. one attack. Cannot attack.|
|Feint|Step|Roll a Quick Contest of your Melee skill vs. opponent's Melee, Cloak, Shield, or DX. If you succeed (or succeed by more), subtract your margin of success/victory from their active defense on your next Attack, All-Out Attack, or Move and Attack this turn.|

###### **Extra Effort Options (Costs FP)** 

- **[Free Action]** [Giant Step] Pay 1 FP: Take an extra step before or after attack 
- **[Free Action]** [Strong Blow] Pay 1 FP: +2 damage. Regular melee attacks only. 
- **[Free Action]** [Heroic Charge] Pay 2 FP: Ignore Charge Attack penalties (-4 to hit) 
- **[Free Action]** [Feverish Defense — Variant Rule] Pay 1 FP: +2 to one defense roll. Cannot defend next turn. 

##### **Attack Options** 

Unlike full maneuvers (which define your entire action for a turn), **Attack Options** are modifiers you can apply _to an attack_ within an Attack, All-Out Attack, or Move and Attack maneuver. You may combine multiple attack options on the same attack. 

- **Rapid Strike:** Split a melee Attack maneuver into _two_ separate attacks against the same or different targets. Both attacks suffer -6 to skill. Additional rapid strikes in the same maneuver stack the penalty. 
- **Deceptive Attack:** Take a -2 penalty to your melee attack roll for every -1 you wish to impose on the target's active defense against that attack. Maximum penalty is half your skill (rounded down). Can be combined with Rapid Strike (apply to each attack separately). 

##### **Active Defenses** 

When you know you are being attacked, you may attempt one active defense (unless you took an All-Out Attack maneuver). Each type may be used multiple times per round, but Parry accumulates a -4 cumulative penalty after the first (-2 for fencing weapons). 

**Free Actions:** Retreat, Acrobatic Dodge, and Dive! are **free actions** — they do not cost your maneuver and can be taken alongside any active defense. Each can be used once per round unless stated otherwise. 

|**Defense**|**Formula**|**Notes**|
|---|---|---|
|Dodge|Basic Speed (drop fractions) + 3|Universal; no weapon required. May be used repeatedly.|
|Parry (Armed)|Weapon Skill ÷ 2 + 3|Weapon must be ready. Cumulative -4 per additional parry (-2 fencing, -1 rapier).|
|Parry (Unarmed)|Brawling or DX ÷ 2 + 3|Brawling parries weapons at -3. Boxing uses Boxing ÷ 2 + 3 and ignores that penalty. Cannot parry ranged attacks.|
|Block|Shield Skill ÷ 2 + 3|Once per round. Add shield's DB to your Block score.|

###### **Defense Modifiers** 

- Attacked from side: -2 to defense 
- Attacked from rear: -4 to defense 
- **[Free Action]** [Retreat] Step back 1 hex: +3 Dodge / +1 Block / +1 Parry vs. 1 melee attack per round 
- **[Free Action]** [Acrobatic Dodge] Roll vs. Acrobatics: success gives +2 Dodge; failure gives -2 Dodge. Stacks with Retreat. 
- **[Free Action]** [Dive!] +3 Dodge vs. ranged only. Spend 1 turn getting back up (Change Posture). 

###### **Shields** 

Shields are uncommon in Backlund's streets, but surface in the hands of riot police, Nighthawk patrols, and prepared adventurers. A shield must be Readied (one turn) to provide its benefits. While Readied, its **DB** (Defense Bonus) adds to all active defenses (Dodge, Parry, and Block) against attacks from the front or shield side. Cover DR represents how much damage the shield itself absorbs when struck — if damage exceeds Cover DR, the remainder passes through to the blocking arm (treat as arm hit) or the torso if using the shield for cover (treat as torso hit). 

|**Shield Type**|**DB**|**Cover DR**|**HP**|**Weight**|**Cost**|**Notes**|
|---|---|---|---|---|---|---|
|Light (buckler, target)|+1|3|15|2 kg|£2|Worn on forearm; frees hand; -1 to Block vs. ranged|
|Medium (round, heater)|+2|5|20|5 kg|£5|Standard shield; common among watchmen and soldiers|
|Heavy (tower, riot)|+3|7|30|10 kg|£8|Full body cover when crouching; Move -1 while Readied|
|Improvised (lid, crate side)|+1|2|12|varies|—|-2 to Block; Shatters on damage exceeding Cover DR|

- **Breaking a shield:** Once Cover DR is exceeded, any excess damage reduces the shield's HP. At 0 HP the shield is destroyed. A shield can be targeted directly (size penalty -5 for light, -4 for medium, -3 for heavy). 
- **Shield as cover:** A Readied shield can be used to block a doorway or arrow slit on your turn. Treat it as having Cover DR equal to its listed value × 1.5 for this purpose. HP remains the same. 
- **Shield Bash:** Use the shield as an improvised weapon: damage = thr-2 cr for light, thr-1 cr for medium, thr cr for heavy. Skill defaults to Shield/DX or Brawling-2. 

###### **Melee Skills: Brawling, Boxing & Wrestling** 

###### **Brawling (DX/Easy)** 

Brawling covers untrained street fighting — punches, kicks, elbows, knees, headbutts, and shoves. Default: DX-2 if untrained. All Brawling attacks use **Thrust (thr)** damage. Parry: Either hand at (Brawling ÷ 2 + 3). Innately ambidextrous for parrying — no penalty for using either hand. 

|**Attack**|**Roll**|**Damage**|**Notes**|
|---|---|---|---|
|Punch|Brawling|thr-1 cr|Most common attack|
|Kick|Brawling-2|thr cr|Longer reach, slower|
|Elbow|Brawling-2|thr-2 cr|Close range, quick|
|Knee|Brawling-2|thr-1 cr|Close range, quick|
|Headbutt|Brawling-3|thr-2 cr|Close range, risky|
|Shove|Brawling-2|Special|Knock down: target rolls DX or fall|

###### **Boxing (DX/Average)** 

Boxing is trained fisticuffs with proper technique — jabs, crosses, hooks, and uppercuts. Boxers can parry attacks with their hands: **Parry = Boxing ÷ 2 + 3** . Unlike Brawling, Boxing parries weapons without penalty. **Damage Bonus:** +1 to all Boxing attacks at DX+1; +2 at DX+2 (max +2 without Trained by a Master). 

|**Attack**|**Roll**|**Damage**|**Notes**|
|---|---|---|---|
|Jab|Boxing|thr cr|Quick, leading hand|
|Cross|Boxing|thr+1 cr|Power shot, rear hand|
|Hook|Boxing-1|thr+1 cr|Side attack, arcs around guard|
|Uppercut|Boxing-2|thr+2 cr|Upward strike, vulnerable to counter|

###### **Wrestling (DX/Average)** 

Wrestling covers grappling, takedowns, pins, and escapes. Wrestlers can parry melee attacks with their hands at -3 to skill: **Parry = (Wrestling-3) ÷ 2 + 3** . All grappling rolls are Quick Contests of DX or Wrestling. **Grappling ST Bonus:** For grappling only (not strikes), add +1 ST at DX+1, +2 ST at DX+2 (max +2 without Wrestling Master advantage). Applies to grapples, break free, takedowns, pins, and chokes. 

|**Maneuver**|**Roll**|**Opposed Roll**|**Notes**|
|---|---|---|---|
|Grapple|Wrestling|DX or Escape|Initiate grapple; both roll DX|
|Takedown|Wrestling-1|DX or Wrestling|Knock down; target falls prone|
|Pin|Wrestling-2|DX or Wrestling|Immobilize; target cannot act|
|Escape|Escape-2|DX or Wrestling|Break free from grapple or pin|

###### **Summary: Melee Skill Comparison** 

|**Skill**|**Damage Bonus**|**Parry Formula**|**Special Notes**|
|---|---|---|---|
|Brawling (DX/E)|None (thr only)|Brawling/2 + 3|Default DX-2; innately ambidextrous for parrying|
|Boxing (DX/A)|+1 at DX+1, +2 at DX+2|Boxing/2 + 3|Default DX-5; trained fisticuffs; parries weapons without penalty|
|Wrestling (DX/A)|None (grapple only)|(Wrestling-3)/2 + 3|No default; ST bonus for grappling; parry at -3|

###### **Beyonder Weapons** 

**Beyonder Weapons** are weapons that have been augmented by Beyonder means or have Beyonder characteristics embedded in them. This includes: a spirit channel's power manifesting as a weapon, a sealed artifact in weapon form, a mundane weapon reinforced by ritual or spirituality, and any weapon conjured by a Beyonder ability. 

Some Beyonder weapons deal **spiritual damage** alongside physical damage — they can harm spirits, incorporeal beings, and targets with physical DR as though it were a Beyonder-level effect. Others enhance only physical properties (sharper edge, more durable, faster swing). The specific effect is determined by the weapon's nature and the GM. Mundane weapons without Beyonder properties deal **half damage** to spiritually reinforced targets (such as higher-Sequence Beyonders with active spiritual defenses) and **no damage** to incorporeal spirits, ghostly entities, or beings that exist primarily in the Spirit World. 

##### **Ranged Combat** 

Shooting works like melee — roll 3d6 against your Guns skill — but distance, visibility, and movement impose penalties that make accurate fire genuinely difficult. The setting runs on TL5+1 weapons: revolvers, rifles, and early semi-automatics. A hit at close range from a revolver is lethal for ordinary mortals. 

###### **Range Penalties** 

|**Distance to Target**|**Penalty**|
|---|---|
|Up to 2 meters (close — arm's reach)|+0|
|3–5 meters (short)|-1|
|6–10 meters|-2|
|11–20 meters|-3|
|21–50 meters|-4|
|51–100 meters|-5|
|100+ meters|-6 or worse (GM discretion)|

###### **Other Ranged Modifiers** 

|**Condition**|**Modifier**|
|---|---|
|Target is stationary|+0|
|Target walking (up to 3 meters/sec)|-1|
|Target running (4+ meters/sec)|-2|
|Shooter moved this turn|-2|
|Shooter used Aim last turn|+ weapon's Acc (see weapon table)|
|Shooter used Aim for 3+ turns|+ weapon's Acc +2 (max Acc +2 total)|
|Target is prone|-2 ranged (but -4 in melee)|
|Darkness or heavy fog|-3 to -9 depending on severity|
|Target has cover (half body)|-2 to hit, +2 DR on covered areas|

**Dodging ranged attacks:** You may Dodge normally. If you did not know the shot was coming (no visible wind-up, fired from concealment), you cannot defend at all — the bullet arrives before you can react. This is why Danger Sense and Spiritual Intuition are valuable. 

**Guns and reloading:** Most revolvers hold 5–6 shots. Rifles hold 1 (single-shot) to 5–10 (magazine). Reloading takes one Ready maneuver per round for revolvers (speed-loaders halve this). Running out of ammunition mid-fight is a real tactical concern. 

##### **Consciousness and Survival** 

**At 0 HP:** You risk unconsciousness. You must roll against HT every turn to stay awake. 

**At -1×HP:** You are in a mortal wound state. You must roll against HT to stay alive. If you are unconscious, you get one chance to wake up after 12 hours; failure means you are effectively in a coma, requiring external medical stabilization or repeated HT rolls every 12 hours to avoid death. 

**Multiple Death Rolls:** You must make a separate survival roll for each additional multiple of your total HP that you drop below zero (e.g., at -2×, -3×, and -4× HP). 

**Cumulative Rolls:** If a single attack deals enough damage to cross multiple thresholds (e.g., dropping you from 0 to -3× HP in one hit), you must roll for each threshold passed. 

**Automatic Death:** If you reach -5× HP, you die instantly with no roll. At -10× HP, your body is destroyed beyond recognition, often nullifying resurrection options. 

|**HP Level**|**Effect**|
|---|---|
|1/3 HP remaining|Reeling: -1 to all rolls|
|0 HP|You risk unconsciousness; roll against HT every turn to stay awake|
|-1×HP|Mortal wound state; roll against HT to stay alive. If unconscious: one chance to wake after 12 hours; failure = coma (external stabilization or HT rolls every 12 hours to avoid death)|
|-2× to -4×HP|One survival roll per additional multiple of total HP dropped below zero|
|-5×HP|Automatic death — no roll required|
|-10×HP|Body destroyed beyond recognition; resurrection often nullified|

###### **Spirit Body Damage** 

Some Beyonder abilities and supernatural effects deal damage directly to the spirit body rather than the physical body. Spirit body damage bypasses physical Damage Resistance (DR) entirely — but the **target chooses how to absorb it** . 

###### **Choosing a Pool:** 

- When an effect deals spirit body damage, the target chooses which of three pools it reduces: **HP** , **FP** , or **SPI** . 
- Choose **before** the damage is rolled. 
- One pool per instance — you cannot split a single hit across multiple pools. 
- You **may** choose a pool already at 0 (risking death, unconsciousness, or Soul Debt). 

###### **Damage Application:** 

- Wounding multipliers apply normally to the chosen pool (Cut ×1.5, Imp ×2, etc.). Damage-type multipliers (e.g. skull ×4, vitals ×3) stack with wounding multipliers when applied to HP. 
- Physical DR does not protect against spirit body damage. 
- Spiritual DR (if any) does apply, but is extremely rare. 

###### **Threshold Penalties by Pool:** 

- **HP** ≤ **0:** Standard GURPS death/dying rules. 
- **FP below 0:** -1 to **all** rolls per 1 FP below 0. If FP drops below -1×MaxFP, you fall unconscious. 
- **SPI** ≤ **1/3 Max:** Spiritual Attrition — -3 to all SPI-based skill rolls and Beyonder ability checks. 
- **SPI = 0:** Spiritual Exhaustion — all Beyonder abilities deactivate; Spirit Vision shuts off. 
- **SPI below 0:** Soul Debt — +1 CoR per 1 point below 0. 

**Damage Expression:** Spirit body damage is given either as: 

- **Flat dice:** e.g. "2d6-3 to spirit body" — roll damage, then choose a pool and subtract from it. 
- **Weapon-based:** e.g. "thrust at ST-2" — calculate the wielder's thrust damage, reduce by the penalty, then apply to the chosen pool. 

**Recovery** follows each pool's normal rate: 

- HP → natural healing, First Aid, magic. 
- FP → 1 per 10 minutes of rest; sleep restores all FP. 
- SPI → 1 per hour of rest (see Spirituality Recovery, Chapter 4). 
- CoR from Soul Debt are permanent and require special rituals (Chapter 6) to remove. 

**Non-Beyonders (SPI 0):** Can only choose HP or FP — they have no spirituality to sacrifice. 

###### **Optional — Hit Locations** 

When attacking, you may call a specific body part before rolling. Take the listed penalty to your attack roll. On a hit, the wounding modifier is applied to penetrating damage (stacks with the damage-type multiplier). 

|**Target**|**Penalty**|**×**|**Special Effect on Hit**|
|---|---|---|---|
|Torso|+0|×1|Default location. No special effect.|
|Arm|-2|×1|Drop held item if damage >= 3; crippled at > ½ HP of limb (~ HP/3)|
|Leg|-2|×1|Knock prone if damage >= 3; crippled at > ½ HP of limb (~ HP/3)|
|Hand|-4|×1|Drop held item; crippled easily (> HP/6)|
|Neck|-5|Cr ×1.5 / Cut ×2 / Imp ×2|Knockdown roll at -5; choke possible if damage > HP/2|
|Face|-5|×1|Knockdown at -5; risk of blindness or disfigurement|
|Skull|-7|×4|Knockdown at -10; DR 2 (skull bone, stacks with helmet)|
|Vitals|-3|×3 (imp/pi only)|Extra shock (adds +1 turn to stun duration); bleeding risk|
|Eye|-9|×4|Blind at > HP/10; bypasses head DR (not eye protection)|

**Crippling:** A limb or extremity struck for more than ½ its HP is crippled — unusable until healed. Arm/leg crippling: drop held items or reduce Move to 1. Recovers when the limb returns to positive HP. First Aid (skill 12+) removes permanent damage risk. 

###### **Optional — Wounding Multipliers** 

Damage type determines the multiplier applied to damage that gets through DR: 

|**Damage Type**|**×**|**Examples**|
|---|---|---|
|Crushing|×1|Fists, clubs, maces, falling|
|Cutting|×1.5|Swords, axes, claws, fangs|
|Impaling|×2|Spears, arrows, rapiers, fangs|
|Piercing (small)|×0.5|Daggers, small-calibre pistols|
|Piercing|×1|Revolvers, rifles|
|Large Piercing|×1.5|Hunting rifles, anti-material weapons|
|Burning|×1|Fire, flame spells, lasers|
|Toxic|×1|Poison (ignores DR)|

Hit location wounding multipliers stack with damage-type multipliers. Example: a cutting hit to the Neck (Cut ×2) with a sword (Cut ×1.5) applies ×3 total to penetrating damage. 

###### **Optional — Major Wound Threshold** 

Any single attack that deals more than **half your HP** (round up) counts as a Major Wound. Make an immediate **HT roll** : 

|**Result**|**Effect**|
|---|---|
|Success|-4 to all rolls for 1 turn from shock and pain|
|Failure|Stunned for 1d6 seconds (roll HT each turn to recover early)|
|Fail by 5+|Knocked down and unconscious for 1d hours|

This adds drama to big hits without multiplying damage. At HP 9, a single 5-damage strike triggers a Major Wound — dangerous but survivable. 

##### **Healing & Recovery** 

HP and FP recover at different rates. Neither comes back instantly. Pushing yourself when depleted is dangerous — FP loss bleeds into HP once you hit zero FP, and a character at low HP who keeps acting risks going unconscious mid-scene. 

###### **Fatigue Points (FP)** 

FP are used by All-Out maneuvers, Extra Effort, and rituals. They recover quickly compared to HP. 

|**Method**|**FP Recovered**|**Time Required**|
|---|---|---|
|Rest (sitting, no strenuous activity)|1 FP|Per 10 minutes|
|Sleep|All FP|8 hours|
|At 0 FP|Every point of FP spent below 0 also costs 1 HP|Immediate|
|At 1/3 FP or below|-1 to all rolls; Move and Dodge halved|Until above threshold|

**Hit Points (HP)** 

HP are restored through three distinct mechanisms: natural recovery, external healing, and regeneration. Each follows different rules and time scales. 

|**Method**|**HP Recovered**|**Time Required / Notes**|
|---|---|---|
|Natural Recovery (HT roll success)|1 HP (2 HP w/ Very Rapid Healing)|Per day; rest & food required|
|Natural Recovery (20–29 HP)|2× base rate|Per day; scales proportionally|
|Natural Recovery (30–39 HP)|3× base rate|Per day; scales proportionally|
|First Aid|1 HP + stops bleeding|1 minute; once per wound|
|Physician (skill 12+)|1 HP (2 HP on critical success)|Per day of bed rest; requires equipment|
|Healing advantage|2 HP (costs 1 FP)|Concentration + IQ roll|

Natural Recovery does not normally restore FP unless specific modifiers or high-level supernatural abilities are applied. 

###### **Regeneration** 

Regeneration is a passive advantage that automatically restores HP without rolls or active intervention. The rate depends on the level purchased: 

|**Regeneration Level**|**Rate**|
|---|---|
|Slow|1 HP per 12 hours|
|Regular|1 HP per hour|
|Fast|1 HP per minute|
|Very Fast|1 HP per second|
|Extreme|10 HP per second|

Like Natural Recovery, standard Regeneration restores **HP only** , though modifiers such as **Heals FP Only** or **Restores Either FP or HP** can change this. Regeneration includes **Rapid Healing** benefits but operates independently of the daily HT roll used for Natural Recovery. 

At 0 HP or below, a character with any level of Regeneration still makes HT rolls to avoid unconsciousness — but each tick of Regeneration may lift them above the threshold before they fail. 

##### **Fright Checks** 

When characters witness supernatural phenomena, they must make a **Fright Check** : roll 3d6 vs. Will with the modifier listed below. Add the result to any margin of failure to determine the effect from the Fright Effects table. 

|**Trigger**|**Will Modifier**|
|---|---|
|Minor supernatural event (strange sounds, moved objects)|+2|
|Beyonder using powers (visible supernatural ability)|+0|
|Encountering a Seq 9 equivalent monster|-2|
|Encountering a Seq 8 equivalent monster|-3|
|Encountering a Seq 7 equivalent monster|-4|
|Encountering a Seq 6 equivalent monster|-5|
|Encountering a Seq 5 equivalent monster|-6|
|Encountering a Seq 4 equivalent monster (Saint)|-7|
|Encountering a Seq 3 equivalent monster (Saint)|-8|
|Encountering a Seq 2 equivalent monster (Angel)|-10|
|Encountering a Seq 1 equivalent monster (Angel)|-12|
|Encountering a Seq 0 equivalent (God)|-15|
|Outer God influence or manifestation|-20 or worse|
|Frightening situations with no Beyonder influence|GM discretion|

###### **Fright / Awe / Confusion — Effects Table** 

When a Fright Check (or equivalent Awe/Confusion check) is failed, roll **3d6 + margin of failure** and consult the table. Which column applies depends on the trigger: 

- **Fright** — terrifying or grotesque supernatural phenomena (horrors, violence, corruption). 
- **Awe** — overwhelming divine or profound beauty/truth (angelic presence, revelations). 
- **Confusion** — incomprehensible or paradoxical stimuli (time loops, non-Euclidean spaces, abstract information overload). 

All three use the same roll; only the effects differ. 

|**Roll**|**Fright**|**Awe**|**Confusion**|
|---|---|---|---|
|4–9|Stunned 1 sec; roll vs. Will each sec to recover.|Stunned 1 sec; roll vs. Will each sec to recover.|Stunned 1 sec; roll vs. IQ each sec to recover.|
|10–11|Stunned 1d–2d sec; roll vs. Will to recover.|Stunned 1d–2d sec; roll vs. Will to recover.|Stunned 1d–2d sec; roll vs. IQ to recover.|
|12|Retching for (25−HT) sec; roll vs. Will to recover.|Ecstasy for (25−Will) sec; roll vs. Will to recover.|Dazed for (25−IQ) sec; roll vs. IQ to recover.|
|13–15|Acquire a**quirk**: mild phobia or superstition.|Acquire a**quirk**: fascination or devotion to the trigger.|Acquire a**quirk**: persistent confusion or memory tic.|
|16–21|New−10 pt disadvantage: Delusion, Phobia, or Cowardice.|New−10 pt disadvantage: Fanaticism, Vow (worship), or Truthfulness.|New−10 pt disadvantage: Indecisive, Confused, or Short Attention Span.|
|22–23|New−15 pt disadvantage: Severe Phobia or Paranoia.|New−15 pt disadvantage: Extreme Fanaticism or self-sacrificing Vow.|New−15 pt disadvantage: Dementia (age-related confusion) or Deep Sleeper.|
|24–29|Major physical trauma: hair turns white, age 3d6 years, or lose 1 HT permanently.|Physical marking: faint glow, stigmata, or lose 1 HT from rapture.|Brain fog: lose 1 IQ permanently; -2 to all skill rolls for 1d6 days.|
|30–34|Catatonia or coma for 1d6 days; lose 1d6 FP permanently.|Stupor of wonder for 1d6 days; lose touch with mundane reality.|Fugue state for 1d6 days; cannot form new memories during episodes.|
|35+|Permanent loss of−1 IQ and−1 Will from sheer horror.|Permanent loss of−1 IQ and−1 Per from overwhelming awe.|Permanent loss of−1 IQ and−1 DX from fractured cognition.|

##### **Spirit Vision — A Complete Guide** 

The spirit sees what the eye cannot. Through Spirit Vision, Beyonders perceive the auras of life — colors of emotion, threads of health, darkness of corruption. Activate by expending 1 SPI. 

##### **A. Astral Projection Colors** 

The Astral Projection lies beneath the Ether Body and reveals emotional state: 

|**Color**|**Meaning**|
|---|---|
|Red|Passion, excitement, anger|
|Orange|Warmth, satisfaction|
|Yellow|Happiness, extroversion|
|Green|Calm, peace, balance|
|Blue|Coldness, stillness, logic|
|White|Brightness, ambition|
|Dark|Worry, sorrow, fear|
|Purple|Spirituality, madness|

##### **B. Ether Body Colors** 

The Ether Body is the outermost layer — shows physical health: 

|**Body Region**|**Color**|
|---|---|
|Limbs active|Red|
|Brain|Purple|
|Waste systems|Orange|
|Digestion|Yellow|
|Heart/reg|Green|
|Nerves|Blue|
|Healthy|White|
|Ill|Dark/Thin|

A balanced body appears **white** . Darkness or thinning indicates illness. 

##### **C. Pathway Differences** 

Not all Beyonders perceive equally. Pathway and Sequence determine what can be seen: 

|**Pathway (Seq 9)**|**Spirit Vision Ability**|
|---|---|
|Seer (Fool)|Standard: Ether Body + Astral|
|Mystery Pryer (Hermit)|**Eyes of Mystery Prying:**See truth, reality, Astral Body|
|Spectator (Visionary)|Enhanced: Read emotions & thoughts|
|Sleepless (Darkness)|Limited: Spiritual entities only (no Ether Body analysis)|
|Corpse Collector (Death)|Passive: See spirits & undead without activation|

##### **D. Reading Spirit Vision** 

**Using Spirit Vision:** Activate by expending 1 SPI (one activation, no per-minute cost to maintain). Make a Perception-based roll to interpret correctly. 

|**Roll**|**Effect**|
|---|---|
|Success|Identify primary emotion or general health|
|Success by 3+|Detect specific feelings|
|Success by 5+|Sense recent events|
|Critical|Full reading|
|Failure|Incorrect reading|

**Special Forms:** Ether Body Awareness (Seer), **Eyes of Mystery Prying** (Mystery Pryer), Enhanced Emotions (Spectator), Limited Form (Sleepless), Passive Spirit Vision (Corpse Collector). 

<div id="ch6"></div>

### **Chapter 6: The Beyonder System** 

_"Every pathway leads somewhere. Every potion costs something. The question is never whether you will change — only whether you will remain yourself when you do."_ 

##### **What Is a Beyonder?** 

There are multiple Pathways for Beyonders to take, all starting from Sequence 9. Beyonders gain power from specific potions or boons, but must endure the side effects — paranoia, hallucinations, altered perception — that ensue upon consuming or being bestowed with them. There is always a chance they will succumb to these side effects and lose control, becoming monsters themselves. In cases where Beyonders grow very old or sustain serious injury, using their abilities risks triggering that same loss of control. 

**[!] Starting as a Beyonder: If the players begin the game as Beyonders, roll 4d20 for Digestion at the start of the game. The result is the character's starting Digestion percentage toward their current potion. Beyonders who awaken during play instead begin at 0%.** 

##### **The Digestion System** 

After consuming a potion, a Beyonder must _digest_ it — safely incorporating its power over time. Digestion is tracked as a percentage from 0% to 100%. The primary method is the **Acting Method** : the Beyonder engrosses themselves in the 'role' of the potion, embodying its nature deeply and consistently. Most Beyonders must wait years between potions to minimise the risk of losing control. From **Sequence 5 onward** , advancement also requires a ritual in addition to the potion — without it, the likelihood of losing control becomes near-certain. 

|**Acting Quality**|**Digestion Gain Per Session**|
|---|---|
|Exemplary (fully embodies pathway nature)|+15–20%|
|Good (follows most requirements)|+10–15%|
|Adequate (follows some requirements)|+5–10%|
|Poor (barely follows pathway)|+0–5%|
|None (ignores pathway nature entirely)|0% or loses progress|

**Character Point Investment:** A Beyonder may spend earned character points to accelerate digestion at a rate of **1 character point = 1% digestion progress** . This represents the Beyonder using experience and insight to better understand their potion's nature. Digestion progress does **not** decay; once gained, it is permanent. 

##### **CoR — Corruption** 

**CoR** measures how close a Beyonder is to losing their humanity and sanity. Maximum CoR equals the character's Will score. Reaching maximum CoR means the character becomes an NPC monster or irreversibly mad Beyonder — removed from play. 

|**Action**|**CoR Gained**|
|---|---|
|Using powers while drained of Spirituality|1 CoR per use|
|Seeing or Hearing things you're not supposed to|1–3 CoR per session|
|Witnessing higher-Sequence powers (Seq 6 or above)|1–4 CoR|
|Using forbidden rituals|2–5 CoR|
|Advancing sequence without full digestion|10+ CoR|
|Ritual magic critical failure|1d CoR|

**[!] At maximum CoR: The character is permanently lost. The GM takes full control. The other characters now have a new enemy.** 

##### **Potion Consumption Roll** 

When a Beyonder drinks a potion to advance to the next Sequence, they must make a **Potion Consumption Roll (PCR)** . This is a raw 3d6 roll — no stat or skill applies. Only the drinker's digestion of their current potion matters. 

###### **Roll 3d6 <= 10 + Digestion Modifier.** 

The Digestion Modifier depends on how fully the current potion has been digested: 

|**Digestion of Current Potion**|**Modifier**|**Effective Target**|
|---|---|---|
|0%|-9|1 — always fails|
|10%|-7|3|
|20%|-5|5|
|30%|-4|6|
|40%|-2|8|
|50%|0|10 — even odds|
|60%|+2|12|
|70%|+4|14|
|80%|+5|15|
|90%|+7|17|
|100%|+9|19 — always succeeds|

###### **Results:** 
- **Success:** The potion integrates. The Beyonder gains the new Sequence's abilities. 
- **Failure:** The potion overwhelms the drinker. The character is lost — they transform into an NPC **Rampager** (see below) immediately, permanently under the GM's control. 

From **Sequence 5 onward** , advancement also requires a preparation ritual before the potion can be consumed at all. The ritual does not modify the PCR — it is a prerequisite to even attempt it. 

##### **Advancing to the Next Sequence** 

To advance from Sequence 9 to Sequence 8 (and so on), a character must: 
- Obtain the formula for the next-sequence potion (rare, expensive, or dangerous to acquire) 
- Gather the required ingredients (some are supernatural or illegal) 
- Brew the potion or obtain it from another Beyonder 
- Drink it and make a **Potion Consumption Roll** (see above) 
- From Sequence 5 onward: also perform a prerequisite ritual before attempting the PCR 

**GM Note:** Beyonder advancement beyond Sequence 7 should be rare and tied to major story achievements. Each advance represents a fundamental transformation of the character's nature, not merely a power upgrade. 

##### **Rampager — Losing Control** 

No matter the pathway, the higher the Sequence, the greater the insanity and inhuman inclinations that accumulate. Losing control is not solely linked to the potion's effects — it is also intricately connected to a Beyonder's emotions and mental health. The key lies in self-control: resisting the temptations of evil gods and devils, suppressing greed and jealousy, and guarding against the erosion of desire. 

Losing control progresses through three stages: 

|**Stage**|**Description**|
|---|---|
|Stage 1 — Warning Signs|Auditory and visual hallucinations begin. The Beyonder may dismiss them as exhaustion or stress.|
|Stage 2 — Loss of Control|The body and mind are partially out of control. The Beyonder periodically displays terrifying or strange states they cannot fully explain or suppress.|
|Stage 3 — Rampager|Complete breakdown. The Beyonder transforms into a terrifying monster. The transition from Stage 2 to Stage 3 can happen rapidly — sometimes within moments of the symptoms appearing.|

##### **Beyonders in Society** 

###### **Ordinary People** 
The existence of Beyonders is unknown to most people. Mystical knowledge available to the public is limited to basic Ritualistic Magic and some Ritualistic Magic involving the Orthodox Deities — both of which can be learned at Divination Clubs or through public magazines. The authorities (churches, police, royal family) actively prevent ordinary civilians from becoming involved in Beyonder matters. However, those who discover the truth and become inadvertently involved may be offered a position as civilian staff at the local church — or an opportunity to take a potion and serve as an official Beyonder themselves. 

###### **Official Beyonders** 
Official Beyonders are those who operate under the sanction of a church or other recognized organisation. They may have climbed through the ranks or been approached after encountering Beyonder elements. For most church-affiliated police branches, these individuals investigate and dispatch responses to Beyonder incidents. Their work is well-compensated and carries institutional protection — but also obligation. 

###### **Wild Beyonders** 
Those who become Beyonders without church sanction are called **Wild Beyonders** . They must remain hidden to avoid capture. Many take occupations that benefit from their pathway — a Hunter working as a bounty hunter, a Spectator as a detective — but being too effective attracts unwanted attention. Wild Beyonders face two major obstacles: **luck** and **money** . Luck is required to find the correct formula and ingredients; money to purchase them. Without institutional support, most wild Beyonders are stuck at low sequences indefinitely. 

##### **Mystical Items & Sealed Artifacts** 

Mystical items are extraordinary objects combined with Beyonder characteristics or ritual power. Some are dangerous enough to be classified as **Sealed Artifacts** — items with significant abilities and equally significant drawbacks. Sealed Artifacts arise in one of two ways: as a result of the death of an out-of-control Beyonder, or through craftsmanship by a Sequence 6 or higher Savant Pathway Beyonder. Although their powers adhere to the traits of the 22 pathways, each Sealed Artifact is unique — shaped by its formation environment, its original owner's history, and forces no one fully understands. 

###### **Sealed Artifact Grades** 
The seven churches classify Sealed Artifacts into four grades (0–3) based on danger, power, and sealing method. Grade 0 and 1 artifact codes are shared between churches due to their danger — but the detailed information is not. Classification was formally established in the late Fourth Epoch / early Fifth Epoch. 

|**Grade**|**Danger**|**Power Equivalent**|**Church Access Rules**|
|---|---|---|---|
|Grade 3|Considerable|Low-Sequence Beyonder (Seq 8–9)|Formal Nighthawk members and above|
|Grade 2|Dangerous|Mid-Sequence Beyonder (Seq 5–7)|Bishop or Nighthawk team captain and above; 3–5 per cathedral|
|Grade 1|Highly Dangerous|Saint (Seq 3–4)|Diocesan Bishop or Nighthawk deacon and above; 1–2 per diocese HQ|
|Grade 0|Extremely Dangerous|Angel (Seq 1–2 equivalent)|Most confidential — not to be inquired, described, or spied upon|

###### **Charms** 
Charms are mystical items whose power derives from a high-level existence, contained in a vessel and stabilized by symbols carved on precious metals. They can be used by any holder via the activation incantation set by the maker — but once used, the charm burns away at the end of its activation period. The spirituality within diminishes over time; low-grade charms must be renewed every two weeks. 

|**Name**|**Domain**|**Function**|
|---|---|---|
|Aquatic Affinity Charm|Tyrant|Grants affinity with underwater creatures|
|Dream Charm|Darkness|Allows the wielder to enter someone else's dream|
|Flaring Sun Charm|Sun|Calls forth a blazing pillar of light from the sky|
|Language Comprehension Charm|White Tower|Temporarily enhances understanding, reasoning, and communication|
|Requiem Charm|Darkness|Soothes ghosts, souls, and zombies; deals with vengeful spirits|
|Shriek Charm|Chained|Creates an invisible sound wave that drills into all nearby ears|
|Slumber Charm|Darkness|Forcefully puts the target to sleep|
|Teleportation Charm|Door|Allows the caster to teleport to a different location|
|Yesterday Once More Charm|Fool|See through one's past; borrow the power of a historical self|
|Scholar of Yore Cane|Fool|Regain peak strength by borrowing power from History (one use)|
|Fate Siphon|Error|Siphon the fate connection between wielder and target briefly|
|Deity's Curse|Darkness / Wheel of Fortune|Inflicts a god-level misfortune curse on the target|

###### **Mystical Ammunition** 
Certain bullets are crafted with Beyonder characteristics or ritual power, granting extraordinary effects beyond standard ballistics. 

|**Name**|**Domain**|**Effect**|
|---|---|---|
|Aging Bullets|Error|Causes the target to lose vitality rapidly, entering an aged state|
|Control Spirit Bullets|Fool|Paralyzes one body part on hit|
|Deceit Bullets|Error|Misdirects the target; causes errors in judgment; can deceive rules|
|Demon Hunting Bullets|Twilight Giant|Highly effective against corrupted creatures|
|Deprivation Bullets|Error|Steals three Beyonder powers from the target, starting from most recent|
|Exorcism Bullets|Sun|Purifies ghost-related monsters|
|Parasite Bullets|Error|Creates Worms of Time that parasitize the target, allowing shooter control|
|Purifying Bullets|Sun|Purifies ghosts|

###### **Special Medicines** 
Special medicines are extraordinary mixtures prepared using spiritual ingredients or Ritualistic Magic. They slowly lose their spirituality after preparation and generally have an expiration date. The following are notable medicines encountered in the Fifth Epoch: 

|**Name**|**Description**|
|---|---|
|Amantha Extract|An aromatic floral essence (Night vanilla, slumber flower, chamomile). Relaxes emotions; creates instant calm as if gazing into silent darkness.|
|Eye of the Spirit Medication|Drago and poplar bark/leaves, sun-dried and decocted, immersed in Lanti Wine. A helpful agent for psychics and spiritual workers.|
|Goddess's Gaze|A dark red liquid. Stimulates the spirit and body's potential; keeps a person functional in a short period until they can receive proper treatment.|
|Holy Night Powder|Slumber flowers, Dragon Blood grass, deep red sandalwood, mint. From the Church of the Evernight Goddess. Assists Beyonders in guiding their power before ritual magic; builds a clean spiritual environment. Limit: up to Sequence 7 or a personal silver knife.|
|Sedative Agent|A blue fluid. Keeps users awake while feeling deeply calm. Rarely used but highly efficient for mediumship work.|
|Serenity Agent|Maintains calm and rational thought; useful in high-stress supernatural situations.|
|Truth Serum (Confession Concoction)|Makes it exceedingly difficult to lie. What the subject utters stems from their innermost desires.|
|Healing Agent|Mends most external wounds, alleviates severe injuries, and eliminates minor ailments.|
|Berserk Agent|Grants the user extraordinary strength when released; unpredictable if used without preparation.|
|Quelaag's Oil|A mix of mint and disinfectant. Helps a person ignore the stench of rotting corpses; refreshes and clears the mind.|
|Sanguine Anesthesia Gas|Causes deep slumber lasting more than three hours.|
|Mysticism Smelling Salts|An extremely foul-smelling gas that wakes the user immediately. Can cancel or protect against sleeping gas effects.|

<div id="ch6-5"></div>

### **Chapter 6.5: Divination Arts** 

_"The world is full of obvious things which nobody by any chance ever observes. — Sherlock Holmes, via Klein Moretti"_ 

##### **I. The Divination Arts Skill** 

**Divination Arts (IQ/Hard)** — an active, analytical mystical art that uses the caster's spirituality, spirit bodies, and astral projection to perceive specific information about the past, present, or future through the Spirit Realm. Methods include pendulum, tarot, scrying, dream interpretation, coin tossing, dowsing, and other techniques of peering beyond the mundane. **SPI Augmentation:** The caster may spend additional SPI (1 SPI = +1, no cap) to improve their Divination Arts roll, in addition to the base SPI cost of the divination itself. 

Divination Arts is fundamentally different from **Ritualistic Magic** . Divination draws on the caster's **own spirituality** to infer answers from the spirit world, while Ritualistic Magic petitions external entities for revelations. The two skills do not overlap — a Beyonder cannot substitute one for the other. 

**Default:** Divination Arts defaults to **Spiritual Intuition-4** . 

###### **Supporting Skills** 

|**Supporting Skill**|**Bonus**|**Notes**|
|---|---|---|
|Occultism|+1|Symbolism, mystical traditions, interpreting results|
|Hidden Lore (relevant)|+1|Specific knowledge matching the divination's subject|
|Psychology|+1|Reading people through divination results; +1 to dream interpretation|
|Cogitation|+1|Entering the correct mental state for clear divination|

_These bonuses are cumulative but cap at +2 total from supporting skills._ 

##### **II. Methods & Tools** 

Divination Arts covers a wide range of techniques. Each method has its own strengths: 

|**Method**|**Best For**|**Time**|**SPI**|**Notes**|
|---|---|---|---|---|
|Pendulum|Yes/no questions, quick checks, spiritual dowsing|1 min|1|The most common method. Requires a weighted object on a chain. The direction of swing indicates yes/no.|
|Coin|Binary outcomes, pass/fail checks|30 sec|1|Simplest method. Toss and interpret based on the spiritual feeling accompanying the result.|
|Dowsing Rods|Finding objects, locations, water, hidden passages|5 min|1–2|Uses L-shaped rods or a Y-branch. The rods cross or dip when over the target.|
|Dream Interpretation|Complex questions, symbolic answers, prophetic glimpses|Overnight|2|The caster sets an intent before sleep. The dream contains a symbolic answer requiring interpretation. +2 if the caster keeps a dream journal.|
|Mirror Scrying|Viewing distant places or people, surveillance|10 min|2|A darkened mirror or bowl of still water. The caster gazes until an image forms. Sensitive to light and noise.|
|Crystal Ball|Precise visions, seeing the past/future|15 min|2|Requires a clear quartz or glass sphere. Provides clear imagery. +1 if the ball has been consecrated.|
|Tarot / Cards|Pattern recognition, multiple connected questions|10 min|2|A spread of cards reveals relationships between factors. Requires a deck with spiritual resonance.|
|Bone Oracle|Spirit communication, ancestral guidance|15 min|2|Toss inscribed bones or lots and read the pattern. Effective for questions about the dead or spirits.|

A Beyonder may **specialise** in one method, gaining +1 when using it. This counts as a technique (see GURPS Techniques, p. B229). Specialisation does not penalise other methods — it simply reflects focused practice. 

##### **III. Performing a Divination** 

A divination attempt follows four steps: 

###### **Step 1 — State the Question** 
The player states the question clearly. The GM determines the **difficulty** of the question — how hard it is to obtain a clear answer: 

|**Question Difficulty**|**Modifier**|**Example**|
|---|---|---|
|Trivial — personal, present, simple|+2|"Is there danger behind this door?"|
|Easy — personal, recent, concrete|+0|"Where did I lose my key?"|
|Moderate — impersonal, distant, vague|-2|"Is the merchant hiding something?"|
|Hard — well-guarded, future, abstract|-4|"Will the Church raid this hideout?"|
|Extreme — divine, fate-bound, cosmic|-6 or worse|"What is the true name of the Hidden One?"|

###### **Step 2 — Choose Method & Pay SPI** 
Select a divination method (see Section II). Pay the SPI cost. 

###### **Step 3 — Roll & Apply Modifiers** 
Roll Divination Arts, adding all applicable modifiers: 

|**Modifier Source**|**Modifier**|
|---|---|
|Question difficulty|See Step 1 table|
|Method match (right tool for the question)|+0 to +2|
|Target link (true name, possession, blood)|+0 to +4 (same as ritual link rules)|
|Favourable timing (astrological, domain-appropriate)|+1|
|Unfavourable timing (wrong phase, entity's off-day)|-1 to -2|
|Interrupted or rushed (half the usual time)|-2|
|Quiet, dedicated space|+0 to +1|
|Previous divination about the same subject (cumulative)|-2 per repeat|

**Burning SPI to improve the roll:** As with rituals, you may spend additional SPI (1 SPI = +1, no cap) before rolling. 

###### **Step 4 — Interpret the Result** 
The GM interprets the divination based on the roll result: 

|**Roll Result**|**Clarity**|**GM Gives**|
|---|---|---|
|Success by 5+|Crystal clear|Precise answer, additional useful detail, possibly a vision|
|Success by 3–4|Clear|Direct answer to the question|
|Success by 0–2|Vague|Symbolic or partial answer — requires interpretation (IQ or Occultism roll to fully understand)|
|Failure by 1–4|Murky|No useful information. SPI spent. May retry after 1 hour with fresh approach.|
|Failure by 5+|Distorted|Misleading or inverted answer. The caster believes it is genuine.|
|Critical Failure|Backlash|Roll on the Critical Failure Table (Chapter 7, Section V) — treat as a ritual critical failure.|

##### **IV. Divination Awareness & Countermeasures** 

Certain pathways develop innate awareness of being watched through spiritual means, while others learn active techniques to conceal themselves from divination. 

###### **Quick Reference — Resolution Order** 
When a Beyonder is divined, resolve in this order: 
- **Step 1 — Sequence Immunity:** Does the target's Sequence impose a penalty on the diviner's effective skill? (See Sec. 5.) If the penalty makes the roll impossible, the diviner must overcome it via Counter-Countermeasures (Sec. 6). 
- **Step 2 — Passive Awareness:** Does the target have a pathway ability that grants automatic detection? (See Sec. 1.) If yes, they know immediately and may act. 
- **Step 3 — Detection Roll:** If not automatic, the target may roll SPI/Per (if they have reason to suspect) to sense the divination. (See Sec. 2.) 
- **Step 4 — Active Countermeasures:** Apply the target's active technique penalties to the diviner's Divination Arts roll. (See Sec. 3.) All active techniques stack. 
- **Step 5 — Counter-Countermeasures:** Apply any bonuses the diviner has earned — Sequence advantage, direct link, blood sacrifice, or a dedicated ritual. (See Sec. 6.) 
- **Step 6 — Resolution:** The diviner rolls. On success, the effect goes through (possibly distorted by countermeasures). On failure, the attempt fails and the target may be alerted. 

###### **1. Sensing Divination — Passive Awareness** 
When someone attempts to divine you — your location, identity, secrets, or future — you may feel a spiritual disturbance. The following pathways and sequences gain automatic awareness or a free roll to detect the attempt: 

**Note:** Beyonders of Seq 4+ (Demigod) always have automatic awareness (see row 8). The entries below apply primarily to Seq 9–5 characters who have not yet reached that universal threshold. 

|**Pathway**|**Seq & Ability**|**Detection**|
|---|---|---|
|Fool (Seer)|Seq 8+ (Clown Intuition)|Sensed as a 'prying gaze' or subtle spiritual pressure. Free Per roll at +2 when someone actively divines them.|
|Darkness (Sleepless -> Midnight Poet -> Nightmare)|Seq 7+ (Nightmare)|Feel the disturbance as a cold touch on their Ether Body. Automatic SPI roll to notice.|
|Hanged Man (Secrets Supplicant)|Seq 7+|Instinctive awareness when their secrets are pried into. +2 to detect divination related to their hidden knowledge.|
|Hermit (Mystery Pryer)|Seq 9+ (Eyes of Mystery Prying)|Always-on spiritual perception. Automatic SPI roll to detect any divination targeting them within 50 meters.|
|Justiciar (Arbiter -> Sheriff)|Seq 8+ (Sheriff)|Sense when a law or rule is being broken spiritually. +2 to detect divination as a form of spiritual trespass.|
|Wheel of Fortune (Monster)|Seq 9+|Passive luck interference. At the GM's discretion, any divination attempt against a Monster may suffer -1 as random chance skews the result. (Passive, unconscious.)|
|Fool / Error / Door|Seq 5+ (any)|Free Per roll (no bonus) to detect any divination targeting them. +2 if the divination concerns fate, concealment, or secrets. Lord of the Mysteries pathways gain innate divination awareness as part of their authority.|
|Any pathway|Seq 4+ (Demigod)|Automatic awareness. A demigod always knows when someone of weaker Sequence attempts to divine them. Equal or stronger Sequence requires a Quick Contest of SPI vs the diviner's Divination Arts.|

###### **2. Detection Mechanics** 
When a Beyonder with passive awareness is being divined — or when any Beyonder suspects they are under observation — the GM calls for a **SPI or Per roll** (whichever is higher). This is a free action (once per divination attempt) and does not cost SPI. 

|**Roll Result**|**Outcome**|
|---|---|
|Success|You feel a distinct sense of being watched or pried into. You know the general direction of the diviner (if within 100 meters) and the domain being probed (identity, location, secrets, etc.).|
|Success by 3+|You sense the diviner's approximate Sequence (±1) and their general Pathway family. You may attempt to trace the connection back to its source (Quick Contest of your SPI vs the diviner's SPI).|
|Critical Success|You gain a clear vision of the diviner's face and surroundings. You may attempt to feed a false image or piece of information back through the connection — make a Ritualistic Magic or Acting roll contested by the diviner's SPI. On success, they receive your false information as genuine.|
|Failure|You feel nothing unusual. The divination proceeds unnoticed.|
|Critical Failure|You sense nothing, and the diviner is aware that you_could_have detected them — they know you failed to notice.|

|**Situation**|**Modifier**|
|---|---|
|Diviner is 2+ Sequences weaker than the target|+2|
|Diviner is 2+ Sequences stronger than the target|-2|
|Target carries a protective charm or item|+1|
|Diviner has the target's true name + personal item|-2|
|Target is in a warded or sacred space|+2|
|Diviner and target are of equal Sequence|+0|

###### **3. Active Anti-Divination Techniques** 
Beyonders with sufficient Sequence and the right pathway can actively hide from divination. Each technique lists its SPI cost, duration, and mechanical effect. All active techniques **stack** — their penalties add together when a divination is attempted. 

###### **3A. Spiritual Warding (Universal, Seq 7+)** 
The simplest and most widely known anti-divination technique — a protective spiritual barrier. 
- Cost: 2 SPI 
- Duration: 1 hour, or until the ward is broken 
- Effect: All divination attempts against you are at -2 while the ward holds 
- Bonus: You gain +2 on detection rolls (see Sec. 2 above) while warding is active 
- Limitation: Ward breaks if you suffer injury greater than HP/3 (round down) from a single attack 

###### **3B. Concealment (Darkness Pathway, Seq 5 — Spirit Warlock)** 
The Beyonder wraps themselves in the concept of Concealment — becoming harder to find, remember, and divine. 
- Cost: 2 SPI 
- Duration: 1 hour 
- Effect: All divination against you is at -4 
- Bonus: Anyone trying to recall specific details about you must first win a Quick Contest of Will vs your SPI 
- Extension: You may extend Concealment to one willing target within touch range at +1 SPI per additional target 

###### **3C. Identity Confusion (Fool Pathway, Seq 6 — Faceless)** 
The Faceless masks their spiritual aura to match a person they have studied. Divination targeting their original identity picks up the masked aura instead. 
- Cost: 2 SPI 
- Duration: 1 hour, or until the Faceless changes their masked identity 
- Effect: Any divination attempting to identify you or locate you by your spiritual signature divert to the person you are impersonating 
- Limitation: You must have met or studied the target whose aura you mimic. A simple description is not enough — you need 10+ minutes of close observation or a personal item. 
- Counter: A diviner who critically succeeds on their Divination Arts roll realises the spiritual signature is a mask and may attempt a Quick Contest of Divination Arts vs your SPI to pierce it 

###### **3D. Door Misdirection (Door Pathway, Seq 5 — Traveler)** 
The Traveler introduces an error into the spiritual connection, redirecting the divination to a random location or person. 
- Cost: 3 SPI 
- Duration: Instant (opposes a single divination attempt) 
- Effect: On a successful SPI roll, the divination is redirected to a random location or person within 1 mile 
- Deception: The diviner does not know their spell was misdirected unless they critically succeed 
- Limitation: Does not work against diviners 2+ Sequences stronger than you 

###### **3E. Historical Mimicry: Spiritual Blank (Fool Pathway, Seq 3 — Scholar of Yore)** 
The Scholar projects a historical figure or event over their spiritual signature. Divination returns information about the projection instead of the Scholar. 
- Cost: 5 SPI 
- Duration: 1d6 minutes (the projection collapses immediately if you take any hostile action) 
- Effect: Any divination targeting you returns information about the projected historical figure or scene instead of you 
- Penalty: Concentrating to maintain the projection prevents you from taking other complex actions 
- Detection: A demigod of equal or stronger Sequence can perceive the projection as a 'laminated' spiritual layer and may attempt a Quick Contest of Divination Arts vs your SPI to see through it 

###### **3F. Self-Divination Interference (Universal, Seq 5+)** 
The Beyonder pre-emptively divines themselves, saturating their signature with the result. External divination about the same question receives a distorted echo instead. 
- Cost: SPI equal to what a divination of that scope would normally cost (see Chapter 6.5, Section III, or Chapter 7, Power Sources) 
- Duration: 24 hours, or until you perform a new self-divination that overwrites the previous one 
- Effect: The external diviner receives a false but plausible result — the echo of your self-divination 
- Deception: The diviner does not know the result is false unless they critically succeed 

###### **4. Anti-Divination Items & Materials** 
Certain mystical items and preparations provide passive or active protection against divination: 

|**Item**|**Effect**|**Cost**|
|---|---|---|
|Concealment Pendant (Darkness charm)|+2 to detect divination; worn passively.|£50 / 5 pts|
|Eyes of the Spirit World (Hermit charm)|When activated (1 SPI), reveals if you are being divined right now. One charge per use.|£30 / 3 pts per charge|
|Blank Paper Talisman (Fool pathway)|Affix to a surface: the room cannot be divined for 1 hour. One-time use.|£20 each|
|Mystical Candle of Obscurity|Burning during a ritual suppresses detection of that ritual by -3 to anyone sensing it. Lasts 1 hour.|£15|
|Silver Mirror of Reflection|When placed on an altar, any divination targeting the owner has a 50% chance (1–3 on 1d6) of reflecting back on the diviner.|£40 + blessing ritual|
|Salt of Spiritual Clarity|A pinch thrown into the air purifies the spiritual environment. Any active divination targeting the area is interrupted and must restart.|£5 per pouch (3 uses)|

###### **5. Sequence Immunity — When Divination Struggles** 
At certain thresholds of power, a Beyonder becomes extremely difficult to divine. Instead of outright immunity, these thresholds impose severe penalties — making success possible only for the exceptionally skilled, the well-prepared, or the lucky. 

|**Sequence**|**Penalty**|
|---|---|
|Seq 5 (Beyonder Threshold)|Divination from Seq 9–7 Beyonders is at -6 unless the diviner has a direct link (true name + blood or hair), which reduces the penalty to -3.|
|Seq 4 (Demigod)|Divination from any weaker-Sequence Beyonder is at -10. Equal-Sequence divination is at -3. Only a critical success (3–4) can succeed — the -10 penalty cannot be offset by skill alone.|
|Seq 3 (Saint)|Only demigods (Seq 4+) or those with a special connection can attempt to divine you. Weaker Sequences are at -10 and only a critical success (3–4) can succeed — the penalty cannot be offset by skill alone.|
|Seq 2 (Angel)|Divination is at -10 and requires the diviner to possess your true honorific name and an intimate possession. The mere attempt may draw your attention — the GM decides when and how.|
|Seq 6–9|No passive penalty applies. The Sequence Advantage rule (below) only affects targets at Seq 5+.|

###### **6. Countering Anti-Divination** 
Determined diviners are not helpless against a hidden target. The following methods can pierce or bypass anti-divination techniques: 
- **Sequence Advantage:** If the diviner is 2+ Sequences stronger than the target, they ignore the target's passive Sequence penalty (but active techniques like Concealment or Identity Confusion still apply at half penalty, rounded up). 
- **Direct Link:** Having the target's true name + an intimate personal item halves all anti-divination penalties (round down). 
- **HP Sacrifice:** Burning 4+ HP (at 2 HP = 1 SPI rate) when casting a divination ignores -2 of anti-divination penalties for that attempt. 
- **Anti-Anti-Divination Ritual:** A dedicated ritual (base difficulty -4, requires rare materials worth £100+) can temporarily suppress a target's protective techniques for 1d hours. This requires the target's name and a personal item. 
- **Divine Intervention:** A prayer to an orthodox deity whose domain includes divination (the God of Knowledge and Wisdom, the Evernight Goddess) may grant a temporary bypass — but the deity will expect something in return. The GM should set a clear cost (a future service, a sacrifice, or a quest) and may limit this to once per story arc. 

<div id="ch7"></div>

### **Chapter 7: Ritualistic Magic** 

Ritualistic Magic (IQ/Very Hard) is the skill of designing and executing rituals. It has no default. Every ritual rests on three pillars: **Sacrifice** (sparks the entity's interest), **Incantation** (identifies the target), and **Symbols & Formatting** (physical arrangement conveys intent). You may also **Pray to Yourself** — draw entirely on your own spirituality without petitioning any god. The result is limited by personal power: a weak result for the weak, a strong result for the strong. 

**Low-Sequence Beyonders** (Seq 9–8) have limited SPI and weak personal authority — they must invoke higher beings or make elaborate preparations to achieve meaningful effects. 

##### **I. The Core Skill** 

**Ritualistic Magic (IQ/Very Hard)** — no default, cannot be substituted. Supporting skills provide complementary bonuses (cumulative, max **+3 total** ): 

|**Supporting Skill**|**Bonus**|**Notes**|
|---|---|---|
|Occultism|+1|General ritual theory, symbol knowledge, mysticism fundamentals|
|Thaumatology|+1|Theoretical magical framework; stacks with Occultism|
|Hidden Lore (relevant domain)|+1|Specific knowledge of the entity, domain, or spirit world|
|Research|+1|If caster spent significant time researching this specific effect|
|Professional Skill (Astrology etc)|+1|When the ritual's material component or timing falls within that domain|

_These bonuses are cumulative but cap at +3 total from supporting skills._ 

##### **II. Effect Categories** 

Every ritual falls into one of three weights that determine base difficulty and SPI cost: 

|**Weight**|**Base Mod**|**SPI Cost**|**Example Categories**|
|---|---|---|---|
|Light|+0|2 SPI|Divination (1–2 SPI via Divination Arts), spirit creature summoning, minor communication, simple warding, basic prayer|
|Moderate|-2|4–6 SPI|Enhancement, curse, cleansing, marking, fabrication, concealment, oath-sealing, protection, warding|
|Heavy|-4|8+ SPI|Binding, unraveling, affliction, transference, soul-anchoring, permanent enchantment|

##### **III. Resolution** 

Two resolution modes depending on stakes: 

- **Quick Ritual (~1 min at table): Resolve in one roll. For routine work. See tables below.** 
- **Full Ritual (~5 min at table): Three phases — Prepare, Conduct, Close. For consequential magic.** 
- **Ceremony (story-level): For advancement rituals and large-scale workings. 3+ hours. No mechanical shortcut.** 

###### **A. Quick Resolution** 

State intent, choose power source, sum modifiers, then roll Ritualistic Magic against the base difficulty: 

|**Effect Weight**|**Base Difficulty**|**Base Time**|**SPI Cost**|
|---|---|---|---|
|Light|+0|15 min|2 SPI|
|Moderate|-2|30 min|4–6 SPI|
|Heavy|-4|1 hr|8+ SPI|
|Major|-6|3 hr|12+ SPI|

|**Result**|**Outcome**|
|---|---|
|Success by 3+|Effect surpasses intent. Entity pleased (if invoked).|
|Success by 0–2|Effect works as intended.|
|Failure by 1–4|No effect. SPI and materials spent. Faint spiritual disturbance.|
|Failure by 5+|Partial wrong activation. GM chooses distorted outcome.|
|Critical Failure (17–18)|Roll on Critical Failure Table (Section V).|

**Preparation Quality:** Excellent +2, Adequate +0, Poor/None -2 to -4. **Target Link:** Perfect (name + possession) +4, Strong (name or possession) +2 to +3, Weak (alias, secondhand) +0 to -1, None -4. 

**Burning SPI:** Before rolling, spend additional SPI (1 SPI = +1, no cap) to improve the roll. This is separate from the ritual's fuel cost. 

###### **B. Full Resolution — Three Phases** 

**Phase I — Prepare:** Declare target entity, timing, materials, space, sacrifice, and target link. GM determines Preparation Modifier: Excellent +3, Good +1 to +2, Adequate +0, Poor -1 to -2, None -4 or worse. 

**Phase II — Conduct:** Narrate incantation (4-part Hermes structure: Invocation, Grace, Request, Empowerment). GM may award +1 Flourish Bonus for good roleplay. Effective skill = Ritualistic Magic + Preparation Mod + Flourish Bonus. If invoking an entity, add Invocation bonus (GM discretion, +1 to +5). 

**Phase III — Close:** Drip oil on candles, burn symbol paper, thank entity (if invoked), extinguish candles right to left (me then god), dispel Wall of Spirituality. Resolve using the Quick Resolution outcome table. 

|**Complexity**|**Base Time**|**Rushed**|**Extended**|
|---|---|---|---|
|Light|15 min|-3 to roll|+1 to roll|
|Moderate|30 min|-3 to roll|+1 to roll|
|Heavy|1 hr|-4 to roll|+2 to roll|
|Major|3 hr|-5 to roll|+2 to roll|

**Suspending a Ritual:** A suspension technique allows the caster to terminate, handle other matters, then return and continue. The caster must understand the underlying mysticism. At GM discretion, suspending costs -2 to effective skill. 

##### **IV. Power Sources** 

Every ritual requires energy. Declare your source before rolling — it cannot be changed once begun: 

- **Personal Spirituality (Praying to Oneself): Pay SPI from your own pool. No entity becomes aware of you. SPI cost varies by effect weight (2–15+ SPI). The result is limited by personal power.** 
- **HP Sacrifice: 2 HP = 1 SPI toward ritual cost. HP sacrifice does not grant a roll bonus — it only provides spiritual fuel. Visible — bleeding, pallor, shaking. Others will notice.** 
- **Multiple Participants: Assistants each contribute their SPI toward the total cost. Each assistant beyond the first gives +1 to the ritual roll (max +3).** 
- **External Sacrifice: Offerings of items, materials, or living beings. Sacrifice quality: Ordinary +0, Meaningful +2, Precious +4. Living sacrifice +2 per sentient being. The offering is always consumed.** 
- **Catalysts: Rare materials burned or consumed to enhance the ritual. Provide +0 to +2 to the roll (GM discretion based on quality and domain relevance).** 
- **Invocation (Deity or Hidden Existence): Borrow power from an external entity. Adds +1 to +5 to the ritual roll (GM discretion based on entity's disposition and domain alignment). Orthodox deities grant +2 when the request aligns with their domain and the caster is in good standing.** 

##### **V. Failure & Consequences** 

Failure always costs time, materials, and SPI. The question is only how badly it went wrong: 

|**Result**|**Consequence**|
|---|---|
|Failure by 1-4|No effect. Faint spiritual disturbance — GM may note it.|
|Failure by 5-9|Partial wrong activation. GM chooses distorted outcome loosely related to intent.|
|Failure by 10+|Severe misfire. Roll on Critical Failure Table with -2 to result roll.|
|Critical Failure|Roll on Critical Failure Table immediately.|

**Critical Failure Table (3d6)** 

|**Roll**|**Outcome**|
|---|---|
|3-4|Backlash. Take damage equal to SPI cost as injury bypassing DR. Stunned 1d minutes.|
|5-6|Wrong Attention. Something external noticed the ritual. GM decides what and when.|
|7-8|Distortion. Effect activates in twisted form. GM defines how.|
|9-10|Spiritual Drain. Lose double the SPI cost. Lose 1d SPI from max until full rest. Stunned 1d min.|
|11-12|Wrong Arrival. For summoning/communication: something else responds. Otherwise: unintended entity notices you.|
|13-14|Corruption. Gain 1 CoR. Ritual still fails.|
|15-16|Shatter. All ward/protection effects on caster dispelled. Gain 1 CoR.|
|17|Soul Exposure. Spiritual self partially exposed. Gain 2 CoR. Nightmares for 1d weeks.|
|18|Catastrophe. GM invents something terrible. Possible entity arrival.|

###### **Corruption from Ritual Work** 
CoR from ritual failures and dangerous work stacks with the main CoR system. Additional thresholds: 3 CoR = -1 to all ritual rolls. 5 CoR = gain -5 pt mental disadvantage. 8 CoR = gain second -5 pt disadvantage, attract unwanted spiritual attention. 10 CoR = character is fundamentally altered (may need retirement or major story arc). 

Reduction: Extended rest away from ritual work removes 1 CoR after one full month of abstinence. Cleansing rituals can also remove CoR on a successful roll. 

##### **VI. Spirit World Creatures & Contracts** 

Spirit world creatures exist in the Spirit World, Shadow World, Sea of Eternal Unconscious, Mirror World, and other realms. By creating or discovering a three-line incantation and performing a summoning ritual, Beyonders may call these beings to ask favours, send messages, or form contracts. 

###### **Obtaining a Contracted Creature** 
Two methods, per Azik Eggers: 
- **Method 1 — Summon & Contract: Create an accurate three-line description, hold a summoning ritual, and make a contract with the creature that responds.** 
- **Method 2 — Enter the Spirit World: Enter the Spirit World directly, search for a willing creature, obtain its consent, sign a contract, and record its accurate description for future summoning.** 

###### **Spirit World Creature Contract** 
Binding a spirit world creature into a contract requires a focused ritual. The creature knows it will be bound to your will and resists accordingly. This ritual is separate from a casual summons and cannot be substituted by simple communication. 

**Difficulty:** -8 base, plus -3 per creature you have already under contract. **SPI Cost:** 3 SPI. **Time:** 30 minutes. **Setup:** Simple altar with one candle, plus the goatskin parchment and quill for the contract prepared beforehand. 

###### **Degree of Success determines the creature's demands:** 

|**Margin**|**Outcome**|
|---|---|
|Success by 10+|Accepts willingly. No demands or a trivially symbolic one (a single drop of blood, a whispered name).|
|Success by 7–9|One minor demand (a small amount of SPI, a simple answer, a trivial errand).|
|Success by 5–6|One moderate demand (a favour owed, a small sacrifice, a piece of hidden knowledge).|
|Success by 3–4|One severe demand or two moderate demands (a dangerous task, a significant sacrifice).|
|Success by 1–2|Two severe demands or one extreme demand (a year of service, a precious heirloom).|
|Success by 0 (exact)|Creature drives an extremely hard bargain. The contractor owes a major debt.|
|Failure|Creature refuses entirely. It may depart or demand an unreasonable price to even begin negotiations.|
|Critical Failure|Creature is offended. It may attack, alert something worse, or return bearing a grudge.|

What a creature demands depends on its nature and power. Demands are always costly or specifically inconvenient to the summoner — this discourages stacking multiple contracts. Common examples include: **Spirituality** (a fixed SPI tithe paid weekly), **Blood** (a few HP per summoning), **Money** (a significant sum of coin or valuables), **Information** (secrets the summoner would rather keep hidden), **Essences** (rare herbs, mystical ingredients, potion residues), or **Specific Burdens** (read a forbidden text aloud once a month, surrender a treasured memory, perform a humiliating public act). The GM adjudicates what a given creature would reasonably accept. 

###### **Summoning Incantation** 
The incantation has three parts: 
- **Part 1: "I." — spoken in Ancient Hermes, Jotun, Dragonese, or Elvish.** 
- **Part 2: "I summon in my name." — spoken in Hermes.** 
- **Part 3: A three-line description of the creature: Line 1 points to the Spirit World (e.g., "The spirit that wanders about the unfounded" or "Roaming in the upper realm"). Lines 2–3 accurately describe the creature. After a contract is signed, Line 3 becomes "The messenger that belongs to [name]" or "Contract Companion of [name]".** 

The summoner cannot use too many words. Ambiguity makes it difficult to predict which creature will answer — strongly advised to use previously tested and verified incantations. 

###### **Dismissing & Retrying** 
If the summoned creature is unsatisfactory, end the ritual by chanting _"I! I end this summoning in my name!"_ in Hermes, then extinguish the candle. The creature returns to the Spirit World. You may restart the ritual with the same altar. 

The summoning can be simplified through focus items — for example, Azik Eggers' copper whistle or Gehrman Sparrow's silver harmonica can replace the full incantation for a specific known creature. 

###### **Mystical Contracts** 
The contract is written in **Ancient Hermes** on yellowish-brown goatskin parchment. It contains clauses — such as the messenger not looking at letters, not discarding them, or not endangering the contractor's life. Additional terms depend on negotiation. 

To ensure effectiveness, the **final part of the contract requires Death's honorific name** (Salinger, the God of Death) or a description of someone high in the undead domain or the Underworld itself. The contract also needs the powers of the undead domain to seal it. 

The contractor's aura enters the contract, so a real name signature is not required. However, the summoning incantation demands the correct name to accurately summon that creature. 

A contracted creature can be **transferred** from one owner to another, but a new contract must still be signed between the new owner and the creature. 

###### **Creature Format** 
The GM determines each creature's properties. Standard format: 
- **Name:** 
- **Appearance:** 
- **Other Properties:** 
- **Contract Cost:** 
- **Attributes:** 
- **Ability(s) or Function:** 

###### **Example Creature: Bookworm** 
- **Name:** Bookworm 
- **Appearance:** Illusory pale blue worm, 5 cm, with letters from different languages coursing under its skin. One human-like eye. Speaks in a high-pitched, wisdom-filled old man's voice in Loenese and Intisian. 
- **Contract Cost:** A piece of rare information the Bookworm does not yet know. 
- **Attributes:** 4 HP 
- **Ability — Book Reading (1 SPI):** Read a novel-length book in minutes. 
- **Ability — Knowledge Transmission (1 SPI):** Transmit knowledge from the most recently read book by burrowing into the contractor's head. May filter by request. 

`
