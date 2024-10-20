import { useState } from "react";
import CustomModal from "../../../components/CustomModal";
import Btn from "@/components/btn/Btn";
import { RateRiderModal } from "@/features/booking";
import TransactModal from "./TransactModal";
import { useModal } from "@/hooks/useModal";

const RideCompletedModal = () => {
  const [rateDriver, setRateDriver] = useState(false);
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <CustomModal
      trigger={Btn}
      triggerProps={{
        text: "Pay now",
        styling: "btn w-full btn--primary btn--lg",
      }}
      modalContainerStyling="flex-center"
      modalStyling={rateDriver ? "modal__rate" : "modal__transaction"}
      isModalOpen={isModalOpen}
      closeModal={closeModal}
      openModal={openModal}
      showCloseBtn={false}
    >
      {rateDriver ? (
        <RateRiderModal setRateDriver={setRateDriver} closeModal={closeModal} />
      ) : (
        <TransactModal setRateDriver={setRateDriver} />
      )}
    </CustomModal>
  );
};

export default RideCompletedModal;
