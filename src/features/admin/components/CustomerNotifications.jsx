import React from "react";
import CustomerNotificationItem from "./CustomerNotificationItem";
import RegularList from "@/components/_design-patterns/RegularList";
import { customers_notifications } from "../constants";

const CustomerNotifications = () => {
  return (
    <div className="px-2 md:px-5 pt-[10px] pb-8 flex-1 space-y-5 overflow-hidden overflow-y-scroll no-scrollbar">
      <RegularList
        list={customers_notifications}
        component={CustomerNotificationItem}
      />
    </div>
  );
};

export default CustomerNotifications;
