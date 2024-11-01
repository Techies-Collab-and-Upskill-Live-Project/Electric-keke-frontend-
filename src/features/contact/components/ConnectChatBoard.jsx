import TypingBoard from "./TypingBoard";
import ChatBox from "./ChatBox";
import { ChatBoard } from "..";
import { useCallback, useEffect, useRef, useState } from "react";
import { getItemFromLs } from "@/utils/ls";
import { useResource } from "@/hooks/useResource";
import { PARSEDATA, STRINGIFYDATA } from "@/utils/json";
import dispatchables from "@/utils/dispatchables";

const ws_base_url = import.meta.env.VITE_WS;

const ConnectChatBoard = () => {
  const [messages, setMessages] = useState([
    { msg: "jose" },
    { msg: "yess i am the receiver", type: "receiver" },
  ]);

  const { showAlert } = dispatchables();

  const { resource: bookId } = useResource(
    () => console.log("book-id"),
    "book-id"
  );

  const SOCKET = useRef(null);

  useEffect(() => {
    const accessToken = getItemFromLs("accessToken");

    SOCKET.current = new WebSocket(
      `${ws_base_url}/chat/${bookId}/?token=${accessToken}`
    );

    SOCKET.current.onopen = () => console.log("connected to chat with user");

    SOCKET.current.onmessage = (event) => {
      const message = PARSEDATA(event.data);
      console.log(message);
    };

    SOCKET.current.onerror = () => console.log("error connecting to ride chat");

    return () => {
      if (SOCKET.current) SOCKET.current.close();
    };
  }, [bookId]);

  const handleSendMessage = (message) => {
    if (!message) return;

    const messageData = STRINGIFYDATA({ message });

    if (SOCKET.current && SOCKET.current.readyState === WebSocket.OPEN) {
      SOCKET.current.send(messageData);
      setMessages((prev) => [...prev, { msg: message, type: "user" }]);
    } else {
      showAlert("Unable to send message, WebSocket is not open.", "info");
    }
  };

  return (
    <>
      <div className="border-2 border-modal rounded-[10px] relative mt-[16px] md:mt-6 flex-1 max-h-[92%] flex flex-col">
        <ChatBoard
          conversations={messages}
          chatBoardComponent={ChatBox}
          extractKeys={(conversations) => [""]}
        />
        <TypingBoard
          typeOfBoard="ridechat"
          handleSendMessage={handleSendMessage}
        />
      </div>
    </>
  );
};

export default ConnectChatBoard;
