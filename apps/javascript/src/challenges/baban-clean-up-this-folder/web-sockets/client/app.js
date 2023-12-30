import { Document } from "./Document.js";
import { getElementFromHtml, messageTypes } from "./utils.js";

export class App {
  constructor() {
    this.root = document.querySelector(".main-content");
    this.loginElement = null;
    this.userName = null;
    this.loggedUsers = {};
    this.documentInstance = null;
    this.renderLoginForm();
  }

  renderLoginForm() {
    const loginHtml = `<div class="login">
      <input type="text" id="user-name" />
      <button id="login-button">Join Session</button>
    </div>`;
    const loginElement = getElementFromHtml(loginHtml);
    this.loginElement = loginElement;

    const loginButton = loginElement.querySelector("#login-button");
    loginButton.addEventListener("click", () => {
      this.handleLogin();
    });
    this.root.appendChild(loginElement);
  }

  renderDocument(socket) {
    this.loginElement.remove();
    this.documentInstance = new Document();
    this.documentInstance.handleEditorChange(socket);
  }

  handleSocketConnection() {
    const socket = new WebSocket("ws://localhost:8001");

    socket.addEventListener("open", () => {
      console.log("Client opened a new connection");

      socket.send(
        JSON.stringify({ type: messageTypes.USER_EVENT, data: this.userName })
      );

      this.renderDocument(socket);
    });

    socket.addEventListener("message", ({ data }) => {
      const { type, data: userData } = JSON.parse(data);
      console.log({ type, userData });
      if (type === messageTypes.USER_EVENT) {
        this.loggedUsers = userData;
        this.documentInstance.renderLoggedUsers(this.loggedUsers);
      } else if (type === messageTypes.CONTENT_CHANGE) {
        this.documentInstance.updateEditorContent(userData);
      }
    });
  }

  handleLogin() {
    const userName = document.querySelector("#user-name").value;
    this.userName = userName;
    this.handleSocketConnection();
  }
}

new App();
