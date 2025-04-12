import { EDifficulty, ETag, type IChallenge } from '../types/challenge';
import { sortChallengesByDifficulty } from '../utils/challenges.helper';

const challenges: Map<string, IChallenge> = new Map([
  [
    'counter',
    {
      title: 'Counter',
      description: 'Can you build a simple counter with increment and decrement functionality?',
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
      description: 'Can you create a number guessing game that provides hints for higher/lower?',
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
      description: 'Can you implement a basic task manager with add, complete and delete features?',
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
      description: 'Can you visualize stack data structure operations (push/pop) with animations?',
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
      description: 'Can you build the classic 3x3 grid game with win detection logic?',
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
      description:
        'Can you create a tool that counts words and characters in real-time as users type?',
      link: 'word-count',
      difficulty: EDifficulty.Easy,
      developer: 'pankajparkar',
      tags: [],
      isNew: true,
    },
  ],
]);

export const angularChallenges = sortChallengesByDifficulty(challenges);
