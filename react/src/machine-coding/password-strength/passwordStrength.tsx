import styles from './passwordStrength.module.scss';
import { usePasswordStrength } from './hooks/usePasswordStrength';

const PasswordStrength = () => {
  const [password, passwordStrength, passwordScore, passwordIndicators, handlePasswordChange] = usePasswordStrength();

  return (
    <div className={styles.main}>
      <input
        type="text"
        id="password"
        min="8"
        max="32"
        autoFocus
        autoComplete="off"
        placeholder="Enter the password"
        value={password}
        onChange={handlePasswordChange}
      />

      <div className={styles.indicators}>
        <span className={passwordIndicators.lc ? styles.active : ''}>Lowercase</span>
        <span className={passwordIndicators.uc ? styles.active : ''}>Uppercase</span>
        <span className={passwordIndicators.num ? styles.active : ''}>Number</span>
        <span className={passwordIndicators.sym ? styles.active : ''}>Symbols</span>
      </div>

      <div className={styles.progressContainer}>
        <div
          className={styles.progressBar}
          style={{
            width: `${passwordScore * 10}%`,
            backgroundColor: passwordScore > 5 ? (passwordScore > 8 ? 'green' : 'orange') : 'red',
          }}
        ></div>
      </div>

      <p>
        Password has <strong>{password.length}</strong> chars
      </p>
      <p>
        Your password is <strong>{passwordStrength}</strong>
      </p>
    </div>
  );
};

export default PasswordStrength;
