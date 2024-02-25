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

  public homeURL = isDevMode()
    ? 'http://localhost:6010/frontend-mini-challenges/'
    : '/frontend-mini-challenges/';

  public backURL = isDevMode()
    ? 'http://localhost:6010/frontend-mini-challenges/#/angular/'
    : '/frontend-mini-challenges/#/angular/';
}
