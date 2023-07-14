import {
  ChangeEvent,
  KeyboardEvent,
  useCallback,
  useEffect,
  useState,
} from "react";

import { debounce } from "../debounce";

interface AutocompleteResult {
  login: string;
}
const suggestionLength = 5;

async function makeAPIRequest(text: string): Promise<string[]> {
  try {
    const response = await fetch(
      `https://api.github.com/search/users?per_page=${suggestionLength}&q=${text}`
    );
    const data = await response.json();
    return data.items.map((item: AutocompleteResult) => item.login);
  } catch (e) {
    return [];
  }
}

export function useAutocompleteOnline() {
  const [userText, setUserText] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [suggestionFocus, setSuggestionFocus] = useState<number | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const debouncedMakeAPIRequest = useCallback(
    debounce(async (text: string) => {
      setIsLoading(true);
      try {
        const result = await makeAPIRequest(text);
        if (result.length > 0) {
          setSuggestions(result);
          setErrorMessage("");
        } else {
          setSuggestions([]);
          setErrorMessage("No results found");
        }
      } catch (error) {
        setSuggestions([]);
        setErrorMessage("Error occurred while fetching suggestions");
      }
      setIsLoading(false);
    }, 300),
    [makeAPIRequest]
  );
  const resetSuggestions = () => {
    setSuggestions([]);
    setSuggestionFocus(null);
    setErrorMessage("");
  };
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && suggestionFocus !== null) {
      const selectedSuggestion = suggestions[suggestionFocus];
      setUserText(selectedSuggestion);
      resetSuggestions();
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSuggestionFocus((prevFocus) => {
        if (prevFocus === null || prevFocus === suggestions.length - 1) {
          return 0;
        } else {
          return prevFocus + 1;
        }
      });
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      setSuggestionFocus((prevFocus) => {
        if (prevFocus === null || prevFocus === 0) {
          return suggestions.length - 1;
        } else {
          return prevFocus - 1;
        }
      });
    }
  };
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    setUserText(text);

    if (text.length > 0) {
      debouncedMakeAPIRequest(text);
    } else {
      resetSuggestions();
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setUserText(suggestion);
    resetSuggestions();
  };

  useEffect(() => {
    if (suggestionFocus !== null) {
      const selectedSuggestion = suggestions[suggestionFocus];
      setUserText(selectedSuggestion);
    }
  }, [suggestionFocus, suggestions]);

  const handleSuggestionFocus = (index: number | null) => {
    setSuggestionFocus(index);
  };

  return {
    userText,
    suggestions,
    isLoading,
    suggestionFocus,
    errorMessage,
    handleInputChange,
    handleSuggestionClick,
    handleKeyDown,
    handleSuggestionFocus,
  };
}
