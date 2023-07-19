import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule]
})
export class CounterComponent {
  private step = 1;
  public counter = 0;
  public inputControl = new FormControl<number>(this.step);

  ngOnInit() {
    this.inputControl.valueChanges.subscribe(this.onValueChange);
  }

  onValueChange = (value: number | null) => {
    if (!value || value < 1) {
      this.step = 1;
    } else {
      this.step = value;
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
