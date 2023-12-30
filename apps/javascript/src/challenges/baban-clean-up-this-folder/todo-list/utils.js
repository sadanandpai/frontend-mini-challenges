export const getElementFromHtml = (html) => {
  const range = document.createRange();
  return range.createContextualFragment(html.trim()).children[0];
};

export const debouncedSearch = (searchFunction, delay) => {
  let timeoutId;

  return (value) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => searchFunction(value), delay);
  };
};
