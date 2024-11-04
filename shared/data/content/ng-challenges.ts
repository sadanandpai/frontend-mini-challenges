import { EDifficulty, ETag, type IChallenge } from '../types/challenge';
import { sortChallengesByDifficulty } from '../utils/challenges.helper';

const challenges: Map<string, IChallenge> = new Map([
  [
    'counter',
    {
      title: 'Counter',
      link: 'counter',
      difficulty: EDifficulty.Easy,
      developer: 'sadanandpai',
      tags: [ETag.interview],
    },
  ],
  [
    'guess-number',
    {
      title: 'Guess Number',
      link: 'guess-number',
      difficulty: EDifficulty.Easy,
      developer: 'pankajparkar',
      tags: [ETag.interview],
    },
  ],
  [
    'todo-list',
    {
      title: 'Todo list',
      link: 'todo-list',
      difficulty: EDifficulty.Easy,
      developer: 'pankajparkar',
      tags: [ETag.interview],
    },
  ],
  [
    'stack',
    {
      title: 'Stack',
      link: 'stack',
      difficulty: EDifficulty.Easy,
      developer: 'pankajparkar',
      tags: [],
      isNew: true,
    },
  ],
  [
    'tic-tac-toe',
    {
      title: 'Tic tac toe',
      link: 'tic-tac-toe',
      difficulty: EDifficulty.Easy,
      developer: 'pankajparkar',
      tags: [ETag.interview],
      isNew: true,
    },
  ],
  [
    'word-count',
    {
      title: 'Word Count',
      link: 'word-count',
      difficulty: EDifficulty.Easy,
      developer: 'pankajparkar',
      tags: [],
      isNew: true,
    },
  ],
]);

export const angularChallenges = sortChallengesByDifficulty(challenges);
