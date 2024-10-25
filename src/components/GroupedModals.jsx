import { modals, CustomModal } from "@/components";
import { groupModalShowBtn, groupModalStyling } from "@/constants";

const {
  ManageProfileModal,
  PaymentMethodModal,
  LogoutDialog,
  DeleteDialog,
  Welldone,
} = modals;

const GroupedModals = ({ type, isModalOpen, closeModal }) => {
  const displayModal = () => {
    switch (type) {
      case "Profile Management":
        return <ManageProfileModal />;
      case "Payment Method":
        return <PaymentMethodModal />;
      case "Logout":
        return <LogoutDialog />;
      case "Delete Account":
        return <DeleteDialog />;
      case "edit-profile":
        return <Welldone closeModal={closeModal} />;
      default:
        break;
    }
  };

  return (
    <CustomModal
      isModalOpen={isModalOpen}
      modalContainerStyling="flex-center"
      modalStyling={groupModalStyling[type]}
      closeModal={closeModal}
      showCloseBtn={groupModalShowBtn[type]}
      animateMI={{ opacity: 0 }}
      animateMA={{ opacity: 1 }}
      animateMSI={{ y: 200, opacity: 0 }}
      animateMSA={{ y: 0, opacity: 1, transition: { delay: 0.25 } }}
    >
      {displayModal()}
    </CustomModal>
  );
};

export default GroupedModals;
