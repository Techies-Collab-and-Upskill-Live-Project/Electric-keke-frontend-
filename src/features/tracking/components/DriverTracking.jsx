import TrackLayout from "../layouts/TrackLayout";
import Person from "./Person";
import Arrived from "./Arrived";
import DeliveryStats from "./DeliveryStats";
import RiderSummary from "./RiderSummary";
import TrackDetails from "./TrackDetails";
import ConfirmRideModal from "@/components/modals/ConfirmRideModal";
import { useModal } from "@/hooks/useModal";
import { useResource } from "@/hooks/useResource";
import { useState } from "react";

const DriverTracking = ({ hasArrived }) => {
  const { openModal, closeModal, isModalOpen } = useModal();
  const [status, setStatus] = useState(false);
  const { resource: bookData } = useResource(
    () => console.log("logic to return at least a data"),
    "bookData"
  );
  

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
            <Person
              role="Rider"
              fullname={bookData?.passenger_name}
              hasArrived={hasArrived}
            />

            {hasArrived ? <Arrived /> : <DeliveryStats role="Rider" />}
          </div>

          {hasArrived ? (
            <RiderSummary openModal={openModal} />
          ) : (
            <TrackDetails
              role="Rider"
              origin={bookData?.origin || "origin"}
              destination={bookData?.destination || "destination"}
              price={bookData?.price || "3000"}
              booking_id={bookData?.booking_id}
              status={status}
            />
          )}
        </div>
      </TrackLayout>
    </>
  );
};

export default DriverTracking;
