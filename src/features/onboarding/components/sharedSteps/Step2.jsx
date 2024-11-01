import SharedStep from "../../layouts/SharedStep";
import { useSelector } from "react-redux";
import { useAreInputsFilled } from "../../hooks/useAreInputsFilled";
import Assurance from "../Assurance";
import OnboardFormRows from "../OnboardFormRows";
import Btn from "@/components/btn/Btn";
import { onboarding_descs } from "../../constants";
import { RegisterUser } from "../../services";
import { getItemFromLs } from "@/utils/ls";
import dispatchables from "@/utils/dispatchables";

const Step2 = ({ nextProcess, prevProcess }) => {
  const { phone, state, address, role } = useSelector(
    (state) => state.formData
  );
  const { showAlert } = dispatchables();
  const isDisabled = useAreInputsFilled(phone && state && address);

  const handleAdminSubmit = async () => {
    if (role === "Admin") {
      const formData = getItemFromLs("formData");

      try {
        await RegisterUser(formData);
        showAlert("registered successfully");
        nextProcess();
      } catch (error) {
        showAlert("error with registration", "danger");
      }
    } else {
      nextProcess();
    }
  };
  return (
    <SharedStep
      text={onboarding_descs.complete}
      headTitle="Complete your profile"
      prevProcess={prevProcess}
    >
      <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-7 mb-6 md:mb-14">
          <OnboardFormRows type="complete" />
        </div>

        <div className="w-full max-w-[343px] mx-auto">
          <Btn
            text="Continue"
            styling="btn btn--lg btn--primary w-full rounded-full mb-4"
            disabled={isDisabled}
            onClick={handleAdminSubmit}
          />
          <Assurance />
        </div>
      </form>
    </SharedStep>
  );
};

export default Step2;
