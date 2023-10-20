import React, { useState } from 'react';
import styles from './NumberGuessingGameComponent.module.css';

function NumberGuessingGameComponent() {
  const [targetNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);

  const handleInputChange = (e) => {
    setGuess(e.target.value);
  };

  const handleGuess = () => {
    const userGuess = parseInt(guess, 10);
    if (isNaN(userGuess)) {
      setMessage('Please enter a valid number.');
      return;
    }

    setAttempts(attempts + 1);

    if (userGuess === targetNumber) {
      setMessage(`Congratulations! You guessed the number in ${attempts + 1} attempts.`);
    } else if (userGuess < targetNumber) {
      setMessage('Try a higher number.');
    } else {
      setMessage('Try a lower number.');
    }
  };

  return (
    <div className={styles.gameContainer}>
      <h1>Number Guessing Game</h1>
      <p>Guess a number between 1 and 100.</p>
      <input
        type="number"
        value={guess}
        onChange={handleInputChange}
        placeholder="Enter your guess"
      />
      <button onClick={handleGuess}>Guess</button>
      <p>{message}</p>
    </div>
  );
}

export default NumberGuessingGameComponent;
