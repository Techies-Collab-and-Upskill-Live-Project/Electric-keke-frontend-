import makePlainRequest from "@/lib/axios/plainRequest";
import { StoreAndDirectUser } from "./StoreAndDirectUser";

export const LoginUser = async ({ username, password }) => {
  console.log(username);
  try {
    console.log("start");
    const { data } = await makePlainRequest({
      url: "/auth/token/",
      method: "post",
      data: {
        username,
        password,
      },
    });
    console.log(data);
    console.log("i reached here");
    const direction = await StoreAndDirectUser(data);
    return direction;
  } catch (error) {
    throw new Error(error.message);
  }
};
