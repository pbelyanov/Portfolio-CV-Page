import {
  html,
  render
} from "../../node_modules/lit-html/lit-html.js"

export function homeView(event) {
  const main = document.getElementsByTagName('main')[0];
  const homeViewTemplate = () => html `<section id="homePage">
    <h1>HEY, I'M PETAR BELYANOV</h1>
    <p>
        A beginner web developer with a sales & complaints handling background, that is looking for his small break in the programing world.
    </p>
    <button id="creator-journey">
    My Journey</button>
  </section>`

  render(homeViewTemplate(), main)
}