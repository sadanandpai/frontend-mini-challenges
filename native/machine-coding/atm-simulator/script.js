const correctPin = "1234";
let isAuthenticated = false;
let balance = 1000;

function authenticate() {
    const pin = document.getElementById("pin").value;
    if (pin === correctPin) {
        isAuthenticated = true;
        displayMessage("Login successful.");
    } else {
        isAuthenticated = false;
        displayMessage("Invalid PIN. Please try again.");
    }
}

function checkBalance() {
    if (!isAuthenticated) {
        displayMessage("Please login first.");
        return;
    }
    displayMessage(`Your balance is $${balance}`);
}

function deposit() {
    if (!isAuthenticated) {
        displayMessage("Please login first.");
        return;
    }
    const amount = parseFloat(prompt("Enter the amount to deposit:"));
    if (!isNaN(amount) && amount > 0) {
        balance += amount;
        displayMessage(`Deposited $${amount}. Your new balance is $${balance}`);
    } else {
        displayMessage("Invalid amount. Please try again.");
    }
}

function withdraw() {
    if (!isAuthenticated) {
        displayMessage("Please login first.");
        return;
    }
    const amount = parseFloat(prompt("Enter the amount to withdraw:"));
    if (!isNaN(amount) && amount > 0 && amount <= balance) {
        balance -= amount;
        displayMessage(`Withdrawn $${amount}. Your new balance is $${balance}`);
    } else {
        displayMessage("Invalid amount or insufficient balance. Please try again.");
    }
}

function logout() {
    isAuthenticated = false;
    displayMessage("Logged out successfully.");
}

function displayMessage(message) {
    const outputDiv = document.getElementById("output");
    outputDiv.textContent = message;
}
