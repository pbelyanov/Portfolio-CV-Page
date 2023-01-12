import {
    html,
    render
} from 'https://unpkg.com/lit-html?module'

export function toDoView(event) {
    document.body.style.backgroundImage = `url(images/background-weather.png)`
    const main = document.getElementsByTagName('main')[0];
    const toDoRender = () => html `
        <section id="toDoView">
            <h1>To Do APP</h1>
            <div id="mainBoxToDoApp">
                <div id="addTask">
                    <h2>Add Task</h2>
                    <textarea name="text" wrap="soft" rows="14" id="taskToAdd"></textarea>
                    <button id="addTaskButton">ADD</button>
                </div>
                <div id="listOfTasks">
                    <h2>List of Tasks</h2>
                    <div id="boxTasks"></div>
                </div>
            </div>
            <div id="ff-compose"></div>
<script async defer src="https://formfacade.com/include/117953867222123964369/form/1FAIpQLSdZzQN2_98ca9D4IctgfzCJxTzV1yNUPNt72DK3Al_b11ahjw/classic.js?div=ff-compose"></script>
        </section>
    `
    render(toDoRender(), main)
}