// Get references to HTML elements
const slider = document.querySelector('.slider');
const leftButton = document.querySelector('.leftButton');
const rightButton = document.querySelector('.rightButton');
const colorInput = document.getElementById('color');
const positionInput = document.getElementById('position');
const rotationInput = document.getElementById('rotation');
const typeInput = document.getElementById('type');
const randomButton = document.getElementById('random');
const preview = document.querySelector('.preview');



let isDragging = false

function slide(button, event) {
  isDragging = true
  const initialX = event.clientX - button.getBoundingClientRect().left;
  function onMouseMove(event) {
    if (isDragging) {
      const newPosition = Math.min(428, Math.max(0, event.clientX - slider.getBoundingClientRect().left - initialX));
      button.style.transform = `translate3d(${newPosition}px, -50%, 0px)`;
    }
  }
  function onMouseUp() {
    isDragging = false;
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  }

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
}

leftButton.addEventListener('mousedown', (event) => {
  event.preventDefault();
  leftButton.classList.add('active')
  rightButton.classList.remove('active')
  slide(leftButton, event)
});


rightButton.addEventListener('mousedown', (event) => {
  event.preventDefault();
  leftButton.classList.remove('active')
  rightButton.classList.add('active')
  slide(rightButton, event)
});









