import ArrDown from "@/assets/svg/ArrDown";
import { Btn } from "@/components";
import IconWrapper from "@/components/IconWrapper";
import { MailIcon } from "lucide-react";
import React from "react";

const CustomerNotificationItem = ({ title, description }) => {
  return (
    <div className="h-[10rem] border-2 border-neutral-300 rounded-ml p-5 flex flex-col">
      <div className="flex-spread">
        <div className="flex-center gap-x-2">
          <IconWrapper
            iconElement={MailIcon}
            iconElementProps={{ size: 14, color: "white" }}
            containerStyle="bg-basic rounded-full flex-center size-[25px]"
          />

          <p className="text-sm font-medium">{title}</p>
        </div>

        <Btn
          icon={<ArrDown />}
          styling="size-6 bg-transparent p-0 -rotate-90"
        />
      </div>

      <div className="flex-1 pt-2">
        <p className="text-xs line-clamp-3">{description}</p>
      </div>

      <Btn
        text="Read More"
        styling="bg-transparent p-0 text-xs text-basic font-medium border w-fit h-fit"
      />
    </div>
  );
};

export default CustomerNotificationItem;
