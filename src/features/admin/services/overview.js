import { clientRequest } from "@/lib/axios/client";
import CustomError from "@/services/custom-error/CustomError";

export const DashboardOverview = async () => {
  try {
    const {data} = await clientRequest({
      url: "/admin/dashboard-overview/",
      method: "get",
    });
    return data;
  } catch (error) {
    throw new CustomError('error getting overview')
  }
};
