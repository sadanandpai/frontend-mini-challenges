import { RouterModule, Routes } from '@angular/router';

import { ChallengeContainerComponent } from './components/challenge-container/challenge-container.component';
import { CounterComponent } from './machine-coding/counter/counter.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
