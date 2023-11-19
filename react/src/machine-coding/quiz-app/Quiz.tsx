import { type FC, useState } from 'react';
import Result from './Result';
import { quiz } from './react-quiz.json';
import { addLeadingZero } from './utils';
import type { ResultObj } from './types';
import styles from './quiz.module.scss';

const Quiz: FC = () => {
  const [activeQuestion, setActiveQuestion] = useState<number>(0)
  const [selectedAnswer, setSelectedAnswer] = useState<boolean>(false)
  const [showResult, setShowResult] = useState<boolean>(false)
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null)
  const [result, setResult] = useState<ResultObj>({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  })

  const { questions, topic } = quiz
  const { question, choices, correctAnswer } = questions[activeQuestion]

  const onClickNext = () => {
    setSelectedAnswerIndex(null)
    setResult((prev) =>
      selectedAnswer
        ? {
          ...prev,
          score: prev.score + 5,
          correctAnswers: prev.correctAnswers + 1,
        }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    )
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1)
    } else {
      setActiveQuestion(0)
      setShowResult(true)
    }
  }

  const onAnswerSelected = (answer: string, index: number) => {
    setSelectedAnswerIndex(index)
    if (answer === correctAnswer) {
      setSelectedAnswer(true)
    } else {
      setSelectedAnswer(false)
    }
  }

  return (
    <section className={styles.quiz_container}>
      {!showResult ? (
        <div>
          <div className={styles.quiz_container_header}>
            <p>TOPIC: {topic}</p>
            <div>
              <span>{addLeadingZero(activeQuestion + 1)}</span>
              <span>/{addLeadingZero(questions.length)}</span>
            </div>
          </div>
          <div className={styles.question}>
            <h2>{question}</h2>
            <ul className={styles.question_choices}>
              {choices.map((answer, index) => (
                <li
                  onClick={() => onAnswerSelected(answer, index)}
                  key={answer}
                  className={`${styles.question_choices_choice}
                  ${selectedAnswerIndex === index ? styles.selected : ""}`}
                >
                  {answer}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.quiz_container_footer}>
            <button onClick={onClickNext} disabled={selectedAnswerIndex === null}>
              {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
            </button>
          </div>
        </div>
      ) : <Result
        totalQuestions={questions.length}
        result={result}
      />}
    </section>
  )
}

export default Quiz
