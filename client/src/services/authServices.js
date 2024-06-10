import { clearUserData, setUserData } from "../utils/utils";
import * as HTTPRequest from "./HTTPRequest";

const endpoint = {
  login: "/users/login",
  register: "/users/register",
  logout: "/users/logout",
};

//delete after check
const host = "http://localhost:3030";

export async function login(email, password) {
  const user = await HTTPRequest.post(host + endpoint.login, {
    email,
    password,
  });
  setUserData(user);
  return user;
}

export async function create(email, password) {
  const user = await HTTPRequest.post(host + endpoint.register, {
    email,
    password,
  });
  setUserData(user);
  return user;
}

export async function logout() {
  clearUserData();
  await HTTPRequest.get(endpoint.logout);
}
