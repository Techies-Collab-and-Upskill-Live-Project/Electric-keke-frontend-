import { createContext, useContext, useState } from "react";

const AdminContext = createContext(null);

export const AdminProvider = ({ children }) => {
  const [currentAdminPage, setCurrentAdminPage] = useState("Overview");

  return (
    <AdminContext.Provider
      value={{
        currentAdminPage,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useGlobalAdminContext = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error("no context");
  }
  return context;
};
