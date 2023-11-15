import React, { useEffect, useState } from 'react';
import List from './list';
import styles from './todo.module.scss';

const Todo = () => {
  const [value, setValue] = useState('');
  const [items, setItems] = useState([]);
  const [editInfo, setEditInfo] = useState(null);

  const isInitialRender = React.useRef(true);

  useEffect(() => {
    const data = localStorage.getItem('items');
    if (data) {
      setItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
    } else {
      localStorage.setItem('items', JSON.stringify(items));
    }
  }, [items]);

  const addItem = (value) => {
    setItems((prevItems) => [...prevItems, { value, id: new Date().getTime(), isDone: false }]);
  };

  const updateItem = (newValue) => {
    setItems((prevItems) => prevItems.map((item) => (item.id === editInfo.id ? { ...item, value: newValue } : item)));
    setEditInfo(null);
  };

  const handleCompleteClick = (id) => {
    setItems((prevItems) => prevItems.map((item) => (item.id === id ? { ...item, isDone: !item.isDone } : item)));
  };

  const handleEditClick = ({ id, value }) => {
    setValue(value);
    setEditInfo({ id, value });
  };

  const handleDeleteClick = (id) => {
    if (editInfo?.id === id) {
      setValue('');
      setEditInfo(null);
    }
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (editInfo) {
      updateItem(value);
    } else {
      addItem(value);
    }
    setValue('');
  };

  const cancelHandler = () => {
    setValue('');
    setEditInfo(null);
  };

  return (
    <div className={styles.App}>
      <form onSubmit={submitHandler}>
        <input type="text" value={value} placeholder="Enter your todo" onChange={(e) => setValue(e.target.value)} />
        <button type="submit" disabled={!value}>
          {editInfo ? 'Update' : 'Submit'}
        </button>
        <button type="reset" onClick={cancelHandler} disabled={!(value || editInfo)}>
          Cancel
        </button>
      </form>

      <div className={styles.hint}>
        <i>Double click on todo to toggle completion status</i>
      </div>

      <List
        items={items}
        handleEditClick={handleEditClick}
        handleDeleteClick={handleDeleteClick}
        handleCompleteClick={handleCompleteClick}
      />
    </div>
  );
};

export default Todo;
