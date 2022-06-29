let display = document.querySelector('.number-display');
const numberKeys = document.querySelectorAll('.number');
const equalsBtn = document.querySelector('.equals');
let displayValue = 0;


function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(func, num1, num2) {
  return func(num1, num2);
}

const updatedDisplay = function(e) {
  if(display.innerText === '0') {
    display.innerText = '';
  }
  display.innerText += e.target.innerText;
  return displayValue = display.innerText;
}



numberKeys.forEach(numberKey => numberKey.addEventListener('click', updatedDisplay));