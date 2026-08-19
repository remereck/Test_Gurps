import { TraitDef } from '../types';

export const ADVANTAGES: TraitDef[] = [
  { id: 'combat_reflexes', name: { en: 'Combat Reflexes', es: 'Reflejos de Combate' }, cost: 15, description: { en: '+1 to active defenses, never freeze in surprise.', es: '+1 a defensas activas, nunca te congelas por sorpresa.' } },
  { id: 'danger_sense', name: { en: 'Danger Sense', es: 'Sentido del Peligro' }, cost: 15, description: { en: 'GM warns of threats just before they strike.', es: 'El GM advierte de amenazas justo antes de que ataquen.' } },
  { id: 'high_pain_threshold', name: { en: 'High Pain Threshold', es: 'Alto Umbral de Dolor' }, cost: 10, description: { en: 'Ignore shock penalties from injury.', es: 'Ignora las penalizaciones por shock de las heridas.' } },
  { id: 'wealth_comfortable', name: { en: 'Wealth: Comfortable', es: 'Riqueza: Cómodo' }, cost: 5, description: { en: 'Good income; start with £5.', es: 'Buenos ingresos; comienzas con £5.' } },
  { id: 'wealth_wealthy', name: { en: 'Wealth: Wealthy', es: 'Riqueza: Rico' }, cost: 15, description: { en: 'Start with £50.', es: 'Comienzas con £50.' } },
  { id: 'hard_to_kill', name: { en: 'Hard to Kill', es: 'Difícil de Matar' }, cost: 2, hasLevels: true, maxLevel: 5, description: { en: '+1/level to HT rolls to avoid death.', es: '+1/nivel a las tiradas de HT para evitar la muerte.' } },
  { id: 'acute_vision', name: { en: 'Acute Vision', es: 'Visión Aguda' }, cost: 2, hasLevels: true, maxLevel: 5, description: { en: '+1/level to Vision rolls.', es: '+1/nivel a las tiradas de Visión.' } },
  { id: 'acute_hearing', name: { en: 'Acute Hearing', es: 'Oído Agudo' }, cost: 2, hasLevels: true, maxLevel: 5, description: { en: '+1/level to Hearing rolls.', es: '+1/nivel a las tiradas de Audición.' } },
  { id: 'ambidexterity', name: { en: 'Ambidexterity', es: 'Ambidextro' }, cost: 5, description: { en: 'No -4 off-hand penalty.', es: 'Sin penalización de -4 por la mano torpe.' } },
  { id: 'appearance_attractive', name: { en: 'Appearance (Attractive)', es: 'Apariencia (Atractivo)' }, cost: 4, description: { en: '+1 to reaction rolls.', es: '+1 a las tiradas de reacción.' } },
  { id: 'appearance_beautiful', name: { en: 'Appearance (Beautiful)', es: 'Apariencia (Hermoso)' }, cost: 12, description: { en: '+4 to reaction rolls from those attracted to you, +2 from others.', es: '+4 a las reacciones de quienes se sienten atraídos, +2 de otros.' } },
  { id: 'charisma', name: { en: 'Charisma', es: 'Carisma' }, cost: 5, hasLevels: true, maxLevel: 5, description: { en: '+1/level to reaction and influence rolls.', es: '+1/nivel a las tiradas de reacción e influencia.' } },
  { id: 'eidetic_memory', name: { en: 'Eidetic Memory', es: 'Memoria Eidética' }, cost: 5, description: { en: '+5 to recall general information.', es: '+5 para recordar información general.' } },
  { id: 'empathy', name: { en: 'Empathy', es: 'Empatía' }, cost: 15, description: { en: 'Read emotions and spot lies.', es: 'Lee emociones y detecta mentiras.' } },
  { id: 'fearlessness', name: { en: 'Fearlessness', es: 'Valentía' }, cost: 2, hasLevels: true, maxLevel: 5, description: { en: '+1/level to Fright Checks.', es: '+1/nivel a los Chequeos de Pánico.' } },
  { id: 'fit', name: { en: 'Fit', es: 'En Forma' }, cost: 5, description: { en: '+1 to all HT rolls, recover FP twice as fast.', es: '+1 a todas las tiradas de HT, recupera FP el doble de rápido.' } },
  { id: 'very_fit', name: { en: 'Very Fit', es: 'Muy en Forma' }, cost: 15, description: { en: '+2 to all HT rolls, lose FP at half rate, recover FP twice as fast.', es: '+2 a tiradas de HT, pierde FP a la mitad, recupera FP doble rápido.' } },
  { id: 'intuition', name: { en: 'Intuition', es: 'Intuición' }, cost: 15, description: { en: 'Guess the best course of action.', es: 'Adivina el mejor curso de acción.' } },
  { id: 'luck', name: { en: 'Luck', es: 'Suerte' }, cost: 15, description: { en: 'Reroll one bad roll per hour of play.', es: 'Repite una mala tirada por hora de juego.' } },
  { id: 'night_vision', name: { en: 'Night Vision', es: 'Visión Nocturna' }, cost: 1, hasLevels: true, maxLevel: 9, description: { en: '-1 to darkness penalty per level.', es: '-1 a la penalización por oscuridad por nivel.' } },
  { id: 'perfect_balance', name: { en: 'Perfect Balance', es: 'Equilibrio Perfecto' }, cost: 15, description: { en: '+6 to keep footing, +1 to Acrobatics.', es: '+6 para mantener el equilibrio, +1 a Acrobacias.' } },
  { id: 'serendipity', name: { en: 'Serendipity', es: 'Serendipia' }, cost: 15, hasLevels: true, maxLevel: 2, description: { en: 'Lucky coincidence per session per level.', es: 'Coincidencia afortunada por sesión por nivel.' } }
];

export const DISADVANTAGES: TraitDef[] = [
  { id: 'wealth_struggling', name: { en: 'Wealth: Struggling', es: 'Riqueza: Luchando' }, cost: -10, description: { en: 'Start with 15 soli.', es: 'Comienzas con 15 soli.' } },
  { id: 'wealth_poor', name: { en: 'Wealth: Poor', es: 'Riqueza: Pobre' }, cost: -15, description: { en: 'Start with 5 soli.', es: 'Comienzas con 5 soli.' } },
  { id: 'wealth_dead_broke', name: { en: 'Wealth: Dead Broke', es: 'Riqueza: En la Ruina' }, cost: -25, description: { en: 'Start with 0 money and no job.', es: 'Comienzas sin dinero ni trabajo.' } },
  { id: 'curious', name: { en: 'Curious', es: 'Curioso' }, cost: -5, description: { en: 'Must roll vs 12 or investigate mystery.', es: 'Debe lanzar contra 12 o investigar un misterio.' } },
  { id: 'bad_temper', name: { en: 'Bad Temper', es: 'Mal Genio' }, cost: -10, description: { en: 'Must roll vs 12 to avoid angry outbursts.', es: 'Debe lanzar contra 12 para evitar ataques de ira.' } },
  { id: 'fearfulness', name: { en: 'Fearfulness', es: 'Miedoso' }, cost: -2, hasLevels: true, maxLevel: 5, description: { en: '-1/level to Fright Checks.', es: '-1/nivel a los Chequeos de Pánico.' } },
  { id: 'bloodlust', name: { en: 'Bloodlust', es: 'Sed de Sangre' }, cost: -10, description: { en: 'Must roll to not kill helpless foes.', es: 'Debe tirar para no matar enemigos indefensos.' } },
  { id: 'code_of_honor', name: { en: 'Code of Honor', es: 'Código de Honor' }, cost: -10, description: { en: 'Adhere to strict personal rules.', es: 'Se adhiere a reglas personales estrictas.' } },
  { id: 'cowardice', name: { en: 'Cowardice', es: 'Cobardía' }, cost: -10, description: { en: '-2 to Fright Checks, must roll to risk life.', es: '-2 a Chequeos de Pánico, debe tirar para arriesgar su vida.' } },
  { id: 'greed', name: { en: 'Greed', es: 'Codicia' }, cost: -15, description: { en: 'Must roll vs 12 to resist a quick payoff.', es: 'Debe tirar contra 12 para resistirse al dinero fácil.' } },
  { id: 'honesty', name: { en: 'Honesty', es: 'Honestidad' }, cost: -10, description: { en: 'Must obey the law and report crimes.', es: 'Debe obedecer la ley y reportar crímenes.' } },
  { id: 'impulsiveness', name: { en: 'Impulsiveness', es: 'Impulsividad' }, cost: -10, description: { en: 'Act first, think later.', es: 'Actúa primero, piensa después.' } },
  { id: 'jealousy', name: { en: 'Jealousy', es: 'Celos' }, cost: -10, description: { en: 'React poorly to those better off.', es: 'Reacciona mal ante quienes están mejor.' } },
  { id: 'lecherousness', name: { en: 'Lecherousness', es: 'Lascivia' }, cost: -15, description: { en: 'Must roll vs 12 to resist romantic advances.', es: 'Debe tirar contra 12 para resistir avances románticos.' } },
  { id: 'overconfidence', name: { en: 'Overconfidence', es: 'Exceso de Confianza' }, cost: -5, description: { en: 'Believe you are far more capable than you are.', es: 'Crees que eres mucho más capaz de lo que eres.' } },
  { id: 'pacifism_reluctant', name: { en: 'Pacifism (Reluctant)', es: 'Pacifismo (Reticente)' }, cost: -5, description: { en: '-4 to hit a person with deadly force.', es: '-4 para golpear a una persona con fuerza letal.' } },
  { id: 'pacifism_cannot_kill', name: { en: 'Pacifism (Cannot Kill)', es: 'Pacifismo (No Matar)' }, cost: -15, description: { en: 'Can never intentionally kill someone.', es: 'Nunca puede matar intencionalmente a alguien.' } },
  { id: 'paranoia', name: { en: 'Paranoia', es: 'Paranoia' }, cost: -10, description: { en: 'You think everyone is out to get you.', es: 'Crees que todos quieren atraparte.' } },
  { id: 'sense_of_duty', name: { en: 'Sense of Duty', es: 'Sentido del Deber' }, cost: -10, description: { en: 'Will risk life for your group/friends.', es: 'Arriesgarás la vida por tu grupo/amigos.' } },
  { id: 'truthfulness', name: { en: 'Truthfulness', es: 'Sinceridad' }, cost: -5, description: { en: '-5 to Fast-Talk, very bad at lying.', es: '-5 a Charlatanería, muy malo mintiendo.' } }
];
