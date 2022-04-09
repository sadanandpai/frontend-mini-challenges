export function createElement(type, properties) {
  const element = document.createElement(type);

  for (let key in properties) {
    element.setAttribute(key, properties[key]);
  }

  return element;
}

export function createElements(count, fn, start = 0) {
  const fragment = document.createDocumentFragment();
  for (let i = start; i < count + start; i++) {
    fragment.appendChild(fn(i));
  }
  return fragment;
}
