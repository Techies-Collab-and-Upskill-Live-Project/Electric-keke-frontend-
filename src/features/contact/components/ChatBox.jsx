import { ProfilePhoto } from "@/components";
import { useResource } from "@/hooks/useResource";

const person = {
  sender: "rounded-s-full bg-basic",
  receiver: "rounded-e-full bg-connect",
};

const ChatBox = ({ message, user, role, timestamp }) => {
  const { resource: currentUser } = useResource(
    () => console.log("user"),
    "user"
  );
  
  let type;
  
  if (currentUser.role === role) {
    type = 'sender'
  } else {
    type = 'receiver'
  }
  

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
            {message}
          </p>
        </div>

        {type === "sender" && <ProfilePhoto styling="size-11" />}
      </div>
    </div>
  );
};

export default ChatBox;
