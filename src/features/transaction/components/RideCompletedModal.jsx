import { useState } from "react";
import CustomModal from "../../../components/CustomModal";
import Btn from "@/components/btn/Btn";
import { RateRiderModal } from "@/features/booking";
import TransactModal from "./TransactModal";
import { useModal } from "@/hooks/useModal";

const RideCompletedModal = ({readyToRate = false, text = 'Pay now'}) => {
  const [rateDriver, setRateDriver] = useState(readyToRate);
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <CustomModal
      trigger={Btn}
      triggerProps={{
        text: text,
        styling: readyToRate ? "w-full btn btn--secondary btn--lg" : "btn w-full btn--primary btn--lg",
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
