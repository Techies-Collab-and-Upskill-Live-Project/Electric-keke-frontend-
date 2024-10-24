import ForgetPassword from "@/features/onboarding/components/login/ForgetPassword";
import Login from "@/features/onboarding/components/login/Login";
import NewPassword from "@/features/onboarding/components/login/NewPassword";
import VerifyOtp from "@/features/onboarding/components/login/VerifyOtp";
import OnboardingForm from "@/features/onboarding/components/OnboardingForm";
import React from "react";
import { useNavigate } from "react-router-dom";

const LoginOnboarding = () => {
  const navigate = useNavigate();
  const runOnFinish = () => console.log("go back to one");
  return (
    <OnboardingForm
      runOnStart={() => navigate("/onboarding")}
      runOnFinish={() =>{
        location.reload();
      }}
    >
      <Login />
      <ForgetPassword />
      <VerifyOtp />
      <NewPassword />
    </OnboardingForm>
  );
};

export default LoginOnboarding;
