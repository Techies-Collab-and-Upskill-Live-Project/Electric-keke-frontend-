import React from "react";
import TripLabel from "./TripLabel";
import Trip from "./Trip";

const TripDetails = ({ containerStyle }) => {
  return (
    <div className={containerStyle}>
      <TripLabel />
      <Trip />
    </div>
  );
};

export default TripDetails;
