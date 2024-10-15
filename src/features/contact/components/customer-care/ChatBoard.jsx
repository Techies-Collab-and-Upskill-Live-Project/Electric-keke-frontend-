import { useScroll } from "../../hooks/useScroll";
import { ChatBox } from "./ChatBox";

const Chat = ({ identity }) => {
  const person = {
    sender: {
      box: "bg-[#E7EBEF] rounded-e-20",
      text: "text-black",
    },
    receiver: {
      box: "bg-basic rounded-s-20 ",
      text: "text-white",
    },
  };
  return (
    <div
      className={`flex ${identity === "sender" && "justify-end"} mt-2`}
      style={{
        userSelect: "none",
      }}
    >
      <div
        className={`px-2 py-4 rounded-b-20 flex items-end w-[90%] md:w-[50%] ${person[identity].box}`}
      >
        <div>
          <p
            className={`font-nunito text-eiteen ${person[identity].text}`}
            onDrag={(e) => e.preventDefault()}
          >
            Lorem ipsum dolor sit amet consectetur. Adipiscing convallis
            ultrices feugiat et. Mattis non non lectus tempus. Ornare sodales in
            ligula aliquam sed donec.
          </p>
        </div>
        <div>
          <p className="text-white">7:00pm</p>
        </div>
      </div>
    </div>
  );
};

const ChatBoard = () => {
  const { MouseDown, MouseMove, MouseUp, TouchEnd, TouchMove, TouchStart } =
    useScroll();

  return (
    <div
      className="h-[65vh] w-full px-2 overflow-hidden"
      onMouseDown={MouseDown}
      onMouseUp={MouseUp}
      onMouseMove={MouseMove}
      onTouchStart={TouchStart}
      onTouchEnd={TouchEnd}
      onTouchMove={TouchMove}
    >
      <ChatBox
        identity="user"
        msg="Hi, I booked a ride 20 minutes ago, and the driver still hasn’t arrived. The ETA keeps changing. What’s going on?"
      />

      <ChatBox
        identity="care_rep"
        msg="Hello! I'm really sorry to hear about the delay. Let me check on your ride right away. Can you please send the driver's name and plate number?"
      />
      <ChatBox
        identity="user"
        msg="Sure, the driver’s name is Matthew Colins and his plate number is IKJ-479XA ."
      />
      <ChatBox
        identity="care_rep"
        msg="Hello! I'm really sorry to hear about the delay. Let me check on your ride right away. Can you please send the driver's name and plate number?"
      />
      <ChatBox
        identity="user"
        msg="Sure, the driver’s name is Matthew Colins and his plate number is IKJ-479XA ."
      />
      <ChatBox
        identity="care_rep"
        msg="Hello! I'm really sorry to hear about the delay. Let me check on your ride right away. Can you please send the driver's name and plate number?"
      />
      <ChatBox
        identity="user"
        msg="Sure, the driver’s name is Matthew Colins and his plate number is IKJ-479XA ."
      />
      <ChatBox
        identity="care_rep"
        msg="Hello! I'm really sorry to hear about the delay. Let me check on your ride right away. Can you please send the driver's name and plate number?"
      />
      <ChatBox
        identity="user"
        msg="Sure, the driver’s name is Matthew Colins and his plate number is IKJ-479XA ."
      />
      <ChatBox
        identity="care_rep"
        msg="Hello! I'm really sorry to hear about the delay. Let me check on your ride right away. Can you please send the driver's name and plate number?"
      />
      <ChatBox
        identity="user"
        msg="Sure, the driver’s name is Matthew Colins and his plate number is IKJ-479XA ."
      />
      <ChatBox
        identity="care_rep"
        msg="Hello! I'm really sorry to hear about the delay. Let me check on your ride right away. Can you please send the driver's name and plate number?"
      />
      <ChatBox
        identity="user"
        msg="Sure, the driver’s name is Matthew Colins and his plate number is IKJ-479XA ."
      />
    </div>
  );
};

export default ChatBoard;
