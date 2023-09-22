export interface Urls  {
  raw: string;
  regular: string;
  small: string;
  thumb: string;
}

export default interface Image  {
  urls: Urls
  alt_description: string;
}
