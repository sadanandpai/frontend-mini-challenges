import { challenges } from './src/helpers/challenges.js';
import { contributors } from './src/helpers/contributors.js';

const challengeTemplate = document.getElementById('challengeTemplate');

const createAnchorElement = (challenge) => {
  const challengeCard = challengeTemplate.content.cloneNode(true);

  const card = challengeCard.querySelector('.challenge-card');
  if (challenge.link === '#') {
    card.classList.add('disabled');
    card.title = 'To be developed';
  } else {
    card.href = `/frontend-mini-challenges/javascript/src/challenges/${challenge.link}/`;
    card.classList.add(challenge.difficulty);
  }

  if (challenge.isNew) {
    challengeCard.querySelector('.new').classList.remove('hidden');
  }

  const title = challengeCard.querySelector('.challenge-title');
  title.textContent = challenge.title;

  if (challenge.developer) {
    const developer = challengeCard.querySelector('.developer');
    developer.classList.remove('hidden');

    const contributor = contributors.get(challenge.developer);
    const developerName = challengeCard.querySelector('.developer-name');
    const developerImg = challengeCard.querySelector('.developer-img');
    developerImg.src = contributor?.pic;
    developerImg.alt = contributor?.name;
    developerName.textContent = contributor?.name;
  }

  return challengeCard;
};

const challengeGridEl = document.getElementById('challengeGrid');
challenges.map(createAnchorElement).forEach((el) => challengeGridEl.appendChild(el));
