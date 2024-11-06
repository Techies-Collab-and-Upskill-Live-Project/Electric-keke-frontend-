import { useEffect } from "react";
import { useSelector } from "react-redux";

export const useNotification = (callback) => {
  const notification = useSelector((state) => state.notificationData);

  useEffect(() => {
    if (notification) {
      callback(notification);
    }
  }, [notification]);
};
