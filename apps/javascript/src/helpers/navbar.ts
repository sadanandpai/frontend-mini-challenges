import { jsChallenges } from '@fmc/data/content';
import { logo } from '@fmc/assets/images';
import '@fmc/shared-styles/navbar';

const { VITE_PATH, VITE_HOST_URL, DEV } = import.meta.env;
const backURL = DEV ? `${VITE_HOST_URL}${VITE_PATH}/#/javascript/` : `/${VITE_PATH}/#/javascript/`;
const homeURL = DEV ? `${VITE_HOST_URL}${VITE_PATH}/` : `/${VITE_PATH}/`;

const challengeLink = window.location.pathname.split('/challenges/')[1].slice(0, -1);
const challenge = jsChallenges.get(challengeLink)!;

const externalLinkIco = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>`;

const jsSourceCodeBaseURL =
  'https://github.com/sadanandpai/frontend-mini-challenges/tree/main/apps/javascript/src/challenges/';

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

  <div class="title-container">
    <h1>${challenge.title}</h1>
  </div>

  <div class="right">
   <div class="source_code"> 
      ${challenge?.link ? `<a href=${jsSourceCodeBaseURL + challenge.link} target="blank">${externalLinkIco}Source code</a>` : ''}
      ${challenge?.youtube ? `<a href=${challenge.youtube} target="blank">${externalLinkIco}Youtube</a>` : ''}
    </div>
    <a href="https://github.com/sadanandpai/frontend-mini-challenges/" target="blank">
      <img
        src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
        alt="github repo"
        class="github"
      />
    </a>
    <div id="responsive-nav">
      <div class="hamburger">
          <input type="checkbox" />
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
          <section id="menu">
             <ul>
                ${challenge?.link ? `<a href=${jsSourceCodeBaseURL + challenge.link} target="blank"><li>${externalLinkIco}Source code</li></a>` : ''}
                ${challenge?.youtube ? `<a href=${challenge.youtube} target="blank"><li>${externalLinkIco}Youtube</li></a>` : ''}
              </ul>
            
          </section>
       </div>
      </div>
  </div>

`;

document.body.prepend(navbar);
