import { DropZone } from "./DropZone.js";
import { KanbanAPI } from "./KanbanAPI.js";

export class Item {
  constructor(columnId, id, content) {
    this.id = id;
    this.columnId = columnId;
    this.elements = {};
    this.elements.root = Item.createRoot();
    this.elements.root.dataset.id = id;
    this.elements.input = this.elements.root.querySelector(".task__item-input");
    this.elements.input.textContent = content;

    const bottomDropZone = new DropZone(columnId);
    this.elements.root.appendChild(bottomDropZone.elements.root);

    this.handleItemEdit();
    this.handleItemDelete();
    this.handleItemDrag();
    this.handleItemDrop();
  }

  static createRoot() {
    const range = document.createRange();

    range.selectNode(document.body);

    return range.createContextualFragment(`
      <li class="task__item" draggable="true">
        <div class="task__item-input" contenteditable></div>
      </li>
    `).children[0];
  }

  handleItemEdit() {
    this.elements.input.addEventListener("blur", (e) => {
      KanbanAPI.updateTask(this.columnId, {
        id: this.id,
        content: e.target.textContent,
      });
    });
  }

  handleItemDelete() {
    this.elements.input.addEventListener("dblclick", (e) => {
      const isDelete = confirm("Are you sure you want to delete this item?");
      if (isDelete) {
        KanbanAPI.deleteTask(this.id, this.columnId);
        this.elements.root.remove();
      }
    });
  }

  handleItemDrag() {
    this.elements.root.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text/plain", this.id);
    });
  }

  handleItemDrop() {
    // prevent input box item id append 
    this.elements.input.addEventListener("drop", (e) => {
      e.preventDefault();
    });
  }
}
