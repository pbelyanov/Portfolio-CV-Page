import {
    aboutMeView
} from "./views/aboutMeView.js";
import {
    homeView
} from "./views/homeView.js";

export function nav(event) {
    const homeButton = document.getElementById('home');
    const logoButton = document.getElementById('logo-name').getElementsByTagName('a')[0];
    const aboutMeButton = document.getElementById('aboutMe');


    aboutMeButton.addEventListener('click', aboutMeView)
    logoButton.addEventListener('click', homeView);
    homeButton.addEventListener('click', homeView);
}