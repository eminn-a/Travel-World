import * as destinationServices from "./HTTPRequest";

const baseUrl = "http://localhost:3030/jsonstore/destinations";

const endpoints = {
  recent: "/data/laptops?sortBy=_createdOn%20desc&distinct=category",
  all: "/data/laptops?sortBy=_createdOn%20des",
  getLatest: (number) => {
    return `/data/laptops?sortBy=_createdOn%20des&pageSize=${number}`;
  },
  create: "/data/laptops",
  byId: "/data/laptops/",
  deleteById: "/data/laptops/",
  update: "/data/laptops/",
};

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
