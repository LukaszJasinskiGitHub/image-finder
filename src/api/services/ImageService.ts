import { ImageApiResponse } from "../../Interfaces";
import { axiosApi } from "../axios";
import { routes } from "../routes";

const getImage = async (topic: string) => {
  const response = await axiosApi.get<ImageApiResponse>(routes.IMAGE(topic));
  return response.data;
};

export {
  getImage
};
