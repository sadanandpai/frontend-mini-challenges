// src/App.js
import React, { useState } from 'react';
import './styles.module.css';

const questions = [
  'Do you enjoy team sports?',
  'Do you like running or endurance activities?',
  'Are you interested in individual sports?',
  'Do you prefer indoor or outdoor sports?',
];

const Sport = () => {
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
    } else {
      return 'Running';
    }
  };

  return (
    <>
      <div className="Sport">
        <div className="my-container">
          <h1>Discover Your Natural Sport</h1>
          <div className="question" style={{ marginBottom: '1rem' }}>
            {step < questions.length ? questions[step] : ''}
          </div>
          <div className="answers">
            {step < questions.length ? (
              <>
                <button onClick={() => handleAnswer('Yes')}>Yes</button>
                <button onClick={() => handleAnswer('No')}>No</button>
              </>
            ) : (
              <button onClick={() => setStep(0)} className="start-over">
                Start Over
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sport;
