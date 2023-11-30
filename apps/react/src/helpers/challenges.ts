interface Challenge {
  title: string;
  link: string;
  difficulty: string;
  developer?: string;
  contributors?: string[];
  tags?: string[];
  isNew?: boolean;
}

export const challenges = new Map<string, Challenge>([
  [
    'counter',
    {
      title: 'Counter',
      link: 'counter',
      difficulty: 'easy',
      developer: 'sadanandpai',
      tags: [],
    },
  ],
  [
    'programming-languages-multiverse',
    {
      title: 'Programming Multiverse',
      link: 'programming-languages-multiverse',
      difficulty: 'easy',
      developer: 'Sumitwarrior7',
      tags: [],
      isNew: true,
    },
  ],
  [
    'quote-generator',
    {
      title: 'Quote Generator',
      link: 'quote-generator',
      difficulty: 'easy',
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
      difficulty: 'easy',
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
      difficulty: 'easy',
      tags: [],
    },
  ],
  [
    'background-changer',
    {
      title: 'Background Changer',
      link: 'background-changer',
      developer: 'AdityaSuryawanshi',
      difficulty: 'easy',
      isNew: true,
      tags: [],
    },
  ],
  [
    'light-dark-mode',
    {
      title: 'Light Dark Mode',
      link: 'light-dark-mode',
      difficulty: 'easy',
      developer: 'NikhilJHA01',
      tags: [],
    },
  ],
  [
    'qr-code-generator',
    {
      title: 'QR generator',
      link: 'qr-code-generator',
      difficulty: 'easy',
      developer: 'Krishnakalani111',
      tags: [],
    },
  ],
  [
    'your-sport',
    {
      title: 'Your Sport',
      link: 'your-sport',
      difficulty: 'easy',
      developer: 'Sumitwarrior7',
      tags: [],
      isNew: true,
    },
  ],
  [
    'table-colorizer',
    {
      title: 'Table Colorizer',
      link: 'table-colorizer',
      difficulty: 'easy',
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
      difficulty: 'easy',
      developer: 'deepakrajkranti',
      tags: [],
    },
  ],
  [
    'pagination',
    {
      title: 'Pagination',
      link: 'pagination',
      difficulty: 'easy',
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
      difficulty: 'easy',
      developer: 'kumaratul60',
      tags: [],
      isNew: true,
    },
  ],
  [
    'word-count',
    {
      title: 'Word Count',
      link: 'word-count',
      difficulty: 'easy',
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
      difficulty: 'easy',
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
      difficulty: 'easy',
      developer: 'NikhilJHA01',
      tags: [],
    },
  ],
  [
    'telephone-formatter',
    {
      title: 'Telephone formatter',
      link: 'telephone-formatter',
      difficulty: 'easy',
      developer: 'arpansaha13',
      tags: [],
    },
  ],
  [
    'string-transformers',
    {
      title: 'String transformers',
      link: 'string-transformers',
      difficulty: 'easy',
      developer: 'arpansaha13',
      tags: [],
      isNew: true,
    },
  ],
  [
    'tic-tac-toe',
    {
      title: 'Tic Tac Toe',
      link: 'tic-tac-toe',
      difficulty: 'easy',
      developer: 'rashidtvmr',
      tags: [],
      isNew: true,
    },
  ],
  [
    'expense-tracker',
    {
      title: 'Expense Tracker',
      link: 'expense-tracker',
      difficulty: 'easy',
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
      difficulty: 'easy',
      developer: 'caesar003',
      tags: [],
    },
  ],
  [
    'bmi-calculator',
    {
      title: 'BMI Calculator',
      link: 'bmi-calculator',
      difficulty: 'easy',
      developer: 'ashikjhonson',
      tags: [],
    },
  ],
  [
    'color-mixer',
    {
      title: 'Color Mixer',
      link: 'color-mixer',
      difficulty: 'medium',
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
      difficulty: 'medium',
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
      difficulty: 'medium',
      developer: 'sadanandpai',
      tags: [],
    },
  ],
  [
    'toast-popup',
    {
      title: 'Toast Popup',
      link: 'toast-popup',
      difficulty: 'medium',
      developer: 'deepu0',
      tags: [],
    },
  ],
  [
    'modal-popup',
    {
      title: 'Modal Popup',
      link: 'modal-popup',
      difficulty: 'medium',
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
      difficulty: 'medium',
      developer: 'deepu0',
      tags: [],
    },
  ],
  [
    'column-table',
    {
      title: 'Column Table',
      link: 'column-table',
      difficulty: 'medium',
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
      difficulty: 'medium',
      developer: 'deepakrajkranti',
      tags: [],
    },
  ],
  [
    'emoji-picker',
    {
      title: 'Emoji Picker',
      link: 'emoji-picker',
      difficulty: 'medium',
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
      difficulty: 'medium',
      developer: 'insharahAyyubi',
      tags: [],
      isNew: true,
    },
  ],
  [
    'stopwatch',
    {
      title: 'Stopwatch',
      link: 'stopwatch',
      difficulty: 'medium',
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
      difficulty: 'medium',
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
      difficulty: 'medium',
      developer: 'AbhilashMadi',
      tags: [],
      isNew: true,
    }
  ],
  [
    'chess-board',
    {
      title: 'Chess Board',
      link: 'chess-board',
      difficulty: 'medium',
      developer: 'AbhilashMadi',
      tags: [],
      isNew: true,
    }
  ],
  [
    'food-recipe',
    {
      title: 'Food Recipe',
      link: 'food-recipe',
      difficulty: 'medium',
      developer: 'Kei-K23',
      tags: [],
      isNew: true,
    },
  ],
  [
    'password-generator',
    {
      title: 'Password Generator',
      link: 'password-generator',
      difficulty: 'medium',
      developer: 'Kei-K23',
      tags: [],
      isNew: true,
    },
  ],
  [
    'otp',
    {
      title: 'OTP',
      link: 'otp',
      difficulty: 'medium',
      developer: 'rishabhm05',
      tags: [],
      isNew: true,
    },
  ],
  [
    'match-pair',
    {
      title: 'Match Pair',
      link: 'match-pair',
      difficulty: 'medium',
      developer: 'sadanandpai',
      tags: [],
      isNew: true,
    },
  ],
  [
    'infinite-scrolling',
    {
      title: 'Infinite Scrolling (online)',
      link: 'infinite-scrolling',
      difficulty: 'medium',
      developer: 'ayush-dutt-sharma',
      tags: [],
      isNew: true,
    },
  ],
  [
    'file-explorer',
    {
      title: 'File Explorer',
      link: 'file-explorer',
      difficulty: 'hard',
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
      difficulty: 'hard',
      developer: 'deepu0',
      tags: [],
    },
  ],
  [
    'autocomplete-online',
    {
      title: 'Typeahead / Autocomplete (online)',
      link: 'autocomplete-online',
      difficulty: 'hard',
      developer: 'deepu0',
      tags: [],
    },
  ],
]);
