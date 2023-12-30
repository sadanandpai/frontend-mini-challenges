export const getElementFromHtml = (html) => {
  const range = document.createRange();
  return range.createContextualFragment(html.trim()).children[0];
};

export const messageTypes = {
  CONTENT_CHANGE: "contentchange",
  USER_EVENT: "userevent",
};
