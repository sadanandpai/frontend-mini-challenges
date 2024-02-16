import styles from '../styles.module.css';

function Controller({ tanksCount, setTanksCount }) {
  return (
    <section className={styles.range}>
      <div className={styles['form-item']}>
        <label htmlFor="waterTanks">Water Tanks: </label>
        <input
          type="range"
          min="4"
          max="8"
          value={tanksCount}
          onChange={(e) => setTanksCount(e.target.value)}
          className="slider"
          id="waterTanks"
        />
      </div>
    </section>
  );
}

export default Controller;
