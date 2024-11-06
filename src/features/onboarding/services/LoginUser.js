import makePlainRequest from "@/lib/axios/plainRequest";
import { StoreAndDirectUser } from "./StoreAndDirectUser";

export const LoginUser = async ({ username, password, resetUser }) => {
  try {
    const { data } = await makePlainRequest({
      url: "/auth/token/",
      method: "post",
      data: {
        username,
        password,
      },
    });
    const direction = await StoreAndDirectUser(data, resetUser);
    return direction;
  } catch (error) {
    console.log(error)
    let msg = error.data.response?.data.detail
    throw new Error(msg ? msg : 'Error Logging in');
  }
};
