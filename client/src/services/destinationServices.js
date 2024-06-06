import * as destinationServices from "./HTTPRequest";

const baseUrl = "http://localhost:3030/jsonstore/destinations";

export const getAll = async () => {
  const result = await destinationServices.get(baseUrl);
  return Object.values(result);
};

export const getById = async (id) => {
  const result = await destinationServices.get(baseUrl + "/" + id);
  return result;
};

export const create = async (data) => {
  const result = await destinationServices.post(baseUrl, data);
  console.log(result);
};

export const update = async (data, id) => {
  let result = await destinationServices.put(baseUrl + id, data);
  console.log(result);
};

export const dleteById = async (id) => {
  const result = await destinationServices.remove(baseUrl + id);
};
