import {
    html,
    render
} from 'https://unpkg.com/lit-html?module'

export function calcView(event) {
    document.body.style.backgroundImage = `url(images/background-weather.png)`

    const main = document.getElementsByTagName('main')[0];

    const calcGrid = () => html `
    <section id="calculatorApp">
        <div id="app" >
            <h1>CALCULATOR</h1>
        <div id="screen">
            <div id="topOfScreen"></div>
            <div id="botOfScreen">0</div>
        </div>
        <div id="buttons">
        <button class="allClear" id="AC">AC</button>
        <button class="equals" id="equals">=</button>

            <button class="number" id="7">7</button>
            <button class="number" id="8">8</button>
            <button class="number" id="9">9</button>
            <button class="operand" id="/">/</button>
            <button class="number" id="4">4</button>
            <button class="number" id="5">5</button>
            <button class="number" id="6">6</button>
            <button class="operand" id="*">*</button>
            <button class="number" id="1">1</button>
            <button class="number" id="2">2</button>
            <button class="number" id="3">3</button>
            <button class="operand" id="-">-</button>
            <button class="number" id="zero">0</button>
            <button class="number" id="decimal">.</button>
            <button class="operand" id="decimal">+</button>

        </div>
        </div>
    </section>
    `

    render(calcGrid(), main)
}