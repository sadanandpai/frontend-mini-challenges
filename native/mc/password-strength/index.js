const passwordInput = document.getElementById('password');
const progressBar = document.getElementById('progressBar');
const strengthEl = document.getElementById('strength');
const lcEl = document.getElementById('lc');
const ucEl = document.getElementById('uc');
const numEl = document.getElementById('num');
const symEl = document.getElementById('sym');
const charsEl = document.getElementById('chars');

const passwordStrengths = [
  { difficulty: 'Weak', color: 'red' },
  { difficulty: 'Medium', color: 'orange' },
  { difficulty: 'Strong', color: 'green' },
];

const hasNumber = /\d/; // check if password contains at least one number
const hasUpperCase = /[A-Z]/; // check if password contains at least one uppercase letter
const hasLowerCase = /[a-z]/; // check if password contains at least one lowercase letter
const hasSpecial = /[^A-Za-z0-9]/; // check if password contains at least one special character

function getPasswordStrength(strength) {
  if (strength > 8) {
    return passwordStrengths[2];
  }

  if (strength > 5) {
    return passwordStrengths[1];
  }

  return passwordStrengths[0];
}

function getPasswordScore(text) {
  let score = 0;
  if (text.length > 3) {
    score = Math.min(6, Math.floor(text.length / 3));
    score += hasNumber.test(text) + hasUpperCase.test(text) + hasLowerCase.test(text) + hasSpecial.test(text);
  }
  return score;
}

function updateUI(strength, score, length, indicators) {
  strengthEl.textContent = strength.difficulty;
  progressBar.style.backgroundColor = strength.color;
  progressBar.style.width = score * 10 + '%';
  lcEl.className = indicators.lc;
  ucEl.className = indicators.uc;
  numEl.className = indicators.num;
  symEl.className = indicators.sym;
  charsEl.textContent = length;
}

passwordInput.addEventListener('input', function () {
  const password = passwordInput.value;
  const score = getPasswordScore(passwordInput.value);
  const strength = getPasswordStrength(score);
  const [lc, uc, num, sym] = [
    hasLowerCase.test(password),
    hasUpperCase.test(password),
    hasNumber.test(password),
    hasSpecial.test(password),
  ];

  updateUI(strength, score, password.length, { lc, uc, num, sym });
});
