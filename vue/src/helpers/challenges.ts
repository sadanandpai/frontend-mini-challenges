interface Challenge {
  title: string
  link: string
  difficulty: string
  developer?: string
  tags?: string[]
  isNew?: boolean
}

export const challenges = new Map<string, Challenge>([
  [
    'counter',
    {
      title: 'Counter',
      link: '/counter',
      difficulty: 'easy',
      developer: 'arpansaha13',
      tags: [],
    },
  ],
  [
    'accordion',
    {
      title: 'Accordion',
      link: '/accordion',
      difficulty: 'easy',
      developer: 'arpansaha13',
      tags: [],
    },
  ],
  [
    'light-dark-mode',
    {
      title: 'Light Dark Mode',
      link: '/light-dark-mode',
      difficulty: 'easy',
      developer: 'arpansaha13',
      tags: [],
    },
  ],
  [
    'table-colorizer',
    {
      title: 'Table Colorizer',
      link: '/table-colorizer',
      difficulty: 'easy',
      developer: 'arpansaha13',
      tags: [],
    },
  ],
  [
    'guess-the-number',
    {
      title: 'Guess the number',
      link: "/guess-the-number",
      difficulty: 'easy',
      developer: 'arpansaha13',
      tags: [],
    },
  ],
  [
    'pagination',
    {
      title: 'Pagination',
      link: "/pagination",
      difficulty: 'easy',
      developer: 'arpansaha13',
      tags: [],
    },
  ],
  [
    'stack',
    {
      title: 'Stack',
      link: "#",
      difficulty: 'easy',
    },
  ],
  [
    'star-rating',
    {
      title: 'Star Rating',
      link: "#",
      difficulty: 'easy',
    },
  ],
  [
    'telephone-formatter',
    {
      title: 'Telephone formatter',
      link: "/telephone-formatter",
      difficulty: 'easy',
      developer: 'arpansaha13',
      tags: [],
    },
  ],
  [
    'tic-tac-toe',
    {
      title: 'Tic Tac Toe',
      link: "#",
      difficulty: 'easy',
    },
  ],
  [
    'expense-tracker',
    {
      title: 'Expense Tracker',
      link: "#",
      difficulty: 'easy',
    },
  ],
  [
    '25-5-clock',
    {
      title: '25-5 Clock',
      link: "#",
      difficulty: 'easy',
    },
  ],
  [
    'email-templates',
    {
      title: 'Email Templates',
      link: '#',
      difficulty: 'medium',
    },
  ],
  [
    'toast-popup',
    {
      title: 'Toast Popup',
      link: '/toast-popup',
      difficulty: 'medium',
      developer: 'arpansaha13',
      tags: [],
    },
  ],
  [
    'password-strength',
    {
      title: 'Password Strength',
      link: '#',
      difficulty: 'medium',
    },
  ],
  [
    'column-table',
    {
      title: 'Column Table',
      link: '#',
      difficulty: 'medium',
    },
  ],
  [
    'todo-list',
    {
      title: 'Todo List',
      link: '#',
      difficulty: 'medium',
    },
  ],
  [
    'investment-calculator',
    {
      title: 'Investment Calculator',
      link: '#',
      difficulty: 'medium',
    },
  ],
  [
    'stopwatch',
    {
      title: 'Stopwatch',
      link: '#',
      difficulty: 'medium',
    },
  ],
  [
    'progress-bar',
    {
      title: 'Progress Bar',
      link: '#',
      difficulty: 'medium',
    },
  ],
  [
    'food-recipe',
    {
      title: 'Food Recipe',
      link: '#',
      difficulty: 'medium',
    },
  ],
  [
    'password-generator',
    {
      title: 'Password Generator',
      link: '#',
      difficulty: 'medium',
    },
  ],
  [
    'match-pair',
    {
      title: 'Match Pair',
      link: '#',
      difficulty: 'medium',
    },
  ],
  [
    'infinite-scrolling',
    {
      title: 'Infinite Scrolling (online)',
      link: '#',
      difficulty: 'medium',
    },
  ],
  [
    'file-explorer',
    {
      title: 'File Explorer',
      link: '#',
      difficulty: 'hard',
    },
  ],
  [
    'autocomplete-offline',
    {
      title: 'Typeahead / Autocomplete (offline)',
      link: '#',
      difficulty: 'hard',
    },
  ],
  [
    'autocomplete-online',
    {
      title: 'Typeahead / Autocomplete (online)',
      link: '#',
      difficulty: 'hard',
    },
  ],
  [
    'emoji-editor',
    {
      title: 'Emoji Editor',
      link: '#',
      difficulty: 'hard',
    },
  ],
  [
    'sort-table',
    {
      title: 'Sort Table',
      link: '#',
      difficulty: 'hard',
    },
  ],
]);
