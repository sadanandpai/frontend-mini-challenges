import { useState } from 'react';
import styles from './style.module.css';

const Comments = ({ comments, addComments, deleteComment }) => {
  const [showInput, setShowInput] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [hideInput, setHideInput] = useState(comments.id);

  const handleAdd = () => {
    if (commentText !== '') {
      let newComments = {
        id: Date.now(),
        text: commentText,
        replies: [],
      };
      addComments(comments.id, newComments);
      setShowInput(false);
    }
  };

  return (
    <div>
      <div className={comments.text ? styles.comment : ''}>
        {comments.text ? (
          <img
            src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
            alt={comments.text}
          />
        ) : null}
        <div className={styles.comment_details}>
          <h4>{comments.text}</h4>
          {showInput && (
            <input
              type="text"
              placeholder="Reply..."
              autoFocus
              onChange={(e) => setCommentText(e.target.value)}
            />
          )}
          {showInput ? (
            <>
              <button onClick={handleAdd}>Add</button>
              <button
                onClick={() => {
                  setShowInput(false);
                }}
              >
                Cancel
              </button>
            </>
          ) : comments.text ? (
            <>
              <button onClick={() => setShowInput(true)}>Reply</button>
              <button onClick={() => deleteComment(comments.id)}>Delete</button>
            </>
          ) : null}
        </div>
      </div>
      <div className={styles.comment_replie}>
        {comments?.replies?.map((comment) => (
          <Comments
            key={Math.random() * comment.id}
            comments={comment}
            addComments={addComments}
            deleteComment={deleteComment}
          />
        ))}
      </div>
    </div>
  );
};

export default Comments;
