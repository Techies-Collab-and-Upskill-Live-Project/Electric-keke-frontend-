import React from "react";
import { useSelector } from "react-redux";
import SharedStep from "../../layouts/SharedStep";
import dispatchables from "@/utils/dispatchables";
import { getItemFromLs } from "@/utils/ls";
import Btn from "@/components/btn/Btn";
import { useAreInputsFilled } from "../../hooks/useAreInputsFilled"
import OnboardFormRows from "../OnboardFormRows";
import { ResetPassword } from "../../services";
import { onboarding_descs } from "../../constants";

const NewPassword = ({ nextProcess, prevProcess }) => {
  const { password, re_password } = useSelector((state) => state.formData);
  const { showAlert } = dispatchables();

  const isDisbaled = useAreInputsFilled(password && re_password);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('jose')
    try {
      const { detail } = await ResetPassword({
        username: getItemFromLs("user-email"),
        password,
        re_password,
      });
      showAlert(detail);

      nextProcess();
      console.log('nest process')
    } catch (error) {
      console.log(error);
      showAlert("error reseting passcode");
    } finally {
      location.reload();
    }
  };

  return (
    <SharedStep
      text={onboarding_descs.new_password}
      headTitle="Enter New Password"
      // prevProcess={prevProcess}
    >
      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="space-y-7">
          <OnboardFormRows type="new" />
        </div>

        <div className="max-w-[343px] mx-auto mt-14">
          <Btn
            text="Continue"
            styling="btn btn--primary btn--lg w-full rounded-full"
            disabled={isDisbaled}
          />
        </div>
      </form>
    </SharedStep>
  );
};

export default NewPassword;
