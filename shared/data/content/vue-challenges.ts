import { EDifficulty, ETag, type IChallenge } from '../types/challenge';
import { sortChallengesByDifficulty } from '../utils/challenges.helper';

const challenges = new Map<string, IChallenge>([
  [
    'counter',
    {
      title: 'Counter',
      link: '/counter',
      difficulty: EDifficulty.Easy,
      developer: 'arpansaha13',
      tags: [ETag.interview],
    },
  ],
  [
    'accordion',
    {
      title: 'Accordion',
      link: '/accordion',
      difficulty: EDifficulty.Easy,
      developer: 'arpansaha13',
      tags: [ETag.interview],
    },
  ],
  [
    'light-dark-mode',
    {
      title: 'Light Dark Mode',
      link: '/light-dark-mode',
      difficulty: EDifficulty.Easy,
      developer: 'arpansaha13',
      tags: [],
    },
  ],
  [
    'table-colorizer',
    {
      title: 'Table Colorizer',
      link: '/table-colorizer',
      difficulty: EDifficulty.Easy,
      developer: 'arpansaha13',
      tags: [],
    },
  ],
  [
    'guess-the-number',
    {
      title: 'Guess the number',
      link: '/guess-the-number',
      difficulty: EDifficulty.Easy,
      developer: 'arpansaha13',
      tags: [ETag.interview],
    },
  ],
  [
    'pagination',
    {
      title: 'Pagination',
      link: '/pagination',
      difficulty: EDifficulty.Easy,
      developer: 'arpansaha13',
      tags: [],
    },
  ],
  [
    'stack',
    {
      title: 'Stack',
      link: '/stack',
      difficulty: EDifficulty.Easy,
      developer: 'jaydadhaniya',
      tags: [],
    },
  ],
  [
    'telephone-formatter',
    {
      title: 'Telephone formatter',
      link: '/telephone-formatter',
      difficulty: EDifficulty.Easy,
      developer: 'arpansaha13',
      tags: [ETag.interview],
    },
  ],
  [
    'temprature-converter',
    {
      title: 'Temprature Converter',
      link: '/temprature-converter',
      difficulty: EDifficulty.Easy,
      developer: 'bhumikkalola',
      tags: [],
    },
  ],
  [
    'tic-tac-toe',
    {
      title: 'Tic Tac Toe',
      link: '/tic-tac-toe',
      difficulty: EDifficulty.Medium,
      developer: 'sadanandpai',
      tags: [ETag.interview],
      isNew: true,
    },
  ],
  [
    'toast-popup',
    {
      title: 'Toast Popup',
      link: '/toast-popup',
      difficulty: EDifficulty.Medium,
      developer: 'arpansaha13',
      tags: [ETag.interview],
    },
  ],
  [
    'password-strength',
    {
      title: 'Password Strength',
      link: '/password-strength',
      difficulty: EDifficulty.Medium,
      developer: 'jaydadhaniya',
      tags: [ETag.interview],
    },
  ],
  [
    'password-generator',
    {
      title: 'Password Generator',
      link: '/password-generator',
      difficulty: EDifficulty.Medium,
      developer: 'bhumikkalola',
      tags: [],
    },
  ],
  [
    'stopwatch',
    {
      title: 'Stopwatch',
      link: '/stopwatch',
      difficulty: EDifficulty.Medium,
      developer: 'Shardik04',
      tags: [ETag.interview],
    },
  ],
]);

export const vueChallenges = sortChallengesByDifficulty(challenges);
