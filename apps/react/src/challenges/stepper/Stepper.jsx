import { useState } from 'react';
import styles from './App.module.css';

const Stepper = ({ stepConfig = [] }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isCompleted, setIsCompleted] = useState(false);

  if (stepConfig.length === 0) {
    return null;
  }

  const ActiveComponent = stepConfig[currentStep - 1]?.Component;

  const handleClick = (index) => {
    setIsCompleted(false);
    setCurrentStep(index);
  };

  const handlePrevClick = () => {
    setCurrentStep((prevStep) => {
      if (prevStep < stepConfig.length + 1 && isCompleted) {
        setIsCompleted(false);
        return prevStep;
      } else {
        return prevStep - 1;
      }
    });
  };

  const handleNextClick = () => {
    setCurrentStep((prevStep) => {
      if (prevStep === stepConfig.length) {
        setIsCompleted(true);
        return prevStep;
      } else {
        return prevStep + 1;
      }
    });
  };

  return (
    <>
      <div className={styles.stepper}>
        {stepConfig.map((step, index) => {
          return (
            <div
              key={step.name}
              className={`${styles.step} ${currentStep === index + 1 ? styles.active : ''} ${
                currentStep > index + 1 || isCompleted ? styles.complete : ''
              }`}
            >
              <div className={styles['step-number']} onClick={() => handleClick(index + 1)}>
                {currentStep > index + 1 || isCompleted ? <span>&#10003;</span> : index + 1}
              </div>

              <div className={styles['step-name']}>{step.name}</div>
            </div>
          );
        })}

        <div
          className={styles['progress-container']}
          style={{
            width: `calc(100% - (100% / ${stepConfig.length}))`,
            marginLeft: `calc(100% /(${stepConfig.length} * 2))`,
            zIndex: -1,
          }}
        >
          <div
            className={styles['progress-bar']}
            style={{
              width: `${((currentStep - 1) / (stepConfig.length - 1)) * 100}%`,
            }}
          ></div>
        </div>
      </div>

      <div className={styles['action-container']}>
        {!isCompleted && <ActiveComponent />}
        {isCompleted && <div>Order Delivered successfully!🎉</div>}
        <span>
          <button disabled={currentStep === 1} className={styles.btn} onClick={handlePrevClick}>
            Previous
          </button>

          <button disabled={isCompleted} className={styles.btn} onClick={handleNextClick}>
            {currentStep === stepConfig.length ? 'Finish' : 'Next'}
          </button>
        </span>
      </div>
    </>
  );
};

export default Stepper;
