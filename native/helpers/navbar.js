import { addBugFender } from './analytics/bug-fender.js';
import { addClarity } from './analytics/clarity.js';
import { challenges } from './challenges.js';

if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
  addClarity();
  addBugFender();
}

const challengeLink = window.location.pathname.split('machine-coding/')[1].slice(0, -1);
const challenge = challenges.find((challenge) => challenge.link === challengeLink);

const navbarHTML = `
  <div class='left'>
    <a href="/frontend-mini-challenges/native/" class="back">
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
    <a class="logo" href="/frontend-mini-challenges/">
      <img src="https://sadanandpai.github.io/frontend-mini-challenges/react/dist/logo.png" alt="logo" />
    </a>
  </div>

  <h1>${challenge.title}</h1>

  <div class="right">
    ${
      challenge.youtube
        ? `<a href=${challenge.youtube} target="blank" class="youtube">
          <img src="https://cdn-icons-png.flaticon.com/256/1384/1384060.png" alt="youtube solution" />
        </a>`
        : ''
    }

    <a href="https://github.com/sadanandpai/frontend-mini-challenges/" target="blank" class="github">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        class="github"
      >
        <path
          fill="currentColor"
          d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
        />
      </svg>
    </a>
  </div>
`;

const nav = document.createElement('nav');
nav.className = 'navbar-app';
nav.innerHTML = navbarHTML;
document.body.prepend(nav);
