import { EDifficulty, ETag, type IChallenge } from '../types/challenge';
import { sortChallengesByDifficulty } from '../utils/challenges.helper';

const challenges: Map<string, IChallenge> = new Map([
  [
    'shapes',
    {
      title: 'Shapes',
      description: 'Create and manipulate basic geometric shapes with interactive controls',
      link: 'shapes/',
      difficulty: EDifficulty.Easy,
      developer: 'sadanandpai',
      tags: [],
    },
  ],
  [
    'loaders',
    {
      title: 'Loaders',
      description: 'Implement various animated loading indicators and spinners',
      link: 'loaders/',
      difficulty: EDifficulty.Easy,
      developer: 'sadanandpai',
      tags: [],
      isNew: true,
    },
  ],
  [
    'dialog',
    {
      title: 'Dialog',
      description: 'Create a modal dialog/popup with overlay and close functionality',
      link: 'dialog/',
      difficulty: EDifficulty.Easy,
      developer: 'sahankatta',
      youtube: 'https://youtu.be/aIzyEDi6zgU',
      tags: [ETag.interview],
      isNew: true,
    },
  ],
  [
    'dynamic-tooltip',
    {
      title: 'Dynamic Tooltip',
      description: 'Build interactive tooltips that appear on hover with dynamic positioning',
      link: 'dynamic-tooltip/',
      difficulty: EDifficulty.Easy,
      developer: 'officialbidisha',
      tags: [ETag.interview],
      isNew: true,
    },
  ],
  [
    'light-dark-mode',
    {
      title: 'Light & Dark mode',
      description: 'Implement theme switching between light and dark color schemes',
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
      description: 'Create placeholder loading animations that mimic content structure',
      link: 'skeleton-loader/',
      difficulty: EDifficulty.Easy,
      developer: 'sahankatta',
      youtube: 'https://youtu.be/FEtTRjq1P6I',
      tags: [],
    },
  ],
  [
    'accordion',
    {
      title: 'Accordion',
      description: 'Build collapsible content sections with smooth expand/collapse animations',
      link: 'accordion/',
      difficulty: EDifficulty.Easy,
      developer: 'rashidtvmr',
      youtube: 'https://youtu.be/03KFXudVaoo',
      tags: [ETag.interview],
    },
  ],
  [
    'navigation-bar',
    {
      title: 'Navigation Bar',
      description: 'Create a responsive navigation menu with active state indicators',
      link: 'navigation-bar/',
      difficulty: EDifficulty.Easy,
      developer: 'christian-lee1398',
      youtube: 'https://youtu.be/urA5ogzG0L0',
      tags: [],
    },
  ],
  [
    'footer',
    {
      title: 'Footer',
      description: 'Implement a responsive page footer with multiple content sections',
      link: 'footer/',
      difficulty: EDifficulty.Easy,
      developer: 'AbhineshJha',
      youtube: 'https://youtu.be/FRRlFLfdvBE?si=HWn88BwJGTJvEBUD',
      tags: [],
    },
  ],
  [
    'stagger-animation',
    {
      title: 'Stagger Animation',
      description: 'Create sequenced animations with staggered timing effects',
      link: 'stagger-animation/',
      difficulty: EDifficulty.Medium,
      developer: 'sadanandpai',
      tags: [],
      isNew: true,
    },
  ],
  [
    'blobmaker',
    {
      title: 'Blob Maker',
      description: 'Generate organic blob shapes with customizable parameters',
      link: 'blobmaker/',
      difficulty: EDifficulty.Easy,
      developer: 'AbhineshJha',
      tags: [],
    },
  ],
  [
    'star-rating-display',
    {
      title: 'Star Rating Display',
      description: 'Implement an interactive star rating component with visual feedback',
      link: 'star-rating-display/',
      difficulty: EDifficulty.Medium,
      developer: 'sadanandpai',
      tags: [ETag.interview],
    },
  ],
  [
    'gradient-generator',
    {
      title: 'Gradient Generator',
      description: 'Build a tool to create and customize CSS gradients with live preview',
      link: 'gradient-generator/',
      difficulty: EDifficulty.Medium,
      developer: 'Sukomal07',
      tags: [],
      isNew: true,
    },
  ],
  [
    'timeline',
    {
      title: 'Timeline',
      description: 'Create a vertical timeline displaying events in chronological order',
      link: 'timeline/',
      difficulty: EDifficulty.Medium,
      developer: 'Vivek7038',
      tags: [],
      isNew: true,
    },
  ],
]);

export const cssChallenges = sortChallengesByDifficulty(challenges);
