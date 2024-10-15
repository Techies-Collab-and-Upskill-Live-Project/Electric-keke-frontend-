import React from "react";
import { SmallInfo } from "@/components/SmallInfo";
import Spear from "@/assets/svg/Spear";
import { useCurrentUser } from "@/hooks/useCurrentUser";

const SettingHeader = () => {
  const user = useCurrentUser();
  return (
    <header className="setting-header">
      <div className="flex items-center gap-6">
        <div className="cursor-pointer" onClick={() => history.back()}>
          <Spear color="red" />
        </div>
        
        <SmallInfo
          styling="border border-neutral-500 pr-[10px] w-[183px] md:w-[303px] min-h-12 md:min-h-[88px]"
          fullname={user?.fullname}
          photoConStyle="size-10 md:size-20"
          fullnameStyle="text-base md:text-2xl text-secondary-130"
          nickStyle="text-sm md:text-base text-neutral-500"
          show_nick
        />
      </div>
    </header>
  );
};

export default SettingHeader;
