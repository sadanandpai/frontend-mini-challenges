import { IChallenge } from '../../data/types/challenge';
import modalHTML from './modal.html?raw';
import './modal.scss';

export class Modal extends HTMLElement {
  private modal!: HTMLElement;
  private modalTitle!: HTMLElement;
  private modalDescription!: HTMLElement;
  private closeBtn!: HTMLElement;

  connectedCallback() {
    this.innerHTML = modalHTML;
    this.modal = this.querySelector('#instructionModal')!;
    this.modalTitle = this.querySelector('#modalTitle')!;
    this.modalDescription = this.querySelector('#modalDescription')!;
    this.closeBtn = this.querySelector('.close-modal')!;

    if (this.closeBtn && this.modal) {
      this.closeBtn.addEventListener('click', () => this.modal!.classList.remove('show'));
    }

    // Attach close logic
    this.closeBtn.addEventListener('click', () => this.modal.classList.remove('show'));
    window.addEventListener('click', (event) => {
      if (event.target === this.modal) this.modal.classList.remove('show');
    });
  }

  showModal(challenge: IChallenge) {
    if (!challenge) return;
    this.modalTitle.textContent = challenge.title;
    this.modalDescription.textContent = challenge.description;
    this.modal.classList.add('show');
  }
}

window.customElements.define('challenge-modal', Modal);
