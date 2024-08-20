const display = document.getElementById('display');
const clearButton = document.getElementById('clear');
const backspaceButton = document.getElementById('backspace');
const equalsButton = document.getElementById('equals');
const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');
const numberButtons = document.querySelectorAll('.keys button:not([id])');

let currentNumber = '';
let previousNumber = '';
let operator = '';

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentNumber += button.textContent;
        display.value = currentNumber;
    });
});

addButton.addEventListener('click', () => {
    previousNumber = currentNumber;
    currentNumber = '';
    operator = 'add';
    display.value = previousNumber + '+';
});

subtractButton.addEventListener('click', () => {
    previousNumber = currentNumber;
    currentNumber = '';
    operator = 'subtract';
    display.value = previousNumber + '-';
});

multiplyButton.addEventListener('click', () => {
    previousNumber = currentNumber;
    currentNumber = '';
    operator = 'multiply';
    display.value = previousNumber + '*';
});

divideButton.addEventListener('click', () => {
    previousNumber = currentNumber;
    currentNumber = '';
    operator = 'divide';
    display.value = previousNumber + '/';
});

equalsButton.addEventListener('click', () => {
    const result = calculateResult();
    display.value = result;
    currentNumber = result;
    previousNumber = '';
    operator = '';
});

clearButton.addEventListener('click', () => {
    currentNumber = '';
    previousNumber = '';
    operator = '';
    display.value = '';
});

backspaceButton.addEventListener('click', () => {
    currentNumber = currentNumber.slice(0, -1);
    display.value = currentNumber;
});

function calculateResult() {
    const num1 = parseFloat(previousNumber);
    const num2 = parseFloat(currentNumber);
    let result;

    switch (operator) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = 'Error: Division by zero';
            }
            break;
        default:
            result = 'Error: Invalid operator';
    }

    return result;
}

document.getElementById('zero').addEventListener('click', () => {
    currentNumber += '0';
    display.value = currentNumber;
});

document.getElementById('one').addEventListener('click', () => {
    currentNumber += '1';
    display.value = currentNumber;
});

document.getElementById('two').addEventListener('click', () => {
    currentNumber += '2';
    display.value = currentNumber;
});

document.getElementById('three').addEventListener('click', () => {
    currentNumber += '3';
    display.value = currentNumber;
});

document.getElementById('four').addEventListener('click', () => {
    currentNumber += '4';
    display.value = currentNumber;
});

document.getElementById('five').addEventListener('click', () => {
    currentNumber += '5';
    display.value = currentNumber;
});

document.getElementById('six').addEventListener('click', () => {
    currentNumber += '6';
    display.value = currentNumber;
});

document.getElementById('seven').addEventListener('click', () => {
    currentNumber += '7';
    display.value = currentNumber;
});

document.getElementById('eight').addEventListener('click', () => {
    currentNumber += '8';
    display.value = currentNumber;
});

document.getElementById('nine').addEventListener('click', () => {
    currentNumber += '9';
    display.value = currentNumber;
});