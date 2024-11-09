import SearchIcon from "../../../assets/svg/SearchIcon";
import { LogoPlain } from "@/assets/svg/Logo";
import { SmallInfo } from "@/components/SmallInfo";
import { useGlobalAuthContext } from "@/contexts/AuthContext";
import { Btn } from "@/components";
import NotificationIndicator from "@/components/NotificationIndicator";
import FormRow from "@/components/forms/FormRow";

const AdminDesktopHeader = () => {
  const { user } = useGlobalAuthContext();

  return (
    <header className="hidden md:flex-spread h-[70px] px-5">
      <FormRow
        icon={SearchIcon}
        iconPosition="size-[30px] left-3"
        inputclass="h-14 rounded-m border border-[#D8E3F8]"
        placeholder="Type to search"
      />

      <div className="flex items-center justify-between gap-x-4 md:gap-x-9">
        <Btn icon={<SearchIcon />} styling=" bg-transparent p-0 size-9" />

        <NotificationIndicator />

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

export default AdminDesktopHeader;
