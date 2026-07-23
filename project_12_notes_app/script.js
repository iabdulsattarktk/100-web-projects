// ============ DOM ELEMENT SELECTION ============

const searchInput = document.querySelector("#searchInput");
const noteTitle = document.querySelector("#noteTitle");
const noteBody = document.querySelector("#noteBody");
const charCounter = document.querySelector("#charCounter");
const colorDots = document.querySelectorAll(".color-dot");
const addNoteBtn = document.querySelector("#addNoteBtn");
const notesGrid = document.querySelector("#notesGrid");
const emptyState = document.querySelector("#emptyState");

// ============ STATE VARIABLES ============

let selectedColor = "yellow";
let editingNoteId = null;
let notes = JSON.parse(localStorage.getItem("notes")) || [];

// ============ CHARACTER COUNTER ============

noteBody.addEventListener("input", () => {
  const currentLength = noteBody.value.length;
  charCounter.textContent = `${currentLength} / 500`;

  if (currentLength > 500) {
    charCounter.style.color = "red";
  } else {
    charCounter.style.color = "#888";
  }
});

// ============ COLOR PICKER SELECTION ============

colorDots.forEach((dot) => {
  dot.addEventListener("click", () => {
    colorDots.forEach((d) => {
      d.style.border = "2px solid transparent";
    });

    dot.style.border = "2px solid #333";
    selectedColor = dot.dataset.color;
  });
});

// ============ SAVE TO LOCALSTORAGE (Helper Function) ============

function saveNotes() {
  localStorage.setItem("notes", JSON.stringify(notes));
}

// ============ ADD / UPDATE NOTE FUNCTION ============

function addNote() {
  const title = noteTitle.value.trim();
  const body = noteBody.value.trim();

  if (title === "" || body === "") {
    alert("Please fill both title and note body.");
    return;
  }

  if (editingNoteId !== null) {
    const noteIndex = notes.findIndex((note) => note.id === editingNoteId);

    notes[noteIndex] = {
      id: editingNoteId,
      title: title,
      body: body,
      color: selectedColor,
      date: notes[noteIndex].date,
    };

    editingNoteId = null;
    addNoteBtn.textContent = "Add Note";
  } else {
    const newNote = {
      id: Date.now(),
      title: title,
      body: body,
      color: selectedColor,
      date: new Date().toLocaleDateString(),
    };

    notes.push(newNote);
  }

  saveNotes();
  renderNotes();

  noteTitle.value = "";
  noteBody.value = "";
  charCounter.textContent = "0 / 500";
}

// ============ ADD BUTTON EVENT LISTENER ============

addNoteBtn.addEventListener("click", addNote);

// ============ RENDER NOTES FUNCTION ============

function renderNotes() {
  notesGrid.innerHTML = "";

  if (notes.length === 0) {
    emptyState.style.display = "block";
    notesGrid.appendChild(emptyState);
    return;
  }

  emptyState.style.display = "none";

  notes.forEach((note) => {
    const noteCard = document.createElement("div");
    noteCard.classList.add("note-card");
    noteCard.style.backgroundColor = getColorValue(note.color);

    noteCard.innerHTML = `
      <h3 class="note-title">${note.title}</h3>
      <p class="note-body">${note.body}</p>
      <p class="note-date">${note.date}</p>
      <div class="note-actions">
        <button class="edit-btn" data-id="${note.id}">Edit</button>
        <button class="delete-btn" data-id="${note.id}">Delete</button>
      </div>
    `;

    notesGrid.appendChild(noteCard);
  });
}

// ============ COLOR NAME TO HEX HELPER ============

function getColorValue(colorName) {
  const colorMap = {
    yellow: "#fff59d",
    pink: "#f8bbd0",
    blue: "#bbdefb",
    green: "#c8e6c9",
    purple: "#e1bee7",
  };

  return colorMap[colorName];
}

// ============ DELETE & EDIT (EVENT DELEGATION) ============

notesGrid.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-btn")) {
    const noteId = Number(event.target.dataset.id);
    notes = notes.filter((note) => note.id !== noteId);
    saveNotes();
    renderNotes();
  } else if (event.target.classList.contains("edit-btn")) {
    const noteId = Number(event.target.dataset.id);
    const noteToEdit = notes.find((note) => note.id === noteId);

    noteTitle.value = noteToEdit.title;
    noteBody.value = noteToEdit.body;
    charCounter.textContent = `${noteToEdit.body.length} / 500`;
    selectedColor = noteToEdit.color;

    colorDots.forEach((dot) => {
      dot.style.border =
        dot.dataset.color === noteToEdit.color
          ? "2px solid #333"
          : "2px solid transparent";
    });

    editingNoteId = noteId;
    addNoteBtn.textContent = "Update Note";
  }
});

// ============ INITIAL RENDER (Page Load Par) ============

renderNotes();
