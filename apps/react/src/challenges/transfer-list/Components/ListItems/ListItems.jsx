import React from "react";
import styles from '../../TransferListApp.module.css';

const ListItems = ({ data,handleData,direction }) => {
  
  return (
    <div className={styles["list-items"]}>
      {data && data.length > 0 && data.map((val) => {
        return (
        <div className={styles["inputWrapper"]} key={`${val.value}`}>
            <input type="checkbox" id={`${val.id}`} value={`${val.value}`} onChange={(e) => handleData(e,direction)} />
            <label for={`${val.id}`}>{val.value}</label>
        </div>)
      })}
    </div>
  );
};

export default ListItems;
