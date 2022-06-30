let display = document.querySelector('.number-display');
const numberKeys = document.querySelectorAll('.number');
const operatorKeys = document.querySelectorAll('.operator');
const equalsBtn = document.querySelector('.equals');
const clearBtn = document.querySelector('.clear-btn');
const negPosBtn = document.querySelector('.neg-pos-btn');
const percentBtn = document.querySelector('.percent-btn');
let displayValue = 0;
let runningTotal = 0;
let calcCurrentStatus = [];


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

function convertToPercentage(num){
  let numInPercent = num/100;
  displayValue = numInPercent;
  display.innerText = displayValue;
}

numberKeys.forEach(numberKey => numberKey.addEventListener('click', updatedDisplay));

clearBtn.addEventListener('click', () => {
  displayValue = 0;
  display.innerText = '0';
});

percentBtn.addEventListener('click', () => {
  convertToPercentage(displayValue);
});

negPosBtn.addEventListener('click', posNegNumberToggle);

