import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [inputSentence, setInputSentence] = useState('');
  const [transformedSentence, setTransformedSentence] = useState('');

  const handleInputChange = (e) => {
    setInputSentence(e.target.value);
  }

  const transformToLower = () => {
    setTransformedSentence(inputSentence.toLowerCase());
  }

  const transformToUpper = () => {
    setTransformedSentence(inputSentence.toUpperCase());
  }

  const transformToCamel = () => {
    const words = inputSentence.split(' ');
    const camelCase = words.map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
    }).join('');
    setTransformedSentence(camelCase);
  }

  const transformToPascal = () => {
    const words = inputSentence.split(' ');
    const pascalCase = words.map(word =>
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join('');
    setTransformedSentence(pascalCase);
  }

  const transformToSnake = () => {
    const snakeCase = inputSentence.replace(/\s+/g, '_').toLowerCase();
    setTransformedSentence(snakeCase);
  }

  const transformToKebab = () => {
    const kebabCase = inputSentence.replace(/\s+/g, '-').toLowerCase();
    setTransformedSentence(kebabCase);
  }

  const trimInput = () => {
    setTransformedSentence(inputSentence.trim());
  }

  return (
    <div className="App">
      <textarea
        placeholder="Enter a sentence..."
        value={inputSentence}
        onChange={handleInputChange}
      />
      <button onClick={transformToLower}>Lower Case</button>
      <button onClick={transformToUpper}>Upper Case</button>
      <button onClick={transformToCamel}>Camel Case</button>
      <button onClick={transformToPascal}>Pascal Case</button>
      <button onClick={transformToSnake}>Snake Case</button>
      <button onClick={transformToKebab}>Kebab Case</button>
      <button onClick={trimInput}>Trim</button>
      <div>
        <strong>Transformed Sentence:</strong>
        <p>{transformedSentence}</p>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

// Include a root element in the HTML body
const rootElement = document.createElement('div');
rootElement.id = 'root';
document.body.appendChild(rootElement);
