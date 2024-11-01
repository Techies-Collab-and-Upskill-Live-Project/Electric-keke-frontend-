import React, { useEffect, useRef } from "react";
import TrackLayout from "../layouts/TrackLayout";
import Person from "./Person";
import DeliveryStats from "./DeliveryStats";
import TrackDetails from "./TrackDetails";
import { useNavigate } from "react-router-dom";
import { useResource } from "@/hooks/useResource";

const PassengerTracking = ({ hasArrived }) => {
  const navigate = useNavigate();

  const {
    resource: { fullname, photo },
  } = useResource(() => console.log("rider"), "rider");

  const {
    resource: { origin, destination },
  } = useResource(() => console.log("book-data"), "book-data");

  useEffect(() => {
    if (hasArrived) navigate("/transaction");
  }, [hasArrived]);

  return (
    <>
      <TrackLayout role="User">
        <div className="track-details">
          <div>
            <Person role="User" fullname={fullname} photo={photo} />

            <DeliveryStats role="User" />
          </div>

          <TrackDetails
            role="User"
            origin={origin || "origin"}
            destination={destination || "destination"}
            price="price"
          />
        </div>
      </TrackLayout>
    </>
  );
};

export default PassengerTracking;
