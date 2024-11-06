import { ChatBoard } from "@/features/contact";
import Heading from "@/components/Heading";
import Btn from "@/components/btn/Btn";
import { ArrowLeft } from "lucide-react";
import TypingBoard from "@/features/contact/components/TypingBoard";
import { goBack } from "@/utils/goBack";
import { Section } from "@/layouts";
import { useCallback, useEffect, useRef, useState } from "react";
import { addItemToLs, getItemFromLs } from "@/utils/ls";
import { PARSEDATA, STRINGIFYDATA } from "@/utils/json";
import dispatchables from "@/utils/dispatchables";
import { ChatBox } from "@/features/contact/components/customer-care/ChatBox";

const ws_base_url = import.meta.env.VITE_WS;

const CustomerCare = () => {
  const SOCKET = useRef(null);
  const [messages, setMessages] = useState([]);
  const [ticketId, setTicketId] = useState(getItemFromLs("ticket") || "");
  const { showAlert } = dispatchables();

  useEffect(() => {
    const accessToken = getItemFromLs("accessToken");

    SOCKET.current = new WebSocket(
      ticketId
        ? `${ws_base_url}/support/${ticketId}/?token=${accessToken}`
        : `${ws_base_url}/support/?token=${accessToken}`
    );

    SOCKET.current.onopen = () => console.log("customer care connected");

    SOCKET.current.onmessage = (event) => {
      const message = PARSEDATA(event.data);
      setMessages((prev) => [...prev, message]);

      setTicketId(message?.ticket_id || getItemFromLs("ticket"));

      if (ticketId) {
        // console.log('i have ticket')
        return;
      } else {
        addItemToLs("ticket", message.ticket_id);
      }
    };

    return () => {
      if (SOCKET.current) SOCKET.current.close();
    };
  }, [ticketId]);

  const SendToSocket = useCallback(
    (message) => {
      console.log(message)
      if (SOCKET && SOCKET.current.readyState === WebSocket.OPEN) {
        SOCKET.current.send(message);
      } else {
        showAlert("Unable to send", "info");
      }
    },
    [showAlert]
  );

  const handleSendMessage = (message) => {
    if (!message) return;
    SendToSocket(STRINGIFYDATA({ message }));
  };

  return (
    <Section darkLogo={true} mobileHeaderStyle="mobile-header">
      <div className="home-pad py-5 h-[calc(100vh-64px)] md:h-[1024px]">
        <div className="h-full md:h-[77%] mt-0 md:mt-[145px]">
          <div className="flex items-start gap-x-3 h-[8%]">
            <Btn
              icon={<ArrowLeft color="black" size={24} />}
              styling="size-6 bg-transparent p-0"
              onClick={goBack}
            />

            <Heading
              title="Help & Support Center"
              tclass="font-bold text-xl md:text-[2rem] font-josefin"
              description="Customer Sevice"
              dclass="text-sm md:text-base mt-1"
            />
          </div>

          <div className="border border-basic rounded-m flex-1 h-[88%] mt-8 py-4 flex flex-col">
            <ChatBoard
              conversations={messages}
              chatBoardComponent={ChatBox}
              extractKeys={(conversations) =>
                conversations.map((item) => item.title)
              }
            />
            <TypingBoard handleSendMessage={handleSendMessage} />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CustomerCare;

// two urls, when available and not available
// const socket = useSocket('notifications');
// const socket = useSocket('rider/location');

// setInterval(() => {
//   // push to the rider socket
//   // websocket.current.send({lat, lng})
// }, 5000);

// after booking
