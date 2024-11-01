import DefaultMsg from "./DefaultMsg";
import { CareChatCta } from "./ChatCta";
import { useState } from "react";

const TypingBoard = ({ handleSendMessage, typeOfBoard }) => {
  const [message, setMessage] = useState("");

  return (
    <>
      {/* <DefaultMsg /> */}
      {/* <div className="min-h-[67px] w-full px-3 md:px-6 py-2 md:py-4 bg-[#F2F2F2] flex-center"> */}
      <div className={`bg-neutral h-[84px] mt-5 flex-center px-6 py-4 w-full`}>
        <div className="w-full min-h-[50px] flex items-center justify-between">
          <textarea
            // cols={60}
            className="h-10 bg-transparent text-black resize-none border-none outline-none px-4 py-2 flex-1"
            placeholder="Type your message"
            value={message}
            onInput={(event) => {
              const {
                target: { value },
              } = event;

              setMessage(value);
            }}
          />

          <CareChatCta
            styling="flex items-center gap-x-3"
            handleSendMessage={handleSendMessage}
            message={message}
            setMessage={setMessage}
            type={typeOfBoard}
          />
        </div>
      </div>
    </>
  );
};

export default TypingBoard;
