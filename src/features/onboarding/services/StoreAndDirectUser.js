import { addItemToLs } from "@/utils/ls";
import { ShowMe } from "./ShowMe";

export const StoreAndDirectUser = async ({ access, refresh }, resetUser) => {
  addItemToLs("accessToken", access);
  addItemToLs("refreshToken", refresh);
  try {
    const user = await ShowMe();
    resetUser(user)
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
    throw new Error("Error Directing User");
  }
};