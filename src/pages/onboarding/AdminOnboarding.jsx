import OnboardingForm from "@/features/onboarding/components/OnboardingForm";
import Step1 from "@/features/onboarding/components/sharedSteps/Step1";
import Step2 from "@/features/onboarding/components/sharedSteps/Step2";
import React from "react";
import { useNavigate } from "react-router-dom";

const AdminOnboarding = () => {
  const navigate = useNavigate();
  return (
    <OnboardingForm
      runOnStart={() => navigate("/onboarding")}
      runOnFinish={() => navigate("/onboarding/login")}
    >
      <Step1 />
      <Step2 />
    </OnboardingForm>
  );
};

export default AdminOnboarding;
