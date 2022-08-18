export const generateGrid = function (rows, cols, className) {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const div = document.createElement('div');
      div.dataset.i = i;
      div.dataset.j = j;
      div.classList.add(className);
      fragment.appendChild(div);
    }
  }

  return fragment;
};

export const generateFlex = function (rows, className) {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < rows; i++) {
    const div = document.createElement('div');
    div.dataset.j = i;
    div.classList.add(className);
    fragment.appendChild(div);
  }

  return fragment;
};

export const hasSameValuesContinously = (values, value, length) => {
  let count = 0;
  for (let i = 0; i < values.length; i++) {
    count = values[i] === value ? count + 1 : 0;

    if (count === length) {
      return true;
    }
  }
  return false;
};

export const getGridState = (rows, cols) => {
  return Array.from(new Array(rows), () => new Array(cols).fill(0));
};
