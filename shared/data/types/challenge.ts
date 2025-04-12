import { OptionType } from '.';

export const enum EDifficulty {
  Easy = 'Easy',
  Medium = 'Medium',
  Hard = 'Hard',
}

export enum ETag {
  interview = 'interview',
  all = 'all',
}

export interface IChallenge {
  title: string;
  description: string;
  link: string;
  difficulty: EDifficulty;
  developer: string;
  contributors?: string[];
  youtube?: string;
  tags?: ETag[] | [];
  isNew?: boolean;
  sourceCodeLink?: string;
  longLink?: string;
}

export interface IGetChallengesByid {
  challenges: IChallenge[];
  title: string;
  description: string;
  contributors: OptionType[];
  difficulties: OptionType[];
  tags: ETag[] | [];
  newChallenge: boolean;
}
