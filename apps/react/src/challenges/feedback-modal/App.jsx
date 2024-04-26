import { useState } from 'react';
import styles from './styles.module.css';
import FeedbackModal from './components/FeedbackModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.feedbackContainer}>
      <button className={styles.feedbackBtn} onClick={openModal}>
        Feedback
      </button>
      {isModalOpen && <FeedbackModal onClose={closeModal} />}
    </div>
  );
}

export default App;
