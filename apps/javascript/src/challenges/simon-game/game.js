import blue from './sounds/blue.mp3';
import green from './sounds/green.mp3';
import red from './sounds/red.mp3';
import yellow from './sounds/yellow.mp3';
import wrong from './sounds/wrong.mp3';

// Initialize variables
let userClickedPattern = [];
let started = false;
let level = 0;
let buttonColours = ['red', 'blue', 'green', 'yellow'];
const sounds = new Map([
  ['red', new Audio(red)],
  ['blue', new Audio(blue)],
  ['green', new Audio(green)],
  ['yellow', new Audio(yellow)],
  ['wrong', new Audio(wrong)],
]);
let gamePattern = [];

// Add click event listeners to buttons
let buttons = document.querySelectorAll('.btn');
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {
    let userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
  });
}

// Add keypress event listener to start the game
document.addEventListener('keypress', function (event) {
  if (!started) {
    document.getElementById('level-title').textContent = 'Level ' + level;
    nextSequence();
    started = true;
  }
});

// Function to generate the next sequence
function nextSequence() {
  userClickedPattern = [];
  level++;
  document.getElementById('level-title').textContent = 'Level ' + level;
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColor = buttonColours[randomNumber];
  gamePattern.push(randomChosenColor);

  // Simulate button animation
  let buttonElement = document.getElementById(randomChosenColor);
  buttonElement.style.opacity = 0;
  setTimeout(function () {
    buttonElement.style.opacity = 1;
    playSound(randomChosenColor);
  }, 100);
}

// Function to play sound
function playSound(name) {
  sounds.get(name).play();
}

// Function to animate button press
function animatePress(currentColor) {
  let buttonElement = document.getElementById(currentColor);
  buttonElement.classList.add('pressed');
  setTimeout(function () {
    buttonElement.classList.remove('pressed');
  }, 100);
}

// Function to check user's answer
function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] == userClickedPattern[currentLevel]) {
    if (userClickedPattern.length == gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    sounds.get('wrong').play();
    document.body.classList.add('game-over');
    setTimeout(function () {
      document.body.classList.remove('game-over');
    }, 200);
    document.getElementById('level-title').textContent = 'Game Over, Press Any Key to Restart';
    startOver();
  }
}

// Function to restart the game
function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
