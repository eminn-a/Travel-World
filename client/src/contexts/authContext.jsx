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

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};
