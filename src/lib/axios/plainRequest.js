import axios from "axios";
import { base_url } from "@/constants/uri";
import CustomError from "@/services/custom-error/CustomError";

const plainRequest = axios.create({
  baseURL: base_url,
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
