import axios from "axios";
import CustomError from "@/services/custom-error/CustomError";

const plainRequest = axios.create({
  baseURL: process.env.BASE_URL
});

const makePlainRequest = async ({ ...reqOpts }) => {
  console.log(reqOpts);
  const onSuccess = (res) => res;
  const onError = (err) => {
    throw new CustomError("Error ", { ...err });
  };
  return plainRequest(reqOpts).then(onSuccess).catch(onError);
};

export default makePlainRequest;
