export class Timer {
  isTimerRunning = false;

  startTimer(time, timerCallback, completionCallback) {
    if (this.isTimerRunning) {
      return;
    }

    this.time = time;
    this.timerCallback = timerCallback;
    this.completionCallback = completionCallback;

    this.intervalId = setInterval(this.runTimer, 1000);
    this.isTimerRunning = true;
  }

  stopTimer() {
    clearInterval(this.intervalId);
    this.isTimerRunning = false;
  }

  runTimer = () => {
    if (this.time === 0) {
      this.completionCallback();
      this.stopTimer();
      return;
    }

    this.time--;
    this.timerCallback(this.time);
  };
}
