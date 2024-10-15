import { createContext, useContext, useState } from "react";

const AdminContext = createContext(null);

export const AdminProvider = ({ children }) => {
  const [currentAdminPage, setCurrentAdminPage] = useState("Overview");
  const [contentsToDisplay, setContentsToDisplay] = useState("All");

  const changeContentToDisplay = (content) =>
    setContentsToDisplay((prev) => (prev === content ? "All" : content));

  return (
    <AdminContext.Provider
      value={{
        currentAdminPage,
        contentsToDisplay,
        setCurrentAdminPage,
        changeContentToDisplay,
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
