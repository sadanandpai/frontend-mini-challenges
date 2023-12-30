import { DropZone } from "./DropZone.js";
import { Item } from "./Item.js";
import { KanbanAPI } from "./KanbanAPI.js";

export class Column {
  constructor(id, title) {
    this.id = id;
    this.elements = {};
    this.elements.root = Column.createRoot();
    this.elements.title = this.elements.root.querySelector(
      ".task__column-heading"
    );
    this.elements.items = this.elements.root.querySelector(
      ".task__column-items"
    );
    this.elements.addItem = this.elements.root.querySelector(
      ".task__column-add-item"
    );
    const topDropZone = new DropZone(id);
    this.elements.items.appendChild(topDropZone.elements.root);
    this.elements.root.dataset.id = id;
    this.elements.title.textContent = title;

    this.renderItem(id);
    this.handleAddItem();
  }

  static createRoot() {
    const range = document.createRange();

    // do deep dive in range & it's properties
    range.selectNode(document.body);

    return range.createContextualFragment(`
      <article class="task__column">
        <h2 class="task__column-heading"></h2>
        <ul class="task__column-items"></ul>
        <button class="task__column-add-item">Add</button>
      </article>
    `).children[0];
  }

  renderItem(columnId) {
    KanbanAPI.getTasks(columnId).forEach(({ id, content }) => {
      const itemElement = new Item(columnId, id, content);

      // optimize using fragment
      this.elements.items.appendChild(itemElement.elements.root);
    });
  }

  handleAddItem() {
    this.elements.addItem.addEventListener("click", () => {
      const newItem = KanbanAPI.insertTask(this.id, "");
      const itemElement = new Item(this.id, newItem.id, "");
      this.elements.items.appendChild(itemElement.elements.root);
    });
  }
}
