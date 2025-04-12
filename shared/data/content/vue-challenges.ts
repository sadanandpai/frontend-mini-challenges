import { EDifficulty, ETag, type IChallenge } from '../types/challenge';
import { sortChallengesByDifficulty } from '../utils/challenges.helper';

const challenges = new Map<string, IChallenge>([
  [
    'counter',
    {
      title: 'Counter',
      description: 'Implement a simple counter with increment and decrement functionality',
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
      description: 'Create a collapsible content section with smooth animations',
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
      description: 'Implement theme switching between light and dark modes',
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
      description: 'Create a table with alternating row colors and hover effects',
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
      description: 'Build a number guessing game with hints for higher/lower',
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
      description: 'Implement numbered page navigation for content',
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
      description: 'Visualize stack data structure operations (push/pop)',
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
      description: 'Format phone numbers automatically as user types',
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
      description: 'Convert between Celsius and Fahrenheit temperature units',
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
      description: 'Build the classic 3x3 grid game with win detection',
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
      description: 'Create timed notification messages that disappear automatically',
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
      description: 'Visual indicator showing password complexity in real-time',
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
      description: 'Create a tool that generates random secure passwords',
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
      description: 'Implement a timer with start, pause and reset functionality',
      link: '/stopwatch',
      difficulty: EDifficulty.Medium,
      developer: 'Shardik04',
      tags: [ETag.interview],
    },
  ],
]);

export const vueChallenges = sortChallengesByDifficulty(challenges);
