import React, { useState } from 'react';

import QRCode from 'qrcode.react';
import styles from './QRCodeGenerator.module.css'; // Import the CSS Modules

function QRCodeGenerator() {
  const [text, setText] = useState('');
  const [qrCodeValue, setQRCodeValue] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const generateQRCode = () => {
    setQRCodeValue(text);
  };

  return (
    <div className={styles.QRCodeGenerator}>
      <input type="text" placeholder="Enter text" onChange={handleChange} className={styles['input-field']} />
      <button onClick={generateQRCode} className={styles['generate-button']}>
        Generate QR Code
      </button>
      {qrCodeValue && <QRCode value={qrCodeValue} className={styles.qrcode} size={256} />}
    </div>
  );
}

export default QRCodeGenerator;
