import navbarHTML from './navbar.html?raw';
import './navbar.scss';
import { logo, githubSVG, youtubeSVG, codeSVG } from '@fmc/assets/images';

export class Navbar extends HTMLElement {
  updateYoutubeLink() {
    const youtubeLink = this.getAttribute('youtubeLink');
    const youtubeEl = this.querySelector('.youtube');

    if (youtubeEl) {
      if (youtubeLink) {
        youtubeEl.setAttribute('href', youtubeLink);
        this.querySelector('.youtube img')!.setAttribute('src', youtubeSVG);
      } else {
        youtubeEl.remove();
      }
    }
  }

  updateSourceCodeLink() {
    const sourceCodeLink = this.getAttribute('sourceCodeLink');
    const sourceCodeEl = this.querySelector('.source-code');

    if (sourceCodeEl) {
      if (sourceCodeLink) {
        sourceCodeEl.setAttribute('href', sourceCodeLink);
        this.querySelector('.source-code img')!.setAttribute('src', codeSVG);
      } else {
        sourceCodeEl.remove();
      }
    }
  }

  connectedCallback() {
    this.innerHTML = navbarHTML;
    this.querySelector('.back')!.setAttribute('href', this.getAttribute('backURL')!);
    this.querySelector('.logo')!.setAttribute('href', this.getAttribute('homeURL')!);
    this.querySelector('.logo img')!.setAttribute('src', logo);
    this.querySelector('.title')!.textContent = this.getAttribute('titleText') ?? '';
    this.updateSourceCodeLink();
    this.updateYoutubeLink();
    this.querySelector('.github img')!.setAttribute('src', githubSVG);
  }
}

window.customElements.define('nav-bar', Navbar);
