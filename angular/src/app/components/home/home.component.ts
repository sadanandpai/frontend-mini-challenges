import { Component } from '@angular/core';
import { ChallengesComponent } from '../challenges/challenges.component';
import { NgStyle } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    ChallengesComponent,
    NgStyle,
  ]
})
export class HomeComponent {
}
