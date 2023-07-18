import { Challenge } from '../types/interfaces/challenge.intf';

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
]);
