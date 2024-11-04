import { EDifficulty, ETag, type IChallenge } from '../types/challenge';
import { sortChallengesByDifficulty } from '../utils/challenges.helper';

const challenges: Map<string, IChallenge> = new Map([
  [
    'shapes',
    {
      title: 'Shapes',
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
    'accordion',
    {
      title: 'Accordion',
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
      link: 'timeline/',
      difficulty: EDifficulty.Medium,
      developer: 'Vivek7038',
      tags: [],
      isNew: true,
    },
  ],
]);

export const cssChallenges = sortChallengesByDifficulty(challenges);
