import { useState, useEffect } from 'react';
import styles from './Food.module.css';
import Food from './Food';
import Dialog from './Dialog';
export default function App() {
  const [data, setData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
      if (!response.ok) {
        throw new Error('Network response was not ok! Something wrong');
      }
      const data = await response.json();
      setData(data.meals[0]);
    } catch (error) {
      console.error('Error on fetching data: ', error);
    }
  };

  const handleButtonClick = () => {
    fetchData();
  };

  const handleOpenDialog = () => {
    setIsOpen(true);
  };

  const handleCloseDialog = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.App}>
      <h1>Are you hungry 😋</h1>
      <button className={styles['foodBtn']} onClick={handleButtonClick}>
        Another food 🍛
      </button>

      {isOpen && <Dialog data={data} handleCloseDialog={handleCloseDialog} />}
      {data && <Food data={data} handleOpenDialog={handleOpenDialog} />}
    </div>
  );
}
