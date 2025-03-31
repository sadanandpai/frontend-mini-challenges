import { useEffect, useRef, useState } from 'react';

import style from './stopwatch.module.css';

// Countdown Component
const App = () => {
  // Create a ref (not to re-render everytime this value changes)
  let animationFrameRef = useRef(0);
  const lastTimer = useRef(null);

  // local state (changing this value rerenders the UI)
  const [time, setTime] = useState(0); // time in ms;
  const [isTimerRunning, setisTimerRunning] = useState(false);

  const onStart = () => {
    lastTimer.current = Date.now() - time;
    setisTimerRunning(true);
    // useRef store it value in ref.value key
    animationFrameRef.current = requestAnimationFrame(timerFn);
  };

  const onPause = () => {
    setisTimerRunning(false);
    cancelAnimationFrame(animationFrameRef.current);
  };

  const onReset = () => {
    setisTimerRunning(false);
    setTime(0);
    cancelAnimationFrame(animationFrameRef.current);
  };

  // Function to update the timer values
  const timerFn = () => {
    // Calculate the elapsed time in milliseconds
    const milliSecondElapsed = Date.now() - lastTimer.current;

    // updating time state
    setTime(milliSecondElapsed);

    // running the same function (this equal to recursion, but it is improved since browser has control over this fn)
    animationFrameRef.current = requestAnimationFrame(timerFn);
  };

  // cleanup (componentWillUnmount)
  useEffect(() => {
    return cancelAnimationFrame(animationFrameRef.current);
  }, []);

  const formatTime = (timeInMs) => {
    const secondsElapsed = Math.floor(timeInMs / 1000);
    const minutesElapsed = Math.floor(secondsElapsed / 60);

    // Convert the elapsed time to strings
    const milliSeconds = (timeInMs % 1000).toString().padStart(3, '0');
    const seconds = (secondsElapsed % 60).toString().padStart(2, '0');
    const minutes = minutesElapsed.toString().padStart(2, '0');
    return `${minutes}:${seconds}:${milliSeconds}`;
  };

  return (
    <div className={style['test']}>
      {/* Watch UI */}
      <div className={style['watch-container']}>
        <div className={style['watch']}>
          <div className={style['watch-heading']}>Stopwatch</div>
          <div className={style['watch-timer']}>
            {/* Display the timer string */}
            {formatTime(time)}
          </div>
          <div className={style['watch-btn__container']}>
            <button disabled={isTimerRunning} onClick={onStart} className={style['watch-btn']}>
              Start
            </button>

            <button onClick={onPause} disabled={!isTimerRunning} className={style['watch-btn']}>
              Pause
            </button>

            <button onClick={onReset} className={style['watch-btn']}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
