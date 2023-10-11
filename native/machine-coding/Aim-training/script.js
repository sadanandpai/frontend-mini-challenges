// Variables
let score = 0;
let highScore = 0;
let timeLeft = 30;
let timerId;
let level = 1;
let bubbleInterval = 1000;
let gameInProgress = false; // Track if the game is in progress
let bubbleGenerationTimeout; // Store the timeout for bubble generation

// Function to create a bubble
function createBubble() {
  const bubble = document.createElement("div");
  bubble.className = "bubble";

  // Generate random position
  const posX = Math.random() * 500 + 50;
  const posY = Math.random() * 300 + 50;

  bubble.style.top = `${posY}px`;
  bubble.style.left = `${posX}px`;

  // Generate random size and color
  const size = Math.floor(Math.random() * 30) + 20;
  const color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;

  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;
  bubble.style.backgroundColor = color;

  // Event listener to pop the bubble
  bubble.addEventListener("click", function () {
    if (bubble.parentNode) {
      score++;
      document.getElementById("scoreValue").textContent = score;
      bubble.parentNode.removeChild(bubble);
      playPopSound();
    }
  });

  return bubble;
}

// Function to start the game
function startGame() {
  if (gameInProgress) {
    return; // Return if game is already in progress
  }

  const bubblesContainer = document.getElementById("bubbles");
  const timerElement = document.getElementById("timerValue");
  const startButton = document.getElementById("startButton");

  // Clear previous bubbles
  while (bubblesContainer.firstChild) {
    bubblesContainer.firstChild.remove();
  }

  // Reset game state
  score = 0;
  timeLeft = 30;
  level = 1;
  bubbleInterval = 1000;
  document.getElementById("scoreValue").textContent = score;
  document.getElementById("timerValue").textContent = timeLeft;
  gameInProgress = true;

  // Start the timer
  timerId = setInterval(function () {
    timeLeft--;
    timerElement.textContent = timeLeft;

    if (timeLeft === 0) {
      clearInterval(timerId);
      endGame();
    }
  }, 1000);

  // Start generating bubbles
  generateBubble(bubblesContainer);

  // Disable start button during gameplay
  startButton.disabled = true;
}

// Function to generate bubbles
function generateBubble(container) {
  if (!gameInProgress) {
    return; // Return if game is not in progress
  }

  const bubble = createBubble();
  container.appendChild(bubble);

  // Schedule next bubble generation
  bubbleGenerationTimeout = setTimeout(function () {
    generateBubble(container);
  }, bubbleInterval);
}

// Function to end the game
function endGame() {
  gameInProgress = false; // Set gameInProgress to false

  // Clear bubble generation timeout
  clearTimeout(bubbleGenerationTimeout);

  const startButton = document.getElementById("startButton");
  startButton.disabled = false;
  playEndSound();

  // Update high score
  if (score > highScore) {
    highScore = score;
    document.getElementById("highScoreValue").textContent = highScore;
  }

  // Display game over message
  setTimeout(function () {
    alert("Game Over! Your score: " + score);
  }, 100);
}

// Function to play bubble pop sound
function playPopSound() {
  const popSound = document.getElementById("popSound");
  popSound.currentTime = 0;
  popSound.play();
}

// Function to play game end sound
function playEndSound() {
  const endSound = document.getElementById("endSound");
  endSound.currentTime = 0;
  endSound.play();
}

// Event listener for start button
document.getElementById("startButton").addEventListener("click", startGame);