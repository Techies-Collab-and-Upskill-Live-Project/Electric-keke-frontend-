import React from "react";
import { goBack } from "@/utils/goBack";
import { ArrowLeft } from "lucide-react";
import { Btn, SmallInfo } from "@/components";
import { useGlobalAuthContext } from "@/contexts/AuthContext";

const SettingHeader = () => {
  const { user } = useGlobalAuthContext();

  return (
    <header className="setting-header">
      <div className="flex items-center gap-x-3 md:gap-6">
        <Btn
          icon={<ArrowLeft color="black" />}
          styling="bg-transparent p-0"
          onClick={goBack}
        />

        <SmallInfo
          styling="border border-neutral-500 pr-[10px] w-[183px] md:w-[303px] min-h-12 md:min-h-[88px]"
          fullname={user?.fullname}
          photoConStyle="size-10 md:size-20"
          fullnameStyle="text-base md:text-2xl text-secondary-130"
          nickStyle="text-sm md:text-base text-neutral-500"
          email={user?.email}
          show_nick
          photo={user?.avatar}
        />
      </div>
    </header>
  );
};

export default SettingHeader;
