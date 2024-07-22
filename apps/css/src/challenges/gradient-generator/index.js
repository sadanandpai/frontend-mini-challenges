// Get references to HTML elements
const slider = document.querySelector('.slider');
const leftButton = document.querySelector('.leftButton');
const rightButton = document.querySelector('.rightButton');
const leftButtonSpan = document.querySelector('.leftButton span');
const rightButtonSpan = document.querySelector('.rightButton span');
const leftcolorInput = document.getElementById('leftcolor');
const rightcolorInput = document.getElementById('rightcolor');
const positionInput = document.getElementById('position');
const rotationInput = document.getElementById('rotation');
const randomButton = document.getElementById('random');
const preview = document.getElementById('preview');
const copyButton = document.getElementById('copy');
const fullScreenBtn = document.querySelector('.full-screen');
const closeBtn = document.querySelector('.close');

//initial values
let isDragging = false;
let linearGradientValue;
let rotation = 90;
let randomColor1;
let randomColor2;
let newPositionInPx;
let leftPosition = 0;
let rightPosition = 100;
let sliderWidth = parseInt(slider.getBoundingClientRect().width - 20);

function updateGradient() {
  linearGradientValue = `linear-gradient(${rotation}deg, ${randomColor1} ${leftPosition}%, ${randomColor2} ${rightPosition}%)`;
  preview.style.background = linearGradientValue;
  slider.style.background = linearGradientValue;
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function rgbToHex(r, g, b) {
  const toHex = (number) => {
    const hex = number.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  const redHex = toHex(r);
  const greenHex = toHex(g);
  const blueHex = toHex(b);

  return `#${redHex}${greenHex}${blueHex}`;
}

// Function to convert hex color to RGB
function hexToRgb(hex) {
  // Remove the hash symbol (#) if present
  hex = hex.replace(/^#/, '');

  // Parse the hex color components
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return { r, g, b };
}

function setRandomColors() {
  randomColor1 = getRandomColor();
  randomColor2 = getRandomColor();

  // Set the background colors
  updateGradient();
  leftButtonSpan.style.background = `${randomColor1} ${leftPosition}%`;
  rightButtonSpan.style.background = `${randomColor2} ${rightPosition}%`;

  // Convert randomColor1 and randomColor2 to hex values
  const hexColor1 = rgbToHex(
    parseInt(randomColor1.slice(4, -1).split(', ')[0]),
    parseInt(randomColor1.slice(4, -1).split(', ')[1]),
    parseInt(randomColor1.slice(4, -1).split(', ')[2])
  );

  const hexColor2 = rgbToHex(
    parseInt(randomColor2.slice(4, -1).split(', ')[0]),
    parseInt(randomColor2.slice(4, -1).split(', ')[1]),
    parseInt(randomColor2.slice(4, -1).split(', ')[2])
  );

  leftcolorInput.value = hexColor1;
  rightcolorInput.value = hexColor2;
  rotationInput.value = `${rotation}°`;
}

// create slider
function slide(button, event) {
  isDragging = true;
  const clientX = event.type.startsWith('touch') ? event.touches[0].clientX : event.clientX;
  const initialX = clientX - button.getBoundingClientRect().left;

  sliderWidth = parseInt(slider.getBoundingClientRect().width - 20);

  function onMouseMove(event) {
    if (isDragging) {
      const clientX = event.type.startsWith('touch') ? event.touches[0].clientX : event.clientX;
      const newPosition = parseInt(
        Math.min(sliderWidth, Math.max(0, clientX - slider.getBoundingClientRect().left - initialX))
      );

      if (button === leftButton) {
        leftPosition = parseInt((newPosition / sliderWidth) * 100);
        positionInput.value = `${leftPosition}%`;
      } else if (button === rightButton) {
        rightPosition = parseInt((newPosition / sliderWidth) * 100);
        positionInput.value = `${rightPosition}%`;
      }
      updateGradient();
      button.style.transform = `translate3d(${newPosition}px, -50%, 0px)`;
    }
  }

  function onMouseUp() {
    isDragging = false;
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('touchmove', onMouseMove);
    document.removeEventListener('touchend', onMouseUp);
  }

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
  document.addEventListener('touchmove', onMouseMove);
  document.addEventListener('touchend', onMouseUp);
}

leftButton.addEventListener('mousedown', (event) => {
  event.preventDefault();
  leftButton.classList.add('active');
  rightButton.classList.remove('active');
  slide(leftButton, event);
});

rightButton.addEventListener('mousedown', (event) => {
  event.preventDefault();
  leftButton.classList.remove('active');
  rightButton.classList.add('active');
  slide(rightButton, event);
});

leftButton.addEventListener('touchstart', (event) => {
  event.preventDefault();
  leftButton.classList.add('active');
  rightButton.classList.remove('active');
  slide(leftButton, event);
});

rightButton.addEventListener('touchstart', (event) => {
  event.preventDefault();
  leftButton.classList.remove('active');
  rightButton.classList.add('active');
  slide(rightButton, event);
});

// create gradient from input

leftcolorInput.addEventListener('input', () => {
  const hexValue = leftcolorInput.value;
  if (/^#[0-9A-F]{6}$/i.test(hexValue)) {
    const rgbColor = hexToRgb(hexValue);
    if (rgbColor) {
      randomColor1 = `rgb(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b})`;
      updateGradient();
      leftButtonSpan.style.background = `${randomColor1} ${leftPosition}%`;
    }
  }
});

rightcolorInput.addEventListener('input', () => {
  const hexValue = rightcolorInput.value;
  if (/^#[0-9A-F]{6}$/i.test(hexValue)) {
    const rgbColor = hexToRgb(hexValue);
    if (rgbColor) {
      randomColor2 = `rgb(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b})`;
      updateGradient();
      rightButtonSpan.style.background = `${randomColor2} ${leftPosition}%`;
    }
  }
});

// chhange position
positionInput.addEventListener('change', () => {
  const userInput = parseInt(positionInput.value);
  newPositionInPx = (userInput / 100) * sliderWidth;
  if (!isNaN(userInput) && userInput >= 0 && userInput <= 100) {
    if (leftButton.classList.contains('active')) {
      leftPosition = userInput;
      leftButton.style.transform = `translate3d(${newPositionInPx}px, -50%, 0px)`;
      updateGradient();
    } else if (rightButton.classList.contains('active')) {
      rightPosition = userInput;
      rightButton.style.transform = `translate3d(${newPositionInPx}px, -50%, 0px)`;
      updateGradient();
    } else {
      leftButton.classList.add('active');
      leftPosition = userInput;
      leftButton.style.transform = `translate3d(${newPositionInPx}px, -50%, 0px)`;
      updateGradient();
    }
    positionInput.value = `${userInput}%`;
  }
});

// change on input
rotationInput.addEventListener('change', () => {
  const userInput = parseInt(rotationInput.value);
  if (!isNaN(userInput) && userInput >= 0 && userInput <= 360) {
    rotation = userInput;
    updateGradient();
    rotationInput.value = `${rotation}°`;
  }
});

//generate random gradient on click
randomButton.addEventListener('click', setRandomColors);
copyButton.addEventListener('click', () => {
  document.execCommand('copy');
  alert('CSS copied to clipboard:\n' + linearGradientValue);
});

// to fullscreen
fullScreenBtn.addEventListener('click', () => {
  preview.classList.remove('preview');
  preview.classList.add('full-screen-mode');
  fullScreenBtn.style.display = 'none';
  closeBtn.style.display = 'block';
});

//to close full screen
closeBtn.addEventListener('click', () => {
  preview.classList.add('preview');
  preview.classList.remove('full-screen-mode');
  fullScreenBtn.style.display = 'block';
  closeBtn.style.display = 'none';
});
// right button position
function handleWindowResize() {
  sliderWidth = parseInt(slider.getBoundingClientRect().width - 20);
  rightButton.style.transform = `translate3d(${sliderWidth}px, -50%, 0px)`;
}
window.addEventListener('load', () => {
  handleWindowResize();
  setRandomColors();
});
window.addEventListener('resize', () => {
  handleWindowResize();
});
