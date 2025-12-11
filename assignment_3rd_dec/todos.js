import { navbar } from "./navbar.js";
import { footer } from "./footer.js";
import { displayTodos } from "./displaytodos.js";

document.getElementById("navbar").innerHTML = navbar();
document.getElementById("footer").innerHTML = footer();

// Check Login
let logged = localStorage.getItem("loggedIn");
if (logged !== "true") {
  alert("Please login first");
  window.location.href = "login.html";
}

// Fetch Todos
async function getTodos() {
  let res = await fetch("https://jsonplaceholder.typicode.com/todos");
  let data = await res.json();

  displayTodos(data);
}

getTodos();
