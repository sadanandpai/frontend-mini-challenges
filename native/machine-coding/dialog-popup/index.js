const openDialogButtons = document.querySelectorAll('[data-dialog-target]');
const closeDialogButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openDialogButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const dialog = document.querySelector(button.dataset.dialogTarget);
    openDialog(dialog);
  });
});

closeDialogButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const dialog = button.closest('.dialog');
    closeDialog(dialog);
  });
});

overlay.addEventListener('click', () => {
  const dialogs = document.querySelectorAll('.dialog.active');
  dialogs.forEach((dialog) => {
    closeDialog(dialog);
  });
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

function changeTheme() {
  const theme = document.body.classList;
  if (theme.value) {
    theme.remove('dark-theme');
  } else {
    theme.add('dark-theme');
  }
}
