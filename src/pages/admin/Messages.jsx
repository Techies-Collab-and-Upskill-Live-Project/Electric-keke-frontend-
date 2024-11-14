import CustomersNotify from "@/features/admin/components/CustomersNotify";
import OpenTickets from "@/features/admin/components/OpenTickets";
import React from "react";

const Messages = () => {
  return (
    <div className="flex items-stretch justify-between overview">
      <OpenTickets />
      <CustomersNotify />
    </div>
  );
};

export default Messages;
