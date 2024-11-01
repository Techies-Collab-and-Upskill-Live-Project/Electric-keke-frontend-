import { GetListOfBookings } from "@/services/GetListOfBookings";
import { getItemFromLs } from "../../../utils/ls";
import React from "react";
import { useResource } from "@/hooks/useResource";

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

const RideDetails = ({ origin, destination, price }) => {
  return (
    <div className="mx-auto mt-6 flex flex-col gap-[13px]">
      <RideDetailing info={origin || "origin"} />
      <RideDetailing info={destination || "des"} />
      <RideDetailing info={price || "pric"} price />
    </div>
  );
};

export default RideDetails;
