import React, { useRef, useState } from 'react';

import styles from './table-colorizer.module.css';

const length = 9;
const numberList = Array.from(new Array(length), (_, i) => i);

const TableColorizer = () => {
  const [colorArray, setColorArray] = useState([]);
  const colRef = useRef();
  const [inputError, setInputError] = useState(null);

  const onColorMe = (e) => {
    e.preventDefault();

    const cellNumber = parseInt(colRef.current.value);

    if (isNaN(cellNumber) || cellNumber > 9 || cellNumber < 1) {
      setInputError('Please enter a valid number between 1 to 9');
      return;
    }

    setInputError(null);

    if (colorArray.indexOf(cellNumber) === -1) {
      setColorArray((prev) => [...prev, cellNumber]);
    }
  };

  const onClearMe = (e) => {
    e.preventDefault();

    // Reset the states to initial values
    setColorArray([]);
    setInputError(null);
    colRef.current.value = '';
  };

  return (
    <div className={styles.color}>
      <form className={styles.form}>
        <input type="number" className={styles.numberInput} ref={colRef} />
        {inputError && <p className={styles.error}>{inputError}</p>}
        <div className="buttons">
          <input type="submit" value="Color Me" onClick={onColorMe} />
          <button className={styles.clearBtn} onClick={onClearMe}>
            Clear Me
          </button>
        </div>
      </form>

      <div className={styles.containers}>
        {numberList.map((e, p) => {
          return (
            <div key={p} className={colorArray.indexOf(e + 1) !== -1 ? styles.containerColor : styles.container}>
              {e + 1}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TableColorizer;
