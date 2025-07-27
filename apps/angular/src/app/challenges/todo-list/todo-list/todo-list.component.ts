import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { TodoItem } from '../todo-app/todo-app.component';

@Component({
  selector: 'app-todo-list',
  imports: [],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent {
  @Input() items: TodoItem[] = [];
  @Output() edit = new EventEmitter<TodoItem>();
  @Output() delete = new EventEmitter<number>();
}
