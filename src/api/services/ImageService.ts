import { Image } from "../../Interfaces";
import { axiosApi } from "../axios";
import { routes } from "../routes";

const getImage = async (topic: string) => {
  const response = await axiosApi.get<Image>(routes.IMAGE(topic));
  return response.data;
};

export {
  getImage
};
