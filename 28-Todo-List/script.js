/* Selectors */
const todoInput = query(".todo-input");
const todoButton = query(".todo-button");
const todoList = query(".todo-list");
const filterOption = query(".filter-todo");
/* Functions */
//shorten selector
function query(selector) {
  return document.querySelector(selector);
}
function addTodo(e) {
  e.preventDefault();
  // to do list add and completed button
  function todoButtons(btn, icon) {
    const button = document.createElement("button");
    button.innerHTML = `<i class="fas fa-${icon}"></i>`;
    button.classList.add(`${btn}-btn`);
    todoDiv.appendChild(button);
  }
  //creating todo division - adding lines
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //adding list to the division
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  //add to local storage
  saveLocalTodos(todoInput.value);
  //add buttons todoButtons(button,icon)
  todoButtons("complete", "check");
  todoButtons("trash", "trash");
  //append all
  todoList.appendChild(todoDiv);
  //clear Input
  todoInput.value = "";
}
//Delete list item
function deleteCheck(e) {
  const item = e.target;
  const todoItem = item.parentElement;
  if (item.classList[0] === "trash-btn") {
    todoItem.classList.add("fall");
    todoItem.addEventListener("transitionend", () => todoItem.remove());
  } else if (item.classList[0] === "complete-btn") {
    todoItem.classList.toggle("completed");
  }
}
//filter function
function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach((todo) => {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}
/* FUture project function */
//save to local storage and use
function saveLocalTodos(todo) {
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}
/* Event listeners */
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

//on load
//saveLocalTodos();
