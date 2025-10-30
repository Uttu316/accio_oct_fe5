import { API_DOMAIN } from "./apiConstants";

export const api = async (config) => {
  const { endpoint } = config;

  const URL = API_DOMAIN + endpoint;

  const res = await fetch(URL);
  const data = await res.json();
  return data;
};
