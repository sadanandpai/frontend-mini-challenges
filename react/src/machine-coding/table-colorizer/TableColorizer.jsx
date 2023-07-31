import React, { useRef, useState } from 'react';

import styles from './table-colorizer.module.css';

const length = 9;
const numberList = Array.from(new Array(length), (_, i) => i);

const TableColorizer = () => {
  const [colorArray, setColorArray] = useState([]);
  const colRef = useRef();

  const onColorMe = (e) => {
    e.preventDefault();
    if (parseInt(colRef.current.value) > 9 || parseInt(colRef.current.value) < 0) {
      alert('enter Valid Number');
    }
    if (colorArray.indexOf(parseInt(colRef.current.value)) === -1) {
      setColorArray((prev) => [...prev, parseInt(colRef.current.value)]);
    }
  };

  return (
    <div className={styles.color}>
      <form className={styles.form}>
        <input type="number" className={styles.numberInput} ref={colRef} />
        <div className="buttons">
          <input type="submit" value="Color Me" onClick={onColorMe} />
          <button className={styles.clearBtn} onClick={() => setColorArray([])}>
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
