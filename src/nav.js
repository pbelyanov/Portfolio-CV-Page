import {
    aboutMeView
} from "./views/aboutMeView.js";
import {
    contacts
} from "./views/contactView.js";
import {
    homeView
} from "./views/homeView.js";
import {
    prevExp
} from "./views/prevExperience.js";
import {
    projectsView
} from "./views/projectsView.js";

export function nav(event) {
    const homeButton = document.getElementById('home');
    const logoButton = document.getElementById('logo-name').getElementsByTagName('a')[0];
    const aboutMeButton = document.getElementById('aboutMe');
    const previousExpButton = document.getElementById('prevExp');
    const projectsButton = document.getElementById('projects');
    const contactButton = document.getElementById('contact');

    previousExpButton.addEventListener('click', prevExp)
    aboutMeButton.addEventListener('click', aboutMeView)
    logoButton.addEventListener('click', homeView);
    homeButton.addEventListener('click', homeView);
    projectsButton.addEventListener('click', projectsView)
    contactButton.addEventListener('click', contacts)
}