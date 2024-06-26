import React, { createContext, useState } from "react";
import { getUserData } from "../utils/utils";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const checkUser = getUserData();
  if (userData === null) {
    if (checkUser) {
      setUserData(checkUser);
    }
  }
  const adminEmail = "admin@abv.bg";
  return (
    <UserContext.Provider
      value={{ userData, setUserData, isAdmin: userData?.email === adminEmail }}
    >
      {children}
    </UserContext.Provider>
  );
};
