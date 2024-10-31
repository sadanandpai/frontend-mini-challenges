import { EDifficulty, ETag, type IChallenge } from '../types/challenge';
import { sortChallengesByDifficulty } from '../utils/challenges.helper';

const challenges = new Map<string, IChallenge>([
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
    'image-gallery',
    {
      title: 'Image Gallery',
      link: 'image-gallery',
      difficulty: EDifficulty.Easy,
      developer: 'Bhushan1019',
      tags: [ETag.interview],
    },
  ],
  [
    'accordion',
    {
      title: 'Accordion',
      link: 'accordion',
      developer: 'NikhilJHA01',
      difficulty: EDifficulty.Easy,
      tags: [ETag.interview],
    },
  ],
  [
    'background-changer',
    {
      title: 'Background Changer',
      link: 'background-changer',
      developer: 'AdityaSuryawanshi',
      difficulty: EDifficulty.Easy,
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
    },
  ],
  [
    'guess-number',
    {
      title: 'Guess the number',
      link: 'guess-number',
      difficulty: EDifficulty.Easy,
      developer: 'deepakrajkranti',
      tags: [ETag.interview],
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
    },
  ],
  [
    'star-Rating',
    {
      title: 'Star Rating',
      link: 'star-Rating',
      difficulty: EDifficulty.Easy,
      developer: 'NikhilJHA01',
      tags: [ETag.interview],
    },
  ],
  [
    'telephone-formatter',
    {
      title: 'Telephone formatter',
      link: 'telephone-formatter',
      difficulty: EDifficulty.Easy,
      developer: 'arpansaha13',
      tags: [ETag.interview],
    },
  ],
  [
    'string-transformers',
    {
      title: 'String transformers',
      link: 'string-transformers',
      difficulty: EDifficulty.Easy,
      developer: 'arpansaha13',
      tags: [ETag.interview],
    },
  ],
  [
    'tic-tac-toe',
    {
      title: 'Tic Tac Toe',
      link: 'tic-tac-toe',
      difficulty: EDifficulty.Easy,
      developer: 'rashidtvmr',
      tags: [ETag.interview],
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
      title: 'Stepper',
      link: 'stepper',
      difficulty: EDifficulty.Easy,
      developer: 'codechitra',
      tags: [ETag.interview],
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
      tags: [ETag.interview],
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
    },
  ],
  [
    'traffic-lights',
    {
      title: 'Traffic Lights',
      link: 'traffic-lights',
      difficulty: EDifficulty.Medium,
      developer: 'rishabhm05',
      tags: [ETag.interview],
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
      tags: [ETag.interview],
    },
  ],
  [
    'modal-popup',
    {
      title: 'Modal Popup',
      link: 'modal-popup',
      difficulty: EDifficulty.Medium,
      developer: 'rishabhm05',
      tags: [ETag.interview],
    },
  ],
  [
    'password-strength',
    {
      title: 'Password Strength',
      link: 'password-strength',
      difficulty: EDifficulty.Medium,
      developer: 'deepu0',
      tags: [ETag.interview],
    },
  ],
  [
    'grid-lights',
    {
      title: 'Grid Lights',
      link: 'grid-lights',
      difficulty: EDifficulty.Medium,
      developer: 'sadanandpai',
      tags: [ETag.interview],
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
      tags: [ETag.interview],
    },
  ],
  [
    'todo-list',
    {
      title: 'Todo List',
      link: 'todo-list',
      difficulty: EDifficulty.Medium,
      developer: 'deepakrajkranti',
      tags: [ETag.interview],
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
      tags: [ETag.interview],
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
    },
  ],
  [
    'quiz-app',
    {
      title: 'Quiz App',
      link: 'quiz-app',
      difficulty: EDifficulty.Medium,
      developer: 'AbhilashMadi',
      tags: [ETag.interview],
    },
  ],
  [
    'chess-board',
    {
      title: 'Chess Board',
      link: 'chess-board',
      difficulty: EDifficulty.Medium,
      developer: 'sadanandpai',
      tags: [ETag.interview],
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
    'nested-checkbox',
    {
      title: 'Nested Checkbox',
      link: 'nested-checkbox',
      difficulty: EDifficulty.Hard,
      developer: 'SujithGunasekaran',
      tags: [ETag.interview],
    },
  ],
  [
    'nested-comments',
    {
      title: 'Nested Comments',
      link: 'nested-comments',
      difficulty: EDifficulty.Hard,
      developer: 'Akshay-Omkar',
      // contributors: ['arpansaha13'],
      tags: [ETag.interview],
      isNew: true,
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
    },
  ],
  [
    'transfer-list',
    {
      title: 'Transfer List',
      link: 'transfer-list',
      difficulty: EDifficulty.Medium,
      developer: 'DeePaK-HeeRaKaRi',
      tags: [ETag.interview],
    },
  ],
  [
    'infinite-scroll',
    {
      title: 'Infinite Scroll (online)',
      link: 'infinite-scrolling',
      difficulty: EDifficulty.Medium,
      developer: 'ayush-dutt-sharma',
      tags: [ETag.interview],
    },
  ],
  [
    'match-pair',
    {
      title: 'Match Pair',
      link: 'match-pair',
      difficulty: EDifficulty.Medium,
      developer: 'sadanandpai',
      tags: [ETag.interview],
    },
  ],
  [
    'word-connect',
    {
      title: 'Word Connect',
      link: 'word-connect',
      difficulty: EDifficulty.Hard,
      developer: 'sadanandpai',
      tags: [ETag.interview],
      isNew: true,
    },
  ],
  [
    'otp',
    {
      title: 'OTP',
      link: 'otp',
      difficulty: EDifficulty.Hard,
      developer: 'rishabhm05',
      tags: [ETag.interview],
    },
  ],
  [
    'file-explorer',
    {
      title: 'File Explorer',
      link: 'file-explorer',
      difficulty: EDifficulty.Hard,
      developer: 'sadanandpai',
      tags: [ETag.interview],
    },
  ],
  [
    'autocomplete-offline',
    {
      title: 'Typeahead (offline)',
      link: 'autocomplete-offline',
      difficulty: EDifficulty.Hard,
      developer: 'deepu0',
      tags: [ETag.interview],
    },
  ],
  [
    'autocomplete-online',
    {
      title: 'Typeahead (online)',
      link: 'autocomplete-online',
      difficulty: EDifficulty.Hard,
      developer: 'deepu0',
      tags: [ETag.interview],
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
      tags: [],
    },
  ],
  [
    'memory-game',
    {
      title: 'Memory Game',
      link: 'memory-game',
      difficulty: EDifficulty.Medium,
      developer: 'Akshat-Gupta',
      tags: [],
      isNew: true,
    },
  ],
  [
    'chip-input',
    {
      title: 'Chips Input',
      link: 'chip-input',
      difficulty: EDifficulty.Medium,
      developer: 'Akshay-Omkar',
      tags: [ETag.interview],
      isNew: true,
    },
  ],
  [
    'tabs',
    {
      title: 'Tab',
      link: 'tabs',
      difficulty: EDifficulty.Easy,
      developer: 'Akshay-Omkar',
      tags: [],
      isNew: true,
    },
  ],
  [
    'drag-drop',
    {
      title: 'Drag-Drop',
      link: 'drag-drop',
      difficulty: EDifficulty.Medium,
      developer: 'Akshay-Omkar',
      tags: [],
      isNew: true,
    },
  ],
  [
    'circles',
    {
      title: 'Circles',
      link: 'circles',
      difficulty: EDifficulty.Medium,
      developer: 'sadanandpai',
      tags: [],
      isNew: true,
    },
  ],
  [
    'analog-clock',
    {
      title: 'Analog Clock',
      link: 'analog-clock',
      difficulty: EDifficulty.Medium,
      developer: 'sadanandpai',
      tags: [],
      isNew: true,
    },
  ],
  [
    'advanced-counter',
    {
      title: 'Advanced Counter',
      link: 'advanced-counter',
      difficulty: EDifficulty.Medium,
      developer: 'sadanandpai',
      tags: [ETag.interview],
    },
  ],
  [
    'meeting-calendar',
    {
      title: 'Meeting Calendar',
      link: 'meeting-calendar',
      difficulty: EDifficulty.Hard,
      developer: 'sadanandpai',
      tags: [ETag.interview],
      isNew: true,
    },
  ],
]);

export const reactChallenges = sortChallengesByDifficulty(challenges);
