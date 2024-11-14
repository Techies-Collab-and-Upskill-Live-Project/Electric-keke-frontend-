import { clientRequest } from "@/lib/axios/client";

export const GetSupportTickets = async () => {
  try {
    const { data } = await clientRequest({
      url: "/customer-support/tickets/unassigned/",
      method: "get",
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
