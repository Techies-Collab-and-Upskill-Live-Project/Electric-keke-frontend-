import React from "react";
import RideDetails from "@/features/booking/components/RideDetails";
import Choose from "../../../components/Choose";
import dispatchables from "@/utils/dispatchables";
import { getItemFromLs } from "@/utils/ls";
import { useNavigate } from "react-router-dom";
import SharedModalMap from "../layouts/SharedModalMap";
import { UpdateBooking } from "@/services/UpdateBooking";
import CustomModal from "@/components/CustomModal";

const NewRideModal = ({ isModalOpen, openModal, closeModal }) => {
  const navigate = useNavigate();
  const { showAlert } = dispatchables();

  const handleRideRequest = async (status = "accepted") => {
    const { booking_id } = getItemFromLs("bookData");

    try {
      const response = await UpdateBooking(booking_id, status);
      showAlert(response);
      await closeModal();
      if (status === "accepted") navigate("/tracking/rider");
    } catch (error) {
      const { detail } = error.data;
      console.log(detail);
      showAlert(detail, "danger");
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
        <RideDetails />

        <Choose
          containerClass="pt-8 pb-4 flex flex-col gap-y-6"
          choice1txt="Accept"
          choice2txt="Reject"
          btnClass="w-full rounded-full h-14"
          addedClass1="bg-basic"
          addedClass2="bg-neutral-500"
          handleChoice1={() => handleRideRequest()}
          handleChoice2={() => handleRideRequest("cancelled")}
        />
      </SharedModalMap>
    </CustomModal>
  );
};

export default NewRideModal;
