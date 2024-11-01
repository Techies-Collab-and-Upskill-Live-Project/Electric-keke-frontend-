import makePlainRequest from "@/lib/axios/plainRequest";
import CustomError from "@/services/custom-error/CustomError";
import { addItemToLs, getItemFromLs } from "@/utils/ls";

export const RegisterUser = async ({
  address,
  email,
  fullname,
  password,
  re_password,
  phone,
  state,
  message_type,
  role,
}) => {
  try {
    addItemToLs("user-email", email);
    const data = await makePlainRequest({
      url: "/auth/register-user/",
      method: "post",
      data: {
        fullname,
        address,
        state_of_residence: state,
        role,
        email,
        phone,
        password,
        re_password,
        message_type,
      },
    });
    /**
     * when we register the user the id is needed
     * to verify the user for the otp, we will be
     * fetching it from ls
     */
    addItemToLs("userId", data.id);
  } catch (error) {
    const errorRes = error.data.response;
    const errors_arr = Object.entries(errorRes.data).map(([key, value]) => {
      return value;
    });

    throw new CustomError("Error Registering User", errors_arr);
  }
};
