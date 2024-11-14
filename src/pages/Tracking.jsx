import { DriverTracking, PassengerTracking } from "@/features/tracking";
import { useNotification } from "@/hooks/useNotification";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

const Tracking = () => {
  const [hasArrived, setHasArrived] = useState(false);

  useNotification((notification) => {
    const {
      message: { type },
    } = notification;
    console.log("notificay", "tracking");
    if (type === "booking_completed") {
      console.log("true booking completed");
      setHasArrived(true);
    }
  });

  return (
    <Routes>
      <Route
        path="/rider"
        element={
          <DriverTracking
            hasArrived={hasArrived}
            setHasArrived={setHasArrived}
          />
        }
      />
      <Route
        path="/passenger"
        element={
          <PassengerTracking
            hasArrived={hasArrived}
            setHasArrived={setHasArrived}
          />
        }
      />
    </Routes>
  );
};

export default Tracking;
