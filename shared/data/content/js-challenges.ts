import { EDifficulty, ETag, type IChallenge } from '../types/challenge';
import { sortChallengesByDifficulty } from '../utils/challenges.helper';

const challenges: Map<string, IChallenge> = new Map([
  [
    'counter',
    {
      title: 'Counter',
      link: 'counter/',
      difficulty: EDifficulty.Easy,
      developer: 'sadanandpai',
      youtube: 'https://youtu.be/9OIeUtXX3SA',
      tags: [ETag.interview],
    },
  ],
  [
    'color-me',
    {
      title: 'Color Me',
      link: 'color-me/',
      difficulty: EDifficulty.Easy,
      developer: 'X0rD3v1L',
      tags: [],
    },
  ],
  [
    'bmi-calculator',
    {
      title: 'BMI Calculator',
      link: 'bmi-calculator/',
      difficulty: EDifficulty.Easy,
      developer: 'itsayopapi',
      tags: [],
    },
  ],
  [
    'dice-game',
    {
      title: 'Dice Game',
      link: 'dice-game/',
      difficulty: EDifficulty.Easy,
      developer: 'shivam200446',
      tags: [],
      isNew: true,
    },
  ],
  [
    'roll-dice',
    {
      title: 'Roll dice',
      link: 'roll-dice/',
      difficulty: EDifficulty.Easy,
      developer: 'babandakale',
      tags: [],
    },
  ],
  [
    'guess-the-number',
    {
      title: 'Guess the number',
      link: 'guess-the-number/',
      difficulty: EDifficulty.Easy,
      developer: 'sadanandpai',
      youtube: 'https://youtu.be/L1Da3GWEGpY',
      tags: [ETag.interview],
    },
  ],
  [
    'string-transformers',
    {
      title: 'String transformers',
      link: 'string-transformers/',
      difficulty: EDifficulty.Easy,
      developer: 'sadanandpai',
      youtube: 'https://youtu.be/crCZEJ6Lmgc',
      tags: [ETag.interview],
    },
  ],
  [
    'file-uploader',
    {
      title: 'File Uploader',
      link: 'file-uploader/',
      difficulty: EDifficulty.Easy,
      developer: 'avtech',
      tags: [],
      isNew: true,
    },
  ],
  [
    'telephone-formatter',
    {
      title: 'Telephone formatter',
      link: 'telephone-formatter/',
      difficulty: EDifficulty.Easy,
      developer: 'sadanandpai',
      youtube: 'https://youtu.be/E85ldVqAGjw',
      tags: [ETag.interview],
    },
  ],
  [
    'music-kit',
    {
      title: 'Music Kit',
      link: 'music-kit/',
      difficulty: EDifficulty.Easy,
      developer: 'shivam200446',
      tags: [],
    },
  ],
  [
    'currency-converter',
    {
      title: 'Currency Converter',
      link: 'currency-converter/',
      difficulty: EDifficulty.Easy,
      developer: 'pranav514',
      tags: [],
      isNew: true,
    },
  ],
  [
    'rock-paper-scissor',
    {
      title: 'Rock Paper Scissor',
      link: 'rock-paper-scissor/',
      difficulty: EDifficulty.Easy,
      developer: 'AckermanLevi1',
      tags: [],
      isNew: true,
    },
  ],
  [
    'story-generator',
    {
      title: 'Story Generator',
      link: 'story-generator/',
      difficulty: EDifficulty.Easy,
      developer: 'hritik',
      tags: [],
    },
  ],
  [
    'multi-typing',
    {
      title: 'Multi Typing',
      link: 'multi-typing/',
      difficulty: EDifficulty.Easy,
      developer: 'noorulaink00',
      youtube: 'https://youtu.be/YCDeOT7DRnI',
      tags: [],
    },
  ],
  [
    'bill-spilt',
    {
      title: 'Bill Split',
      link: 'bill-spilt/',
      difficulty: EDifficulty.Easy,
      developer: 'Sukomal07',
      youtube: 'https://youtu.be/4H2DyrSJeYc',
      tags: [],
    },
  ],
  [
    'simon-game',
    {
      title: 'Simon game',
      link: 'simon-game/',
      difficulty: EDifficulty.Easy,
      developer: 'VishakhaSainani',
      tags: [],
      isNew: true,
    },
  ],
  [
    'fitness-tracker',
    {
      title: 'Fitness Tracker',
      link: 'fitness-tracker/',
      difficulty: EDifficulty.Easy,
      developer: 'CrypticRevenger',
      tags: [],
    },
  ],
  [
    'atm-simulator',
    {
      title: 'ATM Simulator',
      link: 'atm-simulator/',
      difficulty: EDifficulty.Easy,
      developer: 'Bratajit-03',
      tags: [],
      isNew: true,
    },
  ],
  [
    'mouse-follower',
    {
      title: 'Mouse Follower',
      link: 'mouse-follower/',
      difficulty: EDifficulty.Medium,
      developer: 'sadanandpai',
      tags: [],
    },
  ],
  [
    'finance-tracker',
    {
      title: 'Finance Tracker',
      link: 'finance-tracker/',
      difficulty: EDifficulty.Medium,
      developer: 'sujitmahapatra',
      tags: [],
    },
  ],
  [
    'meme-generator',
    {
      title: 'Meme Generator',
      link: 'meme-generator/',
      difficulty: EDifficulty.Medium,
      developer: 'noorulaink00',
      youtube: 'https://youtu.be/LHo9Hi47MTo',
      tags: [],
    },
  ],
  [
    'weather-app',
    {
      title: 'Weather App',
      link: 'weather-app/',
      difficulty: EDifficulty.Medium,
      developer: 'shruti-sen2004',
      tags: [ETag.interview],
      isNew: true,
    },
  ],
  [
    'toast-snackbar',
    {
      title: 'Toast/Snackbar',
      link: 'toast-snackbar/',
      difficulty: EDifficulty.Medium,
      developer: 'sadanandpai',
      youtube: 'https://youtu.be/-p3N5bJXEK8',
      tags: [ETag.interview],
    },
  ],
  [
    'column-table',
    {
      title: 'Column Table',
      link: 'column-table/',
      difficulty: EDifficulty.Medium,
      developer: 'sadanandpai',
      tags: [ETag.interview],
    },
  ],
  [
    'password-strength',
    {
      title: 'Password Strength',
      link: 'password-strength/',
      difficulty: EDifficulty.Medium,
      developer: 'sadanandpai',
      tags: [ETag.interview],
    },
  ],
  [
    'star-rating',
    {
      title: 'Star Rating',
      link: 'star-rating/',
      difficulty: EDifficulty.Medium,
      developer: 'sadanandpai',
      tags: [ETag.interview],
    },
  ],
  [
    'pixel-art',
    {
      title: 'Pixel Art',
      link: 'pixel-art/',
      difficulty: EDifficulty.Medium,
      developer: 'sadanandpai',
      tags: [ETag.interview],
    },
  ],
  [
    'word-counter',
    {
      title: 'Word Counter (online)',
      link: 'word-counter/',
      difficulty: EDifficulty.Medium,
      developer: 'AckermanLevi1',
      tags: [],
    },
  ],
  [
    'color-spotter',
    {
      title: 'Color Spotter',
      link: 'color-spotter/',
      difficulty: EDifficulty.Medium,
      developer: 'sadanandpai',
      tags: [ETag.interview],
    },
  ],
  [
    'todo-list',
    {
      title: 'Todo List',
      link: 'todo-list/',
      difficulty: EDifficulty.Medium,
      developer: 'sadanandpai',
      tags: [ETag.interview],
    },
  ],
  [
    'transfer-list',
    {
      title: 'Transfer List',
      link: 'transfer-list/',
      difficulty: EDifficulty.Medium,
      developer: 'sadanandpai',
      tags: [ETag.interview],
    },
  ],
  [
    'lift-simulation',
    {
      title: 'Lift Simulation',
      link: 'lift-simulation/',
      difficulty: EDifficulty.Medium,
      developer: 'gauravsinhaweb',
      tags: [],
      isNew: true,
    },
  ],
  [
    'tic-tac-toe',
    {
      title: 'Tic-Tac-Toe',
      link: 'tic-tac-toe/',
      difficulty: EDifficulty.Medium,
      developer: 'sadanandpai',
      tags: [ETag.interview],
    },
  ],
  [
    'chess-board',
    {
      title: 'Chess board',
      link: 'chess-board/',
      difficulty: EDifficulty.Medium,
      developer: 'sadanandpai',
      tags: [ETag.interview],
    },
  ],
  [
    'chips-input',
    {
      title: 'Chips Input',
      link: 'chips-input/',
      difficulty: EDifficulty.Medium,
      developer: 'sadanandpai',
      tags: [ETag.interview],
    },
  ],
  [
    'infinite-scroll',
    {
      title: 'Infinite Scroll',
      link: 'infinite-scroll/',
      difficulty: EDifficulty.Medium,
      developer: 'srijanB7',
      tags: [ETag.interview],
    },
  ],
  [
    'password-generator',
    {
      title: 'Password Generator',
      link: 'password-generator/',
      difficulty: EDifficulty.Medium,
      developer: 'sadanandpai',
      tags: [],
    },
  ],
  [
    'analog-clock',
    {
      title: 'Analog Clock',
      link: 'analog-clock/',
      difficulty: EDifficulty.Medium,
      developer: 'sadanandpai',
      tags: [],
    },
  ],
  [
    'drag-and-drop-puzzle',
    {
      title: 'Drag and Drop Puzzle',
      link: 'drag-and-drop-puzzle/',
      difficulty: EDifficulty.Medium,
      developer: 'noorulaink00',
      tags: [],
      isNew: true,
    },
  ],
  [
    'basic-calculator',
    {
      title: 'Basic calculator',
      link: 'basic-calculator/',
      difficulty: EDifficulty.Medium,
      developer: 'sadanandpai',
      tags: [ETag.interview],
    },
  ],
  [
    'match-pair',
    {
      title: 'Match Pair',
      link: 'match-pair/',
      difficulty: EDifficulty.Medium,
      developer: 'sadanandpai',
      tags: [ETag.interview],
    },
  ],
  [
    'typing-speed-test',
    {
      title: 'Typing Speed Test',
      link: 'typing-speed-test/',
      difficulty: EDifficulty.Medium,
      developer: 'sadanandpai',
      tags: [],
    },
  ],
  [
    'count-down-timer',
    {
      title: 'Countdown Timer',
      link: 'count-down-timer/',
      difficulty: EDifficulty.Medium,
      developer: 'sadanandpai',
      tags: [ETag.interview],
    },
  ],
  [
    'quiz-app',
    {
      title: 'Quiz App',
      link: 'quiz-app/',
      difficulty: EDifficulty.Medium,
      developer: 'Kei-K23',
      tags: [ETag.interview],
      isNew: true,
    },
  ],
  [
    'sorting-visualizer',
    {
      title: 'Sorting Visualizer',
      link: 'sorting-visualizer/',
      difficulty: EDifficulty.Medium,
      developer: 'viditagrawal56',
      tags: [],
      isNew: true,
    },
  ],
  [
    'snake-game',
    {
      title: 'Snake Game',
      link: 'snake-game/',
      difficulty: EDifficulty.Medium,
      developer: 'Kei-K23',
      tags: [],
    },
  ],
  [
    'hangman-game',
    {
      title: 'Hangman Game',
      link: 'hangman-game/',
      difficulty: EDifficulty.Medium,
      developer: 'Kei-K23',
      tags: [],
      isNew: true,
    },
  ],
  [
    'area-selector',
    {
      title: 'Area Selector',
      link: 'area-selector/',
      difficulty: EDifficulty.Medium,
      developer: 'sadanandpai',
      tags: [ETag.interview],
    },
  ],
  [
    '25-5-clock',
    {
      title: '25-5 Clock',
      link: '25-5-clock/',
      difficulty: EDifficulty.Medium,
      developer: 'caesar003',
      tags: [],
    },
  ],
  [
    'carousel',
    {
      title: 'Carousel',
      link: 'carousel/',
      difficulty: EDifficulty.Medium,
      developer: 'sadanandpai',
      tags: [ETag.interview],
    },
  ],
  [
    'calendar',
    {
      title: 'Calendar',
      link: 'calendar/',
      difficulty: EDifficulty.Medium,
      developer: 'sadanandpai',
      tags: [],
    },
  ],
  [
    'progress-bar',
    {
      title: 'Progress Bar',
      link: 'progress-bar/',
      difficulty: EDifficulty.Medium,
      developer: 'sadanandpai',
      tags: [ETag.interview],
    },
  ],
  [
    'movie-info',
    {
      title: 'Movie Info',
      link: 'movie-info/',
      difficulty: EDifficulty.Medium,
      developer: 'AckermanLevi1',
      tags: [],
    },
  ],
  [
    'timer-quiz',
    {
      title: 'Timer Quiz',
      link: 'timer-quiz/',
      difficulty: EDifficulty.Medium,
      developer: 'Vivek-GuptaXCode',
      tags: [],
    },
  ],
  [
    'otp-input',
    {
      title: 'OTP Input',
      link: 'otp-input/',
      difficulty: EDifficulty.Hard,
      developer: 'sadanandpai',
      tags: [ETag.interview],
    },
  ],
  [
    'paginator',
    {
      title: 'Paginator',
      link: 'paginator/',
      difficulty: EDifficulty.Hard,
      developer: 'sadanandpai',
      tags: [],
    },
  ],
  [
    'connect-four',
    {
      title: 'Connect Four',
      link: 'connect-four/',
      difficulty: EDifficulty.Hard,
      developer: 'sadanandpai',
      tags: [],
    },
  ],
  [
    'nested-comments',
    {
      title: 'Nested Comments',
      link: 'nested-comments/',
      difficulty: EDifficulty.Hard,
      developer: 'sadanandpai',
      tags: [ETag.interview],
      isNew: true,
    },
  ],
  [
    'json-creator',
    {
      title: 'JSON Creator',
      link: 'json-creator/',
      difficulty: EDifficulty.Hard,
      developer: 'sadanandpai',
      tags: [],
    },
  ],
  [
    'array-methods',
    {
      title: 'Array methods',
      link: 'array-methods/',
      difficulty: EDifficulty.Hard,
      developer: 'sadanandpai',
      tags: [],
    },
  ],
  [
    'type-ahead',
    {
      title: 'Typeahead (offline)',
      link: 'type-ahead/',
      difficulty: EDifficulty.Hard,
      developer: 'sadanandpai',
      tags: [ETag.interview],
    },
  ],
  [
    'type-ahead-online',
    {
      title: 'Typeahead (online)',
      link: 'type-ahead-online/',
      difficulty: EDifficulty.Hard,
      developer: 'sadanandpai',
      tags: [ETag.interview],
    },
  ],
]);

export const jsChallenges = sortChallengesByDifficulty(challenges);
