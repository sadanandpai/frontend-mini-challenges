const userInput = document.getElementById('userInput');

const lowerCaseEl = document.getElementById('lowercase');
const upperCaseEl = document.getElementById('uppercase');
const camelCaseEl = document.getElementById('camelcase');
const pascalCaseEl = document.getElementById('pascalcase');
const snakeCaseEl = document.getElementById('snakecase');
const kebabCaseEl = document.getElementById('kebabcase');
const titleCaseEl = document.getElementById('titlecase');
const trimEl = document.getElementById('trim');

function transform({ text = userInput.value.trim() }) {
  const camelCase = text
    .toLowerCase()
    .split(' ')
    .reduce((a, b) => a + b[0]?.toUpperCase() + b.substring(1)?.toLowerCase());

  lowerCaseEl.textContent = text.toLowerCase();
  upperCaseEl.textContent = text.toUpperCase();
  camelCaseEl.textContent = camelCase;
  pascalCaseEl.textContent = camelCase ? camelCase[0]?.toUpperCase() + camelCase.substring(1) : '';
  snakeCaseEl.textContent = text.split(' ').join('_');
  kebabCaseEl.textContent = text.split(' ').join('-');
  trimEl.textContent = text.split(' ').join('');
}

userInput.addEventListener('input', transform);
transform({});
