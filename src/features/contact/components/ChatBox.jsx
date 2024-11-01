import { ProfilePhoto } from "@/components";

const ChatBox = ({ type = "sender", msg = "Hello Mathew where you dae?" }) => {
  const person = {
    sender: "rounded-s-full bg-basic",
    receiver: "rounded-e-full bg-connect",
  };

  return (
    <div
      className={`flex items-end py-2 ${
        type === "receiver" ? "pl-1 pr-[18px]" : "justify-end pr-1 pl-[18px]"
      }`}
    >
      <div className="flex-center gap-x-2">
        {type === "receiver" && <ProfilePhoto styling="size-11" />}

        <div
          className={`px-4 py-3  w-[calc(100%-44px)] rounded-t-full ${person[type]}`}
        >
          <p
            className={`text-sm md:text-base ${
              type === "sender" && "text-white"
            }`}
          >
            {msg}
          </p>
        </div>

        {type === "sender" && <ProfilePhoto styling="size-11" />}
      </div>
    </div>
  );
};

export default ChatBox;
