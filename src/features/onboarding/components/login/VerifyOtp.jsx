import { useDispatch, useSelector } from "react-redux";
import { changeInputValue } from "@/store/slices/form-data-slice";
import SharedStep from "../../layouts/SharedStep";
import { getItemFromLs } from "@/utils/ls";
import Btn from "@/components/btn/Btn";
import { useAreInputsFilled } from "../../hooks/useAreInputsFilled";
import OtpInput from "../OtpInput";
import ResendOtpTab from "../ResendOtpTab";
import Assurance from "../Assurance";
import { OtpVerification } from "../../services";
import { onboarding_descs } from "../../constants";
import OtpTick from "../../assets/svg/OtpTick";
import dispatchables from "@/utils/dispatchables";

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
      console.log(detail);
      nextProcess();
    } catch (error) {
      const { detail } = error.data;
      showAlert(detail);
    }
  };

  return (
    <SharedStep
      text={onboarding_descs.reset_otp}
      headTitle="Enter Code"
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

            <ResendOtpTab verificationType="update-password" />
          </div>

          <div className="pt-5">
            <OtpTick condition={!isDisbaled} color="#77BB77" />
          </div>
        </div>

        <div className="max-w-[343px] mx-auto space-y-4 mt-6 lg:mt-14">
          <Btn
            text="Continue"
            styling="btn btn--lg btn--primary w-full rounded-full"
            disabled={isDisbaled}
          />
          <Assurance />
        </div>
      </form>
    </SharedStep>
  );
};

export default VerifyOtp;
