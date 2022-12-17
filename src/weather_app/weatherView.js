import {
    html,
    render
} from 'https://unpkg.com/lit-html?module'

export function weatherView(event) {
    document.body.style.backgroundImage = `url(images/background-weather.png)`
    const main = document.getElementsByTagName('main')[0];

    const weatherView = () => html `
    <section id="weatherApp">
        <h1>Weather APP</h1>
        <div id="appContainer">
            <div id="top-box">
                <div id="current-weather"></div>
                <div id="search"></div>
            </div>
            <div id="future-forecast"></div>
        </div>
    </section>
    `

    render(weatherView(), main)
}