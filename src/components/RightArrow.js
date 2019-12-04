import React from "react";

const RightArrow = ({ goRight }) => {
  return (
    <div className="right" onClick={goRight}>
      <i className="fa fa-chevron-circle-right" aria-hidden="true"></i>
    </div>
  );
};

export default RightArrow;
