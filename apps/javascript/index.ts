import { defineCustomElements, type ChallengeCardProps } from '@fmc/components/loader/index.js';
import { challenges } from './src/helpers/challenges.js';
import { contributors } from './src/helpers/contributors.js';
import type { Challenge } from '@fmc/shared-types';
import './src/styles/index.css';

defineCustomElements()

const createChallengeCard = (challenge: Challenge) => {
  const challengeCard = document.createElement('challenge-card')

  const challengeProp: ChallengeCardProps = {
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

    for (const contributorName of challenge.contributors) {
      const contributor = contributors.get(contributorName);
      if (contributor) challengeProp.contributors.push(contributor)
    }
  }

  challengeCard.challenge = challengeProp
  return challengeCard;
};

const challengeGridEl = document.getElementById('challengeGrid')!;
challenges.map(createChallengeCard).forEach((el) => challengeGridEl.appendChild(el));
