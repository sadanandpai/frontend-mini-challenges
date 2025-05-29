import { useState } from 'react';
import styles from './App.module.css';
import LanguageSelector from './components/LanguageSelector';
import TranslationBox from './components/TranslationBox';
import SwapButton from './components/SwapButton';
import { Language } from './types';

function App() {
  const [fromLanguage, setFromLanguage] = useState<Language>('en');
  const [toLanguage, setToLanguage] = useState<Language>('hi');
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSwap = () => {
    setFromLanguage(toLanguage);
    setToLanguage(fromLanguage);
    setInputText(translatedText);
    setTranslatedText(inputText);
  };

  const handleTranslate = async () => {
    if (!inputText.trim()) {
      setTranslatedText('');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('https://openl-translate.p.rapidapi.com/translate/bulk', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': process.env.RAPID_API_KEY as string,
          'X-RapidAPI-Host': 'openl-translate.p.rapidapi.com',
        },
        body: JSON.stringify({
          target_lang: toLanguage,
          text: [inputText],
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('API Response:', data); // For debugging

      if (data.error) {
        throw new Error(data.error);
      }

      if (!data.translatedTexts || !data.translatedTexts[0]) {
        throw new Error('No translation received from the API');
      }

      setTranslatedText(data.translatedTexts[0]);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Translation failed. Please try again.';
      setError(errorMessage);
      console.error('Translation error:', err);
      setTranslatedText('');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Anuvadak</h1>
      <p className={styles.subtitle}>Language Translation App</p>

      <div className={styles.translationContainer}>
        <div className={styles.languageSelectors}>
          <LanguageSelector value={fromLanguage} onChange={setFromLanguage} label="From" />
          <SwapButton onClick={handleSwap} />
          <LanguageSelector value={toLanguage} onChange={setToLanguage} label="To" />
        </div>

        <div className={styles.translationBoxes}>
          <TranslationBox
            value={inputText}
            onChange={setInputText}
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
}

export default App;
