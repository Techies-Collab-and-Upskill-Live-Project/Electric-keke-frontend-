import { user_identity } from "../../constants";
import EcoRepImg from "./EcoRepImg";

export const ChatBox = ({ identity, msg }) => {
  return (
    <div
      className={`flex items-center gap-x-3 ${identity === "user" && "justify-end"} mt-2`}
      style={{
        userSelect: "none",
      }}
    >
      {identity === 'care_rep' && <EcoRepImg styling="size-11 border border-basic-700 rounded-full flex-center" />}

      <div
        className={`px-4 py-3 md:py-7 flex items-end w-[90%] md:w-[45%] ${user_identity[identity]}`}
      >
        <div>
          <p className={`font-nunito text-base md:text-eiteen`}>{msg}</p>
        </div>
      </div>
    </div>
  );
};
