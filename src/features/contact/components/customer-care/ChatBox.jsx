import { LogoPlain } from "@/assets/svg/Logo";
import { user_role } from "../../constants";

export const ChatBox = ({ user: role, message, sender, timeStamp }) => {
  return (
    <div
      className={`flex items-center gap-x-3 ${
        (role === "User" || role === "Rider") && "justify-end"
      } mt-2`}
      style={{
        userSelect: "none",
      }}
    >
      {role === null && (
        <LogoPlain
          styling="size-11 border border-basic-700 rounded-full flex-center"
          scale="scale-[0.7]"
        />
      )}

      <div
        className={`px-4 py-3 md:py-7 flex items-end w-[90%] md:w-[45%] ${
          user_role[role] || user_role.Admin
        }`}
      >
        <div>
          <p className={`font-nunito text-base md:text-eiteen`}>{message}</p>
        </div>
      </div>
    </div>
  );
};
