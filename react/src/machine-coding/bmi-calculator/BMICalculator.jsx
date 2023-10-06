import BMICard from './BMICard';
import style from './BMI.module.scss';

const BMICalculator = ({ handleHeightChange, handleWeightChange, BMI, calculateBMI, category }) => {
  return (
    <div className={style.container}>
      <div className={style.input}>
        <label htmlFor="height">
          Height <span>(in cm)</span>
        </label>
        <input type="text" name="height" onChange={handleHeightChange} />
        <label htmlFor="weight">
          Weight <span>(in kg)</span>
        </label>
        <input type="text" name="weight" onChange={handleWeightChange} />
        <button className={style.calculateButton} onClick={calculateBMI}>
          Calculate
        </button>
      </div>
      <BMICard BMI={BMI} category={category} />
    </div>
  );
};

export default BMICalculator;
