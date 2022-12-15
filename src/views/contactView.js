import {
    navSelect
} from "./navLightUp.js"
import {
    html,
    render
} from 'https://unpkg.com/lit-html?module'

export function contacts(event) {
    event.preventDefault();
    document.body.style.backgroundImage = `url(images/background-aboutMe.png)`
    navSelect('contact');
    const main = document.getElementsByTagName('main')[0];

    const contactView = () => html `
    <section id="contactSection">
        <h1>Contacts</h1>
        <div id="contactContainer">
            <ul>
                <li>Phone : +359 884868950</li>
                <li>Email : p.belyanov@yahoo.com</li>
                <li>LinkedIn : <a href="https://www.linkedin.com/in/petar-belyanov/" target="_blank" rel="noreferrer noopener">&lt;https://www.linkedin.com/in/petar-belyanov&gt;</a></li>
                <li>GitHub : <a href="https://github.com/pbelyanov" target="_blank" rel="noreferrer noopener">&lt;https://github.com/pbelyanov&gt;</a></li>
            </ul>
        </div>
    </section>
    `

    render(contactView(), main)

}