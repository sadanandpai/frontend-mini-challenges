// DOM Elements
const phoneInput = document.getElementById('phone');
const phoneError = document.getElementById('phone-error');
const validLength = 10;

/**
 * Formats a phone number string to (XXX) XXX-XXXX format
 * @param {string} value - The raw phone number string
 * @returns {string} Formatted phone number
 */
const formatPhoneNumber = (value) => {
  // Remove all non-digit characters
  const numbersOnly = value.replace(/\D/g, '');

  // Format based on length
  if (numbersOnly.length === 0) return '';
  if (numbersOnly.length <= 3) return numbersOnly;
  if (numbersOnly.length <= 6) return `+(${numbersOnly.slice(0, 3)}) ${numbersOnly.slice(3)}`;

  return `+(${numbersOnly.slice(0, 3)}) ${numbersOnly.slice(3, 6)}-${numbersOnly.slice(6, validLength)}`;
};

/**
 * Updates the validation state and UI feedback
 * @param {HTMLInputElement} input - The input element to validate
 */
const updateValidationState = (input) => {
  const value = input.value.replace(/\D/g, '');
  const isValid = value.length === validLength || value.length === 0;

  // Update ARIA attributes and classes
  input.setAttribute('aria-invalid', !isValid);
  input.classList.toggle('valid', value.length === validLength);

  // Show/hide error message
  if (!isValid && value.length > 0) {
    input.classList.add('shake');
    phoneError.textContent = `Please enter a valid ${validLength}-digit phone number`;
    setTimeout(() => input.classList.remove('shake'), 300);
  } else {
    phoneError.textContent = '';
  }
};

phoneInput.addEventListener('input', () => {
  phoneInput.value = formatPhoneNumber(phoneInput.value);
  updateValidationState(phoneInput);
});
updateValidationState(phoneInput);
