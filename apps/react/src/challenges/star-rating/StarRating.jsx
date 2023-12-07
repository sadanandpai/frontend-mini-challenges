import React, { useMemo, useState } from "react";

import Star from "./Star";

const StarRating = ({ value, total }) => {
  const [rating, setRating] = useState(value || 0);
  const [selection, setSelection] = useState(0);
  const starArray = useMemo(() => Array.from({ length: total }), [total]);

  const onHover = (event) => {
    setSelection(event.target.dataset?.starId ?? 0);
  };

  const onLeave = () => {
    setSelection(0);
  };

  const onClick = (event) => {
    setRating(event.target.dataset?.starId ?? rating);
  };

  return (
    <div onMouseLeave={onLeave} onMouseOver={onHover} onClick={onClick}>
      {starArray.map((_, index) => (
        <Star
          marked={(selection || rating) > index}
          starId={index + 1}
          key={`star_${index + 1}`}
        />
      ))}
    </div>
  );
};

export default StarRating;
