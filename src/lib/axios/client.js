import axios from "axios";
import {
  addItemToLs,
  getItemFromLs,
} from "../../utils/ls";
import isTokenValid from "../../services/checkJwtValidity";
import CustomError from "../../services/custom-error/CustomError";
import RefreshAccess from "@/services/RefreshAccess";

const client = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL
});


client.interceptors.request.use(
  async (req) => {
    const accessToken = getItemFromLs("accessToken");
    if (accessToken) {
      const tokenValidity = isTokenValid(accessToken);
      console.log(tokenValidity);
    }
    return req;
  },
  (err) => Promise.reject(err)
);

export const clientRequest = async ({ ...options }) => {
  console.log(options);

  // console.log("i reached here");
  const accessToken = getItemFromLs("accessToken");
  if (accessToken) {
    console.log("we have access token");
    client.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  }
  // console.log("after the access");

  const onSuccess = (res) => {
    return res;
  };

  const onError = async (err) => {
    console.log(err);
    const originalRequest = err.config;
    const status = err.response.status;

    if (status === 401 && !originalRequest._retry) {
      console.log("access token expired");
      originalRequest._retry = true;

      try {
        const { access: accessToken, refresh: refreshToken } =
          await RefreshAccess();

        addItemToLs("accessToken", accessToken);
        addItemToLs("refreshToken", refreshToken);

        // update the request
        console.log("hase been refresh");
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return client(originalRequest)
          .then(onSuccess)
          .catch((err) => {
            console.log(err);
            // throws an error if the new request fails to go back to login
            throw new CustomError("Error retry", {
              status,
              code: 3,
            });
          });
      } catch (error) {
        console.log(error);
        // clearLs();

        return Promise.reject(err);
      }
    }

    if (status === 500) {
      console.log(err, "5000000");
      throw new CustomError("Internal Server Error", {
        status,
      });
    }

    throw new CustomError("request error", { ...err });
  };
  return client(options).then(onSuccess).catch(onError);
};
