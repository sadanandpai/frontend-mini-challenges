import { Challenge } from '../models/challenge.model';

export const challenges: Map<string, Challenge> = new Map([
  [
    'counter',
    {
      title: 'Counter',
      link: 'counter',
      difficulty: 'easy',
      developer: 'sadanandpai',
      tags: [],
      isNew: true,
    },
  ],
  [
    'guess-number',
    {
      title: 'Guess Number',
      link: 'guess-number',
      difficulty: 'easy',
      developer: 'pankajparkar',
      tags: [],
      isNew: true,
    },
  ]
]);
