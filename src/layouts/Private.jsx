import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useGlobalAuthContext } from "../contexts/AuthContext";
import AdminLayout from "./AdminLayout";
import CustomerCare from "../pages/CustomerCare";
import Driver from "../pages/Driver";
import Profile from "../pages/Profile";
import Riders from "../pages/Riders";
import InProgress from "../pages/InProgress";
import Tracking from "@/pages/Tracking";
import ChatConnect from "@/pages/ChatConnect";
import Schedule from "@/pages/Schedule";
import Settings from "@/pages/Settings";
import Transaction from "@/pages/Transaction";
import { RiderIndex, RiderInfo } from "@/features/booking";
import FinancialManagement from "@/pages/admin/FinancialManagement";
import UserManagement from "@/pages/admin/UserManagement";

const ProtectedRoute = () => {
  const { isAuthenticated } = useGlobalAuthContext();

  return isAuthenticated ? (
    <Routes>
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="user-management" element={<UserManagement />} />
        <Route path="financial-management" element={<FinancialManagement />} />
        <Route path="settings" element={<InProgress />} />
      </Route>
      <Route path="/driver/:id" element={<Driver />} />
      <Route path="/schedule-ride" element={<Schedule />} />
      <Route path="/riders" element={<Riders />}>
        <Route index element={<RiderIndex />} />
        <Route path=":id" element={<RiderInfo />} />
      </Route>
      <Route path="/tracking/*" element={<Tracking />} />
      <Route path="/profile/:id" element={<Profile />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/customer-care" element={<CustomerCare />} />
      <Route path="/transaction" element={<Transaction />} />
      <Route path="/chat" element={<ChatConnect />} />
    </Routes>
  ) : (
    <Navigate to="/" />
  );
};

export default ProtectedRoute;
