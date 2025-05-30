import { useCallback } from 'react';
import styles from './SwapButton.module.css';
import { SwapButtonProps } from '../types';

/**
 * A button component for swapping languages
 * @param {SwapButtonProps} props - Component props
 * @returns {JSX.Element} SwapButton component
 */
export const SwapButton = ({ onClick }: SwapButtonProps) => {
  const handleClick = useCallback(() => {
    onClick();
  }, [onClick]);

  return (
    <button onClick={handleClick} className={styles.swapButton} aria-label="Swap languages">
      <svg
        className={`${styles.icon} ${styles.rotate}`}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7 16V4M7 4L3 8M7 4L11 8M17 8v12M17 20l4-4M17 20l-4-4" />
      </svg>
    </button>
  );
};
