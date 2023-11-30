import styles from "./StarRating.module.css";

const Star = ({ marked, starId }) => {
  return (
    <span data-star-id={starId} className={styles.star} role="button">
      {marked ? "\u2605" : "\u2606"}
    </span>
  );
};

export default Star;
