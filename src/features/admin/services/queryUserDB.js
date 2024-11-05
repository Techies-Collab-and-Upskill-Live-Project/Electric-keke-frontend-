import { clientRequest } from "@/lib/axios/client";
import CustomError from "@/services/custom-error/CustomError";

import { buildQueryString } from "@/utils/build-query";

export const queryUserDB = async (params) => {
  const queryString = buildQueryString(params);
  try {
    const { data } = await clientRequest({
      url: `/admin/users/${queryString}`,
      method: "get",
    });
    return data;
  } catch (error) {
    throw new CustomError("error quering db");
  }
};
