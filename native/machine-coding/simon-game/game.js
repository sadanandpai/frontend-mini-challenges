// Initialize variables
let userClickedPattern = [];
let started = false;
let level = 0;
let buttonColours = ['red', 'blue', 'green', 'yellow'];
let gamePattern = [];

// Add click event listeners to buttons
let buttons = document.querySelectorAll('.btn');
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {
    let userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
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
  console.log(randomNumber);

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
  let audio = new Audio('sounds/' + name + '.mp3');
  audio.play();
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
    console.log('success');
    if (userClickedPattern.length == gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    let audio = new Audio('wrong.mp3');
    audio.play();
    document.body.classList.add('game-over');
    setTimeout(function () {
      document.body.classList.remove('game-over');
    }, 200);
    document.getElementById('level-title').textContent = 'Game Over, Press Any Key to Restart';
    startOver();
    console.log('wrong');
  }
}

// Function to restart the game
function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
