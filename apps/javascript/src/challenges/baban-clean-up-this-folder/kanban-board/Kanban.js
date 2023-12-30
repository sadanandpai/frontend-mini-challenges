import { Column } from "./Column.js";

export class Kanban {
  constructor(root) {
    this.root = root;

    Kanban.getColumns().forEach(({ id, title }) => {
      const columnElement = new Column(id, title);

      // optimize with fragment
      this.root.appendChild(columnElement.elements.root);
    });
  }

  static getColumns() {
    return [
      {
        id: 1,
        title: "Not Started",
      },
      {
        id: 2,
        title: "In Progress",
      },
      {
        id: 3,
        title: "Completed",
      },
    ];
  }
}
