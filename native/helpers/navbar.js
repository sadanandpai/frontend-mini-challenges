import { addBugFender } from './analytics/bug-fender.js';
import { addClarity } from './analytics/clarity.js';
import { challenges } from './challenges.js';

if (window.location.hostname !== 'localhost') {
  addClarity();
  addBugFender();
}

const challengeLink = window.location.pathname.split('machine-coding/')[1].slice(0, -1);
const challenge = challenges.find((challenge) => challenge.link === challengeLink);

const navbarHTML = `<div class='left'>
  <a href="/frontend-mini-challenges/native/" class="back">
    &lt;
  </a>
  <a class="logo" href="/frontend-mini-challenges/">
    <img src="https://sadanandpai.github.io/frontend-mini-challenges/react/dist/logo.png" alt="logo" />
  </a>
  </div>

  <h1>${challenge.title}</h1>

  <div class="right">
  <a href="https://github.com/sadanandpai/frontend-mini-challenges/" target="blank">
    <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github repo" class="github" />
  </a>
  </div>
`;

const nav = document.createElement('nav');
nav.className = 'navbar-app';
nav.innerHTML = navbarHTML;
document.body.prepend(nav);
document.title = challenge.title;
