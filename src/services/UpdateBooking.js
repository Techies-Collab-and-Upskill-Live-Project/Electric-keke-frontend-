import { clientRequest } from "@/lib/axios/client";
import CustomError from "./custom-error/CustomError";

// [ pending, accepted, in_progress, cancelled, completed, dispute_approved ]

export const UpdateBooking = async (bookingId, status = "accepted") => {
  try {
    const {
      data: { detail },
    } = await clientRequest({
      url: `bookings/${bookingId}/status/`,
      method: "patch",
      data: { status },
    });
    return detail;
  } catch (error) {
    const errordata = error.data.response?.data || {
      detail: "error updating ride",
    };
    throw new CustomError("error updating ride", errordata);
  }
};
