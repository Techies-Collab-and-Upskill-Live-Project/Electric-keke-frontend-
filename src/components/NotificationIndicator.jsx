import React from "react";
import { Btn } from ".";
import { icons } from "@/assets";

const NotificationIndicator = ({ handleClick }) => {
  const { BellIcon } = icons;
  return (
    <Btn
      icon={
        <>
          <span className="indicator" />
          <BellIcon color="black" />
        </>
      }
      styling="relative bg-transparent p-0 size-9"
      onClick={handleClick}
    />
  );
};

export default NotificationIndicator;
