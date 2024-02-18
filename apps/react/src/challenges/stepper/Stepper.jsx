import { useRef, useState, useEffect } from 'react';
import styles from './App.module.css';

const Stepper = ({ stepConfig = [] }) => {
  const [currentStep, setCurrentStep] = useState(1);

  const [isCompleted, setIsCompleted] = useState(false);

  // Calculating the margin for the progress-container so that it doesn't overflow the steps
  const [margin, setMargin] = useState(0);

  // Here, we are storing any one of the step (all are of same width i.e. flex:1) so that we can persist it throughout the renders
  const stepRef = useRef(null);

  const ActiveComponent = stepConfig[currentStep - 1]?.Component;

  const handleClick = () => {
    setCurrentStep((prevStep) => {
      if (prevStep === stepConfig.length) {
        setIsCompleted(true);
        return prevStep;
      } else {
        return prevStep + 1;
      }
    });
  };

  // Setting an event handler for window resizing for the responsiveness of out app
  useEffect(() => {
    setMargin(stepRef.current.offsetWidth / 2);

    window.addEventListener('resize', () => {
      setMargin(stepRef.current.offsetWidth / 2);
    });

    return window.removeEventListener('resize', () => {
      setMargin(stepRef.current.offsetWidth / 2);
    });
  }, []);

  if (stepConfig.length === 0) return <></>;

  return (
    <>
      <div className={styles.stepper}>
        {stepConfig.map((step, index) => {
          return (
            <div
              ref={stepRef}
              key={step.name}
              className={`${styles.step} ${currentStep === index + 1 ? styles.active : ''} ${
                currentStep > index + 1 || isCompleted ? styles.complete : ''
              }`}
            >
              <div className={styles['step-number']}>
                {currentStep > index + 1 || isCompleted ? <span>&#10003;</span> : index + 1}
              </div>

              <div className={styles['step-name']}>{step.name}</div>
            </div>
          );
        })}

        <div
          className={styles['progress-container']}
          style={{
            width: `calc(100% - ${margin * 2}px)`,
            marginLeft: margin,
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
        {!isCompleted && (
          <button className={styles.btn} onClick={handleClick}>
            {currentStep === stepConfig.length ? 'Finish' : 'Next'}
          </button>
        )}
      </div>
    </>
  );
};

export default Stepper;
