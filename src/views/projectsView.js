import {
    navSelect
} from "./navLightUp.js"
import {
    html,
    render
} from 'https://unpkg.com/lit-html?module'
import {
    weatherAPP
} from "../weather_app/weather.js";
import {
    toDoApp
} from "../to_do_app/toDoApp.js";
import {
    calc
} from "../calculator_app/calc.js";

export function projectsView(event) {
    document.body.style.backgroundImage = `url(images/background-projects.png)`
    navSelect('projects');
    const main = document.getElementsByTagName('main')[0];

    const projects = () => html `
    <section id='projectSection'>
        <h1>PROJECTS</h1>
        <div id="mainContainerProjects">
            <div><button id="previous">&lt;</button></div>
            <div id="img-box">
                <div id="img1"><img src="images/weather-app-logo.png"></div>
                <div id="img2"><img src="images/to-do-app.jpg"></div>
                <div id="img3"><img src="images/calc-image.jpg"></div>
            </div>
            <div><button id="next">&gt</button></div>

        </div>
    </section>
    `
    render(projects(), main)

    let i = 0;
    document.getElementsByTagName('img')[i].style.display = 'block'

    const previousButton = document.getElementById('previous');
    const nexButton = document.getElementById('next');

    previousButton.addEventListener('click', previousPicture);
    nexButton.addEventListener('click', nextPicture);

    function previousPicture() {
        document.getElementsByTagName('img')[i].style.display = 'none'

        i--
        if (i < 0) {
            i = 2
        }

        document.getElementsByTagName('img')[i].style.display = 'block'
    }

    function nextPicture() {
        document.getElementsByTagName('img')[i].style.display = 'none'

        i++
        if (i >= 3) {
            i = 0
        }

        document.getElementsByTagName('img')[i].style.display = 'block'
    }

    document.getElementById('img1').addEventListener('click', weatherAPP)
    document.getElementById('img2').addEventListener('click', toDoApp)
    document.getElementById('img3').addEventListener('click', calc)

}