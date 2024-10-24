import { clientRequest } from "@/lib/axios/client";
import CustomError from "@/services/custom-error/CustomError";

export const GetAvailableRiders = async () => {
  try {
    const { data } = await clientRequest({ url: "/bookings/riders/" });
    return data;
  } catch (error) {
    throw new CustomError("Internal Server Error", {
      status: error.data.status,
    });
  }
};