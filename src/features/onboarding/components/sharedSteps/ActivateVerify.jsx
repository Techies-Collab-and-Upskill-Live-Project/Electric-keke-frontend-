import Btn from "@/components/btn/Btn";
import OtpTick from "../../assets/svg/OtpTick";
import SharedStep from "../../layouts/SharedStep";
import OtpInput from "../OtpInput";
import ResendOtpTab from "../ResendOtpTab";
import Assurance from "../Assurance";

const ActivateVerify = ({
  text,
  headTitle,
  headDesc,
  prevProcess,
  otpValue,
  setOtpValue,
  verificationType,
  isDisbaled,
  handleFormSubmit,
}) => {
  return (
    <SharedStep
      text={text}
      headTitle={headTitle}
      headDesc={headDesc}
      prevProcess={prevProcess}
    >
      <form className="onboarding__verify--form" onSubmit={handleFormSubmit}>
        <div className="flex items-start gap-x-3">
          <div className="max-w-[438px] space-y-4 w-[calc(100%-20px)] mx-auto">
            <div>
              <OtpInput
                value={otpValue}
                handleChange={(value) => {
                  setOtpValue(value);
                }}
              />
            </div>

            <ResendOtpTab verificationType={verificationType} />
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

export default ActivateVerify;
