const HTTPRequest = async (method, url, data) => {
  const options = {
    method,
    headers: {},
  };

  if (data) {
    options.headers["Content-Type"] = "appliccation/json";
    options.body = JSON.stringify(data);
  }

  const response = await fetch(url, options);

  const result = await response.json();
  return result;
};

// PARTIAL APPLICATION

export const get = HTTPRequest.bind(null, "GET");
export const post = HTTPRequest.bind(null, "POST");
export const put = HTTPRequest.bind(null, "PUT");
export const remove = HTTPRequest.bind(null, "DELETE");
export const patch = HTTPRequest.bind(null, "PATCH");
