import { styles } from './Stack.module.css';
import { useState } from 'react';

const Stack = () => {
  const [stack, setStack] = useState([]);
  const [inputVal, setInputVal] = useState('');
  const [outPut, setOutPut] = useState('');

  const onChangeHandler = (e) => {
    setInputVal(e.target.value);
  };

  const pushHandler = () => {
    setStack([...stack, inputVal]);
    setInputVal('');
  };

  const popHandler = () => {
    const cloneStack = [...stack];
    cloneStack.pop();
    setStack(cloneStack);
  };

  const peekHandler = () => {
    if (!stack.length) setOutPut('Stack is empty');
    else {
      const lastElement = stack[stack.length - 1];
      setOutPut(`Last element is ${lastElement}`);
    }
  };

  const isEmptyHandler = () => {
    if (stack.length === 0) {
      setOutPut('Stack is empty');
    } else {
      setOutPut('Stack is not empty');
    }
  };

  const isFullHandler = () => {
    // console.log('isFullHandler');
    if (stack.length === 5) {
      setOutPut('Stack is Full');
    } else {
      setOutPut('Stack is not full');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.stack}>
        <h1>Stack</h1>
        <input type="text" value={inputVal} onChange={onChangeHandler} required />

        <div className={styles.btn_root}>
          <button onClick={pushHandler}>Push</button>
          <button onClick={popHandler}>Pop</button>
          <button onClick={peekHandler}>Peek</button>
          <button onClick={isEmptyHandler}>IsEmpty</button>
          <button onClick={isFullHandler}>IsFull</button>
        </div>
        <hr />

        <h3>{outPut}</h3>

        {stack?.map((element, index) => {
          return (
            <div key={index} className={styles.stackElement}>
              <p>{element}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stack;
