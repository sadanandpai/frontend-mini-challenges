import styles from './style.module.css';

const Comments = ({ name, comment }) => {
  return (
    <div className={styles.comment}>
      <img src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt={name} />
      <div className={styles.comment_details}>
        <h4>{name}</h4>
        <p>{comment}</p>
      </div>
    </div>
  );
};

export default Comments;
