import { useContext } from "react";
import { Navigate } from "react-router-dom";

import { AppContext } from "../Context/AppContext";
import { HelpState } from "../Context/PostData";

function PrivateRoute({ children }) {
  const { isAuth } = useContext(AppContext);
  const { user } = HelpState();

  if (!isAuth && !user) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default PrivateRoute;
