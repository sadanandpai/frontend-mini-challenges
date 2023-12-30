import { getElementFromHtml } from "./utils.js";

/*
1. Search API improvement
2. Network Call should be fired only when datalist is empty
3. Datalist should be visible on initial focus
4. Datalist should be visible when clearing characters in search box

Learnings:
Datalist Issues: Behaviour (open, close, hide) cannot be controlled easily using datalist. Styling & event handling inside datalist is difficult. 
Styling Datalist is difficult, so don't use it interviews.
Before using any new HTML element, please verify cross browser behaviour & support, flexibility in styling, event handling & controls.

After migrating to unordered list, complete following tasks.
5. Improve datalist CSS to look like autocomplete suggestions
6. Keyboard accessibility of datalist options
7. Highlight matching text in suggested options
8. Discuss Caching results on UI & document tradeoffs between different approaches.
*/

export class Input {
  constructor(searchFunction) {
    const inputHtml = `<div class="input__suggestion"><input type="text" id="search-input" placeholder="Search here" autocomplete="on" /><span id="autocomplete-suggestion"></span></div>`;
    this.inputElement = getElementFromHtml(inputHtml);
    this.handleInputChange();
    this.searchWithDelay = searchFunction;
  }

  handleInputChange() {
    this.inputElement.addEventListener("input", (e) => {
      const value = e.target.value;
      this.searchWithDelay(value);
    });
  }
}
