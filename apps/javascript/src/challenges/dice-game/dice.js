import diceImg1 from './images/dice1.png';
import diceImg2 from './images/dice2.png';
import diceImg3 from './images/dice3.png';
import diceImg4 from './images/dice4.png';
import diceImg5 from './images/dice5.png';
import diceImg6 from './images/dice6.png';

const diceImgs = [diceImg1, diceImg2, diceImg3, diceImg4, diceImg5, diceImg6];
const image1 = document.querySelector('.img1');
const image2 = document.querySelector('.img2');
const playBtn = document.querySelector('.play');

function play() {
  const randomnum1 = Math.floor(Math.random() * 6);
  const randomnum2 = Math.floor(Math.random() * 6);
  image1.setAttribute('src', diceImgs[randomnum1]);
  image2.setAttribute('src', diceImgs[randomnum2]);

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
