import { EDifficulty, type IChallenge } from '../types/challenge';
import { sortChallengesByDifficulty } from '../utils/challenges.helper';

const challenges: Map<string, IChallenge> = new Map([
  [
    'shapes',
    {
      title: 'Shapes',
      link: 'shapes/',
      difficulty: EDifficulty.Easy,
      developer: 'sadanandpai',
      tags: [],
    },
  ],
]);

export const cssChallenges = sortChallengesByDifficulty(challenges);
