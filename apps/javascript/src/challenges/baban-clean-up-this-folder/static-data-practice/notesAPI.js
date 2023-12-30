const notes = [];

export class NotesAPI {
  constructor() {}
  static getAllNotes() {
    return notes;
  }

  static addNewNote(data) {
    notes.push(data);
    return notes;
  }
}
