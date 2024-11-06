import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActivateUser } from "../../services";
import { deletItemFromLs, getItemFromLs } from "@/utils/ls";
import { changeInputValue } from "@/store/slices/form-data-slice";
import { useAreInputsFilled } from "../../hooks/useAreInputsFilled";
import dispatchables from "@/utils/dispatchables";
import { onboarding_descs } from "../../constants";
import ActivateVerify from "../sharedSteps/ActivateVerify";

const PassengerStep4 = ({ nextProcess, prevProcess }) => {
  const { otpValue } = useSelector((state) => state.formData);
  const dispatch = useDispatch();
  const { showAlert } = dispatchables();

  const setOtpValue = (value) => {
    dispatch(changeInputValue({ key: "otpValue", value }));
  };

  const isDisbaled = useAreInputsFilled(otpValue.split("").length === 5);

  const handleSubmit = async (e) => {
    console.log('i am here')
    e.preventDefault();
    try {
      const otpParams = {
        id: getItemFromLs("userId"),
        otp: otpValue,
      };
      console.log(otpParams)

      const { detail } = await ActivateUser(otpParams);
      showAlert(detail);
      nextProcess();
      deletItemFromLs("userId");
    } catch (error) {

      showAlert(error.data?.msg || "error activating user");
      // nextProcess();
    }
  };

  return (
    <ActivateVerify
      text={onboarding_descs.verification}
      headTitle="Complete your profile"
      headDesc="Please enter the one time password sent (OTP)"
      prevProcess={prevProcess}
      handleFormSubmit={handleSubmit}
      otpValue={otpValue}
      setOtpValue={setOtpValue}
      verificationType="activate"
      isDisbaled={isDisbaled}
    />
  );
};

export default PassengerStep4;
