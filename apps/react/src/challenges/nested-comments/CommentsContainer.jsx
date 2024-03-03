import styles from './style.module.css';
import Comments from './Comments';

const CommentsContainer = ({ commentData }) => {
  return (
    <>
      {commentData.map((comment) => {
        return (
          <div key={comment.id}>
            <Comments {...comment} />
            <div className={styles.comment_replie}>
              <CommentsContainer commentData={comment.replies} />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CommentsContainer;
