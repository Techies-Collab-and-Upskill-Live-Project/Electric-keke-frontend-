import React from "react";
import notifications from "@/mock-data/notifications";
import RegularList from "./_design-patterns/RegularList";
import Notify from "@/features/notification/components/Notify";

const GroupedNotification = ({ title }) => {
  return (
    <div>
      <div className="px-4 md:px-[50px] py-4 md:py-9 bg-neutral-100">
        <p className="text-xl font-bold">{title}</p>
      </div>

      <div className="px-4 md:px-[50px]">
        <RegularList component={Notify} list={notifications} />
      </div>
    </div>
  );
};

export default GroupedNotification;
