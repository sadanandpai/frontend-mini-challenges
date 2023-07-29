import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [
    FormsModule,
    ListComponent,
  ],
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemComponent {

  editInfo!: any;
  value = '';
  items: any[] = [];

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
    const item = newItems.find((item) => item.id === this.editInfo.id);
    item.value = value;
    this.items = newItems;
    this.editInfo = null;
  };
}
