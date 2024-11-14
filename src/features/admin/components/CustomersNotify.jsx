import { Btn } from "@/components";
import React from "react";
import TakeAction from "../assets/svgs/TakeAction";
import CustomerNotifications from "./CustomerNotifications";

const CustomersNotify = () => {
  return (
    <div className="w-full md:w-[35%] flex pt-5 rounded-ml flex-col shadow-2xl">
      <div className="px-5 flex-spread">
        <p className="text-xl font-semibold">Notifications</p>
        
        <Btn icon={<TakeAction />} styling="p-0 bg-transparent" />
      </div>

      <CustomerNotifications />
    </div>
  );
};

export default CustomersNotify;
