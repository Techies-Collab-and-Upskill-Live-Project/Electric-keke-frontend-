import BookingModalForm from "./BookingModalForm";
import SharedModalMap from "../layouts/SharedModalMap";

const RideForm = () => {
  return (
    <SharedModalMap type="booking">
      <BookingModalForm />
    </SharedModalMap>
  );
};

export default RideForm;
