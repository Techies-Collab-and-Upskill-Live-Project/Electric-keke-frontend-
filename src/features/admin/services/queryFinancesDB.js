import CustomError from "@/services/custom-error/CustomError";
import { clientRequest } from "@/lib/axios/client";
import { buildQueryString } from "@/utils/build-query";

export const queryFinancesDB = async (params) => {
  const queryString = buildQueryString(params);

  try {
    const { data } = await clientRequest({
      url: `/admin/earnings/${queryString}`,
      method: "get",
    });
    return data;
  } catch (error) {
    throw new CustomError("error querying finances");
  }
};
