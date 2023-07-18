import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Data,
  NavigationEnd,
  Router,
} from '@angular/router';

import { Component } from '@angular/core';
import { challenges } from 'src/app/helpers/challenges';

@Component({
  selector: 'app-challenge-container',
  templateUrl: './challenge-container.component.html',
  styleUrls: ['./challenge-container.component.scss'],
})
export class ChallengeContainerComponent {
  public title = 'Challenge';

  constructor(private router: Router) {}

  ngOnInit() {
    const challengeId = this.router.url.split('/').at(-1);

    if (!challengeId) {
      return;
    }

    const challenge = challenges.get(challengeId);

    if (!challenge) {
      return;
    }

    this.title = challenge.title;
  }
}
