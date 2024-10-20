import { AnimatePresence } from "framer-motion";
import React from "react";
import Loader from "../loaders/Loader";
import { useSelector } from "react-redux";
import Alert from "../Alert";
import NotificationModal from "../modals/NotificationModal";
import { useGlobalNotificationContext } from "@/contexts/NotificationContext";

const General = () => {
  const {
    alert: { show },
    loading,
  } = useSelector((state) => state.global);
  const {
    isNotificationModalOpen,
    closeNotificationModal,
    openNotificationModal,
  } = useGlobalNotificationContext();

  return (
    <AnimatePresence>
      {show && <Alert />}
      {loading && (
        <Loader className="fixed top-5 right-5 z-50" type="spin2" size={30} />
      )}
      <NotificationModal
        isModalOpen={isNotificationModalOpen}
        openModal={openNotificationModal}
        closeModal={closeNotificationModal}
      />
    </AnimatePresence>
  );
};

export default General;
