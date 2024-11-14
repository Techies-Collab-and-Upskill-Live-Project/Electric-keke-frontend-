import { clientRequest } from "@/lib/axios/client";

export const PayWithCash = async ({ booking_id, amount, showAlert }) => {
  try {
    await clientRequest({
      url: `/bookings/payment/cash/${booking_id}/`,
      method: "put",
      data: { amount },
    });
    showAlert("Cash Payment done", "info");
  } catch (error) {
    showAlert("Cash Payment error", "danger");
  }
};
