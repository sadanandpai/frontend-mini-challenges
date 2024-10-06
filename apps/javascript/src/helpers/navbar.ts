import '@fmc/components';
import { jsChallenges } from '@fmc/data/content';

const { VITE_PATH, VITE_HOST_URL, DEV } = import.meta.env;
const backURL = DEV ? `${VITE_HOST_URL}${VITE_PATH}/#/javascript/` : `/${VITE_PATH}/#/javascript/`;
const homeURL = DEV ? `${VITE_HOST_URL}${VITE_PATH}/` : `/${VITE_PATH}/`;

const challengeLink = window.location.pathname.split('/challenges/')[1].slice(0, -1);
const challenge = jsChallenges.get(challengeLink)!;
const jsSourceCodeBaseURL =
  'https://github.com/sadanandpai/frontend-mini-challenges/tree/main/apps/javascript/src/challenges/';

const navbar = document.createElement('nav-bar');
navbar.setAttribute('backURL', backURL);
navbar.setAttribute('homeURL', homeURL);
navbar.setAttribute('titleText', challenge.title);
navbar.setAttribute('sourceCodeLink', jsSourceCodeBaseURL + challenge.link);
if (challenge.youtube) {
  navbar.setAttribute('youtubeLink', challenge.youtube);
}

document.body.prepend(navbar);
