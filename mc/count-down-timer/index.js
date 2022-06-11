const display = document.getElementById('display');
const controls = document.getElementById('controls');

class Timer {
  msbRegex = /^[0-5]$/;
  lsbRegex = /^[0-9]$/;

  minutes = 0;
  seconds = 0;

  constructor(minMSB, minLSB, secMSB, secLSB, start, stop, reset, display) {
    this.minMSB = document.getElementById(minMSB);
    this.minLSB = document.getElementById(minLSB);
    this.secMSB = document.getElementById(secMSB);
    this.secLSB = document.getElementById(secLSB);

    this.start = document.getElementById(start);
    this.stop = document.getElementById(stop);
    this.reset = document.getElementById(reset);

    this.display = document.getElementById(display);
  }

  onClick = event => {
    if (event.target.tagName === 'INPUT') event.target.select();
    else if (event.target.id === 'start') this.onStart(event);
    else if (event.target.id === 'stop') this.onStop(event);
    else if (event.target.id === 'reset') this.onReset(event);
  };

  onStart() {
    this.setControls(true, false);

    this.display.classList.add('progress');
    this.setInputsDisabledStatus(true);
    this.setTime();
    this.startTimer();
  }

  onStop() {
    this.setControls(false, true);
    this.display.classList.remove('progress');
    this.setInputsDisabledStatus(false);
    clearInterval(this.intervalId);
  }

  onReset() {
    this.setControls(false, true);
    this.resetControls();
    this.resetTimerValue();
  }

  setControls(startStatus = false, stopStatus = false) {
    this.start.disabled = startStatus;
    this.stop.disabled = stopStatus;
  }

  onInput = event => {
    const value = Number(event.data);

    if (typeof value === 'number') {
      if (event.target.id === 'minMSB' || event.target.id === 'secMSB') {
        this.onValueEntry(this.msbRegex, event.target, value);
      } else if (event.target.id === 'minLSB' || event.target.id === 'secLSB') {
        this.onValueEntry(this.lsbRegex, event.target, value);
      }
    }
  };

  onValueEntry(regex, target, value) {
    if (regex.test(value)) {
      target.value = value;
      target.nextElementSibling?.focus();
      target.nextElementSibling?.select();
    } else {
      target.value = 0;
      target.select();
    }
  }

  setInputsDisabledStatus(isDisabled = false) {
    this.minMSB.disabled = isDisabled;
    this.minLSB.disabled = isDisabled;
    this.secMSB.disabled = isDisabled;
    this.secLSB.disabled = isDisabled;
  }

  resetControls() {
    clearInterval(this.intervalId);
    this.display.classList.remove('progress');
    this.setInputsDisabledStatus(false);
  }

  resetTimerValue() {
    this.minMSB.value = 0;
    this.minLSB.value = 0;
    this.secMSB.value = 0;
    this.secLSB.value = 0;
  }

  setTime() {
    this.minutes = +(this.minMSB.value + this.minLSB.value);
    this.seconds = +(this.secMSB.value + this.secLSB.value);
  }

  startTimer() {
    if (this.minutes === 0 && this.seconds === 0) {
      this.onReset();
      return;
    }

    this.intervalId = setInterval(() => {
      this.seconds -= 1;

      if (this.seconds < 0) {
        this.seconds = 59;
        this.minutes -= 1;
      }

      if (this.minutes === 0 && this.seconds === 0) {
        this.onReset();
      }

      this.setDisplay(this.minutes, this.seconds);
    }, 1000);
  }

  setDisplay(mins, secs) {
    [this.minMSB.value, this.minLSB.value] = String(mins).padStart(2, 0).split('');
    [this.secMSB.value, this.secLSB.value] = String(secs).padStart(2, 0).split('');
  }
}

const timer = new Timer('minMSB', 'minLSB', 'secMSB', 'secLSB', 'start', 'stop', 'reset', 'display');
display.addEventListener('input', timer.onInput);
document.body.addEventListener('click', timer.onClick);
