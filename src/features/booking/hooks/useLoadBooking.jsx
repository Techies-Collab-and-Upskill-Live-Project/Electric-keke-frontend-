import { useNotification } from "@/hooks/useNotification";
import dispatchables from "@/utils/dispatchables";
import { addItemToLs, getItemFromLs } from "@/utils/ls";
import { useNavigate } from "react-router-dom";

export const useLoadBooking = (setWaiting) => {

  const navigate = useNavigate();
  const { showAlert, showNotification } = dispatchables();

  useNotification((notification) => {
    const {
      message: { type, booking_id, message },
    } = notification;
    const { fullname, email, photo } = getItemFromLs("rider");
    
    const { booking_type, origin, destination, price } =
      getItemFromLs("book-data");

    const bookData = {
      type,
      booking_id,
      booking_type,
      destination,
      origin,
      package_details: null,
      rider_email: email,
      rider_name: fullname,
      rider_phone: "74747",
      price,
      rider_photo: photo,
    };

    if (type === "booking_accepted") {
      showAlert(message, "info");
      showNotification(null);
      addItemToLs("bookData", bookData);
      navigate("/tracking/passenger");
    } else if (type === "booking_cancelled_by_rider") {
      showAlert(message, "danger");
      setWaiting(false);
      showNotification(null);
    }
  });
}