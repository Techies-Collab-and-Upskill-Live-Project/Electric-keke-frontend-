import { useDispatch, useSelector } from "react-redux";
import { changeInputValue } from "@/store/slices/form-data-slice";
import { getItemFromLs } from "@/utils/ls";
import { useAreInputsFilled } from "../../hooks/useAreInputsFilled";
import { OtpVerification } from "../../services";
import { onboarding_descs } from "../../constants";
import dispatchables from "@/utils/dispatchables";
import ActivateVerify from "../sharedSteps/ActivateVerify";

const VerifyOtp = ({ nextProcess, prevProcess }) => {
  const { otpValue } = useSelector((state) => state.formData);
  const dispatch = useDispatch();
  const { showAlert } = dispatchables();

  const setOtpValue = (value) => {
    dispatch(changeInputValue({ key: "otpValue", value }));
  };

  const isDisbaled = useAreInputsFilled(otpValue.split("").length === 5);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // logic to activate account
    try {
      // the logic
      const otpParam = {
        id: getItemFromLs("userId"),
        otp: otpValue,
      };
      const { detail } = await OtpVerification(otpParam);
      showAlert(detail);
      nextProcess();
    } catch (error) {
      const { detail } = error.data;
      showAlert(detail, 'danger');
      // nextProcess();
    }
  };

  return (
    <ActivateVerify
      text={onboarding_descs.reset_otp}
      headTitle="Enter Code"
      headDesc="Please enter the one time password sent (OTP)"
      prevProcess={prevProcess}
      handleFormSubmit={handleSubmit}
      otpValue={otpValue}
      setOtpValue={setOtpValue}
      verificationType="update-password"
      isDisbaled={isDisbaled}
    />
  );
};

export default VerifyOtp;
