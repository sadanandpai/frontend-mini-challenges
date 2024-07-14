import rock from './images/rock.png';
import paper from './images/paper.png';
import scissors from './images/scissors.png';

const choices = ['rock', 'paper', 'scissors'];
const choicesImgs = [rock, paper, scissors];
const computerChoiceImg = document.getElementById('computer-choice');
const player = document.querySelector('#player');
const resetBtn = document.querySelector('#btnReset');

let playerScore = 0;
let computerScore = 0;

function getResult(player, computer) {
  if (player === computer) return "It's a draw!";
  if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'scissors' && computer === 'paper') ||
    (player === 'paper' && computer === 'rock')
  ) {
    playerScore++;
    return 'You win!';
  }
  computerScore++;
  return 'Computer wins!';
}

function displayResult(result) {
  const resultElement = document.getElementById('result');
  resultElement.textContent = result; // Set the result text
  // Set score
  document.getElementById('scoreboard').style.display = 'grid';
  const playerScoreElement = document.getElementById('playerScore');
  playerScoreElement.textContent = playerScore;
  const computerScoreElement = document.getElementById('computerScore');
  computerScoreElement.textContent = computerScore;
}

player.addEventListener('click', (event) => {
  if (event.target.className.includes('choice')) {
    const playerChoice = event.target.id;
    const randomChoice = Math.floor(Math.random() * 3);

    // Show the computer's choice
    document.getElementById('computer').style.display = 'block';
    computerChoiceImg.src = choicesImgs[randomChoice];

    const result = getResult(playerChoice, choices[randomChoice]);
    displayResult(result);
  }
});

// reset score
resetBtn.addEventListener('click', (event) => {
  playerScore = 0;
  computerScore = 0;
  displayResult('Choose your weapon!');
  document.getElementById('computer').style.display = 'none';
  document.getElementById('scoreboard').style.display = 'none';
});
