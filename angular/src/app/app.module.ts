import { APP_BASE_HREF } from '@angular/common'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChallengeComponent } from './components/challenge/challenge.component';
import { ChallengeContainerComponent } from './components/challenge-container/challenge-container.component';
import { ChallengesComponent } from './components/challenges/challenges.component';
import { CounterComponent } from './machine-coding/counter/counter.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    ChallengesComponent,
    ChallengeComponent,
    ChallengeContainerComponent,
    NavbarComponent,
    HomeComponent,
    CounterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
  ],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '/frontend-mini-challenges/angular/dist/angular/'
  }],
  bootstrap: [AppComponent],
})
export class AppModule { }
