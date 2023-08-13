const openDialogButton = document.querySelector('[data-dialog-target]');
const closeDialogButton = document.querySelector('[data-close-button]');
const overlay = document.getElementById('overlay');

openDialogButton.addEventListener('click', () => {
  const dialog = document.querySelector(openDialogButton.dataset.dialogTarget);
  openDialog(dialog);
});

closeDialogButton.addEventListener('click', () => {
  const dialog = closeDialogButton.closest('.dialog');
  closeDialog(dialog);
});

overlay.addEventListener('click', () => {
  const dialog = document.querySelector('.dialog.active');
  closeDialog(dialog);
});

function openDialog(dialog) {
  if (dialog == null) return;
  dialog.classList.add('active');
  overlay.classList.add('active');
}

function closeDialog(dialog) {
  if (dialog == null) return;
  dialog.classList.remove('active');
  overlay.classList.remove('active');
}
