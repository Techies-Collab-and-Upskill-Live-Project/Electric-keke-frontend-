import { useState } from "react";
import { getItemFromLs } from "@/utils/ls";
import CustomBadge from "../../../../components/CustomBadge";

const AuthProcess = () => {
  console.log(
    "Auth Process component, come to refactor the custome badge with regular list"
  );
  const [processValue] = useState(getItemFromLs("onboarding-process"));
  console.log(processValue);
  return (
    <div className="h-[50px] mt-4 flex items-center justify-between px-[14px] relative">
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[90%] h-1 md:h-3 rounded-full bg-white process--shadow border-b">
        <div
          className={`rounded-full h-full bg-basic ${
            processValue === 2 && "w-[20%]"
          } ${processValue === 3 && "w-[50%]"} ${
            processValue === 4 && "w-[80%]"
          } ${processValue === 5 && "w-[100%]"}`}
        ></div>
      </div>

      <CustomBadge
        styling="process process--shadow"
        badgeMainStyle={`process__display ${
          processValue >= 2 && "process--active"
        }`}
        badgeTextStyle="process__current"
        badgeText="1"
        badgeLabel="Identity"
      />

      <CustomBadge
        styling="process process--shadow"
        badgeText="2"
        badgeTextStyle="process__current"
        badgeLabel="License"
        badgeMainStyle={`process__display ${
          processValue >= 3 && "process--active"
        }`}
      />

      <CustomBadge
        styling="process process--shadow"
        badgeText="3"
        badgeTextStyle="process__current"
        badgeLabel="License"
        badgeMainStyle={`process__display ${
          processValue >= 4 && "process--active"
        }`}
      />

      <CustomBadge
        styling="process process--shadow"
        badgeText="4"
        badgeTextStyle="process__current"
        badgeLabel="Processing"
        badgeMainStyle={`process__display ${
          processValue >= 5 && "process--active"
        }`}
      />
    </div>
  );
};

export default AuthProcess;
