import styles from './Food.module.css';

export default function TagsList({ data }) {
  const { strCategory, strArea, strTags } = data;
  return (
    <ul className={styles['modal_tags_container']}>
      {strCategory && <li className={styles['modal_tag']}>{strCategory}</li>}
      {strArea && <li className={styles['modal_tag']}>{strArea}</li>}
      {strTags &&
        strTags.split(',').map((tag, index) => {
          return (
            <li className={styles['modal_tag']} key={index}>
              {tag}
            </li>
          );
        })}
    </ul>
  );
}

TagsList.propTypes;
