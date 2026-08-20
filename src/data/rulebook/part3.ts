export const part3 = `
<div id="ch8"></div>

### **Chapter 8: Equipment & Starting Wealth** 

_"Silver bullets for the undead, garlic for the superstitious, and a good revolver for everything else. You can’t negotiate with a rampager if you don’t have leverage."_ 

This setting assumes a TL5+1 society (equivalent to late 19th-century Victorian London). 

##### **Currency** 

The standard currency is the Loen Pound (£), composed of Soli and Pence. 
- 1 Pound (£) = 20 Soli (s) 
- 1 Soli (s) = 12 Pence (d) 

An average laborer earns about £1 per week. A skilled professional or middle-class earner might make £3 to £5 per week. 

**Starting Wealth:** Characters begin with **£100** to spend on equipment, weapons, and lifestyle. This represents savings, inheritance, or backing from a patron. 

##### **Weapons** 

|**Melee Weapons**|**Damage**|**Reach**|**Cost (£)**|**Weight (kg)**|**Notes**|
|---|---|---|---|---|---|
|Knife / Dagger|thr-1 imp / sw-3 cut|C, 1|0.5|0.5|Can be thrown; easily concealed|
|Sword Cane|thr imp|1|3|1|Blade hidden in a walking stick; requires Quick-Draw to use instantly|
|Cavalry Saber|sw+1 cut / thr+1 imp|1|5|1.5|Military issue|
|Heavy Club (Baton)|sw+1 cr|1|0.5|1|Police issue|
|Straight Sword|sw+1 cut / thr+1 imp|1|4|1.5|Standard sword|

|**Ranged Weapons**|**Damage**|**Acc**|**Range**|**RoF**|**Shots**|**Cost (£)**|**Weight (kg)**|**Notes**|
|---|---|---|---|---|---|---|---|---|
|Revolver, .38|2d-1 pi|2|100/1500|3|6(3i)|4|1|Standard concealed carry|
|Heavy Revolver, .45|2d+1 pi+|2|150/1900|3|6(3i)|6|1.5|Loud, heavy stopping power|
|Lever-Action Rifle|5d pi|4|400/3000|2|10(2i)|15|3.5|Hunting or military rifle|
|Double-Barrel Shotgun|1d+1 pi (x9 pellets)|3|50/100|2x9|2(3i)|10|3|Devastating at close range; damage assumes hit with multiple pellets|
|Pocket Pistol, .32|1d+1 pi-|1|80/1000|3|5(3i)|3|0.5|Easily hidden; low damage|

**Ammunition:** 
- Normal bullets: £0.1 (2s) per 10 rounds 
- Silver bullets: £1 per 10 rounds (bypasses mundane DR on ghosts and some monsters) 
- Special mystical ammunition: See Chapter 6. 

##### **Armor** 

Overt armor is illegal for civilians in Backlund. Wearing it in public will draw police attention. 

|**Armor**|**DR**|**Locations**|**Cost (£)**|**Weight (kg)**|**Notes**|
|---|---|---|---|---|---|
|Thick Leather Coat|1|Torso, Arms|2|3|Common; protects against scratches|
|Concealed Chain Vest|3*|Torso|15|6|*Split DR: DR 1 vs. crushing; illegal if discovered|
|Police Riot Vest|4|Torso|20|8|Bulky; restricted to law enforcement|

##### **Mysticism Kits & Tools** 

|**Item**|**Cost (£)**|**Weight (kg)**|**Notes**|
|---|---|---|---|
|Basic Divination Kit|2|0.5|Tarot deck, simple pendulum, copper coins|
|Professional Divination Kit|5|1|High-quality deck, crystal pendulum, dowsing rods|
|Ritual Dagger (Silver)|5|0.5|Required for some ceremonies; +1 to Ritualistic Magic if consecrated|
|Spirituality Restorative (Vial)|10|0.1|Restores 1d3 SPI instantly. Highly addictive if abused.|
|Herbalist's Kit|3|1|Mortar, pestle, basic herbs for making poultices and weak potions|


##### **Alchemical Potions & Concoctions**
Certain pathways (such as the Apothecary) can brew consumable potions. These can sometimes be purchased in underground Beyonder gatherings or from trusted apothecaries.
- **Minor Healing Potion (£1):** Restores 1d3 HP over 1 minute. Tastes like bitter grass.
- **Moderate Healing Potion (£5):** Restores 2d HP instantly. Can seal bleeding wounds.
- **Major Healing Potion (£20):** Restores 4d HP instantly and mends minor internal injuries or fractures.
- **Energy Potion (£3):** Restores 1d3 FP (Fatigue Points). Gives a sharp jolt of adrenaline.
- **General Physical Enhancer (£4):** Grants +1 to ST and HT for 10 minutes. Causes extreme hunger afterwards.
- **Sedative / Calming Draught (£2):** Grants +1 to Will rolls against Corruption (CoR) and fear effects for 1 hour.

<div id="ch9"></div>

### **Chapter 9: Sequence 9 Potion Effects**

This chapter details the specific effects, stat bonuses, and abilities granted by consuming a Sequence 9 potion. Abilities cost SPI as listed; passive abilities are always active.

<div id="seq9-fool"></div>

#### **Fool Pathway (Senda del Loco) — Sequence 9: Seer**

- **Stat Bonuses:** +9 SPI
- **Skill Bonuses:** +3 ritualistic_magic, +3 divination_arts, +3 spiritual_intuition, +2 occultism

**Abilities:**

- **Eidetic Memory** (Passive): Continuously grows as potion digests; allows memorisation of complex ritual steps and divination methods.
  *(Memoria Eidética): Crece continuamente mientras se digiere la poción; permite memorizar pasos de rituales complejos y métodos de adivinación.*

- **Spirit Vision** (Active | Cost: 1 SPI): See ghosts, spectres, auras. Deduce health/emotional state. See through objects and detect faint sounds within 10m.
  *(Visión Espiritual): Ve fantasmas, espectros, auras. Deduce salud/estado emocional. Ve a través de objetos y detecta sonidos tenues a 10m.*

- **Danger Intuition** (Passive): Provides a vague warning sense whenever mortal danger is near — no roll required.
  *(Intuición de Peligro): Proporciona una vaga sensación de advertencia cada vez que hay peligro mortal cerca — no requiere tirada.*

<div id="seq9-error"></div>

#### **Error Pathway (Senda de Error) — Sequence 9: Marauder**

- **Stat Bonuses:** +1 ST, +1 DX, +1 SPI
- **Skill Bonuses:** +2 observation, +3 knife, +3 shortsword, +4 sleight_of_hand, +4 pickpocket

**Abilities:**

- **Treasure Sense** (Passive): Can sense the presence of valuable items within a 10-meter range. Vague pull stronger for higher value.
  *(Sentido del Tesoro): Puede sentir la presencia de objetos valiosos en un rango de 10 metros. Un tirón vago que es más fuerte para valores más altos.*

<div id="seq9-door"></div>

#### **Door Pathway (Senda de Puerta) — Sequence 9: Apprentice**

- **Stat Bonuses:** +5 SPI
- **Skill Bonuses:** +3 running, +6 lockpicking, +3 climbing, +2 ritualistic_magic

**Abilities:**

- **Door Opening** (Active | Cost: 1 SPI): Open any mundane lock by touch and will. Warded doors cost 1 SPI. Attack bodily doors for 1d-1 cut. Free Escape +2 vs mundane restraints.
  *(Apertura de Puerta): Abre cualquier cerradura mundana al tacto. Puertas protegidas cuestan 1 SPI. Ataca puertas corporales por 1d-1 de corte. Escape gratis +2 vs restricciones mundanas.*

<div id="seq9-visionary"></div>

#### **Visionary Pathway (Senda de Visionario) — Sequence 9: Spectator**

- **Stat Bonuses:** +1 IQ, +2 SPI
- **Skill Bonuses:** +3 psychology, +3 body_language, +2 observation, +2 detect_lies

**Abilities:**

- **Body Language Analysis** (Active | Cost: 1 SPI): Analyze expressions/manners to reveal surface thoughts and dominant emotions. Sharp targets can sense observation.
  *(Análisis de Lenguaje Corporal): Analiza expresiones/modales para revelar pensamientos superficiales y emociones dominantes. Objetivos astutos pueden sentirlo.*

<div id="seq9-sun"></div>

#### **Sun Pathway (Senda del Sol) — Sequence 9: Bard**

- **Stat Bonuses:** +1 SPI, +1 HT
- **Skill Bonuses:** +4 singing

**Abilities:**

- **Singing — Buff Effects** (Active): Through Singing, a Bard imbues ONE effect for 10 min: (a) Courage (ignore Fear up to -3), (b) Strength (+1 ST-based rolls), (c) Agility (+1 DX-based rolls), (d) Spiritual Recovery (+1 SPI).
  *(Canto — Efectos de Mejora): Mediante el Canto, un Bardo otorga UN efecto por 10 min: (a) Coraje (ignora Miedo hasta -3), (b) Fuerza (+1 a tiradas de ST), (c) Agilidad (+1 a tiradas de DX), (d) Recuperación Espiritual (+1 SPI).*

- **Fit** (Passive): +1 to all HT rolls; recover FP at twice the normal rate.
  *(En Forma): +1 a todas las tiradas de HT; recupera FP al doble del ritmo normal.*

<div id="seq9-tyrant"></div>

#### **Tyrant Pathway (Senda del Tirano) — Sequence 9: Sailor**

- **Stat Bonuses:** +2 ST, +1 SPI
- **Skill Bonuses:** +3 seamanship, +4 swimming, +2 navigation_sea, +2 weather_sense

**Abilities:**

- **Phantom Scales** (Passive): Illusory scales beneath the skin grant DR 1 vs physical impacts. Grapplers roll at -2 (slippery).
  *(Escamas Fantasma): Escamas ilusorias otorgan RD 1 vs impactos físicos. Enemigos apresando tiran con -2 (resbaladizo).*

- **Aquatic Affinity — Diving** (Passive): Submerge 10 min without air. Dive to 15m without HT rolls. Ignore underwater movement penalties.
  *(Afinidad Acuática — Buceo): Sumérgete 10 min sin aire. Bucea hasta 15m sin tiradas de HT. Ignora penalizadores de movimiento bajo el agua.*

- **Perfect Balance** (Passive): +6 to avoid knockdown; +2 to Acrobatics, Climbing, Piloting.
  *(Equilibrio Perfecto): +6 para evitar ser derribado; +2 a Acrobacias, Escalar, Pilotar.*

<div id="seq9-white-tower"></div>

#### **White Tower Pathway (Senda de la Torre Blanca) — Sequence 9: Reader**

- **Stat Bonuses:** +3 SPI, +1 IQ
- **Skill Bonuses:** +3 research, +2 speed_reading, +2 ritualistic_magic

**Abilities:**

- **Reading — Knowledge Wealth** (Active): Roll IQ to recall general knowledge from books, even if not specifically researched. Learn languages in half the time.
  *(Lectura — Riqueza de Conocimiento): Tira IQ para recordar conocimiento general de libros. Aprende idiomas en la mitad del tiempo.*

- **Eidetic Memory** (Passive): +5 to remember things after one reading; near-perfect recall.
  *(Memoria Eidética): +5 para recordar cosas tras una lectura; recuerdo casi perfecto.*

<div id="seq9-hanged-man"></div>

#### **Hanged Man Pathway (Senda del Colgado) — Sequence 9: Secrets Supplicant**

- **Stat Bonuses:** +11 SPI
- **Skill Bonuses:** +2 ritualistic_magic, +3 spiritual_perception

**Abilities:**

- **Paranoia, Hallucinations, or Compulsion** (Drawback): Choose one: Paranoia (trust no one), Hallucinations (see/hear things not there), or Compulsion (irresistible urge to seek hidden knowledge).
  *(Paranoia, Alucinaciones o Compulsión): Elige uno: Paranoia (no confías en nadie), Alucinaciones (ves/escuchas cosas inexistentes), o Compulsión (impulso de buscar conocimiento oculto).*

- **Knowledge (Honorifics)** (Passive): Learn three-part honorific names of secret existences.
  *(Conocimiento (Honoríficos)): Aprende nombres honoríficos de tres partes de existencias secretas.*

<div id="seq9-darkness"></div>

#### **Darkness Pathway (Senda de la Oscuridad) — Sequence 9: Sleepless**

- **Stat Bonuses:** +9 SPI
- **Skill Bonuses:** +2 ritualistic_magic

**Abilities:**

- **Reduced Sleep** (Passive): Requires only 3-4 hours of rest per day.
  *(Sueño Reducido): Requiere solo 3-4 horas de descanso por día.*

- **Nocturnality** (Passive): +1 to all rolls during the night.
  *(Nocturnidad): +1 a todas las tiradas durante la noche.*

- **Spirit Vision — Limited Form** (Active | Cost: 1 SPI): See spiritual entities. Cannot read health/emotions. Detection only.
  *(Visión Espiritual — Forma Limitada): Ve entidades espirituales. No puede leer salud/emociones. Solo detección.*

- **Danger Detection in the Dark** (Passive): Danger Sense heightened in low-light (+2). Navigates darkness without penalty.
  *(Detección de Peligro en la Oscuridad): Sentido del Peligro mejorado en poca luz (+2). Navega en la oscuridad sin penalización.*

<div id="seq9-death"></div>

#### **Death Pathway (Senda de la Muerte) — Sequence 9: Corpse Collector**

- **Stat Bonuses:** +6 SPI, +1 ST, +1 HT
- **Skill Bonuses:** +2 physician, +1 surgery

**Abilities:**

- **Cold Resistance** (Passive): No penalties from cold environments; hypothermia rolls at +2.
  *(Resistencia al Frío): Sin penalizaciones por entornos fríos; tiradas de hipotermia con +2.*

- **Resistant (Decay and Corrosiveness)** (Passive): HT rolls to resist corrosiveness (acid, rust) and decay effects at +3.
  *(Resistente (Decadencia y Corrosión)): Tiradas de HT para resistir corrosión (ácido, óxido) y efectos de decadencia con +3.*

- **Fear of Sunlight and Purification** (Drawback): -1 to Will, skills, and combat actions under strong holy/purified/sunlight effects. Must roll Will to approach source. Sunlight/purification/holy attacks gain +1 against you.
  *(Miedo a la Luz Solar y Purificación): -1 a Voluntad, habilidades y acciones de combate bajo fuertes efectos sagrados/purificados/luz solar. Debe tirar Voluntad para acercarse. Ataques de luz solar/sagrados ganan +1.*

- **Undead Deterrence** (Passive): Mindless undead (IQ 5-) with SPI <= yours ignore you unless provoked. Intelligent/controlled undead may roll Will to act against you. No effect on SPI > yours or Seq 5+ creations.
  *(Disuasión de No-Muertos): No-muertos sin mente con SPI <= al tuyo te ignoran salvo provocación. Inteligentes/controlados tiran Voluntad para actuar. Sin efecto si su SPI es mayor o creaciones de Seq 5+.*

- **Undead Detection** (Passive): Detect undead and spirit creatures within 15 meters without rolling. Observation rolls to understand them at +3.
  *(Detección de No-Muertos): Detecta criaturas no-muertas y espíritus en 15 metros sin tirar. Tiradas de observación para entenderlos con +3.*

- **Spirit Vision** (Active | Cost: 1 SPI): See spiritual entities and Ether Body of living beings for limited health/spiritual analysis.
  *(Visión Espiritual): Ve entidades espirituales y el Cuerpo Etérico de seres vivos para análisis limitado de salud/espiritual.*

<div id="seq9-twilight-giant"></div>

#### **Twilight Giant Pathway (Senda del Gigante del Crepúsculo) — Sequence 9: Warrior**

- **Stat Bonuses:** +3 ST, +2 DX, +1 HT, +1 SPI
- **Skill Bonuses:** +3 broadsword, +2 shield, +2 polearm, +2 armoury_any, +2 brawling

**Abilities:**

- **Combat Mastery** (Passive): Mastery of all kinds of weapons and armour, with no weapon they cannot use and no fighting style they cannot learn. Suffers no default penalty when using any weapon type for the first time — every weapon is treated as known at effective DX (no default penalty) from the moment it is picked up. Weapons used repeatedly in a session are treated as known at default +2. They also don and maintain any armour type without penalty and fight effectively in it.
  *(Maestría en Combate): Maestría en todo tipo de armas y armaduras, sin arma que no puedan usar ni estilo que no puedan aprender. No sufre penalización por defecto al usar cualquier tipo de arma por primera vez: cada arma se trata como conocida a nivel DX efectivo (sin penalización por defecto) desde el momento en que se recoge. Las armas usadas repetidamente en una sesión se tratan como conocidas a nivel defecto +2. También se equipan y mantienen cualquier tipo de armadura sin penalización y luchan eficazmente con ella.*

<div id="seq9-demoness"></div>

#### **Demoness Pathway (Senda de la Demonio) — Sequence 9: Assassin**

- **Stat Bonuses:** +2 DX, +1 ST, +1 SPI
- **Skill Bonuses:** +2 acrobatics

**Abilities:**

- **Basic Speed +0.25** (Passive): Reflexes sharpen for precise timing.
  *(Velocidad Básica +0.25): Los reflejos se agudizan para una sincronización precisa.*

- **Night Vision** (Passive): See in total darkness without penalty.
  *(Visión Nocturna): Ve en oscuridad total sin penalización.*

- **Acute Vision** (Passive): +2 to vision-based Perception rolls.
  *(Visión Aguda): +2 a tiradas de Percepción basadas en la visión.*

- **Acute Hearing** (Passive): +2 to hearing-based Perception rolls.
  *(Audición Aguda): +2 a tiradas de Percepción basadas en la audición.*

- **Feather Fall** (Passive): Descend from any height safely and silently. Can glide 1m horizontal per 2m vertical. No perception roll detects landing through sound.
  *(Caída de Pluma): Desciende de cualquier altura de forma segura y silenciosa. Puede planear 1m horizontal por cada 2m verticales. Ninguna tirada de Percepción detecta el aterrizaje por sonido.*

- **Shadow Concealment** (Passive): Instinctively blend with shadows. In dim light/shadow, observers roll Perception at -3 if stationary, -1 if moving slowly. Bright daylight negates.
  *(Ocultamiento en las Sombras): Se funde instintivamente con las sombras. En luz tenue, observadores tiran Percepción con -3 si está quieto, -1 si se mueve lento. La luz diurna lo anula.*

- **Mighty Blow** (Active | Cost: 3 SPI): Spend 3 FP. Gain +3 to hit on a melee attack. On hit, multiply raw damage dice by 3 (before DR). Cannot be modified by other maneuvers.
  *(Golpe Poderoso): Gasta 3 FP. Gana +3 al ataque cuerpo a cuerpo. Al golpear, multiplica los dados de daño bruto por 3 (antes de RD). No se puede modificar por otras maniobras.*

<div id="seq9-red-priest"></div>

#### **Red Priest Pathway (Senda de Red Priest) — Sequence 9: Hunter**

- **Stat Bonuses:** +2 ST, +2 DX, +1 Per, +1 SPI
- **Skill Bonuses:** +4 tracking, +4 traps, +4 explosives_demolition, +2 survival

**Abilities:**

- **Environment Memory** (Passive): Unwavering memory for surroundings and alterations; detect natural traps instinctively.
  *(Memoria del Entorno): Memoria inquebrantable de los alrededores y alteraciones; detecta trampas naturales instintivamente.*

- **Survival Knowledge** (Passive): Innate knowledge of wild plants and animal organs; can prepare hemostatic poultices (1 min, restore 1d HP to bleeding wound or 2 HP if not bleeding).
  *(Conocimiento de Supervivencia): Conocimiento innato de plantas silvestres y órganos animales; puede preparar cataplasmas hemostáticas (1 min, restaura 1d de HP a una herida sangrante o 2 HP si no sangra).*

<div id="seq9-hermit"></div>

#### **Hermit Pathway (Senda del Ermitaño) — Sequence 9: Mystery Pryer**

- **Stat Bonuses:** +9 SPI
- **Skill Bonuses:** +4 ritualistic_magic, +3 occultism, +2 divination_arts, +2 thaumatology

**Abilities:**

- **Knowledge Pursuit** (Drawback): Flat 3d6 roll under 14 — GM decides what info you uncover. On failure, gain 1 CoR. On crit failure, gain 3 CoR. May reveal formulas, incantations, etc.
  *(Búsqueda de Conocimiento): Tirada fija de 3d6 bajo 14 — el DJ decide qué info descubres. Al fallar, ganas 1 CoR. En fallo crítico, ganas 3 CoR. Puede revelar fórmulas, encantamientos, etc.*

- **Eyes of Mystery Prying** (Active | Cost: 1 SPI): Passive: -2 to rolls trapping you in Dreams/Illusions. Active (1 SPI/min, SPI roll): Spirit Vision detects Mystical Items/Beyonders via Astral Projection. Examines Astral, Ether, and Heart/Mind body for injury, corruption, and abilities.
  *(Ojos que Indagan Misterios): Pasivo: -2 a tiradas para atraparte en Sueños/Ilusiones. Activo (1 SPI/min, tirada SPI): Visión Espiritual detecta Objetos Místicos/Beyonders por Proyección Astral. Examina cuerpos Astral, Etérico y de Mente/Corazón buscando heridas, corrupción y habilidades.*

- **Corruption Exposure** (Passive): When prying into target with 5+ CoR, evil artifact, or eldritch entity, make immediate Will roll or gain 1 CoR. GM may call for more rolls.
  *(Exposición a la Corrupción): Al indagar a un objetivo con 5+ CoR, artefacto maligno o entidad eldritch, haz tirada de Voluntad inmediata o gana 1 CoR. El DJ puede pedir más tiradas.*

- **Spirit Contract (Ritual)** (Passive): Gains knowledge of Spirit World Creature Contract. Base difficulty reduced to -5. Penalty per existing contract reduced to -2.
  *(Contrato Espiritual (Ritual)): Gana conocimiento del Contrato de Criatura del Mundo Espiritual. Dificultad base reducida a -5. Penalidad por contrato existente reducida a -2.*

- **Quick Rituals** (Passive): Penalty for rushed rituals is decreased by 3.
  *(Rituales Rápidos): La penalidad por rituales apresurados se reduce en 3.*

<div id="seq9-paragon"></div>

#### **Paragon Pathway (Senda del Parangón) — Sequence 9: Savant**

- **Stat Bonuses:** +2 IQ, +1 SPI
- **Skill Bonuses:** +3 engineering, +3 mechanic, +2 chemistry, +2 research, +2 inventor

**Abilities:**

- **Recall — Total Memory** (Passive): Recall every piece of knowledge and experience encountered. No roll required. Understand operation of any mechanism within 1 minute (IQ roll, no penalty).
  *(Recuerdo — Memoria Total): Recuerda todo el conocimiento y experiencia que haya encontrado. Sin tirada. Comprende el funcionamiento de cualquier mecanismo en 1 min (tirada de IQ sin penalidad).*

- **Rapid Analysis** (Passive): Improvised devices and repairs take half the normal construction time.
  *(Análisis Rápido): Los dispositivos improvisados y las reparaciones toman la mitad del tiempo normal.*

<div id="seq9-wheel-of-fortune"></div>

#### **Wheel of Fortune Pathway (Senda de la Rueda de la Fortuna) — Sequence 9: Monster**

- **Stat Bonuses:** +12 SPI
- **Skill Bonuses:** +2 spiritual_perception, +1 spiritual_intuition

**Abilities:**

- **Monster Trance** (Drawback): Occasionally enters a trance-like state (GM's discretion), usually triggered by strong fate currents. Unaware of surroundings and vulnerable.
  *(Trance de Monstruo): Ocasionalmente entra en un estado de trance (a discreción del DJ), por fuertes corrientes de destino. Inconsciente del entorno y vulnerable.*

- **Foresight** (Passive): Once per session, receives a spontaneous, unbidden vision of something about to happen (cryptic image/impression). Cannot be triggered on demand.
  *(Previsión): Una vez por sesión, recibe una visión espontánea de algo que está por suceder (imagen críptica). No puede ser activado a voluntad.*

- **Danger Premonition** (Passive): Passive Danger Sense that includes premonitions of bad luck and fate-based traps, not only physical violence.
  *(Premonición de Peligro): Sentido de Peligro pasivo que incluye premoniciones de mala suerte y trampas del destino, no solo violencia física.*

<div id="seq9-mother"></div>

#### **Mother Pathway (Senda de la Madre) — Sequence 9: Planter**

- **Stat Bonuses:** +3 ST, +2 SPI, +1 HT
- **Skill Bonuses:** +6 farming, +6 gardening, +4 naturalist, +2 herbal_medicine, +4 weather_sense

**Abilities:**

- **Farming Tools Proficiency** (Passive): When fighting with a farming tool, choose the most appropriate skill and gain +2 to the attack roll.
  *(Proficiencia en Herramientas Agrícolas): Al luchar con una herramienta agrícola, elige la habilidad más apropiada y gana +2 a la tirada de ataque.*

<div id="seq9-moon"></div>

#### **Moon Pathway (Senda de la Luna) — Sequence 9: Apothecary**

- **Stat Bonuses:** +2 HT, +4 SPI
- **Skill Bonuses:** +5 pharmacy, +5 poisons, +4 physician, +3 gardening, +2 herb_lore

**Abilities:**

- **Poison Resistance** (Passive): +3 to all HT rolls against poison and toxic substances.
  *(Resistencia al Veneno): +3 a todas las tiradas de HT contra venenos y sustancias tóxicas.*

- **Spirit Vision — Ether Body** (Active | Cost: 1 SPI): Read the Ether Body of living beings, revealing injuries, illnesses, toxins, and supernatural conditions. Costs 1 SPI per minute.
  *(Visión Espiritual — Cuerpo Etérico): Lee el Cuerpo Etérico de seres vivos, revelando heridas, enfermedades, toxinas y condiciones sobrenaturales. Cuesta 1 SPI por minuto.*

- **Potion Concoction** (Active): Brew alchemical concoctions. Can carry up to (SPI) doses. Includes Libido, Gen/Spec Physical Enhancer, Healing (Minor/Mod/Maj), Energy Potion. Requires Pharmacy rolls.
  *(Elaboración de Pociones): Elabora pociones alquímicas. Puede llevar hasta (SPI) dosis. Incluye pociones curativas, de energía y potenciadores físicos. Requiere tiradas de Farmacia.*

<div id="seq9-abyss"></div>

#### **Abyss Pathway (Senda del Abismo) — Sequence 9: Criminal**

- **Stat Bonuses:** +2 ST, +2 Per, +1 SPI, +-1 Will
- **Skill Bonuses:** +3 guns_revolver, +2 knife, +2 brawling, +1 throwing, +2 fast_draw_revolver, +1 wrestling, +1 boxing, +1 streetwise

**Abilities:**

- **Criminal's Mind** (Drawback): Roll Will when suppressing evil desires. Define with the GM which new evil desires define your character — murder, lust, theft, etc.
  *(Mente Criminal): Tira Voluntad al reprimir deseos malvados. Define con el DJ qué nuevos deseos malvados definen a tu personaje: asesinato, lujuria, robo, etc.*

- **Criminal Proficiency — Universal Weapons** (Passive): Regardless of the weapon, they can utilize all of them to kill effectively. Treat any improvised weapon as Knife or Brawling skill. Equally deadly with ranged weapons, can pick up any firearm and fire it with ease using the most similar Gun skill.
  *(Proficiencia Criminal — Armas Universales): Independientemente del arma, pueden utilizarlas todas para matar con eficacia. Trata cualquier arma improvisada con la habilidad de Cuchillo o Pelea. Igualmente mortales con armas a distancia, pueden usar cualquier arma de fuego con facilidad usando la habilidad de Armas de Fuego más similar.*

<div id="seq9-chained"></div>

#### **Chained Pathway (Senda del Encadenado) — Sequence 9: Prisoner**

- **Stat Bonuses:** +2 ST, +1 HT, +2 Per
- **Skill Bonuses:** +5 holdout, +5 lockpicking, +5 escape, +3 explosives_demolition, +2 intimidation, +1 stealth, +1 brawling

**Abilities:**

- **Binding (Prisoner)** (Passive): Spirituality and desires are Bound; Spiritual Perception and readings against them are at -4 when composed. Appear indistinct and calm, making it hard to detect you are a Beyonder.
  *(Atadura (Prisionero)): Espiritualidad y deseos están atados; la Percepción Espiritual y las lecturas contra ellos tienen -4 si están compuestos. Parecen indistintos y calmados, dificultando detectar que son Beyonders.*

- **Turbulent Heart** (Drawback): Roll Will when suppressing desires. Define with the GM which new strong desires define your character.
  *(Corazón Turbulento): Tira Voluntad al reprimir deseos. Define con el DJ qué nuevos deseos fuertes definen a tu personaje.*

- **Knowledge — Criminal Expert** (Passive): Mastery of criminal techniques. Improvised weapons treated as Brawling or ST. Escape rolls against mundane confinement suffer no penalty. Always know hidden exits within 10m.
  *(Conocimiento — Experto Criminal): Dominio de técnicas criminales. Armas improvisadas se tratan como Pelea o ST. Tiradas de escape contra encierros mundanos no tienen penalización. Siempre conoce salidas ocultas en 10m.*

<div id="seq9-justiciar"></div>

#### **Justiciar Pathway (Senda del Justiciero) — Sequence 9: Arbiter**

- **Stat Bonuses:** +1 ST, +1 DX, +1 Will, +1 SPI
- **Skill Bonuses:** +2 brawling, +2 wrestling

**Abilities:**

- **Voice** (Passive): +2 to all rolls to influence others through speech.
  *(Voz): +2 a todas las tiradas para influenciar a otros mediante el habla.*

- **Authority** (Active | Cost: 1 SPI): 1 SPI for scene. Opposing NPCs roll Will; on failure suffer -1 to attack, defense, and Quick Contests vs Arbiter. Crit failure: penalty -2 and cannot attack Arbiter for 1d turns. Player chars feel strong pull but choose freely.
  *(Autoridad): 1 SPI por escena. PNJs oponentes tiran Voluntad; si fallan sufren -1 al ataque, defensa y Competiciones Rápidas contra el Árbitro. Fallo crit: penalidad -2 y no pueden atacarlo por 1d turnos. PJs sienten el impulso pero son libres.*

<div id="seq9-black-emperor"></div>

#### **Black Emperor Pathway (Senda del Emperador Negro) — Sequence 9: Lawyer**

- **Stat Bonuses:** +1 IQ, +1 SPI
- **Skill Bonuses:** +4 law, +3 fast_talk, +3 diplomacy

**Abilities:**

- **Eloquence** (Passive): When a Lawyer argues with full conviction, all listeners must succeed at a Will roll (-3) or find themselves inclined to agree, even if the claim is logically weak. Strong contrary evidence overrides this.
  *(Elocuencia): Cuando un Abogado argumenta con total convicción, todos los oyentes deben superar una tirada de Voluntad (-3) o sentirse inclinados a estar de acuerdo, incluso si la afirmación es lógicamente débil. Evidencia contraria fuerte puede anular esto.*

<div id="seq9-eternal-aeon"></div>

#### **Eternal Aeon (Inevitability) Pathway (Eternal Aeon (Inevitability) Pathway) — Sequence 9: Dancer**

- **Stat Bonuses:** +4 SPI, +1 ST
- **Skill Bonuses:** +2 occultism, +2 spiritual_intuition

**Abilities:**

- **Spiritual Dance** (Active): By performing a mystical dance, they enter a transcendent state, gaining +2 to all Will rolls for 1d turns.
  *(Danza Espiritual): Al realizar una danza mística, entran en un estado trascendente, ganando +2 a todas las tiradas de Voluntad por 1d turnos.*

- **Appeasing Dance** (Active): By dancing, witnesses must roll Will at -2 or be pacified for the duration of the dance and 1d turns after.
  *(Danza Apaciguadora): Al bailar, los testigos deben tirar Voluntad con -2 o ser pacificados durante la duración del baile y 1d turnos después.*

- **Vessel Dance** (Active): Summon up to 3 spiritual creatures. By offering blood, the Dancer can invite one into their body, gaining its abilities but risking possession (GM's discretion). On a critical failure, summons a hostile entity.
  *(Danza de la Vasija): Invoca hasta 3 criaturas espirituales. Ofreciendo sangre, el Bailarín puede invitar a una a su cuerpo, ganando sus habilidades pero arriesgando posesión. En un fallo crítico, invoca una entidad hostil.*

<div id="seq9-monarch-of-decay"></div>

#### **Monarch of Decay Pathway (Monarch of Decay Pathway) — Sequence 9: Patient**

- **Stat Bonuses:** +4 SPI, +1 ST
- **Skill Bonuses:** +2 occultism, +2 spiritual_intuition

**Abilities:**

- **Patient Domain Art 1** (Passive): _Powered by GURPS: Pathways — Lord of the Mysteries_
  *(Arte de Dominio 1): _Powered by GURPS: Pathways — Lord of the Mysteries_*

- **Patient Domain Art 2** (Passive): rotten, or contaminated
  *(Arte de Dominio 2): rotten, or contaminated*

<div id="seq9-high-dimensional-overseer"></div>

#### **High-Dimensional Overseer Pathway (High-Dimensional Overseer Pathway) — Sequence 9: Shaman**

- **Stat Bonuses:** +4 SPI, +1 ST
- **Skill Bonuses:** +2 occultism, +2 spiritual_intuition

**Abilities:**

- **Shaman Domain Art 1** (Active | Cost: 1 SPI): ence 9: D|Territory Creation (6 SPI):The Shaman ma
  *(Arte de Dominio 1): ence 9: D|Territory Creation (6 SPI):The Shaman ma*

- **Shaman Domain Art 2** (Passive): around it using Ritualistic Magic. Roll Rituali
  *(Arte de Dominio 2): around it using Ritualistic Magic. Roll Rituali*

- **Shaman Domain Art 3** (Passive): (~75m radius); critical success creates an enh
  *(Arte de Dominio 3): (~75m radius); critical success creates an enh*

- **Shaman Domain Art 4** (Passive): critical failure, the Shaman suffers spiritual w
  *(Arte de Dominio 4): critical failure, the Shaman suffers spiritual w*

- **Shaman Domain Art 5** (Passive): them. Within their territory, the Shaman recei
  *(Arte de Dominio 5): them. Within their territory, the Shaman recei*

- **Shaman Domain Art 6** (Passive): (varies):Functionally similar to the Seq 7 W
  *(Arte de Dominio 6): (varies):Functionally similar to the Seq 7 W*

- **Shaman Domain Art 7** (Passive): powers of spirituality within their domain to c
  *(Arte de Dominio 7): powers of spirituality within their domain to c*

- **Shaman Domain Art 8** (Passive): GM, and the spells are always tied to the spiri
  *(Arte de Dominio 8): GM, and the spells are always tied to the spiri*

- **Shaman Domain Art 9** (Passive): spirituality may be used to create a rain spell;
  *(Arte de Dominio 9): spirituality may be used to create a rain spell;*

- **Shaman Domain Art 10** (Passive): spell. All such spells use the Ritualistic Magi
  *(Arte de Dominio 10): spell. All such spells use the Ritualistic Magi*

<div id="seq9-goddess-of-fate"></div>

#### **Goddess of Fate Pathway (Goddess of Fate Pathway) — Sequence 9: Dreamless**

- **Stat Bonuses:** +4 SPI
- **Skill Bonuses:** +2 occultism, +2 spiritual_intuition

**Abilities:**

- **Dreamless Divine Boon** (Passive): Boon granting powers of the Goddess of Fate Pathway. Channels outer deity authority.
  *(Bendición Divina: Dreamless): Poderes otorgados de la senda Goddess of Fate Pathway. Canaliza la autoridad de una deidad exterior.*

<div id="seq9-primordial-hunger"></div>

#### **Primordial Hunger Pathway (Primordial Hunger Pathway) — Sequence 9: Tramp**

- **Stat Bonuses:** +4 SPI, +1 ST
- **Skill Bonuses:** +2 occultism, +2 spiritual_intuition

**Abilities:**

- **Tramp Domain Art 1** (Passive): to Will rolls
  *(Arte de Dominio 1): to Will rolls*

- **Tramp Domain Art 2** (Passive): precedence|ing Hunger:When doing anythin
  *(Arte de Dominio 2): precedence|ing Hunger:When doing anythin*

- **Tramp Domain Art 3** (Passive): to resist any activity related to du
  *(Arte de Dominio 3): to resist any activity related to du*

- **Tramp Domain Art 4** (Passive): over nearly everything else.|g other than searching for food or eating,
  *(Arte de Dominio 4): over nearly everything else.|g other than searching for food or eating,*

- **Tramp Domain Art 5** (Passive): ty, compulsion, desire, or goal. Their crav|the Tramp suffers -5
  *(Arte de Dominio 5): ty, compulsion, desire, or goal. Their crav|the Tramp suffers -5*

- **Tramp Domain Art 6** (Passive): ing for food takes|
  *(Arte de Dominio 6): ing for food takes|*

- **Tramp Domain Art 7** (Passive): _Powered by GURPS: Pathways — Lord of the Mysteries_
  *(Arte de Dominio 7): _Powered by GURPS: Pathways — Lord of the Mysteries_*

<div id="seq9-mother-goddess-of-depravity"></div>

#### **Mother Goddess of Depravity Pathway (Mother Goddess of Depravity Pathway) — Sequence 9: Villain**

- **Stat Bonuses:** +4 SPI, +1 ST
- **Skill Bonuses:** +2 occultism, +2 spiritual_intuition

**Abilities:**

- **Villain Domain Art 1** (Passive): _Powered by GURPS: Pathways — Lord of the Mysteries_
  *(Arte de Dominio 1): _Powered by GURPS: Pathways — Lord of the Mysteries_*

<div id="seq9-patriarch"></div>

#### **Patriarch Pathway (Patriarch Pathway) — Sequence 9: Scrooge**

- **Stat Bonuses:** +4 SPI, +1 ST
- **Skill Bonuses:** +2 occultism, +2 spiritual_intuition

**Abilities:**

- **Scrooge Domain Art 1** (Passive): to the oppo
  *(Arte de Dominio 1): to the oppo*

- **Scrooge Domain Art 2** (Passive): Within 24 h
  *(Arte de Dominio 2): Within 24 h*

- **Scrooge Domain Art 3** (Passive): current loca
  *(Arte de Dominio 3): current loca*

- **Scrooge Domain Art 4** (Passive): a person to
  *(Arte de Dominio 4): a person to*

- **Scrooge Domain Art 5** (Passive): to the oppo
  *(Arte de Dominio 5): to the oppo*

- **Scrooge Domain Art 6** (Passive): nent's Will roll, or -4 if an object is
  *(Arte de Dominio 6): nent's Will roll, or -4 if an object is*

<div id="seq9-chaos-mist"></div>

#### **Chaos Mist Pathway (Chaos Mist Pathway) — Sequence 9: Broker**

- **Stat Bonuses:** +4 SPI, +1 ST
- **Skill Bonuses:** +2 occultism, +2 spiritual_intuition

**Abilities:**

- **Broker Domain Art 1** (Passive): ence 9: Ini
  *(Arte de Dominio 1): ence 9: Ini*

- **Broker Domain Art 2** (Passive): room, conversation, or even something as abs
  *(Arte de Dominio 2): room, conversation, or even something as abs*

- **Broker Domain Art 3** (Passive): required. The GM must answer by describing
  *(Arte de Dominio 3): required. The GM must answer by describing*

- **Broker Domain Art 4** (Passive): to be a darker grey" showing the disorderly in
  *(Arte de Dominio 4): to be a darker grey" showing the disorderly in*

- **Broker Domain Art 5** (Passive): almost pure white" showing incorruptible just
  *(Arte de Dominio 5): almost pure white" showing incorruptible just*

- **Broker Domain Art 6** (Passive): tiator · Everlasting Pathway
  *(Arte de Dominio 6): tiator · Everlasting Pathway*

- **Broker Domain Art 7** (Passive): tract as an organisation, though appropriate knowledge is
  *(Arte de Dominio 7): tract as an organisation, though appropriate knowledge is*

- **Broker Domain Art 8** (Passive): the shade of 'grey' that is applicable — e.g. "the room appears
  *(Arte de Dominio 8): the shade of 'grey' that is applicable — e.g. "the room appears*

<div id="seq9-everlasting"></div>

#### **Everlasting Pathway (Everlasting Pathway) — Sequence 9: Initiator**

- **Stat Bonuses:** +4 SPI
- **Skill Bonuses:** +2 occultism, +2 spiritual_intuition

**Abilities:**

- **Initiator Divine Boon** (Passive): Boon granting powers of the Everlasting Pathway. Channels outer deity authority.
  *(Bendición Divina: Initiator): Poderes otorgados de la senda Everlasting Pathway. Canaliza la autoridad de una deidad exterior.*

<div id="seq9-condenser"></div>

#### **Condenser Pathway (Condenser Pathway) — Sequence 9: Astronomy Aficionado**

- **Stat Bonuses:** +4 SPI, +1 ST
- **Skill Bonuses:** +2 occultism, +2 spiritual_intuition

**Abilities:**

- **Astronomy Aficionado Domain Art 1** (Passive): _Powered by GURPS: Pathways — Lord of the Mysteries_
  *(Arte de Dominio 1): _Powered by GURPS: Pathways — Lord of the Mysteries_*

- **Astronomy Aficionado Domain Art 2** (Passive): The following entries document higher sequences of certain non-standard pathways where the potion formula or boon structure has been recorded.
  *(Arte de Dominio 2): The following entries document higher sequences of certain non-standard pathways where the potion formula or boon structure has been recorded.*

- **Astronomy Aficionado Domain Art 3** (Passive): Reading these entries: See Chapter 9 for instructions on how to read a pathway entry. The same rules for potion-granted skills and attributes from Chapter 9 apply here.
  *(Arte de Dominio 3): Reading these entries: See Chapter 9 for instructions on how to read a pathway entry. The same rules for potion-granted skills and attributes from Chapter 9 apply here.*

- **Astronomy Aficionado Domain Art 4** (Passive): _Powered by GURPS: Pathways — Lord of the Mysteries_
  *(Arte de Dominio 4): _Powered by GURPS: Pathways — Lord of the Mysteries_*


<div id="ch10"></div>

### **Chapter 10: Sequence 8 Potion Effects**

This chapter details the specific effects, stat bonuses, and abilities granted by consuming a Sequence 8 potion. Abilities cost SPI as listed; passive abilities are always active.

<div id="seq8-fool"></div>

#### **Fool Pathway (Senda del Loco) — Sequence 8: Clown**

- **Stat Bonuses:** +1 ST, +2 DX, +2 SPI
- **Skill Bonuses:** +5 acrobatics, +5 acting, +3 throwing, +3 spiritual_intuition

**Abilities:**

- **Perfect Balance** (Passive): +6 avoid knockdown; +2 Acrobatics, Climbing, Piloting.
  *(Equilibrio Perfecto): +6 evitar derribo; +2 Acrobacias, Escalar, Pilotar.*

- **Clown Agility** (Passive): Supernatural agility for impossible acrobatics. Land safely from any fall.
  *(Agilidad de Payaso): Agilidad sobrenatural para acrobacias imposibles. Aterriza seguro de cualquier caída.*

- **Paper Daggers** (Active | Cost: 1 SPI): Turn paper as hard and sharp as steel. Deals sw-1 cut, pierces stone/bone. Lasts 1 attack.
  *(Dagas de Papel): Convierte el papel tan duro y afilado como acero. Hace daño sw-1 corte, perfora piedra/hueso. Dura 1 ataque.*

- **Clown Intuition** (Passive): Once per scene, make one free Dodge/Step before an attack hits. GM may grant vision "flash".
  *(Intuición de Payaso): Una vez por escena, haz un Esquivar/Paso gratis antes de que un ataque impacte. El GM puede otorgar una "visión" fugaz.*

- **Spirit Vision (Reinforced)** (Passive): Range increased to 15m. Read surface emotions and basic health without a roll.
  *(Visión Espiritual (Reforzada)): Rango aumentado a 15m. Lee emociones superficiales y salud básica sin tirada.*

- **Danger Intuition (Reinforced)** (Passive): Warning now provides rough direction and general distance of the threat.
  *(Intuición de Peligro (Reforzada)): La advertencia ahora proporciona una dirección aproximada y distancia general de la amenaza.*

<div id="seq8-error"></div>

#### **Error Pathway (Senda de Error) — Sequence 8: Swindler**

- **Stat Bonuses:** +1 DX, +1 IQ, +2 SPI
- **Skill Bonuses:** +5 fast-talk, +2 acrobatics, +2 observation

**Abilities:**

- **Mental Disruption** (Active | Cost: 1 SPI): Cause certain hallucinations to be experienced by a target. Target rolls Will-3. Effects last up to 1 hour or until they break free.
  *(Interrupción Mental): Causa ciertas alucinaciones a un objetivo. El objetivo tira Voluntad-3. Los efectos duran hasta 1 hora o hasta que se liberen.*

- **Reminder / Theft** (Active): Steal spiritual materials from a 2m distance as long as it interacts with the spirit world. Also steal small non-material items partially in contact with the spirit world.
  *(Recordatorio / Robo): Roba materiales espirituales a 2m de distancia mientras interactúen con el mundo espiritual. También roba pequeños objetos inmateriales.*

- **Superior Observation** (Passive): Treasure sense upgrades to 20m. Read target micro-expressions: +2 to Detect Lies, Body Language, Observation.
  *(Observación Superior): El sentido del tesoro se actualiza a 20m. Lee microexpresiones: +2 a Detectar Mentiras, Lenguaje Corporal, Observación.*

<div id="seq8-door"></div>

#### **Door Pathway (Senda de Puerta) — Sequence 8: Trickmaster**

- **Stat Bonuses:** +1 DX, +1 IQ, +2 SPI
- **Skill Bonuses:** +4 sleight_of_hand, +3 escape, +2 acrobatics

**Abilities:**

- **Trickmaster Spellcasting** (Active | Cost: 1 SPI): Cast tricks (1 SPI each, 10m range): Flash (blind), Electric Shock (stun), Freezing (cold), Burning, Wind, Fog, Tumble, Loud Noise, Black Curtain, Escape Trick, Gas Transfer, Object Bounce.
  *(Hechizos de Maestro de Trucos): Lanza trucos (1 SPI, rango 10m): Destello (ciega), Choque Eléctrico (aturde), Congelación, Quemadura, Viento, Niebla, Caída, Ruido Fuerte, Cortina Negra, Truco de Escape, Transferencia de Gas, Rebote de Objetos.*

- **Door Opening (Reinforced)** (Passive): Open warded doors without a roll. Bodily-door attack deals 1d+1 cut. Escape bonus increases to +4.
  *(Apertura de Puerta (Reforzada)): Abre puertas protegidas sin tirar dados. El ataque de puerta corporal inflige 1d+1 de corte. El bono de escape aumenta a +4.*

<div id="seq8-visionary"></div>

#### **Visionary Pathway (Senda de Visionario) — Sequence 8: Telepathist**

- **Stat Bonuses:** +1 IQ, +2 SPI
- **Skill Bonuses:** +2 psychology, +3 detect_lies, +3 acting

**Abilities:**

- **Mind Reading** (Active | Cost: 1 SPI): Roll Psychology vs Will to read surface thoughts undetected. Predict immediate actions. 1 SPI/minute.
  *(Lectura Mental): Tira Psicología vs Voluntad para leer pensamientos superficiales. Predice acciones inmediatas. 1 SPI/minuto.*

- **Enhanced Body Language Analysis** (Passive): Passively read deeper emotional states, spiritual condition, and hidden auras with no SPI cost. Now always-on.
  *(Análisis de Lenguaje Corporal Mejorado): Lee pasivamente estados emocionales más profundos, condiciones espirituales y auras ocultas sin costo. Siempre activo.*

<div id="seq8-sun"></div>

#### **Sun Pathway (Senda del Sol) — Sequence 8: Light Suppliant**

- **Stat Bonuses:** +8 SPI
- **Skill Bonuses:** +3 ritualistic_magic

**Abilities:**

- **Sunshine** (Active | Cost: 3 SPI): Creates light like a scorching Sun in a 5m radius. Undead/ghosts take 2d6 burning (HT/2 to halve). Living roll HT or blinded 1d3 turns (dazzled -1 on success). Lasts 1 min as full daylight.
  *(Luz Solar): Crea una luz como un Sol abrasador en 5m. No muertos/fantasmas sufren 2d6 quemadura (HT/2 reduce mitad). Vivos tiran HT o quedan ciegos 1d3 turnos. Dura 1 min.*

- **Blessing** (Active | Cost: 2 SPI): Bless self and allies within 5m for 10 min: +3 resistance vs Fear/Cold/Darkness/Death. Weapon attacks deal +2 dmg vs undead. Immune to low-level undead passive fear.
  *(Bendición): Bendice a ti y aliados a 5m por 10 min: +3 a resistencia vs Miedo/Frío/Oscuridad/Muerte. Armas infligen +2 de daño vs no muertos. Inmunidad al miedo de no muertos menores.*

- **Daytime** (Active | Cost: 2 SPI): Surrounding 10m receives Light, spreading naturally. Lasts 5 minutes.
  *(Día): 10m alrededor reciben Luz, esparciéndose naturalmente. Dura 5 minutos.*

- **Night Vision** (Active | Cost: 1 SPI): Light two miniature Suns in eyes to see through Darkness.
  *(Visión Nocturna): Enciende dos Soles en miniatura en los ojos para ver a través de la Oscuridad.*

- **Evil Detection** (Passive): Passively senses undead creatures and evil entities within ~10m without roll. Manifests as a feeling of wrongness.
  *(Detección de Mal): Siente pasivamente no muertos y entidades malvadas a ~10m sin tiradas. Se manifiesta como un presentimiento de maldad.*

- **Holy Water** (Active): Ritual to imbue water with Sun authority. 1d6 corrosion vs undead/spirits (ignores non-magical DR). Can be used to exorcise or purify objects.
  *(Agua Bendita): Ritual para imbuir agua con autoridad Solar. 1d6 de corrosión vs no muertos (ignora RD no mágica). Permite exorcizar o purificar objetos.*

- **DR 2 (Fire/Light)** (Passive): Gain Damage Resistance 2 specifically against fire and light damage.
  *(RD 2 (Fuego/Luz)): Gana Resistencia al Daño 2 específicamente contra daño de fuego y luz.*

- **Singing (Reinforced)** (Passive): Song duration doubles to 20 min. Courage ignores Fear up to -5; Strength/Agility give +2 rolls; Spiritual Recovery restores 2 SPI.
  *(Canto (Reforzado)): La duración del canto se duplica a 20 min. Coraje ignora Miedo hasta -5; Fuerza/Agilidad dan +2; Recuperación Espiritual da 2 SPI.*

<div id="seq8-tyrant"></div>

#### **Tyrant Pathway (Senda del Tirano) — Sequence 8: Folk of Rage**

- **Stat Bonuses:** +2 ST, +2 DX, +1 SPI
- **Skill Bonuses:** None

**Abilities:**

- **Wrath** (Active): Accumulate 4 wrath by hitting/being hit. At 4 wrath: Rampage (3 attacks at 0/-2/-4) or Raging Blow (+3 hit/dmg, ignores 2 DR).
  *(Ira): Acumula 4 de ira al golpear/ser golpeado. A 4 de ira: Frenesí (3 ataques a 0/-2/-4) o Golpe Rabioso (+3 ataque/daño, ignora 2 RD).*

- **Phantom Scales (Reinforced)** (Passive): Scales thicken into DR 2 (physical). Grappling penalty increases to -4.
  *(Escamas Fantasma (Reforzadas)): Las escamas se espesan a RD 2 (física). La penalización de apresamiento aumenta a -4.*

- **Amphibious (Reinforced)** (Passive): Full Amphibious. Submerge 30 min without air. Dive 30m without protection.
  *(Anfibio (Reforzado)): Anfibio completo. Sumérgete 30 min sin aire. Bucea 30m sin protección.*

<div id="seq8-white-tower"></div>

#### **White Tower Pathway (Senda de la Torre Blanca) — Sequence 8: Student of Ratiocination**

- **Stat Bonuses:** +2 IQ, +2 SPI
- **Skill Bonuses:** +2 observation, +4 ritualistic_magic

**Abilities:**

- **Fluid Intellect** (Passive): IQ-2 to unfamiliar IQ rolls; can attempt VH skills without default penalties.
  *(Intelecto Fluido): IQ-2 a tiradas de IQ no familiares; puede intentar habilidades Muy Difíciles sin penalizaciones base.*

- **Reading (Reinforced)** (Passive): IQ roll for general knowledge gains +2. Obscure material penalties reduced by 2. Language learning time reduced to 1/3.
  *(Lectura (Reforzada)): Tirada de IQ de conocimiento general gana +2. Penalizaciones de material oscuro reducidas en 2. Idiomas en 1/3 de tiempo.*

<div id="seq8-hanged-man"></div>

#### **Hanged Man Pathway (Senda del Colgado) — Sequence 8: Listener**

- **Stat Bonuses:** +3 SPI
- **Skill Bonuses:** +3 ritualistic_magic, +3 occultism, +2 spiritual_perception

**Abilities:**

- **Acute Hearing** (Passive): +2 to Hearing rolls; detect faint sounds, eavesdrop through walls.
  *(Audición Aguda): +2 a tiradas de Audición; detecta sonidos tenues, escucha a través de paredes.*

- **Listening (Passive)** (Passive): Always hear voices of existences within 80m. Cannot be turned off. Roll 3d6 to avoid Corruption from high-level sources.
  *(Escucha (Pasiva)): Siempre escucha voces de existencias a 80m. No se puede apagar. Tira 3d6 para evitar Corrupción de fuentes de alto nivel.*

- **Listening (Active)** (Active | Cost: 1 SPI): Focus on a single source. Roll 3d6: <13 receives clear information, 14+ hears the True Creator or higher existence.
  *(Escucha (Activa)): Enfoca en una sola fuente. Tira 3d6: <13 recibe información clara, 14+ escucha al Creador Verdadero u otra existencia superior.*

- **Knowledge (Reinforced)** (Passive): Gains 2 additional honorific names. Spiritual Perception rolls gain +2.
  *(Conocimiento (Reforzado)): Gana 2 nombres honoríficos adicionales. Percepción Espiritual gana +2.*

- **Spiritual Perception (Reinforced)** (Passive): Passive range expands to 50m. Automatically detect active Beyonder abilities within range.
  *(Percepción Espiritual (Reforzada)): El rango pasivo se expande a 50m. Detecta automáticamente habilidades Beyonder activas en el rango.*

<div id="seq8-darkness"></div>

#### **Darkness Pathway (Senda de la Oscuridad) — Sequence 8: Midnight Poet**

- **Stat Bonuses:** +3 SPI
- **Skill Bonuses:** +3 brawling, +2 guns_pistol, +2 climbing, +2 ritualistic_magic

**Abilities:**

- **Midnight Poem — Spell Effects** (Active | Cost: 2 SPI): Recite poem for 1 round. Tranquilize (calm), Lullaby (sleep, ~20m radius), Pacify (unresponsive), or Fear (dread).
  *(Poema de Medianoche — Efectos de Hechizo): Recita un poema por 1 ronda. Tranquilizar (calma), Canción de Cuna (sueño, ~20m), Pacificar (no responde) o Miedo (terror).*

- **Nocturnality (Reinforced)** (Passive): Bonus during night increases to +2. In total darkness, it becomes +3.
  *(Nocturnidad (Reforzada)): El bono nocturno aumenta a +2. En oscuridad total, pasa a ser +3.*

- **Danger Detection (Reinforced)** (Passive): Bonus in low-light is +4. Senses danger up to 20m away with pin-point direction.
  *(Detección de Peligro (Reforzada)): Bono con poca luz de +4. Siente peligro a 20m con dirección exacta.*

<div id="seq8-death"></div>

#### **Death Pathway (Senda de la Muerte) — Sequence 8: Gravedigger**

- **Stat Bonuses:** +2 DX, +3 SPI
- **Skill Bonuses:** +4 occultism, +3 hidden_lore_spirits, +2 ritualistic_magic

**Abilities:**

- **Spirit Communication** (Active | Cost: 1 SPI): Communicate with nearby spirits and command them to do simple actions (grasp, immobilize, reveal info). Range 10 ft, 1 min. Spirits make ST vs target ST to grapple.
  *(Comunicación Espiritual): Comunícate con espíritus cercanos y ordénales acciones simples (agarrar, inmovilizar, revelar info). Alcance 10 pies, 1 min. El espíritu tira ST vs ST para agarrar.*

- **Eye of Death** (Active | Cost: 1 SPI): Examine Undead/Spirit. GM reveals one vulnerability. For scene: +2 hit, +2 damage, ignore 2 DR against that creature. Costs 1 FP.
  *(Ojo de la Muerte): Examina un No-muerto/Espíritu. El DJ revela una debilidad. En la escena: +2 ataque, +2 daño, ignora 2 RD contra esa criatura. Cuesta 1 FP.*

- **Spirit Vision (Enhanced)** (Passive): Examine parts of a Soul to deduce health/emotions, detect magical auras, and perceive spirits passively.
  *(Visión Espiritual (Mejorada)): Examina partes de un Alma para deducir salud/emociones, detectar auras mágicas y percibir espíritus pasivamente.*

- **Undead Deterrence (Reinforced)** (Passive): Affects undead with SPI <= yours + 2. Controlled undead roll Will at -4 to act against you.
  *(Disuasión de No-Muertos (Reforzada)): Afecta a no-muertos con SPI <= al tuyo + 2. No-muertos controlados tiran Voluntad con -4 para atacarte.*

- **Undead Detection (Reinforced)** (Passive): Range increases to 25m. Identify specific type of undead without a roll.
  *(Detección de No-Muertos (Reforzada)): El alcance aumenta a 25m. Identifica el tipo específico de no-muerto sin tirar.*

<div id="seq8-twilight-giant"></div>

#### **Twilight Giant Pathway (Senda del Gigante del Crepúsculo) — Sequence 8: Pugilist**

- **Stat Bonuses:** +3 ST, +1 HT, +1 SPI
- **Skill Bonuses:** +5 brawling, +3 wrestling, +2 intimidation

**Abilities:**

- **DR 1 (All)** (Passive): Resistance to all physical damage.
  *(RD 1 (Todo)): Resistencia a todo daño físico.*

- **High Pain Threshold** (Passive): +3 to HT rolls to avoid knockdown/stun; no shock penalty from injury.
  *(Alto Umbral de Dolor): +3 a tiradas de HT para evitar derribo/aturdimiento; sin penalización por shock de heridas.*

- **Iron Body** (Active): When taking damage from a supernatural source, may spend 1-3 FP as a reactive free action to reduce incoming damage by 2 per FP spent (applied after resistance roll, before DR).
  *(Cuerpo de Hierro): Al recibir daño de una fuente sobrenatural, puede gastar 1-3 FP como acción libre reactiva para reducir el daño entrante en 2 por cada FP gastado (aplicado después de la tirada de resistencia, antes de la RD).*

- **Combat Mastery (Reinforced)** (Passive): Treats any melee weapon as known at effective DX immediately (no warm-up needed). Ranged weapons still need one use to reach full proficiency.
  *(Maestría en Combate (Reforzada)): Trata cualquier arma cuerpo a cuerpo como conocida a nivel DX efectivo inmediatamente (sin calentamiento). Las armas a distancia aún necesitan un uso para alcanzar la competencia completa.*

<div id="seq8-demoness"></div>

#### **Demoness Pathway (Senda de la Demonio) — Sequence 8: Instigator**

- **Stat Bonuses:** +1 DX, +1 Per, +1 SPI
- **Skill Bonuses:** +4 fast_talk, +4 psychology, +3 acting

**Abilities:**

- **Charisma +2** (Passive): +2 to Influence skills; NPCs predisposed to trust and listen to you.
  *(Carisma +2): +2 a habilidades de Influencia; los PNJs están predispuestos a confiar en ti y escucharte.*

- **Instigation — Passive** (Passive): Sense emotions/malice within 10m. Roll Per to reveal hidden intent/anger. Social situations read instinctively; success reveals weakest link in room.
  *(Instigación — Pasiva): Siente emociones/malicia en 10m. Tira Percepción para revelar intenciones/ira ocultas. Lee situaciones sociales instintivamente; el éxito revela el eslabón más débil.*

- **Instigation — Active** (Active | Cost: 1 SPI): Speak/gesture to surface suppressed desires. Fast-Talk (-6 if gesture only) vs Will. On success, target acts on desire within 1d min, believing it's their own. Ignites crowd effect.
  *(Instigación — Activa): Habla/gesticula para aflorar deseos reprimidos. Charlatanería (-6 si solo gesto) vs Voluntad. En éxito, el objetivo actúa en 1d min creyendo que es su idea. Inicia efecto de multitud.*

- **Feather Fall (Reinforced)** (Passive): Glide 2m horizontal per 3m vertical, arrest fall instantly as free action without SPI cost.
  *(Caída de Pluma (Reforzada)): Planea 2m horizontales por 3m verticales, frena caída al instante como acción libre sin coste de SPI.*

- **Shadow Concealment (Reinforced)** (Passive): Detection penalty increases to -5 when stationary, -2 when moving slowly in shadows.
  *(Ocultamiento en las Sombras (Reforzado)): La penalidad de detección aumenta a -5 quieto, -2 moviéndose lentamente en las sombras.*

<div id="seq8-red-priest"></div>

#### **Red Priest Pathway (Senda de Red Priest) — Sequence 8: Provoker**

- **Stat Bonuses:** +1 ST, +1 HT, +3 SPI
- **Skill Bonuses:** +3 intimidation, +2 fast_talk, +2 psychology

**Abilities:**

- **Spirit Vision** (Active | Cost: 1 SPI): The Provoker activates Spirit Vision with a simple gesture — quickly and discreetly. No concentration or obvious ritual required. Costs 1 SPI per minute.
  *(Visión Espiritual): El Provoker activa la Visión Espiritual con un simple gesto, de manera rápida y discreta. No requiere concentración ni ritual obvio. Cuesta 1 SPI por minuto.*

- **Provocation: Vague Insult** (Active): These insults can target an individual or multiple people and are made up from general terms and insulting words. Target must succeed at a Will roll (-2) to resist being provoked. Failing will cause the target to only target the Provoker for 1 turn.
  *(Provocación: Insulto Vago): Estos insultos pueden dirigirse a un individuo o a varias personas y están formados por términos generales y palabras insultantes. El objetivo debe superar una tirada de Voluntad (-2) para no ser provocado. Si falla, el objetivo solo atacará al Provoker durante 1 turno.*

- **Provocation: Detailed Insult** (Active): The Provoker uses a specific observation as a base for constructing an insult. Target must succeed at a Will roll (-4) to resist. Failing causes the target to only target the Provoker for 2 turns. Can target up to 2 subjects if correlated.
  *(Provocación: Insulto Detallado): El Provoker usa una observación específica para construir un insulto. El objetivo debe superar Voluntad (-4) para resistir. Si falla, solo atacará al Provoker durante 2 turnos. Puede afectar hasta a 2 sujetos si hay correlación.*

- **Provocation: Unique Insult** (Active): Based on something that is a part of the target and they know it, hurting their ego. Target must succeed at a Will roll (-6) to resist. Failing causes the target to only target the Provoker for 3 turns.
  *(Provocación: Insulto Único): Basado en una inseguridad conocida por el objetivo, hiriendo su ego. El objetivo debe superar Voluntad (-6) para resistir. Si falla, solo atacará al Provoker durante 3 turnos.*

- **Reinforced Environment Memory** (Passive): Can now sense alterations within 20 m (double original range). Natural traps are detected automatically at 5 m without any roll.
  *(Memoria del Entorno Reforzada): Ahora puede sentir alteraciones a 20 m (el doble del rango). Las trampas naturales se detectan automáticamente a 5 m sin tirar.*

- **Reinforced Survival Knowledge** (Passive): Hemostatic poultices now restore 1d+1 HP to a bleeding wound (or 3 HP if not bleeding). Can identify poisonous plants and animal organs instinctively regardless of terrain type.
  *(Conocimiento de Supervivencia Reforzado): Las cataplasmas hemostáticas ahora restauran 1d+1 de HP a una herida sangrante (o 3 HP si no sangra). Puede identificar plantas y órganos venenosos instintivamente sin importar el terreno.*

<div id="seq8-hermit"></div>

#### **Hermit Pathway (Senda del Ermitaño) — Sequence 8: Melee Scholar**

- **Stat Bonuses:** +2 DX, +1 ST, +1 SPI
- **Skill Bonuses:** +4 occultism, +3 shortsword, +3 ritualistic_magic, +3 hidden_lore_any, +2 broadsword

**Abilities:**

- **Combat Reflexes** (Passive): +1 to all active defenses, +6 to recover from stun, never freeze in surprise.
  *(Reflejos de Combate): +1 a defensas activas, +6 para recuperarse de aturdimiento, nunca se congela por sorpresa.*

- **Combat Prying** (Active | Cost: 2 SPI): Pry into mystery of combat and learn from target. You gain a permanent +1 in the relevant skill.
  *(Indagación de Combate): Indaga en el misterio del combate y aprende del objetivo. Ganas un +1 permanente en la habilidad relevante.*

- **Eyes of Mystery Prying (Reinforced)** (Passive): Passive penalty to Dream/Illusion increases to -3. Active use reveals combat weaknesses (low HP, low defense, damage vulnerability) in Ether Body.
  *(Ojos que Indagan Misterios (Reforzados)): Penalidad pasiva a Sueño/Ilusión aumenta a -3. Uso activo revela debilidades de combate (HP bajo, defensa baja, vulnerabilidad al daño) en el Cuerpo Etérico.*

- **Quick Rituals (Reinforced)** (Passive): Penalty for rushed rituals is decreased by 4 (from 3).
  *(Rituales Rápidos (Reforzados)): La penalidad por rituales apresurados se reduce en 4 (desde 3).*

<div id="seq8-paragon"></div>

#### **Paragon Pathway (Senda del Parangón) — Sequence 8: Archaeologist**

- **Stat Bonuses:** +1 IQ, +1 ST, +1 HT, +1 SPI
- **Skill Bonuses:** +1 ritualistic_magic, +3 history, +2 survival_any, +3 occultism

**Abilities:**

- **Fluid Intellect** (Passive): IQ -2 to unfamiliar IQ rolls; can attempt VH skills.
  *(Intelecto Fluido): IQ -2 a tiradas de IQ desconocidas; puede intentar habilidades Muy Difíciles.*

- **Artifact Lore** (Passive): Identify age/origin/purpose of artifact by sight/touch. Rare items need History/Occultism -2 to -6.
  *(Conocimiento de Artefactos): Identifica edad/origen/propósito del artefacto con la vista/tacto. Ítems raros piden Historia/Ocultismo de -2 a -6.*

- **Ruin Navigation** (Passive): Navigate ancient ruins/underground without penalty. Detect traps and structural hazards at Per +2.
  *(Navegación de Ruinas): Navega ruinas antiguas/subterráneos sin penalidad. Detecta trampas y peligros estructurales con Percepción +2.*

- **Total Memory (Reinforced)** (Passive): Recall tactile/spatial memory (feel of an object, precise layout of a space). IQ roll to understand mechanism drops to 30 seconds.
  *(Memoria Total (Reforzada)): Recuerda memorias táctiles/espaciales (textura de objeto, plano exacto de un lugar). Tirada de IQ para entender mecanismo se reduce a 30 seg.*

- **Rapid Analysis (Reinforced)** (Passive): Improvised devices and repairs take 1/4 normal construction time.
  *(Análisis Rápido (Reforzado)): Dispositivos improvisados y reparaciones toman 1/4 del tiempo normal.*

<div id="seq8-wheel-of-fortune"></div>

#### **Wheel of Fortune Pathway (Senda de la Rueda de la Fortuna) — Sequence 8: Robot**

- **Stat Bonuses:** +3 SPI, +1 IQ, +2 DX
- **Skill Bonuses:** +4 mathematics, +2 brawling, +2 guns_any

**Abilities:**

- **Divination Affinity** (Passive): +2 to all Divination and Anti-Divination rolls.
  *(Afinidad de Adivinación): +2 a todas las tiradas de Adivinación y Anti-Adivinación.*

- **Danger Sense** (Passive): GM warns of threats just before they strike; surprise is negated.
  *(Sentido del Peligro): El DJ advierte de amenazas justo antes de que golpeen; se niega la sorpresa.*

- **Danger Calculation** (Passive): Roughly guess which direction danger is coming from, even without making a roll. Complements Danger Sense.
  *(Cálculo de Peligro): Puede adivinar aproximadamente de qué dirección viene el peligro sin tirar. Complementa el Sentido del Peligro.*

- **Foresight (Reinforced)** (Active): Vision increases to twice per session. Can attempt to trigger vision once per day (1 min concentration, SPI roll -4).
  *(Previsión (Reforzada)): La visión aumenta a dos veces por sesión. Puede intentar activar la visión una vez al día (1 min concentración, SPI -4).*

- **Danger Premonition (Reinforced)** (Passive): Now includes supernatural threats (curses, spirit attacks) and provides a 2-second warning before danger strikes.
  *(Premonición de Peligro (Reforzada)): Ahora incluye amenazas sobrenaturales (maldiciones, ataques) y proporciona 2 segundos de advertencia.*

<div id="seq8-mother"></div>

#### **Mother Pathway (Senda de la Madre) — Sequence 8: Doctor**

- **Stat Bonuses:** +2 SPI
- **Skill Bonuses:** +5 physician, +3 surgery, +3 pharmacy, +3 first_aid, +3 diagnosis

**Abilities:**

- **Ancient Hermes** (Passive): Fluent — can speak, read, and write this dead mystical language.
  *(Hermes Antiguo): Fluido — puede hablar, leer y escribir este antiguo lenguaje místico.*

- **Soul Suture** (Active | Cost: 1 SPI): Repairs spiritual and physical damage, healing 1d6+2 HP in a conscious, stable target over 10 mins. Crit success heals 2d6+2. Affects living targets only, cannot deal damage.
  *(Sutura del Alma): Repara daño físico y espiritual, sanando 1d6+2 HP en un objetivo consciente y estable durante 10 min. Éxito crítico sana 2d6+2. Afecta solo a vivos, no causa daño.*

- **Spirit Vision (Enhanced)** (Passive): Activates automatically at no SPI cost when examining a patient. Sees Ether Body, spiritual injuries, and emotional state. Spirit Vision and Diagnosis gain +2 while treating a patient.
  *(Visión Espiritual (Mejorada)): Se activa automáticamente sin coste de SPI al examinar un paciente. Ve Cuerpo Etérico, heridas espirituales y estado emocional. Visión Espiritual y Diagnóstico ganan +2.*

- **Soothe** (Active | Cost: 2 SPI): When a target within arm's reach fails a SPI roll causing CoR, roll Physician (-2) to soothe wound, reducing net CoR gain by 1. Must use within 1 min of event.
  *(Calmar): Cuando un objetivo a distancia de brazo falla SPI ganando CoR, tira Médico (-2) para calmar la herida, reduciendo CoR neto en 1. Usar dentro de 1 min del evento.*

- **Farming Tools Proficiency (Reinforced)** (Passive): Tool bonus increases to +4. Can apply First Aid or emergency procedures with any tool at hand with no penalty.
  *(Proficiencia en Herramientas Agrícolas (Reforzada)): Bono de herramienta aumenta a +4. Puede aplicar Primeros Auxilios o emergencias con cualquier herramienta a mano sin penalización.*

<div id="seq8-moon"></div>

#### **Moon Pathway (Senda de la Luna) — Sequence 8: Beast Tamer**

- **Stat Bonuses:** +2 ST, +1 DX, +2 SPI
- **Skill Bonuses:** +5 animal_handling_any

**Abilities:**

- **Empathy (Animals)** (Passive): Sense animal emotions and intent.
  *(Empatía (Animales)): Siente emociones e intenciones animales.*

- **Animal Senses / Taming** (Active): Read thoughts/senses of, communicate to, and control animals within 50m. Control up to (IQ/2) at once. Tamed animals get +4 involving drinking potions.
  *(Sentidos de Animales / Doma): Lee pensamientos/sentidos, comunícate y controla animales en 50m. Controla hasta (IQ/2) a la vez. Animales domados ganan +4 al beber pociones.*

- **Spirit Vision (Reinforced)** (Passive): Reads health/emotional state of animals within 50m (no SPI cost). When examining a patient, Physician bonus increases to +3.
  *(Visión Espiritual (Reforzada)): Lee salud/estado emocional de animales a 50m (sin SPI). Al examinar paciente, el bono de Médico aumenta a +3.*

- **Potion Concoction (Reinforced)** (Passive): Penalty for all potions reduced by 1. Carry up to SPI x 1.5 doses (round up).
  *(Elaboración de Pociones (Reforzada)): Penalidad para todas las pociones reducida en 1. Puede llevar hasta SPI x 1.5 dosis (redondeando hacia arriba).*

<div id="seq8-abyss"></div>

#### **Abyss Pathway (Senda del Abismo) — Sequence 8: Unwinged Angel (Coldblooded)**

- **Stat Bonuses:** +2 ST, +1 SPI, +-1 Will
- **Skill Bonuses:** None

**Abilities:**

- **Bloodlust** (Drawback): Must go for killing blows in combat. IQ roll to accept surrender or take prisoners.
  *(Sed de Sangre): Debe ir a por golpes mortales en combate. Tirada de IQ para aceptar rendición o tomar prisioneros.*

- **Callous** (Drawback): -3 to social skill rolls when warmth or empathy is required.
  *(Cruel): -3 a tiradas de habilidades sociales cuando se requiere calidez o empatía.*

- **Compulsive Behavior (Indulge Evil Desires)** (Drawback): When an opportunity to commit an evil act (murder, torture, betrayal, etc.) presents itself, roll 3d6≤6 or indulge fully.
  *(Comportamiento Compulsivo (Complacer Deseos Malvados)): Cuando se presenta una oportunidad para cometer un acto malvado (asesinato, tortura, traición, etc.), tira 3d6≤6 o complace completamente.*

- **Unsettling Appearance** (Drawback): NPCs are unsettled by your presence (GM discretion).
  *(Apariencia Inquietante): Los PNJs se inquietan por tu presencia (a discreción del DJ).*

- **Abyss Power Roll** (Passive): Spells are innate demonic abilities requiring designated FP cost instead of SPI. You may sacrifice 1 HP to fuel any spell. Roll 3d6 at start of day. <8: pick 3 spells. 8-14: pick 2 spells. >14: pick 1 spell.
  *(Tirada de Poder del Abismo): Los hechizos son habilidades demoníacas innatas que requieren coste de FP en lugar de SPI. Puedes sacrificar 1 HP para potenciar cualquier hechizo. Tira 3d6 al inicio del día. <8: elige 3 hechizos. 8-14: elige 2 hechizos. >14: elige 1 hechizo.*

- **Abyssal Spells (Resisted by HT)** (Active | Cost: 1 SPI): Crown of Contempt (1 FP): 5m radius push and -2 to next attack. Poisonous Flames (2 FP): Melee touch 1d6 toxic + 1d6-2/2 turns. Toxic Black Smoke (1 FP): 3m radius cloud, 1d6-2 toxic/turn. Slowness (1 FP): -1 Spd/Move. Rending Grasp (2 FP): Tears 1d6 FP on touch. Fevered Haze (2 FP): 2m radius, -2 DX, -1 Move. Fracture (2 FP): Target's next attack deals half damage.
  *(Hechizos Abismales (Resistidos por HT)): Corona del Desprecio (1 FP): Empuje en 5m y -2 al próximo ataque. Llamas Venenosas (2 FP): Toque cuerpo a cuerpo 1d6 tóxico + 1d6-2 por 2 turnos. Humo Negro Tóxico (1 FP): Nube de 3m, 1d6-2 tóxico/turno. Lentitud (1 FP): -1 Vel/Mov. Agarre Desgarrador (2 FP): Arranca 1d6 FP al toque. Neblina Febril (2 FP): 2m radio, -2 DX, -1 Mov. Fractura (2 FP): El próximo ataque del objetivo inflige la mitad de daño.*

- **Abyssal Curses (Resisted by Will)** (Active | Cost: 1 SPI): Mirror of Inadequacy (2 FP): -2 to all rolls. Spiritual Covetousness (1 FP): Hoards instead of attacking. Hollow Craving (1 FP): -1 Will/Per. Sever the Bond (2 FP): Ally becomes rival. Drain (1 FP): Lose 2 FP. Stoke the Coal (1 FP): -2 to restraint rolls. Leaden Soul (2 FP): -1 Spd/Move, needs Will to act.
  *(Maldiciones Abismales (Resistidas por Voluntad)): Espejo de Inadecuación (2 FP): -2 a toda tirada. Codicia Espiritual (1 FP): Acapara en lugar de atacar. Anhelo Hueco (1 FP): -1 Vol/Per. Cortar el Vínculo (2 FP): Aliado se vuelve rival. Drenaje (1 FP): Pierde 2 FP. Avivar el Carbón (1 FP): -2 a tiradas de contención. Alma de Plomo (2 FP): -1 Vel/Mov, requiere Vol para actuar.*

- **Criminal Proficiency (Reinforced)** (Passive): Improvised weapons treated as Brawling +2. Any firearm fired at effective DX+1. Poison-use rolls gain +2.
  *(Proficiencia Criminal (Reforzada)): Armas improvisadas tratadas como Pelea +2. Cualquier arma de fuego disparada a DX+1 efectivo. Uso de veneno gana +2.*

<div id="seq8-chained"></div>

#### **Chained Pathway (Senda del Encadenado) — Sequence 8: Lunatic**

- **Stat Bonuses:** +2 ST, +1 HT, +1 SPI
- **Skill Bonuses:** +4 brawling, +3 intimidation, +2 survival_any, +2 wrestling

**Abilities:**

- **Berserk (Voluntary)** (Active): Can choose to sacrifice rationality for power; not forced involuntarily.
  *(Berserk (Voluntario)): Puede elegir sacrificar racionalidad por poder; no se fuerza involuntariamente.*

- **DR 2 (Physical)** (Passive): Resistance to physical damage.
  *(RD 2 (Física)): Resistencia al daño físico.*

- **Rapid Healing** (Passive): +5 to daily HT rolls to recover HP.
  *(Curación Rápida): +5 a tiradas diarias de HT para recuperar HP.*

- **Divination/Spirit Channel Resistance** (Passive): Body and soul are Bound; Divination and Spirit Channeling targeting the Lunatic are at -4.
  *(Resistencia a Adivinación/Canalización): Cuerpo y alma están atados; Adivinación y Canalización Espiritual hacia el Lunático tienen -4.*

- **Lunatic's Curse** (Drawback): Loses control more easily; CoR thresholds reduced by 2. When injured below half HP, automatically enters uncontrolled empowered state (ST +3, HT +2, ignore pain, attack everything) until fight ends or Will-4.
  *(Maldición del Lunático): Pierde el control más fácil; umbrales de CoR reducidos en 2. Al ser herido por debajo de media vida, entra en estado de poder descontrolado (ST+3, HT+2, ignora dolor, ataca a todos) hasta fin de pelea o Vol-4.*

- **Criminal Expert (Reinforced)** (Passive): Improvised weapons gain +1 damage. Escape supernatural confinement at full skill without penalty. Hidden exit awareness expands to 20m.
  *(Experto Criminal (Reforzado)): Armas improvisadas ganan +1 de daño. Escapa de confinamiento sobrenatural con habilidad completa sin penalización. Salidas ocultas se expanden a 20m.*

<div id="seq8-justiciar"></div>

#### **Justiciar Pathway (Senda del Justiciero) — Sequence 8: Sheriff**

- **Stat Bonuses:** +1 IQ, +2 Per, +1 SPI
- **Skill Bonuses:** +3 guns_any, +2 shortsword, +2 brawling, +3 criminology, +2 tracking

**Abilities:**

- **Eidetic Memory** (Passive): +5 to remember things after one reading; near-perfect recall.
  *(Memoria Eidética): +5 para recordar cosas tras una lectura; memoria casi perfecta.*

- **Evil Sense** (Passive): Senses presence of Evil, Disorder, and Madness within 25m. Directional. High-Seq Beyonders can roll Will vs Per to hide.
  *(Sentido del Mal): Siente presencia del Mal, Desorden y Locura en 25m. Direccional. Beyonders de Alta Secuencia tiran Voluntad vs Percepción para ocultarse.*

- **Jurisdiction** (Active): Intimidation/Admin contested by highest Will in area. Grants powers in stages: 0 (No trust), 1 (Mixed: Combat Reflexes, Sense Ext, +2 persuasion), 2 (Full: +1 to stats, Danger Sense). Retries after 24h.
  *(Jurisdicción): Intimidación/Admin vs Voluntad más alta del área. Otorga poderes por etapas: 0 (Sin confianza), 1 (Mixta: Reflejos Combate, Ext. Sentidos, +2 persuasión), 2 (Total: +1 a stats, Sentido del Peligro). Reintento en 24h.*

- **Authority (Reinforced)** (Passive): Will penalty for opponents increases to -2 within Sheriff's Jurisdiction area.
  *(Autoridad (Reforzada)): La penalidad de Voluntad para oponentes aumenta a -2 dentro de la Jurisdicción del Alguacil.*

<div id="seq8-black-emperor"></div>

#### **Black Emperor Pathway (Senda del Emperador Negro) — Sequence 8: Barbarian**

- **Stat Bonuses:** +3 ST, +1 HT, +2 Will, +1 SPI
- **Skill Bonuses:** +3 brawling, +3 wrestling

**Abilities:**

- **Physical Enhancement** (Passive): Breaks the rules of a normal body. ST and HT-based rolls gain +2 in situations involving feats of raw force, endurance, or breaking barriers.
  *(Mejora Física): Rompe las reglas de un cuerpo normal. Las tiradas basadas en ST y HT ganan +2 en situaciones que implican hazañas de fuerza bruta, resistencia o romper barreras.*

- **Mental Resistance** (Passive): High resistance to psychological influences — mind control and fear-based effects suffer -4 against them.
  *(Resistencia Mental): Alta resistencia a influencias psicológicas: el control mental y los efectos basados en el miedo sufren un -4 contra ellos.*

- **Eloquence (Reinforced)** (Passive): Eloquence works through Intimidation as effectively as persuasion. The target still rolls Will at -3, but the argument may be a growled threat.
  *(Elocuencia (Reforzada)): La Elocuencia funciona a través de Intimidación tan efectivamente como persuasión. El objetivo sigue tirando Voluntad a -3, pero el argumento puede ser una amenaza gruñida.*

<div id="seq8-patriarch"></div>

#### **Patriarch Pathway (Patriarch Pathway) — Sequence 8: Sex Addict**

- **Stat Bonuses:** +6 SPI, +1 ST
- **Skill Bonuses:** +2 occultism, +2 spiritual_intuition

**Abilities:**

- **Sex Addict Domain Art 1** (Passive): type is used
  *(Arte de Dominio 1): type is used*

- **Sex Addict Domain Art 2** (Passive): question), -
  *(Arte de Dominio 2): question), -*

- **Sex Addict Domain Art 3** (Active | Cost: 1 SPI): differentiat|ement (2 SPI):Induce lust into a
  *(Arte de Dominio 3): differentiat|ement (2 SPI):Induce lust into a*

- **Sex Addict Domain Art 4** (Passive): as the designated target.Drug K
  *(Arte de Dominio 4): as the designated target.Drug K*

- **Sex Addict Domain Art 5** (Passive): 3 Will (third question), -4 Will (su
  *(Arte de Dominio 5): 3 Will (third question), -4 Will (su*

- **Sex Addict Domain Art 6** (Passive): ative Gas:ST and DX temporaril
  *(Arte de Dominio 6): ative Gas:ST and DX temporaril*

- **Sex Addict Domain Art 7** (Passive): ing hormonal information of vario|target. -2 to the opponent's Will roll, or -4 if a crush or desired
  *(Arte de Dominio 7): ing hormonal information of vario|target. -2 to the opponent's Will roll, or -4 if a crush or desired*

- **Sex Addict Domain Art 8** (Passive): nowledge: Truth Serum:Compels truth-telling. -2 Will (first
  *(Arte de Dominio 8): nowledge: Truth Serum:Compels truth-telling. -2 Will (first*

<div id="seq8-chaos-mist"></div>

#### **Chaos Mist Pathway (Chaos Mist Pathway) — Sequence 8: Shadow Merchant**

- **Stat Bonuses:** +6 SPI
- **Skill Bonuses:** +2 occultism, +2 spiritual_intuition

**Abilities:**

- **Shadow Merchant Divine Boon** (Passive): Boon granting powers of the Chaos Mist Pathway. Channels outer deity authority.
  *(Bendición Divina: Shadow Merchant): Poderes otorgados de la senda Chaos Mist Pathway. Canaliza la autoridad de una deidad exterior.*

<div id="seq8-everlasting"></div>

#### **Everlasting Pathway (Everlasting Pathway) — Sequence 8: Commentator**

- **Stat Bonuses:** +6 SPI, +1 ST
- **Skill Bonuses:** +2 occultism, +2 spiritual_intuition

**Abilities:**

- **Commentator Domain Art 1** (Active | Cost: 1 SPI): significantly more information about a person, similar to a Spectator's analysis.Commentary (2 SPI):Roll
  *(Arte de Dominio 1): significantly more information about a person, similar to a Spectator's analysis.Commentary (2 SPI):Roll*

- **Commentator Domain Art 2** (Passive): an appropriate speech skill at -2. All who hear the Commentator must roll Will against the Commentator's
  *(Arte de Dominio 2): an appropriate speech skill at -2. All who hear the Commentator must roll Will against the Commentator's*

- **Commentator Domain Art 3** (Passive): degree of success on their speech roll, or become influenced by their ideas.|
  *(Arte de Dominio 3): degree of success on their speech roll, or become influenced by their ideas.|*

- **Commentator Domain Art 4** (Passive): d Abilities|Midoro's Worship:The Commentator can now hold up to four spells at a time (up from three).|
  *(Arte de Dominio 4): d Abilities|Midoro's Worship:The Commentator can now hold up to four spells at a time (up from three).|*

- **Commentator Domain Art 5** (Passive): _Powered by GURPS: Pathways — Lord of the Mysteries_
  *(Arte de Dominio 5): _Powered by GURPS: Pathways — Lord of the Mysteries_*

<div id="seq8-second-law"></div>

#### **Second Law Pathway (Second Law Pathway) — Sequence 8: Secretary**

- **Stat Bonuses:** +6 SPI, +1 ST
- **Skill Bonuses:** +2 occultism, +2 spiritual_intuition

**Abilities:**

- **Secretary Domain Art 1** (Passive): faint sounds, eavesdrop
  *(Arte de Dominio 1): faint sounds, eavesdrop*

- **Secretary Domain Art 2** (Passive): through walls, identify|Diplomacy/IQ [Hard]|+2|
  *(Arte de Dominio 2): through walls, identify|Diplomacy/IQ [Hard]|+2|*

- **Secretary Domain Art 3** (Passive): speech in noise|Psychology/IQ [Hard]|+3|
  *(Arte de Dominio 3): speech in noise|Psychology/IQ [Hard]|+3|*

<div id="seq8-sublunary-eye"></div>

#### **Sublunary Eye Pathway (Sublunary Eye Pathway) — Sequence 8: Reporter**

- **Stat Bonuses:** +6 SPI, +1 ST
- **Skill Bonuses:** +2 occultism, +2 spiritual_intuition

**Abilities:**

- **Reporter Domain Art 1** (Passive): _Powered by GURPS: Pathways — Lord of the Mysteries_
  *(Arte de Dominio 1): _Powered by GURPS: Pathways — Lord of the Mysteries_*

<div id="seq8-eternal-aeon"></div>

#### **Eternal Aeon Pathway (Eternal Aeon Pathway) — Sequence 8: Alms Monk**

- **Stat Bonuses:** +6 SPI
- **Skill Bonuses:** +2 occultism, +2 spiritual_intuition

**Abilities:**

- **Alms Monk Domain Art 1** (Passive): _Powered by GURPS: Pathways — Lord of the Mysteries_
  *(Arte de Dominio 1): _Powered by GURPS: Pathways — Lord of the Mysteries_*

<div id="seq8-eternal-edict"></div>

#### **Eternal Edict Pathway (Eternal Edict Pathway) — Sequence 8: Musician**

- **Stat Bonuses:** +6 SPI, +1 ST, +1 DX
- **Skill Bonuses:** +2 occultism, +2 spiritual_intuition

**Abilities:**

- **Musician Domain Art 1** (Passive): around them.Symphony Decryption (active
  *(Arte de Dominio 1): around them.Symphony Decryption (active*

- **Musician Domain Art 2** (Passive): Success reveals several possible futures. Criti
  *(Arte de Dominio 2): Success reveals several possible futures. Criti*

- **Musician Domain Art 3** (Passive): critical failure, spend 3 FP and gain 1 CoR. W
  *(Arte de Dominio 3): critical failure, spend 3 FP and gain 1 CoR. W*

- **Musician Domain Art 4** (Passive): and GM discretion.Song of Fate (varies):A
  *(Arte de Dominio 4): and GM discretion.Song of Fate (varies):A*

- **Musician Domain Art 5** (Passive): singing. Roll Singing (HT/Easy) with a bonu
  *(Arte de Dominio 5): singing. Roll Singing (HT/Easy) with a bonu*

- **Musician Domain Art 6** (Active | Cost: 1 SPI): (GM discretion). Spend SPI appropriate to th
  *(Arte de Dominio 6): (GM discretion). Spend SPI appropriate to th*

- **Musician Domain Art 7** (Active | Cost: 1 SPI): SPI to forcibly succeed on the Singing roll. F
  *(Arte de Dominio 7): SPI to forcibly succeed on the Singing roll. F*

- **Musician Domain Art 8** (Passive): the fate of an impending illness forces the tar
  *(Arte de Dominio 8): the fate of an impending illness forces the tar*

- **Musician Domain Art 9** (Passive): emotional breakdown forces a Will roll or the|enhanced. The Musician constantly hears the symphony of fate
  *(Arte de Dominio 9): emotional breakdown forces a Will roll or the|enhanced. The Musician constantly hears the symphony of fate*

`
