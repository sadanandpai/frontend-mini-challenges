const form = document.getElementById('form');
const input = document.getElementById('input');
const submit = document.getElementById('submit');
const output = document.getElementById('output');
const guessDisplay = document.getElementById('guessDisplay');
const startGame = document.getElementById('startGame');

let guessArray = [];
let computerGuess;

function onStartGame() {
  output.textContent = '';
  guessDisplay.textContent = '';
  guessArray = [];
  computerGuess = Math.round(Math.random() * 100);

  input.disabled = false;
  submit.disabled = false;
  startGame.disabled = true;
  input.focus();
}

function onFinishGame(message) {
  output.textContent = message;
  input.disabled = true;
  submit.disabled = true;
  startGame.disabled = false;
  startGame.focus();
}

function onInput(e) {
  e.preventDefault();
  const guess = +input.value;
  input.value = '';
  guessArray.push(guess);
  guessDisplay.textContent = `Your guesses: ${guessArray.join(', ')}`;

  if (guess > computerGuess) {
    output.textContent = 'Too high!';
  } else if (guess < computerGuess) {
    output.textContent = 'Too low!';
  } else {
    onFinishGame('You got it! Congrats');
    return;
  }
  input.focus();

  if (guessArray.length >= 10) {
    onFinishGame('You lost! The number was ' + computerGuess);
  }
}

form.addEventListener('submit', onInput);
startGame.addEventListener('click', onStartGame);
onStartGame();
