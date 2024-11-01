import TrackLayout from "../layouts/TrackLayout";
import Person from "./Person";
import Arrived from "./Arrived";
import DeliveryStats from "./DeliveryStats";
import RiderSummary from "./RiderSummary";
import TrackDetails from "./TrackDetails";
import ConfirmRideModal from "@/components/modals/ConfirmRideModal";
import { useModal } from "@/hooks/useModal";

const DriverTracking = ({ hasArrived }) => {
  const { openModal, closeModal, isModalOpen } = useModal();
  return (
    <>
      <ConfirmRideModal
        openModal={openModal}
        closeModal={closeModal}
        isModalOpen={isModalOpen}
      />

      <TrackLayout role="Rider">
        <div className="track-details">
          <div>
            <Person role="Rider" fullname="Passenger's name" hasArrived={hasArrived} />

            {hasArrived ? <Arrived /> : <DeliveryStats role="Rider" />}
          </div>

          {hasArrived ? (
            <RiderSummary openModal={openModal} />
          ) : (
            <TrackDetails
              role="Rider"
              origin="origin"
              destination="destination"
              price="price"
            />
          )}
        </div>
      </TrackLayout>
    </>
  );
};

export default DriverTracking;
