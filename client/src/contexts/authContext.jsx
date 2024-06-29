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
  const adminId = "66805ae2784f6d2069fbbdd0";
  return (
    <UserContext.Provider
      value={{ userData, setUserData, isAdmin: userData?._id === adminId }}
    >
      {children}
    </UserContext.Provider>
  );
};
