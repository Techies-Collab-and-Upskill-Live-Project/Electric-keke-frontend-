import { useModal } from "@/hooks/useModal";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { PARSEDATA } from "@/utils/json";
import { addItemToLs, getItemFromLs } from "@/utils/ls";
import dispatchables from "@/utils/dispatchables";
import { useGlobalAuthContext } from "./AuthContext";

const ws_base_url = import.meta.env.VITE_WS;

const NotificationContext = createContext(null);

export const NotificationProvider = ({ children }) => {
  const { isAuthenticated } = useGlobalAuthContext();
  const { showNotification } = dispatchables();
  const SOCKET = useRef(null);

  const {
    isModalOpen: isNotificationModalOpen,
    closeModal: closeNotificationModal,
    openModal: openNotificationModal,
  } = useModal();

  useEffect(() => {
    if (!isAuthenticated) return;
    const accessToken = getItemFromLs("accessToken");

    SOCKET.current = new WebSocket(
      `${ws_base_url}/notifications/?token=${accessToken}`
    );

    if (!isAuthenticated) {
      showNotification(null);
      SOCKET.current.close();
      console.log("socket closed");
    }

    SOCKET.current.onopen = () =>
      console.log("connected to notification SOCKET");

    SOCKET.current.onerror = () =>
      console.log("connected to notification SOCKET failed");

    SOCKET.current.onmessage = (event) => {
      const notification = PARSEDATA(event.data);
      console.log(notification);
      showNotification(notification);
    };

    return () => {
      if (SOCKET.current) SOCKET.current.close();
    };
  }, [isAuthenticated]);

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
