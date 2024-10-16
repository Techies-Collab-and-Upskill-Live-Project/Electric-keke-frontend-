import { getItemFromLs } from "@/utils/ls";
import { RequestOtp } from "../services";
import dispatchables from "@/utils/dispatchables";
import { useCountDownTime } from "../hooks/useCountDownTime";

const ResendOtpTab = ({ verificationType }) => {
  const { showAlert } = dispatchables();

  const { minutes, seconds } = useCountDownTime();

  const resend_otp = async () => {
    try {
      if (verificationType === "activate") {
        console.log(verificationType);

        const { detail } = await RequestOtp({
          message_type: "email",
          username: getItemFromLs("user-email"),
        });
        showAlert(detail);
        return;
      }

      if (verificationType === "update-password") {
        console.log(verificationType);

        const { detail } = await RequestOtp({
          username: getItemFromLs("user-email"),
        });
        showAlert(detail);
      }
    } catch (error) {
      console.log(error);
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
