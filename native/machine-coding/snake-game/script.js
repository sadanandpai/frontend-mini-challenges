/// Snake game by Kei-K

const gameScore = document.querySelector(".game-score b");
const gameHighestScore = document.querySelector(".game-highestScore b");
const modalGameScore = document.querySelector(".modal-game-score b");
const modalGameHighestScore = document.querySelector(
  ".modal-game-highestScore b"
);
const gameContainer = document.querySelector(".main-game");
const arrowControls = document.querySelectorAll(".arrow");
const playAgain = document.querySelector(".btn");
const modalContainer = document.querySelector(".modal-container");
// init the game state
let lose = false,
  currentScore = 0,
  speed = 90,
  unSubscribeInterval,
  foodX = 0,
  foodY = 0,
  snakeX = 9,
  snakeY = 7,
  snakeBody = [],
  directionX = 0,
  directionY = 0;

let highestScore = JSON.parse(localStorage.getItem("score")) || 0;
gameHighestScore.innerText = highestScore;
gameScore.innerText = 0;
//
function lostTheGame() {
  modalContainer.classList.add("show-modal");
  modalGameScore.innerText = currentScore;
  modalGameHighestScore.innerText = highestScore;
  clearInterval(unSubscribeInterval);
}

// update the food position randomly
function updateFoodPosition() {
  foodX = Math.floor(Math.random() * 35 + 1);
  foodY = Math.floor(Math.random() * 35 + 1);
}

// check the direction base on keys
function checkDirection(e) {
  if (e.key === "ArrowUp" && directionY != 1) {
    directionX = 0;
    directionY = -1;
  } else if (e.key === "ArrowDown" && directionY !== -1) {
    directionX = 0;
    directionY = 1;
  } else if (e.key === "ArrowLeft" && directionX !== 1) {
    directionX = -1;
    directionY = 0;
  } else if (e.key === "ArrowRight" && directionX !== -1) {
    directionX = 1;
    directionY = 0;
  }
}

function updateGameState() {}

// add event to keys button for touch
arrowControls.forEach((control) => {
  control.addEventListener("click", (e) => {
    checkDirection(e.target.dataset);
  });
});

function mainGame() {
  // if lose is true then game lose
  if (lose) lostTheGame();

  let ele = `<div class="food" style="grid-area: ${foodX} / ${foodY} ;"></div>`;

  // if snake eat the food
  if (snakeX === foodY && snakeY === foodX) {
    updateFoodPosition();
    currentScore += 1;
    snakeBody.push([foodY, foodX]);
    highestScore = currentScore > highestScore ? currentScore : highestScore;
    gameScore.innerText = currentScore;
    gameHighestScore.innerText = highestScore;
    localStorage.setItem("score", highestScore);
  }

  snakeX += directionX;
  snakeY += directionY;

  // move snake forward
  for (let i = snakeBody.length - 1; i > 0; i--) {
    snakeBody[i] = snakeBody[i - 1];
  }

  // snake head
  snakeBody[0] = [snakeX, snakeY];

  // check snake hit the margin
  if (snakeX < 1 || snakeX >= 36 || snakeY < 1 || snakeY >= 36) {
    return (lose = true);
  }

  for (let i = 0; i < snakeBody.length; i++) {
    ele += `<div class="snake" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]} ;"></div>`;
    //check snake hit by itself
    if (
      i !== 0 &&
      snakeBody[0][0] === snakeBody[i][0] &&
      snakeBody[0][1] === snakeBody[i][1]
    ) {
      return (lose = true);
    }
  }

  gameContainer.innerHTML = ele;
}

// reset the game state
function resetGameState() {
  lose = false;
  currentScore = 0;
  speed = 90;
  unSubscribeInterval;
  foodX = 0;
  foodY = 0;
  snakeX = 9;
  snakeY = 7;
  snakeBody = [];
  directionX = 0;
  directionY = 0;
  gameScore.innerText = currentScore;
}

function main() {
  updateFoodPosition();
  unSubscribeInterval = setInterval(mainGame, speed);
  document.addEventListener("keyup", checkDirection);
}

main();

playAgain.addEventListener("click", () => {
  modalContainer.classList.remove("show-modal");
  resetGameState();
  main();
});
