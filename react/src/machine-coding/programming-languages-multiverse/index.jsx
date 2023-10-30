import React from 'react';
import languagesData from './languagesData';
import styles from './styles.module.css'; // Importing CSS classes from styles.module.css

function LanguageInfo({ name, year, creator, usecase }) {
  return (
    <div className={styles.languageCard}>
      <h2 className={styles.languageName}>{name}</h2>
      <p className={styles.info}>Year of Start: {year}</p>
      <p className={styles.info}>Creator: {creator}</p>
      <p className={styles.info}>Use Case: {usecase}</p>
    </div>
  );
}

function ProgrammingLanguageMultiverse() {
  return (
    <div className={styles.container}>
      <div className={styles.languageList}>
        {languagesData.map((language, index) => (
          <LanguageInfo key={index} {...language} />
        ))}
      </div>
    </div>
  );
}

export default ProgrammingLanguageMultiverse;
