import React, { useEffect, useState } from "react";
import dispatchables from "@/utils/dispatchables";
import Btn from "@/components/btn/Btn";
import Rate from "./Rate";
import star_size from "../utils/star_size";
import { useNavigate } from "react-router-dom";

const Rider = ({
  id,
  fullname,
  email,
  rating,
  plate_number,
  color,
  photo,
  setNavigationLink
}) => {
  const navigate = useNavigate();
  const [mediaSize, setMediaSize] = useState(window.outerWidth);

  const { inputDataForBookingRequest, chooseRider } = dispatchables();

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      setMediaSize(e.currentTarget.outerWidth);
    });

    return window.removeEventListener("resize", (e) =>
      setMediaSize(e.currentTarget.outerWidth)
    );
  }, []);

  return (
    <div className="rider" key={fullname}>
      <div className="size-full">
        <img src={photo} alt={fullname} className="rider-image" />
      </div>

      <div className="rider-overlay">
        <div className="rider-info">
          <h2 className="rider-name tablet:!text-2xl laptop:!text-[2rem]">
            {fullname}
          </h2>

          <Rate
            rate={rating}
            className="w-[67px] md:w-[100px] lg:w-[135px]"
            size={star_size(mediaSize)}
            statik
          />

          <p className="rider-plain-text">Licence Plate: {plate_number}</p>

          <p className="rider-plain-text">Keke Color: {color}</p>
        </div>
        <Btn
          text="View Details"
          styling="rider-btn"
          onClick={() => {
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
            navigate(`/riders/${fullname + id}`)
          }}
        />
      </div>
    </div>
  );
};

export default Rider;
