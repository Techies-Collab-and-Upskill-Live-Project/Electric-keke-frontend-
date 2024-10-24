import { useEffect } from "react";
import { io } from "socket.io-client";
// import {} from

export const useSocket = (port) => {
  const socket = io(`http://35.246.47.129/api/v1${port}`);

  const conectSocket = () => {
    socket.on("connect", (socket) => {
      console.log("connected");
    });
  };

  useEffect(() => {
    conectSocket();
  }, []);

  return socket;
};
