import React from "react";
import CustomModal from "../CustomModal";
import CustomBadge from "../CustomBadge";
import Close from "../Close";
import GroupedNotification from "../GroupedNotification";

const NotificationModal = ({ openModal, isModalOpen, closeModal }) => {
  return (
    <CustomModal
      isModalOpen={isModalOpen}
      closeModal={closeModal}
      openModal={openModal}
      showCloseBtn={false}
      modalStyling="modal__notification pb-20"
      animateMSI={{ opacity: 0, x: -200 }}
      animateMSA={{ opacity: 1, x: 0 }}
      defaultClass="bg-white"
    >
      <div className="flex-spread px-4 md:px-[50px] pt-4 md:pt-16">
        <div className="pb-1 border-b flex-center gap-x-6">
          <h2 className="font-bold font-josefin">Notification</h2>

          <CustomBadge
            styling="size-10 flex-center rounded-full process--shadow"
            badgeMainStyle="size-7 bg-warning-200 rounded-full flex-center text-white"
            badgeText="3"
            badgeTextStyle="text-xl font-bold"
          />
        </div>

        <Close handleClose={closeModal} />
      </div>

      <div className="">
        <GroupedNotification title="Today" />
      </div>
    </CustomModal>
  );
};

export default NotificationModal;
