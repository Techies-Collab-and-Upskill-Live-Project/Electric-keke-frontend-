import { LogoPlain } from "@/assets/svg/Logo";
import { Btn, CustomModal } from "@/components";
import { useModal } from "@/hooks/useModal";
import { Menu } from "lucide-react";
import React from "react";
import AdminNav from "./AdminNav";

const AdminMobileSideBar = () => {
  const { openModal, closeModal, isModalOpen } = useModal();


  return (
    <CustomModal
      trigger={Btn}
      triggerProps={{
        styling: "p-0 bg-transparent",
        icon: <Menu color="black" />,
      }}
      openModal={openModal}
      closeModal={closeModal}
      isModalOpen={isModalOpen}
      modalStyling="w-2/3 h-full !rounded-none"
    >
      <LogoPlain href="/admin" />
      
      <AdminNav containerStyling="px-5 flex flex-col gap-2" />
    </CustomModal>
  );
};

export default AdminMobileSideBar;
