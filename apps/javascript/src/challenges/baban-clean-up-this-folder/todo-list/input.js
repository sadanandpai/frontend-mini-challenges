import { debouncedSearch, getElementFromHtml } from "./utils.js";

export class Input {
  constructor(onSuccess, placeholder) {
    this.value = "";
    const inputHTML = `<input type="text" class="input__text" placeholder="${placeholder}" id="input"></input>`;
    this.inputElement = getElementFromHtml(inputHTML);
    this.addSubmitEvent(onSuccess);
    if (placeholder.match(/search/i)) {
      this.searchWithDelay = debouncedSearch(onSuccess, 500);
      this.addInputEvent();
    }
  }

  addSubmitEvent(onSuccess) {
    this.inputElement.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        this.value = e.target.value;
        this.inputElement.value = "";
        onSuccess?.(this.value);
      }
    });
  }

  addInputEvent() {
    this.inputElement.addEventListener("input", (e) => {
      e.preventDefault();
      this.searchWithDelay(e.target.value);
    });
  }
}
