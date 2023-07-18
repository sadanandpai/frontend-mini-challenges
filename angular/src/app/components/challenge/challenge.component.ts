import { Component, Input } from '@angular/core';

import { Challenge } from 'src/app/types/interfaces/challenge.intf';
import { contributors } from 'src/app/helpers/contributors';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.scss'],
})
export class ChallengeComponent {
  @Input() challenge!: Challenge;
  public contributors = contributors;
}
