export interface Urls  {
  raw: string;
  regular: string;
  small: string;
  thumb: string;
}

export interface Image  {
  urls: Urls
  alt_description: string;
}

export interface ImageApiResponse  {
  results: Image[];
}