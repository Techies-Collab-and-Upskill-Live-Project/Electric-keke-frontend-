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
    <SharedStep
      text={onboarding_descs.verification}
      headTitle="Complete your profile"
      headDesc="Please enter the one time password sent (OTP)"
      prevProcess={prevProcess}
    >
      <form className="onboarding__verify--form" onSubmit={handleSubmit}>
        <div className="flex items-start gap-x-3">
          <div className="max-w-[438px] space-y-4 w-[calc(100%-20px)]">
            <div>
              <OtpInput
                value={otpValue}
                handleChange={(value) => {
                  setOtpValue(value);
                }}
              />
            </div>

            <ResendOtpTab verificationType="activate" />
          </div>

          <div className="pt-5">
            <OtpTick condition={!isDisbaled} color="#77BB77" />
          </div>
        </div>

        <div className="max-w-[343px] mx-auto space-y-4 mt-6 lg:mt-14">
          <Btn
            text="Continue"
            styling="btn--lg btn w-full rounded-full btn--primary"
            disabled={isDisbaled}
          />
          <Assurance />
        </div>
      </form>
    </SharedStep>
  );
};

export default PassengerStep4;
