// WordCounter.js

import React, { useEffect, useRef, useState } from 'react';

import styles from './styles.module.scss';

const saveData = ({ text, wordCount, charCount, paraCount }) => {
  localStorage.setItem('text', text);
  localStorage.setItem('words', wordCount);
  localStorage.setItem('chars', charCount);
  localStorage.setItem('paras', paraCount);
};

function WordCounter() {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [paraCount, setParaCount] = useState(0);
  const firstLoad = useRef(true);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (firstLoad.current) {
      firstLoad.current = false;
      return;
    }
    saveData({ text, wordCount, charCount, paraCount });
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

  const loadData = () => {
    setText(localStorage.getItem('text') || '');
    setWordCount(localStorage.getItem('words') || 0);
    setCharCount(localStorage.getItem('chars') || 0);
    setParaCount(localStorage.getItem('paras') || 0);
  };

  return (
    <div className={styles.container}>
      <textarea
        id="text-input"
        placeholder="Enter your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <div className={styles.controls}>
        <div id="word-count">Words: {wordCount}</div>
        <div id="char-count">Chars: {charCount}</div>
        <div id="para-count">Paras: {paraCount}</div>
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
