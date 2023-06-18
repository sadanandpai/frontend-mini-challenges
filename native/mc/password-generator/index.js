const charRangeEl = document.querySelector('#range');
const charLengthEl = document.querySelector('.char-length');
const passwordFormEl = document.querySelector('.password-form');
const passwordInputEl = document.querySelector('.password');
const lowerCaseEl = document.querySelector('#lc');
const upperCaseEl = document.querySelector('#uc');
const numbersEl = document.querySelector('#numbers');
const symbolsEl = document.querySelector('#symbols');
const copyBtnEl = document.querySelector('.copy-btn');

let charLength = 10;
const specialChars = [
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  ',',
  '.',
  '/',
  '>',
  '<',
  '?',
  '~',
  ';',
  ':',
  '[',
  ']',
  '{',
  '}',
];
const functionMap = {
  upper: () => String.fromCodePoint(65 + Math.floor(Math.random() * 26)),
  lower: () => String.fromCodePoint(97 + Math.floor(Math.random() * 26)),
  numeric: () => String.fromCodePoint(49 + Math.floor(Math.random() * 9)),
  symbols: () => specialChars[Math.floor(Math.random() * specialChars.length)],
};

const updateCharLength = length => {
  charLengthEl.textContent = length;
  charLength = length;
};

const getRandomCharsFromCriteria = (length, keys) => {
  let str = '';
  for (let i = 0; i < length; i++) {
    str += functionMap[keys[Math.floor(Math.random() * keys.length)]]();
  }
  return str;
};

const insertAtRandomPlaces = (subStr, mainStr) => {
  return subStr.split('').reduce((str, ch) => {
    const pos = Math.floor(Math.random() * str.length);
    str = str.substring(0, pos) + ch + str.substring(pos);
    return str;
  }, mainStr);
};

const generatePassword = (length, options) => {
  const validOptions = Object.entries(options).reduce((obj, [key, value]) => {
    if (value) obj[key] = value;
    return obj;
  }, {});

  const optionLength = Object.keys(validOptions).length;
  const lengthCompletionPassword = getRandomCharsFromCriteria(length - optionLength, Object.keys(validOptions));
  const minimumCriteriaMatchingPassword = Object.entries(validOptions)
    .map(([key, value]) => (value ? functionMap[key]() : ''))
    .join('');

  return insertAtRandomPlaces(minimumCriteriaMatchingPassword, lengthCompletionPassword);
};

copyBtnEl.addEventListener('click', e => {
  e.preventDefault();
  window.navigator.clipboard.writeText(passwordInputEl.value);
});

passwordFormEl.addEventListener('submit', e => {
  e.preventDefault();

  const password = generatePassword(charLength, {
    lower: lowerCaseEl.checked,
    upper: upperCaseEl.checked,
    numeric: numbersEl.checked,
    symbols: symbolsEl.checked,
  });
  passwordInputEl.value = password;
});

passwordFormEl.addEventListener('change', e => {
  if (e.target.type === 'range') {
    updateCharLength(e.target.value);
  }

  if (e.target.type === 'checkbox') {
    const checkboxes = Array.from(passwordFormEl.querySelectorAll('[type="checkbox"]'));
    const selectedCheckboxes = checkboxes.filter(cb => cb.checked).length;

    if (selectedCheckboxes === 0) {
      e.target.checked = true;
    }
  }
});

charRangeEl.value = charLength;
lowerCaseEl.checked = true;
updateCharLength(charLength);
