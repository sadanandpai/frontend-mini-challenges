import { wordList } from './word-list.js';
import hangman0 from '../images/hangman-0.svg';
import hangman1 from '../images/hangman-1.svg';
import hangman2 from '../images/hangman-2.svg';
import hangman3 from '../images/hangman-3.svg';
import hangman4 from '../images/hangman-4.svg';
import hangman5 from '../images/hangman-5.svg';
import hangman6 from '../images/hangman-6.svg';
import lost from '../images/lost.gif';
import victory from '../images/victory.gif';

const hangmanImgs = [hangman0, hangman1, hangman2, hangman3, hangman4, hangman5, hangman6];

const hangmanImg = document.querySelector('.img-container img');
const wordListContainer = document.querySelector('.correctWord-list');
const hintText = document.querySelector('.hint-text b');
const wrongGuess = document.querySelector('.wrong-guess b');
const modal = document.querySelector('.game-modal');
const modalImg = document.querySelector('.game-modal img');
const modalResult = document.querySelector('.modal-result');
const modalCorrectWord = document.querySelector('.modal-correctWord b');
const playAgain = document.querySelector('.btn-again');
const keyboardContainer = document.querySelector('.keyboard-container');

// init game state
let currentWordList = [],
  correctWordList,
  countToWrongGuesses = 0;

// max let guesses
const maxGuesses = 6;

// display words need to guess
function displayLists(lists) {
  const fragment = document.createDocumentFragment();
  Array.from(lists).map((_list) => {
    const liEle = document.createElement('li');
    liEle.classList.add('character');
    fragment.appendChild(liEle);
  });
  wordListContainer.innerHTML = '';
  wordListContainer.appendChild(fragment);
}

function resetGameState() {
  //wordList from word-list.js
  const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
  currentWordList = [];
  correctWordList = word;
  displayLists(correctWordList);
  hangmanImg.src = hangman0;
  hintText.innerText = hint;
  wrongGuess.classList.add('wrong-guesses');
  countToWrongGuesses = 0;
  wrongGuess.innerText = `${countToWrongGuesses} / ${maxGuesses}`;
  modal.classList.remove('show-modal');
  createKeyBoard();
}

// create keyboard
function createKeyBoard() {
  // create temp fragment for better performance
  const fragment = document.createDocumentFragment();
  for (let i = 97; i <= 122; i++) {
    const button = document.createElement('button');
    button.innerText = String.fromCharCode(i);
    button.classList.add('keys');
    fragment.appendChild(button);
  }
  keyboardContainer.innerHTML = '';
  keyboardContainer.appendChild(fragment);
}

// check for win or lose
function checkWinOrLoose(isWin) {
  modal.classList.add('show-modal');
  modalImg.src = isWin ? victory : lost;
  modalResult.innerText = `${isWin ? 'You are awesome' : 'Game Over'}`;
  modalCorrectWord.innerText = correctWordList;
  playAgain.addEventListener('click', main);
}

// main function for play game
function playGame() {
  const keys = document.querySelectorAll('.keys');
  keys.forEach((key) => {
    key.addEventListener('click', (e) => {
      if (correctWordList.includes(e.target.innerText.toLowerCase())) {
        Array.from(correctWordList).forEach((letter, index) => {
          if (e.target.innerText.toLowerCase() === letter) {
            currentWordList[index] = letter;
            document.querySelectorAll('.character')[index].innerText = letter;
            document.querySelectorAll('.character')[index].classList.add('set');
          }
        });
      } else {
        countToWrongGuesses++;
        wrongGuess.innerText = `${countToWrongGuesses} / ${maxGuesses}`;
        hangmanImg.src = hangmanImgs[countToWrongGuesses];
      }
      key.disabled = true;
      key.classList.add('disabled');
      if (countToWrongGuesses === 6) checkWinOrLoose(false);
      if (currentWordList.join('') === correctWordList) checkWinOrLoose(true);
    });
  });
}

function main() {
  resetGameState();
  playGame();
}

main();
