import { useEffect, useState } from 'react';

import axios from 'axios';
import styles from './quote.module.css';

const App = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [quote, setQuote] = useState<string | null>(null);
  const [author, setAuthor] = useState<string | null>(null);

  useEffect(() => {
    submitHandler(); // Generate Quotes when the page reloads
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const submitHandler = async (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault(); //prevent page reload after clicking the button
    }
    try {
      const res = await axios.get('https://api.quotable.io/quotes/random?tags=' + inputValue); //fetching the quote

      if (res.data && res.data.length > 0) {
        const newQuote = res.data[0].content;
        const newAuthor = res.data[0].author;
        setQuote(newQuote); //setting the new quote
        setAuthor(`- ${newAuthor}`); //setting the new author
      } else {
        //message if quote not found
        setQuote('Sorry No Quotes Found Related to the given tags');
        setAuthor(null);
      }
    } catch (e) {
      console.log(e); //catch errors
    }
  };

  if (!quote) {
    return <>Loading....</>; //Load while the quote is being fetched
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
