const calculatorEl = document.querySelector('.calculator');
const displayEl = document.querySelector('.display');

let currentValue = '';
let previousValue = null;
let recentValue = null;
let prevOperator = null;
let clearNext = false;
let isResultCalculated = false;

const appendSymbol = (value, symbol) => {
  if (symbol === '.') {
    if (value?.includes('.')) {
      return value;
    }
    if (value === '') {
      return '0.';
    }
    return currentValue + symbol;
  }

  if (currentValue === '' || currentValue === '0') {
    return symbol;
  }

  return currentValue + symbol;
};

const updateDisplay = value => {
  displayEl.textContent = value;
};

const performOperation = (operator, a = +previousValue, b = +currentValue) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case 'x':
      return a * b;
    case '/':
      return a / b;
  }
};

calculatorEl.addEventListener('click', e => {
  if (!e.target.classList.contains('btn')) {
    return;
  }

  const symbol = e.target.dataset.value;

  if (!Number.isNaN(+symbol) || symbol === '.') {
    if (clearNext) {
      previousValue = currentValue;
      currentValue = '';
      clearNext = false;
      isResultCalculated = false;
    }

    currentValue = appendSymbol(currentValue, symbol);
    updateDisplay(currentValue);
    return;
  }

  if (symbol === 'c') {
    currentValue = '';
    recentValue = null;
    previousValue = null;
    prevOperator = null;
    updateDisplay('0');
    return;
  }

  if (!isResultCalculated && (symbol === '=' || prevOperator) && previousValue) {
    isResultCalculated = true;
    recentValue = currentValue;
    currentValue = performOperation(prevOperator);
    updateDisplay(currentValue);
  } else if (symbol === '=' && prevOperator) {
    currentValue = performOperation(prevOperator, +currentValue, +recentValue);
    updateDisplay(currentValue);
  }

  if (symbol !== '=') {
    prevOperator = symbol;
  }

  clearNext = true;
});

updateDisplay('0');
