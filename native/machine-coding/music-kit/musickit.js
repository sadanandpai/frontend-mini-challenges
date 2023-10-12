const sounds = new Map([
  ['w', 'sounds/tom-1.mp3'],
  ['a', 'sounds/tom-2.mp3'],
  ['s', 'sounds/tom-3.mp3'],
  ['d', 'sounds/tom-4.mp3'],
  ['j', 'sounds/snare.mp3'],
  ['k', 'sounds/crash.mp3'],
  ['l', 'sounds/kick-bass.mp3'],
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
