const userInput = document.getElementById('userInput');
const chipTemplate = document.getElementById('chipTemplate');
const chipsDisplay = document.querySelector('.chips-display');
const form = document.querySelector('form');

class Chip {
  constructor(name = '') {
    const chip = chipTemplate.content.cloneNode(true);
    this.chip = chip.querySelector('.chip');
    this.chipName = this.chip.querySelector('.chip-name');
    this.chip.querySelector('.remove').addEventListener('click', this.onRemove);
    chipsDisplay.appendChild(this.chip);
    this.setName(name);
  }

  setName(name) {
    this.chipName.textContent = name;
    name === '' ? (this.chip.style.display = 'none') : (this.chip.style.display = 'inherit');
  }

  finalizeName() {
    this.chip.classList.add('finalized');
  }

  onRemove(e) {
    e.target.parentElement.remove();
  }
}

let chip = new Chip();

userInput.addEventListener('input', e => {
  chip.setName(e.target.value.trim());
});

form.addEventListener('submit', e => {
  userInput.value = '';
  chip.finalizeName();
  chip = new Chip();
  e.preventDefault();
});
