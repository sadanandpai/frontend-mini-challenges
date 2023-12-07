import React, { useEffect, useState } from 'react';
import styles from './GuessNumber.module.css';

export default function App() {
  // State variables for the random number, user guess, and game status
  const [randomNumber, setRandomNumber] = useState(); // Stores the random number to guess
  const [guessDisabled, setGuessDisabled] = useState(false); // Controls the "Check" button
  const [userGuess, setUserGuess] = useState(1); // Stores the user's guess
  const [lowGuess, setLowGuess] = useState(false); // Indicates if the guess is too low
  const [highGuess, setHighGuess] = useState(false); // Indicates if the guess is too high
  const [correctGuess, setCorrectGuess] = useState(false); // Indicates if the guess is correct

  // Initialize the random number when the component mounts
  useEffect(() => {
    setRandomNumber(Math.round(100 * Math.random()));
  }, []);

  // Handle user guess submission where we Check if the user guess is lower, higher, or correct
  const handleGuess = (e) => {
    e.preventDefault();

    if (userGuess < randomNumber) {
      setLowGuess(true);
      setHighGuess(false);
    } else if (userGuess > randomNumber) {
      setHighGuess(true);
      setLowGuess(false);
    } else {
      setCorrectGuess(true);
      setLowGuess(false);
      setHighGuess(false);
      setGuessDisabled(true);
    }
  };

  // Handle game restart where we Generate a new random number and reset game state
  const handleRestart = () => {

    setRandomNumber(Math.round(100 * Math.random()));
    setCorrectGuess(false);
    setLowGuess(false);
    setHighGuess(false);
    setGuessDisabled(false);
    setUserGuess(1);
  };

  return (
    <div className={styles.app}>
      <form onSubmit={handleGuess}>
        <label htmlFor="input">Guess a Number between 0 and 100</label>
        <input
          id="input"
          type="number"
          value={userGuess}
          min="0"
          max="100"
          placeholder="Guess-Number"
          onChange={(e) => setUserGuess(Number(e.target.value))}
        />
        <div className={styles.widget}>
          <button type="reset" onClick={handleRestart}>
            Reset
          </button>
          <button type="submit" disabled={guessDisabled}>
            Check
          </button>
        </div>
      </form>
      <div className={styles.text}>
        {lowGuess && (
          <p>
            Your guess is <b>Less</b> than the actual number
          </p>
        )}
        {highGuess && (
          <p>
            Your guess is <b>Higher</b> than the actual number
          </p>
        )}
        {correctGuess && (
          <p>
            Your guess is <b>right</b>
          </p>
        )}
      </div>
    </div>
  );
}
