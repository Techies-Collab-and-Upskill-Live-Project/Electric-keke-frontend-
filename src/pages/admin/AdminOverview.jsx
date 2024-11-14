import OverviewInfo from "@/features/admin/_layout/OverviewInfo";
import Analytics from "@/features/admin/components/Analytics";
import BoardManagement from "@/features/admin/components/BoardManagement";
import React from "react";

const AdminOverview = () => {
  return (
    <div className="overview">
      <BoardManagement />
      <div>
        <OverviewInfo page="Overview" />
        <Analytics />
      </div>
    </div>
  );
};

export default AdminOverview;
