import { debounce } from './debounce.js';

const suggestionLength = 5;
const userInput = document.getElementById('userInput');
const suggestionsEl = document.querySelector('.suggestions');
const loaderEl = document.getElementById('loader');
const infoEl = document.getElementById('info');

let userText = '';
let suggestionFocus = null;
let abortController = null;
const debouncedOnInput = debounce(onInput);

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

async function makeAPIRequest(text) {
  abortController = new AbortController();
  try {
    const response = await fetch(`https://api.github.com/search/users?per_page=${suggestionLength}&q=${text}`, {
      signal: abortController.signal,
    });
    abortController = null;
    const data = await response.json();
    showLoader(false);
    return { text, result: data.items };
  } catch (e) {
    if (e.name !== 'AbortError') {
      showInfo();
    }
    showLoader(false);
    return { text, result: [] };
  }
}

async function onInput() {
  suggestionsEl.innerHTML = '';
  suggestionFocus = null;
  userText = userInput.value;

  if (userText.length > 0) {
    const { text, result } = await makeAPIRequest(userText);
    if (userInput.value === text) {
      if (result.length === 0) {
        showInfo('No results found');
      }

      for (let i = 0; i < result.length; i++) {
        const li = document.createElement('li');
        li.textContent = result[i].login ?? '';
        suggestionsEl.appendChild(li);
      }
    }
  }
}

function showLoader(isLoading = true) {
  if (isLoading) {
    loaderEl.classList.add('loader');
  } else {
    loaderEl.classList.remove('loader');
  }
}

function showInfo(text = 'API Error occured') {
  infoEl.textContent = text;
}

userInput.addEventListener('input', () => {
  if (abortController) {
    abortController.abort();
    abortController = null;
  }

  if (userInput.value === '') {
    showLoader(false);
  } else {
    showLoader();
  }

  suggestionsEl.innerHTML = '';
  suggestionFocus = null;
  showInfo('');
  debouncedOnInput();
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
