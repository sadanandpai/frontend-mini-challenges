import React, { useState } from 'react';

import styles from './color.module.css'; // Import styles from the CSS module

function mixColors(color1, color2) {
  // Mix the two colors
  const r1 = parseInt(color1.slice(1, 3), 16);
  const g1 = parseInt(color1.slice(3, 5), 16);
  const b1 = parseInt(color1.slice(5, 7), 16);

  const r2 = parseInt(color2.slice(1, 3), 16);
  const g2 = parseInt(color2.slice(3, 5), 16);
  const b2 = parseInt(color2.slice(5, 7), 16);

  const mixedColor = `#${Math.round((r1 + r2) / 2).toString(16)}${Math.round((g1 + g2) / 2).toString(16)}${Math.round(
    (b1 + b2) / 2
  ).toString(16)}`;

  return mixedColor;
}

function ColorMixer() {
  const [color1, setColor1] = useState('#FF5733'); // Default color 1
  const [color2, setColor2] = useState('#33FF57'); // Default color 2

  const handleColorChange = (e) => {
    const { name, value } = e.target;
    name === 'color1' ? setColor1(value) : setColor2(value);
  };

  const resetColors = () => {
    setColor1('#FF5733');
    setColor2('#33FF57');
  };

  return (
    <div className={styles['color-mixing-container']}>
      <div className={styles['color-box-top']} style={{ backgroundColor: mixColors(color1, color2) }}>
        <p style={{ textAlign: 'center' }}>Mixed Color</p>
      </div>
      <div className={styles['color-inputs']}>
        <div className={styles['color-input']}>
          <label htmlFor="color1">Color 1</label>
          <input type="color" name="color1" value={color1} onChange={handleColorChange} />
        </div>
        <div className={styles['color-input']}>
          <label htmlFor="color2">Color 2</label>
          <input type="color" name="color2" value={color2} onChange={handleColorChange} />
        </div>
        <button className={styles['mix-button']} onClick={resetColors} style={{ marginTop: '1rem' }}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default ColorMixer;
