import { getItemFromLs } from "@/utils/ls";
import { RequestOtp } from "../services";
import dispatchables from "@/utils/dispatchables";
import { useCountDownTime } from "../hooks/useCountDownTime";
import { useSelector } from "react-redux";

const ResendOtpTab = ({ verificationType }) => {
  const { username, email } = useSelector((state) => state.formData);
  const { showAlert } = dispatchables();

  const { minutes, seconds } = useCountDownTime();

  const resend_otp = async () => {
    try {
      if (verificationType === "activate") {
        const { detail } = await RequestOtp({
          message_type: "email",
          username: email,
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
      showAlert('error requesting otp')
    }
  };

  return (
    <div className="flex items-center justify-between text-xs">
      <p className="md:text-base">
        Didn't receive an OTP?{" "}
        <span
          className="text-basic cursor-pointer font-nunito"
          onClick={resend_otp}
        >
          Resend
        </span>
      </p>
      <p className="md:text-sm">
        {minutes < 0 ? 0 : minutes} : {seconds < 0 ? "00" : seconds}
      </p>
    </div>
  );
};

export default ResendOtpTab;
