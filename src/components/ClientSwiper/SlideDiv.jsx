import React from "react";

const SlideDiv = ({ img }) => {
  return (
    <div className="flex justify-center">
      <img src={img} className="h-[100px]"/>
    </div>
  );
};

export default SlideDiv;
