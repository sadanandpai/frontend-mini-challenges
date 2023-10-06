import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './quote.module.css';

const App = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [quote, setQuote] = useState<string | null>(null);
  const [author, setAuthor] = useState<string | null>(null);
  useEffect(() => {
    submitHandler();
  }, []);
  const submitHandler = async (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault();
    }
    try {
      console.log(inputValue);
      const res = await axios.get('https://api.quotable.io/quotes/random?tags=' + inputValue);

      if (res.data && res.data.length > 0) {
        const newQuote = res.data[0].content;
        const newAuthor = res.data[0].author;
        console.log(newQuote);
        setQuote(newQuote);
        setAuthor(`- ${newAuthor}`);
      } else {
        setQuote('Sorry No Quotes Found Related to the given tags');
        setAuthor(null);
      }
    } catch (e) {
      console.log(e);
    }
  };

  if (!quote) {
    return <>Loading....</>;
  }

  return (
    <>
      <div className={styles['container']}>
        <div className={styles['quote']}>{quote}</div>
        <div className={styles['author']}>{author}</div>
        <form onSubmit={submitHandler}>
          <div>
            <p>
              <label>Tags: </label>
              <input
                className={styles['input-field']}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="eg. inspiratoinal, history, technology"
              />
            </p>
          </div>
          <p>
            <button className={styles['generate-button']} type="submit">
              Generate
            </button>
          </p>
        </form>
      </div>
    </>
  );
};

export default App;
