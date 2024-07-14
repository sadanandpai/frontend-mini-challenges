import { cssChallenges } from '@fmc/data/content';
import { logo } from '@fmc/assets/images';
import '@fmc/shared-styles/navbar';

const { VITE_PATH, VITE_HOST_URL, DEV } = import.meta.env;
const backURL = DEV ? `${VITE_HOST_URL}${VITE_PATH}/#/css/` : `/${VITE_PATH}/#/css/`;
const homeURL = DEV ? `${VITE_HOST_URL}${VITE_PATH}/` : `/${VITE_PATH}/`;

const challengeLink = window.location.pathname.split('/challenges/')[1].slice(0, -1);
const challenge = cssChallenges.get(challengeLink)!;

const navbar = document.createElement('nav');
navbar.classList.add('challenge-navbar');
navbar.innerHTML = `
  <div class="left">
    <a href=${backURL} class="back">
      &lt;
    </a>
    <a class="logo" href=${homeURL}>
      <img src=${logo} alt="logo" />
    </a>
  </div>

  <h1>${challenge.title}</h1>

  <div class="right">
    ${
      challenge?.youtube
        ? `
        <a slot="icon" href=${challenge.youtube} target="blank" class="youtube">
          <img src="https://cdn-icons-png.flaticon.com/256/1384/1384060.png" alt="youtube solution" />
        </a>
      `
        : ''
    }
    <a href="https://github.com/sadanandpai/frontend-mini-challenges/" target="blank">
      <img
        src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
        alt="github repo"
        class="github"
      />
    </a>
  </div>
`;

document.body.prepend(navbar);
