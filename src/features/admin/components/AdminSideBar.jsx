import React from "react";
import AdminNav from "./AdminNav";
import { sideBarMargin } from "../constants";
import { LogoPlain } from "@/assets/svg/Logo";
import AdminFooter from "./AdminFooter";

const AdminSideBar = () => {
  // ${sideBarMargin[currentAdminPage]}

  return (
    <aside className="hidden admin-sidebar md:block">
      <LogoPlain styling="h-[70px] flex items-center" href="/admin" />

      <div className="flex flex-col w-full h-[calc(100%-50px)] mt-6">
        <AdminNav />
        <AdminFooter />
      </div>
    </aside>
  );
};

export default AdminSideBar;
