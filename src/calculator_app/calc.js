import {
    calcView
} from "./calcView.js";

export function calc() {
    calcView()
    const numberArray = Array.from(document.getElementsByClassName('number'));
    const operrandArray = Array.from(document.getElementsByClassName('operand'))
    numberArray.forEach(element => element.addEventListener('click', clickedButton))
    operrandArray.forEach(element => element.addEventListener('click', clickedButton))
    const equalsButton = document.getElementById('equals');
    const allClearButton = document.getElementById('AC');
    equalsButton.addEventListener('click', equals);
    allClearButton.addEventListener('click', allClear)
    let firstNumber = '';
    let operrand = '';
    const secondNumber = ''



    function clickedButton(event) {
        const currentClick = event.target.innerHTML

        if (event.target.getAttribute('class') === 'number') {
            if (document.getElementById('botOfScreen').innerHTML === '0' && event.target.innerHTML !== '.') {
                document.getElementById('botOfScreen').innerHTML = ''
            }
            if (event.target.innerHTML === '.') {
                if (document.getElementById('botOfScreen').innerHTML.includes('.')) {
                    return
                }
            }
            document.getElementById('botOfScreen').innerHTML += currentClick
        }

        if (event.target.getAttribute('class') === 'operand') {
            if (document.getElementById('topOfScreen').innerHTML !== '') {
                equals()
            }
            firstNumber = Number(document.getElementById('botOfScreen').innerHTML);
            operrand = event.target.innerHTML;
            document.getElementById('topOfScreen').innerHTML = `${firstNumber} ${operrand}`
            document.getElementById('botOfScreen').innerHTML = ''
        }

    }

    document.onkeydown = function (event) {
        let pressedKey = event.key
        let isNum = false
        let isOperrand = false
        const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '.']
        const operrands = ['/', '*', '+', '-']
        for (let row of nums) {
            if (pressedKey == row) {
                isNum = true
            }
        }

        for (let row of operrands) {
            if (pressedKey == row) {
                isOperrand = true
            }
        }

        if (isNum) {
            console.log(pressedKey)
            if (document.getElementById('botOfScreen').innerHTML === '0' && pressedKey !== '.') {
                document.getElementById('botOfScreen').innerHTML = ''
            }
            if (pressedKey === '.') {
                if (document.getElementById('botOfScreen').innerHTML.includes('.')) {
                    return
                }
            }
            document.getElementById('botOfScreen').innerHTML += pressedKey
        } else if (isOperrand) {
            if (document.getElementById('topOfScreen').innerHTML !== '') {
                equals()
            }
            firstNumber = Number(document.getElementById('botOfScreen').innerHTML);
            operrand = pressedKey;
            document.getElementById('topOfScreen').innerHTML = `${firstNumber} ${operrand}`
            document.getElementById('botOfScreen').innerHTML = ''

        } else if (pressedKey === 'Enter') {
            if (document.getElementById('topOfScreen').innerHTML !== '' && document.getElementById('botOfScreen').innerHTML !== '') {
                equals()
            }
        } else if (pressedKey === 'Backspace') {
            let num = document.getElementById('botOfScreen').innerHTML
            num = num.substring(0, num.length - 1);
            document.getElementById('botOfScreen').innerHTML = num;
        } else {
            console.log(pressedKey);
            return
        }

    }

    function allClear(event) {
        document.getElementById('topOfScreen').innerHTML = ``
        document.getElementById('botOfScreen').innerHTML = '0'
    }

    function equals() {

        let secondNumber = Number(document.getElementById('botOfScreen').innerHTML);
        if (!firstNumber || !operrand || !secondNumber) {
            return
        }
        let result = 0


        switch (operrand) {
            case '+':
                result = firstNumber + secondNumber;
                break;
            case '-':
                result = firstNumber - secondNumber;
                break;
            case '/':
                result = firstNumber / secondNumber;
                break;
            case '*':
                result = firstNumber * secondNumber;
                break;
        }
        document.getElementById('topOfScreen').innerHTML = ``
        document.getElementById('botOfScreen').innerHTML = result

    }


}