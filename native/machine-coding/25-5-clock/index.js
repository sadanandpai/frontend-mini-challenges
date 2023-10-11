const timeEl = document.querySelector('.time');
const durationButtons = document.querySelectorAll('.duration-button');
const breakElConf = document.querySelector('#breaklen');
const sessElConf = document.querySelector('#sesslen');
const minEl = document.querySelector('#minute');
const secEl = document.querySelector('#second');
const playButton = document.querySelector('#play');
const resetButton = document.querySelector('#reset');
const timerHeader = document.querySelector('.timer-header');
const beep = document.querySelector('#beep');
const playIcon = document.querySelector('#playicon');

class Timer {
  constructor() {
    this.state = 'session'; // session | break;
    this.session = {
      time: 25,
      interval: [5, 60],
    };
    this.break = {
      time: 5,
      interval: [2, 20],
    };
    this.timeLeft = [25, 0];
    this.isRunning = false;
    this.startInterval = null;
  }

  #prependZero(n) {
    return n > 9 ? n : `0${n}`;
  }

  start() {
    this.isRunning = true;
    this.startInterval = setInterval(() => this.run(), 1000);
    playIcon.classList.remove('fa-play');
    playIcon.classList.add('fa-pause');
  }

  pause() {
    clearInterval(this.startInterval);
    this.isRunning = false;
    playIcon.classList.remove('fa-pause');
    playIcon.classList.add('fa-play');
  }

  reset() {
    this.pause();
    this.timeLeft = [25, 0];
    this.break.time = 5;
    this.session.time = 25;
    this.state = 'session';

    this.render();
  }

  setTime(e) {
    if (this.isRunning) return;
    const {
      currentTarget: {
        dataset: { target, direction },
      },
    } = e;
    const increment = direction === 'up' ? 1 : -1;
    // prevent increment and decrement outside the range
    const { time, interval } = this[target];
    const newTime = time + increment;
    const [bottom, top] = interval;
    if (newTime > top || newTime < bottom) return;

    this[target]['time'] = newTime;
    if (this.state == target) {
      this.timeLeft[0] = newTime;
    }
    this.render();
  }

  run() {
    const [min, sec] = this.timeLeft;

    if (sec === 0) {
      this.timeLeft[1] = 59;
      if (min === 0) {
        if (this.state === 'session') {
          this.state = 'break';
          this.timeLeft[0] = this.break.time - 1;
        } else {
          this.state = 'session';
          this.timeLeft[0] = this.session.time - 1;
        }
      } else {
        this.timeLeft[0] = min - 1;
      }
    } else {
      this.timeLeft[1] = sec - 1;
    }
    this.render();
  }

  render() {
    const [t, ...r] = this.state;
    timerHeader.innerText = `${t.toUpperCase()}${r.join('')}`;

    const [min, sec] = this.timeLeft;
    breakElConf.innerText = this.#prependZero(this.break.time);
    sessElConf.innerText = this.#prependZero(this.session.time);
    minEl.innerText = this.#prependZero(min);
    secEl.innerText = this.#prependZero(sec);
    if (min === 0) {
      timeEl.classList.add('last-minute');
    } else {
      timeEl.classList.remove('last-minute');
    }
    if (min === 0 && sec === 59) beep.play();
  }
}

const timer = new Timer();
timer.render();

durationButtons.forEach((button) => {
  button.addEventListener('click', (e) => timer.setTime(e));
});

playButton.addEventListener('click', () => {
  if (timer.isRunning) {
    timer.pause();
  } else {
    timer.start();
  }
});

resetButton.addEventListener('click', () => timer.reset());
