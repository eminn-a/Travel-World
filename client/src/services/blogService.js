import * as blogsServices from "./HTTPRequest";

const endpoints = {
  all: "/data/blogs?sortBy=_createdOn%20des",
  getLatest: (number) => {
    return `/data/blogs?limit=${number}`;
  },
  create: "/data/blogs",
  byId: "/data/blogs/",
  deleteById: "/data/blogs/",
  update: "/data/blogs/",
};

export const getLatest = async (number) => {
  const result = await blogsServices.get(endpoints.getLatest(number));
  return result;
};

export const getAll = async () => {
  const result = await blogsServices.get(endpoints.all);
  return Object.values(result);
};

export const getById = async (id) => {
  const result = await blogsServices.get(endpoints.byId + id);
  return result;
};

export const create = async (data) => {
  const result = await blogsServices.post(endpoints.create, data);
};

export const update = async (data, id) => {
  let result = await blogsServices.put(endpoints.update + id, data);
};

export const deleteById = async (id) => {
  const result = await blogsServices.remove(endpoints.deleteById + id);
};
