import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  isDevMode,
  signal,
} from '@angular/core';
import { REPO_NAME, REPO_URL } from '@fmc/data/content';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  public readonly title = input('Challenge');
  public readonly link = input('');
  public readonly repoURL = signal(REPO_URL);

  public readonly homeURL = isDevMode() ? `http://localhost:6010/${REPO_NAME}/` : `/${REPO_NAME}/`;

  public readonly backURL = isDevMode()
    ? `http://localhost:6010/${REPO_NAME}/#/angular/`
    : `/${REPO_NAME}/#/angular/`;

  public readonly angularSourceCodeBaseURL = `${REPO_URL}/tree/main/apps/angular/src/app/challenges/`;

  public readonly angularSourceCodeURL = computed(
    () => this.angularSourceCodeBaseURL + this.link()
  );
}
