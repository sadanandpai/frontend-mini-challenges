import style from './BMI.module.scss';

const BMICard = ({ BMI, category }) => {
  const ranges = [
    'Less than 18.5 = Underweight',
    'Between 18.5 - 24.9 = Healthy Weight',
    'Between 25 - 29.9 = Overweight',
    'Over 30 = Obese',
  ];

  return (
    <div className={style.card}>
      <h1>BMI = {BMI}</h1>
      <h3>{category}</h3>
      <p className={style.ranges}>BMI weight ranges</p>
      {ranges.map((range) => {
        return <p key={range}>{range}</p>;
      })}
    </div>
  );
};

export default BMICard;
