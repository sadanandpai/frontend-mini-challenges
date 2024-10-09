const showButton = document.getElementById('showDialog');
const dialogPopup = document.getElementById('dialogPopup');
const closeButtons = document.querySelectorAll('.closeDialog');

// checkbox elements
const closeOnOutsideClick = document.getElementById('closeOnOutsideClick');
const closeOnEscape = document.getElementById('closeOnEscape');
const hasCloseButton = document.getElementById('hasCloseButton');
const hasBackdrop = document.getElementById('hasBackdrop');

const closeIcon = document.getElementById('closeIcon');

showButton.addEventListener('click', () => {
  dialogPopup.showModal();
});

closeButtons.forEach((event) =>
  event.addEventListener('click', () => {
    dialogPopup.close();
  })
);

// closeOnOutsideClick
checkCloseOnOutside();
function checkCloseOnOutside() {
  dialogPopup.addEventListener('click', closeOnOutsideClickListener);
}
function closeOnOutsideClickListener(event) {
  if (event.target.nodeName === 'DIALOG') {
    dialogPopup.close();
  }
}
closeOnOutsideClick.addEventListener('click', () => {
  if (closeOnOutsideClick.checked) {
    checkCloseOnOutside();
  } else {
    dialogPopup.removeEventListener('click', closeOnOutsideClickListener);
  }
});

// closeOnEscape
checkCloseOnEscape();
function checkCloseOnEscape() {
  dialogPopup.removeEventListener('keydown', closeOnEscapeListener);
}
function closeOnEscapeListener(event) {
  if (event.key === 'Escape') {
    event.preventDefault();
  }
}
closeOnEscape.addEventListener('click', () => {
  if (closeOnEscape.checked) {
    checkCloseOnEscape();
  } else {
    dialogPopup.addEventListener('keydown', closeOnEscapeListener);
  }
});

// hasCloseButton
hasCloseButton.addEventListener('click', () => {
  if (hasCloseButton.checked) {
    closeIcon.style.display = 'block';
  } else {
    closeIcon.style.display = 'none';
  }
});

// hasBackdrop
hasBackdrop.addEventListener('click', () => {
  if (hasBackdrop.checked) {
    dialogPopup.style.setProperty('--backdrop-opacity', 0.5);
  } else {
    dialogPopup.style.setProperty('--backdrop-opacity', 0);
  }
});
