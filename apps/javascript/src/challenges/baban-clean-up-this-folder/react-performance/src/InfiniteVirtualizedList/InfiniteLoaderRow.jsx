import React from "react";
import "./Row.css";

const Loader = ({ style }) => {
  return (
    <span style={style} className="loader">
      loading...
    </span>
  );
};

const InfiniteLoaderRow = ({ image, number, style, loading }) => {
  if (loading) console.log({ loading, number });

  return loading ? (
    <Loader style={style} />
  ) : (
    <div style={style} className="list-item">
      <img src={image} alt="" />
      <div>Image #{number + 1}</div>
    </div>
  );
};

export default InfiniteLoaderRow;
