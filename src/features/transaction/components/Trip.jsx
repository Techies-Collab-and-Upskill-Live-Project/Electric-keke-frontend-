import React from "react";

const Trip = ({ origin = "origin", destination = "destination" }) => {
  
  return (
    <div className="flex flex-col justify-between flex-1 h-full">
      <div className="ride-trip-location">
        <p className="text-eiteen text-neutral-500">{origin}</p>
      </div>
      
      <div className="mx-auto h-[calc(100%-112px)] md:h-[70px] w-0 border-2 border-dashed border-basic" />


      <div className="ride-trip-location">
        <p className="text-eiteen text-neutral-500">{destination}</p>
      </div>
    </div>
  );
};

export default Trip;
