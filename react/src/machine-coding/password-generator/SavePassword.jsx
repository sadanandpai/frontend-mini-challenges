import styles from './Password.module.css';
import { useState } from 'react';

export default function SavePassword({
  generatedPassword,
  handleSavePasswordAndName,
  saveNameAndPass,
  setLocalStorage,
  checkPasswordNameExit,
  showTextNotification,
  notificationMessage,
}) {
  const [isSave, setIsSave] = useState(false);
  const [passwordName, setPasswordName] = useState('');
  return (
    <div className={styles['fifth_section']}>
      <label title="save your password" htmlFor="checkToSave">
        Save password:
      </label>
      <input
        id="checkToSave"
        type="checkbox"
        checked={isSave}
        onChange={() => setIsSave(!isSave)}
        disabled={generatedPassword == '' ? true : false}
      />
      {isSave && (
        <div>
          <input
            className={styles['inputText']}
            type="text"
            placeholder="name your password"
            value={passwordName}
            onChange={(e) => setPasswordName(e.target.value)}
          />
          <button
            className={styles['btn']}
            title="save password"
            onClick={handleSavePasswordAndName(
              passwordName,
              generatedPassword,
              saveNameAndPass,
              setLocalStorage,
              checkPasswordNameExit,
              showTextNotification
            )}
          >
            save
          </button>
          {(notificationMessage === 'cannot save without name!' && <span>{notificationMessage}</span>) ||
            (notificationMessage === 'name already taken!' && <span>{notificationMessage}</span>)}
        </div>
      )}
    </div>
  );
}

SavePassword.propTypes;
