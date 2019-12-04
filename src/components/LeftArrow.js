import React from "react";

const LeftArrow = ({ goLeft }) => {
  return (
    <div className="left" onClick={goLeft}>
      <i className="fa fa-chevron-circle-left" aria-hidden="true"></i>
    </div>
  );
};

export default LeftArrow;
