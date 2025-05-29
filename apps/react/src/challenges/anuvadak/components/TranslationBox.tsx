import { TranslationBoxProps } from '../types';
import styles from './TranslationBox.module.css';

const TranslationBox = ({
  value,
  onChange,
  onTranslate,
  placeholder,
  readOnly = false,
  isLoading = false,
}: TranslationBoxProps) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && e.ctrlKey && onChange && onTranslate) {
      onTranslate();
    }
  };

  return (
    <div className={styles.container}>
      <textarea
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        readOnly={readOnly}
        className={styles.textarea}
        rows={6}
      />
      {!readOnly && onChange && onTranslate && (
        <div className={styles.controls}>
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
                ></circle>
                <path
                  className={styles.spinnerPath}
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              'Translate'
            )}
          </button>
          <span className={styles.hint}>Press Ctrl + Enter to translate</span>
        </div>
      )}
    </div>
  );
};

export default TranslationBox;
