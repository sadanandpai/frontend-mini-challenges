import React from 'react'
import ListItems from "../ListItems/ListItems";
import styles from '../../TransferListApp.module.css';

const ListContainer = ({data,handleData,direction}) => {
  
  return (
    <div className={styles["list-container"]}>
        <ListItems data={data} handleData={handleData} direction={direction}/>
    </div>
  )
}

export default ListContainer