import { Component, Input, isDevMode } from '@angular/core';
import { REPO_NAME, REPO_URL } from '@fmc/data/content';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [RouterLink],
})
export class NavbarComponent {
  @Input() title = 'Challenge';
  @Input() link!: string;
  repoURL = REPO_URL;

  public homeURL = isDevMode() ? `http://localhost:6010/${REPO_NAME}/` : `/${REPO_NAME}/`;

  public backURL = isDevMode()
    ? `http://localhost:6010/${REPO_NAME}/#/angular/`
    : `/${REPO_NAME}/#/angular/`;

  public angularSourceCodeBaseURL = `${REPO_URL}/tree/main/apps/angular/src/app/challenges/`;

  public angularSourceCodeURL!: string;

  ngOnInit() {
    this.angularSourceCodeURL = this.angularSourceCodeBaseURL + this.link;
  }
}
