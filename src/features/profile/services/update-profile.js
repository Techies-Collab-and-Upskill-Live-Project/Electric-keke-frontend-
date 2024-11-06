import { ShowMe } from "@/features/onboarding/services/ShowMe";
import { clientRequest } from "@/lib/axios/client";
import { addItemToLs } from "@/utils/ls";

export const UpdateProfile = async (params, showAlert, resetUser) => {
  try {
    await clientRequest({
      url: "/auth/profile/",
      method: "put",
      data: params,
    });
    showAlert('sucesssfull updated profile');
    const response = await ShowMe();
    // console.log(response)
    addItemToLs('user', response)
    resetUser(response)
  } catch (error) {
    console.log(error);
  }
};
