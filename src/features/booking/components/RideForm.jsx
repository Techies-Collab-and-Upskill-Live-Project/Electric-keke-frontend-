import BookingModalForm from "./BookingModalForm";
import SharedModalMap from "../layouts/SharedModalMap";

const RideForm = ({ closeModal }) => {
  return (
    <SharedModalMap type="booking">
      <BookingModalForm closeModal={closeModal} />
    </SharedModalMap>
  );
};

export default RideForm;
