import { GetListOfBookings } from "@/services/GetListOfBookings";
import { addItemToLs, getItemFromLs } from "../../../utils/ls";
import React from "react";
import { useResource } from "@/hooks/useResource";
import { useSelector } from "react-redux";

const RideDetailing = ({ info, price }) => {
  return (
    <div
      className={`h-[59px] border border-neutral-500 py-4 px-5 rounded-md ${
        price ? "bg-basic-200" : "bg-white"
      } flex items-center justify-between`}
    >
      <p className="text-eiteen w-10/12 font-montserrat">{info}</p>
    </div>
  );
};

const RideDetails = () => {
  // message: {
  //   booking_id,
  //   booking_type,
  //   destination,
  //   origin,
  //   package_details,
  //   passenger_address,
  //   passenger_email,
  //   passenger_name,
  //   passenger_phone,
  //   price,
  //   type,
  // },
  const { message } = useSelector((state) => state.notificationData);

  addItemToLs("bookData", message);

  return (
    <div className="mx-auto mt-6 flex flex-col gap-[13px]">
      <RideDetailing info={message?.origin || "origin"} />
      <RideDetailing info={message?.destination || "des"} />
      <RideDetailing info={message?.price || "pric"} price />
    </div>
  );
};

export default RideDetails;
