import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  imports: [ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent {
  private defaultStep = 1;
  private step = 1;
  public counter = 0;
  public inputControl = new FormControl<number>(this.step);

  ngOnInit() {
    this.inputControl.valueChanges.subscribe(this.onValueChange);
  }

  onBlur = (value: number | string | null) => {
    if (value === null) {
      this.inputControl.setValue(this.defaultStep);
    }
  };

  onValueChange = (value: number | string | null) => {
    if (value === null) {
      return;
    }

    const numValue = Number(value);

    if (numValue < 1 || numValue > 10) {
      this.step = this.defaultStep;
    } else if (isNaN(numValue)) {
      this.step = this.defaultStep;
    } else {
      this.step = numValue;
    }

    if (this.inputControl.value !== this.step) {
      this.inputControl.setValue(this.step);
    }
  };

  increment() {
    this.counter += this.step;
  }

  decrement() {
    this.counter -= this.step;
  }

  reset() {
    this.counter = 0;
  }
}
