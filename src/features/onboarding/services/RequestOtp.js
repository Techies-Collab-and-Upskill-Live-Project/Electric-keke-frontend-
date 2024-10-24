import makePlainRequest from "@/lib/axios/plainRequest";
import CustomError from "@/services/custom-error/CustomError";
import { addItemToLs } from "@/utils/ls";

export const RequestOtp = async ({ ...otpData }) => {
  try {
    const { data } = await makePlainRequest({
      url: "/auth/request-new-otp/",
      method: "post",
      data: otpData,
    });
    addItemToLs("userId", data.user_id);
    return data;
  } catch (error) {
    throw new CustomError("Error requesting otp");
  }
};