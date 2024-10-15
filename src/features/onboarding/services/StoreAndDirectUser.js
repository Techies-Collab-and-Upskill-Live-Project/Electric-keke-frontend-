import { addItemToLs } from "@/utils/ls";
import { ShowMe } from "./ShowMe";

export const StoreAndDirectUser = async ({ access, refresh }) => {
  addItemToLs("accessToken", access);
  addItemToLs("refreshToken", refresh);
  try {
    const user = await ShowMe();
    const { role, id } = user;
    addItemToLs("user", user);
    /**
     * When user logins we would want to route then to therir
     * specified page
     */
    return role === "User"
      ? "/"
      : role === "Rider"
      ? `/driver/${id}`
      : "/admin";
  } catch (error) {
    console.log(error);
    throw new Error("Error Directing User");
  }
};