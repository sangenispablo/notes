// busco en LS si hay notas
let notes = JSON.parse(localStorage.getItem("notes"));

// Si no hay notas a notes=[le meto dos notas] y lo guardo en LS
if (!notes || notes.length === 0) {
  notes = ["Primera Nota", "Segunda Nota"];
  localStorage.setItem("notes", JSON.stringify(notes));
}

// capturo la pizarra de corcho para meterle notas
const pizarra = document.querySelector(".tablero");
notes.forEach((element) => {
  const stickNote = document.createElement("div");
  stickNote.innerHTML = element;
  stickNote.classList.add("note-example");
  pizarra.appendChild(stickNote);
});

// Capturo el textarea y la nota de ejemplo
const noteContent = document.querySelector("#note-text");
const exampleNote = document.querySelector("#note-ejemplo");

noteContent.addEventListener("keyup", (e) => {
  if (e.target.value === "") {
    exampleNote.innerText = "Escriba una nota";
  } else {
    exampleNote.innerText = e.target.value;
  }
});
