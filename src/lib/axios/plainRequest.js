import axios from "axios";
import CustomError from "@/services/custom-error/CustomError";

const plainRequest = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL
});

const makePlainRequest = async ({ ...reqOpts }) => {
  const onSuccess = (res) => res;
  const onError = (err) => {
    throw new CustomError("Error ", { ...err });
  };
  return plainRequest(reqOpts).then(onSuccess).catch(onError);
};

export default makePlainRequest;
