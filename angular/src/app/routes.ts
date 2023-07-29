import { Routes } from '@angular/router';

import { ChallengeContainerComponent } from './components/challenge-container/challenge-container.component';
import { CounterComponent } from './machine-coding/counter/counter.component';
import { HomeComponent } from './components/home/home.component';
import { GuessNumberComponent } from './machine-coding/guess-number/guess-number.component';
import { TodoAppComponent } from './machine-coding/todo-list/todo-app/todo-app.component';
import { StackComponent } from './machine-coding/stack/stack.component';

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
        component: CounterComponent,
        data: { title: 'counter' },
      },
      {
        path: 'guess-number',
        component: GuessNumberComponent,
        data: { title: 'Guess number' },
      },
      {
        path: 'stack',
        component: StackComponent,
        data: { title: 'Stack' },
      },
      {
        path: 'todo-list',
        component: TodoAppComponent,
        data: { title: 'Todo list' },
      },
    ],
  },
];
