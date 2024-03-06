import { OptionType } from '.';

export const enum EDifficulty {
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard',
}

export interface IChallenge {
  title: string;
  link: string;
  difficulty: EDifficulty;
  developer: string;
  contributors?: string[];
  youtube?: string;
  tags?: string[];
  isNew?: boolean;
  longLink?: string;
}

export interface IGetChallengesByid {
  challenges: IChallenge[];
  title: string;
  contributors: OptionType[];
  difficulties: OptionType[];
}
