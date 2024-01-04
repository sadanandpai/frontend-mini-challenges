import { defineCustomElement as defineNavigationBar } from '@fmc/components/dist/components/navigation-bar.js';
import { jsChallenges } from '@fmc/data/content';

defineNavigationBar();

const challengeLink = window.location.pathname.split('/challenges/')[1].slice(0, -1);
const challenge = jsChallenges.get(challengeLink)!;

const backButton = `
  <a slot="left" href="/frontend-mini-challenges/javascript/" class="back">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>
  </a>
`;

const youtubeLink = challenge?.youtube
  ? `<a slot="icon" href=${challenge.youtube} target="blank" class="youtube">
    <img src="https://cdn-icons-png.flaticon.com/256/1384/1384060.png" alt="youtube solution" />
  </a>`
  : '';

const navbar = document.createElement('navigation-bar');
navbar.challengeTitle = challenge.title;
navbar.innerHTML += backButton;
navbar.innerHTML += youtubeLink;
document.body.prepend(navbar);
