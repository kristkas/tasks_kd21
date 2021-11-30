const form = document.querySelector("form");
const taskImput = document.querySelector("#task");

form.addEventListener("submit", addTask)

function addTask(e) {
    // input value
    const task = taskImput.value;
    //create <li> element
    const li = document.createElement("li");
    // define <li> element
    li.className = "collection-item";
    // create text value for <li>
    const text = document.createTextNode(task);
    // add text value to <li>
    li.appendChild(text);
    // find <ul> DOM component
    const ul = document.querySelector(".collection");
    // add <li> to <ul>
    ul.appendChild(li);
    // clear input value
    taskImput.value = "";
    // form submit element control
    e.preventDefault();
}