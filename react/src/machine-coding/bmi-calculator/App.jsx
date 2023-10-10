import React, { useEffect, useState } from 'react';

import BMICalculator from './BMICalculator';
import style from './BMI.module.scss';

const App = () => {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [BMI, setBMI] = useState(null);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    if (BMI) {
      let range = BMI < 18.5 ? 'Underweight' : BMI < 24.9 ? 'Healthy Weight' : BMI < 29.9 ? 'Overweight' : 'Obese';
      setCategory(() => {
        return range;
      });
    }
  }, [BMI]);

  const handleHeightChange = (event) => {
    try {
      const height = parseFloat(event.target.value).toFixed(2);
      if (height > 10)
        setHeight(() => {
          return height;
        });
    } catch (error) {
      console.log(error, 'Enter numeric values only');
      setHeight(0);
    }
  };

  const handleWeightChange = (event) => {
    try {
      const weight = parseFloat(event.target.value).toFixed(2);
      if (weight > 10)
        setWeight(() => {
          return weight;
        });
    } catch (error) {
      console.log(error, 'Enter numeric values only');
      setHeight(0);
    }
  };

  const calculateBMI = () => {
    if (height && weight) {
      const value = (weight / ((height * height) / 10000)).toFixed(2);
      setBMI(() => {
        return value;
      });
    }
  };

  return (
    <div className={style.App}>
      <BMICalculator
        height={height}
        weight={weight}
        handleHeightChange={handleHeightChange}
        handleWeightChange={handleWeightChange}
        BMI={BMI}
        calculateBMI={calculateBMI}
        category={category}
      />
    </div>
  );
};

export default App;
