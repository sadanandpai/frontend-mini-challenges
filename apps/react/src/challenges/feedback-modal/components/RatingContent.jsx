import content from '../data/emojicontent';
import { appendActiveClass } from '../utilities/ClassUtility';
import styles from '../styles.module.css';

const RatingContent = ({ handleClick, activeRating }) => {
  return (
    <div className={styles.iconContainer}>
      {content.map((item) => (
        <div
          key={item.rating}
          className={appendActiveClass(item.rating, activeRating, styles.iconItem)}
          onClick={() => handleClick(item)}
        >
          <img src={item.url} className={styles.iconImage} alt={item.mood} />
          <p>{item.mood}</p>
        </div>
      ))}
    </div>
  );
};

export default RatingContent;
