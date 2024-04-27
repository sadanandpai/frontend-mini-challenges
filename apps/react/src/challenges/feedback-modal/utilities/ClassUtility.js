import styles from '../styles.module.css';

export const appendActiveClass = (itemRating, activeRating, usedClasses) => {
  let className = usedClasses;
  className = activeRating === itemRating ? `${className} ${styles.active}` : `${className}`;
  return className;
};
