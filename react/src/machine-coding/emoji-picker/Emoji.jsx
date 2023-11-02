import { useEffect, useState } from 'react';

import axios from 'axios';
import styles from './app.module.css';

const access_key = 'eb3aa13df1b14cc7bc614fc2d7f894f41b09d68a';

const Emoji = () => {
  const [emojis, setEmojis] = useState([]);
  const [filteredEmojis, setFilteredEmojis] = useState([]);
  const [search, setSearch] = useState('');
  const [toastMessage, setToastMessage] = useState('');
  const [category, setCategory] = useState([]);

  useEffect(() => {
    loadAllEmojis();
    loadCategories();
    window.scrollTo(0, 0);
  }, []);

  const loadAllEmojis = () => {
    axios.get(`https://emoji-api.com/emojis?access_key=${access_key}`).then((res) => {
      setEmojis(res.data);
      setFilteredEmojis(res.data);
    });
  };

  const loadCategories = () => {
    axios.get(`https://emoji-api.com/categories?access_key=${access_key}`).then((res) => {
      setCategory(res.data);
    });
  };

  const getIconTitle = (title) => {
    const [_, ...value] = title.split(' ');
    return value.join(' ');
  };

  const onChange = (e) => {
    let searchValue = e.target.value;
    setSearch(searchValue);
    let filteredIcons = emojis.filter((icon) =>
      icon.unicodeName.toLowerCase().includes(searchValue.trim().toLowerCase())
    );
    setFilteredEmojis(filteredIcons);
  };

  const categoryChange = (e) => {
    setSearch('');
    setFilteredEmojis([]);
    setEmojis([]);
    if (e.target.value == 'all') {
      loadAllEmojis();
    } else {
      axios.get(`https://emoji-api.com/categories/${e.target.value}?access_key=${access_key}`).then((res) => {
        setEmojis(res.data);
        setFilteredEmojis(res.data);
      });
    }
  };

  const copyToClipBoard = (id) => {
    let range = document.createRange();
    range.selectNode(document.getElementById(id));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand('copy');
    window.getSelection().removeAllRanges(); // to deselect
    setToastMessage('Copied Successfully!');
    setTimeout(() => {
      setToastMessage('');
    }, 1500);
  };

  return (
    <>
      <div className={styles.topSection}>
        <div>
          <select className={styles.select} onChange={categoryChange}>
            <option>all</option>
            {category.map((item) => {
              return (
                <option value={item.slug} key={item.slug}>
                  {item.slug.replace('-', ' ')}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search"
            onChange={onChange}
            value={search}
            className={styles.inputField}
          ></input>
        </div>
        <div
          className={`${styles.copyText} ${
            filteredEmojis == null || filteredEmojis?.length === 0 ? styles.hidden : ''
          }`}
        >
          Click on an Emoji to Copy
        </div>
      </div>

      <div className={styles.container}>
        {filteredEmojis?.length == 0 && search.trim() == '' && (
          <div className={styles.loaderContainer}>
            <div className={styles.loader}></div>
          </div>
        )}
        {filteredEmojis?.map((icon, index) => (
          <span
            className={styles.iconContainer}
            key={index}
            onClick={() => copyToClipBoard(icon.unicodeName + '_' + index)}
          >
            <span className={styles.icon} title={getIconTitle(icon.unicodeName)} id={icon.unicodeName + '_' + index}>
              {icon.character}
            </span>
          </span>
        ))}
      </div>

      {toastMessage && <div className={styles.toast}>{toastMessage}</div>}
    </>
  );
};

export default Emoji;
