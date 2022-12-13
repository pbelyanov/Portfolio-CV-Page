import {
  html,
  render
} from 'https://unpkg.com/lit-html?module'
import {
  navSelect
} from "./navLightUp.js";
import {
  prevExp
} from './prevExperience.js';

export function homeView(event) {


  document.body.style.backgroundImage = `url(images/background.png)`

  const main = document.getElementsByTagName('main')[0];
  const homeViewTemplate = () => html `<section id="homePage">
    <div id="homePageView">
    <h1>Hey! It's Petar Belaynov...</h1>
    <p>
        A beginner web developer with a sales & complaints handling background.
    </p>
    <button id="creator-journey">
    &lt;Check out my journey!&gt;</button>
    </div>
  </section>`

  render(homeViewTemplate(), main)
  const buttonCreator = document.getElementById('creator-journey');
  buttonCreator.addEventListener('click', prevExp)

  navSelect('home')
}