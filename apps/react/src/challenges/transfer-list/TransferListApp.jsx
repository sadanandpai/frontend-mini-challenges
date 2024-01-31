import React, { useState } from "react";
import Buttons from "./Components/Buttons/Buttons";
import styles from "./TransferListApp.module.css";
import { countriesData } from "./MockData/transferListData";
import ListContainer from "./Components/ListContainer/ListContainer";

const TransferListApp = () => {
  const [currLeftListData, setcurrLeftListData] = useState([]);
  const [currRightListData, setcurrRightListData] = useState([]);
  const [leftListData, setLeftListData] = useState(countriesData);
  const [rightListData, setRighListtData] = useState([]);
  const [disableLeftBtn,setdisableLeftBtn] = useState(true)
  const [disableRightBtn,setdisableRightBtn] = useState(true)

  const handleData = (e, direction) => {
    const itemId = e.target.id;
    const itemValue = e.target.value;
    
    if (direction == "left") {
      setdisableLeftBtn(false)
      if (e.target.checked) {
        setcurrLeftListData([...currLeftListData, { value: itemValue, id: itemId }]);
      } else {
        const filterData =(currLeftListData && currLeftListData.length > 0 && currLeftListData.filter((item) => item.id !== itemId)) || [];
        if(filterData && filterData.length == 0) {
          setdisableLeftBtn(true)
        }
        setcurrLeftListData(filterData);
      }
    } else {
      setdisableRightBtn(false)
      if (e.target.checked) {
        setcurrRightListData([...currRightListData, { value: itemValue, id: itemId }]);
      } else {
        const filterData =(currRightListData && currRightListData.length > 0 && currRightListData.filter((item) => item.id !== itemId)) || [];
        if(filterData && filterData.length == 0) {
          setdisableRightBtn(true)
        }
        setcurrRightListData(filterData);
      }
    }
  };

  const leftClickHandler = () => {
    const leftListFilterData = leftListData.filter((country) => !currLeftListData.some((item) => item.id === country.id));
    setLeftListData(leftListFilterData);
    setRighListtData([...currLeftListData, ...rightListData]);
    resetLeftClickHandler();
  };

  const rightClickHandler = () => {
    const rightListFilterData = rightListData.filter((country) => !currRightListData.some((item) => item.id === country.id));
    setRighListtData(rightListFilterData);
    setLeftListData([...currRightListData, ...leftListData]);
    resetRightClickHandler();
  };

  const leftClickHandlerAll = () =>{
    setRighListtData([...leftListData,...rightListData])
    setLeftListData([])
    resetLeftClickHandler();
  }

  const rightClickHandlerAll = () => {
    setLeftListData([...rightListData,...leftListData])
    setRighListtData([])
    resetRightClickHandler();
  }

  const resetLeftClickHandler = () => {
    setcurrLeftListData([]);
    setdisableLeftBtn(true);
  }

  const resetRightClickHandler = () => {
    setcurrRightListData([]);
    setdisableRightBtn(true);
  }

  return (
    <div className={styles["TransferListContainer"]}>
      <ListContainer data={leftListData} handleData={handleData} direction={"left"}/>
      <Buttons 
      leftClickHandler = {leftClickHandler} 
      rightClickHandler = {rightClickHandler} 
      leftClickHandlerAll = {leftClickHandlerAll}
      rightClickHandlerAll = {rightClickHandlerAll} 
      disableLeftBtn = {disableLeftBtn} 
      disableRightBtn = {disableRightBtn}
      disableLeftBtnAll = {leftListData && leftListData.length > 0 ? false : true}
      disableRightBtnAll = {rightListData && rightListData.length > 0 ? false : true}
      />
      <ListContainer data={rightListData} handleData={handleData} direction={"right"}/>
    </div>
  );
};

export default TransferListApp;
