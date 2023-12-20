import { Component } from '@angular/core';
import { angularChallenges } from '@fmc/data/content';
import { ChallengeComponent } from '../challenge/challenge.component';
import { NgFor } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.scss'],
  imports: [ChallengeComponent, NgFor],
})
export class ChallengesComponent {
  public challenges = angularChallenges.values();

  ngOnInit() {
    // TODO: check why below only works with timeout
    setTimeout(() => {
      this.challenges = angularChallenges.values();
    });
  }
}
