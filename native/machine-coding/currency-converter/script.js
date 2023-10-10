const currencyRates = {
    USD: 1,    // USD to USD (1:1)
    EUR: 0.85, // USD to EUR (1 USD = 0.85 EUR)
    GBP: 0.74, // USD to GBP (1 USD = 0.74 GBP)
    INR: 74.63, // USD to INR (1 USD = 74.63 INR)
    // Add more currency rates here
};

function convertCurrency() {
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;
    const resultElement = document.getElementById("result");

    if (isNaN(amount)) {
        alert("Please enter a valid amount.");
        return;
    }

    const convertedAmount = (amount / currencyRates[fromCurrency]) * currencyRates[toCurrency];
    resultElement.value = convertedAmount.toFixed(2);
}
