import React from "react";
import { useResource } from "@/hooks/useResource";
import { GetSupportTickets } from "../services/customer-support-tickets";
import RegularList from "@/components/_design-patterns/RegularList";
import SupportTicket from "./SupportTicket";

const OpenTickets = () => {
  const {
    resource: tickets,
    isLoading,
    error,
  } = useResource(GetSupportTickets, undefined, undefined);

  return (
    <div className="w-full md:w-[59%] hidden md:block h-full overflow-hidden overflow-y-scroll no-scrollbar">
      {isLoading ? null : (
        <RegularList list={tickets} component={SupportTicket} />
      )}
    </div>
  );
};

export default OpenTickets;
