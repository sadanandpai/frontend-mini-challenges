import styles from './Password.module.css';

export default function GeneratePass({ generatedPassword, handleCopyText, showTextNotification, notificationMessage }) {
  return (
    <div className={styles['second_section']}>
      <label>Your generated password: </label>
      <div>
        <input
          className={styles['inputText']}
          type="text"
          placeholder="Your generated password will appear here"
          value={generatedPassword}
          readOnly
        />
        <button
          className={styles['btn']}
          title="copy password"
          onClick={(e) => {
            handleCopyText(e);
            showTextNotification('copied2');
          }}
        >
          copy
        </button>
        {notificationMessage === 'copied2' && <span>{notificationMessage.slice(0, 6)}</span>}
      </div>
    </div>
  );
}

GeneratePass.propTypes;
