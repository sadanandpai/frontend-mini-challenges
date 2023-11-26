let randomnum1 = Math.floor(Math.random() * 6) + 1;
const randomimg = 'dice' + randomnum1 + '.png';
const imgsource1 = 'images/' + randomimg;
const image1 = document.querySelectorAll('img')[0]; //.setAttribute('src', imgsource1);
let randomnum2 = Math.floor(Math.random() * 6) + 1;
const imgsource2 = 'images/' + 'dice' + randomnum2 + '.png';
const image2 = document.querySelectorAll('img')[1];
const button = document.querySelector('button');
image1.setAttribute('src', imgsource1);
image2.setAttribute('src', imgsource2);

if (randomnum1 > randomnum2) {
  document.querySelector('h1').innerHTML = 'Player1 Wins!';
  document.getElementById("result").innerHTML = 'Player1 Wins!';
} else if (randomnum1 < randomnum2) {
  document.querySelector('h1').innerHTML = 'Player2 Wins!';
  document.getElementById("result").innerHTML = 'Player2 Wins!';
} else {
  document.querySelector('h1').innerHTML = 'DRAW!';
  document.getElementById("result").innerHTML = 'DRAW!';
}

button.addEventListener('click', () => {
  randomnum1 = Math.floor(Math.random() * 6) + 1 ;
  randomnum2 = Math.floor(Math.random() * 6) + 1 ;
  image1.setAttribute('src', 'images/' + 'dice' + randomnum1 + '.png');
  image2.setAttribute('src', 'images/' + 'dice' + randomnum2 + '.png');

  if (randomnum1 > randomnum2) {
    document.querySelector('h1').innerHTML = 'Player1 Wins!';
    document.getElementById("result").innerHTML = 'Player1 Wins!';
  } else if (randomnum1 < randomnum2) {
    document.querySelector('h1').innerHTML = 'Player2 Wins!';
    document.getElementById("result").innerHTML = 'Player2 Wins!';
  } else {
    document.querySelector('h1').innerHTML = 'DRAW!';
    document.getElementById("result").innerHTML = 'DRAW!';
  }
});