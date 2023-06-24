import { Trie } from './trie.js';
import { suggestionsList } from './list.js';

const suggestionLength = 5;
const userInput = document.getElementById('userInput');
const suggestionsEl = document.querySelector('.suggestions');
const trie = new Trie(suggestionsList);
let suggestionFocus = null;
let userText = '';

function highlightSuggestion(index) {
  suggestionsEl.querySelector('.highlight')?.classList.remove('highlight');
  suggestionsEl.childNodes[index].classList.add('highlight');
  userInput.value = suggestionsEl.childNodes[index].textContent;
}

function removeHighlightedSuggestion() {
  suggestionsEl.querySelector('.highlight')?.classList.remove('highlight');
  userInput.value = userText;
  suggestionFocus = null;
}

function resetSuggestions() {
  suggestionsEl.innerHTML = '';
  suggestionFocus = null;
  userInput.value = userText;
}

userInput.addEventListener('input', () => {
  suggestionsEl.innerHTML = '';
  suggestionFocus = null;
  userText = userInput.value;

  const result = userText ? trie.getWordsFromTrie(userText, suggestionLength) : [];
  for (let i = 0; i < result.length; i++) {
    const li = document.createElement('li');
    li.textContent = result[i] ?? '';
    suggestionsEl.appendChild(li);
  }
});

userInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && suggestionFocus != null) {
    userText = suggestionsEl.childNodes[suggestionFocus].textContent;
    resetSuggestions();
    return;
  }

  if (event.key === 'ArrowDown') {
    suggestionFocus = suggestionFocus ?? -1;
    if (suggestionFocus + 1 >= suggestionsEl.childElementCount) {
      removeHighlightedSuggestion();
      return;
    }

    highlightSuggestion(++suggestionFocus);
  }

  if (event.key === 'ArrowUp') {
    event.preventDefault(); // prevents cursor moving to start of input field
    suggestionFocus = suggestionFocus ?? suggestionsEl.childElementCount;
    if (suggestionFocus - 1 < 0) {
      removeHighlightedSuggestion();
      return;
    }

    highlightSuggestion(--suggestionFocus);
  }
});

userInput.addEventListener('blur', () => {
  setTimeout(resetSuggestions, 100);
});

suggestionsEl.addEventListener('click', (event) => {
  const element = event.target;

  if (element.tagName.toLowerCase() === 'li') {
    userText = element.textContent;
    resetSuggestions();
  }
});
