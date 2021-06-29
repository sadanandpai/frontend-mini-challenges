const starCount = 5; // Use multiples of 5
let rating = 0;

const starContainer = document.getElementById("starContainer");
const smileyContainer = document.getElementById("smileyContainer");

function createStars(count) {
  const starFragment = document.createDocumentFragment();

  for (let i = 1; i <= count; i++) {
    starFragment.appendChild(createStarElement(i));
  }
  return starFragment;
}

function createStarElement(index) {
  const starElement = document.createElement("div");
  starElement.classList.add("star");
  starElement.classList.add("star-empty");
  starElement.dataset.index = index;
  return starElement;
}

function fillStars(count) {
  const stars = starContainer.querySelectorAll(".star");

  for (let i = 0; i < count; i++) {
    stars[i].classList.add("star-filled");
    stars[i].classList.remove("star-empty");
  }

  for (let i = count; i < starCount; i++) {
    stars[i].classList.remove("star-filled");
    stars[i].classList.add("star-empty");
  }
}

function hoverListener(event) {
  const target = event.target;
  if (target.classList.contains("star")) {
    const index = target.dataset.index;
    fillStars(+index);
  }
}

function leaveListener() {
  fillStars(rating);
}

function clickListener(event) {
  const target = event.target;
  if (target.classList.contains("star")) {
    rating = target.dataset.index;
    const className = setClassForRating(+rating);
    smileyContainer.className = "smiley-container";
    smileyContainer.classList.add(className);
  }
}

function setClassForRating(rating) {
  const percentage = (100 * rating) / starCount;

  if (percentage <= 20) {
    return "worst";
  } else if (percentage <= 40) {
    return "bad";
  } else if (percentage <= 60) {
    return "neutral";
  } else if (percentage <= 80) {
    return "good";
  } else {
    return "best";
  }
}

const stars = createStars(starCount);
starContainer.appendChild(stars);

starContainer.addEventListener("mouseover", hoverListener);
starContainer.addEventListener("mouseleave", leaveListener);
starContainer.addEventListener("click", clickListener);
