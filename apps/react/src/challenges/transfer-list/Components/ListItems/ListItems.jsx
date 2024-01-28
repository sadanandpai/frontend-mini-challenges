import React from "react";

const ListItems = ({ data,handleData,direction }) => {
  
  return (
    <div className="list-items">
      {data && data.length > 0 && data.map((val) => {
        return (
        <div className="inputWrapper" key={`${val.value}`}>
            <input type="checkbox" id={`${val.id}`} value={`${val.value}`} onChange={(e) => handleData(e,direction)} />
            <label for={`${val.id}`}>{val.value}</label>
        </div>)
      })}
    </div>
  );
};

export default ListItems;
