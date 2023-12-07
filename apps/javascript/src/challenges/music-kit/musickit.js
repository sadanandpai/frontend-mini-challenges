import tom1 from './sounds/tom-1.mp3';
import tom2 from './sounds/tom-2.mp3';
import tom3 from './sounds/tom-3.mp3';
import tom4 from './sounds/tom-4.mp3';
import snare from './sounds/snare.mp3';
import crash from './sounds/crash.mp3';
import kick from './sounds/kick-bass.mp3';

const sounds = new Map([
  ['w', tom1],
  ['a', tom2],
  ['s', tom3],
  ['d', tom4],
  ['j', snare],
  ['k', crash],
  ['l', kick],
]);

const numberOfDrumButtons = document.querySelectorAll('.drum').length;

for (let i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll('.drum')[i].addEventListener('click', function () {
    const buttonInnerHTML = this.textContent;
    makeSound(buttonInnerHTML);
    highlightPressedButton(buttonInnerHTML);
  });
}

document.addEventListener('keypress', function (event) {
  makeSound(event.key);
  highlightPressedButton(event.key);
});

function makeSound(key) {
  const audio = new Audio(sounds.get(key));
  audio.play();
}

function highlightPressedButton(currentKey) {
  const pressedButton = document.querySelector('.pressed');
  if (pressedButton) {
    pressedButton.classList.remove('pressed');
  }

  const activeButton = document.querySelector('.' + currentKey);
  activeButton?.classList.add('pressed');
}
