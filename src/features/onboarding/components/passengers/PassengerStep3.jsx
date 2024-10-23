import OtpChoice from "../OtpChoice";
import { getItemFromLs } from "@/utils/ls";
import Btn from "@/components/btn/Btn";
import Assurance from "../Assurance";
import dispatchables from "@/utils/dispatchables";
import RegularList from "@/components/_design-patterns/RegularList";
import SharedStep from "../../layouts/SharedStep";
import { RegisterUser } from "../../services";
import { onboarding_descs, otp_choice } from "../../constants";

const PassengerStep3 = ({ nextProcess, prevProcess }) => {
  const { showAlert } = dispatchables();

  const handleSubmit = async () => {
    const formData = getItemFromLs("formData");
    const { message_type } = formData;

    if (message_type === "sms") {
      showAlert("sms is unavailable");
      return;
    }

    try {
      await RegisterUser(formData);
      showAlert("otp sent for verification");
      nextProcess();
    } catch (error) {
      const errorArr = error.data;
       errorArr ? showAlert(errorArr[0]) : showAlert("Server Error");
      // nextProcess();
    }
  };

  return (
    <SharedStep
      text={onboarding_descs.otp}
      headTitle="OTP!"
      prevProcess={prevProcess}
    >
      <div className="auth-form space-y-7">
        <p>Where should we send your OTP?</p>
        <RegularList list={otp_choice} component={OtpChoice} />
      </div>

      <div className="w-full max-w-[343px] mx-auto mt-6">
        <Btn
          text="Continue"
          styling="btn btn--lg btn--primary h-14 w-full rounded-full mb-4"
          onClick={handleSubmit}
        />
        <Assurance />
      </div>
    </SharedStep>
  );
};

export default PassengerStep3;
