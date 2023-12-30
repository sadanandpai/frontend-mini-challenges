import { getElementFromHtml, messageTypes } from "./utils.js";

export class Document {
  constructor() {
    this.root = document.querySelector(".main-content");
    this.editorElement = null;
    this.userElement = null;
    this.renderEditor();
  }

  renderLoggedUsers(loggedUsers) {
    this.userElement?.remove();
    let userHTML = ``;
    Object.values(loggedUsers).forEach(({ userName }) => {
      userHTML += `<span class="user__item">${userName}</span>`;
    });
    const usersHtml = `<div class="user__container">${userHTML}</div>`;
    const userElement = getElementFromHtml(usersHtml);
    this.userElement = userElement;
    this.root.insertBefore(userElement, this.editorElement);
  }

  renderEditor() {
    const editorHtml = `<textarea class="editor"></textarea>`;
    const editorElement = getElementFromHtml(editorHtml);
    this.editorElement = editorElement;
    this.root.appendChild(editorElement);
  }

  updateEditorContent(textValue) {
    this.editorElement.value = textValue;
  }

  handleEditorChange = (socketInstance) => {
    this.editorElement.addEventListener("input", (e) => {
      socketInstance.send(
        JSON.stringify({ type: messageTypes.CONTENT_CHANGE, data: e.target.value })
      );
    })
  }
}
