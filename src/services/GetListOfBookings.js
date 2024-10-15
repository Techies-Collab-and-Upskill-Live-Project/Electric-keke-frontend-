import { clientRequest } from "@/lib/axios/client";

export const GetListOfBookings = async () => {
  try {
    const { data } = await clientRequest({ url: "/bookings/", method: "get" });
    return data;
  } catch (error) {
    throw new Error("Error getting list of bookings");
  }
};