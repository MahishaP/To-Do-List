const inputBox = document.getElementById('inputBox');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

let editTodo = null;

// Create a new to-do element
function createTodoElement(text) {
    let li = document.createElement("li");

    // Add the todo text
    let p = document.createElement("p");
    p.textContent = text;
    li.appendChild(p);

    // Add Edit button
    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("btn", "editBtn");
    li.appendChild(editBtn);

    // Add Remove button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Remove";
    deleteBtn.classList.add("btn", "deleteBtn");
    li.appendChild(deleteBtn);
    return li;
}

// Add or edit a to-do
function addOrEditTodo() {
    let inputText = inputBox.value.trim();

    if (!inputText) {
        alert("You must write something in your to-do");
        return;
    }
    if (addBtn.value === "Edit") {
        // Edit the existing to-do
        let todoTextElement = editTodo.target.previousElementSibling;
        todoTextElement.textContent = inputText;
        resetInput();
    } else {
        // Add a new to-do
        let newTodo = createTodoElement(inputText);
        todoList.appendChild(newTodo);
        resetInput();
    }
}

// Handle editing or deleting a to-do
function updateTodo(e) {
    let action = e.target.textContent;

    if (action === "Remove") {
        let todoItem = e.target.parentElement;
        todoList.removeChild(todoItem);
    }
    if (action === "Edit") {
        inputBox.value = e.target.previousElementSibling.textContent;
        addBtn.value = "Edit";
        inputBox.focus();
        editTodo = e;
    }
}

// Reset the input field and button state
function resetInput() {
    inputBox.value = "";
    addBtn.value = "Add";
    editTodo = null;
}

// Event listeners
addBtn.addEventListener('click', addOrEditTodo);
todoList.addEventListener('click', updateTodo);

