import makePlainRequest from "@/lib/axios/plainRequest";
import CustomError from "@/services/custom-error/CustomError";

export const OtpVerification = async ({ ...otpData }) => {
  try {
    const { data } = await makePlainRequest({
      url: "/auth/otp-verification/",
      method: "post",
      data: otpData,
    });
    return data;
  } catch (error) {
    throw new CustomError("Error OtpVerification", { ...error.data.response.data });
  }
};
