import dispatchables from "@/utils/dispatchables";
import Btn from "@/components/btn/Btn";
import { UpdateBooking } from "@/services/UpdateBooking";

const updateAction = {
  User: "cancelled",
  Rider: "in_progress",
};

const TrackDetails = ({
  role,
  origin,
  destination,
  price,
  isDisabled,
  booking_id,
  setHasArrived,
  setDisabled: setDisableBtn,
}) => {
  const { showAlert } = dispatchables();

  const UpdateCurrentBooking = async () => {
    setDisableBtn(true);
    try {
      const response = await UpdateBooking(booking_id, updateAction[role]);
      showAlert(response);
      setTimeout(async () => {
        try {
          await UpdateBooking(booking_id, "completed");
          showAlert("completed");
          setHasArrived(true);
        } catch (error) {
          showAlert(error.data.detail);
        }
      }, 10000);
    } catch (error) {
      const { detail } = error.data;
      showAlert(detail, "info");
      setDisableBtn(false);
    }
  };

  return (
    <div className="mt-14">
      <div className="space-y-4">
        <div className="ride__location">
          <p className="text-eiteen">{origin}</p>
        </div>
        <div className="ride__location">
          <p className="text-eiteen">{destination}</p>
        </div>
      </div>

      <div className="flex items-center mt-10 gap-x-8">
        <div className="ride-fare">&#8358; {price}</div>

        <Btn
          text={role === "User" ? "Cancel Ride" : "Start Trip"}
          styling="btn btn--hero btn--primary w-[244px]"
          onClick={UpdateCurrentBooking}
          disabled={isDisabled}
        />
      </div>
    </div>
  );
};

export default TrackDetails;
