// Get references to the buttons
const authenticateButton = document.querySelector('button');
const checkBalanceButton = document.querySelectorAll('.options button')[0];
const depositButton = document.querySelectorAll('.options button')[1];
const withdrawButton = document.querySelectorAll('.options button')[2];
const logoutButton = document.querySelectorAll('.options button')[3];

// Attach event listeners to the buttons
authenticateButton.addEventListener('click', authenticate);
checkBalanceButton.addEventListener('click', checkBalance);
depositButton.addEventListener('click', deposit);
withdrawButton.addEventListener('click', withdraw);
logoutButton.addEventListener('click', logout);

const correctPin = '1234';
let isAuthenticated = false;
let balance = 1000;

function authenticate() {
  const pin = document.getElementById('pin').value;
  if (pin === correctPin) {
    isAuthenticated = true;
    displayMessage('Login successful.');
  } else {
    isAuthenticated = false;
    displayMessage('Invalid PIN. Please try again.');
  }
}

function checkBalance() {
  if (!isAuthenticated) {
    displayMessage('Please login first.');
    return;
  }
  displayMessage(`Your balance is $${balance}`);
}

function deposit() {
  if (!isAuthenticated) {
    displayMessage('Please login first.');
    return;
  }
  const amount = parseFloat(prompt('Enter the amount to deposit:'));
  if (!isNaN(amount) && amount > 0) {
    balance += amount;
    displayMessage(`Deposited $${amount}. Your new balance is $${balance}`);
  } else {
    displayMessage('Invalid amount. Please try again.');
  }
}

function withdraw() {
  if (!isAuthenticated) {
    displayMessage('Please login first.');
    return;
  }
  const amount = parseFloat(prompt('Enter the amount to withdraw:'));
  if (!isNaN(amount) && amount > 0 && amount <= balance) {
    balance -= amount;
    displayMessage(`Withdrawn $${amount}. Your new balance is $${balance}`);
  } else {
    displayMessage('Invalid amount or insufficient balance. Please try again.');
  }
}

function logout() {
  isAuthenticated = false;
  displayMessage('Logged out successfully.');
}

function displayMessage(message) {
  const outputDiv = document.getElementById('output');
  outputDiv.textContent = message;
}
