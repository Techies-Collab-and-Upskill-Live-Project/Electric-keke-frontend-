import { clientRequest } from "@/lib/axios/client";
import CustomError from "@/services/custom-error/CustomError";

export const DeleteAccount = async () => {
  try {
    const data = await clientRequest({
      url: "/auth/delete-account/",
      method: "delete",
    });
    console.log(
      data,
      "llllllllllllllllllllllllllllllllllllllllllllllllllllllllll"
    );

    clearLs();
    return data;
  } catch (error) {
    console.log(error);
    throw new CustomError("Error Deleting Account", {
      why: "now",
    });
  }
};