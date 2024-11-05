import { Route, Routes } from "react-router-dom";
import BoardManagement from "../features/admin/components/BoardManagement";
import AdminHeader from "../features/admin/components/AdminHeader";
import AdminSideBar from "@/features/admin/components/AdminSideBar";
import { useGlobalAdminContext } from "@/features/admin/context/AdminContext";
import { show_board } from "@/features/admin/constants";
import { AdminOverview, AdminSettings, FinancialManagement, UserManagement } from ".";

const Admin = () => {
  const { currentAdminPage } = useGlobalAdminContext();
  return (
    <section className="flex flex-col">
      <AdminHeader />

      <div className="flex items-start gap-x-10">
        <AdminSideBar currentAdminPage={currentAdminPage} />

        <div className="overview">
          {show_board[currentAdminPage] && <BoardManagement />}

          <Routes>
            <Route index element={<AdminOverview />} />
            <Route path="/user-management" element={<UserManagement />} />
            <Route
              path="financial-management"
              element={<FinancialManagement />}
            />
            <Route path="settings" element={<AdminSettings />} />
          </Routes>
        </div>
      </div>
    </section>
  );
};

export default Admin;
