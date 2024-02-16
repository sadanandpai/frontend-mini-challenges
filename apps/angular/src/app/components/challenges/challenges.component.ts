import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { angularChallenges } from '@fmc/data/content';
import { ChallengeComponent } from '../challenge/challenge.component';
import { getSortedChallengesByDifficulty } from '@fmc/data/utils';

@Component({
  standalone: true,
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.scss'],
  imports: [ChallengeComponent, NgFor],
})
export class ChallengesComponent {
  public challenges = getSortedChallengesByDifficulty(angularChallenges);
}
