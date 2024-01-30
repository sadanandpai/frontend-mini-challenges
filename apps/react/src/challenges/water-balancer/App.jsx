import { useEffect, useState } from 'react';
import TankContainer from './components/tank-container';
import { initialTanks } from './config';
import { delay, getBalancedTanks, getTanksState } from './utils/helpers';
import Controller from './components/controller';
import styles from './styles.module.css';

export default function App() {
  const [tanksCount, setTanksCount] = useState(initialTanks);
  const [tanks, setTanks] = useState(() => getTanksState(tanksCount));

  useEffect(() => {
    const newTanks = getTanksState(tanksCount);
    setTanks(newTanks);
  }, [tanksCount]);

  useEffect(() => {
    let cleanup = false;

    async function balanceLevels() {
      await delay(1000);

      if (cleanup) {
        return;
      }

      const newTanks = getBalancedTanks(tanks);
      if (newTanks) {
        setTanks(newTanks);
      }
    }

    balanceLevels();

    return () => {
      cleanup = true;
    };
  }, [tanks]);

  return (
    <div className={styles['text-center']}>
      <p>Press and Hold "Add" to start filling the tank</p>

      <main className={styles.tanks}>
        {tanks.map((tank, index) => (
          <TankContainer key={index} tank={tank} setTanks={setTanks} index={index} />
        ))}
      </main>
      <Controller tanksCount={tanksCount} setTanksCount={setTanksCount} />
    </div>
  );
}
