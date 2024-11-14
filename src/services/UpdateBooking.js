import { clientRequest } from "@/lib/axios/client";
import CustomError from "./custom-error/CustomError";
import { updateItemInLs } from "@/utils/ls";

// [ pending, accepted, in_progress, cancelled, completed, dispute_approved ]

const updateStats = {
  accepted: 'booking_accepted',
  in_progress: "booking_in_progress",
  completed: "booking_completed",
};

export const UpdateBooking = async (bookingId, status = "accepted") => {
  console.log(status)
  
  try {
    const {
      data: { detail },
    } = await clientRequest({
      url: `bookings/${bookingId}/status/`,
      method: "patch",
      data: { status },
    });
    // console.log(detail);
    updateItemInLs("bookData", { type: updateStats[status] ?? 'cancelled' }, "object");
    return detail;
  } catch (error) {
    const errordata = error.data.response?.data || {
      detail: "error updating ride",
    };
    throw new CustomError("error updating ride", errordata);
  }
};
