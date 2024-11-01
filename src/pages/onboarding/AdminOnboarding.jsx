import OnboardingForm from "@/features/onboarding/components/OnboardingForm";
import Step1 from "@/features/onboarding/components/sharedSteps/Step1";
import Step2 from "@/features/onboarding/components/sharedSteps/Step2";
import dispatchables from "@/utils/dispatchables";
import { addItemToLs } from "@/utils/ls";
import { useNavigate } from "react-router-dom";

const AdminOnboarding = () => {
  const navigate = useNavigate();
  const { changeAuthFormData } = dispatchables();

  addItemToLs("onboarding-process", 0);

  changeAuthFormData({ target: { name: "role", value: "Admin" } });

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
