import { Input } from "./input.js";
import { List } from "./list.js";

const searchSection = document.querySelector(".search__input-options");

const newListInstance = new List();
const newInputInstance = new Input(newListInstance.searchWithDelay);

searchSection.appendChild(newInputInstance.inputElement);
searchSection.appendChild(newListInstance.dataListElement);
