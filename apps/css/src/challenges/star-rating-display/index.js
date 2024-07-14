import { createElement, createElements } from './helper.js';

const starCount = 5;
const initialValue = 2.3;
const starContainer = document.getElementById('starContainer');
const range = document.getElementById('range');
const starRating = document.getElementById('starRating');
let partialStar = null;

starContainer.appendChild(
  createElements(
    starCount,
    (i) => {
      const star = createElement('span', { class: 'star', 'data-index': i });
      const bgStar = createElement('span', { class: 'star-partial', 'data-index': i });
      bgStar.textContent = '★';
      star.textContent = '☆';
      star.appendChild(bgStar);
      return star;
    },
    1
  )
);
const stars = starContainer.querySelectorAll('.star');

/**
 * Fills the stars based on the given rating.
 *
 * @param {number} rating - The rating to be represented by the stars.
 */
function fillCompleteStars(rating) {
  const count = Math.floor(rating);

  for (let i = 0; i < count; i++) {
    stars[i].classList.add('star-filled');
  }

  for (let i = count; i < starCount; i++) {
    stars[i].classList.remove('star-filled');
  }

  if (partialStar) {
    partialStar.classList.remove('partially-filled');
    partialStar.style.width = '0%';
  }

  if (count !== rating) {
    partialStar = stars[count].querySelector('.star-partial');
    partialStar.classList.add('partially-filled');
    partialStar.style.width = `${(rating - count) * 100}%`;
  }
}

/**
 * Handles the input event for the range element.
 *
 * @param {Event} e - The input event object.
 */
function rangeInputHandler(rating) {
  fillCompleteStars(rating);
  starRating.textContent = rating;
}

range.addEventListener('input', (e) => rangeInputHandler(+e.target.value));
range.setAttribute('max', starCount);
rangeInputHandler(initialValue);
