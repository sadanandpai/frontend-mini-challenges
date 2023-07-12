import { useAutocompleteOnline } from './hooks/useAutocompleteOnline';
// import { useKeyboardEvents } from './useKeyboardEvents';
import styles from './autocomplete.module.scss';

function AutocompleteOnline() {
    const {
        userText,
        suggestions,
        isLoading,
        suggestionFocus,
        errorMessage,
        handleInputChange,
        handleSuggestionClick,
        handleKeyDown,
        handleSuggestionFocus
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
            />
            {isLoading && <div id="loader" className={styles.loader}></div>}
            {errorMessage && <div id="info">{errorMessage}</div>}
            <ul className={styles.suggestions}>
                {suggestions.map((suggestion, index) => (
                    <li
                        key={index}
                        className={suggestionFocus === index ? `${styles.highlight}` : ''}
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
