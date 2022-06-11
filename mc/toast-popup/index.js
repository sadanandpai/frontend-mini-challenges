const horizontalPositionEl = document.getElementById('horizontal-position');
const verticalPositionEl = document.getElementById('vertical-position');
const toastTypeEl = document.getElementById('type');
const toastMessageEl = document.getElementById('message');
const showToastButtonEl = document.getElementById('show-toast');
const durationEl = document.getElementById('duration');

const leftTopContainer = document.querySelector('.tc-left-top');
const leftBottomContainer = document.querySelector('.tc-left-bottom');
const rightTopContainer = document.querySelector('.tc-right-top');
const rightBottomContainer = document.querySelector('.tc-right-bottom');
const toastTemplate = document.getElementById('toast-template');

toastMessageEl.addEventListener('input', handleShowToastButton);
showToastButtonEl.addEventListener('click', displayToast);

function handleShowToastButton() {
  showToastButtonEl.disabled = toastMessageEl.value.length === 0;
}

function displayToast() {
  const message = toastMessageEl.value;
  const type = toastTypeEl.value;
  const horizontalPosition = horizontalPositionEl.value;
  const verticalPosition = verticalPositionEl.value;
  const duration = +durationEl.value * 1000;
  showToast(message, type, duration, horizontalPosition, verticalPosition);
}

function showToast(message, type, duration, horizontalPosition, verticalPosition) {
  if (horizontalPosition === 'left') {
    if (verticalPosition === 'top') {
      leftTopContainer.prepend(createToast(message, type, duration, horizontalPosition));
    } else {
      leftBottomContainer.append(createToast(message, type, duration, horizontalPosition));
    }
  } else {
    if (verticalPosition === 'top') {
      rightTopContainer.prepend(createToast(message, type, duration, horizontalPosition));
    } else {
      rightBottomContainer.append(createToast(message, type, duration, horizontalPosition));
    }
  }
}

function createToast(message, type, duration, horizontalPosition) {
  const toast = toastTemplate.content.cloneNode(true);
  toast.querySelector('.toast-message').textContent = message;
  toast.querySelector('.toast').classList.add(type);
  toast.querySelector('.remove').addEventListener('click', removeToast);
  const toastEl = toast.querySelector('.toast');

  setTimeout(removeToast, duration);

  async function removeToast() {
    toastEl.classList.add(horizontalPosition === 'left' ? 'fade-out-left' : 'fade-out-right');
    await new Promise(resolve => setTimeout(resolve, 100));
    toastEl.remove();
  }

  return toast;
}
