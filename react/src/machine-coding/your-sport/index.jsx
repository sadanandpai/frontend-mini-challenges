// src/App.js
import React, { useState } from 'react';

import styles from './styles.module.css';

const questions = [
  'Do you enjoy team sports?',
  'Do you like running or endurance activities?',
  'Are you interested in individual sports?',
  'Do you prefer indoor or outdoor sports?',
  'Are you a fan of water sports?',
  'Do you like racket sports?',
];

const YourSport = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  const handleAnswer = (answer) => {
    const newAnswers = [...answers];
    newAnswers[step] = answer;

    if (step < questions.length - 1) {
      setStep(step + 1);
      setAnswers(newAnswers);
    } else {
      // Calculate and display the natural sport based on answers
      const naturalSport = calculateNaturalSport(newAnswers);
      alert(`Your natural sport is: ${naturalSport}`);
    }
  };

  const calculateNaturalSport = (answers) => {
    // You can define your own logic to determine the natural sport here
    // For simplicity, let's assume some basic logic.
    if (answers[0] === 'Yes' && answers[1] === 'Yes') {
      return 'Soccer';
    } else if (answers[2] === 'Yes' && answers[3] === 'Indoor') {
      return 'Table Tennis';
    } else if (answers[4] === 'Yes') {
      return 'Swimming';
    } else if (answers[5] === 'Yes') {
      return 'Tennis';
    } else {
      return 'Running';
    }
  };

  return (
    <div className={styles.sport}>
      <div className={styles.container}>
        <h1 className={styles.header}>Discover Your Natural Sport</h1>
        <div className={styles.question}>{step < questions.length ? questions[step] : ''}</div>
        <div className={styles.answers}>
          {step < questions.length ? (
            <>
              <button className={styles.button} onClick={() => handleAnswer('Yes')}>
                Yes
              </button>
              <button className={styles.button} onClick={() => handleAnswer('No')}>
                No
              </button>
            </>
          ) : (
            <button onClick={() => setStep(0)} className={styles.buttonStartOver}>
              Start Over
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default YourSport;
