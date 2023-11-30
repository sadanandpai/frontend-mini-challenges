import { useRef } from 'react';
import { useAutoComplete } from './hooks/useAutocompleteOffline.ts';
import { suggestionsList } from './countryList.ts';
import styles from './autocomplete.module.scss';

const Autocomplete = () => {
  const [userText, handleInput, suggestionFocus, suggestions, handleKeyDown, handleClick, handleSuggestionFocus] = useAutoComplete(
    suggestionsList
  );
  const userInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={styles.main}>
      <p>Use up & down arrows to navigate suggestions</p>
      <input
        type="search"
        ref={userInputRef}
        autoComplete="off"
        spellCheck="false"
        placeholder="Search for Country"
        aria-label="Search"
        role="combobox"
        aria-autocomplete="list"
        value={userText}
        onChange={handleInput}
        onKeyDown={handleKeyDown}
      // onBlur={handleBlur}
      />
      <ul className={styles.suggestions}>
        {suggestions.map((suggestion, index) => (
          <li
            key={index}
            className={suggestionFocus === index ? `${styles.highlight}` : ''}
            onClick={() => handleClick(suggestion)}
            onMouseOver={() => handleSuggestionFocus(index)}
            onMouseLeave={() => handleSuggestionFocus(null)}
          >
            {suggestion}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Autocomplete;