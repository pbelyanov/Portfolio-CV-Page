import {
    homeView
} from "./views/homeView.js";

export function nav(event) {
    const homeButton = document.getElementById('home');
    const logoButton = document.getElementById('logo-name').getElementsByTagName('a')[0];
    logoButton.addEventListener('click', homeView)
    homeButton.addEventListener('click', homeView)
}