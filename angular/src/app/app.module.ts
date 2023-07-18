import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ChallengeComponent } from './components/challenge/challenge.component';
import { ChallengeContainerComponent } from './components/challenge-container/challenge-container.component';
import { ChallengesComponent } from './components/challenges/challenges.component';
import { CounterComponent } from './machine-coding/counter/counter.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

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
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
