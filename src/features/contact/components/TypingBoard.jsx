import DefaultMsg from "./DefaultMsg";
import { CareChatCta } from "./ChatCta";

const TypingBoard = ({ styling }) => {
  return (
    <>
      {/* <DefaultMsg /> */}
      {/* <div className="min-h-[67px] w-full px-3 md:px-6 py-2 md:py-4 bg-[#F2F2F2] flex-center"> */}
      <div className={`w-full bg-neutral ${styling}`}>
        <div className="w-full min-h-[50px] flex items-center justify-between">
          <textarea
            cols={60}
            className="h-5 bg-transparent text-black resize-none w-[76%border border-red-500 max-w-[600px]"
            placeholder="Type your message"
          />

          <CareChatCta styling="flex items-center gap-x-3" />
        </div>
      </div>
    </>
  );
};

export default TypingBoard;
