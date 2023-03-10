class Note {
  constructor(id, title, date, description) {
    this.id = id;
    this.title = title;
    this.date = date;
    this.description = description;
  }
}

const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
};

export const formatDate = (when) => {
  const formatted = new Date(when).toLocaleString("en-US", options);
  if (formatted === "Invalid Date") {
    return "";
  }
  return formatted;
};

export const createNewNote = () => {
  const notes = localStorage.getItem("notes")
    ? JSON.parse(localStorage.getItem("notes"))
    : null;
  let noteId = null;
  if (notes != null && notes.length >= 1) {
    noteId = Number(notes[notes.length - 1].id) + 1;
  } else noteId = 1;

  let newNote = new Note(
    noteId,
    "Untitled",
    new Date().toISOString().slice(0, 16),
    ""
  );
  return newNote;
};

export const editNote = (noteId) => {
  let n = false;
  const notes = localStorage.getItem("notes")
    ? JSON.parse(localStorage.getItem("notes"))
    : [];
  if (notes !== []) {
    notes.forEach((note) => {
      if (note.id === noteId) n = note;
    });
  }
  if (n) return n;
  return createNewNote();
};

export const getAllNotes = () => {
  const notes = localStorage.getItem("notes")
    ? JSON.parse(localStorage.getItem("notes"))
    : [];
  return notes.reverse();
};

export const saveNote = (note) => {
  let notes = localStorage.getItem("notes")
    ? JSON.parse(localStorage.getItem("notes"))
    : [];
  let isUpdated = false;
  if (notes != []) {
    notes.forEach((n) => {
      if (n.id == note.id) {
        n.title = note.title;
        n.date = note.date;
        n.description = note.description;

        localStorage.setItem("notes", JSON.stringify(notes));
        isUpdated = true;
        return;
      }
    });
  }

  if (!isUpdated) {
    const newNote = new Note(note.id, note.title, note.date, note.description);
    notes.push(newNote);
    localStorage.setItem("notes", JSON.stringify(notes));
  }
};

export const getNoteWithId = (noteId) => {
  let note = false;
  const notes = localStorage.getItem("notes")
    ? JSON.parse(localStorage.getItem("notes"))
    : false;
  if (notes) {
    notes.forEach((n) => {
      if (n.id == noteId) {
        note = n;
        return;
      }
    });
  }
  return note;
};

export const deleteNote = (noteId) => {
  const notes = localStorage.getItem("notes")
    ? JSON.parse(localStorage.getItem("notes"))
    : [];
  if (notes !== []) {
    let n = notes.filter((note) => note.id != noteId);
    localStorage.setItem("notes", JSON.stringify(n));
    if (n.length >= 1) return n[n.length - 1].id;
  }
  return NaN;
};
