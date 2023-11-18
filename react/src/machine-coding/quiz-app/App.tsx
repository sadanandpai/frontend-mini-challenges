import { FC } from 'react';
import styles from './quiz.module.scss';
import Quiz from './Quiz';

const App: FC = () => {
  return (
    <main className={styles.app}>
      <Quiz />
    </main>
  )
}

export default App;