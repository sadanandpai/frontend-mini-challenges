import styles from './Food.module.css';
import TagsList from './TagsList';

export default function Food({ data, handleOpenDialog }) {
  const { strMeal, strMealThumb } = data;
  return (
    <div className={styles['meal_container']}>
      <h2 className={styles['meal_name']}>{strMeal}</h2>
      <img className={styles['meal_img']} src={strMealThumb} alt={strMeal} />
      <TagsList data={data} />
      <button className={styles['openBtn']} onClick={handleOpenDialog}>
        detail recipe
      </button>
    </div>
  );
}

Food.propTypes;
