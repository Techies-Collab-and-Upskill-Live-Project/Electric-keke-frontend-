import React from "react";

const TripLabel = ({
  containerStyle = "w-[25%] md:w-[20%] flex justify-between flex-col h-full",
  pickUp = "Pick Up",
  drop = "Drop Off",
  labelStyle = "h-14 md:h-[70px] flex items-center",
}) => {
  return (
    <div className={containerStyle}>
      <span className={labelStyle}>{pickUp}</span>

      <span className={labelStyle}>{drop}</span>
    </div>
  );
};

export default TripLabel;
