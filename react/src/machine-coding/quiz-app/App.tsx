import type { FC } from 'react';
import Quiz from './Quiz';
import styles from './quiz.module.scss';

const App: FC = () => {
  return (
    <main className={styles.app}>
      <Quiz />
    </main>
  )
}

export default App;
