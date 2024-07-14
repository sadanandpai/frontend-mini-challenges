import { EDifficulty, type IChallenge } from '../types/challenge';
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
    'spinner',
    {
      title: 'Spinner',
      link: 'spinner/',
      difficulty: EDifficulty.Easy,
      developer: 'DhanushNehru',
      tags: [],
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
    'footer',
    {
      title: 'Footer',
      link: 'footer/',
      difficulty: EDifficulty.Easy,
      developer: 'AbhineshJha',
      youtube: 'https://youtu.be/FRRlFLfdvBE?si=HWn88BwJGTJvEBUD',
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
]);

export const cssChallenges = sortChallengesByDifficulty(challenges);
