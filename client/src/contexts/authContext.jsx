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
  const adminId = "60f0cf0b-34b0-4abd-9769-8c42f830dffc";
  return (
    <UserContext.Provider
      value={{ userData, setUserData, isAdmin: userData?._id === adminId }}
    >
      {children}
    </UserContext.Provider>
  );
};
