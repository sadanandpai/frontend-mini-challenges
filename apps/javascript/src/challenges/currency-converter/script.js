// Currency exchange rates (base: USD)
const currencyRates = {
  USD: 1, // US Dollar
  EUR: 0.85, // Euro
  GBP: 0.74, // British Pound
  JPY: 110.16, // Japanese Yen
  AUD: 1.35, // Australian Dollar
  CAD: 1.25, // Canadian Dollar
  CHF: 0.92, // Swiss Franc
  CNY: 6.47, // Chinese Yuan
  INR: 74.63, // Indian Rupee
};

// DOM Elements
const elements = {
  form: document.getElementById('converterForm'),
  amount: document.getElementById('amount'),
  fromCurrency: document.getElementById('fromCurrency'),
  toCurrency: document.getElementById('toCurrency'),
  result: document.getElementById('result'),
  customCurrency: document.getElementById('customCurrency'),
  addCurrencyButton: document.getElementById('addCurrencyButton'),
  errorContainer: document.getElementById('errorContainer'),
};

// Error messages
const ERROR_MESSAGES = {
  INVALID_AMOUNT: 'Please enter a valid amount greater than zero',
  INVALID_CURRENCY: 'Please select valid currencies to convert between',
  INVALID_EXCHANGE_RATE: 'Please enter a valid exchange rate greater than zero',
  CURRENCY_EXISTS: 'This currency already exists',
  INVALID_CURRENCY_CODE: 'Please enter a valid 3-letter currency code (e.g., CAD, JPY, AUD)',
};

/**
 * Show error message to the user
 * @param {string} message - Error message to display
 */
function showError(message) {
  elements.errorContainer.textContent = message;
  elements.errorContainer.focus();
}

/**
 * Clear error message
 */
function clearError() {
  elements.errorContainer.textContent = '';
}

/**
 * Format currency amount
 * @param {number} amount - Amount to format
 * @param {string} currency - Currency code
 * @returns {string} Formatted currency string
 */
function formatCurrency(amount, currency) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency || 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

/**
 * Update currency dropdown options
 */
function updateCurrencyOptions() {
  const currencies = Object.keys(currencyRates).sort();

  // Save current selections
  const fromValue = elements.fromCurrency.value;
  const toValue = elements.toCurrency.value;

  // Clear and rebuild options
  elements.fromCurrency.innerHTML = '';
  elements.toCurrency.innerHTML = '';

  // Add options to both selects
  currencies.forEach((currency) => {
    const option = document.createElement('option');
    option.value = currency;
    option.textContent = currency;

    // Add to 'from' dropdown
    const fromOption = option.cloneNode(true);
    elements.fromCurrency.appendChild(fromOption);

    // Add to 'to' dropdown
    const toOption = option.cloneNode(true);
    elements.toCurrency.appendChild(toOption);
  });

  // Restore or set default selections
  if (fromValue && currencies.includes(fromValue)) {
    elements.fromCurrency.value = fromValue;
  } else {
    elements.fromCurrency.value = 'USD';
  }

  if (toValue && currencies.includes(toValue)) {
    elements.toCurrency.value = toValue;
  } else {
    elements.toCurrency.value = 'EUR';
  }
}

/**
 * Convert currency and update the result
 */
function convertCurrency(event) {
  if (event) event.preventDefault();

  clearError();

  const amount = parseFloat(elements.amount.value);
  const fromCurrency = elements.fromCurrency.value;
  const toCurrency = elements.toCurrency.value;

  // Validate inputs
  if (isNaN(amount) || amount <= 0) {
    showError(ERROR_MESSAGES.INVALID_AMOUNT);
    elements.amount.focus();
    return;
  }

  if (!fromCurrency || !toCurrency) {
    showError(ERROR_MESSAGES.INVALID_CURRENCY);
    return;
  }

  try {
    // Convert amount to USD first, then to target currency
    const amountInUSD = amount / currencyRates[fromCurrency];
    const convertedAmount = amountInUSD * currencyRates[toCurrency];

    // Format and display result
    elements.result.value = formatCurrency(convertedAmount, toCurrency);
  } catch (error) {
    console.error('Currency conversion error:', error);
    showError('An error occurred during conversion. Please try again.');
  }
}

/**
 * Add a new custom currency
 */
function addCustomCurrency() {
  const currencyCode = elements.customCurrency.value.trim().toUpperCase();
  clearError();

  // Validate currency code
  if (!/^[A-Z]{3}$/.test(currencyCode)) {
    showError(ERROR_MESSAGES.INVALID_CURRENCY_CODE);
    elements.customCurrency.focus();
    return;
  }

  // Check if currency already exists
  if (currencyRates[currencyCode]) {
    showError(`${ERROR_MESSAGES.CURRENCY_EXISTS}: ${currencyCode}`);
    return;
  }

  // Get exchange rate from user
  const rateInput = prompt(`Enter exchange rate for 1 USD to ${currencyCode}`);
  const exchangeRate = parseFloat(rateInput);

  // Validate exchange rate
  if (isNaN(exchangeRate) || exchangeRate <= 0) {
    showError(ERROR_MESSAGES.INVALID_EXCHANGE_RATE);
    return;
  }

  // Add new currency and update UI
  currencyRates[currencyCode] = exchangeRate;
  updateCurrencyOptions();
  elements.customCurrency.value = '';

  // Focus the amount input for the next conversion
  elements.amount.focus();
}

// Initialize currency dropdowns
updateCurrencyOptions();

// Form submission
elements.form.addEventListener('submit', convertCurrency);

// Add currency button
elements.addCurrencyButton.addEventListener('click', addCustomCurrency);

// Allow pressing Enter in the custom currency input to add it
elements.customCurrency.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    addCustomCurrency();
  }
});

// Clear error when user starts typing
elements.amount.addEventListener('input', clearError);
elements.customCurrency.addEventListener('input', clearError);

// Initial focus
elements.amount.focus();
