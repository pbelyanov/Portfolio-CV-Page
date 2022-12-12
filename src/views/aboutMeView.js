import {
  navSelect
} from "./navLightUp.js"
import {
  html,
  render
} from "../../node_modules/lit-html/lit-html.js"
export function aboutMeView(event) {
  document.body.style.backgroundImage = `url(../images/background-aboutMe.png)`
  navSelect('aboutMe');
  const main = document.getElementsByTagName('main')[0];

  const aboutMe = () => html `<section id="aboutMeSection">
    <h1>About Me</h1>
    <div id='mainContainer'>
      <div id="info">
      <p>
      I am a Junior Software Engineer with strong interest in web development that has a proven ability to learn swiftly and improve his skillset on a daily basis.</p>
    <p>This quality has allowed me to succeed in different environments and achieve excellent results within set deadlines and most importantly become a vital asset of the teams that I participated in.
      </p>
      </div>
      <div id="skills">
      <div>JavaScript</div>
      <div>HTML</div>
      <div>CSS</div>
      <div>REST</div>
      <div>JIRA</div>
      <div>SPA</div>
      </div>
    </div>
  </section>`

  render(aboutMe(), main)
}