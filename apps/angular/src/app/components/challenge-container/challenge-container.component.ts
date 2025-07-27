import { Router, RouterOutlet } from '@angular/router';

import { Component, inject } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  standalone: true,
  selector: 'app-challenge-container',
  templateUrl: './challenge-container.component.html',
  imports: [NavbarComponent, RouterOutlet],
})
export class ChallengeContainerComponent {
  public title = 'Challenge';
  public link = '';

  private router = inject(Router);

  ngOnInit() {
    const challengeId = this.router.url.split('/').at(-1);

    if (!challengeId) {
      return;
    }

    const challenge = new Map([] as any).get(challengeId) as any;

    if (!challenge) {
      return;
    }

    this.title = challenge.title;
    this.link = challenge.link;
  }
}
