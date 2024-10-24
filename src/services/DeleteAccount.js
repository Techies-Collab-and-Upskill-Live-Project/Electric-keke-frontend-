import { clientRequest } from "@/lib/axios/client";
import CustomError from "@/services/custom-error/CustomError";

export const DeleteAccount = async () => {
  try {
    const data = await clientRequest({
      url: "/auth/delete-account/",
      method: "delete",
    });

    clearLs();
    return data;
  } catch (error) {
    throw new CustomError("Error Deleting Account", {
      why: "now",
    });
  }
};