const charRangeEl = document.querySelector('#range');
const charLengthEl = document.querySelector('.char-length');
const passwordFormEl = document.querySelector('.password-form');
const passwordInputEl = document.querySelector('.password');
const lowerCaseEl = document.querySelector('#lc');
const upperCaseEl = document.querySelector('#uc');
const numbersEl = document.querySelector('#numbers');
const symbolsEl = document.querySelector('#symbols');
const copyBtnEl = document.querySelector('.copy-btn');
const clipboardNoti = document.querySelector('#clipboard-container');
const rememberPass = document.querySelector('#rememberPass');

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

// word for abbreviate letter
const APLHABETWORDS = {
  a: 'apple',
  b: 'banana',
  c: 'cat',
  d: 'dog',
  e: 'elephant',
  f: 'fox',
  g: 'grape',
  h: 'horse',
  i: 'ice cream',
  j: 'jellyfish',
  k: 'kiwi',
  l: 'lion',
  m: 'monkey',
  n: 'nest',
  o: 'orange',
  p: 'pear',
  q: 'queen',
  r: 'rabbit',
  s: 'snake',
  t: 'tiger',
  u: 'umbrella',
  v: 'vase',
  w: 'watermelon',
  x: 'xylophone',
  y: 'yak',
  z: 'zebra',
  A: 'Astronaut',
  B: 'Bicycle',
  C: 'Camera',
  D: 'Dolphin',
  E: 'Eagle',
  F: 'Fireworks',
  G: 'Globe',
  H: 'Helicopter',
  I: 'Island',
  J: 'Jellyfish',
  K: 'Kangaroo',
  L: 'Lightning',
  M: 'Mountain',
  N: 'Nightingale',
  O: 'Octopus',
  P: 'Penguin',
  Q: 'Quokka',
  R: 'River',
  S: 'Starfish',
  T: 'Telescope',
  U: 'Unicorn',
  V: 'Volcano',
  W: 'Waterfall',
  X: 'X-ray',
  Y: 'Yacht',
  Z: 'Zipline',
};

const functionMap = {
  upper: () => String.fromCodePoint(65 + Math.floor(Math.random() * 26)),
  lower: () => String.fromCodePoint(97 + Math.floor(Math.random() * 26)),
  numeric: () => String.fromCodePoint(49 + Math.floor(Math.random() * 9)),
  symbols: () => specialChars[Math.floor(Math.random() * specialChars.length)],
};

const updateCharLength = (length) => {
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

const rememberPassword = (pass) => {
  let rememberPass = ''; // init the empty string

  const strToArr = pass.split(''); // convert the string into array to perform map method
  strToArr.map((pass) => {
    if (APLHABETWORDS[pass]) {
      rememberPass += ` ${APLHABETWORDS[pass]}`;
    } else {
      rememberPass += ` ${pass}`;
    }
  });

  return rememberPass.trim();
};

copyBtnEl.addEventListener('click', (e) => {
  e.preventDefault();
  window.navigator.clipboard.writeText(passwordInputEl.value);
  // check if the password is already generated
  if (!passwordInputEl) {
    return;
  } else {
    // add animation when click on copyBtnEl
    clipboardNoti.classList.add('clipboard-container-active');
    setTimeout(() => {
      clipboardNoti.classList.remove('clipboard-container-active');
    }, 1000);
  }
});

passwordFormEl.addEventListener('submit', (e) => {
  e.preventDefault();

  const password = generatePassword(charLength, {
    lower: lowerCaseEl.checked,
    upper: upperCaseEl.checked,
    numeric: numbersEl.checked,
    symbols: symbolsEl.checked,
  });
  passwordInputEl.value = password;

  rememberPass.innerText = rememberPassword(passwordInputEl.value); // add
});

passwordFormEl.addEventListener('change', (e) => {
  if (e.target.type === 'range') {
    updateCharLength(e.target.value);
  }

  if (e.target.type === 'checkbox') {
    const checkboxes = Array.from(passwordFormEl.querySelectorAll('[type="checkbox"]'));
    const selectedCheckboxes = checkboxes.filter((cb) => cb.checked).length;

    if (selectedCheckboxes === 0) {
      e.target.checked = true;
    }
  }
});

charRangeEl.value = charLength;
lowerCaseEl.checked = true;
updateCharLength(charLength);
