import makePlainRequest from "@/lib/axios/plainRequest";

export const ResetPassword = async ({ ...resetData }) => {
  try {
    const { data } = await makePlainRequest({
      url: "/auth/reset-password/",
      method: "post",
      data: resetData,
    });
    return data;
  } catch (error) {
    throw new Error("Error resetting password from the back");
  }
};