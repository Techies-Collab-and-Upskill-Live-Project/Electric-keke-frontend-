import { useNavigate } from "react-router-dom";
import { addItemToLs, deletItemFromLs, getItemFromLs } from "../utils/ls";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(
    getItemFromLs("isAuthenticated") || false
  );

  const AuthenticateLogin = () => {
    addItemToLs("isAuthenticated", true);
    setIsAuthenticated(true);
  };

  const AuthenticateLogout = () => {
    deletItemFromLs("isAuthenticated");
    setIsAuthenticated(false);
    navigate("/");
  };


  return (
    <AuthContext.Provider
      value={{ isAuthenticated, AuthenticateLogin, AuthenticateLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useGlobalAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("No auth context");
  }
  return context;
};

export { useGlobalAuthContext, AuthProvider };
