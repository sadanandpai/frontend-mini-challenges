const gridContainer = document.getElementById('grid');
for (let i = 1; i <= 9; i++) {
  const button = document.createElement('div');
  button.className = 'grid-item';
  button.textContent = i;
  button.dataset.value = i;
  gridContainer.appendChild(button);
}

document.getElementById('colorButton').addEventListener('click', () => {
  const inputValue = parseInt(document.getElementById('inputBox').value, 10);
  if (inputValue >= 1 && inputValue <= 9) {
    document.querySelectorAll('.grid-item').forEach((button) => {
      if (parseInt(button.dataset.value, 10) === inputValue) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
  } else {
    alert('Please enter a number between 1 and 9.');
  }
});
