import { useState } from 'react';
import styles from './styles.module.scss'

export default function StringTransformers() {
  const [inputString, setInputString] = useState('hello world');
  const [transformedString, setTransformedString] = useState(inputString);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputString(e.target.value);
  }

  const toLower = () => {
    setTransformedString(inputString.toLowerCase());
  }

  const toUpper = () => {
    setTransformedString(inputString.toUpperCase());
  }

  const toCamel = () => {
    const words = inputString.split(' ');
    const camelCase = words.map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
    }).join('');
    setTransformedString(camelCase);
  }

  const toPascal = () => {
    const words = inputString.split(' ');
    const pascalCase = words.map(word =>
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join('');
    setTransformedString(pascalCase);
  }

  const toSnake = () => {
    const snakeCase = inputString.replace(/\s+/g, '_').toLowerCase();
    setTransformedString(snakeCase);
  }

  const toKebab = () => {
    const kebabCase = inputString.replace(/\s+/g, '-').toLowerCase();
    setTransformedString(kebabCase);
  }

  const trim = () => {
    setTransformedString(inputString.trim());
  }

  return (
    <main>
      <div className={styles.App}>
        <textarea
          rows={4}
          className={styles.textarea}
          placeholder="Enter a sentence..."
          value={inputString}
          onChange={handleInputChange}
        />
        <div className={styles.buttonBox}>
          <button onClick={toLower}>Lower Case</button>
          <button onClick={toUpper}>Upper Case</button>
          <button onClick={toCamel}>Camel Case</button>
          <button onClick={toPascal}>Pascal Case</button>
          <button onClick={toSnake}>Snake Case</button>
          <button onClick={toKebab}>Kebab Case</button>
          <button onClick={trim}>Trim</button>
        </div>
        <div className={styles.output}>
          <strong>Transformed String:</strong>
          <p>{transformedString}</p>
        </div>
      </div>
    </main>
  );
}
