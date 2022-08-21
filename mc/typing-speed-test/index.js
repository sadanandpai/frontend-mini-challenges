import { VirtualKeyboard } from './VirtualKeyboard.js';
import { sentences } from './sentences.js';
import { Timer } from './Timer.js';

const sentenceDisplayEl = document.querySelector('.sentences-display');
const keyboardEl = document.querySelector('.keyboard');
const timeDisplayEl = document.querySelector('.time-display');
const resetEl = document.querySelector('.reset');

const duration = 60;
let nextLetter;
let totalLetters = 0;
let isOver = false;
const timer = new Timer();

const addSentenceToDisplay = () => {
  const sentence = sentences[Math.floor(Math.random() * sentences.length)];
  sentenceDisplayEl.textContent += sentence + ' ';
};

const udpateSentenceToDisplay = () => {
  if (sentenceDisplayEl.textContent.length < 50) {
    addSentenceToDisplay();
  }

  const nextLetterIndex = sentenceDisplayEl.textContent.charAt(1).trim() ? 1 : 2;
  sentenceDisplayEl.textContent = sentenceDisplayEl.textContent.slice(nextLetterIndex);
  setNextLetter();
};

const setNextLetter = () => {
  nextLetter = sentenceDisplayEl.textContent.charAt(0);
};

const handleTyping = letter => {
  if (isOver) return;

  if (!timer.isTimerRunning && totalLetters === 0) {
    timer.startTimer(duration, displayTime, onComplete);
  }

  if (letter === nextLetter) {
    totalLetters++;
    udpateSentenceToDisplay();
  }
};

const displayTime = time => {
  timeDisplayEl.textContent = time;
};

const onComplete = () => {
  timeDisplayEl.textContent = `You typed ${totalLetters} letters in ${duration} seconds`;
  isOver = true;
};

const onReset = () => {
  sentenceDisplayEl.textContent = '';
  addSentenceToDisplay();
  setNextLetter();
  totalLetters = 0;
  timeDisplayEl.textContent = duration;
  timer.stopTimer();
  isOver = false;
  resetEl.blur();
};

resetEl.addEventListener('click', onReset);

new VirtualKeyboard(keyboardEl, handleTyping);
onReset();
