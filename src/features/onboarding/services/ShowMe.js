import { clientRequest } from "@/lib/axios/client";

export const ShowMe = async () => {
  try {
    const { data } = await clientRequest({
      url: "/auth/auth-user/",
    });
    return data;
  } catch (error) {
    throw new Error("Error Showing User");
  }
};