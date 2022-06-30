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

function updateDisplay(e) {
  if(calcCurrentStatus.length === 2) {
    display.innerText = '';
  } 
  if(display.innerText === '0') {
    display.innerText = '';
  } 
  display.innerText += e.target.innerText;
  displayValue = display.innerText;
  console.log(displayValue)
}

function updateCurrentStatus(e) {
  if(e.target.innerText === '+') {
    calcCurrentStatus.push(displayValue);
    calcCurrentStatus.push(e.target.innerText);
    console.log(calcCurrentStatus);
  }
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

numberKeys.forEach(numberKey => numberKey.addEventListener('click', updateDisplay));

operatorKeys.forEach(operatorKey => operatorKey.addEventListener('click', updateCurrentStatus));

clearBtn.addEventListener('click', () => {
  displayValue = 0;
  display.innerText = '0';
  runningTotal = 0;
  calcCurrentStatus = [];
});

percentBtn.addEventListener('click', () => {
  convertToPercentage(displayValue);
});

equalsBtn.addEventListener('click', () => {
  if(calcCurrentStatus.length === 2 && calcCurrentStatus[1] === '+') {
    runningTotal = operate(add, parseInt(calcCurrentStatus[0]), parseInt(displayValue));
    displayValue = runningTotal;
    display.innerText = displayValue;
  }
  console.log('working')
});

negPosBtn.addEventListener('click', posNegNumberToggle);

