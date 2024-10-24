import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useGlobalAuthContext } from "../contexts/AuthContext";
import { RiderIndex, RiderInfo } from "@/features/booking";
import {
  Admin,
  AdminSettings,
  ChatConnect,
  CustomerCare,
  Driver,
  FinancialManagement,
  Profile,
  Riders,
  Schedule,
  Settings,
  Tracking,
  Transaction,
} from "@/pages";

const ProtectedRoute = () => {
  const { isAuthenticated } = useGlobalAuthContext();

  return isAuthenticated ? (
    <Routes>
      <Route path="/admin/*" element={<Admin />} />
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
