import Accept from "@/assets/svg/Accept";
import Battery from "@/assets/svg/Battery";
import Distance from "@/assets/svg/Distance";
import Dropped from "@/assets/svg/Dropped";
import TimeEstimate from "@/assets/svg/TimeEstimate";
import Way from "@/assets/svg/Way";
import DeliveryProcess, {
  DeliveryProcessLine,
} from "@/features/tracking/components/DeliveryProcess";
import { useNotification } from "@/hooks/useNotification";
import { useResource } from "@/hooks/useResource";
import { addItemToLs, getItemFromLs } from "@/utils/ls";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const DeliveryStats = ({ role }) => {
  const { resource: bookData } = useResource(
    () => console.log("bookData"),
    "bookData"
  );

  // will use number here 0 1 2 so as to toggle my indicators
  // sample type >= 0 accept indicator should turn up
  const [type, setType] = useState(bookData?.type);
  
  useNotification((notification) => {
    console.log('notification dae')
    const {
      message: { type: bookingType },
    } = notification;
    const newBookData = getItemFromLs("bookData");
    addItemToLs("bookData", { ...newBookData, type: bookingType });
    setType(bookingType);
  });

  const UserDeliveryStats = () => {
    return (
      <div className="mt-10">
        <DeliveryProcess
          title="Driver Accepts Order"
          icon={
            <Accept
              accept={
                type === "booking_accepted" || type === "booking_in_progress" || type === 'booking_completed'
              }
            />
          }
          desc="Estimated time: 3secs"
        />
        <DeliveryProcessLine success />
        <DeliveryProcess
          title="On the way"
          icon={
            <Way
              way={type === "booking_in_progress" || type === 'booking_completed'}
            />
          }
          desc="Estimated time: 3secs"
        />
        <DeliveryProcessLine />
        <DeliveryProcess
          title="Drop off"
          icon={<Dropped dropped={type === 'booking_completed'} />}
          // icon={<Dropped dropped={currentRide.status === "completed"} />}
          desc="Estimated time: 3secs"
        />
      </div>
    );
  };

  const RiderDeliveryStats = () => {
    return (
      <div className="mt-10">
        <DeliveryProcess title="Battery Level" icon={<Battery />} desc="0%" />
        <DeliveryProcessLine success />
        <DeliveryProcess
          title="Distance to pick up location"
          icon={<Distance />}
          desc="12km"
        />
        <DeliveryProcessLine />
        <DeliveryProcess
          title="Estimated time"
          icon={<TimeEstimate />}
          desc="3secs"
        />
      </div>
    );
  };

  return role === "User" ? UserDeliveryStats() : RiderDeliveryStats();
};

export default DeliveryStats;
