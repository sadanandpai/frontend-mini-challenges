import { KanbanAPI } from "./KanbanAPI.js";

export class DropZone {
  constructor(columnId) {
    this.columnId = columnId;
    this.elements = {};
    this.elements.root = DropZone.createRoot();

    this.handleDrop();
    this.handleDrag();
  }

  static createRoot() {
    const range = document.createRange();

    range.selectNode(document.body);

    return range.createContextualFragment(`
      <div class="task__dropzone" draggable="true"></div>
    `).children[0];
  }

  handleDrop() {
    this.elements.root.addEventListener("drop", (e) => {
      e.preventDefault();
      this.elements.root.classList.remove("task__dropzone--active");

      const columnElement = document.querySelector(
        `article[data-id="${this.columnId}"]`
      );
      const dropZonesInColumn =
        columnElement.querySelectorAll(".task__dropzone");
      const dropZoneIndex = Array.from(dropZonesInColumn).indexOf(
        this.elements.root
      );
      const itemId = e.dataTransfer.getData("text/plain");
      const itemElement = document.querySelector(`li[data-id="${itemId}"]`);
      // cannot be dropped in item's own drop zone but can be dropped in other ones
      if (itemElement.contains(this.elements.root)) {
        return;
      }
      let parentNodeToInsertAfter = this.elements.root;
      if (this.elements.root.parentElement?.classList.contains("task__item")) {
        parentNodeToInsertAfter = parentNodeToInsertAfter.parentElement;
      }
      parentNodeToInsertAfter.after(itemElement);

      KanbanAPI.updateTaskPosition(this.columnId, itemId, dropZoneIndex);
    });
  }

  handleDrag() {
    this.elements.root.addEventListener("dragover", (e) => {
      e.preventDefault();
      this.elements.root.classList.add("task__dropzone--active");
    });
    this.elements.root.addEventListener("dragleave", (e) => {
      e.preventDefault();
      this.elements.root.classList.remove("task__dropzone--active");
    });
  }
}
