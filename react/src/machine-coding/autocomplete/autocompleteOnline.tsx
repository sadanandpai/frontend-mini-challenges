// import { useKeyboardEvents } from './useKeyboardEvents';
import styles from "./autocomplete.module.scss";
import { useAutocompleteOnline } from "./hooks/useAutocompleteOnline";

function AutocompleteOnline() {
  const {
    userText,
    suggestions,
    isLoading,
    suggestionFocus,
    errorMessage,
    retryAfter,
    handleInputChange,
    handleSuggestionClick,
    handleKeyDown,
    handleSuggestionFocus,
  } = useAutocompleteOnline();
  return (
    <div className={styles.main}>
      <p>Use up & down arrows to navigate suggestions</p>
      <input
        type="search"
        id="userInput"
        autoComplete="off"
        spellCheck="false"
        placeholder="Search for GitHub username"
        aria-label="Search"
        role="combobox"
        aria-autocomplete="list"
        value={userText}
        onKeyDown={handleKeyDown}
        onChange={handleInputChange}
        disabled={retryAfter !== 0}
      />
      {isLoading && <div id="loader" className={styles.loader}></div>}
      {errorMessage && <div id="info">{errorMessage}</div>}
      {retryAfter !== 0 && <div className={styles.retryTimer}>{retryAfter}</div>}
      <ul className={styles.suggestions}>
        {suggestions.map((suggestion, index) => (
          <li
            key={index}
            className={suggestionFocus === index ? `${styles.highlight}` : ""}
            onClick={() => handleSuggestionClick(suggestion)}
            onMouseOver={() => handleSuggestionFocus(index)}
            onMouseLeave={() => handleSuggestionFocus(null)}
          >
            {suggestion}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AutocompleteOnline;
