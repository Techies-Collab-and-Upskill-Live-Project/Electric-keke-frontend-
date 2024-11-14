import { ProfilePhoto } from "@/components";
import { useGlobalAuthContext } from "@/contexts/AuthContext";

const person = {
  sender: "rounded-s-full bg-basic",
  receiver: "rounded-e-full bg-connect",
};

const ChatBox = ({ message, user, role, timestamp }) => {
  const { user: currentUser } = useGlobalAuthContext();

  let type;

  if (currentUser.role === role) {
    type = "sender";
  } else {
    type = "receiver";
  }

  return (
    <div
      className={`flex items-end py-2 gap-x-2 ${
        type === "receiver" ? "pl-1 pr-[18px]" : "justify-end pr-1 pl-[18px]"
      }`}
    >
        {type === "receiver" && (
          <ProfilePhoto styling="size-11" noImageContainerStyle="border-2 size-11 rounded-full flex-center" />
        )}

        <div
          className={`px-10 py-3 border-4 min-w-20 max-w-[calc(100%-44px)] rounded-t-full ${person[type]}`}
        >
          <p
            className={`text-sm md:text-base ${
              type === "sender" && "text-white"
            }`}
          >
            {message}
          </p>
        </div>

        {type === "sender" && (
          <ProfilePhoto styling="size-11" noImageContainerStyle="border-2 size-11 rounded-full flex-center" text={currentUser?.fullname[0]} />
        )}
    </div>
  );
};

export default ChatBox;
