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
    const {data: {id}} = await makePlainRequest({
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
    addItemToLs("userId", id);
  } catch (error) {
    console.log(error);
    const errorRes = error.data.response;
    const errors_arr = Object.entries(errorRes.data).map(([key, value]) => {
      return value;
    });

    throw new CustomError("Error Registering User", errors_arr);
  }
};
