import { clientRequest } from "@/lib/axios/client";

export const BookRide = async ({ ...bookingData }) => {
  try {
    const { data } = await clientRequest({
      url: "/bookings/new-booking/",
      method: "post",
      data: bookingData,
    });
    return data;
  } catch (error) {
    // const {
    //   data: { detail },
    // } = error.response;
    throw new Error("Error booking ride");
  }
};