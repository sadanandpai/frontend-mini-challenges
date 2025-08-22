import { ChangeDetectionStrategy, Component, EventEmitter, input, Output } from '@angular/core';

import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-square',
  imports: [NgStyle],
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SquareComponent {
  public readonly value = input.required<'X' | 'O' | number | null | undefined>();
  public readonly iTh = input.required<number>();
  public readonly disabled = input(false);

  @Output() action = new EventEmitter();
}
