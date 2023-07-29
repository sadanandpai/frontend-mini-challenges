import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-stack',
  standalone: true,
  imports: [
    FormsModule,
    NgFor,
  ],
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss']
})
export class StackComponent {

  stack: string[] = [];
  inputVal = '';
  outPut = '';

  push() {
    this.stack = [...this.stack, this.inputVal];
    this.inputVal = '';
  };

  pop() {
    this.stack = this.stack.slice(0, -1);
  };

  peek() {
    if (!this.stack.length) {
      this.outPut = 'Stack is empty'
    }
    else {
      const lastElement = this.stack[this.stack.length - 1];
      this.outPut = `Last element is ${lastElement}`
    }
  };

  isEmpty() {
    if (this.stack.length === 0) {
      this.outPut = 'Stack is empty'
    } else {
      this.outPut = 'Stack is not empty'
    }
  };

  isFull() {
    if (this.stack.length === 5) {
      this.outPut = 'Stack is Full'
    } else {
      this.outPut = 'Stack is not Full'
    }
  }

}
