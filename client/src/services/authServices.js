import * as HTTPRequest from "./HTTPRequest";

const endpoint = {
  login: "/users/login",
  register: "/users/register",
  logout: "/users/logout",
};

export async function login(email, password) {
  const user = await HTTPRequest.post(endpoint.login, {
    email,
    password,
  });
  return user;
}

export async function create(email, password) {
  const user = await HTTPRequest.post(endpoint.register, {
    email,
    password,
  });

  return user;
}

export async function logout() {
  await HTTPRequest.get(endpoint.logout);
}
