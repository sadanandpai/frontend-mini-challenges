import React, { useState, useRef, useEffect } from 'react';
import styles from './table-colorizer.module.css';

const ColorizerForm = ({ onColorMe, onClear, inputError }) => {
  const inputRef = useRef(null);
  const [value, setValue] = useState('');

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      onColorMe(value.trim());
      setValue('');
    }
  };

  const handleClear = (e) => {
    e.preventDefault();
    setValue('');
    onClear();
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      aria-label="Colorize cells form"
      noValidate
    >
      <div className={styles.inputGroup}>
        <label htmlFor="cellNumber" className={styles.label}>
          Enter a number (1-9):
          <input
            id="cellNumber"
            ref={inputRef}
            type="number"
            min="1"
            max="9"
            value={value}
            onChange={handleChange}
            className={`${styles.numberInput} ${inputError ? styles.inputError : ''}`}
            aria-invalid={!!inputError}
            aria-describedby={inputError ? 'error-message' : undefined}
            required
          />
        </label>

        {inputError && (
          <p id="error-message" className={styles.error} role="alert">
            {inputError}
          </p>
        )}
      </div>

      <div className={styles.buttonGroup}>
        <button type="submit" className={styles.button}>
          Color Me
        </button>
        <button
          type="button"
          className={`${styles.button} ${styles.clearButton}`}
          onClick={handleClear}
        >
          Clear All
        </button>
      </div>
    </form>
  );
};

export default ColorizerForm;
