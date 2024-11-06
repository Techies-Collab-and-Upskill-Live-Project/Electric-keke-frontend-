import React, { useEffect, useRef, useState } from "react";
import TrackLayout from "../layouts/TrackLayout";
import Person from "./Person";
import DeliveryStats from "./DeliveryStats";
import TrackDetails from "./TrackDetails";
import { useNavigate } from "react-router-dom";
import { useResource } from "@/hooks/useResource";

const PassengerTracking = ({ hasArrived }) => {
  const navigate = useNavigate();
  const [status, setStatus] = useState(true);

  const {
    resource: {
      rider_name: fullname,
      rider_photo: photo,
      origin,
      destination,
      booking_id,
      price,
    },
  } = useResource(() => console.log("bookData"), "bookData");

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
            price={price || 3000}
            booking_id={booking_id}
            status={status}
          />
        </div>
      </TrackLayout>
    </>
  );
};

export default PassengerTracking;
