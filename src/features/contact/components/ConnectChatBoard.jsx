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
  const [messages, setMessages] = useState([]);

  const { showAlert } = dispatchables();

  const { resource: bookData } = useResource(
    () => console.log("bookData"),
    "bookData"
  );

  const SOCKET = useRef(null);

  useEffect(() => {
    const accessToken = getItemFromLs("accessToken");

    SOCKET.current = new WebSocket(
      `${ws_base_url}/chat/${bookData?.booking_id}/?token=${accessToken}`
    );

    SOCKET.current.onopen = () => console.log("connected to chat with user");

    SOCKET.current.onmessage = (event) => {
      const message = PARSEDATA(event.data);
      setMessages((prev) => [...prev, message]);
    };

    SOCKET.current.onerror = () => console.log("error connecting to ride chat");

    return () => {
      if (SOCKET.current) SOCKET.current.close();
    };
  }, [bookData?.booking_id]);

  const handleSendMessage = (message) => {
    if (!message) return;
    const messageData = STRINGIFYDATA({ message });

    SOCKET.current.send(messageData);
  };

  return (
    <>
      <div className="border-2 border-modal rounded-[10px] relative mt-[16px] md:mt-6 flex-1 max-h-[92%] flex flex-col">
        <ChatBoard conversations={messages} chatBoardComponent={ChatBox} />
        <TypingBoard
          typeOfBoard="ridechat"
          handleSendMessage={handleSendMessage}
          defaultMsg={messages.length < 1}
        />
      </div>
    </>
  );
};

export default ConnectChatBoard;
