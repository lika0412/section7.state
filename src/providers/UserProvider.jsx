import React, { createContext } from "react";

export const userContext = createContext({});

export const UserProvider = (props) => {
  const { children } = props;
  const conextName = "HI!!";
  return (
    <userContext.Provider value={{ conextName }}>
      {children}
    </userContext.Provider>
  );
};
