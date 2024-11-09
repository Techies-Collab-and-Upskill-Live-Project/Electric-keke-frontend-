import { Btn, SmallInfo } from "@/components";
import FormRow from "@/components/forms/FormRow";
import NotificationIndicator from "@/components/NotificationIndicator";
import { useGlobalAuthContext } from "@/contexts/AuthContext";
import { MenuIcon, SearchIcon } from "lucide-react";
import React from "react";
import AdminMobileNav from "./AdminMobileSideBar";

const AdminMobileHeader = () => {
  const { user } = useGlobalAuthContext();

  return (
    <div className="admin-mobile__header">
      <div className="w-full flex-spread">
        <AdminMobileNav />
        
        <div className="flex-center gap-x-2">
          <SmallInfo
            admin
            fullname={user?.fullname}
            id={user?.id}
            fullnameStyle="text-sm capitalize"
            nickStyle="text-sm"
            show_arr
            show_nick
            photo={user?.avatar}
            styling="border w-[146px] bg-white border-neutral-40 flex-spread"
          />
          <NotificationIndicator />
        </div>
      </div>

      <FormRow
        icon={SearchIcon}
        styling="border border-neutral-200 relative h-[45px] rounded-full w-full mt-3"
        inputclass="bg-transparent h-[45px] w-full border-none outline-none pr-4"
      />
    </div>
  );
};

export default AdminMobileHeader;
