import { SwapButtonProps } from '../types';
import styles from './SwapButton.module.css';

const SwapButton = ({ onClick }: SwapButtonProps) => {
  return (
    <button onClick={onClick} className={styles.button} title="Swap languages">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={styles.icon}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
        />
      </svg>
    </button>
  );
};

export default SwapButton;
