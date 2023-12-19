import { defineCustomElement as defineChallengeCard } from '@fmc/components/dist/components/challenge-card.js';
import { defineCustomElement as defineChallengeGrid } from '@fmc/components/dist/components/challenge-grid.js';
import { defineCustomElement as defineNavigationBar } from '@fmc/components/dist/components/navigation-bar.js';
import type { ChallengeCardProps } from '@fmc/components/dist/types/index.js';
import { contributors } from '@fmc/data/content';
import type { IChallenge } from '@fmc/data/types';
import { challenges } from './src/helpers/challenges.js';
import './src/styles/index.css';

defineChallengeCard();
defineChallengeGrid();
defineNavigationBar();

const createChallengeCard = (challenge: IChallenge) => {
  const challengeCard = document.createElement('challenge-card');

  const challengeProp: ChallengeCardProps = {
    title: challenge.title,
    link: challenge.link ? `./src/challenges/${challenge.link}/` : null,
    difficulty: challenge.difficulty,
    youtube: challenge.youtube,
    tags: challenge.tags,
    isNew: challenge.isNew,
  };

  if (challenge.developer) {
    const contributor = contributors.get(challenge.developer);
    challengeProp.developer = contributor;
  }

  if (challenge.contributors) {
    challengeProp.contributors = [];

    for (const contributorName of challenge.contributors) {
      const contributor = contributors.get(contributorName);
      if (contributor) challengeProp.contributors.push(contributor);
    }
  }

  challengeCard.challenge = challengeProp;
  return challengeCard;
};

const challengeGridEl = document.getElementById('challengeGrid')!;
challenges.map(createChallengeCard).forEach((el) => challengeGridEl.appendChild(el));
