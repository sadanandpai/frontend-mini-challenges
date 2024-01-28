import React from "react";
import ListItems from "../ListItems/ListItems";

const RightList = ({data,handleData}) => {
  
  return (
    <div className="rightList-container ">
      <ListItems data={data} handleData={handleData} direction='right'/>
    </div>
  );
};

export default RightList;
