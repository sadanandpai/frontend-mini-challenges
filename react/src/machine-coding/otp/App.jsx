import React, { useState, useRef } from 'react';
import styles from './otp.module.css';
const App = () => {
  let [otpfields, setOtpFields] = useState(Array(4).fill(''));
  let otpinputref = useRef([]);
  const handleOtp = (e, index) => {
    const numericValue = e.target.value.replace(/[^0-9]/g, '');
    const singleDigitValue = numericValue.slice(0, 1);
    let copyotpfields = [...otpfields];
    copyotpfields[index] = singleDigitValue;
    if (index < otpfields.length - 1) {
      otpinputref.current[index + 1].focus();
    }
    setOtpFields(copyotpfields);
  };
  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace') {
      e.preventDefault();
      let copyotpfields = [...otpfields];
      copyotpfields[index] = '';
      setOtpFields(copyotpfields);
      if (index > 0) {
        otpinputref.current[index - 1].focus();
      }
    } else if (e.key === 'ArrowRight' && index < otpfields.length - 1) {
      otpinputref.current[index + 1].focus();
    } else if (e.key === 'ArrowLeft' && index > 0) {
      otpinputref.current[index - 1].focus();
    }
  };
  return (
    <>
      <div className={styles.otpFields}>
        <div className={styles.otpinput}>
          {otpfields.map((_, index) => {
            return (
              <input
                key={index}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={(el) => (otpinputref.current[index] = el)}
                onChange={(e) => handleOtp(e, index)}
                value={otpfields[index]}
                type="number"
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;
