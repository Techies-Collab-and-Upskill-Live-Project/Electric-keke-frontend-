import { useNavigate } from "react-router-dom";
import { addItemToLs, deletItemFromLs, getItemFromLs } from "../utils/ls";
import { createContext, useCallback, useContext, useState } from "react";
import { useCurrentUser } from "@/hooks/useCurrentUser";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [isAuthenticated, setIsAuthenticated] = useState(
    getItemFromLs("isAuthenticated") || false
  );

  const { user, resetUser } = useCurrentUser();

  const AuthenticateLogin = () => {
    addItemToLs("isAuthenticated", true);
    deletItemFromLs("form-data");
    setIsAuthenticated(true);
  };

  const AuthenticateLogout = () => {
    deletItemFromLs("isAuthenticated");
    setIsAuthenticated(false);
    navigate("/");
  };

  const EvaluateAuthentication = () => {
    const authenticated = getItemFromLs("isAuthenticated");
    if (!authenticated) {
      navigate("/");
    }
  };

  const [profileFormData, setProfileFormData] = useState({
    fullname: user?.fullname,
    email: user?.email,
    phone: user?.phone_number,
    avatar_url: user?.avatar,
    address: user?.address,
    state: user?.state_of_residence,
  });

  const handleChange = useCallback(
    (e) => {
      const { name: key, value } = e.target;
      setProfileFormData((prev) => ({ ...prev, [key]: value }));
    },
    [user]
  );

  return (
    <AuthContext.Provider
      value={{
        AuthenticateLogin,
        AuthenticateLogout,
        EvaluateAuthentication,
        isAuthenticated,
        resetUser,
        user,
        profileFormData,
        setProfileFormData,
        handleChange,
      }}
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
