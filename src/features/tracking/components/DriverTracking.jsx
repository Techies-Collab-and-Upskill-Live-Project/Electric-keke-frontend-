import TrackLayout from "../layouts/TrackLayout";
import Person from "./Person";
import Arrived from "./Arrived";
import DeliveryStats from "./DeliveryStats";
import RiderSummary from "./RiderSummary";
import TrackDetails from "./TrackDetails";
import ConfirmRideModal from "@/components/modals/ConfirmRideModal";
import { useModal } from "@/hooks/useModal";
import { useResource } from "@/hooks/useResource";
import { useEffect, useState } from "react";
import { getItemFromLs } from "@/utils/ls";

const DriverTracking = ({ hasArrived, setHasArrived }) => {
  const { openModal, closeModal, isModalOpen } = useModal();
  const [isDisabled, setDisabled] = useState(false); // toggle buttons

  const { resource: bookData, setResource } = useResource(
    () => console.log("logic to return at least a data"),
    "bookData"
  );

  useEffect(() => {
    const resource = getItemFromLs("bookData");
    setResource(resource);
  }, [hasArrived]);

  return (
    <>
      <ConfirmRideModal
        openModal={openModal}
        closeModal={closeModal}
        isModalOpen={isModalOpen}
        price={bookData?.price}
        fullname={bookData?.passenger_name}
      />

      <TrackLayout role="Rider">
        <div className="track-details">
          <div>
            <Person
              role="Rider"
              fullname={bookData?.passenger_name}
              rideCompleted={bookData?.type === 'booking_completed'}
            />

            {bookData?.type === "booking_completed" ? (
              <Arrived
                origin={bookData?.origin}
                destination={bookData?.destination}
              />
            ) : (
              <DeliveryStats role="Rider" />
            )}
          </div>

          {bookData?.type === "booking_completed" ? (
            <RiderSummary openModal={openModal} price={bookData?.price} />
          ) : (
            <TrackDetails
              booking_id={bookData?.booking_id}
              destination={bookData?.destination || "destination"}
              origin={bookData?.origin || "origin"}
              price={bookData?.price || "3000"}
              role="Rider"
              setHasArrived={setHasArrived}
              isDisabled={isDisabled}
              setDisabled={setDisabled}
            />
          )}
        </div>
      </TrackLayout>
    </>
  );
};

export default DriverTracking;
