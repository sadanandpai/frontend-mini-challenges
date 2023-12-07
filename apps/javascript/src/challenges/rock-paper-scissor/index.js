import rock from './images/rock.png';
import paper from './images/paper.png';
import scissors from './images/scissors.png';

const choices = ['rock', 'paper', 'scissors'];
const choicesImgs = [rock, paper, scissors];
const computerChoiceImg = document.getElementById('computer-choice');
const player = document.querySelector('#player');

function getResult(player, computer) {
  if (player === computer) return "It's a draw!";
  if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'scissors' && computer === 'paper') ||
    (player === 'paper' && computer === 'rock')
  ) {
    return 'You win!';
  }
  return 'Computer wins!';
}

function displayResult(result) {
  const resultElement = document.getElementById('result');
  resultElement.textContent = result; // Set the result text
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
