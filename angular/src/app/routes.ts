import { Routes } from '@angular/router';

import { ChallengeContainerComponent } from './components/challenge-container/challenge-container.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'machine-coding',
    component: ChallengeContainerComponent,
    children: [
      {
        path: 'counter',
        loadComponent: () => import('./machine-coding/counter/counter.component').then((m) => m.CounterComponent),
        data: { title: 'counter' },
      },
      {
        path: 'guess-number',
        loadComponent: () => import('./machine-coding/guess-number/guess-number.component').then((m) => m.GuessNumberComponent),
        data: { title: 'Guess number' },
      },
      {
        path: 'stack',
        loadComponent: () => import('./machine-coding/stack/stack.component').then((m) => m.StackComponent),
        data: { title: 'Stack' },
      },
      {
        path: 'tic-tac-toe',
        loadComponent: () => import('./machine-coding/tic-tac-toe/tic-tac-toe/tic-tac-toe.component').then((m) => m.TicTacToeComponent),
        data: { title: 'Tic tac toe' },
      },
      {
        path: 'todo-list',
        loadComponent: () => import('./machine-coding/todo-list/todo-app/todo-app.component').then((m) => m.TodoAppComponent),
        data: { title: 'Todo list' },
      },

      {
        path: 'word-count',
        loadComponent: () => import('./machine-coding/word-count/word-count.component').then((m) => m.WordCountComponent),
        data: { title: 'Word count' },
      },
    ],
  },
];
