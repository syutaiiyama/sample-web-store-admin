import { TUser } from "./user.type";
import React, { createContext, useContext } from "react";
import { userOperations } from "./user.operations";

type ContextProps = {
  users: Array<TUser>;
  fetchUser: () => void;
};

const UserContext = createContext({} as ContextProps);

export const UserProvider: React.FC = ({ children }) => {
  const operations = userOperations();

  return (
    <UserContext.Provider value={operations}>{children}</UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
