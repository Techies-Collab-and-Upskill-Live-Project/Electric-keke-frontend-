import React from "react";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { goBack } from "@/utils/goBack";
import { ArrowLeft } from "lucide-react";
import { Btn, SmallInfo } from "@/components";

const SettingHeader = () => {
  const user = useCurrentUser();
  
  return (
    <header className="setting-header">
      <div className="flex items-center gap-6">
        <Btn
          icon={<ArrowLeft color="black" />}
          styling="bg-transparent"
          onClick={goBack}
        />

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
