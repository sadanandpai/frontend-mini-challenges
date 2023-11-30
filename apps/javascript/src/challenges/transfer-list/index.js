const leftItems = ['JS', 'HTML', 'CSS', 'TS'];
const rightItems = ['React', 'Angular', 'Vue', 'Svelte'];
const leftSectionEl = document.querySelector('.left-section');
const rightSectionEl = document.querySelector('.right-section');
const moveAllLeftButton = document.querySelector('.move-all-left');
const moveLeftButton = document.querySelector('.move-left');
const moveRightButton = document.querySelector('.move-right');
const moveAllRightButton = document.querySelector('.move-all-right');

class TransferList {
  constructor({
    leftSectionEl,
    rightSectionEl,
    moveAllLeftButton,
    moveLeftButton,
    moveRightButton,
    moveAllRightButton,
    leftItems,
    rightItems,
  }) {
    this.leftSectionEl = leftSectionEl;
    this.rightSectionEl = rightSectionEl;
    this.moveAllLeftButton = moveAllLeftButton;
    this.moveLeftButton = moveLeftButton;
    this.moveRightButton = moveRightButton;
    this.moveAllRightButton = moveAllRightButton;
    this.leftItems = leftItems;
    this.rightItems = rightItems;

    this.populate();
    this.setState();
    this.addEventListeners();
  }

  populate() {
    this.leftItems.forEach(item => this.leftSectionEl.appendChild(this.createElement(item)));
    this.rightItems.forEach(item => this.rightSectionEl.appendChild(this.createElement(item)));
  }

  createElement(item) {
    const divEl = document.createElement('div');
    const checkBoxEl = document.createElement('input');
    checkBoxEl.type = 'checkbox';
    const spanEl = document.createElement('span');
    spanEl.textContent = item;
    divEl.appendChild(checkBoxEl);
    divEl.appendChild(spanEl);
    return divEl;
  }

  setState() {
    this.moveAllLeftButton.disabled = !this.rightSectionEl.childElementCount;
    this.moveLeftButton.disabled = !this.rightSectionEl.querySelector('input:checked');
    this.moveRightButton.disabled = !this.leftSectionEl.querySelector('input:checked');
    this.moveAllRightButton.disabled = !this.leftSectionEl.childElementCount;
  }

  addEventListeners() {
    this.leftSectionEl.addEventListener('click', this.setState.bind(this));
    this.rightSectionEl.addEventListener('click', this.setState.bind(this));

    this.moveAllLeftButton.addEventListener('click', () => {
      this.moveAllLeft();
      this.setState();
    });

    this.moveLeftButton.addEventListener('click', () => {
      this.moveLeft();
      this.setState();
    });

    this.moveRightButton.addEventListener('click', () => {
      this.moveRight();
      this.setState();
    });

    this.moveAllRightButton.addEventListener('click', () => {
      this.moveAllRight();
      this.setState();
    });
  }

  moveAllLeft() {
    const items = this.rightSectionEl.querySelectorAll('div');
    items.forEach(item => {
      const divEl = item;
      this.leftSectionEl.appendChild(divEl);
    });
  }

  moveLeft() {
    const checkedItems = this.rightSectionEl.querySelectorAll('input:checked');
    checkedItems.forEach(item => {
      const divEl = item.parentElement;
      item.checked = false;
      this.leftSectionEl.appendChild(divEl);
    });
  }

  moveRight() {
    const checkedItems = this.leftSectionEl.querySelectorAll('input:checked');
    checkedItems.forEach(item => {
      const divEl = item.parentElement;
      item.checked = false;
      this.rightSectionEl.appendChild(divEl);
    });
  }

  moveAllRight() {
    const items = this.leftSectionEl.querySelectorAll('div');
    items.forEach(item => {
      const divEl = item;
      this.rightSectionEl.appendChild(divEl);
    });
  }
}

const transferList = new TransferList({
  leftSectionEl,
  rightSectionEl,
  moveAllLeftButton,
  moveLeftButton,
  moveRightButton,
  moveAllRightButton,
  leftItems,
  rightItems,
});
