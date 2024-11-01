import { useModal } from "@/hooks/useModal";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { PARSEDATA } from "@/utils/json";
import { getItemFromLs } from "@/utils/ls";

const ws_base_url = import.meta.env.VITE_WS;

const NotificationContext = createContext(null);

export const NotificationProvider = ({ children }) => {
  const SOCKET = useRef(null);

  const {
    isModalOpen: isNotificationModalOpen,
    closeModal: closeNotificationModal,
    openModal: openNotificationModal,
  } = useModal();

  const [notifications, setNotifications] = useState([]);

  // useEffect(() => {
  //   const accessToken = getItemFromLs("accessToken");

  //   SOCKET.current = new WebSocket(
  //     `${ws_base_url}/notifications/?token=${accessToken}`
  //   );

  //   SOCKET.current.onopen = () =>
  //     console.log("connected to notification SOCKET");

  //   SOCKET.current.onerror = () =>
  //     console.log("connected to notification SOCKET failed");

  //   SOCKET.current.onmessage = (event) => {
  //     const notification = PARSEDATA(event.data);
  //     console.log(notification);
  //     setNotifications((prev) => [...prev, notification]);
  //   };

  //   return () => {
  //     if (SOCKET.current) SOCKET.current.close();
  //   };
  // }, []);

  return (
    <NotificationContext.Provider
      value={{
        notifications,
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
