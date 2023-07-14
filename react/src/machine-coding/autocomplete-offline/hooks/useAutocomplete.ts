import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react";

import Trie from "../trie";

type UseAutoCompleteReturnType = [
  string,
  (e: ChangeEvent<HTMLInputElement>) => void,
  number | null,
  string[],
  (e: KeyboardEvent<HTMLInputElement>) => void,
  (selectedSuggestion: string) => void,
  (index: number | null) => void
];

export const useAutoComplete = (
  suggestionsList: string[]
): UseAutoCompleteReturnType => {
  const suggestionLength = 5;

  const [userText, setUserText] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [suggestionFocus, setSuggestionFocus] = useState<number | null>(null);
  const trie = useRef<Trie>(new Trie(suggestionsList));

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setUserText(e.target.value);
    setSuggestions(
      text ? trie.current.getWordsFromTrie(text, suggestionLength) : []
    );
    setSuggestionFocus(null);
  };

  useEffect(() => {
    if (suggestionFocus !== null) {
      const selectedSuggestion = suggestions[suggestionFocus];
      setUserText(selectedSuggestion);
    }
  }, [suggestionFocus, suggestions]);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && suggestionFocus !== null) {
      const selectedSuggestion = suggestions[suggestionFocus];
      setUserText(selectedSuggestion);
      setSuggestions([]);
      setSuggestionFocus(null);
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

  const handleClick = (selectedSuggestion: string) => {
    setUserText(selectedSuggestion);
    setSuggestions([]);
    setSuggestionFocus(null);
  };

  const handleSuggestionFocus = (index: number | null) => {
    setSuggestionFocus(index);
  };

  return [
    userText,
    handleInput,
    suggestionFocus,
    suggestions,
    handleKeyDown,
    handleClick,
    handleSuggestionFocus,
  ];
};
