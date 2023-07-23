import styles from './Password.module.css';

export default function Form({ passwordLength, setPasswordLength, isChecked, handleChange }) {
  return (
    <form className={styles['password_form']}>
      <div>password length: {passwordLength}</div>
      <div>
        <input
          type="range"
          min="6"
          max="30"
          value={passwordLength}
          onChange={(e) => setPasswordLength(e.target.value)}
        />
      </div>

      <div>Include Lowercase character:</div>
      <div>
        <label>
          <input type="checkbox" checked={isChecked.isCheckedLowerCha} onChange={handleChange('isCheckedLowerCha')} />
          Lowercase character (e.g. abcdefg)
        </label>
      </div>

      <div>Include Uppercase character:</div>
      <div>
        <label>
          <input type="checkbox" checked={isChecked.isCheckedUpperCha} onChange={handleChange('isCheckedUpperCha')} />
          Uppercase character (e.g. ABCDEFG)
        </label>
      </div>

      <div>Include Number:</div>
      <div>
        <label>
          <input type="checkbox" checked={isChecked.isCheckedNumber} onChange={handleChange('isCheckedNumber')} />
          Number (e.g. 12345)
        </label>
      </div>

      <div>Include Symbols:</div>
      <div>
        <label>
          <input type="checkbox" checked={isChecked.isCheckedSymbols} onChange={handleChange('isCheckedSymbols')} />
          Symbols (e.g. !@#$%)
        </label>
      </div>
    </form>
  );
}

Form.propTypes;
