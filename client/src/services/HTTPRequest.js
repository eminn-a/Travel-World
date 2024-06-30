import toast from "react-hot-toast";

import { clearUserData, getAccessToken } from "../utils/utils";

const host = "https://travel-world-server-alpha.vercel.app/";

const HTTPRequest = async (method, url, data) => {
  const options = {
    method,
    headers: {},
  };

  const token = getAccessToken();

  if (token) {
    options.headers["X-Authorization"] = token;
  }
  if (data) {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(data);
  }
  try {
    const response = await fetch(host + url, options);

    if (response.ok != true) {
      if (response.status == 403 || response.status == 401) {
        clearUserData();
      }
      if (response.status == 401) {
        location.reload();
        clearUserData();
      }
      const error = await response.json();
      throw new Error(error.message);
    }
    if (response.status == 204) {
      return response;
    } else {
      return response.json();
    }
  } catch (error) {
    toast.error(error.message);
    // throw error;
  }
};

// PARTIAL APPLICATION

export const get = HTTPRequest.bind(null, "GET");
export const post = HTTPRequest.bind(null, "POST");
export const put = HTTPRequest.bind(null, "PUT");
export const remove = HTTPRequest.bind(null, "DELETE");
export const patch = HTTPRequest.bind(null, "PATCH");
