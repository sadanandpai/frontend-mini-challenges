import React, { useEffect, useState } from 'react';

import ColorizerForm from './colorize-form';
import styles from './table-colorizer.module.css';

const GRID_SIZE = 9;
const numberList = Array.from({ length: GRID_SIZE }, (_, i) => i + 1);

const TableColorizer = () => {
  const [colorArray, setColorArray] = useState([]);
  const [inputError, setInputError] = useState('');
  const [announcement, setAnnouncement] = useState('');

  // Announce changes to screen readers
  useEffect(() => {
    if (announcement) {
      const timer = setTimeout(() => setAnnouncement(''), 1000);
      return () => clearTimeout(timer);
    }
  }, [announcement]);

  const validateInput = (value) => {
    const num = parseInt(value, 10);
    if (isNaN(num) || num < 1 || num > 9) {
      return 'Please enter a valid number between 1 and 9';
    }
    if (colorArray.includes(num)) {
      return 'This number is already colored';
    }
    return '';
  };

  const handleColorMe = (value) => {
    const error = validateInput(value);
    if (error) {
      setInputError(error);
      setAnnouncement(error);
      return false;
    }

    const cellNumber = parseInt(value, 10);
    setColorArray((prev) => [...new Set([...prev, cellNumber])]);
    setInputError('');
    return true;
  };

  const handleClear = () => {
    setColorArray([]);
    setInputError('');
    setAnnouncement('All cells cleared');
  };

  return (
    <div className={styles.wrapper}>
      {/* Live region for screen reader announcements */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {announcement}
      </div>

      <div
        className={styles.grid}
        role="grid"
        aria-label="Number grid"
        aria-describedby="grid-instructions"
      >
        <div id="grid-instructions" className="sr-only">
          Use arrow keys to navigate between cells. Press Enter or Space to select or deselect a
          number.
          {colorArray.length > 0 ? ` ${colorArray.length} of 9 cells selected.` : ''}
        </div>
        {numberList.map((number) => (
          <button
            key={number}
            role="gridcell"
            aria-selected={colorArray.includes(number)}
            aria-label={`Number ${number}${colorArray.includes(number) ? ', selected' : ''}`}
            onClick={() => {
              if (colorArray.includes(number)) {
                setColorArray(colorArray.filter((n) => n !== number));
                setAnnouncement(`Number ${number} deselected`);
              } else if (colorArray.length < 9) {
                setColorArray([...colorArray, number]);
                setAnnouncement(`Number ${number} selected`);
              }
            }}
            className={`${styles.cell} ${colorArray.includes(number) ? styles.coloredCell : ''} ${styles.focusVisible}`}
          >
            {number}
          </button>
        ))}
      </div>

      <ColorizerForm onColorMe={handleColorMe} onClear={handleClear} inputError={inputError} />
    </div>
  );
};

export default TableColorizer;
