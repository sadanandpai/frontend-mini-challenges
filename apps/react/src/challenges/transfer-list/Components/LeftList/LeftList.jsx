import React from "react";
import ListItems from "../ListItems/ListItems";

const LeftList = ({data,handleData}) => {
  
  return (
    <div className="leftList-container">
      <ListItems data={data} handleData={handleData} direction='left'/>
    </div>
  );
};

export default LeftList;
