import React from "react";
import RideDetails from "@/features/booking/components/RideDetails";
import Choose from "../../../components/Choose";
import dispatchables from "@/utils/dispatchables";
import { rideStatusLsUpdate, rideStatusUpdateRequest } from "@/utils";
import { addItemToLs } from "@/utils/ls";
import { useNavigate } from "react-router-dom";
import SharedModalMap from "../layouts/SharedModalMap";
import { UpdateBooking } from "@/services/UpdateBooking";
import CustomModal from "@/components/CustomModal";
import { useResource } from "@/hooks/useResource";
import { GetListOfBookings } from "@/services/GetListOfBookings";

const NewRideModal = ({ isModalOpen, openModal, closeModal }) => {
  const navigate = useNavigate();
  const { showAlert } = dispatchables();

  const getLatestRideInformation = async () => {
    try {
      const data = await GetListOfBookings();
      const length = data.length;
      return data[length - 1];
    } catch (error) {
      console.log(error);
    }
  };

  const {
    resource: { origin, destination, price, id: bookId },
    isLoading,
  } = useResource(getLatestRideInformation, "currentRide");

  const acceptRide = async () => {
    try {
      addItemToLs("book-id", bookId);

      await closeModal();
      navigate("/tracking/rider");
    } catch (error) {
      showAlert(error.message);
    }
  };

  const declineRide = async () => {
    const rideToUpdateData = rideStatusUpdateRequest("cancelled");
    try {
      // cancle ride
      const data = await UpdateBooking(rideToUpdateData);
      rideStatusLsUpdate("cancelled");
      closeModal();
    } catch (error) {
      showAlert("Error declining ride");
    }
  };

  return (
    <CustomModal
      isModalOpen={isModalOpen}
      openModal={openModal}
      modalContainerStyling="flex-center"
      modalStyling="modal-map__request"
      closeModal={closeModal}
      showCloseBtn={false}
    >
      <SharedModalMap>
        {isLoading ? null : (
          <RideDetails
            price={price}
            origin={origin}
            destination={destination}
          />
        )}
        <Choose
          containerClass="pt-8 pb-4 flex flex-col gap-y-6"
          choice1txt="Accept"
          choice2txt="Reject"
          btnClass="w-full rounded-full h-14"
          addedClass1="bg-basic"
          addedClass2="bg-neutral-500"
          handleChoice1={acceptRide}
          handleChoice2={declineRide}
        />
      </SharedModalMap>
    </CustomModal>
  );
};

export default NewRideModal;
