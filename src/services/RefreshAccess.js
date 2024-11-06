import { clearLs, getItemFromLs } from "@/utils/ls";
import axios from "axios";

const VITE_BASE_URL = import.meta.env.VITE_BASE_URL

const RefreshAccess = async () => {
  const oldRefreshToken = getItemFromLs("refreshToken");
  try {
    const { data } = await axios.post(`${VITE_BASE_URL}/auth/token/refresh/`, {
      refresh: oldRefreshToken,
    });
    return data;
  } catch (error) {
    console.log(error);
    clearLs();
    window.location = "/";
    throw new Error("error getting refreshing");
  }
};

export default RefreshAccess;
