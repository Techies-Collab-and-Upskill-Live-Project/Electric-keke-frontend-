import { clearLs, getItemFromLs } from "@/utils/ls";
import axios from "axios";

const RefreshAccess = async () => {
  const oldRefreshToken = getItemFromLs("refreshToken");
  console.log(oldRefreshToken);
  try {
    const { data } = await axios.post("/auth/token/refresh/", {
      refresh: oldRefreshToken,
    });
    console.log(data, "refreshing");
    return data;
  } catch (error) {
    console.log(error);
    clearLs();
    window.location = "/";
    throw new Error("error getting refreshing");
  }
};

export default RefreshAccess;
