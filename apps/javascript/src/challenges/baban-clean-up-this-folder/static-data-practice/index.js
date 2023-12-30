import { NotesAPI } from "./notesAPI.js";

export class App {
  constructor() {
    this.addButton = document.querySelector("#action");
    this.notesContainer = document.querySelector("#notes-container");
    this.textArea = document.querySelector("#input");
    this.notes = NotesAPI.getAllNotes();
    this.handleClick();
    this.renderNotes();
  }

  createNewNote() {
    const val = this.textArea.value;
    NotesAPI.addNewNote(val);
    const note = document.createElement("div");
    note.textContent = val;
    this.notesContainer.appendChild(note);
    this.textArea.value = "";
  }

  handleClick() {
    this.addButton.addEventListener("click", () => this.createNewNote());
  }

  renderNotes() {
    NotesAPI.getAllNotes().forEach((val) => {
      const note = document.createElement("div");
      note.textContent = val;
      this.notesContainer.appendChild(note);
    });
  }
}

new App();
