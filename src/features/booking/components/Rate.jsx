import React, { useState } from "react";
import Star from "../assets/Star";
import IconWrapper from "@/components/IconWrapper";

const Rate = ({ rate, handleClick, statik, className, size = "size-5" }) => {
  const [indicate, setIndicate] = useState(2);
  const [show, setShow] = useState(false);

  const StatikRating = () => {
    return (
      <div className={`flex-spread ${className}`}>
        {[1, 2, 3, 4, 5].map((item) => (
          <IconWrapper
            key={item}
            iconElement={Star}
            iconElementProps={{ rated: rate >= item ? true : false }}
            containerStyle={size}
          />
        ))}
      </div>
    );
  };

  const DynamikRating = () => {
    return (
      <>
        {!show && (
          <div
            className={`flex-spread ${className}`}
            onMouseEnter={() => setShow(true)}
          >
            {[1, 2, 3, 4, 5].map((item) => (
              <IconWrapper
                key={item}
                iconElement={Star}
                iconElementProps={{ rated: rate >= item ? true : false }}
                containerStyle={size}
              />
            ))}
          </div>
        )}

        {show && (
          <div
            className={`flex items-center w-fit ${className}`}
            onMouseLeave={() => setShow(false)}
          >
            {[1, 2, 3, 4, 5].map((item) => (
              <IconWrapper
                key={item}
                iconElement={Star}
                iconElementProps={{ rated: rate >= item ? true : false }}
                containerStyle={`transition-transform duration-100 cursor-pointer hover:scale-150 ${size}`}
                onMouseEnter={() => setIndicate(item)}
                onMouseLeave={() => setIndicate(0)}
                onClick={() => handleClick(item)}
              />
            ))}
          </div>
        )}
      </>
    );
  };
  return statik ? StatikRating() : DynamikRating();
};

export default Rate;
