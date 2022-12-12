import {
    navSelect
} from "./navLightUp.js"
import {
    html,
    render
} from 'https://unpkg.com/lit-html?module'

export function prevExp() {
    document.body.style.backgroundImage = `url(images/background-aboutMe.png)`;
    navSelect('prevExp');
    const main = document.getElementsByTagName('main')[0];

    const previousExperience = () => html `
    <section id="prevExperience">
        <div id="mainFrame">
            <div id="education">
                <h1>Education</h1>
                <div><h4>07/12/2022</h4><p>Acquired JS Applications <a href="https://softuni.bg/certificates/details/149951/69cc6465">&lt;certificate&gt;</a> with 6.00/6.00. 
                </p></div>
                <div><h4>27/10/2022</h4><p>Acquired JS Advanced <a href="https://softuni.bg/Certificates/Details/145556/507df4a6">&lt;certificate&gt;</a> with 6.00/6.00. 
                </p></div>
                <div><h4>30/08/2021</h4><p>Acquired EFSET/CEFR english <a href="https://www.efset.org/cert/Fz2SYT">&lt;certificate&gt;</a> with level C2. 
                </p></div>
                <div><h4>2019-Present</h4><p>Studying Finance and Business at University of National and World Economy.</p></div>
            </div>
            <div id="professional">
            <h1>Professional Experience</h1>
            <div><h4>10/2021 - Present</h4><h4>Complaints Handling Officer at Crypto.com</h4><p>Takes ownership and accountability in projects, related to the evolution of the complaints-related processes, reporting and other tools;Thoroughly considers any (potential) service-related complaints, escalated via the supported communication channels and handles it according to Company’s internal complaints handling process;</p></div>
            <div><h4>10/2020 - 08/2021</h4><h4>Retention Specialist</h4><p>Retaining the current customers of the company, providing outstanding customer experience to keep up to company standarts and updating customers daily on new trends in the crypto market. Communicating with 30-50 clients on a daily base both on the phone and through email and chat. 
</p></div>
            <div><h4>09/2018 - 10/2020</h4><h4>Retention Specialist</h4><p>Responsible for retaining the current customers of the company and providing outstanding customer experience to keep up to company standarts.
</p></div>

            </div>
        </div>
    </section>`

    render(previousExperience(), main);
}