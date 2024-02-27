import styles from "./digit.module.css";

const Zero = () => {
  return (
    <div>
      <div className={styles.a}></div>
      <div className={styles.b}></div>
      <div className={styles.c}></div>
      <div className={`${styles.d} ${styles.off}`}></div>
      <div className={styles.e}></div>
      <div className={styles.f}></div>
      <div className={styles.g}></div>
    </div>
  );
};

const One = () => {
  return (
    <div>
      <div className={`${styles.a} ${styles.off}`}></div>
      <div className={styles.b}></div>
      <div className={`${styles.c} ${styles.off}`}></div>
      <div className={`${styles.d} ${styles.off}`}></div>
      <div className={`${styles.e} ${styles.off}`}></div>
      <div className={styles.f}></div>
      <div className={`${styles.g} ${styles.off}`}></div>
    </div>
  );
};
const Two = () => {
  return (
    <div>
      <div className={styles.a}></div>
      <div className={styles.b}></div>
      <div className={`${styles.c} ${styles.off}`}></div>
      <div className={styles.d}></div>
      <div className={styles.e}></div>
      <div className={`${styles.f} ${styles.off}`}></div>
      <div className={styles.g}></div>
    </div>
  );
};
const Three = () => {
  return (
    <div>
      <div className={styles.a}></div>
      <div className={styles.b}></div>
      <div className={`${styles.c} ${styles.off}`}></div>
      <div className={styles.d}></div>
      <div className={`${styles.e} ${styles.off}`}></div>
      <div className={styles.f}></div>
      <div className={styles.g}></div>
    </div>
  );
};
const Four = () => {
  return (
    <div>
      <div className={`${styles.a} ${styles.off}`}></div>
      <div className={styles.b}></div>
      <div className={styles.c}></div>
      <div className={styles.d}></div>
      <div className={`${styles.e} ${styles.off}`}></div>
      <div className={styles.f}></div>
      <div className={`${styles.g} ${styles.off}`}></div>
    </div>
  );
};
const Five = () => {
  return (
    <div>
      <div className={styles.a}></div>
      <div className={`${styles.b} ${styles.off}`}></div>
      <div className={styles.c}></div>
      <div className={styles.d}></div>
      <div className={`${styles.e} ${styles.off}`}></div>
      <div className={styles.f}></div>
      <div className={styles.g}></div>
    </div>
  );
};
const Six = () => {
  return (
    <div>
      <div className={styles.a}></div>
      <div className={`${styles.b} ${styles.off}`}></div>
      <div className={styles.c}></div>
      <div className={styles.d}></div>
      <div className={styles.e}></div>
      <div className={styles.f}></div>
      <div className={styles.g}></div>
    </div>
  );
};
const Seven = () => {
  return (
    <div>
    <div className={styles.a}></div>
    <div className={styles.b}></div>
      <div className={`${styles.c} ${styles.off}`}></div>
      <div className={`${styles.d} ${styles.off}`}></div>
      <div className={`${styles.e} ${styles.off}`}></div>
      <div className={styles.f}></div>
      <div className={`${styles.g} ${styles.off}`}></div>
    </div>
  );
};
const Eight = () => {
  return (
    <div>
      <div className={styles.a}></div>
      <div className={styles.b}></div>
      <div className={styles.c}></div>
      <div className={styles.d}></div>
      <div className={styles.e}></div>
      <div className={styles.f}></div>
      <div className={styles.g}></div>
    </div>
  );
};
const Nine = () => {
  return (
    <div>
      <div className={styles.a}></div>
      <div className={styles.b}></div>
      <div className={styles.c}></div>
      <div className={styles.d}></div>
      <div className={`${styles.e} ${styles.off}`}></div>
      <div className={styles.f}></div>
      <div className={styles.g}></div>
    </div>
  );
};

const Digit = ({ digit }) => {

  const showDigit = (digit) => {
    switch(digit) {
      case 0:
        return <Zero/>;
      case 1:
        return <One/>;
      case 2:
        return <Two/>;
      case 3:
        return <Three/>;
      case 4:
        return <Four/>;
      case 5:
        return <Five/>;
      case 6:
        return <Six/>;
      case 7:
        return <Seven/>;
      case 8:
        return <Eight/>;
      case 9:
        return <Nine/>;
      default:
        return <Zero/>;
    }
  }

  return (
    <>
      {showDigit(digit)}
    </>
  );
};

export default Digit;
