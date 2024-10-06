import '@fmc/components';
import { cssChallenges } from '@fmc/data/content';
const { VITE_PATH, VITE_HOST_URL, DEV } = import.meta.env;

const backURL = DEV ? `${VITE_HOST_URL}${VITE_PATH}/#/css/` : `/${VITE_PATH}/#/css/`;
const homeURL = DEV ? `${VITE_HOST_URL}${VITE_PATH}/` : `/${VITE_PATH}/`;

const challengeLink = window.location.pathname.split('/challenges/')[1].slice(0, -1);
const challenge = cssChallenges.get(challengeLink)!;
const cssSourceCodeBaseURL =
  'https://github.com/sadanandpai/frontend-mini-challenges/tree/main/apps/css/src/challenges/';

const navbar = document.createElement('nav-bar');
navbar.setAttribute('backURL', backURL);
navbar.setAttribute('homeURL', homeURL);
navbar.setAttribute('titleText', challenge.title);
navbar.setAttribute('sourceCodeLink', cssSourceCodeBaseURL + challenge.link);
if (challenge.youtube) {
  navbar.setAttribute('youtubeLink', challenge.youtube);
}

document.body.prepend(navbar);
