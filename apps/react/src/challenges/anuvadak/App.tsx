import { useState, useCallback } from 'react';
import styles from './App.module.css';
import { LanguageSelector } from './components/LanguageSelector';
import { TranslationBox } from './components/TranslationBox';
import { SwapButton } from './components/SwapButton';
import { Language } from './types';

/**
 * Main application component for the Anuvadak language translation app
 * @returns {JSX.Element} App component
 */
const App = (): JSX.Element => {
  const [fromLanguage, setFromLanguage] = useState<Language>('en');
  const [toLanguage, setToLanguage] = useState<Language>('hi');
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleTranslate = useCallback(async () => {
    if (!inputText.trim()) return;

    setIsLoading(true);
    setError(null);

    const data = JSON.stringify({
      target_lang: toLanguage,
      text: [inputText],
    });

    try {
      const response = await fetch('https://openl-translate.p.rapidapi.com/translate/bulk', {
        method: 'POST',
        headers: {
          'x-rapidapi-key': '3563921bccmshc065453cb17903dp1c8ab6jsn2adb9c8dd077',
          'x-rapidapi-host': 'openl-translate.p.rapidapi.com',
          'Content-Type': 'application/json',
        },
        body: data,
      });

      if (!response.ok) {
        throw new Error('Translation failed');
      }

      const responseData = await response.json();
      if (!responseData.translatedTexts?.[0]) {
        throw new Error('Invalid response format');
      }

      setTranslatedText(responseData.translatedTexts[0]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setTranslatedText('');
    } finally {
      setIsLoading(false);
    }
  }, [inputText, toLanguage]);
  const handleSwap = useCallback(() => {
    setFromLanguage(toLanguage);
    setToLanguage(fromLanguage);
    setInputText(translatedText);
    setTranslatedText(inputText);
  }, [fromLanguage, toLanguage, inputText, translatedText]);

  const handleFromLanguageChange = useCallback((language: Language) => {
    setFromLanguage(language);
  }, []);

  const handleToLanguageChange = useCallback((language: Language) => {
    setToLanguage(language);
  }, []);

  const handleInputChange = useCallback((text: string) => {
    setInputText(text);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Anuvadak</h1>
      <p className={styles.subtitle}>Language Translation App</p>

      <div className={styles.translationContainer}>
        <div className={styles.languageSelectors}>
          <LanguageSelector value={fromLanguage} onChange={handleFromLanguageChange} label="From" />
          <SwapButton onClick={handleSwap} />
          <LanguageSelector value={toLanguage} onChange={handleToLanguageChange} label="To" />
        </div>

        <div className={styles.translationBoxes}>
          <TranslationBox
            value={inputText}
            onChange={handleInputChange}
            onTranslate={handleTranslate}
            placeholder="Enter text to translate..."
            isLoading={isLoading}
          />
          <TranslationBox
            value={translatedText}
            readOnly
            placeholder="Translation will appear here..."
            isLoading={isLoading}
          />
        </div>

        {error && <p className={styles.error}>{error}</p>}
      </div>
    </div>
  );
};

export default App;
