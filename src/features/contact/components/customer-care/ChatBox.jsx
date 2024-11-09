import { LogoPlain } from "@/assets/svg/Logo";
import { user_role } from "../../constants";
import { useGlobalAuthContext } from "@/contexts/AuthContext";

const identity = {
  sender: "justify-end",
  receiver: "justify-start",
};

export const ChatBox = ({ user: role, message, sender, timeStamp }) => {
  const { user: currentUser } = useGlobalAuthContext();

  let type;

  if (role === currentUser.role) {
    type = "sender";
  } else {
    type = "receiver";
  }

  return (
    <div className={`flex items-center gap-x-3 ${identity[type]} mt-2`}>
      {role === "Admin" && currentUser.role !== "Admin" && (
        <LogoPlain
          styling="size-11 border border-basic-700 rounded-full flex-center"
          scale="scale-[0.7]"
          href="/customer-care"
        />
      )}

      <div
        className={`px-4 py-3 md:py-7 flex items-end w-[90%] md:w-[45%] ${user_role[type]}`}
      >
        <div>
          <p className={`font-nunito text-base md:text-eiteen`}>{message}</p>
        </div>
      </div>

      {role === "Admin" && currentUser.role === "Admin" && (
        <LogoPlain
          styling="size-11 border border-basic-700 rounded-full flex-center"
          scale="scale-[0.7]"
          href="/customer-care"
        />
      )}
    </div>
  );
};
