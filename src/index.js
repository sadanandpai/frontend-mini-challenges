import { challenges } from './challenges.js';

const createAnchorElement = obj => {
  const div = document.createElement('div');
  const a = document.createElement('a');
  a.textContent = obj.title;
  a.href = `./src/mc/${obj.link}/`;

  if (obj.link === '#') {
    a.classList.add('disabled');
    a.title = 'To be developed';
    a.href = '#';
  }

  if (obj.isNew) {
    const newTag = document.createElement('span');
    newTag.textContent = 'New';
    newTag.classList.add('new');
    div.appendChild(newTag);
  }

  div.appendChild(a);
  return div;
};

const challengeGridEl = document.getElementById('challengeGrid');
challenges.map(createAnchorElement).forEach(el => challengeGridEl.appendChild(el));
