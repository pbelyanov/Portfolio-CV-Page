import {
    aboutMeView
} from "./views/aboutMeView.js";
import {
    homeView
} from "./views/homeView.js";
import {
    prevExp
} from "./views/prevExperience.js";

export function nav(event) {
    const homeButton = document.getElementById('home');
    const logoButton = document.getElementById('logo-name').getElementsByTagName('a')[0];
    const aboutMeButton = document.getElementById('aboutMe');
    const previousExpButton = document.getElementById('prevExp');

    previousExpButton.addEventListener('click', prevExp)
    aboutMeButton.addEventListener('click', aboutMeView)
    logoButton.addEventListener('click', homeView);
    homeButton.addEventListener('click', homeView);
}