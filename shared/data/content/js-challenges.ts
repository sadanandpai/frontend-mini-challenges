import { EDifficulty, ETag, type IChallenge } from '../types/challenge';
import { sortChallengesByDifficulty } from '../utils/challenges.helper';

const challenges: Map<string, IChallenge> = new Map([
  [
    'counter',
    {
      title: 'Counter',
      description: 'Can you implement a simple counter with increment and decrement functionality?',
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
      description:
        'Can you build a color picker that changes the background color based on user selection?',
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
      description:
        'Can you create a BMI calculator that takes height and weight inputs and calculates the BMI?',
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
      description: 'Can you implement a dice game that generates random numbers when rolled?',
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
      description: 'Can you build a dice roller that displays random dice faces on click?',
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
      description:
        'Can you create a number guessing game where users try to guess a randomly generated number?',
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
      description:
        'Can you build a tool that transforms strings (uppercase, lowercase, reverse, etc.) based on user input?',
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
      description: 'Can you implement a file uploader that displays the selected file information?',
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
      description:
        'Can you create a telephone number formatter that formats numbers as users type?',
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
      description: 'Can you build a simple music player with play/pause functionality?',
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
      description:
        'Can you implement a currency converter that converts between different currencies?',
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
      description: 'Can you create the classic Rock Paper Scissors game against the computer?',
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
      description:
        'Can you build a random story generator that creates stories from predefined templates?',
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
      description:
        'Can you implement a typing interface that shows multiple words to type simultaneously?',
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
      description:
        'Can you create a bill splitter that calculates how much each person should pay?',
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
      description:
        'Can you implement the Simon memory game where players repeat increasingly longer sequences?',
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
      description: 'Can you build a simple fitness tracker that logs and displays workout data?',
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
      description:
        'Can you create an ATM simulator with balance checking, deposit and withdrawal functionality?',
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
      description:
        'Can you implement an element that follows the mouse cursor with smooth movement?',
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
      description: 'Can you build a finance tracker that records and categorizes expenses?',
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
      description: 'Can you create a meme generator that overlays text on images?',
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
      description:
        'Can you build a weather application that displays current weather data from an API?',
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
      description: 'Can you implement a toast notification system that shows temporary messages?',
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
      description: 'Can you create a sortable and filterable data table component?',
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
      description: 'Can you build a password strength checker that evaluates password complexity?',
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
      description: 'Can you implement an interactive star rating component?',
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
      description: 'Can you create a grid-based drawing application where users can paint pixels?',
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
      description:
        'Can you build a tool that counts words and characters in real-time as users type?',
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
      description:
        'Can you create a game where players identify the different colored element in a grid?',
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
      description: 'Can you implement a task management application with CRUD operations?',
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
      description:
        'Can you build a UI for moving items between two lists with add/remove functionality?',
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
      description: 'Can you simulate elevator movement between floors with user requests?',
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
      description: 'Can you implement the classic 3x3 grid game with win detection?',
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
      description: 'Can you create an interactive chess board with piece movement rules?',
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
      description: 'Can you implement a tag input field with removable chips?',
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
      description: 'Can you load content dynamically as the user scrolls down the page?',
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
      description:
        'Can you create a tool that generates random secure passwords based on user criteria?',
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
      description: 'Can you build a working analog clock with hour, minute and second hands?',
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
      description: 'Can you create a jigsaw puzzle with draggable and droppable pieces?',
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
      description:
        'Can you implement a calculator with arithmetic operations and clear functionality?',
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
      description: 'Can you build a memory game where players find matching pairs of cards?',
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
      description: 'Can you create an application that measures words per minute typing speed?',
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
      description:
        'Can you build a timer that counts down from a set duration with pause/reset functionality?',
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
      description:
        'Can you create an interactive quiz with multiple questions, scoring, and results?',
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
      description: 'Can you visualize different sorting algorithms in action with animation?',
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
      description:
        'Can you implement the classic snake game with growing length and collision detection?',
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
      description: 'Can you build the word guessing game with progressive hangman drawing?',
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
      description: 'Can you create a component for selecting rectangular areas on an image?',
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
      description: 'Can you implement a Pomodoro timer with configurable work and break intervals?',
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
      description: 'Can you build an image slideshow with navigation controls and auto-rotation?',
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
      description: 'Can you create a monthly calendar with date selection and event display?',
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
      description:
        'Can you implement an animated progress indicator that fills based on completion?',
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
      description:
        'Can you build a movie information display with search and details functionality?',
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
      description: 'Can you create a quiz that runs against a countdown timer with score tracking?',
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
      description: 'Can you implement a one-time password input with auto-focus between fields?',
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
      description:
        'Can you build a pagination component with page number navigation and item count?',
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
      description: 'Can you implement the classic vertical four-in-a-row game with win detection?',
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
      description: 'Can you create a comment system with nested replies, threading, and voting?',
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
      description:
        'Can you build a UI for dynamically creating and editing nested JSON structures?',
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
      description: 'Can you reimplement common JavaScript array methods from scratch?',
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
      description: 'Can you implement search suggestions from a local dataset as user types?',
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
      description: 'Can you implement search suggestions with live API calls as user types?',
      link: 'type-ahead-online/',
      difficulty: EDifficulty.Hard,
      developer: 'sadanandpai',
      tags: [ETag.interview],
    },
  ],
]);

export const jsChallenges = sortChallengesByDifficulty(challenges);
