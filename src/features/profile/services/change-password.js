import { clientRequest } from "@/lib/axios/client";

export const ChangePassword = async (params, showAlert) => {
  try {
    const {
      data: { detail },
    } = await clientRequest({
      url: "/auth/change-password/",
      method: "put",
      data: params,
    });
    showAlert(detail)
  } catch (error) {
    console.log(error);
  }
};
