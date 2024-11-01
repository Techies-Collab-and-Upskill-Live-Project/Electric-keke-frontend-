import { DriverTracking, PassengerTracking } from "@/features/tracking";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

const Tracking = () => {
  const [hasArrived, setHasArrived] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setHasArrived(true);
  //   }, 10000);
  // }, []);

  return (
    <Routes>
      <Route
        path="/rider"
        element={<DriverTracking hasArrived={hasArrived} />}
      />
      <Route
        path="/passenger"
        element={<PassengerTracking hasArrived={hasArrived} />}
      />
    </Routes>
  );
};

export default Tracking;
