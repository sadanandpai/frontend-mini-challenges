// Cache DOM elements
const elements = {
  userInput: document.getElementById('userInput'),
  lowerCase: document.getElementById('lowercase'),
  upperCase: document.getElementById('uppercase'),
  camelCase: document.getElementById('camelcase'),
  pascalCase: document.getElementById('pascalcase'),
  snakeCase: document.getElementById('snakecase'),
  kebabCase: document.getElementById('kebabcase'),
  trim: document.getElementById('trim'),
};

/**
 * Transforms text into different string formats
 * @param {string} text - The input text to transform
 * @returns {Object} Object containing transformed strings
 */
const transformText = (text) => {
  const trimmedText = text.trim();
  const lowerCase = trimmedText.toLowerCase();
  const words = lowerCase.split(/\s+/).filter(Boolean);

  const camelCase = words
    .map((word, index) => (index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)))
    .join('');

  return {
    lowerCase,
    upperCase: trimmedText.toUpperCase(),
    camelCase,
    pascalCase: camelCase.charAt(0).toUpperCase() + camelCase.slice(1),
    snakeCase: words.join('_'),
    kebabCase: words.join('-'),
    trim: words.join(''),
  };
};

/**
 * Updates the UI with transformed text
 * @param {string} text - The input text to transform and display
 */
const updateUI = (text) => {
  const transformed = transformText(text);

  // Update each output element
  Object.entries(transformed).forEach(([key, value]) => {
    const element = elements[key];
    if (element) {
      element.textContent = value || '';
      // Add ARIA live region updates for screen readers
      element.setAttribute('aria-label', `${key}: ${value}`);
    }
  });
};

elements.userInput.addEventListener('input', () => {
  updateUI(elements.userInput.value);
});

// init
updateUI(elements.userInput.value);
