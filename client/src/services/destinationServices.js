import * as destinationServices from "./HTTPRequest";

const baseUrl = "http://localhost:3030/data/destinations";

const endpoints = {
  all: "/data/destinations?sortBy=_createdOn%20des",
  getLatest: (number) => {
    return `/data/destinations?sortBy=_createdOn%20des&pageSize=${number}`;
  },
  create: "/data/destinations",
  byId: "/data/destinations/",
  deleteById: "/data/destinations/",
  update: "/data/destinations/",
};

export const getLatest = async (number) => {
  const result = await destinationServices.get(endpoints.getLatest(number));
  return result;
};

export const getAll = async () => {
  const result = await destinationServices.get(endpoints.all);
  return Object.values(result);
};

export const getById = async (id) => {
  const result = await destinationServices.get(endpoints.byId + id);
  return result;
};

export const create = async (data) => {
  const result = await destinationServices.post(endpoints.create, data);
};

export const update = async (data, id) => {
  let result = await destinationServices.put(endpoints.update + id, data);
};

export const deleteById = async (id) => {
  const result = await destinationServices.remove(endpoints.deleteById + id);
};
