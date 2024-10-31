import dispatchables from "@/utils/dispatchables";
import { PARSEDATA } from "@/utils/json";
import { getItemFromLs } from "@/utils/ls";
import { useRef, useCallback } from "react";

const ws_base_url = import.meta.env.VITE_WS;

export const useSocket = ({
  port,
  ticketId,
  callOnMessage,
  callOnOpen,
}) => {
  const { showAlert } = dispatchables();
  const accessToken = getItemFromLs("accessToken");
  const WEBSOCKET = useRef(null);

  const connectWebSocket = useCallback(() => {
    console.log('attempting to connect.....')
    WEBSOCKET.current = new WebSocket(
      ticketId
        ? `${ws_base_url}/${port}/${ticketId}/?token=${accessToken}`
        : `${ws_base_url}/${port}/?token=${accessToken}`
    );

    WEBSOCKET.current.onopen = () => {
      console.log("WebSocket connection opened");
      callOnOpen();
    };

    WEBSOCKET.current.onmessage = (event) => {
      const message = PARSEDATA(event.data);
      callOnMessage(message);
    };

    WEBSOCKET.current.onclose = () => {
      console.log("WebSocket connection closed");
    };

    WEBSOCKET.current.onerror = (error) => {
      console.error("WebSocket error:", error);
      WEBSOCKET.current.close();
    };
  }, [port, ticketId, accessToken, callOnOpen, callOnMessage]);

  // const SendToSocket = useCallback((...args) => {
  //   console.log(...args)
  //   if (!WEBSOCKET.current || WEBSOCKET.current.readyState === WebSocket.CLOSED) {
  //     connectWebSocket();
  //   }

  //   const waitForConnection = (callback, interval) => {
  //     if (WEBSOCKET.current.readyState === WebSocket.OPEN) {
  //       callback();
  //     } else {
  //       setTimeout(() => {
  //         waitForConnection(callback, interval);
  //       }, interval);
  //     }
  //   };

  //   waitForConnection(() => {
  //     console.log(args, 'for the connection')
  //     WEBSOCKET.current.send(JSON.stringify(...args));
  //   }, 1000);
  // }, [connectWebSocket]);

  const SendToSocket = useCallback((message) => {
    if (WEBSOCKET.current && WEBSOCKET.current.readyState === WebSocket.OPEN) {
      console.log("Sending message:", message);
      WEBSOCKET.current.send(JSON.stringify(message));
    } else {
      console.error("WebSocket is not open. Unable to send message.");
      showAlert("WebSocket is not open. Unable to send message.", "info");
      connectWebSocket();
    }
  }, [connectWebSocket, showAlert]);
  
  return { SendToSocket };
};


// import dispatchables from "@/utils/dispatchables";
// import { PARSEDATA } from "@/utils/json";
// import { getItemFromLs } from "@/utils/ls";
// import { useCallback, useEffect, useRef } from "react";

// const ws_base_url = import.meta.env.VITE_WS;

// export const useSocket = ({
//   port,
//   ticketId,
//   callOnMessage,
//   callOnOpen,
//   reconnect,
// }) => {
//   const { showAlert } = dispatchables();
//   const accessToken = getItemFromLs("accessToken");
//   const WEBSOCKET = useRef(null);
  
//   const connectWebSocket = () => {
//     WEBSOCKET.current = new WebSocket(
//       ticketId
//         ? `${ws_base_url}/${port}/${ticketId}/?token=${accessToken}`
//         : `${ws_base_url}/${port}/?token=${accessToken}`
//     );

//     WEBSOCKET.current.onopen = () => callOnOpen();

//     WEBSOCKET.current.onmessage = (event) => {
//       const message = PARSEDATA(event.data);
//       callOnMessage(message);
//     };

//     WEBSOCKET.current.onclose = () => {
//       console.log("WebSocket connection closed");
//       if (reconnect) {
//         setTimeout(connectWebSocket, 5000);
//       }
//     };

//     WEBSOCKET.current.onerror = (error) => {
//       console.error("WebSocket error:", error);
//       WEBSOCKET.current.close();
//     };
//   };

//   useEffect(() => {

//     connectWebSocket();

//     return () => {
//       // if (WEBSOCKET.current) WEBSOCKET.current.close();
//     };
//   }, [port, ticketId, accessToken, callOnOpen, callOnMessage, reconnect]);

//   const SendToSocket = useCallback(
//     (...args) => {
//       if (WEBSOCKET && WEBSOCKET.current.readyState === WebSocket.OPEN) {
//         WEBSOCKET.current.send(args);
//       } else {
//         showAlert("Unable to send", "info");
//       }
//     },
//     [showAlert]
//   );

//   return { Socket: WEBSOCKET.current, SendToSocket };
// };
