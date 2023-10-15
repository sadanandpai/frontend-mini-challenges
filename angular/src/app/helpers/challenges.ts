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
  ],
  [
    'todo-list',
    {
      title: 'Todo list',
      link: 'todo-list',
      difficulty: 'easy',
      developer: 'pankajparkar',
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
      developer: 'pankajparkar',
      tags: [],
      isNew: true,
    },
  ],
  [
    'tic-tac-toe',
    {
      title: 'Tic tac toe',
      link: 'tic-tac-toe',
      difficulty: 'easy',
      developer: 'pankajparkar',
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
      developer: 'pankajparkar',
      tags: [],
      isNew: true,
    },
  ]
]);
