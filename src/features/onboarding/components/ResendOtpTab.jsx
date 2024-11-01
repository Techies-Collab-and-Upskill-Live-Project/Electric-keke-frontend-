import { getItemFromLs } from "@/utils/ls";
import { RequestOtp } from "../services";
import dispatchables from "@/utils/dispatchables";
import { useCountDownTime } from "../hooks/useCountDownTime";
import { useSelector } from "react-redux";

const ResendOtpTab = ({ verificationType }) => {
  const { username, email } = useSelector((state) => state.formData);
  const emailToUse = getItemFromLs("user-email");
  const { showAlert } = dispatchables();

  const { minutes, seconds, restartCountdown } = useCountDownTime();

  const resend_otp = async () => {
    try {
      if (verificationType === "activate") {
        const { detail } = await RequestOtp({
          message_type: "email",
          username: emailToUse,
        });
        showAlert(detail);
        return;
      }

      if (verificationType === "update-password") {
        const { detail } = await RequestOtp({
          username,
        });
        showAlert(detail);
      }
    } catch (error) {
      showAlert("error requesting otp");
    }
  };

  return (
    <div className="flex items-center justify-between text-xs">
      <p className="md:text-base">
        Didn't receive an OTP?{" "}
        <span
          className="cursor-pointer text-basic font-nunito"
          onClick={() => {
            resend_otp();
            restartCountdown();
          }}
        >
          Resend
        </span>
      </p>
      <p className="md:text-sm">
        {minutes} : {seconds}
      </p>
    </div>
  );
};

export default ResendOtpTab;
