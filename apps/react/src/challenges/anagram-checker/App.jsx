import React, { useState, useRef, useEffect } from 'react';
import styles from './App.module.css';

const normalizeString = (str) => (str ? str.replace(/[^\w]/g, '').toLowerCase() : '');

const isAnagram = (str1, str2) => {
  const normalizedStr1 = normalizeString(str1);
  const normalizedStr2 = normalizeString(str2);

  if (!normalizedStr1 || !normalizedStr2) return false;
  return normalizedStr1.split('').sort().join('') === normalizedStr2.split('').sort().join('');
};

const App = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [isAnagramResult, setIsAnagramResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const firstInputRef = useRef(null);

  useEffect(() => {
    // Focus first input on mount for better keyboard navigation
    firstInputRef.current?.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input1.trim() || !input2.trim()) return;

    setIsLoading(true);

    // Simulate API call delay for better UX
    setTimeout(() => {
      const result = isAnagram(input1, input2);
      setIsAnagramResult(result);
      setIsLoading(false);
    }, 150);
  };

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
    // Clear result when inputs change
    if (isAnagramResult !== null) {
      setIsAnagramResult(null);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="firstWord" className={styles.label}>
            First word or phrase:
          </label>
          <input
            id="firstWord"
            type="text"
            value={input1}
            onChange={handleInputChange(setInput1)}
            onKeyDown={handleKeyDown}
            className={styles.input}
            placeholder="e.g., listen"
            ref={firstInputRef}
            disabled={isLoading}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="secondWord" className={styles.label}>
            Second word or phrase:
          </label>
          <input
            id="secondWord"
            type="text"
            value={input2}
            onChange={handleInputChange(setInput2)}
            onKeyDown={handleKeyDown}
            className={styles.input}
            placeholder="e.g., silent"
            disabled={isLoading}
          />
        </div>

        <button
          type="submit"
          className={styles.button}
          disabled={isLoading || !input1.trim() || !input2.trim()}
          aria-busy={isLoading}
        >
          {isLoading ? 'Checking...' : 'Check if Anagram'}
        </button>
      </form>

      {isAnagramResult !== null && (
        <div
          className={`${styles.result} ${isAnagramResult ? styles.success : styles.error}`}
          role="status"
        >
          {isAnagramResult ? (
            <>
              <span aria-hidden="true">✓ </span>
              <span>
                "{input1}" and "{input2}" are anagrams!
              </span>
            </>
          ) : (
            <>
              <span aria-hidden="true">✗ </span>
              <span>
                "{input1}" and "{input2}" are not anagrams.
              </span>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
