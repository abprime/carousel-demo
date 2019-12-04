import React from "react";

const SlideArrow = ({ onClickHandle, type }) => {
  return (
    <div className={`slide-arrow ${type}`} onClick={onClickHandle}>
      {(type === "next" && (
        <i className="fa fa-angle-right" aria-hidden="true"></i>
      )) || <i className="fa fa-angle-left" aria-hidden="true"></i>}
    </div>
  );
};

export default SlideArrow;
