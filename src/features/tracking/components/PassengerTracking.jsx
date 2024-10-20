import React, { useEffect } from "react";
import TrackLayout from "../layouts/TrackLayout";
import Person from "./Person";
import DeliveryStats from "./DeliveryStats";
import TrackDetails from "./TrackDetails";
import { useNavigate } from "react-router-dom";

const PassengerTracking = ({ hasArrived }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (hasArrived) navigate("/transaction");
  }, [hasArrived]);

  return (
    <>
      <TrackLayout role="User">
        <div className="track-details">
          <div>
            <Person role="User" fullname="rider name" />

            <DeliveryStats role="User" />
          </div>

          <TrackDetails
            role="User"
            origin="origin"
            destination="destination"
            price="price"
          />
        </div>
      </TrackLayout>
    </>
  );
};

export default PassengerTracking;
