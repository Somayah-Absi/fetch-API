const container = document.querySelector(".container");
const counter = document.querySelector(".total");
let todoData = [];

const todoCard = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    if (!response.ok) {
      throw "something wrong";
    }
    todoData = await response.json();

    renderTodos();
  } catch (error) {
    console.log(error);
  }
};

const renderTodos = () => {
  container.innerHTML = ""; // Clear the container

  todoData.forEach((todo, index) => {
    const todoId = document.createElement("div");
    todoId.classList.add("todo-id");
    todoId.textContent = todo.id;

    const todoItem = document.createElement("span");
    todoItem.classList.add("todo-item");
    todoItem.textContent = todo.title;

    const editButton = document.createElement("button");
    editButton.classList.add("edit-btn");
    editButton.innerHTML = `<i class="fa-solid fa-pencil" style="color: #0f131a;"></i>`;
    editButton.addEventListener("click", () => edit(todoItem));

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.innerHTML = `<i class="fa-solid fa-trash" style="color: #121821;"></i>`;
    deleteButton.addEventListener("click", () => deleteTodoItem(index));

    todoId.append(todoItem);
    todoId.append(editButton);
    todoId.append(deleteButton);

    container.appendChild(todoId);
    counter.textContent = `Total tasks is : ${todoData.length}`;
  });
};

const edit = (todoItem) => {
  const newText = prompt("Enter new todo text:", todoItem.textContent);
  if (newText !== null) {
    todoItem.textContent = newText;
  }
};

const deleteTodoItem = (index) => {
  todoData.splice(index, 1);
  renderTodos();
};

todoCard();
