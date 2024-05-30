import { HTTPRequest } from "./HTTPRequest";

const baseUrl = "http://localhost:3030/jsonstore/destinations";

export const getAll = async () => {
  const result = await HTTPRequest("GET", baseUrl);
  console.log(result);
  return Object.values(result);
};

export const createDestination = async (data) => {
  const response = fetch(baseUrl, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  return result;
};
