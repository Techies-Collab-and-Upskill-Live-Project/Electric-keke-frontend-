import Btn from "@/components/btn/Btn";

const DefaultMsg = ({ handleSendMessage }) => {
  return (
    <div className="flex-center absolute  bottom-24 md:bottom-40 left-1/2 -translate-x-1/2 gap-x-6">
      <Btn
        text="On my way"
        styling="default-msg-btn"
        onClick={() => handleSendMessage("On my WAy")}
      />
      <Btn
        text="Can't make it"
        styling="default-msg-btn"
        onClick={() => handleSendMessage("Can't make it")}
      />
    </div>
  );
};

export default DefaultMsg;
