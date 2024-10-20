import { memo, useEffect, useState } from "react";
import { getItemFromLs } from "@/utils/ls";
import CustomBadge from "../../../../components/CustomBadge";
import { processes } from "../../constants";
import RegularList from "@/components/_design-patterns/RegularList";
import { useArray } from "@/hooks/useArray";
import ProcessBar from "./ProcessBar";

const AuthProcess = () => {
  const { array: driveAuthProcesses, setArrayItem } = useArray(processes);
  const [processValue] = useState(getItemFromLs("onboarding-process"));

  useEffect(() => {
    setArrayItem(
      processValue - 2,
      {
        badgeMainStyle: "process__display process--active",
      },
      "isGreaterOrEqual"
    );
  }, [processValue]);

  return (
    <div className="h-[50px] mt-4 flex items-center justify-between px-[14px] relative">
      <ProcessBar processValue={processValue} />
      <RegularList component={CustomBadge} list={driveAuthProcesses} />
    </div>
  );
};

export default memo(AuthProcess);
