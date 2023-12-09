import { defineCustomElements } from '@fmc/ce/loader/index.js';
import { challenges } from './src/helpers/challenges.js';
import { contributors } from './src/helpers/contributors.js';
import './src/styles/index.css';

defineCustomElements()

const createChallengeCard = (challenge) => {
  const challengeCard = document.createElement('challenge-card')

  const challengeProp = {
    title: challenge.title,
    link: challenge.link ? `./src/challenges/${challenge.link}/` : null,
    difficulty: challenge.difficulty,
    youtube: challenge.youtube,
    tags: challenge.tags,
    isNew: challenge.isNew,
  }

  if (challenge.developer) {
    const contributor = contributors.get(challenge.developer);
    challengeProp.developer = contributor
  }

  if (challenge.contributors) {
    challengeProp.contributors = []

    for (const contributorName of contributors) {
      const contributor = contributors.get(contributorName);
      challengeProp.contributors.push(contributor)
    }
  }

  challengeCard.challenge = challengeProp
  return challengeCard;
};

const challengeGridEl = document.getElementById('challengeGrid');
challenges.map(createChallengeCard).forEach((el) => challengeGridEl.appendChild(el));
