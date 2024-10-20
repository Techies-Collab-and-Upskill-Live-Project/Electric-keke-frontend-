import CustomModal from "./CustomModal";
import ManageProfileModal from "./modals/ManageProfileModal";
import PaymentMethodModal from "./modals/PaymentMethodModal";
import LogoutDialog from "./modals/LogoutDialog";
import DeleteDialog from "./modals/DeleteDialog";
import Welldone from "./modals/Welldone";
import { groupModalShowBtn, groupModalStyling } from "@/constants";


const GroupedModals = ({ type, isModalOpen, closeModal }) => {
  return (
    <CustomModal
      isModalOpen={isModalOpen}
      modalContainerStyling="flex-center"
      modalStyling={groupModalStyling[type]}
      closeModal={closeModal}
      showCloseBtn={groupModalShowBtn[type]}
    >
      {type === "Profile Management" && <ManageProfileModal />}
      {type === "Payment Method" && <PaymentMethodModal />}
      {type === "Logout" && <LogoutDialog />}
      {type === "Delete Account" && <DeleteDialog />}
      {type === "edit-profile" && <Welldone closeModal={closeModal} />}
    </CustomModal>
  );
};

export default GroupedModals;
