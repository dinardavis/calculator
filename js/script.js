let display = document.querySelector('.number-display');
const numberKeys = document.querySelectorAll('.number');
const equalsBtn = document.querySelector('.equals');
const negPosBtn = document.querySelector('.neg-pos-btn');
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

function updatedDisplay(e) {
  if(display.innerText === '0') {
    display.innerText = '';
  }
  display.innerText += e.target.innerText;
  displayValue = display.innerText;
  console.log(displayValue)
}

function posNegNumberToggle() {
  if(displayValue > 0) {
    displayValue = -Math.abs(displayValue);
    display.innerText = displayValue;
  } else if(displayValue < 0) {
    displayValue = Math.abs(displayValue);
    display.innerText = displayValue;
  }
}



numberKeys.forEach(numberKey => numberKey.addEventListener('click', updatedDisplay));

negPosBtn.addEventListener('click', posNegNumberToggle);