import { Pathway } from '../types';
import { foolPathway } from './pathways/fool';
import { errorPathway } from './pathways/error';
import { doorPathway } from './pathways/door';
import { visionaryPathway } from './pathways/visionary';
import { sunPathway } from './pathways/sun';
import { tyrantPathway } from './pathways/tyrant';
import { whiteTowerPathway } from './pathways/white_tower';
import { hangedManPathway } from './pathways/hanged_man';
import { darknessPathway } from './pathways/darkness';
import { deathPathway } from './pathways/death';
import { twilightGiantPathway } from './pathways/twilight_giant';
import { demonessPathway } from './pathways/demoness';
import { redPriestPathway } from './pathways/red_priest';
import { hermitPathway } from './pathways/hermit';
import { paragonPathway } from './pathways/paragon';
import { wheelOfFortunePathway } from './pathways/wheel_of_fortune';
import { motherPathway } from './pathways/mother';
import { moonPathway } from './pathways/moon';
import { abyssPathway } from './pathways/abyss';
import { chainedPathway } from './pathways/chained';
import { justiciarPathway } from './pathways/justiciar';
import { blackEmperorPathway } from './pathways/black_emperor';
import { GENERATED_PATHWAYS } from './pathways/generated';

export const PATHWAYS: Pathway[] = [
  foolPathway,
  errorPathway,
  doorPathway,
  visionaryPathway,
  sunPathway,
  tyrantPathway,
  whiteTowerPathway,
  hangedManPathway,
  darknessPathway,
  deathPathway,
  twilightGiantPathway,
  demonessPathway,
  redPriestPathway,
  hermitPathway,
  paragonPathway,
  wheelOfFortunePathway,
  motherPathway,
  moonPathway,
  abyssPathway,
  chainedPathway,
  justiciarPathway,
  blackEmperorPathway,
  ...GENERATED_PATHWAYS
];
