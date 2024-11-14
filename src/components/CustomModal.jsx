import { XIcon } from "lucide-react";
import { Modal, ModalSheet, ModalTrigger } from "./_custom-ui/Modal";
import Btn from "./btn/Btn";

const CustomModal = ({
  defaultClass = 'modal',
  children,
  trigger: Trigger,
  triggerProps,
  modalContainerStyling,
  modalStyling,
  isModalOpen,
  openModal,
  closeModal,
  showCloseBtn = true,
  animateMI,
  animateMA,
  animateMSI,
  animateMSA,
}) => {
  return (
    <>
      <ModalTrigger>
        {Trigger && <Trigger onClick={() => openModal()} {...triggerProps} />}
      </ModalTrigger>

      {isModalOpen && (
        <Modal
          styling={`modal-container ${modalContainerStyling}`}
          onClick={() => closeModal()}
          initial={animateMI}
          animate={animateMA}
        >
          <ModalSheet
            initial={animateMSI}
            animate={animateMSA}
            styling={`${defaultClass} ${modalStyling}`}
          >
            {showCloseBtn && (
              <Btn
                icon={<XIcon />}
                styling="modal-close-btn"
                onClick={closeModal}
              />
            )}

            {children}
          </ModalSheet>
        </Modal>
      )}
    </>
  );
};

export default CustomModal;
