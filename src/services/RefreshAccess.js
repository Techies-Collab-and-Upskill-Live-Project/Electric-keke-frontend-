import { clearLs, getItemFromLs } from "@/utils/ls";
import axios from "axios";

const RefreshAccess = async () => {
  const oldRefreshToken = getItemFromLs("refreshToken");
  try {
    const { data } = await axios.post("/auth/token/refresh/", {
      refresh: oldRefreshToken,
    });
    return data;
  } catch (error) {
    clearLs();
    window.location = "/";
    throw new Error("error getting refreshing");
  }
};

export default RefreshAccess;
