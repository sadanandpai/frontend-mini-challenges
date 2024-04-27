import { useState } from 'react';
import RatingContent from './RatingContent';
import styles from '../styles.module.css';

const FeedbackModal = ({ onClose }) => {
  const [feedbackContent, setFeedbackContent] = useState('');
  const [activeRating, setActiveRating] = useState({});
  const [isSubmitTrue, setIsSubmitTrue] = useState(false);

  const handleSubmit = () => {
    setIsSubmitTrue(true);
  };

  const handleClick = (item) => {
    setActiveRating(item);
  };

  const handleFeedbackContent = (e) => {
    setFeedbackContent(e.target.value);
  };

  return (
    <div className={styles.modalContainer} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.modalClose} onClick={onClose}>
          x
        </button>
        <h1>User Feedback</h1>
        {!isSubmitTrue ? (
          <form className={styles.feedbackContent} onSubmit={handleSubmit}>
            <RatingContent handleClick={handleClick} activeRating={activeRating.rating} />
            <textarea
              placeholder="Please share additional feedback (optional)"
              rows="5"
              cols="30"
              style={{ width: '80%', margin: '10px', fontSize: '12px', padding: '2px' }}
              value={feedbackContent}
              onChange={handleFeedbackContent}
            ></textarea>
            <button
              type="submit"
              className={styles.feedbackBtn}
              disabled={!Object.keys(activeRating).length}
            >
              Submit
            </button>
          </form>
        ) : (
          <div className={styles.feedbackResponse}>
            <p>Feedback: {activeRating.mood}</p>
            <p>Thank you for your feedback</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedbackModal;
