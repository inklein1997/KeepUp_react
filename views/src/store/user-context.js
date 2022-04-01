import React, { useState } from "react";

export const UserContext = React.createContext();

const UserContextProvider = (props) => {
  const [user, setUser] = useState({
    id: null,
    first_name: null,
    last_name: null,
    email: null,
  });

  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
