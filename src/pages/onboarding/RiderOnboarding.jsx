import OnboardingForm from "@/features/onboarding/components/OnboardingForm";
import Processing from "@/features/onboarding/components/riders/Processing";
import RiderStep3 from "@/features/onboarding/components/riders/RiderStep3";
import RiderStep4 from "@/features/onboarding/components/riders/RiderStep4";
import RiderStep5 from "@/features/onboarding/components/riders/RiderStep5";
import Step1 from "@/features/onboarding/components/sharedSteps/Step1";
import Step2 from "@/features/onboarding/components/sharedSteps/Step2";
import React from "react";

const RiderOnboarding = () => {
  const runOnStart = () => console.log("rider start");
  return (
    <OnboardingForm
      runOnStart={runOnStart}
      runOnFinish={() => {
        alert("finished the driver auth");
      }}
    >
      <Step1 />
      <Step2 />
      <RiderStep3 />
      <RiderStep4 />
      <RiderStep5 />
      <Processing /> 
    </OnboardingForm>
  );
};

export default RiderOnboarding;
