import { EDifficulty, type IChallenge } from '../types/challenge';
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
    'dynamic-tooltip',
    {
      title: 'Dynamic Tooltip',
      link: 'dynamic-tooltip/',
      difficulty: EDifficulty.Easy,
      developer: 'officialbidisha', 
      tags: [],
      isNew: true,
    }
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
      tags: [],
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
      tags: [],
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
      tags: [],
    },
  ],
  [
    'dialog-popup',
    {
      title: 'Dialog Popup',
      link: 'dialog-popup/',
      difficulty: EDifficulty.Easy,
      developer: 'sahankatta',
      youtube: 'https://youtu.be/aIzyEDi6zgU',
      tags: [],
    },
  ],
  [
    'light-dark-mode',
    {
      title: 'Light & Dark mode',
      link: 'light-dark-mode/',
      difficulty: EDifficulty.Easy,
      developer: 'sadanandpai',
      youtube: 'https://youtu.be/hxcGGhjYNFE',
      tags: [],
    },
  ],
  [
    'skeleton-loader',
    {
      title: 'Skeleton Loader',
      link: 'skeleton-loader/',
      difficulty: EDifficulty.Easy,
      developer: 'sahankatta',
      youtube: 'https://youtu.be/FEtTRjq1P6I',
      tags: [],
    },
  ],
  [
    'spinning-loader',
    {
      title: 'Spinning Loader',
      link: 'spinning-loader/',
      difficulty: EDifficulty.Easy,
      developer: 'DhanushNehru',
      tags: [],
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
    'accordion',
    {
      title: 'Accordion',
      link: 'accordion/',
      difficulty: EDifficulty.Easy,
      developer: 'rashidtvmr',
      youtube: 'https://youtu.be/03KFXudVaoo',
      tags: [],
    },
  ],
  [
    'navigation-bar',
    {
      title: 'Navigation Bar',
      link: 'navigation-bar/',
      difficulty: EDifficulty.Easy,
      developer: 'christian-lee1398',
      youtube: 'https://youtu.be/urA5ogzG0L0',
      tags: [],
    },
  ],
  [
    'Footer',
    {
      title: 'Footer',
      link: 'Footer/',
      difficulty: EDifficulty.Easy,
      developer: 'AbhineshJha',
      youtube: 'https://youtu.be/FRRlFLfdvBE?si=HWn88BwJGTJvEBUD',
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
    'MadStory_generator',
    {
      title: 'MadStory Generator',
      link: 'MadStory_generator/',
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
    'blobmaker',
    {
      title: 'Blob Maker',
      link: 'blobmaker/',
      difficulty: EDifficulty.Easy,
      developer: 'AbhineshJha',
      tags: [],
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
    'finance-tracker',
    {
      title: 'Finance Tracker',
      link: 'finance-tracker/',
      difficulty: EDifficulty.Medium,
      developer: 'sujitmahapatra',
      tags: ['finance', 'web-app', 'javascript', 'css'],
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
      tags: [],
      isNew: true,
    },
  ],
  [
    'toast-popup',
    {
      title: 'Toast Popup',
      link: 'toast-popup/',
      difficulty: EDifficulty.Medium,
      developer: 'sadanandpai',
      youtube: 'https://youtu.be/-p3N5bJXEK8',
      tags: [],
    },
  ],
  [
    'css-shapes',
    {
      title: 'CSS Shapes',
      link: 'css-shapes/',
      difficulty: EDifficulty.Medium,
      developer: 'sadanandpai',
      tags: [],
    },
  ],
  [
    'column-table',
    {
      title: 'Column Table',
      link: 'column-table/',
      difficulty: EDifficulty.Medium,
      developer: 'sadanandpai',
      tags: [],
    },
  ],
  [
    'password-strength',
    {
      title: 'Password Strength',
      link: 'password-strength/',
      difficulty: EDifficulty.Medium,
      developer: 'sadanandpai',
      tags: [],
    },
  ],
  [
    'star-rating',
    {
      title: 'Star Rating',
      link: 'star-rating/',
      difficulty: EDifficulty.Medium,
      developer: 'sadanandpai',
      tags: [],
    },
  ],
  [
    'star-rating-display',
    {
      title: 'Star Rating Display',
      link: 'star-rating-display/',
      difficulty: EDifficulty.Medium,
      developer: 'sadanandpai',
      tags: [],
    },
  ],
  [
    'pixel-art',
    {
      title: 'Pixel Art',
      link: 'pixel-art/',
      difficulty: EDifficulty.Medium,
      developer: 'sadanandpai',
      tags: [],
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
      tags: [],
    },
  ],
  [
    'todo-list',
    {
      title: 'Todo List',
      link: 'todo-list/',
      difficulty: EDifficulty.Medium,
      developer: 'sadanandpai',
      tags: [],
    },
  ],
  [
    'gradient-generator',
    {
      title: 'Gradient Generator',
      link: 'gradient-generator/',
      difficulty: EDifficulty.Medium,
      developer: 'Sukomal07',
      tags: [],
      isNew: true,
    },
  ],
  [
    'transfer-list',
    {
      title: 'Transfer List',
      link: 'transfer-list/',
      difficulty: EDifficulty.Medium,
      developer: 'sadanandpai',
      tags: [],
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
      tags: [],
    },
  ],
  [
    'chess-board',
    {
      title: 'Chess board',
      link: 'chess-board/',
      difficulty: EDifficulty.Medium,
      developer: 'sadanandpai',
      tags: [],
    },
  ],
  [
    'chips-input',
    {
      title: 'Chips Input',
      link: 'chips-input/',
      difficulty: EDifficulty.Medium,
      developer: 'sadanandpai',
      tags: [],
    },
  ],
  [
    'infinite-scroll',
    {
      title: 'Infinite Scroll',
      link: 'infinite-scroll/',
      difficulty: EDifficulty.Medium,
      developer: 'srijanB7',
      tags: [],
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
      tags: [],
    },
  ],
  [
    'match-pair',
    {
      title: 'Match Pair',
      link: 'match-pair/',
      difficulty: EDifficulty.Medium,
      developer: 'sadanandpai',
      tags: [],
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
      tags: [],
    },
  ],
  [
    'otp-input',
    {
      title: 'OTP Input',
      link: 'otp-input/',
      difficulty: EDifficulty.Medium,
      developer: 'sadanandpai',
      tags: [],
    },
  ],
  [
    'quiz-app',
    {
      title: 'Quiz App',
      link: 'quiz-app/',
      difficulty: EDifficulty.Medium,
      developer: 'Kei-K23',
      tags: [],
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
      tags: [],
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
      tags: [],
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
      tags: [],
    },
  ],
  [
    'movie-info',
    {
      title: 'Movie-info app (online)',
      link: 'movie-info/',
      difficulty: EDifficulty.Medium,
      developer: 'AckermanLevi1',
      tags: [],
    },
  ],
  [
    'quiz-app-with-timer',
    {
      title: 'Quiz App with Timer',
      link: 'quiz-app-with-timer/',
      difficulty: EDifficulty.Medium,
      developer: 'Vivek-GuptaXCode',
      tags: [],
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
    'comment-box',
    {
      title: 'Comment box',
      link: 'comment-box/',
      difficulty: EDifficulty.Hard,
      developer: 'sadanandpai',
      tags: [],
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
      title: 'Typeahead / Autocomplete (offline)',
      link: 'type-ahead/',
      difficulty: EDifficulty.Hard,
      developer: 'sadanandpai',
      tags: [],
    },
  ],
  [
    'type-ahead-online',
    {
      title: 'Typeahead / Autocomplete (online)',
      link: 'type-ahead-online/',
      difficulty: EDifficulty.Hard,
      developer: 'sadanandpai',
      tags: [],
    },
  ],
]);

export const jsChallenges = sortChallengesByDifficulty(challenges);
