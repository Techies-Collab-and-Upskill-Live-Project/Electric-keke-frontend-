import { createContext, useContext, useState } from "react";

const TransactContext = createContext(null);

export const TransactProvider = ({ children }) => {
  const [transactionForm, setTransactionForm] = useState({
    number: "number",
    expiry: "expiry",
    cvv: "cvv",
    name: "name",
    region: "region",
    save_data: true,
  });

  const handleChange = (e) => {
    const { type, name, value } = e.target;
    setTransactionForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? !prev.save_data : value,
    }));
  };

  return (
    <TransactContext.Provider value={{ transactionForm, handleChange }}>
      {children}
    </TransactContext.Provider>
  );
};

export const useGlobalTransactContext = () => {
  const context = useContext(TransactContext);
  if (!context) throw new Error("no context");
  return context;
};
