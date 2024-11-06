import SearchIcon from "../../../assets/svg/SearchIcon";
import { LogoPlain } from "@/assets/svg/Logo";
import { SmallInfo } from "@/components/SmallInfo";
import { useGlobalAuthContext } from "@/contexts/AuthContext";
import { Btn } from "@/components";
import { BellIcon, Menu } from "lucide-react";
import { useGlobalAdminContext } from "../context/AdminContext";

const AdminHeader = () => {
  const { user } = useGlobalAuthContext();
  const {setshowSidebar} = useGlobalAdminContext();
  return (
    <header className="border admin-header">
      <div className="flex items-center">
        <Btn icon={<Menu color="black" />} styling="bg-transparent p-0 md:hidden" onClick={() => setshowSidebar(prev => !prev)} />
        <LogoPlain styling="w-[84px] h-[56px]" />
      </div>

      <div className="flex items-center justify-between gap-x-4 md:gap-x-9">
        <Btn icon={<SearchIcon />} styling="admin-icon bg-transparent p-0" />

        <Btn
          icon={
            <>
              <span className="indicator" />
              <BellIcon size={36} color="black" />
            </>
          }
          styling="admin-icon relative bg-transparent p-0"
        />

        <SmallInfo
          admin
          fullname={user?.fullname}
          id={user?.id}
          fullnameStyle="text-sm capitalize"
          nameBoxStyling="hidden md:block"
          nickStyle="text-sm"
          show_arr
          show_nick
          photo={user?.avatar}
          styling="border w-fit md:w-[146px] bg-white border-neutral-40 flex-spread"
        />
      </div>
    </header>
  );
};

export default AdminHeader;
