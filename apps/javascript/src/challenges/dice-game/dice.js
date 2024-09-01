const container = document.querySelector('.dice-container');
const playBtn = document.querySelector('.play');
const diceImg1 = document.getElementById('dice1');
const diceImg2 = document.getElementById('dice2');
const diceImg3 = document.getElementById('dice3');
const diceImg4 = document.getElementById('dice4');
const diceImg5 = document.getElementById('dice5');
const diceImg6 = document.getElementById('dice6');

let oldNumbers = [2, 3];
let newNumbers = [];
const diceImgs = [diceImg1, diceImg2, diceImg3, diceImg4, diceImg5, diceImg6];

// Display initial dice
diceImgs[oldNumbers[0]].style.display = 'block';
diceImgs[oldNumbers[1]].style.display = 'block';

function displayNew() {
  // Hide old dice
  diceImgs.forEach((dice) => (dice.style.display = 'none'));

  // Remove the duplicate element which was added when both numbers are equal
  const duplicate = container.lastElementChild.classList.contains('duplicate');
  if (duplicate) {
    const lastChild = container.lastElementChild;
    container.removeChild(lastChild);
  }

  // Update old numbers with new numbers
  oldNumbers = [...newNumbers];

  // Add a new duplicate element if both numbers are equal
  if (oldNumbers[0] >= 0 && oldNumbers[1] >= 0 && oldNumbers[0] === oldNumbers[1]) {
    const clone = diceImgs[oldNumbers[0]].cloneNode(true);
    clone.style.display = 'block';
    clone.classList.add('duplicate');

    container.appendChild(clone);
    diceImgs[oldNumbers[0]].style.display = 'block';
  } else {
    // Display new dice
    if (oldNumbers[0] !== undefined) diceImgs[oldNumbers[0]].style.display = 'block';
    if (oldNumbers[1] !== undefined) diceImgs[oldNumbers[1]].style.display = 'block';
  }

  // Clear new numbers
  newNumbers = [];
}

function play() {
  const randomnum1 = Math.floor(Math.random() * 6);
  const randomnum2 = Math.floor(Math.random() * 6);

  // Reverse the dices to show correct pattern when num1 is greater than num2
  if (randomnum1 > randomnum2) {
    container.style.flexDirection = 'row-reverse';
  } else {
    container.style.flexDirection = 'row';
  }

  newNumbers.push(randomnum1, randomnum2);

  displayNew();
  showResult(randomnum1, randomnum2);
}

function showResult(randomnum1, randomnum2) {
  if (randomnum1 > randomnum2) {
    document.getElementById('result').innerHTML = 'Player1 Wins!';
  } else if (randomnum1 < randomnum2) {
    document.getElementById('result').innerHTML = 'Player2 Wins!';
  } else {
    document.getElementById('result').innerHTML = 'DRAW!';
  }
}

playBtn.addEventListener('click', play);
play();
