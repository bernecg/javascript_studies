var uListElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

var tasks = JSON.parse(localStorage.getItem("list_todos")) || [];

// var tasks = [
//     "Make some coffee",
//     "Study JavaScript",
//     "Play videogames"
// ]

function renderTodos() {
    uListElement.innerHTML = "";
    tasks.forEach(task => {
        var todoElement = document.createElement("li");

        var linkElement = document.createElement("a");
        linkElement.setAttribute("href", "#")
        linkElement.setAttribute("onclick", "deleteTodo(" + tasks.indexOf(task) + ")");
        linkElement.appendChild(document.createTextNode("Exclude"));

        todoElement.appendChild(document.createTextNode(task));
        todoElement.appendChild(linkElement);

        uListElement.appendChild(todoElement);
    });
}

function addTodo() {
    var newTodo = inputElement.value;
    inputElement.value = "";
    tasks.push(newTodo);
    renderTodos();
    saveToStorage();
}

function deleteTodo(pos) {
    tasks.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage() {
    JSON
    localStorage.setItem("list_todos", JSON.stringify(tasks));
}

renderTodos();

buttonElement.onclick = addTodo;

console.log("Loaded module 03...");
