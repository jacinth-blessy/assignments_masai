export function displayTodos(data) {
  let container = document.getElementById("todosContainer");
  container.innerHTML = "";

  data.forEach(todo => {
    let div = document.createElement("div");
    div.style.margin = "10px";
    div.style.padding = "10px";
    div.style.border = "1px solid black";

    div.innerHTML = `
      <p><b>ID:</b> ${todo.id}</p>
      <p><b>Title:</b> ${todo.title}</p>
      <p><b>Completed:</b> ${todo.completed}</p>
    `;

    container.appendChild(div);
  });
}
