export class VirtualKeyboard {
  #rowZeroLetters = '1234567890'.split('');
  #rowOneLetters = 'qwertyuiop'.split('');
  #rowTwoLetters = 'asdfghjkl'.split('');
  #rowThreeLetters = 'zxcvbnm'.split('');
  #keyElementMap = new Map();

  constructor(el, callback) {
    this.el = el;
    this.callback = callback;
    this.populateKeys();
    this.addKeyListener();
    this.addKeyboardListener();
  }

  populateKeys() {
    const rows = [this.#rowZeroLetters, this.#rowOneLetters, this.#rowTwoLetters, this.#rowThreeLetters];
    rows.forEach(row => {
      const rowEl = document.createElement('div');
      rowEl.classList.add('row');
      row.forEach(letter => {
        const keyEl = document.createElement('button');
        keyEl.classList.add('key');
        keyEl.textContent = letter;
        rowEl.appendChild(keyEl);
        this.#keyElementMap.set(letter, keyEl);
      });
      this.el.appendChild(rowEl);
    });
  }

  addKeyListener() {
    this.el.addEventListener('click', e => {
      if (e.target.classList.contains('key')) {
        const key = e.target;
        key.classList.add('active');
        setTimeout(() => key.classList.remove('active'), 100);

        this.callback(key.textContent);
      }
    });
  }

  addKeyboardListener() {
    document.addEventListener('keydown', e => {
      let key = e.key;
      this.#keyElementMap.get(key.toLowerCase())?.click();
    });
  }
}
