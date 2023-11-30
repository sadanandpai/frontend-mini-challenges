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

interface MakeApiRequestReturnType {
  items: string[],
  errorMsgFromApi: string
  timeDelta: number
}

async function makeAPIRequest(text: string): Promise<MakeApiRequestReturnType> {
  const result = {items: [], errorMsgFromApi: "", timeDelta: 0}

  try {
    const response = await fetch(
      `https://api.github.com/search/users?per_page=${suggestionLength}&q=${text}`
    );

    // The GitHub API responds with http 403 Forbidden when the rate limit is exceeded.
    if (response.status === 403) {
      // The API suspends further requests until a specified time. This specified time is included in the
      // response header under the key "x-ratelimit-reset"
      // https://docs.github.com/en/rest/guides/best-practices-for-using-the-rest-api?apiVersion=2022-11-28#handle-rate-limit-errors-appropriately
      const timeOfLimitReset = response.headers.get('x-ratelimit-reset');

      if (timeOfLimitReset !== null) {
        const timeValue = parseFloat(timeOfLimitReset);

        // Following line of code will calculate the number of seconds between the time at which the rate-limit was
        // breached and the time at which we can start making requests again.
        result.timeDelta = Math.ceil(timeValue - (Date.now() / 1000));
      } else {
        // Set timeDelta to 60 seconds if the "x-ratelimit-reset" header is not present or changes in the future
        result.timeDelta = 60
      }
    } else {
      const data = await response.json();
      result.items = data.items.map((item: AutocompleteResult) => item.login);
    }

    return result
  } catch (e) {
    result.errorMsgFromApi = "Error occurred while fetching suggestions"
    return result;
  }
}

export function useAutocompleteOnline() {
  const [userText, setUserText] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [suggestionFocus, setSuggestionFocus] = useState<number | null>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [retryAfter, setRetryAfter] = useState(0)

  const [errorMessage, setErrorMessage] = useState("");

  const debouncedMakeAPIRequest = useCallback(
    debounce(async (text: string) => {
      setIsLoading(true);
      try {
        const result = await makeAPIRequest(text);

        setRetryAfter(result.timeDelta)
        if (!result.errorMsgFromApi) {
          if (result.items.length > 0) {
            setSuggestions(result.items)
            setErrorMessage("")
          } else {
            setSuggestions([])
            setErrorMessage("No results found")
          }
        } else {
          setSuggestions([])
          setErrorMessage(result.errorMsgFromApi)
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

  // Start a countdown to zero as soon as the value of retryAfter changes
  useEffect(() => {
    const timer = setTimeout(() => {
      if (retryAfter > 0) {
        setRetryAfter((prevVal) => prevVal - 1)
      }
    }, 1000)

    return () => clearTimeout(timer)
  }, [retryAfter])

  const handleSuggestionFocus = (index: number | null) => {
    setSuggestionFocus(index);
  };

  return {
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
  };
}
