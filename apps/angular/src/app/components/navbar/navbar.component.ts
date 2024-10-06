import { Component, Input, isDevMode } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [RouterLink],
})
export class NavbarComponent {
  @Input() title = 'Challenge';
  @Input() link!: string;

  public homeURL = isDevMode()
    ? 'http://localhost:6010/frontend-mini-challenges/'
    : '/frontend-mini-challenges/';

  public backURL = isDevMode()
    ? 'http://localhost:6010/frontend-mini-challenges/#/angular/'
    : '/frontend-mini-challenges/#/angular/';

  public angularSourceCodeBaseURL =
    'https://github.com/sadanandpai/frontend-mini-challenges/tree/main/apps/angular/src/app/challenges/';

  public angularSourceCodeURL!: string;

  ngOnInit() {
    this.angularSourceCodeURL = this.angularSourceCodeBaseURL + this.link;
  }
}
