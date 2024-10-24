import makePlainRequest from "@/lib/axios/plainRequest";
import { StoreAndDirectUser } from "./StoreAndDirectUser";

export const LoginUser = async ({ username, password }) => {
  try {
    const { data } = await makePlainRequest({
      url: "/auth/token/",
      method: "post",
      data: {
        username,
        password,
      },
    });
    const direction = await StoreAndDirectUser(data);
    return direction;
  } catch (error) {
    let msg = error.data.response?.data.detail
    throw new Error(msg ? msg : 'Error Logging in');
  }
};
