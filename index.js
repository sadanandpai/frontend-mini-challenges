const challenges = [
  { title: "Counter", link: "counter" },
  { title: "Toast Popup", link: "toast-popup" },
  { title: "Guess the number", link: "guess-the-number" },
  { title: "Telephone formatter", link: "telephone-formatter" },
  { title: "Light & Dark mode", link: "light-dark-mode" },
  { title: "Password Strength", link: "password-strength" },
  { title: "Loaders...", link: "#" },
  { title: "Star Rating", link: "star-rating" },
  { title: "Pixel Art", link: "pixel-art" },
  { title: "Color Spotter", link: "color-spotter" },
  { title: "Todo List", link: "todo-list" },
  { title: "Tic-Tac-Toe", link: "tic-tac-toe" },
  { title: "Chess board", link: "chess-board" },
  { title: "Skeleton Loader", link: "#" },
  { title: "Countdown Timer", link: "count-down-timer" },
  { title: "Area Selector", link: "area-selector" },
  { title: "Carousel", link: "carousel" },
  { title: "Paginator", link: "paginator" },
  { title: "Comment box", link: "comment-box" },
  { title: "JSON Creator", link: "json-creator" },
  { title: "Array methods", link: "array-methods" },
  { title: "Stepper", link: "#" },
  { title: "Accordion", link: "#" },
  { title: "Transfer List", link: "#" },
  { title: "Autocomplete", link: "#" },
  { title: "Progress Bar", link: "#" },
  { title: "Dialog Popup", link: "#" },
  { title: "Sort Table", link: "#" },
  { title: "Calendar", link: "#" },
  { title: "Emoji Editor", link: "#" },
];

const createAnchorElement = (obj) => {
  const a = document.createElement("a");
  a.textContent = obj.title;
  a.href = `./mc/${obj.link}/`;

  if (obj.link === "#") {
    a.classList.add("disabled");
    a.title = "To be developed";
    a.href = "#";
  }

  return a;
};

const challengeGridEl = document.getElementById("challengeGrid");
challenges
  .map(createAnchorElement)
  .forEach((el) => challengeGridEl.appendChild(el));
