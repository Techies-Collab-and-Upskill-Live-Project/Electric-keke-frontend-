import React from "react";
import { useSelector } from "react-redux";
import SharedStep from "../../layouts/SharedStep";
import Btn from "@/components/btn/Btn";
import { useAreInputsFilled } from "../../hooks/useAreInputsFilled";
import OnboardFormRows from "../OnboardFormRows";
import { addItemToLs } from "@/utils/ls";
import { RequestOtp } from "../../services";
import { onboarding_descs } from "../../constants";
import dispatchables from "@/utils/dispatchables";

const ForgetPassword = ({ nextProcess, prevProcess }) => {
  const { username } = useSelector((state) => state.formData);
  const { showAlert } = dispatchables();
  const isDisbaled = useAreInputsFilled(username);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // addItemToLs("user-email", username);
    
    try {
      const { detail } = await RequestOtp({ username });
      showAlert(detail)
      nextProcess();
    } catch (error) {
      showAlert('error request')
    }
  };

  return (
    <SharedStep
      text={onboarding_descs.forget}
      headClass="w-full"
      headTitle="Forgot Password"
      headDesc="Enter registered phone number or email to receive a reset code"
      prevProcess={prevProcess}
    >
      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="space-y-7">
          <OnboardFormRows type="forget" />
        </div>

        <div className="w-full max-w-[343px] mx-auto border mt-10">
          <Btn
            text="Send Code"
            styling="btn btn--lg btn--primary w-full rounded-full"
            disabled={isDisbaled}
          />
        </div>
      </form>
    </SharedStep>
  );
};

export default ForgetPassword;
