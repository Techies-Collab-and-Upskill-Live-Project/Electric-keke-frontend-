import { clientRequest } from "@/lib/axios/client";

export const UpdateBooking = async ({ id, status }) => {
  try {
    const { data } = await clientRequest({
      url: `/bookings/${id}/status/`,
      method: "patch",
      data: { status },
    });
    return data;
  } catch (error) {
    const { detail } = error.data.response.data;
    throw new Error(detail);
  }
};