// WordCounter.js

import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

function WordCounter() {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [paraCount, setParaCount] = useState(0);
  const [charLimit, setCharLimit] = useState('');
  const [highlightWord, setHighlightWord] = useState('');

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    saveData();
  }, [text, wordCount, charCount, paraCount]);

  const countWords = () => {
    const words = text.split(/\s+/).filter((word) => word !== '');
    const characters = text.length;
    const paragraphs = text.split('\n').filter((para) => para.trim() !== '').length;

    setWordCount(words.length);
    setCharCount(characters);
    setParaCount(paragraphs);
  };

  const clearText = () => {
    setText('');
    setWordCount(0);
    setCharCount(0);
    setParaCount(0);
  };

  const highlightWords = () => {
    const highlightedText = text.replace(
      new RegExp(highlightWord, 'g'),
      `<span class="${styles.highlighted}">$&</span>`
    );

    setText(highlightedText);
  };

  const checkCharacterLimit = () => {
    const charLimitInt = parseInt(charLimit);
    const characters = text.length;

    if (charLimitInt && characters > charLimitInt) {
      setCharCount(`Characters: ${characters} (Exceeding limit)`);
    } else {
      setCharCount(`Characters: ${characters}`);
    }
  };

  const saveData = () => {
    localStorage.setItem('text', text);
    localStorage.setItem('words', wordCount);
    localStorage.setItem('chars', charCount);
    localStorage.setItem('paras', paraCount);
  };

  const loadData = () => {
    setText(localStorage.getItem('text') || '');
    setWordCount(localStorage.getItem('words') || 0);
    setCharCount(localStorage.getItem('chars') || 0);
    setParaCount(localStorage.getItem('paras') || 0);
  };

  return (
    <div className={styles.container}>
      <h1>Word Counter</h1>
      <textarea
        id="text-input"
        placeholder="Enter your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <div className={styles.controls}>
        <div id="word-count">Words: {wordCount}</div>
        <div id="char-count">{charCount}</div>
        <div id="para-count">Paragraphs: {paraCount}</div>
        <input
          type="number"
          id="char-limit"
          placeholder="Character Limit"
          value={charLimit}
          onChange={(e) => setCharLimit(e.target.value)}
        />
        <button id="count-button" onClick={countWords}>
          Count
        </button>
        <button id="clear-button" onClick={clearText}>
          Clear
        </button>
      </div>
    </div>
  );
}

export default WordCounter;
