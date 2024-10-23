import React from "react";
import Assurance from "../Assurance";
import OtpInput from "../OtpInput";
import { useDispatch, useSelector } from "react-redux";
import { ActivateUser } from "../../services";
import { deletItemFromLs, getItemFromLs } from "@/utils/ls";
import Btn from "@/components/btn/Btn";
import ResendOtpTab from "../ResendOtpTab";
import { changeInputValue } from "@/store/slices/form-data-slice";
import { useAreInputsFilled } from "../../hooks/useAreInputsFilled";
import SharedStep from "../../layouts/SharedStep";
import OtpTick from "../../assets/svg/OtpTick";
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
    e.preventDefault();
    try {
      const otpParams = {
        id: getItemFromLs("userId"),
        otp: otpValue,
      };

      const { detail } = await ActivateUser(otpParams);
      // console.log(detail);
      nextProcess();
      deletItemFromLs("userId");
    } catch (error) {
      showAlert(error.data.msg);
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
