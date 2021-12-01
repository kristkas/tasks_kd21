const form = document.querySelector("form");
const taskImput = document.querySelector("#task");
const tasksList = document.querySelector(".collection");
const delTasksBtn = document.querySelector("#del-tasks");

document.addEventListener("DOMContentLoaded", getTasks)

function getTasks(){
    // get data from LS
    let tasks
    if(localStorage.getItem('tasks') === null){
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }

    // for each task in tasks
    tasks.forEach(function(taskFromLS){
        // create li and add to taskList
        // create element to DOM
        const li = document.createElement('li')
        // add CSS class
        li.className = 'collection-item'
        // add text to element
        const text = document.createTextNode(taskFromLS)
        li.appendChild(text)
        // create link
        const link = document.createElement('a')
        // add css style
        link.className = 'secondary-content'
        // add text to link
        link.appendChild(document.createTextNode('X'))
        // add href attribute
        link.setAttribute('href', '#')
        // add link to li
        li.appendChild(link)
        // add li to taskList
        taskList.appendChild(li)
    })
}

form.addEventListener("submit", addTask);
tasksList.addEventListener("click", deleteTask);
delTasksBtn.addEventListener("click", deleteTasks);


function deleteTasks(){
    // tasksList.innerHTML = "";
    while(tasksList.firstChild){
        tasksList.removeChild(tasksList.firstChild);
    }
    removeAllStorage()
}

function removeAllStorage(){
    localStorage.removeItem("tasks")
}

function delTask(){
    localStorage.removeItem("tasks")
}
function deleteTask(e) {
    if (e.target.textContent == "X"){
        if (confirm("Do you want to delete this task?")){
            e.target.parentElement.remove();
            let task  = e.target.parentElement.textContent.slice(0, -1);
            removeStorage(task);
        }
    }
}


function removeStorage(task){
    let tasks
    if(localStorage.getItem("tasks") == null){
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    tasks.forEach(function (taskFromLS, taskIndex){
        if (taskFromLS == task){
            tasks.splice(taskIndex, 1)
        }
    })
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


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
    // create link element
    const link = document.createElement("a");
    // set href attribute
    link.setAttribute("href", "#")
    // add CSS style
    link.className = "secondary-content";
    // add X text to link
    link.appendChild(document.createTextNode("X"));
    // add link to <li>
    li.appendChild(link);
    // save task to localStorage
    taskStorage(task);
    // find <ul> DOM component
    const ul = document.querySelector(".collection");
    // add <li> to <ul>
    ul.appendChild(li);
    // clear input value
    taskImput.value = "";
    // form submit element control
    e.preventDefault();
}

function taskStorage(task){
    let tasks
    if(localStorage.getItem("tasks") == null){
        tasks = []
    } else {
       tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    tasks.push(task)
    localStorage.setItem("tasks", JSON.stringify(tasks));
}