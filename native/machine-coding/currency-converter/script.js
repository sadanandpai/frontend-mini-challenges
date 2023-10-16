const currencyRates = {
  USD: 1, // USD to USD (1:1)
  EUR: 0.85, // USD to EUR (1 USD = 0.85 EUR)
  GBP: 0.74, // USD to GBP (1 USD = 0.74 GBP)
  INR: 74.63, // USD to INR (1 USD = 74.63 INR)
  // Add more currency rates here
};

document.getElementById('addCurrencyButton').addEventListener('click', function () {
  const customCurrencyCode = document.getElementById('customCurrency').value.toUpperCase();
  if (customCurrencyCode && !currencyRates[customCurrencyCode]) {
    const exchangeRate = parseFloat(
      prompt(`Enter exchange rate for 1 USD to ${customCurrencyCode}`)
    );
    if (!isNaN(exchangeRate)) {
      currencyRates[customCurrencyCode] = exchangeRate;
      updateCurrencyOptions();
    } else {
      alert('Invalid exchange rate. Please enter a valid number.');
    }
  } else if (currencyRates[customCurrencyCode]) {
    alert(`Currency ${customCurrencyCode} already exists.`);
  } else {
    alert('Invalid currency code. Please enter a valid code (e.g., CAD).');
  }
});

function updateCurrencyOptions() {
  const fromCurrencySelect = document.getElementById('fromCurrency');
  const toCurrencySelect = document.getElementById('toCurrency');

  // Clear existing options
  fromCurrencySelect.innerHTML = '';
  toCurrencySelect.innerHTML = '';

  for (const currency in currencyRates) {
    const option = document.createElement('option');
    option.value = currency;
    option.innerText = currency;
    fromCurrencySelect.appendChild(option);

    const toOption = option.cloneNode(true);
    toCurrencySelect.appendChild(toOption);
  }
  toCurrencySelect.innerHTML += '<option value="custom">Custom</option>';
}

document.getElementById('convertButton').addEventListener('click', convertCurrency);

function convertCurrency() {
  const amount = parseFloat(document.getElementById('amount').value);
  const fromCurrency = document.getElementById('fromCurrency').value;
  const toCurrency = document.getElementById('toCurrency').value;
  const resultElement = document.getElementById('result');

  if (isNaN(amount)) {
    alert('Please enter a valid amount.');
    return;
  }

  const convertedAmount = (amount / currencyRates[fromCurrency]) * currencyRates[toCurrency];
  resultElement.value = convertedAmount.toFixed(2);
}

// Initialize currency options
updateCurrencyOptions();
