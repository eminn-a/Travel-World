import toast from "react-hot-toast";

const host = "http://localhost:3030/jsonstore/destinations";

const HTTPRequest = async (method, url, data) => {
  const options = {
    method,
    headers: {},
  };

  if (data) {
    options.headers["Content-Type"] = "appliccation/json";
    options.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(url, options);

    if (response.ok != true) {
      if (response.status == 403) {
        // clearUserData();
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
    throw error;
  }
};

// PARTIAL APPLICATION

export const get = HTTPRequest.bind(null, "GET");
export const post = HTTPRequest.bind(null, "POST");
export const put = HTTPRequest.bind(null, "PUT");
export const remove = HTTPRequest.bind(null, "DELETE");
export const patch = HTTPRequest.bind(null, "PATCH");
