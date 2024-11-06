import React, { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
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
  const { isAuthenticated, EvaluateAuthentication } = useGlobalAuthContext();
  const location = useLocation();

  useEffect(() => {
    EvaluateAuthentication();
  }, [location]);

  return isAuthenticated ? (
    <Routes>
      <Route path="/admin/*" element={<Admin />} />
      <Route path="/driver/:id" element={<Driver />} />
      <Route path="/schedule-ride" element={<Schedule />} />
      <Route path="/riders" element={<Riders />}>
        <Route path="list" element={<RiderIndex />} />
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
