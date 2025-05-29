import { useCallback } from 'react';
import styles from './TranslationBox.module.css';
import { TranslationBoxProps } from '../types';

/**
 * A text input box for translation with optional translate button
 * @param {TranslationBoxProps} props - Component props
 * @returns {JSX.Element} TranslationBox component
 */
export const TranslationBox = ({
  value,
  onChange,
  onTranslate,
  placeholder,
  readOnly = false,
  isLoading = false,
}: TranslationBoxProps) => {
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.ctrlKey && e.key === 'Enter') {
        onTranslate?.();
      }
    },
    [onTranslate]
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      onChange?.(e.target.value);
    },
    [onChange]
  );

  return (
    <div className={styles.container}>
      <textarea
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        readOnly={readOnly}
        className={styles.textarea}
      />
      <button
        onClick={onTranslate}
        disabled={isLoading || !value.trim()}
        className={styles.translateButton}
      >
        {isLoading ? (
          <svg
            className={styles.spinner}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className={styles.spinnerCircle}
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className={styles.spinnerPath}
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        ) : (
          'Translate'
        )}
      </button>
    </div>
  );
};
