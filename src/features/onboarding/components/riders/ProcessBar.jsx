import React from "react";
import { progressClass } from "../../constants";

const ProcessBar = ({ processValue }) => {
  return (
    <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[90%] h-1 md:h-3 rounded-full bg-white process--shadow border-b">
      <div
        className={`rounded-full h-full bg-basic ${progressClass[processValue]}`}
      />
    </div>
  );
};

export default ProcessBar;
