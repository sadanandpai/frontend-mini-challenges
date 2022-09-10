export const create1DFragment = (m, { type = 'div', ...properties }) => {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < m; i++) {
    const element = createElement(type, { ...properties, dataset: { x: i } });
    fragment.appendChild(element);
  }

  return fragment;
};

export const create2DFragment = (m, n, { type = 'div', ...properties }) => {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < m; i++) {
    const row = createElement('div');
    for (let j = 0; j < n; j++) {
      const element = createElement(type, { ...properties, dataset: { x: i, y: j } });
      row.appendChild(element);
      idx++;
    }
    fragment.appendChild(row);
  }

  return fragment;
};

export const createGridFragment = (m, n, { type = 'div', ...properties }) => {
  const fragment = document.createDocumentFragment();
  let idx = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const element = createElement(type, { ...properties, dataset: { x: i, y: j, idx } });
      fragment.appendChild(element);
      idx++;
    }
  }

  return fragment;
};

export const createElement = (type = 'div', properties) => {
  const element = document.createElement(type);
  Object.entries(properties).forEach(([key, value]) => {
    if (typeof value === 'object') {
      Object.entries(value).forEach(([subKey, subValue]) => {
        element[key][subKey] = subValue;
      });
      return;
    }

    element[key] = value;
  });
  return element;
};
