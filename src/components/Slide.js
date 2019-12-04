import React from "react";

const Slide = ({ imageSrc, center }) => {
  return (
    <div>
      {(center && (
        <img
          src={imageSrc}
          style={{ transform: "scale(1.75)", border: "2px solid gray" }}
        ></img>
      )) || <img src={imageSrc}></img>}
    </div>
  );
};

export default Slide;
