import {
    toDoView
} from "./toDoView.js";

function template(info) {
    let target = document.getElementById('boxTasks');
    const div = document.createElement('div');
    div.setAttribute('class', 'tasks')
    div.innerHTML = `<p>${info}</p> <button>&#x2713;</button>`
    target.appendChild(div);
    div.getElementsByTagName('button')[0].addEventListener('click', completeTask)
}


function addItems(info) {
    for (let row of info) {
        template(row)
    }
}

function completeTask(event) {
    let targetToComplete = event.currentTarget.parentNode.getElementsByTagName('p')[0].innerHTML
    let todos = [];
    const todosJson = localStorage.getItem('tasksToDo');
    todos = JSON.parse(todosJson);
    const index = todos.indexOf(targetToComplete);
    todos.splice(index, 1)
    let jsonToAdd = JSON.stringify(todos);
    localStorage.clear()
    localStorage.setItem('tasksToDo', `${jsonToAdd}`);
    document.getElementById('boxTasks').innerHTML = ''
    addItems(todos);
    if (todos.length < 1) {
        document.getElementById('boxTasks').innerHTML = `<h2>No Tasks</h2>`;
    }
}

export function toDoApp(event) {
    event.preventDefault();
    toDoView();

    let todos = [];
    const todosJson = localStorage.getItem('tasksToDo');

    if (todosJson) {
        todos = JSON.parse(todosJson);
        addItems(todos);
    } else {
        localStorage.setItem('tasksToDo', '[]');
    }

    if (todos.length < 1) {
        document.getElementById('boxTasks').innerHTML = `<h2>No Tasks</h2>`;
    }

    const addButton = document.getElementById('addTaskButton');
    addButton.addEventListener('click', () => {
        let arrayToAdd = [];
        arrayToAdd = JSON.parse(localStorage.getItem('tasksToDo'));
        const tasksToAdd = document.getElementById('taskToAdd').value;
        document.getElementById('taskToAdd').value = ''
        arrayToAdd.push(tasksToAdd);
        let jsonToAdd = JSON.stringify(arrayToAdd);
        localStorage.clear()
        localStorage.setItem('tasksToDo', `${jsonToAdd}`);
        document.getElementById('boxTasks').innerHTML = ''
        addItems(arrayToAdd);
    })
}