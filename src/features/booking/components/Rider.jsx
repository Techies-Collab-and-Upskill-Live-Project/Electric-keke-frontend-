import React, { useEffect, useState } from "react";
import dispatchables from "@/utils/dispatchables";
import Btn from "@/components/btn/Btn";
import Rate from "./Rate";
import star_size from "../utils/star_size";
import { useNavigate } from "react-router-dom";
import IconWrapper from "@/components/IconWrapper";
import { ProfilePhoto } from "@/components";

const Rider = ({
  id,
  fullname,
  email,
  rating = 4,
  plate_number,
  color,
  photo = null,
  ...props
}) => {
  const navigate = useNavigate();

  const { inputDataForBookingRequest, chooseRider } = dispatchables();

  const { setRiderTitle } = props;

  const handleRiderSelection = () => {
    inputDataForBookingRequest("rider", email);
    const rider = {
      id,
      fullname,
      email,
      rating,
      plate_number,
      color,
      photo,
    };
    chooseRider(rider);
    setRiderTitle(fullname)
    navigate(`/riders/${fullname + id}`);
  };

  return (
    <div className="rider" key={fullname} onClick={handleRiderSelection}>
      <ProfilePhoto
        imageUrl={photo}
        text={fullname[0]}
        noImageContainerStyle="bg-basic-900 size-full flex-center rider-image"
        textStyle="font-josefin font-bold text-2xl text-neutral"
      />

      <div className="rider-overlay">
        <div className="rider-info">
          <h2 className="rider-name tablet:!text-2xl laptop:!text-[2rem] line-clamp-1">
            {fullname}
          </h2>

          <Rate
            rate={rating}
            className="w-[67px] md:w-[100px] lg:w-[135px]"
            statik
            size="size-3"
          />

          <p className="rider-plain-text">Licence Plate: {plate_number}</p>

          <p className="rider-plain-text">Keke Color: {color}</p>
        </div>
        <Btn
          text="View Details"
          styling="rider-btn"
          onClick={handleRiderSelection}
        />
      </div>
    </div>
  );
};

export default Rider;
