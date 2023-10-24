const choices = ['rock', 'paper', 'scissors'];

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

document.querySelectorAll('.choice').forEach((element) => {
  element.addEventListener('click', () => {
    const playerChoice = element.id;
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    const computerChoiceImage = document.getElementById('computer-choice');

    // Show the computer's choice element
    document.getElementById('computer').style.display = 'block';

    // Update the computer's choice image
    computerChoiceImage.src = `${computerChoice}.png`;

    const result = getResult(playerChoice, computerChoice);
    displayResult(result);
  });
});
