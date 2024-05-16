import { useState } from 'react';
import style from './style.module.css';

const App = () => {
  const [text, setText] = useState<string>('');
  const [list, setList] = useState<string[]>([]);

  const submitFunction = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim() !== '') {
      setList([...list, text]);
    }
    setText('');
  };

  const removeChip = (chipId) => {
    setList(list.filter((_, id) => id !== chipId));
  };

  return (
    <>
      <form onSubmit={submitFunction} className={style.formContainer}>
        <input
          type="text"
          placeholder="Type & hit Enter"
          className={style.input_text}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
      <div className={style.container}>
        {list.map((list, index) => {
          return (
            <span key={index} className={style.chips}>
              {list}{' '}
              <button className={style.remove} onClick={() => removeChip(index)}>
                &#x2715;
              </button>
            </span>
          );
        })}
      </div>
    </>
  );
};

export default App;
