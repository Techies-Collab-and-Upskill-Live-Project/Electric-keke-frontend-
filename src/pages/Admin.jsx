import { Route, Routes, useLocation } from "react-router-dom";
import BoardManagement from "../features/admin/components/BoardManagement";
import AdminSideBar from "@/features/admin/components/AdminSideBar";
import { useGlobalAdminContext } from "@/features/admin/context/AdminContext";
import { show_board } from "@/features/admin/constants";
import {
  AdminOverview,
  AdminSettings,
  FinancialManagement,
  Messages,
  UserManagement,
} from ".";
import AdminHeader from "@/features/admin/components/AdminHeader";

const Admin = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <section className="flex h-screen">
      <AdminSideBar />
      <div className="w-full md:w-[calc(100%-300px)]">
        <AdminHeader />
        <Routes>
          <Route index element={<AdminOverview />} />
          <Route path="/user-management" element={<UserManagement />} />
          <Route
            path="financial-management"
            element={<FinancialManagement />}
          />
          <Route path="settings" element={<AdminSettings />} />
          <Route path="message" element={<Messages />} />
        </Routes>
      </div>
    </section>
  );
};

export default Admin;
