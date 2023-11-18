import { FC } from 'react';
import styles from './quiz.module.scss';
import { addLeadingZero, type ResultObj } from './Quiz';

interface IResult {
  totalQuestions: number;
  result: ResultObj;
}

const Result: FC<IResult> = (props) => {
  const { totalQuestions, result } = props;

  return (
    <div className={styles.quiz_result}>
      <div>
        <h3>Result</h3>
        <table>
          <tbody>
            <tr>
              <td>Total Questions</td>
              <td>{addLeadingZero(totalQuestions)}</td>
            </tr>

            <tr>
              <td>Total Score</td>
              <td>{addLeadingZero(result.score)}</td>
            </tr>

            <tr>
              <td>Correct Answers</td>
              <td>{addLeadingZero(result.correctAnswers)}</td>
            </tr>

            <tr>
              <td>Wrong Answers</td>
              <td>{result.wrongAnswers}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Result