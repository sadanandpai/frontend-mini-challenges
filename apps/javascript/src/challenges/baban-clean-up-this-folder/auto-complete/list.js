import { debouncedSearchProducts } from "./server.js";
import { getElementFromHtml } from "./utils.js";

export class List {
  constructor() {
    const constructProductsList = this.constructProductsList.bind(this);
    const dataListHtml = `<ul tabIndex="1"></ul>`;
    this.dataListElement = getElementFromHtml(dataListHtml);
    this.searchWithDelay = debouncedSearchProducts(constructProductsList, 1000);
    this.handleListClick();
  }

  // decouple this method from this class
  constructProductsList({ products, searchQuery }) {
    this.dataListElement.replaceChildren();
    const suggestionElement = document.querySelector(
      "#autocomplete-suggestion"
    );
    if (products.length === 0) {
      this.dataListElement.classList.remove("autocomplete-options");
      suggestionElement.textContent = "";
    }

    if (products.length > 0) {
      this.dataListElement.classList.add("autocomplete-options");
      const documentFragment = document.createDocumentFragment();
      this.addAutoCompleteSuggestion(products[0], searchQuery);
      products.forEach((title) => {
        const listElement = this.highlightSearchedQuery(title, searchQuery);
        documentFragment.appendChild(listElement);
      });
      this.dataListElement.appendChild(documentFragment);
    }
  }

  highlightSearchedQuery(title, searchQuery) {
    const searchQueryRegex = new RegExp(`^${searchQuery}`, "i");
    const remainingTitle = title.replace(searchQueryRegex, "");

    const spanElement = document.createElement("span");
    spanElement.textContent = searchQuery;
    spanElement.classList.add("highlighted");

    const listElement = document.createElement("li");
    listElement.tabIndex = "0";
    listElement.appendChild(spanElement);
    listElement.appendChild(document.createTextNode(remainingTitle));
    return listElement;
  }

  handleListClick() {
    this.dataListElement.addEventListener("click", (e) => {
      const inputElement = document.querySelector("#search-input");
      inputElement.value = e.target.textContent;
      this.dataListElement.replaceChildren();
      this.dataListElement.classList.remove("autocomplete-options");
      const suggestionElement = document.querySelector(
        "#autocomplete-suggestion"
      );
      suggestionElement.textContent = "";
    });
  }

  addAutoCompleteSuggestion(title, searchQuery) {
    const suggestionElement = document.querySelector(
      "#autocomplete-suggestion"
    );
    if (searchQuery) {
      suggestionElement.textContent = title;
    }
  }
}
