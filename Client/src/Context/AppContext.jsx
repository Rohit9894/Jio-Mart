import React, { createContext, useState } from "react";

import { HelpState } from "./PostData";
import { Navigate, useNavigate } from "react-router-dom";
export const AppContext = createContext();
function AppContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const { setUser } = HelpState();
  const navigate = useNavigate();
  function userLogin() {
    setIsAuth(true);
    let data = JSON.parse(localStorage.getItem("details"));
    setUser(data);
  }
  function userLogout() {
    setIsAuth(false);
    window.localStorage.clear();
    navigate("/");
  }
  return (
    <div>
      <AppContext.Provider value={{ isAuth, userLogin, userLogout }}>
        {children}
      </AppContext.Provider>
    </div>
  );
}

export default AppContextProvider;
