import { useResource } from "@/hooks/useResource";
import { PARSEDATA, STRINGIFYDATA } from "@/utils/json";
import { getItemFromLs } from "@/utils/ls";
import { createContext, useEffect, useRef } from "react";
import { useGlobalAuthContext } from "./AuthContext";

const ws_base_url = import.meta.env.VITE_WS;

const DriverLocationContext = createContext(null);

export const DriverLocationProvider = ({ children }) => {
  const SOCKET = useRef(null);
  const { isAuthenticated } = useGlobalAuthContext();
  // const { resource: user } = useResource(() => console.log("user"), "user");

  // useEffect(() => {
  //   if (!isAuthenticated) return;
  //   const user = getItemFromLs('user');
  //   if (user?.role === "User" || user?.role === 'Admin') return;

  //   let intervalId;
  //   const accessToken = getItemFromLs("accessToken");

  //   SOCKET.current = new WebSocket(
  //     `${ws_base_url}/rider/location/?token=${accessToken}`
  //   );

  //   SOCKET.current.onopen = () =>
  //     console.log("connected to the rider location websocket");

  //   SOCKET.current.onmessage = (event) => {
  //     const message = PARSEDATA(event.data);
  //     console.log(message);
  //   };

  //   const getPosition = () => {
  //     if (navigator.geolocation) {
  //       navigator.geolocation.getCurrentPosition(
  //         (position) => {
  //           const { latitude, longitude } = position.coords;
  //           // console.log(latitude, longitude);
  //           const driverCoordinates = { latitude, longitude };

  //           intervalId = setInterval(() => {
  //             // console.log(driverCoordinates);
  //             SOCKET.current.send(STRINGIFYDATA(driverCoordinates));
  //           }, 5000);
  //         },
  //         (err) => console.log(err.code)
  //       );
  //     } else {
  //       showAlert("Geolocation not available", "info");
  //     }
  //   };

  //   getPosition();

  //   return () => {
  //     if (SOCKET.current) SOCKET.current.close();
  //     if (intervalId) clearInterval(intervalId);
  //   };
  // }, [isAuthenticated]);

  return (
    <DriverLocationContext.Provider value={{}}>
      {children}
    </DriverLocationContext.Provider>
  );
};
