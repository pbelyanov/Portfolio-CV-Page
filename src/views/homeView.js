import {
  html,
  render
} from "../../node_modules/lit-html/lit-html.js"
import {
  navSelect
} from "./navLightUp.js";

export function homeView(event) {
  document.body.style.backgroundImage = `url(../images/background.png)`
  console.log('123')
  const main = document.getElementsByTagName('main')[0];
  const homeViewTemplate = () => html `<section id="homePage">

    <h1>Hey! It's Petar Belaynov...</h1>
    <p>
        A beginner web developer with a sales & complaints handling background.
    </p>
    <button id="creator-journey">
    &lt;Check out my journey!&gt;</button>
  </section>`

  render(homeViewTemplate(), main)

  navSelect('home')
}