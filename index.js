const container = document.querySelector(".container");
const todoCard = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    if (!response.ok) {
      throw "something wrong";
    }
    const data = await response.json();

    data.forEach((todo) => {
      const todoId = document.createElement("div");
      todoId.classList.add("todo-id");
      todoId.textContent = todo.id;
      const todoItem = document.createElement("id");
      todoItem.classList.add("todo-item");
      todoItem.textContent = todo.title;

      todoId.append(todoItem);
      container.appendChild(todoId);
    });
  } catch (error) {
    console.log(error);
  }
};

todoCard();
