import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from '../todo-list/todo-list.component';

export interface TodoItem {
  id: number;
  value: string;
}

@Component({
  selector: 'app-todo-app',
  standalone: true,
  imports: [
    FormsModule,
    TodoListComponent,
  ],
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoAppComponent {

  editInfo: TodoItem | null | undefined;
  value = '';
  items: TodoItem[] = [];

  edit({ id, value }: any): void {
    this.value = value;
    this.editInfo = ({ id, value });
  }

  delete(idx: number) {
    if (this.editInfo?.id === this.items[idx].id) {
      this.value = '';
      this.editInfo = null;
    }
    this.items = this.items.filter((_, i) => i !== idx);
  }

  cancel() {
    this.value = '';
    this.editInfo = null;
  }

  submit() {
    if (this.editInfo) {
      this.updateItem(this.value);
    } else {
      this.addItem(this.value);
    }
    this.value = '';
  }

  addItem(value: string) {
    this.items = this.items.concat({ value, id: new Date().getTime() });
  }

  updateItem(value: string) {
    const newItems = [...this.items];
    const item = newItems.find((item) => item.id === this.editInfo?.id);
    if (item) {
      item.value = value;
    }
    this.items = newItems;
    this.editInfo = null;
  };
}
