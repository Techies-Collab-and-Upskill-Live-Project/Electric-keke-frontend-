import OnboardingForm from "@/features/onboarding/components/OnboardingForm";
import PassengerStep3 from "@/features/onboarding/components/passengers/PassengerStep3";
import PassengerStep4 from "@/features/onboarding/components/passengers/PassengerStep4";
import Step1 from "@/features/onboarding/components/sharedSteps/Step1";
import Step2 from "@/features/onboarding/components/sharedSteps/Step2";
import { addItemToLs } from "@/utils/ls";
import React from "react";
import { useNavigate } from "react-router-dom";

const PassengerOnboarding = () => {
  const navigate = useNavigate();
  return (
    <OnboardingForm
      runOnStart={() => navigate("/onboarding")}
      runOnFinish={() => {
        addItemToLs('onboarding-process', 0)
        navigate("/onboarding/login");
      }}
    >
      <Step1 />
      <Step2 />
      <PassengerStep3 />
      <PassengerStep4 />
    </OnboardingForm>
  );
};

export default PassengerOnboarding;
