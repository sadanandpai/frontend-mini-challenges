import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [
    NgStyle,
  ],
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {

  @Input() value!: 'X' | 'O' | number | null | undefined;
  @Input() iTh!: number;

  @Output() action = new EventEmitter();

}
