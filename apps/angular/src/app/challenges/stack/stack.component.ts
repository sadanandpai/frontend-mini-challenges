import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-stack',
  imports: [FormsModule],
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StackComponent {
  private cdr = inject(ChangeDetectorRef);

  stack: string[] = [];
  inputVal = '';
  outPut = '';

  push() {
    if (this.inputVal.trim()) {
      this.stack = [...this.stack, this.inputVal];
      this.inputVal = '';
      this.cdr.markForCheck();
    }
  }

  pop() {
    if (this.stack.length > 0) {
      this.stack = this.stack.slice(0, -1);
      this.cdr.markForCheck();
    }
  }

  peek() {
    if (!this.stack.length) {
      this.outPut = 'Stack is empty';
    } else {
      const lastElement = this.stack[this.stack.length - 1];
      this.outPut = `Last element is ${lastElement}`;
    }
    this.cdr.markForCheck();
  }

  isEmpty() {
    if (this.stack.length === 0) {
      this.outPut = 'Stack is empty';
    } else {
      this.outPut = 'Stack is not empty';
    }
    this.cdr.markForCheck();
  }

  isFull() {
    if (this.stack.length === 5) {
      this.outPut = 'Stack is Full';
    } else {
      this.outPut = 'Stack is not Full';
    }
    this.cdr.markForCheck();
  }
}
