import { OnboardRegister, OnboardStartPage } from "@/features/onboarding";
import { Routes, Route } from "react-router-dom";

const Onboarding = () => {
  return (
    <Routes>
      <Route index element={<OnboardStartPage />} />
      <Route path="/registration" element={<OnboardRegister />} />
    </Routes>
  );
};

export default Onboarding;
