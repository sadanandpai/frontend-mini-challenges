// DOM Elements
const form = document.getElementById('form');
const input = document.getElementById('input');
const submitBtn = document.getElementById('submit');
const startGameBtn = document.getElementById('startGame');
const output = document.getElementById('output');
const guessDisplay = document.getElementById('guessDisplay');
const remainingGuessesEl = document.getElementById('remainingGuesses');

// Game state
const MAX_GUESSES = 10;
let guessArray = [];
let computerGuess;
let remainingGuesses = MAX_GUESSES;

// Initialize the game
function initGame() {
  // Reset game state
  guessArray = [];
  remainingGuesses = MAX_GUESSES;
  computerGuess = Math.floor(Math.random() * 101); // 0-100 inclusive

  // Reset UI
  output.textContent = '';
  output.className = 'feedback-message';
  guessDisplay.textContent = '';
  remainingGuessesEl.textContent = remainingGuesses;
  input.value = '';
  input.setAttribute('aria-invalid', 'false');

  // Update button states
  input.disabled = false;
  submitBtn.disabled = false;
  startGameBtn.disabled = true;

  // Set focus
  input.focus();

  // Announce new game to screen readers
  announceToScreenReader("New game started. I'm thinking of a number between 0 and 100.");
}

// Handle game over
function finishGame(isWinner) {
  let message;

  if (isWinner) {
    message = `You got it in ${guessArray.length} ${guessArray.length === 1 ? 'guess' : 'guesses'}! The number was ${computerGuess}.`;
    output.className = 'feedback-message success';
  } else {
    message = `Game over! The number was ${computerGuess}.`;
    output.className = 'feedback-message error';
    input.classList.add('shake');
    setTimeout(() => input.classList.remove('shake'), 300);
  }

  output.textContent = message;
  input.disabled = true;
  submitBtn.disabled = true;
  startGameBtn.disabled = false;
  startGameBtn.focus();

  // Announce result to screen readers
  announceToScreenReader(isWinner ? 'Congratulations! ' + message : 'Game over. ' + message);
}

// Handle form submission
function handleSubmit(e) {
  e.preventDefault();

  // Validate input
  const guess = parseInt(input.value.trim(), 10);

  if (isNaN(guess) || guess < 0 || guess > 100) {
    input.setAttribute('aria-invalid', 'true');
    announceToScreenReader('Please enter a valid number between 0 and 100.');
    input.focus();
    return;
  }

  // Add to guesses and update display
  guessArray.push(guess);
  remainingGuesses--;
  remainingGuessesEl.textContent = remainingGuesses;
  guessDisplay.textContent = `Your guesses: ${guessArray.join(', ')}`;

  // Check guess
  if (guess === computerGuess) {
    finishGame(true);
    return;
  }

  // Provide feedback
  let feedback;
  if (guess > computerGuess) {
    feedback = `${guess} is too high!`;
  } else {
    feedback = `${guess} is too low!`;
  }

  output.textContent = feedback;
  output.className = 'feedback-message';
  input.value = '';
  input.focus();

  // Announce feedback to screen readers
  announceToScreenReader(
    feedback + ` ${remainingGuesses} ${remainingGuesses === 1 ? 'guess' : 'guesses'} remaining.`
  );

  // Check if game over
  if (remainingGuesses <= 0) {
    finishGame(false);
  }
}

// Utility function for screen reader announcements
function announceToScreenReader(message, priority = 'polite') {
  const liveRegion = document.createElement('div');
  liveRegion.setAttribute('aria-live', priority);
  liveRegion.className = 'sr-only';
  liveRegion.textContent = message;

  document.body.appendChild(liveRegion);

  // Remove the live region after a short delay
  setTimeout(() => {
    document.body.removeChild(liveRegion);
  }, 1000);
}

// Event Listeners
form.addEventListener('submit', handleSubmit);
startGameBtn.addEventListener('click', initGame);

// Handle keyboard navigation
input.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    input.value = '';
    input.focus();
  }
});

// Set up keyboard shortcuts
document.addEventListener('keydown', (e) => {
  // Focus the input when '/' is pressed
  if (e.key === '/' && e.target !== input) {
    e.preventDefault();
    input.focus();
  }

  // Start a new game with 'n' key
  if (e.key === 'n' && !startGameBtn.disabled) {
    initGame();
  }
});

initGame();
