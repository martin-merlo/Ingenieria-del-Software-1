const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const text = input.value;

  if (text !== "") {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = text;

    li.appendChild(p);
    // Agregamos el botón de editar antes del de eliminar
    li.appendChild(addEditBtn()); 
    li.appendChild(addDeleteBtn());
    ul.appendChild(li);

    input.value = "";
    empty.style.display = "none";
  }
});

// Lógica de Modificación (Update)
function addEditBtn() {
  const editBtn = document.createElement("button");
  editBtn.textContent = "✎"; // Icono para editar
  editBtn.className = "btn-edit";

  editBtn.addEventListener("click", (e) => {
    const li = e.target.parentElement;
    const p = li.querySelector("p");

    // Si existe el <p>, estamos en modo vista y pasamos a modo edición
    if (p) {
      const editInput = document.createElement("input");
      editInput.type = "text";
      editInput.value = p.textContent;
      editInput.className = "edit-input";

      // Reemplazamos el párrafo por el input
      li.replaceChild(editInput, p);
      editBtn.textContent = "✔"; // Cambiamos el icono a guardar
      editBtn.classList.add("btn-save");
    } else {
      // Si no hay <p>, es porque hay un <input> y queremos guardar los cambios
      const editInput = li.querySelector(".edit-input");
      const newP = document.createElement("p");
      newP.textContent = editInput.value;

      // Reemplazamos el input por el nuevo párrafo actualizado
      li.replaceChild(newP, editInput);
      editBtn.textContent = "✎"; // Volvemos al icono original
      editBtn.classList.remove("btn-save");
    }
  });

  return editBtn;
}

function addDeleteBtn() {
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.className = "btn-delete";

  deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    ul.removeChild(item);

    const items = document.querySelectorAll("li");

    if (items.length === 0) {
      empty.style.display = "block";
    }
  });

  return deleteBtn;
}