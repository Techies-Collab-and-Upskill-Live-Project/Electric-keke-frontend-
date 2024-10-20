import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import BoardManagement from "../features/admin/components/BoardManagement";
import Analytics from "../features/admin/components/Analytics";
import OverviewInfo from "../features/admin/components/OverviewInfo";
import AdminHeader from "../features/admin/components/AdminHeader";
import AdminSideBar from "@/features/admin/components/AdminSideBar";
import { useGlobalAdminContext } from "@/features/admin/context/AdminContext";

const AdminLayout = () => {
  const { currentAdminPage } = useGlobalAdminContext();
  return (
    <section>
      <AdminHeader />

      <div className="flex items-start gap-x-10">
        <AdminSideBar />

        <div className="overview">
          {currentAdminPage !== "Financial Management" && <BoardManagement />}

          <OverviewInfo />

          {(currentAdminPage === "Overview" ||
            currentAdminPage === "Financial Management") && <Analytics />}

          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default AdminLayout;
