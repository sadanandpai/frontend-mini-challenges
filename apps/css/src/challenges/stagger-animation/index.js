const itemsEl = document.querySelector('#items');
const staggerEl = document.querySelector('#stagger');
const staggerWrapperEl = document.querySelector('.stagger-wrapper');

function createStaggerItem(count = 1) {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < count; i++) {
    const item = document.createElement('div');
    item.classList.add('stagger-item');
    item.style.setProperty('--count', i);
    fragment.appendChild(item);
  }

  return fragment;
}

function animate() {
  console.log('animate');

  staggerWrapperEl.innerHTML = '';
  staggerWrapperEl.append(createStaggerItem(itemsEl.value));
  staggerWrapperEl.style.setProperty('--stagger', staggerEl.value);
}

staggerEl.addEventListener('input', animate);
itemsEl.addEventListener('input', animate);

// initial render
staggerWrapperEl.append(createStaggerItem(itemsEl.value));
