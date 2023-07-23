import styles from './Password.module.css';

export default function GeneratePassAndCopyBtn({
  isChecked,
  passwordLength,
  randomPassword,
  PasswordToRemember,
  ALPHABET_WORDS,
  passwordGenerate,
  handleCopyText,
  showTextNotification,
  notificationMessage,
}) {
  return (
    <div className={styles['fourth_section']}>
      <button
        className={styles['btn']}
        title="generate password"
        onClick={passwordGenerate({ ...isChecked }, passwordLength, randomPassword, PasswordToRemember, ALPHABET_WORDS)}
      >
        generate password
      </button>
      <button
        className={styles['btn']}
        title="copy password"
        onClick={(e) => {
          handleCopyText(e);
          showTextNotification('copied1');
        }}
      >
        copy
      </button>
      {notificationMessage === 'copied1' && <span>{notificationMessage.slice(0, 6)}</span>}
    </div>
  );
}

GeneratePassAndCopyBtn.propTypes;
