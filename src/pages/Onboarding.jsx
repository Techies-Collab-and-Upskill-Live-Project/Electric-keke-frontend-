import { OnboardStartPage } from "@/features/onboarding";
import { Routes, Route } from "react-router-dom";
import {
  AdminOnboarding,
  LoginOnboarding,
  PassengerOnboarding,
  RiderOnboarding,
} from ".";

const Onboarding = () => {
  return (
    <Routes>
      <Route index element={<OnboardStartPage />} />
      <Route path="/passenger" element={<PassengerOnboarding />} />
      <Route path="/rider" element={<RiderOnboarding />} />
      <Route path="/admin" element={<AdminOnboarding />} />
      <Route path="/login" element={<LoginOnboarding />} />
    </Routes>
  );
};

export default Onboarding;
