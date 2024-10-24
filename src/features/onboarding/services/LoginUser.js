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
    throw new Error(error.message);
  }
};
