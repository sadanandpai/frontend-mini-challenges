import { getElementFromHtml } from "./utils.js";

export class Item {
  constructor(title) {
    // store all selectable elements inside a single elements object, this.elements = {}
    this.id = Date.now().toString();
    this.title = title;
    this.itemElement = this.createItemHTML(title);
    this.editButton = this.itemElement.querySelector("#edit");
    this.deleteButton = this.itemElement.querySelector("#delete");
    this.itemTitle = this.itemElement.querySelector(".item__title");
    this.editItem();
    this.deleteItem();
  }

  createItemHTML(title) {
    return getElementFromHtml(`<li class="list__item">
      <span class="item__title">${title}</span>
      <button id="edit" data-action="edit">Edit</button>
      <button id="delete" data-action="delete">Delete</button>
    </li>`);
  }

  editItemHTML(title) {
    return getElementFromHtml(`<li class="list__item">
      <input type="text" id="edit-item" value="${title}" />
      <button id="save">Save</button>
      <button id="cancel">Cancel</button>
    </li>`);
  }

  deleteItem() {
    this.deleteButton.addEventListener("click", (e) => {
      if (e.target.dataset.action === "delete") {
        this.itemElement.remove();
      } else if (e.target.dataset.action === "cancel") {
        this.cancelItem();
      }
    });
  }

  editItem() {
    // show edit input with save & cancel CTA & update the DOM
    this.editButton.addEventListener("click", (e) => {
      if (e.target.dataset.action === "edit") {
        this.editItemInput = getElementFromHtml(
          `<input type="text" id="edit-item" value="${this.title}" />`
        );
        this.itemTitle.replaceWith(this.editItemInput);
        this.editButton.textContent = "Save";
        this.editButton.dataset.action = "save";
        this.deleteButton.textContent = "Cancel";
        this.deleteButton.dataset.action = "cancel";
      } else if (e.target.dataset.action === "save") {
        this.saveItem();
      }
    });
  }

  saveItem() {
    const value = this.editItemInput.value;
    this.title = value;
    this.itemTitle.textContent = value;
    this.editItemInput.replaceWith(this.itemTitle);
    this.editButton.textContent = "Edit";
    this.editButton.dataset.action = "edit";
    this.deleteButton.textContent = "Delete";
    this.deleteButton.dataset.action = "delete";
  }

  cancelItem() {
    this.editItemInput.replaceWith(this.itemTitle);
    this.editButton.textContent = "Edit";
    this.editButton.dataset.action = "edit";
    this.deleteButton.textContent = "Delete";
    this.deleteButton.dataset.action = "delete";
  }
}
