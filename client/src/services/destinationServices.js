import * as destinationServices from "./HTTPRequest";

const baseUrl = "http://localhost:3030/jsonstore/destinations";

export const getAll = async () => {
  const result = await destinationServices.get(baseUrl);
  return Object.values(result);
};

export const create = async (data) => {
  const result = await destinationServices.post(baseUrl, data);
  console.log(result);
};
