import style from './style.module.css';
import { tabData } from './data';
import { useState } from 'react';

const App = () => {
  const [currentTab, setCurrentTab] = useState(0);

  // method is used to check which tab user have selected
  const clickedTab = (id) => setCurrentTab(id);

  return (
    <>
      <div className={style.container}>
        {tabData.map((tab, id) => {
          return (
            <span
              key={id}
              onClick={() => clickedTab(id)}
              className={`${currentTab === id ? style.active : ''} ${style.btn}`}
            >
              {tab.label}
            </span>
          );
        })}
        {/* based on user selected we are just updating currentTab which indirectly updates content */}
        <div className={style.content}>
          <h2>Content of {tabData[currentTab].label}:</h2>
          {tabData[currentTab] && <p>{tabData[currentTab].content}</p>}
        </div>
      </div>
    </>
  );
};

export default App;
