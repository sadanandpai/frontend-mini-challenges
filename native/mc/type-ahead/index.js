import { Trie } from './trie.js';
import { suggestionsList } from './list.js';

const suggestionLength = 8;
const userInput = document.getElementById('userInput');
const suggestionsEl = document.querySelector('.suggestions');
let suggestionFocus = null;
let userText = '';

function highlightSuggestion(index) {
  suggestionsEl.querySelector('.highlight')?.classList.remove('highlight');
  suggestionsEl.childNodes[index].classList.add('highlight');
  userInput.value = suggestionsEl.childNodes[index].textContent;
}

function resetSuggestion() {
  suggestionsEl.querySelector('.highlight')?.classList.remove('highlight');
  userInput.value = userText;
  suggestionFocus = null;
}

const trie = new Trie(suggestionsList);

userInput.addEventListener('input', () => {
  suggestionsEl.innerHTML = '';
  suggestionFocus = null;
  userText = userInput.value;

  const searchText = userInput.value;
  const result = searchText ? trie.getWordsFromTrie(searchText, suggestionLength) : [];
  for (let i = 0; i < result.length; i++) {
    const li = document.createElement('li');
    li.textContent = result[i] ?? '';
    suggestionsEl.appendChild(li);
  }
});

userInput.addEventListener('keydown', event => {
  if (event.key === 'Enter' && suggestionFocus != null) {
    userText = suggestionsEl.childNodes[suggestionFocus].textContent;
    userInput.value = userText;
    suggestionFocus = null;
    suggestionsEl.innerHTML = '';
    return;
  }

  if (event.key === 'ArrowDown') {
    suggestionFocus = suggestionFocus ?? -1;

    if (suggestionFocus + 1 >= suggestionsEl.childElementCount) {
      resetSuggestion();
      return;
    }

    suggestionFocus += 1;
    highlightSuggestion(suggestionFocus);
  }

  if (event.key === 'ArrowUp') {
    event.preventDefault(); // prevents cursor moving to start of input field
    suggestionFocus = suggestionFocus ?? suggestionsEl.childElementCount;

    if (suggestionFocus - 1 < 0) {
      resetSuggestion();
      return;
    }

    suggestionFocus -= 1;
    highlightSuggestion(suggestionFocus);
  }
});

suggestionsEl.addEventListener('click', event => {
  const element = event.target;

  if (element.tagName.toLowerCase() === 'li') {
    userText = element.textContent;
    userInput.value = userText;
    suggestionFocus = null;
    suggestionsEl.innerHTML = '';
  }
});
