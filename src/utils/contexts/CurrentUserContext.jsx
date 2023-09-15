import React, { createContext, useState } from "react";

const CurrentUserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const addCurrentUser = (tempUser) => {
    setUser(tempUser);
  };

  return (
    <CurrentUserContext.Provider value={{ user, addCurrentUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export { CurrentUserContext, UserProvider };
