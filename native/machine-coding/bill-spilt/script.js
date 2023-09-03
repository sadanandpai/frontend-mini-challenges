const amount = document.getElementById('amount');
const tipButton = document.querySelectorAll('.btn');
const customTip = document.getElementById('customTip');
const noOfPeople = document.getElementById('person');
const generateBill = document.getElementById('generate-bill');
const tipValue = document.querySelector('.tipValue');
const totalValue = document.querySelector('.totalValue');
const eachPersonBill = document.querySelector('.bill');
const resetBtn = document.getElementById('reset');

let billValue = 0;
let tip = 0;
let people = 0;

function validateInput() {
  if (billValue > 0 && tip > 0 && people > 0) {
    generateBill.classList.add('active');
    generateBill.disabled = false;
    return true;
  } else {
    generateBill.classList.remove('active');
    generateBill.disabled = true;
    return false;
  }
}

function validateBill() {
  billValue = parseFloat(amount.value);
  tipButton.forEach((btn) => {
    if (billValue > 0) {
      btn.classList.add('true');
      btn.disabled = false;
      customTip.disabled = false;
      noOfPeople.disabled = false;
    } else {
      btn.classList.remove('true');
      btn.disabled = true;
      customTip.disabled = true;
      noOfPeople.disabled = true;
    }
  });

  validateInput();
}

function selectTip(e) {
  tipButton.forEach((btn) => {
    btn.classList.remove('active');
    if (e && e.target.innerHTML == btn.innerHTML) {
      btn.classList.add('active');
      tip = parseFloat(btn.innerHTML) / 100;
    }
  });
  customTip.value = '';
  validateInput();
}

function tipCustomValue() {
  if (customTip.value !== 0) {
    tip = parseFloat(customTip.value / 100);
    tipButton.forEach((btn) => {
      btn.classList.remove('active');
    });
  }
  validateInput();
}

function setPeopleValue() {
  people = parseFloat(noOfPeople.value);
  validateInput();
}

function calculate() {
  if (people >= 1) {
    let tipAmount = billValue * tip;
    let totalAmount = billValue + tipAmount;
    let divideBill = totalAmount / people;

    tipValue.innerHTML = '&#8377;' + tipAmount.toFixed(2);
    totalValue.innerHTML = '&#8377;' + totalAmount.toFixed(2);
    eachPersonBill.innerHTML = '&#8377;' + divideBill.toFixed(2);
    resetBtn.classList.add('active');
    resetBtn.disabled = false;
  }
}

function handleReset() {
  amount.value = '';
  validateBill();
  tipButton.forEach((btn) => {
    btn.classList.remove('true');
    btn.disabled = true;
  });
  tip = '';
  customTip.value = '';
  selectTip();
  noOfPeople.value = '';
  setPeopleValue();
  validateInput();
  generateBill.disabled = true
  tipValue.innerHTML = '';
  totalValue.innerHTML = '';
  eachPersonBill.innerHTML = '';
  resetBtn.classList.remove('active');
  resetBtn.disabled = true;
}

amount.addEventListener('input', validateBill);
generateBill.addEventListener('click', calculate);
customTip.addEventListener('input', tipCustomValue);
noOfPeople.addEventListener('input', setPeopleValue);
resetBtn.addEventListener('click', handleReset);
tipButton.forEach((btn) => {
  btn.addEventListener('click', selectTip);
});
