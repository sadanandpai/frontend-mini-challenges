import styles from './Food.module.css';
import Table from './Table';
import TagsList from './TagsList';

export default function Dialog({ data, handleCloseDialog }) {
  const { strMeal, strMealThumb, strInstructions, strYoutube } = data;

  return (
    <dialog open onClose={handleCloseDialog}>
      <div className={styles['modal_meal_container']}>
        <button className={styles['closeBtn']} onClick={handleCloseDialog}>
          &times;
        </button>

        <h2 className={styles['modal_meal_name']}>{strMeal}</h2>
        <img className={styles['modal_meal_img']} src={strMealThumb} alt={strMeal} />

        <TagsList data={data} />
        <Table data={data} />

        <h2>Instruction 📜</h2>

        <p className={styles['modal_instruction']}>{strInstructions}</p>

        {strYoutube && (
          <a href={strYoutube} rel="noopener noreferrer" target="_blank">
            YouTube link for {strMeal}
          </a>
        )}
      </div>
    </dialog>
  );
}

Dialog.propTypes;
