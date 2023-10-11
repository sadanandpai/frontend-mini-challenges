const showButton = document.getElementById('showDialog');
const dialogPopup = document.getElementById('dialogPopup');
const closeButton = document.getElementById('closeDialog')

showButton.addEventListener('click', () => {
  dialogPopup.showModal();
});

closeButton.addEventListener('click', () => {
  dialogPopup.close('');
});
