import { memo, useEffect, useState } from "react";
import { getItemFromLs } from "@/utils/ls";
import CustomBadge from "../../../../components/CustomBadge";
import { processes, progressClass } from "../../constants";
import RegularList from "@/components/_design-patterns/RegularList";
import { useArray } from "@/hooks/useArray";

const AuthProcess = () => {
  const { array: driveAuthProcesses, setArrayItem } = useArray(processes);
  const [processValue] = useState(getItemFromLs("onboarding-process"));

  useEffect(() => {
    setArrayItem(processValue - 2, { badgeMainStyle: "process__display process--active" });
  }, [processValue]);

  return (
    <div className="h-[50px] mt-4 flex items-center justify-between px-[14px] relative">
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[90%] h-1 md:h-3 rounded-full bg-white process--shadow border-b">
        <div
          className={`rounded-full h-full bg-basic ${progressClass[processValue]}`}
        />
      </div>

      <RegularList component={CustomBadge} list={driveAuthProcesses} />
    </div>
  );
};

export default memo(AuthProcess) ;
