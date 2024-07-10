const clock = document.querySelector('.clock');
const ticks = document.querySelector('.ticks');
const hoursHand = document.querySelector('.hours-hand');
const minutesHand = document.querySelector('.minutes-hand');
const secondsHand = document.querySelector('.seconds-hand');
const clockDigitsEl = document.querySelector('.digits');

const clockDigits = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const ticksCount = 60;

// add ticks to the clock
for (let i = 0; i < ticksCount; i++) {
  const tick = document.createElement('div');
  tick.classList.add('tick');
  tick.style.left = 50 + Math.sin(((Math.PI * 2) / ticksCount) * i) * 50 + '%';
  tick.style.top = 50 - Math.cos(((Math.PI * 2) / ticksCount) * i) * 50 + '%';
  tick.style.rotate = `${i * 6}deg`; // rotate the tick by 6deg for every second (360 / 60 = 6deg)
  ticks.appendChild(tick);
}

// add digits to the clock
for (let i = 0; i < clockDigits.length; i++) {
  const digitsEl = document.createElement('div');
  digitsEl.textContent = clockDigits[i];
  digitsEl.classList.add('digit');
  digitsEl.style.left = 50 + Math.sin(((Math.PI * 2) / clockDigits.length) * i) * 50 + '%';
  digitsEl.style.top = 50 - Math.cos(((Math.PI * 2) / clockDigits.length) * i) * 50 + '%';
  clockDigitsEl.appendChild(digitsEl);
}

const getTimeInAngles = (date) => ({
  seconds: (clockDigits.length / 2) * date.getSeconds(),
  minutes: (clockDigits.length / 2) * date.getMinutes() + date.getSeconds() / 10,
  hours: date.getMinutes() / 2 + (date.getHours() % clockDigits.length) * 30,
});

const setClockHands = () => {
  const angles = getTimeInAngles(new Date());
  hoursHand.style.transform = `rotate(${angles.hours}deg)`;
  minutesHand.style.transform = `rotate(${angles.minutes}deg)`;
  secondsHand.style.transform = `rotate(${angles.seconds}deg)`;
};

setInterval(setClockHands, 1000);
setClockHands();
