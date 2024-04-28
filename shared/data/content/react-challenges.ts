import { EDifficulty, type IChallenge } from '../types/challenge';
import { sortChallengesByDifficulty } from '../utils/challenges.helper';

const challenges = new Map<string, IChallenge>([
  [
    'counter',
    {
      title: 'Counter',
      link: 'counter',
      difficulty: EDifficulty.Easy,
      developer: 'sadanandpai',
      tags: [],
    },
  ],
  [
    'programming-languages-multiverse',
    {
      title: 'Programming Multiverse',
      link: 'programming-languages-multiverse',
      difficulty: EDifficulty.Easy,
      developer: 'Sumitwarrior7',
      tags: [],
    },
  ],
  [
    'anagram-checker',
    {
      title: 'Anagram Checker',
      link: 'anagram-checker',
      difficulty: EDifficulty.Easy,
      developer: 'Manmit Tiwade',
      tags: [],
    },
  ],
  [
    'quote-generator',
    {
      title: 'Quote Generator',
      link: 'quote-generator',
      difficulty: EDifficulty.Easy,
      developer: 'viditagrawal56',
      isNew: true,
      tags: [],
    },
  ],
  [
    'image-gallery',
    {
      title: 'Image Gallery',
      link: 'image-gallery',
      difficulty: EDifficulty.Easy,
      developer: 'Bhushan1019',
      isNew: true,
      tags: [],
    },
  ],
  [
    'accordion',
    {
      title: 'Accordion',
      link: 'accordion',
      developer: 'NikhilJHA01',
      difficulty: EDifficulty.Easy,
      tags: [],
    },
  ],
  [
    'background-changer',
    {
      title: 'Background Changer',
      link: 'background-changer',
      developer: 'AdityaSuryawanshi',
      difficulty: EDifficulty.Easy,
      isNew: true,
      tags: [],
    },
  ],
  [
    'light-dark-mode',
    {
      title: 'Light Dark Mode',
      link: 'light-dark-mode',
      difficulty: EDifficulty.Easy,
      developer: 'NikhilJHA01',
      tags: [],
    },
  ],
  [
    'qr-code-generator',
    {
      title: 'QR generator',
      link: 'qr-code-generator',
      difficulty: EDifficulty.Easy,
      developer: 'Krishnakalani111',
      tags: [],
    },
  ],
  [
    'your-sport',
    {
      title: 'Your Sport',
      link: 'your-sport',
      difficulty: EDifficulty.Easy,
      developer: 'Sumitwarrior7',
      tags: [],
    },
  ],
  [
    'table-colorizer',
    {
      title: 'Table Colorizer',
      link: 'table-colorizer',
      difficulty: EDifficulty.Easy,
      developer: 'ravi02205',
      tags: [],
      isNew: true,
    },
  ],
  [
    'Guess-the-number',
    {
      title: 'Guess the number',
      link: 'Guess-the-number',
      difficulty: EDifficulty.Easy,
      developer: 'deepakrajkranti',
      tags: [],
    },
  ],
  [
    'pagination',
    {
      title: 'Pagination',
      link: 'pagination',
      difficulty: EDifficulty.Easy,
      developer: 'Pancratzia',
      tags: [],
      isNew: true,
    },
  ],
  [
    'stack',
    {
      title: 'Stack',
      link: 'stack',
      difficulty: EDifficulty.Easy,
      developer: 'kumaratul60',
      tags: [],
    },
  ],
  [
    'word-count',
    {
      title: 'Word Count',
      link: 'word-count',
      difficulty: EDifficulty.Easy,
      developer: 'Sumitwarrior7',
      tags: [],
      isNew: true,
    },
  ],
  [
    'temperature-converter',
    {
      title: 'Temperature Converter',
      link: 'temperature-converter',
      difficulty: EDifficulty.Easy,
      developer: 'Sumitwarrior7',
      tags: [],
      isNew: true,
    },
  ],
  [
    'star-Rating',
    {
      title: 'Star Rating',
      link: 'star-Rating',
      difficulty: EDifficulty.Easy,
      developer: 'NikhilJHA01',
      tags: [],
    },
  ],
  [
    'telephone-formatter',
    {
      title: 'Telephone formatter',
      link: 'telephone-formatter',
      difficulty: EDifficulty.Easy,
      developer: 'arpansaha13',
      tags: [],
    },
  ],
  [
    'string-transformers',
    {
      title: 'String transformers',
      link: 'string-transformers',
      difficulty: EDifficulty.Easy,
      developer: 'arpansaha13',
      tags: [],
    },
  ],
  [
    'tic-tac-toe',
    {
      title: 'Tic Tac Toe',
      link: 'tic-tac-toe',
      difficulty: EDifficulty.Easy,
      developer: 'rashidtvmr',
      tags: [],
    },
  ],
  [
    'expense-tracker',
    {
      title: 'Expense Tracker',
      link: 'expense-tracker',
      difficulty: EDifficulty.Easy,
      developer: 'harsh472000',
      tags: [],
      isNew: true,
    },
  ],
  [
    '25-5-clock',
    {
      title: '25-5 Clock',
      link: '25-5-clock',
      difficulty: EDifficulty.Easy,
      developer: 'caesar003',
      tags: [],
    },
  ],
  [
    'bmi-calculator',
    {
      title: 'BMI Calculator',
      link: 'bmi-calculator',
      difficulty: EDifficulty.Easy,
      developer: 'ashikjhonson',
      tags: [],
    },
  ],
  [
    'stepper',
    {
      title: 'STEPPER',
      link: 'stepper',
      difficulty: EDifficulty.Easy,
      developer: 'codechitra',
      tags: [],
      isNew: true,
    },
  ],
  [
    'calculator',
    {
      title: 'Calculator',
      link: 'calculator',
      difficulty: EDifficulty.Medium,
      developer: 'liza',
      tags: [],
    },
  ],
  [
    'color-mixer',
    {
      title: 'Color Mixer',
      link: 'color-mixer',
      difficulty: EDifficulty.Medium,
      developer: 'Sumitwarrior7',
      tags: [],
      isNew: true,
    },
  ],
  [
    'traffic-lights',
    {
      title: 'Traffic Lights',
      link: 'traffic-lights',
      difficulty: EDifficulty.Medium,
      developer: 'rishabhm05',
      tags: [],
      isNew: true,
    },
  ],
  [
    'email-templates',
    {
      title: 'Email Templates',
      link: 'email-templates',
      difficulty: EDifficulty.Medium,
      developer: 'sadanandpai',
      tags: [],
    },
  ],
  [
    'toast-popup',
    {
      title: 'Toast Popup',
      link: 'toast-popup',
      difficulty: EDifficulty.Medium,
      developer: 'deepu0',
      tags: [],
    },
  ],
  [
    'modal-popup',
    {
      title: 'Modal Popup',
      link: 'modal-popup',
      difficulty: EDifficulty.Medium,
      developer: 'rishabhm05',
      tags: [],
      isNew: true,
    },
  ],
  [
    'password-strength',
    {
      title: 'Password Strength',
      link: 'password-strength',
      difficulty: EDifficulty.Medium,
      developer: 'deepu0',
      tags: [],
    },
  ],
  [
    'timeline',
    {
      title: 'Timeline',
      link: 'timeline',
      difficulty: EDifficulty.Medium,
      developer: 'Vivek7038',
      tags: [],
      isNew: true,
    },
  ],
  [
    'column-table',
    {
      title: 'Column Table',
      link: 'column-table',
      difficulty: EDifficulty.Medium,
      developer: 'sadanandpai',
      tags: [],
      isNew: true,
    },
  ],
  [
    'todo-list',
    {
      title: 'Todo List',
      link: 'todo-list',
      difficulty: EDifficulty.Medium,
      developer: 'deepakrajkranti',
      tags: [],
    },
  ],
  [
    'emoji-picker',
    {
      title: 'Emoji Picker',
      link: 'emoji-picker',
      difficulty: EDifficulty.Medium,
      developer: 'jeevaramanathan',
      tags: [],
      isNew: true,
    },
  ],
  [
    'investment-calculator',
    {
      title: 'Investment Calculator',
      link: 'investment-calculator',
      difficulty: EDifficulty.Medium,
      developer: 'insharahAyyubi',
      tags: [],
    },
  ],
  [
    'stopwatch',
    {
      title: 'Stopwatch',
      link: 'stopwatch',
      difficulty: EDifficulty.Medium,
      developer: 'rashidtvmr',
      tags: [],
      isNew: true,
    },
  ],
  [
    'progressbar',
    {
      title: 'Progressbar',
      link: 'progressbar',
      difficulty: EDifficulty.Medium,
      developer: 'dhanu084',
      tags: [],
      isNew: true,
    },
  ],
  [
    'quiz-app',
    {
      title: 'Quiz App',
      link: 'quiz-app',
      difficulty: EDifficulty.Medium,
      developer: 'AbhilashMadi',
      tags: [],
      isNew: true,
    },
  ],
  [
    'chess-board',
    {
      title: 'Chess Board',
      link: 'chess-board',
      difficulty: EDifficulty.Medium,
      developer: 'AbhilashMadi',
      tags: [],
      isNew: true,
    },
  ],
  [
    'nested-dropdown',
    {
      title: 'Nested Dropdown',
      link: 'nested-dropdown',
      difficulty: EDifficulty.Medium,
      developer: 'AnkitKTrivedi',
      tags: [],
      isNew: true,
    },
  ],
  [
    'food-recipe',
    {
      title: 'Food Recipe',
      link: 'food-recipe',
      difficulty: EDifficulty.Medium,
      developer: 'Kei-K23',
      tags: [],
    },
  ],
  [
    'password-generator',
    {
      title: 'Password Generator',
      link: 'password-generator',
      difficulty: EDifficulty.Medium,
      developer: 'Kei-K23',
      tags: [],
      isNew: true,
    },
  ],
  [
    'transfer-list',
    {
      title: 'Transfer List',
      link: 'transfer-list',
      difficulty: EDifficulty.Medium,
      developer: 'DeePaK-HeeRaKaRi',
      tags: [],
    },
  ],
  [
    'infinite-scrolling',
    {
      title: 'Infinite Scrolling (online)',
      link: 'infinite-scrolling',
      difficulty: EDifficulty.Medium,
      developer: 'ayush-dutt-sharma',
      tags: [],
      isNew: true,
    },
  ],
  [
    'match-pair',
    {
      title: 'Match Pair',
      link: 'match-pair',
      difficulty: EDifficulty.Medium,
      developer: 'sadanandpai',
      tags: [],
      isNew: true,
    },
  ],
  [
    'word-connect',
    {
      title: 'Word Connect',
      link: 'word-connect',
      difficulty: EDifficulty.Medium,
      developer: 'sadanandpai',
      tags: [],
      isNew: true,
    },
  ],
  [
    'otp',
    {
      title: 'OTP',
      link: 'otp',
      difficulty: EDifficulty.Medium,
      developer: 'rishabhm05',
      tags: [],
      isNew: true,
    },
  ],
  [
    'file-explorer',
    {
      title: 'File Explorer',
      link: 'file-explorer',
      difficulty: EDifficulty.Hard,
      developer: 'sadanandpai',
      tags: [],
      isNew: true,
    },
  ],
  [
    'autocomplete-offline',
    {
      title: 'Typeahead / Autocomplete (offline)',
      link: 'autocomplete-offline',
      difficulty: EDifficulty.Hard,
      developer: 'deepu0',
      tags: [],
    },
  ],
  [
    'autocomplete-online',
    {
      title: 'Typeahead / Autocomplete (online)',
      link: 'autocomplete-online',
      difficulty: EDifficulty.Hard,
      developer: 'deepu0',
      tags: [],
    },
  ],
  [
    'water-balancer',
    {
      title: 'Water Balancer',
      link: 'water-balancer',
      difficulty: EDifficulty.Hard,
      developer: 'sadanandpai',
      tags: [],
      isNew: true,
    },
  ],
  [
    'inline-options',
    {
      title: 'Inline Options',
      link: 'inline-options',
      difficulty: EDifficulty.Easy,
      developer: 'takshch',
      tags: [],
    },
  ],
  [
    'digital-clock',
    {
      title: 'Digital Clock',
      link: 'digital-clock',
      difficulty: EDifficulty.Medium,
      developer: 'Syamsai-Polavarapu',
      tags: [],
      isNew: true,
    },
  ],
  [
    'nested-comments',
    {
      title: 'Nested Comments',
      link: 'nested-comments',
      difficulty: EDifficulty.Medium,
      developer: 'Akshay-Omkar',
      // contributors: ['arpansaha13'],
      tags: [],
      isNew: true,
    },
  ],
  [
    '15puzzle',
    {
      title: '15 Puzzle',
      link: '15puzzle',
      difficulty: EDifficulty.Medium,
      developer: 'Bateusz',
      tags: [],
      isNew: true,
    },
  ],
  [
    'feedback-modal',
    {
      title: 'Feedback Modal',
      link: 'feedback-modal',
      difficulty: EDifficulty.Medium,
      developer: 'ssudipta',
    },
  ],
  [
    'memory-game',
    {
      title: 'Memory Game',
      link: 'memory-game',
      difficulty: EDifficulty.Hard,
      developer: 'Akshat',
      tags: [],
      isNew: true,
    },
  ],
]);

export const reactChallenges = sortChallengesByDifficulty(challenges);
