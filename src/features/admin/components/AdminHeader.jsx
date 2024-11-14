import React from "react";
import AdminMobileHeader from "./AdminMobileHeader";
import AdminDesktopHeader from "./AdminDesktopHeader";

const AdminHeader = () => {
  return (
    <>
      <AdminMobileHeader />
      <AdminDesktopHeader />
    </>
  );
};

export default AdminHeader;
