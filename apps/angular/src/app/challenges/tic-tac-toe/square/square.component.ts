import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrl: './square.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SquareComponent {
  public readonly value = input.required<'X' | 'O' | number | null | undefined>();
  public readonly iTh = input.required<number>();
  public readonly disabled = input(false);

  public readonly action = output();
}
