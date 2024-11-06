import makePlainRequest from "@/lib/axios/plainRequest";
import CustomError from "@/services/custom-error/CustomError";

export const ActivateUser = async ({ ...otpDetails }) => {
  console.log(otpDetails)
  try {
    const { data } = await makePlainRequest({
      url: "/auth/activate-user/",
      method: "post",
      data: otpDetails,
    });
    return data;
  } catch (error) {
    console.log(error)
    throw new CustomError("Error Activating User", {
      msg: error.data.response.data.detail,
    });
  }
};
