import { useEffect, useState } from 'react';
import style from './style.module.css';
import { MdDragIndicator } from 'react-icons/md';

const DraggableList = () => {
  const [items, setItems] = useState<{ id: number; name: string; website: string }[]>([]);

  const fetchUserData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    setItems(data);
  };

  useEffect(() => {
    const savedItems = localStorage.getItem('savedList');
    if (savedItems) {
      setItems(JSON.parse(savedItems));
    } else {
      fetchUserData();
    }
  }, []);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('itemIndex', index);
  };

  const saveList = () => {
    localStorage.setItem('savedList', JSON.stringify(items));
    alert('List Saved Successfully');
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Necessary for allowing drop
  };

  const handleDrop = (e, dropIndex) => {
    //dropIndex gives where (which index) planning to drop
    //itemIndex gives which index item you are dragging
    const itemIndex = parseInt(e.dataTransfer.getData('itemIndex'));
    if (dropIndex !== itemIndex) {
      const updatedItems = [...items];
      const item = updatedItems.splice(itemIndex, 1)[0];
      updatedItems.splice(dropIndex, 0, item);
      setItems(updatedItems);
    }
  };

  return (
    <div className={style.container}>
      {items.slice(0, 5).map((item, index) => {
        return (
          <div
            key={index}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
            className={style.listContainer}
          >
            <span className={style.userDetail}>{item.id}</span>
            <span className={style.userDetail}>{item.name}</span>
            <span className={style.userDetail}>{item.website}</span>
            <MdDragIndicator />
          </div>
        );
      })}
      <button className={style.saveBtn} onClick={saveList}>
        Save List
      </button>
    </div>
  );
};

export default DraggableList;
