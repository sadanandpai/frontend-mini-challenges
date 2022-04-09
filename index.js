const challenges = [
  { title: "Toast Popup", link: "toast-popup" },
  { title: "Guess the number", link: "guess-the-number" },
  { title: "Telephone formatter", link: "telephone-formatter" },
  { title: "Light & Dark mode", link: "light-dark-mode" },
  { title: "Todo List", link: "todo-list" },
  { title: "Star Rating", link: "star-rating" },
  { title: "Pixel Art", link: "pixel-art" },
  { title: "Tic-Tac-Toe", link: "tic-tac-toe" },
  { title: "Countdown Timer", link: "count-down-timer" },
  { title: "Area Selector", link: "area-selector" },
  { title: "Carousel", link: "carousel" },
  { title: "Paginator", link: "paginator" },
  { title: "Comment box", link: "comment-box" },
  { title: "Array methods", link: "array-methods" },
];

const createAnchorElement = (obj) => {
  const a = document.createElement("a");
  a.textContent = obj.title;
  a.href = `./mc/${obj.link}/`;
  return a;
};

const challengeGridEl = document.getElementById("challengeGrid");
challenges
  .map(createAnchorElement)
  .forEach((el) => challengeGridEl.appendChild(el));
