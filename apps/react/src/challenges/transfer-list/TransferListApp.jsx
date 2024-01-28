import React, { useState } from "react";
import LeftList from "./Components/LeftList/LeftList";
import Buttons from "./Components/Buttons/Buttons";
import RightList from "./Components/RightList/RightList";
import "./TransferListApp.css";
import { countriesData } from "./MockData/transferListData";

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
    setcurrLeftListData([]);
    setdisableLeftBtn(true);
  };

  const rightClickHandler = () => {
    const rightListFilterData = rightListData.filter((country) => !currRightListData.some((item) => item.id === country.id));
    setRighListtData(rightListFilterData);
    setLeftListData([...currRightListData, ...leftListData]);
    setcurrRightListData([]);
    setdisableRightBtn(true);
  };

  const leftClickHandlerAll = () =>{
    setRighListtData([...leftListData,...rightListData])
    setLeftListData([])
    setcurrLeftListData([]);
    setdisableLeftBtn(true);
  }

  const rightClickHandlerAll = () => {
    setLeftListData([...rightListData,...leftListData])
    setRighListtData([])
    setcurrRightListData([]);
    setdisableRightBtn(true);
  }

  return (
    <div className="TransferListContainer">
      <LeftList data={leftListData} handleData={handleData} />
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
      <RightList data={rightListData} handleData={handleData} />
    </div>
  );
};

export default TransferListApp;
