import { useModal } from "@/hooks/useModal";
import { createContext, useContext } from "react";

const NotificationContext = createContext(null);

export const NotificationProvider = ({ children }) => {
  const {
    isModalOpen: isNotificationModalOpen,
    closeModal: closeNotificationModal,
    openModal: openNotificationModal,
  } = useModal();

  return (
    <NotificationContext.Provider
      value={{
        isNotificationModalOpen,
        closeNotificationModal,
        openNotificationModal,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useGlobalNotificationContext = () => {
  const context = useContext(NotificationContext);
  if (!context) throw new Error("no notifiction context");
  return context;
};
