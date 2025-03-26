let todoInput = document.getElementById("todo-input");
let todoList = document.getElementById("todo-list");
let todoForm = document.getElementById("todo-form");

let todoAllFilter = document.getElementById("todo-all-filter");
let todoActiveFilter = document.getElementById("todo-active-filter");
let todoCompletedFilter = document.getElementById("todo-completed-filter");

let todos = [];

let filter = "all";

function renderTodos() {
  todoList.innerHTML = "";
  let filteredTodos = todos.filter((todo) => {
    if (filter === "all") {
      return true;
    } else if (filter === "active") {
      return !todo.done;
    } else {
      return todo.done;
    }
  });

  filteredTodos.forEach((todo) => {
    let todoElement = document.createElement("li");
    
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.done;
    checkbox.addEventListener("change", () => {
      todo.done = checkbox.checked;
      renderTodos();
    });
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";  
    deleteButton.addEventListener("click", () => {
      todos = todos.filter((t) => t !== todo);
      renderTodos();
    }); 
    todoElement.appendChild(checkbox);
    todoElement.appendChild(document.createTextNode(todo.value));

    todoElement.appendChild(deleteButton);

    todoList.appendChild(todoElement);
  });
}

function addTodo(e) {
  e.preventDefault();
  let value = todoInput.value;
  todos.push({ value, done: false });
  renderTodos();
}

function init() {
    todoForm.addEventListener("submit", addTodo);
    [todoAllFilter, todoActiveFilter, todoCompletedFilter].forEach((element) => {
      element.addEventListener("click", () => {
        filter = element.id.split("-")[1];
        renderTodos();
      });
    });
}
init();

