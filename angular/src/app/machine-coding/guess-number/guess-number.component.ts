import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

function getRandomNumber() {
  return Math.round(100 * Math.random());
}

@Component({
  selector: 'app-guess-number',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './guess-number.component.html',
  styleUrls: ['./guess-number.component.scss']
})
export class GuessNumberComponent {
  public l1 = getRandomNumber();
  public disable = false;
  public num = 1;
  public low = false;
  public high = false;
  public hi = false;

  check() {
    if (this.num < this.l1) {
      this.low = true;
      this.high = false;
    } else if (this.num > this.l1) {
      this.low = false;
      this.high = true;
    } else {
      this.hi = true;
      this.low = false;
      this.high = false;
      this.disable = true;
    }
  };

  restart() {
    this.l1 = getRandomNumber();
    this.hi = false;
    this.low = false;
    this.high = false;
    this.disable = false;
    this.num = 1;
  };
}
