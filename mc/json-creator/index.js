const jsonHolder = document.getElementById('json-holder');
const jsonTemplate = document.querySelector('.json-template');
const getJsonTemplate = document.querySelector('.get-json');
const getJSONButton = document.querySelector('.get-json-button');
const outputEl = document.querySelector('output');

class JSONCreator {
  constructor() {
    const rootNode = jsonTemplate.content.cloneNode(true);
    this.container = rootNode.querySelector('.json-container');
    this.valueEl = rootNode.querySelector('.value');
    this.addEl = rootNode.querySelector('.add');
    this.removeEl = rootNode.querySelector('.remove');
    this.arrowEl = rootNode.querySelector('.arrow');
    this.addListeners();
    this.object = {};
  }

  addListeners() {
    this.addEl.addEventListener('click', this.add.bind(this));
    this.removeEl.addEventListener('click', this.remove.bind(this));
    this.arrowEl.addEventListener('click', this.toggle.bind(this));
  }

  add() {
    this.valueEl.style.display = 'none';

    const subItem = document.createElement('div');
    subItem.classList.add('sub-item');
    const expander = new JSONCreator();
    subItem.appendChild(expander.container);

    this.container.appendChild(subItem);
    this.arrowEl.classList.remove('hide');
    this.arrowEl.classList.add('open');
  }

  remove() {
    const subItemEl = this.container.parentElement;
    const parentEl = subItemEl.parentElement;
    subItemEl.remove();

    if (!parentEl.querySelector('.sub-item')) {
      parentEl.querySelector('.value').style.display = 'inline';
      parentEl.querySelector('.arrow').classList.remove('open');
      parentEl.querySelector('.arrow').classList.add('hide');
    }
  }

  toggle() {
    this.arrowEl.classList.toggle('open');
  }

  getJSON(container = this.container) {
    const object = {};

    const keyEl = container.querySelector('.key');
    const valueEl = container.querySelector('.key + .value');

    if (keyEl && keyEl.value) {
      if (valueEl.style.display !== 'none') object[keyEl.value] = valueEl.value;
      else {
        let subItem = container.querySelector('.sub-item');
        const subItems = [subItem];
        while (subItem.nextElementSibling) {
          subItems.push(subItem.nextElementSibling);
          subItem = subItem.nextElementSibling;
        }
        let obj = {};
        subItems.forEach(subItem => {
          obj = { ...obj, ...this.getJSON(subItem) };
        });

        if (Object.keys(obj).length === 0) object[keyEl.value] = null;
        else object[keyEl.value] = obj;
      }
    }
    return object;
  }
}

const expander = new JSONCreator();
jsonHolder.appendChild(expander.container);

getJSONButton.addEventListener('click', () => (outputEl.textContent = JSON.stringify(expander.getJSON(), null, 2)));
