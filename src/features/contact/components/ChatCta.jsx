import Btn from "@/components/btn/Btn";
import Send from "@/assets/svg/Send";
import Microphone from "@/assets/svg/Microphone";
import Gallery from "../assets/svg/Gallery";
import PaperClip from "../assets/svg/PaperClip";

export const CareChatCta = ({
  styling,
  message,
  handleSendMessage,
  setMessage,
}) => {
  return (
    <div className={styling}>
      <Btn icon={<Gallery />} styling="bg-transparent w-fit p-0" />
      <Btn icon={<PaperClip />} styling="bg-transparent w-fit p-0" />
      <Btn
        icon={<Send color="#77BB77" />}
        styling="rounded-full size-[50px] -rotate-45 bg-basic-100 send-shadow"
        onClick={() => {
          handleSendMessage(message);
          setMessage("");
        }}
      />
    </div>
  );
};

export const RiderPassengerChatCta = ({ styling }) => {
  return (
    <div className="flex-center gap-x-3 w-fit ml-1">
      <Btn icon={<Microphone />} styling="p-0 bg-transparent" />
      <Btn
        icon={<Send color="#77BB77" />}
        styling="rounded-full size-[50px] -rotate-45 bg-basic-100 send-shadow"
      />
    </div>
  );
};
