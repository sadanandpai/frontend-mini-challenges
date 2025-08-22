import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  input,
  Input,
  output,
  Output,
} from '@angular/core';

import { TodoItem } from '../todo-app/todo-app.component';

@Component({
  selector: 'app-todo-list',
  imports: [],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent {
  public readonly items = input<TodoItem[]>([]);
  public readonly edit = output<TodoItem>();
  public readonly delete = output<number>();
}
