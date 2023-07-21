import { Component } from '@angular/core';
import { challenges } from 'src/app/helpers/challenges';
import { ChallengeComponent } from '../challenge/challenge.component';
import { NgFor } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.scss'],
  imports: [ChallengeComponent, NgFor]
})
export class ChallengesComponent {
  public challenges = challenges.values();

  ngOnInit() {
    // TODO: check why below only works with timeout
    setTimeout(() => {
      this.challenges = challenges.values();
    });
  }
}
